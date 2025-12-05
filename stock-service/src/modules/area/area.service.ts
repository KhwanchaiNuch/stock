import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAreaDto } from './dto/create-area.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AreaEntity, AreaStockType } from './entities/area.entity';
import { FindManyOptions, FindOneOptions, Like, Repository } from 'typeorm';
import { isEmpty, omit } from 'lodash';
import { UpdateAreaDto } from './dto/update-area.dto';

@Injectable()
export class AreaService {
  constructor(
    @InjectRepository(AreaEntity)
    private areaRepository: Repository<AreaEntity>,
  ) {}
  async create(createAreaDto: CreateAreaDto): Promise<AreaEntity> {
    const { areaName, areaNo, note, typeOfStock } = createAreaDto;
    const area = await this.areaRepository.findOne({
      where: {
        areaNo,
      },
    });
    if (!isEmpty(area)) {
      throw new HttpException('Dupplicate area', HttpStatus.BAD_REQUEST);
    }
    const newArea = await this.areaRepository.create({
      areaName,
      areaNo,
      note,
      typeOfStock,
    });
    await this.areaRepository.save(newArea);
    return newArea;
  }

  async updateArea(updateAreaDto: UpdateAreaDto) {
    const { id, areaNo } = updateAreaDto;
    if (!id) {
      throw new HttpException('Not found id', HttpStatus.BAD_REQUEST);
    }
    const area = await this.areaRepository.findOne({
      where: {
        id,
      },
    });
    if (isEmpty(area)) {
      throw new HttpException('Not found Area', HttpStatus.BAD_REQUEST);
    }
    if (areaNo) {
      const isDupNumber = await this.areaRepository.findOne({
        where: {
          areaNo,
        },
      });
      if (!isEmpty(isDupNumber)) {
        throw new HttpException('Dupplicated area no.', HttpStatus.BAD_REQUEST);
      }
    }
    await this.areaRepository.update(area.id, {
      ...omit(updateAreaDto, ['id']),
    });
    return this.areaRepository.findOne({ where: { id: area.id } });
  }

  async findAll({
    limit = 10,
    offset = 0,
    areaNo,
    areaName,
    typeOfStock,
  }: {
    limit: number;
    offset: number;
    areaNo?: string;
    areaName?: string;
    typeOfStock?: AreaStockType;
  }): Promise<{ items: AreaEntity[]; total: number }> {
    const findOption: FindManyOptions<AreaEntity> = {
      skip: offset,
      take: limit,
      where: {
        areaNo: areaNo ? Like(`%${areaNo}%`) : null,
        areaName: areaName ? Like(`%${areaName}%`) : null,
        typeOfStock,
      },
      order: {
        createdAt: 'DESC',
      },
    };
    const items = await this.areaRepository.find(findOption);
    const total = await this.areaRepository.count(findOption);
    return {
      items,
      total,
    };
  }

  async findOne(id: string): Promise<AreaEntity> {
    return this.areaRepository.findOne({
      where: {
        id,
      },
    });
  }

  async findOneByOption(options: FindOneOptions): Promise<AreaEntity> {
    return this.areaRepository.findOne(options);
  }

  async findByOption(options: FindManyOptions): Promise<AreaEntity[]> {
    return this.areaRepository.find(options);
  }

  async remove(id: string): Promise<{ success: boolean }> {
    try {
      const area = await this.areaRepository.findOne({
        where: {
          id,
        },
      });
      if (!area) {
        throw new HttpException('Not found area', HttpStatus.BAD_REQUEST);
      }
      await this.areaRepository.softRemove(area);
      return {
        success: true,
      };
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }

  async count() {
    return this.areaRepository.count();
  }
}
