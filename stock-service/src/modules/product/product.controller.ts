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
  UseInterceptors,
  Put,
  Res,
  Req,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { UpdateProductDto } from './dto/update-product.dto';
import { Request, Response } from 'express';
import * as ExcelJS from 'exceljs';

@Controller({ path: 'product', version: '1' })
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(@Body() createProductDto: CreateProductDto) {
    const result = await this.productService.create(createProductDto);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  @UseInterceptors(FileInterceptor('file'))
  async update(@Body() updateProductDto: UpdateProductDto) {
    const result = await this.productService.update(updateProductDto);
    return { statusCode: HttpStatus.OK, result };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(
    @Query()
    params: {
      limit: number;
      offset: number;
      partNo?: string;
      partName?: string;
      model?: string;
      size?: string;
      spec?: string;
    },
  ) {
    const { limit, offset, partNo, size } = params;
    const result = await this.productService.findAll({
      limit,
      offset,
      partNo,
      size,
    });
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.productService.findOne(id);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.productService.remove(id);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/stock/product')
  async getStockProduct(
    @Query()
    params: {
      limit: number;
      offset: number;
      partNo: string;
      inputPartName: string;
      stockType: string;
    },
  ) {
    const { limit, offset, partNo, inputPartName, stockType } = params;
    const result = await this.productService.getSumItem({
      limit,
      offset,
      partNo,
      inputPartName,
      stockType,
    });
    return { statusCode: HttpStatus.OK, result };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/stock/product-detail')
  async getStockProductDetail(@Query() params: { productId: string }) {
    const { productId } = params;
    const result = await this.productService.getSumItemDetail(productId);
    return { statusCode: HttpStatus.OK, result };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/stock/area')
  async getStockArea(@Query() params: { limit: number; offset: number }) {
    const { limit, offset } = params;
    const result = await this.productService.getSumItemArea({ limit, offset });
    return { statusCode: HttpStatus.OK, result };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/stock/test')
  async test() {
    const result = await this.productService.test();
    return {
      statusCode: 200,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('/stock/product/generate-excel')
  async generateExcel(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<void> {
    const workbook = new ExcelJS.Workbook();
    const partNo = req['body']['partNo'];
    const stockType = req['body']['stockType'];
    const worksheet = workbook.addWorksheet('Stock');
    const result = await this.productService.getSumItemExcel({
      limit: 99,
      offset: 0,
      partNo,
      stockType,
    });
    // Add data to the worksheet
    // Header
    // worksheet.addRow(['Inventory', 'total: ' + result.total, 'limit 100']);
    worksheet.addRow([
      'Part No.',
      'Part Name',
      'Type',
      'Stock',
      'Min. stock',
      'Sum price',
    ]);

    for (const row of result.items) {
      worksheet.addRow([
        row.partNo,
        row.partName,
        row.type,
        row.stock,
        row.minimumStock,
        row.sumPrice,
      ]);
    }
    // Set response headers for Excel download
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.setHeader('Content-Disposition', 'attachment; filename=example.xlsx');

    // Pipe the workbook to the response
    await workbook.xlsx.write(res);

    // End the response
    res.end();
  }
}
