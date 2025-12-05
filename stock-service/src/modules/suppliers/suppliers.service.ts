import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SupplierEntity } from './entities/supplier.entity';
import { FindManyOptions, Like, Repository } from 'typeorm';
import { isEmpty, map, omit } from 'lodash';
import { UpdateSupplierDto } from './dto/update-supplier.dto';

@Injectable()
export class SuppliersService {
  constructor(
    @InjectRepository(SupplierEntity)
    private supplierRepository: Repository<SupplierEntity>,
  ) {}
  async create(createSupplierDto: CreateSupplierDto): Promise<SupplierEntity> {
    const supplier = await this.supplierRepository.findOne({
      where: [
        {
          supplierName: createSupplierDto.supplierName,
        },
        {
          supplierNo: createSupplierDto.supplierNo,
        },
      ],
    });
    if (!isEmpty(supplier)) {
      throw new HttpException('Dupplicate supplier', HttpStatus.BAD_REQUEST);
    }
    const newSupplier = await this.supplierRepository.create(createSupplierDto);
    await this.supplierRepository.save(newSupplier);
    return newSupplier;
  }

  async update(updateSupplierDto: UpdateSupplierDto): Promise<SupplierEntity> {
    const { id, supplierNo } = updateSupplierDto;
    if (!id) {
      throw new HttpException('Not found id', HttpStatus.BAD_REQUEST);
    }
    const supplier = await this.supplierRepository.findOne({
      where: {
        id,
      },
    });
    if (isEmpty(supplier)) {
      throw new HttpException('Not found Supplier', HttpStatus.BAD_REQUEST);
    }
    if (supplierNo) {
      const isDupSupplier = await this.supplierRepository.findOne({
        where: {
          supplierNo,
        },
      });
      if (!isEmpty(isDupSupplier)) {
        throw new HttpException('Duplicate supplier', HttpStatus.BAD_REQUEST);
      }
    }
    await this.supplierRepository.update(supplier.id, {
      ...omit(updateSupplierDto, ['id']),
    });
    return this.supplierRepository.findOne({
      where: {
        id: supplier.id,
      },
    });
  }

  async findAll({
    limit = 10,
    offset = 0,
    supplierName,
    supplierNo,
  }: {
    limit: number;
    offset: number;
    supplierName?: string;
    supplierNo?: string;
  }): Promise<{ items: SupplierEntity[]; total: number }> {
    const findOption: FindManyOptions<SupplierEntity> = {
      take: limit,
      skip: offset,
      where: {
        supplierName: supplierName ? Like(`%${supplierName}%`) : null,
        supplierNo: supplierNo ? Like(`%${supplierNo}%`) : null,
      },
      order: {
        createdAt: 'DESC',
      },
    };
    const items = await this.supplierRepository.find(findOption);
    const total = await this.supplierRepository.count(findOption);
    return {
      items,
      total,
    };
  }

  async findOneBySupplierName(name: string): Promise<SupplierEntity> {
    return this.supplierRepository.findOne({
      where: {
        supplierName: name,
      },
    });
  }

  async findOne(uuid: string): Promise<SupplierEntity> {
    return this.supplierRepository.findOne({
      where: {
        id: uuid,
      },
    });
  }

  async findPrepareSupplier(): Promise<string[]> {
    const suppliers = await this.supplierRepository.find();
    if (isEmpty(suppliers)) {
      return [];
    }
    return map(suppliers, (item) => item.supplierName);
  }

  async remove(id: string): Promise<{ success: boolean }> {
    try {
      const supplier = await this.supplierRepository.findOne({
        where: {
          id,
        },
      });
      if (!supplier) {
        throw new HttpException('Not found supplier', HttpStatus.BAD_REQUEST);
      }
      await this.supplierRepository.softRemove(supplier);
      return {
        success: true,
      };
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }
}
