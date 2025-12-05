import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  HttpStatus,
  Query,
  Put,
} from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { UpdateSupplierDto } from './dto/update-supplier.dto';

@Controller({ version: '1', path: 'suppliers' })
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createSupplierDto: CreateSupplierDto) {
    const result = await this.suppliersService.create(createSupplierDto);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async update(@Body() updateSupplierDto: UpdateSupplierDto) {
    const result = await this.suppliersService.update(updateSupplierDto);
    return { statusCode: HttpStatus.OK, result };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(
    @Query()
    params: {
      limit: number;
      offset: number;
      supplierNo?: string;
      supplierName?: string;
    },
  ) {
    const { limit, offset, supplierName, supplierNo } = params;
    const result = await this.suppliersService.findAll({
      limit,
      offset,
      supplierName,
      supplierNo,
    });
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.suppliersService.findOne(id);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.suppliersService.remove(id);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }
}
