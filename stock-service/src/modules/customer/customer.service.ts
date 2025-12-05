import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEntity } from './entities/customer.entity';
import { FindManyOptions, FindOneOptions, Like, Repository } from 'typeorm';
import { isEmpty, omit } from 'lodash';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerEntity)
    private customerRepository: Repository<CustomerEntity>,
  ) {}
  async create(createCustomerDto: CreateCustomerDto): Promise<CustomerEntity> {
    const customer = await this.customerRepository.findOne({
      where: [
        {
          customerName: createCustomerDto.customerName,
        },
        {
          customerNo: createCustomerDto.customerNo,
        },
      ],
    });
    if (!isEmpty(customer)) {
      throw new HttpException('Dupplicate customer', HttpStatus.BAD_REQUEST);
    }
    const newCustomer = await this.customerRepository.create(createCustomerDto);
    await this.customerRepository.save(newCustomer);
    return newCustomer;
  }

  async update(updateCustomerDto: UpdateCustomerDto): Promise<CustomerEntity> {
    const { id, customerNo } = updateCustomerDto;
    if (!id) {
      throw new HttpException('Not found id', HttpStatus.BAD_REQUEST);
    }
    const customer = await this.customerRepository.findOne({
      where: {
        id: id,
      },
    });
    if (isEmpty(customer)) {
      throw new HttpException('Not found Customer', HttpStatus.BAD_REQUEST);
    }
    if (customerNo) {
      const isDupCustomer = await this.customerRepository.findOne({
        where: { customerNo },
      });
      if (!isEmpty(isDupCustomer)) {
        throw new HttpException('Dupplicate customer', HttpStatus.BAD_REQUEST);
      }
    }
    await this.customerRepository.update(customer.id, {
      ...omit(updateCustomerDto, ['id']),
    });
    return this.customerRepository.findOne({
      where: {
        id: customer.id,
      },
    });
  }

  async findOneByOption(options: FindOneOptions): Promise<CustomerEntity> {
    return this.customerRepository.findOne(options);
  }

  async findByOption(options: FindManyOptions): Promise<CustomerEntity[]> {
    return this.customerRepository.find(options);
  }

  async findAll({
    limit = 10,
    offset = 0,
    customerName,
    customerNo,
    customerType,
  }: {
    limit: number;
    offset: number;
    customerName?: string;
    customerNo?: string;
    customerType?: string;
  }): Promise<{ items: CustomerEntity[]; total: number }> {
    const findOption: FindManyOptions<CustomerEntity> = {
      take: limit,
      skip: offset,
      where: {
        customerName: customerName ? Like(`%${customerName}%`) : null,
        customerNo: customerNo ? Like(`%${customerNo}%`) : null,
      },
      order: {
        createdAt: 'desc',
      },
    };
    const items = await this.customerRepository.find(findOption);
    const total = await this.customerRepository.count(findOption);
    return {
      items,
      total,
    };
  }

  findOne(uuid: string): Promise<CustomerEntity> {
    return this.customerRepository.findOne({
      where: {
        id: uuid,
      },
    });
  }

  async remove(id: string): Promise<{ success: boolean }> {
    try {
      const customer = await this.customerRepository.findOne({
        where: {
          id,
        },
      });
      if (!customer) {
        throw new HttpException('Not found customer', HttpStatus.BAD_REQUEST);
      }
      await this.customerRepository.softRemove(customer);
      return {
        success: true,
      };
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }
}
