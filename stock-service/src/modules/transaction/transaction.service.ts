// src/modules/transaction/transaction.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionEntity } from './entities/transaction.entity';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { ListTransactionDto } from './dto/list-transaction.dto';
import { TransactionStatus } from './entities/transaction.entity'; // ถ้ายังไม่ได้ import ให้เพิ่มบรรทัดนี้

import { RawMaterialService } from 'src/modules/raw-material/raw-material.service';
import { UpdateInboundDto } from 'src/modules/raw-material/dto/create-inbound.dto';
@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(TransactionEntity)
    private readonly transactionRepository: Repository<TransactionEntity>,

    private readonly rawMaterialService: RawMaterialService,
  ) { }

  async list(params: ListTransactionDto) {
    const {
      limit = 20,
      offset = 0,
      receipt,
      itemId,
      lotNo,
      type,
      partNo,
      inputPartName,
      date,
    } = params;

    const qb = this.transactionRepository
      .createQueryBuilder('t')
      .leftJoinAndSelect('t.area', 'area')
      .leftJoinAndSelect('t.scanBy', 'scanBy')
      .leftJoin('raw_material_item', 'r', 't.item_id::uuid = r.id')
      .leftJoin('products', 'p', 'r.product_id = p.id')

      .addSelect('p.part_no', 'partNo')
      .addSelect('p.part_name', 'partName')

      // ⭐ SORT LATEST FIRST
      .orderBy('t.createdAt', 'DESC')
      .take(Number(limit))
      .skip(Number(offset));

    // ⭐ FIX: แสดงเฉพาะ HOLD
    qb.andWhere('t.status = :status', { status: 'HOLD' });

    if (receipt) {
      qb.andWhere('t.receipt LIKE :receipt', { receipt: `%${receipt}%` });
    }

    // ⭐ FILTER by RM/WIP/FG/BS
    if (type) {
      qb.andWhere('t.type = :type', { type });
    }

    // ⭐ FILTER by Part No
    if (partNo) {
      qb.andWhere('p.part_no ILIKE :partNo', { partNo: `%${partNo}%` });
    }

    // ⭐ FILTER by Part Name
    if (inputPartName) {
      qb.andWhere('p.part_name ILIKE :partName', { partName: `%${inputPartName}%` });
    }

    // ⭐ FILTER by date (YYYY-MM-DD)
    if (date) {
      qb.andWhere(`DATE(t.createdAt) = :date`, { date });
    }

    // Count total result
    const total = await qb.getCount();

    const { raw, entities } = await qb.getRawAndEntities();

    const items = entities.map((entity, index) => {
      const row = raw[index];
      return {
        ...entity,
        partNo: row.partNo,
        partName: row.partName,
      };
    });

    return {
      items,
      total,
      limit: Number(limit),
      offset: Number(offset),
    };
  }


  async findOne(id: string) {
    const trx = await this.transactionRepository.findOne({
      where: { id },
      relations: ['area', 'scanBy'],
    });
    if (!trx) {
      throw new NotFoundException('Transaction not found');
    }
    return trx;
  }

  async create(dto: CreateTransactionDto, userId: string) {
    const {
      receipt,
      status,
      quantity,
      lotNo,
      itemId,
      price,
      areaId,
      type,
      checkStatus,
    } = dto;

    const entity = this.transactionRepository.create({
      receipt,
      status,
      quantity,
      lotNo,
      itemId,
      price,
      type,
      checkStatus,
      // set relation by id
      area: { id: areaId } as any,
      scanBy: { id: userId } as any,
    });

    const saved = await this.transactionRepository.save(entity);
    return saved;
  }

  // async update(id: string, checkStatus: 'OK' | 'NG') {
  //     const trx = await this.transactionRepository.findOne({ where: { id } })
  //     if (!trx) {
  //       throw new NotFoundException('Transaction not found')
  //     }

  //     console.log('before update => ', trx.status, trx.checkStatus)

  //     trx.status = TransactionStatus.INBOUND
  //     trx.checkStatus = checkStatus

  //     const saved = await this.transactionRepository.save(trx)

  //     console.log('after update => ', saved.status, saved.checkStatus)

  //     return saved
  //   }
  async update(id: string, checkStatus: 'OK' | 'NG', userId: string) {
    // 1) หา transaction ตัวที่เลือกก่อน
    const trx = await this.transactionRepository.findOne({ where: { id } });
    if (!trx) {
      throw new NotFoundException('Transaction not found');
    }

    // 2) ยิง raw query ไปหา receipt / part / stockType ที่ผูกกับ transaction ตัวนี้
    //    ปรับชื่อ table/column ให้ตรงกับ DB จริง (ดูจาก query list ที่คุณใช้ได้)
    const rows = await this.transactionRepository.query(
      `
      SELECT
        r.lot_number      AS "lotNo",
        r.stock_type  AS "stockType",
        p.part_no     AS "partNo",
        rm.receipt_no AS "receiptNo"
      FROM transaction t
      JOIN raw_material_item r ON t.item_id::uuid = r.id
      -- ใช้ r.receipt_no (fk ไปที่ raw_material.id)
      JOIN raw_material rm     ON r.receipt_no = rm.id
      JOIN products p          ON r.product_id = p.id
      WHERE t.id = $1
      `,
      [id],
    );

    if (!rows.length) {
      throw new NotFoundException('Linked receipt item not found');
    }

    const row = rows[0] as {
      lotNo: string;
      stockType: string;
      partNo: string;
      receiptNo: string;
    };

    // 3) ประกอบ DTO ส่งเข้า logic เดิม createInboundST2 ใน RawMaterialService
    const inboundDto: UpdateInboundDto = {
      receiptNo: row.receiptNo,
      partNo: row.partNo,
      lotNo: row.lotNo,
      quantity: Number(trx.quantity),
      userId,
      stockType: row.stockType as any,
      checkStatus,
      area: '',         // ถ้าไม่ใช้ก็ปล่อยว่างได้
    };

    // 4) ใช้ logic เดิมทั้งหมดที่อยู่ใน RawMaterialService
    return this.rawMaterialService.createInboundST2(inboundDto);
  }


  // async updateAllHold(checkStatus: 'OK' | 'NG') {
  //   const updated = await this.transactionRepository
  //     .createQueryBuilder()
  //     .update(TransactionEntity)
  //     .set({
  //       status: TransactionStatus.INBOUND,
  //       checkStatus: checkStatus,
  //     })
  //     .where('status = :status', { status: TransactionStatus.HOLD })
  //     .execute()

  //   return { updated: updated.affected }
  // }

  async updateAllHold(checkStatus: 'OK' | 'NG') {
    // 1) ดึง transaction ทั้งหมดที่เป็น HOLD พร้อม user ที่ scan
    const holdList = await this.transactionRepository.find({
      where: { status: TransactionStatus.HOLD },
      relations: ['scanBy'],    // ต้องมี scanBy ถึงจะรู้ userId
    });

    if (!holdList.length) {
      return { updated: 0 };
    }

    let successCount = 0;

    for (const trx of holdList) {
      try {
        // ถ้า transaction ตัวนี้ไม่มี scanBy ข้ามไป
        if (!trx.scanBy || !trx.scanBy.id) {
          continue;
        }

        // 2) ยิง raw query หาข้อมูลเพิ่ม (receiptNo, partNo, lotNo, stockType)
        const rows = await this.transactionRepository.query(
          `
          SELECT
            r.lot_number      AS "lotNo",
            r.stock_type  AS "stockType",
            p.part_no     AS "partNo",
            rm.receipt_no AS "receiptNo"
          FROM transaction t
          JOIN raw_material_item r ON t.item_id::uuid = r.id
          JOIN raw_material rm     ON r.receipt_no = rm.id
          JOIN products p          ON r.product_id = p.id
          WHERE t.id = $1
        `,
          [trx.id],
        );

        if (!rows.length) {
          continue; // หา raw_material_item ไม่เจอ ข้ามตัวนี้ไป
        }

        const row = rows[0] as {
          lotNo: string;
          stockType: string;
          partNo: string;
          receiptNo: string;
        };

        // 3) ประกอบ DTO แบบเดียวกับ update()
        const inboundDto: UpdateInboundDto = {
          receiptNo: row.receiptNo,
          partNo: row.partNo,
          lotNo: row.lotNo,
          quantity: Number(trx.quantity),
          userId: trx.scanBy.id,              // ใช้คนที่ scan ไว้เดิม
          stockType: row.stockType as any,
          checkStatus,
          area: '',
        };

        // 4) เรียกใช้ logic เดิม createInboundST2
        await this.rawMaterialService.createInboundST2(inboundDto);

        successCount++;
      } catch (err) {
        // ไม่ให้ทั้ง batch พังเพราะตัวเดียว log ไว้แล้วไปตัวต่อไป
        console.error('updateAllHold error for trx', trx.id, err);
      }
    }

    return { updated: successCount };
  }



  async remove(id: string) {
    const trx = await this.transactionRepository.findOne({ where: { id } });
    if (!trx) {
      throw new NotFoundException('Transaction not found');
    }
    await this.transactionRepository.softRemove(trx); // ใช้ DeleteDateColumn
    return { success: true };
  }

  // src/modules/transaction/transaction.service.ts

  async listNg() {
  const qb = this.transactionRepository
    .createQueryBuilder('t')
    .leftJoinAndSelect('t.area', 'area')
    .leftJoinAndSelect('t.scanBy', 'scanBy')
    .leftJoin('raw_material_item', 'r', 't.item_id::uuid = r.id')
    .leftJoin('products', 'p', 'r.product_id = p.id')
    .addSelect('p.part_no', 'partNo')
    .addSelect('p.part_name', 'partName')
    .where('t.status = :status', { status: TransactionStatus.INBOUND })
    .andWhere('t.checkStatus = :checkStatus', { checkStatus: 'NG' })
    .andWhere('r.id IS NOT NULL') // แนะนำ (ถ้าอยากกัน case ไม่มี item)
    .andWhere(`
      NOT EXISTS (
        SELECT 1
        FROM history h
        WHERE h.product_id = r.product_id
          AND h.area_id = r.area_id
          AND h.type = :moveType
      )
    `, { moveType: 'Move' })
    .orderBy('t.createdAt', 'DESC');

  const { raw, entities } = await qb.getRawAndEntities();

  const items = entities.map((entity, index) => ({
    ...entity,
    partNo: raw[index]?.partNo,
    partName: raw[index]?.partName,
  }));

  return { items };
}


}
