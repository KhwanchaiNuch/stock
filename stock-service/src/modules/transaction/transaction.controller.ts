// src/modules/transaction/transaction.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import {
  UpdateQcStatusDto,
  UpdateAllQcStatusDto,
} from './dto/update-transaction.dto'
import { ListTransactionDto } from './dto/list-transaction.dto';
import { Request } from 'express';

@Controller({ path: 'transactions', version: '1' })
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) { }

  // LIST
  @UseGuards(JwtAuthGuard)
  @Get()
  async list(@Query() params: ListTransactionDto) {
    const result = await this.transactionService.list(params);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('listNg')
  async listNg(@Query() params: ListTransactionDto) {
    const result = await this.transactionService.listNg();
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  // GET BY ID
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.transactionService.findOne(id);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }


  // CREATE
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() dto: CreateTransactionDto,
    @Req() req: Request,
  ) {
    const userId = (req as any).user?.id;
    const result = await this.transactionService.create(dto, userId);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  // UPDATE
 @UseGuards(JwtAuthGuard)
@Post('update')
async update(@Body() body: UpdateQcStatusDto) {
  const { id, checkStatus } = body
  console.log('controller id = ', id, 'checkStatus = ', checkStatus)

  return {
    statusCode: HttpStatus.OK,
    result: await this.transactionService.update(id, checkStatus),
  }
}

@UseGuards(JwtAuthGuard)
@Post('update-all')
async updateAllHold(@Body() body: UpdateAllQcStatusDto) {
  const { checkStatus } = body

  return {
    statusCode: HttpStatus.OK,
    result: await this.transactionService.updateAllHold(checkStatus),
  }
}


  // DELETE (soft delete)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.transactionService.remove(id);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }
}
