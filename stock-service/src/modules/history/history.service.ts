import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HistoryEntity, OperationType } from './entities/history.entity';
import { FindManyOptions, Repository, In, Like, ILike } from 'typeorm';
import { isEmpty } from 'lodash';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { ProductEntity } from '../product/entities/product.entity';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(HistoryEntity)
    private historyRepository: Repository<HistoryEntity>,
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async updateHistory(updateHistoryDto: UpdateHistoryDto) {
    const { id, note } = updateHistoryDto;
    if (!id) {
      throw new HttpException('Not found id', HttpStatus.BAD_REQUEST);
    }
    const history = await this.historyRepository.findOne({
      where: {
        id,
      },
    });
    if (isEmpty(history)) {
      throw new HttpException('Not found History', HttpStatus.BAD_REQUEST);
    }
    await this.historyRepository.update(history.id, { note: note });
    return this.historyRepository.findOne({ where: { id: history.id } });
  }

  async findAll({
    limit = 10,
    offset = 0,
    type = '',
    partNo = '',
    inputPartName = undefined,
  }: {
    limit: number;
    offset: number;
    type: string;
    partNo: string;
    inputPartName: string;
  }): Promise<{ items: HistoryEntity[]; total: number }> {
    const options: FindManyOptions<HistoryEntity> = {
      relations: ['productId', 'area', 'operator'],
      skip: offset,
      order: {
        createdAt: 'DESC',
      },
    };
    if (limit != 99) {
      options.take = limit;
    }
    if (partNo.length > 0) {
      const productList = await this.productRepository.find({
        where: {
          partNo: Like(`%${partNo}%`),
        },
      });
      const productIdList = await Promise.all(
        await productList.map(async (item) => {
          return item.id;
        }),
      );
      options.where = {
        ...options.where,
        productId: In(productIdList),
      };
    }
    if (type.length > 0 && type !== 'ALL') {
      options.where = {
        ...options.where,
        type:
          type === OperationType.INBOUND
            ? OperationType.INBOUND
            : type === OperationType.OUTBOUND
            ? OperationType.OUTBOUND
            : type === OperationType.INVENTORY
            ? OperationType.INVENTORY
            : OperationType.MOVE,
      };
    }
    if (inputPartName) {
      options.where = {
        ...options.where,
        productId: {
          partName: ILike(`%${inputPartName}%`),
        },
      };
    }
    const items = await this.historyRepository.find(options);
    const total = await this.historyRepository.count(options);
    return {
      items,
      total,
    };
  }
  async count() {
    return this.historyRepository.count();
  }
}
