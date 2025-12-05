import {
  Controller,
  Get,
  HttpStatus,
  UseGuards,
  Query,
  Body,
  Put,
  Post,
  Res,
  Req,
} from '@nestjs/common';
import { HistoryService } from './history.service';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { Response } from 'express';
import * as ExcelJS from 'exceljs';
import { Request } from 'express';


@Controller({ path: 'history', version: '1' })
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @UseGuards(JwtAuthGuard)
  @Put()
  async update(@Body() updateHistoryDto: UpdateHistoryDto) {
    const result = await this.historyService.updateHistory(updateHistoryDto);
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
      type: string;
      partNo: string;
      inputPartName: string;
    },
  ) {
    const { limit, offset, type, partNo, inputPartName } = params;

    const result = await this.historyService.findAll({
      limit,
      offset,
      type,
      partNo,
      inputPartName,
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
    const limit = req['body']['limit'];
    const offset = req['body']['offset'];
    const type = req['body']['type'];
    const partNo = req['body']['partNo'];
    const inputPartName = req['body']['inputPartName'];
    const worksheet = workbook.addWorksheet('History_');
    const result = await this.historyService.findAll({
      limit,
      offset,
      type,
      partNo,
      inputPartName,
    });
    // Add data to the worksheet
    // Header
    worksheet.addRow([
      'Date Time',
      'Operation',
      'Operator',
      'Code',
      'Name',
      'Area',
      'Amount',
      'Stock',
      'Note',
    ]);

    for (const row of result.items) {
      try {
        worksheet.addRow([
          row.createdAt,
          row.type,
          row.operator ? row.operator.firstName : '-',
          row.productId ? row.productId.partNo : '-',
          row.productId ? row.productId.partName : '-',
          row.area ? row.area.areaName : '-',
          row.amount,
          row.stock,
          row.note ? row.note : '-',
        ]);
      } catch (err) {
        console.log(row.id + err);
      }
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
