// src/modules/transaction/transaction.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionEntity } from './entities/transaction.entity';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { ListTransactionDto } from './dto/list-transaction.dto';
import { TransactionStatus } from './entities/transaction.entity'; // ถ้ายังไม่ได้ import ให้เพิ่มบรรทัดนี้

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(TransactionEntity)
    private readonly transactionRepository: Repository<TransactionEntity>,
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

async update(id: string, checkStatus: 'OK' | 'NG') {
    const trx = await this.transactionRepository.findOne({ where: { id } })
    if (!trx) {
      throw new NotFoundException('Transaction not found')
    }

    console.log('before update => ', trx.status, trx.checkStatus)

    trx.status = TransactionStatus.INBOUND
    trx.checkStatus = checkStatus

    const saved = await this.transactionRepository.save(trx)

    console.log('after update => ', saved.status, saved.checkStatus)

    return saved
  }

  async updateAllHold(checkStatus: 'OK' | 'NG') {
    const updated = await this.transactionRepository
      .createQueryBuilder()
      .update(TransactionEntity)
      .set({
        status: TransactionStatus.INBOUND,
        checkStatus: checkStatus,
      })
      .where('status = :status', { status: TransactionStatus.HOLD })
      .execute()

    return { updated: updated.affected }
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
    .orderBy('t.createdAt', 'DESC');

  // ⭐ เงื่อนไขหลักของ listNg
  qb.andWhere('t.status = :status', { status: TransactionStatus.INBOUND });
  qb.andWhere('t.checkStatus = :checkStatus', { checkStatus: 'NG' });


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
    items
  };
}

}
