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
import { AreaService } from './area.service';
import { CreateAreaDto } from './dto/create-area.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { AreaStockType } from './entities/area.entity';
import { UpdateAreaDto } from './dto/update-area.dto';

@Controller({ path: 'area', version: '1' })
export class AreaController {
  constructor(private readonly areaService: AreaService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createAreaDto: CreateAreaDto) {
    const result = await this.areaService.create(createAreaDto);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async update(@Body() updateAreaDto: UpdateAreaDto) {
    const result = await this.areaService.updateArea(updateAreaDto);
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
      areaNo?: string;
      areaName?: string;
      typeOfStock?: AreaStockType;
    },
  ) {
    const { limit, offset, areaNo, areaName, typeOfStock } = params;
    const result = await this.areaService.findAll({
      limit,
      offset,
      areaNo,
      areaName,
      typeOfStock,
    });
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.areaService.findOne(id);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.areaService.remove(id);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }
}
