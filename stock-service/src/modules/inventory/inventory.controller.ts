import {
  Controller,
  Get,
  HttpStatus,
  UseGuards,
  Query,
  Body,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { InventoryService } from './inventory.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { AdjustInventoryDto } from './dto/adjust-inventory.dto';
import { Response } from 'express';
import { Request } from 'express';
import * as ExcelJS from 'exceljs';

@Controller({ path: 'inventory', version: '1' })
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createInventory(
    @Body() createInventory: CreateInventoryDto,
    @Req() req: Request,
  ): Promise<{ statusCode: HttpStatus; result: { success: boolean } }> {
    const userId = req['user']['id'];
    const result = await this.inventoryService.createInventory({
      ...createInventory,
      userId,
    });
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
      input: string;
      inputDate: Date;
      inputPartNumber: string;
      inputPartName: string;
    },
  ) {
    const { limit, offset, input, inputDate, inputPartNumber, inputPartName } =
      params;
    const result = await this.inventoryService.findAll({
      limit,
      offset,
      input,
      inputDate,
      inputPartNumber,
      inputPartName,
    });
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('submit')
  async adjustInventory(
    @Body() adjustInventory: AdjustInventoryDto,
    @Req() req: Request,
  ): Promise<{ statusCode: HttpStatus; result: { success: boolean } }> {
    const userId = req['user']['id'];
    const result = await this.inventoryService.adjustInventory({
      ...adjustInventory,
      userId,
    });
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('/generate-excel')
  async generateExcel(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<void> {
    const workbook = new ExcelJS.Workbook();
    const input = req['body']['input'];
    const inputDate = req['body']['inputDate'];
    const inputPartNumber = req['body']['inputPartNumber'];
    const inputPartName = req['body']['inputPartName'];
    const worksheet = workbook.addWorksheet('Inventory');
    const result = await this.inventoryService.findAll({
      limit: 99,
      offset: 0,
      input: input,
      inputDate: inputDate,
      inputPartNumber: inputPartNumber,
      inputPartName: inputPartName,
    });
    // Add data to the worksheet
    // Header
    // worksheet.addRow(['Inventory', 'total: ' + result.total, 'limit 100']);
    worksheet.addRow([
      'Receipt No.',
      'Part No.',
      'Area',
      'Lot No.',
      'Inventory',
      'Stock',
      'Amount',
      'Difference',
      'Date Time',
      'Operator',
    ]);

    for (const row of result.items) {
      worksheet.addRow([
        row.receiptNo,
        row.partNo,
        row.partName,
        row.lotNo,
        row.areaName,
        row.inventoryCount,
        row.stock,
        row.diffValue,
        row.updatedAt,
        row.operator,
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
