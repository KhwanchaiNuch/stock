import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpStatus,
  UseGuards,
  Query,
  Put,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller({ version: '1', path: 'customer' })
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    const result = await this.customerService.create(createCustomerDto);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async update(@Body() updateCustomerDto: UpdateCustomerDto) {
    const result = await this.customerService.update(updateCustomerDto);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(
    @Query()
    params: {
      limit: number;
      offset: number;
      customerName?: string;
      customerNo?: string;
      customerType?: string;
    },
  ) {
    const { limit, offset, customerName, customerNo,customerType } = params;
    const result = await this.customerService.findAll({
      limit,
      offset,
      customerName,
      customerNo,
      customerType,
    });
    return {
      statusCode: 200,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.customerService.findOne(id);
    return {
      statusCode: 200,
      result,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.customerService.remove(id);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }
}
