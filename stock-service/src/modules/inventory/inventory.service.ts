import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Between,
  FindManyOptions,
  ILike,
  Like,
  Repository,
  getConnection,
} from 'typeorm';
import { isEmpty } from 'lodash';
import { InventoryEntity, OperationType } from './entities/inventory.entity';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { RawMaterialItemEntity } from '../raw-material/entities/raw-material-item.entity';
import { UsersService } from '../users/users.service';
import {
  TransactionEntity,
  TransactionStatus,
} from '../transaction/entities/transaction.entity';
import { HistoryEntity } from '../history/entities/history.entity';
import { AdjustInventoryDto } from './dto/adjust-inventory.dto';
import {
  RawMaterialEntity,
  RawMaterialReceiptStatus,
  RawMaterialType,
} from '../raw-material/entities/raw-material.entity';
import { AreaStockType } from '../area/entities/area.entity';
import * as moment from 'moment';
import { ProductService } from '../product/product.service';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(InventoryEntity)
    private inventoryRepository: Repository<InventoryEntity>,
    @InjectRepository(RawMaterialItemEntity)
    private rawMaterialItemRepository: Repository<RawMaterialItemEntity>,
    @InjectRepository(RawMaterialEntity)
    private rawMaterialRepository: Repository<RawMaterialEntity>,
    @InjectRepository(TransactionEntity)
    private transactionRepository: Repository<TransactionEntity>,
    @InjectRepository(HistoryEntity)
    private historyRepository: Repository<HistoryEntity>,
    private userService: UsersService,
    private productService: ProductService,
  ) {}

  async createInventory(createInventoryDto: CreateInventoryDto) {
    const user = await this.userService.findById(createInventoryDto.userId);
    if (isEmpty(user)) {
      throw new HttpException('Not found user', HttpStatus.BAD_REQUEST);
    }
    const receiptItem = await this.rawMaterialItemRepository.findOne({
      relations: ['productId', 'area'],
      where: {
        id: createInventoryDto.receiptItemId,
      },
    });
    if (isEmpty(receiptItem)) {
      throw new HttpException('Not found receipt item', HttpStatus.BAD_REQUEST);
    }
    const stockOut = await this.transactionRepository.sum('quantity', {
      lotNo: receiptItem.lotNo,
      status: TransactionStatus.OUTBOUND,
    });
    const stockIn = await this.transactionRepository.sum('quantity', {
      lotNo: receiptItem.lotNo,
      status: TransactionStatus.INBOUND,
    });
    const stock = stockIn - stockOut;
    const diffValue = createInventoryDto.inventoryCount - stock;
    const bool = diffValue != 0;
    const inventoryItem = await this.inventoryRepository.create({
      receiptItem: receiptItem,
      operator: user,
      inventoryCount: +createInventoryDto.inventoryCount,
      isDiff: bool,
      stockCount: stock,
    });
    this.inventoryRepository.save(inventoryItem);

    return { success: true };
  }

  async findAll({
    limit = 10,
    offset = 0,
    input = 'ALL',
    inputDate = undefined,
    inputPartNumber = undefined,
    inputPartName = undefined,
  }: {
    limit: number;
    offset: number;
    input: string;
    inputDate: Date;
    inputPartNumber: string;
    inputPartName: string;
  }) {
    // Calculate start and end of the specific day
    let startDate: Date;
    let endDate: Date;
    if (inputDate) {
      const temp = new Date(inputDate);
      startDate = new Date(
        temp.getFullYear(),
        temp.getMonth(),
        temp.getDate(),
        0,
        0,
        0,
      );
      endDate = new Date(
        temp.getFullYear(),
        temp.getMonth(),
        temp.getDate(),
        23,
        59,
        59,
      );
    } else {
      startDate = undefined;
      endDate = undefined;
    }
    const findOption: FindManyOptions<InventoryEntity> = {
      relations: [
        'receiptItem',
        'receiptItem.receiptNo',
        'receiptItem.area',
        'receiptItem.productId',
        'operator',
      ],
      skip: offset,
      order: {
        createdAt: 'DESC',
      },
      where: (() => {
        if (input === 'BALANCE') {
          if (inputDate) {
            return {
              isDiff: false,
              createdAt: Between(startDate, endDate),
            };
          } else {
            return {
              isDiff: false,
            };
          }
        } else if (input === 'DIFFERENCE') {
          if (inputDate) {
            return {
              isDiff: true,
              createdAt: Between(startDate, endDate),
            };
          } else {
            return {
              isDiff: true,
            };
          }
        } else if (input === 'ALL') {
          if (inputDate) {
            return { createdAt: Between(startDate, endDate) };
          } else {
            return {};
          } // No additional filtering for "ALL" case
        } else {
          throw new HttpException('Not found input', HttpStatus.BAD_REQUEST);
        }
      })(),
    };
    if (limit !== 99) {
      findOption.take = limit;
    }
    if (inputPartNumber) {
      findOption.where = {
        ...findOption.where,
        receiptItem: {
          productId: {
            partNo: ILike(`%${inputPartNumber}%`),
          },
        },
      };
    }
    if (inputPartName) {
      findOption.where = {
        ...findOption.where,
        receiptItem: {
          productId: {
            partName: ILike(`%${inputPartName}%`),
          },
        },
      };
    }

    const items = await this.inventoryRepository.find(findOption);

    const transformedList = await Promise.all(
      items.map(async (item) => {
        const diffValue = item.inventoryCount - item.stockCount;

        return {
          id: item.id,
          receiptNo: item.receiptItem.receiptNo.receiptNo,
          partNo: item.receiptItem.productId.partNo,
          partName: item.receiptItem.productId.partName,
          lotNo: item.receiptItem.lotNo,
          areaName: item.receiptItem.area.areaName,
          areaNo: item.receiptItem.area.areaNo,
          inventoryCount: item.inventoryCount,
          stock: item.stockCount,
          isDiff: item.isDiff,
          diffValue: diffValue,
          updatedAt: item.updatedAt,
          createdAt: item.createdAt,
          operator: item.operator.firstName,
        };
      }),
    );
    return {
      items: transformedList,
      total: await this.inventoryRepository.count(findOption),
    };
  }

  async adjustInventory(adjustInventory: AdjustInventoryDto) {
    const user = await this.userService.findById(adjustInventory.userId);
    if (isEmpty(user)) {
      throw new HttpException('Not found user', HttpStatus.BAD_REQUEST);
    }
    //create new transaction
    const inventoryItem = await this.inventoryRepository.findOne({
      relations: [
        'receiptItem',
        'receiptItem.area',
        'receiptItem.productId',
        'receiptItem.receiptNo',
      ],
      where: {
        id: adjustInventory.inventoryId,
      },
    });
    const stockOut = await this.transactionRepository.sum('quantity', {
      lotNo: inventoryItem.receiptItem.lotNo,
      status: TransactionStatus.OUTBOUND,
    });
    const stockIn = await this.transactionRepository.sum('quantity', {
      lotNo: inventoryItem.receiptItem.lotNo,
      status: TransactionStatus.INBOUND,
    });
    const totalStock = stockIn - stockOut;
    let transactionTypeForSave: TransactionStatus;
    // let receiptTypeForSave: RawMaterialType;
    let quantity: number;
    if (totalStock == inventoryItem.inventoryCount) {
      console.log('Should have someone adjust before');
      return { success: true };
    } else if (totalStock > inventoryItem.inventoryCount) {
      quantity = totalStock - inventoryItem.inventoryCount;
      transactionTypeForSave = TransactionStatus.OUTBOUND;
      // receiptTypeForSave = RawMaterialType.OUTBOUND
    } else if (inventoryItem.inventoryCount > totalStock) {
      quantity = inventoryItem.inventoryCount - totalStock;
      transactionTypeForSave = TransactionStatus.INBOUND;
      // receiptTypeForSave = RawMaterialType.INBOUND
    } else {
      throw new HttpException(
        "Shouldn't see this case",
        HttpStatus.BAD_REQUEST,
      );
    }
    // const receiptNo: string = await this.generateAdjustReceiptNo(inventoryItem.receiptItem.stockType,receiptTypeForSave);
    // let receipt = await this.rawMaterialRepository.findOne({
    //   where: {
    //     receiptNo: receiptNo,
    //   }
    // })
    // if (isEmpty(receipt)) {
    //   receipt = await this.rawMaterialRepository.create({
    //     status: RawMaterialReceiptStatus.COMPLETE,
    //     stockType:inventoryItem.receiptItem.stockType,
    //     receiptNo: receiptNo,
    //     type: receiptTypeForSave,
    //     user,
    //   });
    // }
    // await this.rawMaterialRepository.save(receipt)
    // const receiptItemForSave = inventoryItem.receiptItem

    const newTransaction = await this.transactionRepository.create({
      receipt: inventoryItem.receiptItem.receiptNo.id,
      status: transactionTypeForSave,
      quantity,
      lotNo: inventoryItem.receiptItem.lotNo,
      area: inventoryItem.receiptItem.area,
      scanBy: user,
      itemId: inventoryItem.receiptItem.id,
      price: inventoryItem.receiptItem.price,
      type: inventoryItem.receiptItem.stockType,
    });
    await this.transactionRepository.save(newTransaction);

    const products = await this.productService.getSumItem({
      id: inventoryItem.receiptItem.productId.id,
    });

    // update another inventory that same lot
    const currentDate = new Date();
    const startDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      0,
      0,
      0,
    );
    const endDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      23,
      59,
      59,
    );
    const findOption: FindManyOptions<InventoryEntity> = {
      relations: ['receiptItem', 'operator'],
      where: {
        receiptItem: {
          id: inventoryItem.receiptItem.id,
        },
        createdAt: Between(startDate, endDate),
        isDiff: true,
      },
    };
    const inventoryList = await this.inventoryRepository.find(findOption);
    await Promise.all(
      inventoryList.map(async (item) => {
        const diffValue = item.inventoryCount - inventoryItem.inventoryCount;
        const bool = diffValue != 0;
        item.stockCount = inventoryItem.inventoryCount;
        item.isDiff = bool;
        await this.inventoryRepository.save(item);
      }),
    );

    if (transactionTypeForSave == TransactionStatus.INBOUND) {
      const newHistory = await this.historyRepository.create({
        type: OperationType.INVENTORY,
        operator: user,
        productId: inventoryItem.receiptItem.productId,
        area: inventoryItem.receiptItem.area,
        amount: +quantity,
        stock: products.items[0].stock,
      });
      await this.historyRepository.save(newHistory);
    } else {
      const newHistory = await this.historyRepository.create({
        type: OperationType.INVENTORY,
        operator: user,
        productId: inventoryItem.receiptItem.productId,
        area: inventoryItem.receiptItem.area,
        amount: -quantity,
        stock: products.items[0].stock,
      });
      await this.historyRepository.save(newHistory);
    }
    return { success: true };
  }

  // async generateAdjustReceiptNo(stockType: AreaStockType,type: RawMaterialType): Promise<string>  {
  //   const typeName = type === RawMaterialType.OUTBOUND ? "ADJUSTPU": "ADJUSTRC";
  //   const prefix = stockType;
  //   const yearMonthDate = moment().format('YYYYMMDD');
  //   let generated = `${prefix}${typeName}${yearMonthDate}`;
  //   return generated;
  // }
}
