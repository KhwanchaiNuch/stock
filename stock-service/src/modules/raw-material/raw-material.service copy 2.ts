import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isEmpty, map, omit, sumBy } from 'lodash';
import * as moment from 'moment';
import { AreaService } from 'src/modules/area/area.service';
import {
  AreaEntity,
  AreaStockType,
} from 'src/modules/area/entities/area.entity';
import { CustomerService } from 'src/modules/customer/customer.service';
import { CustomerEntity } from 'src/modules/customer/entities/customer.entity';
import { ProductService } from 'src/modules/product/product.service';
import {
  TransactionEntity,
  TransactionStatus,
} from 'src/modules/transaction/entities/transaction.entity';
import { ENUM_ROLE } from 'src/modules/users/entities/user.entity';
import { UsersService } from 'src/modules/users/users.service';
import {
  Between,
  FindManyOptions,
  FindOneOptions,
  ILike,
  In,
  Like,
  Not,
  Repository,
} from 'typeorm';
import {
  HistoryEntity,
  OperationType,
} from '../history/entities/history.entity';
import { InventoryEntity } from '../inventory/entities/inventory.entity';
import { SupplierEntity } from '../suppliers/entities/supplier.entity';
import { SuppliersService } from '../suppliers/suppliers.service';
import { UtilService } from '../utils/utility.service';
import { CreateInboundDto, GetInboundDto, GetInboundV2Dto, UpdateInboundDto } from './dto/create-inbound.dto';
import { CreateMoveDto } from './dto/create-move.dto';
import { CreateOutboundDto, CreateOutboundFinalsDto, GetOutboundDto } from './dto/create-outbound.dto';
import { CreateRawMaterialDto } from './dto/create-raw-material.dto';
import { HideRawMaterialDto } from './dto/hide-raw-material.dto';
import { UpdateRawMaterialItemDto } from './dto/update-raw-material-item.dto';
import {
  RawMaterialItemEntity,
  ReceiptItem,
} from './entities/raw-material-item.entity';
import {
  RawMaterialEntity,
  RawMaterialReceiptStatus,
  RawMaterialType,
} from './entities/raw-material.entity';

@Injectable()
export class RawMaterialService {
  constructor(
    @InjectRepository(RawMaterialEntity)
    private rawMaterialRepository: Repository<RawMaterialEntity>,
    @InjectRepository(RawMaterialItemEntity)
    private rawMaterialItemRepository: Repository<RawMaterialItemEntity>,
    @InjectRepository(TransactionEntity)
    private transactionRepository: Repository<TransactionEntity>,
    @InjectRepository(InventoryEntity)
    private inventoryRepository: Repository<InventoryEntity>,
    private productService: ProductService,
    private supplierService: SuppliersService,
    private userService: UsersService,
    private areaService: AreaService,
    private customerService: CustomerService,
    private utilService: UtilService,
    @InjectRepository(HistoryEntity)
    private historyRepository: Repository<HistoryEntity>,
  ) { }

  async checkUserReceipt(
    userId: string,
    stockType: string,
    type: RawMaterialType,
  ) {
    const user = await this.userService.findById(userId);
    if (isEmpty(user)) {
      throw new HttpException('Not found user', HttpStatus.BAD_REQUEST);
    }
    const options: FindManyOptions<RawMaterialEntity> = {
      where: {
        status: RawMaterialReceiptStatus.DRAFT,
        user: {
          id: user.id,
        },
        type,
      },
    };
    if (stockType != 'PICKUP') {
      options.where = {
        ...options.where,
        stockType: this.utilService.mapStringtoAreaStockType(stockType),
      };
    }
    const receipt = await this.rawMaterialRepository.findOne(options);
    if (isEmpty(receipt)) {
      const receiptNo = await this.generateReceiptNo(stockType, type);
      return {
        receiptNo,
        created: false,
      };
    }
    return {
      receiptNo: receipt.receiptNo,
      created: true,
    };
  }

  async createReceipt(
    userId: string,
    receiptNo: string,
    stockType: string,
    type: RawMaterialType,
  ) {
    const user = await this.userService.findById(userId);
    if (isEmpty(user)) {
      throw new HttpException('Not found user', HttpStatus.BAD_REQUEST);
    }
    const options: FindManyOptions<RawMaterialEntity> = {
      where: {
        status: RawMaterialReceiptStatus.DRAFT,
        type: type,
        user: {
          id: user.id,
        },
      },
    };
    if (stockType != 'PICKUP') {
      options.where = {
        ...options.where,
        stockType: this.utilService.mapStringtoAreaStockType(stockType),
      };
    }

    const receiptDb = await this.rawMaterialRepository.findOne(options);
    if (!isEmpty(receiptDb)) {
      throw new HttpException(
        'User has created receipt but not save yet.',
        HttpStatus.BAD_REQUEST,
      );
    }
    const receiptNoDb = await this.rawMaterialRepository.findOne({
      where: {
        receiptNo: receiptNo,
      },
    });
    if (!isEmpty(receiptNoDb)) {
      throw new HttpException(
        'Created with receipt no. already',
        HttpStatus.BAD_REQUEST,
      );
    }
    const receipt = await this.rawMaterialRepository.create({
      status: RawMaterialReceiptStatus.DRAFT,
      stockType:
        stockType !== 'PICKUP'
          ? this.utilService.mapStringtoAreaStockType(stockType)
          : null,
      receiptNo,
      type,
      user,
    });
    await this.rawMaterialRepository.save(receipt);
    return {
      receiptNo: receipt.receiptNo,
    };
  }

  async createReceiptItem(body: CreateRawMaterialDto, userId: string) {
    const {
      partNo,
      receivedBy,
      supplier,
      stockType,
      quantity,
      invoiceNo,
      lotNo,
      price,
      date,
      receiptNo,
      customer,
    } = body;
    const dbData = await this.rawMaterialItemRepository.findOne({
      where: {
        lotNo,
      },
    });
    const createdBy = await this.userService.findById(userId);
    if (isEmpty(createdBy)) {
      throw new HttpException('Not found user created', HttpStatus.BAD_REQUEST);
    }

    const receipt = await this.rawMaterialRepository.findOne({
      where: {
        receiptNo: receiptNo,
      },
    });
    if (isEmpty(receipt)) {
      throw new HttpException('Not found receive no', HttpStatus.BAD_REQUEST);
    }
    if (!isEmpty(dbData) && receipt.type === RawMaterialType.INBOUND) {
      throw new HttpException('Dupplicate lot number', HttpStatus.BAD_REQUEST);
    }

    const product = await this.productService.findOneByOption({
      partNo,
      type: stockType,
    });
    if (isEmpty(product)) {
      throw new HttpException('Not found product', HttpStatus.BAD_REQUEST);
    }
    let dbSupplier: SupplierEntity;
    if (supplier) {
      dbSupplier = await this.supplierService.findOneBySupplierName(supplier);
      if (isEmpty(dbSupplier)) {
        throw new HttpException('Not found suppiler', HttpStatus.BAD_REQUEST);
      }
    }
    const user = await this.userService.findById(receivedBy);
    if (isEmpty(user)) {
      throw new HttpException('Not found user', HttpStatus.BAD_REQUEST);
    }
    let shipBy: CustomerEntity;
    if (customer) {
      shipBy = await this.customerService.findOne(customer);
      if (isEmpty(shipBy)) {
        throw new HttpException(
          'Not found shipBy customer',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
    const receiptItem = await this.rawMaterialItemRepository.create({
      productId: product,
      supplierId: dbSupplier,
      stockType,
      quantity,
      receiptNo: receipt,
      date,
      invoiceNo,
      lotNo,
      price,
      receivedBy: user,
      customer: shipBy,
      status:
        receipt.status === RawMaterialReceiptStatus.NOT_COMPLETE
          ? ReceiptItem.WAITING
          : ReceiptItem.DRAFT,
      createdBy,
    });
    await this.rawMaterialItemRepository.save(receiptItem);
    return omit(receiptItem, ['createdBy', 'receivedBy.userToken']);
  }

  async generateReceiptNo(stockType: string, type: string) {
    const typeForSearch =
      type === RawMaterialType.OUTBOUND
        ? RawMaterialType.OUTBOUND
        : RawMaterialType.INBOUND;
    let result;
    if (stockType != 'PICKUP') {
      result = await this.rawMaterialRepository.find({
        where: {
          stockType: this.utilService.mapStringtoAreaStockType(stockType),
          type: typeForSearch,
        },
        withDeleted: true,
      });
    } else {
      result = await this.rawMaterialRepository.find({
        where: {
          type: typeForSearch,
        },
        withDeleted: true,
      });
    }
    const typeName = type === RawMaterialType.OUTBOUND ? '' : 'RC';
    const dataLength = `${result.length}`;
    const prefix = stockType;
    const yearMonthDate = moment().format('YYYYMMDDHHmmssSSS');
    let generated = `${prefix}${typeName}${yearMonthDate}`;
    for (let i = 0; i < 3 - dataLength.length; i++) {
      generated += '0';
    }
    generated += (result.length % 100) + 1;
    return generated;
  }

  async saveReceipt(receiptNo: string, userId: string) {
    const user = await this.userService.findById(userId);
    if (isEmpty(user)) {
      throw new HttpException('User not match', HttpStatus.BAD_REQUEST);
    }
    const updatedReceipt = await this.rawMaterialRepository.findOne({
      where: {
        receiptNo: receiptNo,
      },
    });
    if (updatedReceipt.status !== RawMaterialReceiptStatus.DRAFT) {
      throw new HttpException('Receipt has been saved', HttpStatus.BAD_REQUEST);
    }
    const receiptItem = await this.rawMaterialItemRepository.find({
      where: {
        receiptNo: {
          receiptNo,
        },
        status: ReceiptItem.DRAFT,
      },
    });
    if (receiptItem.length > 0) {
      const promisesReceiptItem = map(receiptItem, (ri) => {
        ri.status = ReceiptItem.WAITING;
        return ri;
      });
      await this.rawMaterialItemRepository.save(promisesReceiptItem);
    }
    updatedReceipt.status = RawMaterialReceiptStatus.NOT_COMPLETE;
    await this.rawMaterialRepository.save(updatedReceipt);

    return {
      success: true,
    };
  }

  async removeReceiptItem(
    receiptItemId: string,
    receiptNo: string,
    note: string,
  ) {
    const receiptItem = await this.rawMaterialItemRepository.findOne({
      where: {
        id: receiptItemId,
        status: Not(ReceiptItem.DRAFT),
      },
    });
    if (isEmpty(receiptItem)) {
      throw new HttpException('Not found receipt item', HttpStatus.BAD_REQUEST);
    }
    receiptItem.note = note;
    await this.rawMaterialItemRepository.save(receiptItem);
    await this.rawMaterialItemRepository.softRemove(receiptItem);
    const countItem = await this.rawMaterialItemRepository.count({
      where: {
        receiptNo: {
          receiptNo,
          status: Not(RawMaterialReceiptStatus.DRAFT),
        },
        status: Not(ReceiptItem.DRAFT),
      },
    });
    if (countItem === 0) {
      const receipt = await this.rawMaterialRepository.findOne({
        where: {
          receiptNo,
        },
      });
      await this.rawMaterialRepository.softRemove(receipt);
      return {
        success: true,
        deletedReceipt: true,
      };
    }
    return {
      success: true,
    };
  }

  async removeReceiptItemWaiting(receiptItemId: string, receiptNo: string) {
    const receiptItem = await this.rawMaterialItemRepository.findOne({
      where: {
        id: receiptItemId,
        status: ReceiptItem.WAITING,
      },
    });
    if (isEmpty(receiptItem)) {
      throw new HttpException('Not found receipt item', HttpStatus.BAD_REQUEST);
    }
    await this.rawMaterialItemRepository.softRemove(receiptItem);
    const countItem = await this.rawMaterialItemRepository.count({
      where: {
        receiptNo: {
          receiptNo,
        },
      },
    });
    if (countItem === 0) {
      const receipt = await this.rawMaterialRepository.findOne({
        where: {
          receiptNo,
        },
      });
      await this.rawMaterialRepository.softRemove(receipt);
      return {
        success: true,
        deletedReceipt: true,
      };
    }
    return {
      success: true,
    };
  }

  async removeReceipt(receiptNo: string) {
    const receipt = await this.rawMaterialRepository.findOne({
      where: {
        receiptNo,
      },
    });
    if (isEmpty(receipt)) {
      throw new HttpException('Not found receipt', HttpStatus.BAD_REQUEST);
    }
    const receiptItem = await this.rawMaterialItemRepository.find({
      where: {
        receiptNo: {
          id: receipt.id,
        },
      },
    });
    if (!isEmpty(receiptItem)) {
      await this.rawMaterialItemRepository.softRemove(receiptItem);
    }
    await this.rawMaterialRepository.softRemove(receipt);
    return { success: true };
  }
  async createInboundBK(createInboundDto: CreateInboundDto) {
    const { receiptNo, partNo, lotNo, quantity, area, userId, stockType } =
      createInboundDto;
    const user = await this.userService.findById(userId);
    if (isEmpty(user)) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    const receipt = await this.rawMaterialRepository.findOne({
      where: {
        receiptNo,
        status: RawMaterialReceiptStatus.NOT_COMPLETE,
        stockType,
      },
    });

    if (isEmpty(receipt)) {
      throw new HttpException('Data not match', HttpStatus.BAD_REQUEST);
    }

    if (receipt.status === RawMaterialReceiptStatus.COMPLETE) {
      throw new HttpException(
        'All receipt item has scanned already',
        HttpStatus.BAD_REQUEST,
      );
    }

    const receiptItem = await this.rawMaterialItemRepository.findOne({
      relations: ['receiptNo', 'productId'],
      where: {
        lotNo,
        status: ReceiptItem.WAITING,
        receiptNo: {
          receiptNo,
        },
        productId: {
          partNo,
          type: stockType,
        },
        stockType,
      },
    });

    if (isEmpty(receiptItem)) {
      throw new HttpException('Not found receipt item', HttpStatus.BAD_REQUEST);
    }

    const areaOption: FindOneOptions<AreaEntity> = {
      where: {
        areaNo: area,
        typeOfStock: stockType,
      },
    };

    const dbArea = await this.areaService.findOneByOption(areaOption);

    if (isEmpty(dbArea)) {
      throw new HttpException('Area is not found', HttpStatus.BAD_REQUEST);
    }

    const countInboundItemQuantity = await this.transactionRepository.sum(
      'quantity',
      {
        status: TransactionStatus.INBOUND,
        lotNo: lotNo,
      },
    );
    if (
      Math.round((countInboundItemQuantity + quantity) * 100) / 100 >
      Math.round(receiptItem.quantity * 100) / 100
    ) {
      throw new HttpException(
        'lot is more than request that you add need to check with admin',
        HttpStatus.BAD_REQUEST,
      );
    }

    const newRMTransaction = await this.transactionRepository.create({
      receipt: receipt.id,
      status: TransactionStatus.INBOUND,
      quantity,
      lotNo,
      area: dbArea,
      scanBy: user,
      itemId: receiptItem.id,
      price: receiptItem.price,
      type: stockType,
    });
    await this.transactionRepository.save(newRMTransaction);

    if (
      (Math.round((countInboundItemQuantity + quantity) * 100) / 100).toFixed(
        2,
      ) == (Math.round(receiptItem.quantity * 100) / 100).toFixed(2)
    ) {
      receiptItem.status = ReceiptItem.INBOUND;
      receiptItem.area = dbArea;
      await this.rawMaterialItemRepository.save(receiptItem);
    }

    const countInboundItem = await this.rawMaterialItemRepository.count({
      where: {
        status: ReceiptItem.WAITING,
        receiptNo: {
          receiptNo,
        },
      },
    });
    if (countInboundItem === 0) {
      receipt.status = RawMaterialReceiptStatus.COMPLETE;
      await this.rawMaterialRepository.save(receipt);
    }
    const products = await this.productService.getSumItem({
      id: receiptItem.productId.id,
    });
    console.log("products --> ", products);

    const product = await this.productService.findOne(receiptItem.productId.id);
    const newHistory = await this.historyRepository.create({
      type: OperationType.INBOUND,
      operator: user,
      productId: product,
      area: dbArea,
      amount: quantity,
      stock: products.items[0].stock,
    });
    await this.historyRepository.save(newHistory);
    return { success: true };
  }

  async createInbound(createInboundDto: CreateInboundDto) {
    const { receiptNo, partNo, lotNo, quantity, area, userId } =
      createInboundDto;
    const user = await this.userService.findById(userId);
    if (isEmpty(user)) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    const receipt = await this.rawMaterialRepository.findOne({
      where: {
        receiptNo,
        status: RawMaterialReceiptStatus.NOT_COMPLETE,
        //stockType,

      },
    });

    let stockType = receipt.stockType;

    if (isEmpty(receipt)) {
      throw new HttpException('Data not match', HttpStatus.BAD_REQUEST);
    }

    if (receipt.status === RawMaterialReceiptStatus.COMPLETE) {
      throw new HttpException(
        'All receipt item has scanned already',
        HttpStatus.BAD_REQUEST,
      );
    }

    const receiptItem = await this.rawMaterialItemRepository.findOne({
      relations: ['receiptNo', 'productId'],
      where: {
        lotNo,
        status: ReceiptItem.WAITING,
        receiptNo: {
          receiptNo,
        },
        productId: {
          partNo,
          type: stockType,
        },
        stockType,
      },
    });

    if (isEmpty(receiptItem)) {
      throw new HttpException('Not found receipt item', HttpStatus.BAD_REQUEST);
    }

    const areaOption: FindOneOptions<AreaEntity> = {
      where: {
        areaNo: area,
        typeOfStock: stockType,
      },
    };

    const dbArea = await this.areaService.findOneByOption(areaOption);

    if (isEmpty(dbArea)) {
      throw new HttpException('Area is not found', HttpStatus.BAD_REQUEST);
    }

    const countInboundItemQuantity = await this.transactionRepository.sum(
      'quantity',
      {
        status: TransactionStatus.INBOUND,
        lotNo: lotNo,
      },
    );
    if (
      Math.round((countInboundItemQuantity + quantity) * 100) / 100 >
      Math.round(receiptItem.quantity * 100) / 100
    ) {
      throw new HttpException(
        'lot is more than request that you add need to check with admin',
        HttpStatus.BAD_REQUEST,
      );
    }

    const newRMTransaction = await this.transactionRepository.create({
      receipt: receipt.id,
      status: TransactionStatus.HOLD,
      quantity,
      lotNo,
      area: dbArea,
      scanBy: user,
      itemId: receiptItem.id,
      price: receiptItem.price,
      type: stockType,
    });
    await this.transactionRepository.save(newRMTransaction);

    if (
      (Math.round((countInboundItemQuantity + quantity) * 100) / 100).toFixed(
        2,
      ) == (Math.round(receiptItem.quantity * 100) / 100).toFixed(2)
    ) {
      //receiptItem.status = ReceiptItem.INBOUND;
      receiptItem.area = dbArea;
      await this.rawMaterialItemRepository.save(receiptItem);
    }

    // const countInboundItem = await this.rawMaterialItemRepository.count({
    //   where: {
    //     status: ReceiptItem.WAITING,
    //     receiptNo: {
    //       receiptNo,
    //     },
    //   },
    // });
    // if (countInboundItem === 0) {
    //   receipt.status = RawMaterialReceiptStatus.COMPLETE;
    //   await this.rawMaterialRepository.save(receipt);
    // }
    const products = await this.productService.getSumItem({
      id: receiptItem.productId.id,
    });
    console.log("products --> ", products);
    console.log("products.items[0].stock --> ", products.items[0].stock);


    const product = await this.productService.findOne(receiptItem.productId.id);
    const newHistory = await this.historyRepository.create({
      type: OperationType.HOLD,
      operator: user,
      productId: product,
      area: dbArea,
      amount: quantity,
      stock: products.items[0].stock,
    });
    await this.historyRepository.save(newHistory);

    return { success: true };
  }

  async createInboundST2(createInboundDto: UpdateInboundDto) {
    const { receiptNo, partNo, lotNo, quantity, userId, checkStatus } =
      createInboundDto;
    const user = await this.userService.findById(userId);
    if (isEmpty(user)) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    const receipt = await this.rawMaterialRepository.findOne({
      where: {
        receiptNo,
        status: RawMaterialReceiptStatus.NOT_COMPLETE,
        //stockType,

      },
    });

    let stockType = receipt.stockType;

    if (isEmpty(receipt)) {
      throw new HttpException('Data not match', HttpStatus.BAD_REQUEST);
    }

    if (receipt.status === RawMaterialReceiptStatus.COMPLETE) {
      throw new HttpException(
        'All receipt item has scanned already',
        HttpStatus.BAD_REQUEST,
      );
    }

    const receiptItem = await this.rawMaterialItemRepository.findOne({
      relations: ['receiptNo', 'productId', 'area'],
      where: {
        lotNo,
        status: ReceiptItem.WAITING,
        receiptNo: {
          receiptNo,
        },
        productId: {
          partNo,
          type: stockType,
        },
        stockType,
      },
    });

    if (isEmpty(receiptItem)) {
      throw new HttpException('Not found receipt item', HttpStatus.BAD_REQUEST);
    }

    // const areaOption: FindOneOptions<AreaEntity> = {
    //   where: {
    //     areaNo: area,
    //     typeOfStock: stockType,
    //   },
    // };
    console.log('receiptItem.area -> ', receiptItem);
    // const dbArea = await this.areaService.findOneByOption(areaOption);
    const dbArea = receiptItem.area;

    if (isEmpty(dbArea)) {
      throw new HttpException('Area is not found', HttpStatus.BAD_REQUEST);
    }

    const countInboundItemQuantity = await this.transactionRepository.sum(
      'quantity',
      {
        status: TransactionStatus.INBOUND,
        lotNo: lotNo,
      },
    );
    if (
      Math.round((countInboundItemQuantity + quantity) * 100) / 100 >
      Math.round(receiptItem.quantity * 100) / 100
    ) {
      throw new HttpException(
        'lot is more than request that you add need to check with admin',
        HttpStatus.BAD_REQUEST,
      );
    }

    // const newRMTransaction = await this.transactionRepository.create({
    //   receipt: receipt.id,
    //   status: TransactionStatus.INBOUND,
    //   quantity,
    //   lotNo,
    //   area: dbArea,
    //   scanBy: user,
    //   itemId: receiptItem.id,
    //   price: receiptItem.price,
    //   type: stockType,
    //   checkStatus
    // });
    // await this.transactionRepository.save(newRMTransaction);
    const updateResult = await this.transactionRepository.update(
      {
        receipt: receipt.id,
        itemId: receiptItem.id,
        price: receiptItem.price,
      },
      {
        status: TransactionStatus.INBOUND,
        scanBy: user,
        checkStatus: checkStatus,
      },
    );
    // กันกรณีไม่มี transaction ให้ update
    if (!updateResult.affected || updateResult.affected === 0) {
      throw new HttpException(
        'Transaction not found for update',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (
      (Math.round((countInboundItemQuantity + quantity) * 100) / 100).toFixed(
        2,
      ) == (Math.round(receiptItem.quantity * 100) / 100).toFixed(2)
    ) {
      receiptItem.status = ReceiptItem.INBOUND;
      receiptItem.area = dbArea;
      await this.rawMaterialItemRepository.save(receiptItem);
    }

    const countInboundItem = await this.rawMaterialItemRepository.count({
      where: {
        status: ReceiptItem.WAITING,
        receiptNo: {
          receiptNo,
        },
      },
    });
    if (countInboundItem === 0) {
      receipt.status = RawMaterialReceiptStatus.COMPLETE;
      await this.rawMaterialRepository.save(receipt);
    }
    const products = await this.productService.getSumItem({
      id: receiptItem.productId.id,
    });
    console.log("products --> ", products);
    console.log("products.items[0].stock --> ", products.items[0].stock);


    const product = await this.productService.findOne(receiptItem.productId.id);
    const newHistory = await this.historyRepository.create({
      type: OperationType.INBOUND,
      operator: user,
      productId: product,
      area: dbArea,
      amount: quantity,
      stock: products.items[0].stock,
    });
    await this.historyRepository.save(newHistory);
    return { success: true };
  }



  async createOutbound(createOutboundDto: CreateOutboundDto) {
    const {
      receiptNo,
      partNo,
      lotNo,
      quantity,
      // area,
      stockType,
      price,
      userId,
    } = createOutboundDto;
    const user = await this.userService.findById(userId);
    if (isEmpty(user)) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    const checkReceipt = await this.rawMaterialRepository.findOne({
      where: {
        receiptNo,
      },
    });

    if (isEmpty(checkReceipt)) {
      throw new HttpException('Not found receipt', HttpStatus.BAD_REQUEST);
    }

    if (checkReceipt.status !== RawMaterialReceiptStatus.NOT_COMPLETE) {
      throw new HttpException(
        'Status is not NOT_COMPLETE',
        HttpStatus.BAD_REQUEST,
      );
    }
    const receiptItem = await this.rawMaterialItemRepository.findOne({
      relations: ['productId', 'customer'],
      where: {
        receiptNo: {
          receiptNo,
        },
        productId: {
          partNo,
          type: stockType,
        },
        status: ReceiptItem.WAITING,
      },
    });
    if (isEmpty(receiptItem)) {
      throw new HttpException(
        'Receipt item is not waiting',
        HttpStatus.BAD_REQUEST,
      );
    }


    // 🔹 หา area จาก TransactionEntity (INBOUND ล่าสุดของ lot นี้ + type นี้)
    const lastInboundTrx = await this.transactionRepository.findOne({
      where: {
        //receipt :checkReceipt.id,
        lotNo,
        status: TransactionStatus.INBOUND,
        type: stockType,        // ถ้า type ใน TransactionEntity คือ AreaStockType (RM/WIP/FG/BS)
      },
      relations: ['area'],
      order: {
        createdAt: 'DESC',      // เอาตัวล่าสุด
      },
    });
    console.log('lastInboundTrx : ', lastInboundTrx);

    if (!lastInboundTrx || !lastInboundTrx.area) {
      throw new HttpException(
        'Area is not found from transaction',
        HttpStatus.BAD_REQUEST,
      );
    }
    const dbArea = lastInboundTrx.area;

    if (isEmpty(dbArea)) {
      throw new HttpException('Area is not found', HttpStatus.BAD_REQUEST);
    }
    const sumLotInTransactionIn = await this.transactionRepository.sum(
      'quantity',
      {
        status: TransactionStatus.INBOUND,
        lotNo: lotNo,
      },
    );
    const sumLotInTransaction = await this.transactionRepository.sum(
      'quantity',
      {
        status: TransactionStatus.OUTBOUND,
        lotNo: lotNo,
      },
    );
    if (sumLotInTransactionIn - sumLotInTransaction - quantity < 0) {
      throw new HttpException(
        'Item in lot not enough (happen only scan lot in the same time.)',
        HttpStatus.BAD_REQUEST,
      );
    }

    let customerType = receiptItem.customer.customerType || 'Internal'

    console.log("customerType : ", customerType);
    let _transactionStatus = TransactionStatus.OUTBOUND;
    let _operationType = OperationType.OUTBOUND;
    if (customerType == 'External') {
      _transactionStatus = TransactionStatus.HOLD2;
      _operationType = OperationType.HOLD2;
    }

    const newRMTransaction = await this.transactionRepository.create({
      receipt: checkReceipt.id,
      //  status: TransactionStatus.OUTBOUND,
      status: _transactionStatus,
      quantity,
      lotNo: lotNo,
      area: dbArea,
      itemId: receiptItem.id,
      price: price,
      scanBy: user,
      type: stockType,
    });
    await this.transactionRepository.save(newRMTransaction);

    if (customerType != 'External') {
      const sumOutboundItemQuantity = await this.transactionRepository.sum(
        'quantity',
        {
          itemId: receiptItem.id,
          status: TransactionStatus.OUTBOUND,
        },
      );
      if (
        (Math.round(sumOutboundItemQuantity * 100) / 100).toFixed(2) ==
        (Math.round(receiptItem.quantity * 100) / 100).toFixed(2)
      ) {
        receiptItem.status = ReceiptItem.OUTBOUND;
        await this.rawMaterialItemRepository.save(receiptItem);
      }

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
            lotNo: lotNo,
          },
          createdAt: Between(startDate, endDate),
          isDiff: true,
        },
      };
      const inventoryList = await this.inventoryRepository.find(findOption);
      const stock = sumLotInTransactionIn - sumLotInTransaction - quantity;
      await Promise.all(
        inventoryList.map(async (item) => {
          const diffValue = item.inventoryCount - stock;
          const bool = diffValue != 0;
          item.stockCount = stock;
          item.isDiff = bool;
          await this.inventoryRepository.save(item);
        }),
      );

      const countInboundItem = await this.rawMaterialItemRepository.count({
        where: {
          status: ReceiptItem.WAITING,
          receiptNo: {
            receiptNo,
          },
        },
      });
      if (countInboundItem === 0) {
        checkReceipt.status = RawMaterialReceiptStatus.COMPLETE;
        await this.rawMaterialRepository.save(checkReceipt);
      }
    } else {
      const sumOutboundItemQuantity = await this.transactionRepository.sum(
        'quantity',
        {
          itemId: receiptItem.id,
          status: TransactionStatus.OUTBOUND,
        },
      );
      if (
        (Math.round(sumOutboundItemQuantity * 100) / 100).toFixed(2) ==
        (Math.round(receiptItem.quantity * 100) / 100).toFixed(2)
      ) {
        receiptItem.status = ReceiptItem.HOLD2;
        await this.rawMaterialItemRepository.save(receiptItem);
      }
    }

    const products = await this.productService.getSumItem({
      id: receiptItem.productId.id,
    });
    const product = await this.productService.findOne(receiptItem.productId.id);
    if (!products.items.length) {
      throw new HttpException(
        'Pao: Product stock not found',
        HttpStatus.BAD_REQUEST,
      );
    }
    try {
      const newHistory = await this.historyRepository.create({
        //type: OperationType.OUTBOUND,
        type: _operationType,
        operator: user,
        productId: product,
        area: dbArea,
        amount: quantity,
        stock: products.items[0].stock,
      });
      await this.historyRepository.save(newHistory);
    } catch (err) {
      // Log or rethrow
      console.error('Failed to save history:', err);
      throw new HttpException(
        'Pao: Failed to save history' + err,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return { success: true };
  }

  async createOutboundBK(createOutboundDto: CreateOutboundDto) {
    const {
      receiptNo,
      partNo,
      lotNo,
      quantity,
      area,
      stockType,
      price,
      userId,
    } = createOutboundDto;
    const user = await this.userService.findById(userId);
    if (isEmpty(user)) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    const checkReceipt = await this.rawMaterialRepository.findOne({
      where: {
        receiptNo,
      },
    });

    if (isEmpty(checkReceipt)) {
      throw new HttpException('Not found receipt', HttpStatus.BAD_REQUEST);
    }

    if (checkReceipt.status !== RawMaterialReceiptStatus.NOT_COMPLETE) {
      throw new HttpException(
        'Status is not NOT_COMPLETE',
        HttpStatus.BAD_REQUEST,
      );
    }
    const receiptItem = await this.rawMaterialItemRepository.findOne({
      relations: ['productId'],
      where: {
        receiptNo: {
          receiptNo,
        },
        productId: {
          partNo,
          type: stockType,
        },
        status: ReceiptItem.WAITING,
      },
    });
    if (isEmpty(receiptItem)) {
      throw new HttpException(
        'Receipt item is not waiting',
        HttpStatus.BAD_REQUEST,
      );
    }

    const option: FindOneOptions<AreaEntity> = {
      where: {
        areaNo: area,
      },
    };
    const dbArea = await this.areaService.findOneByOption(option);
    if (isEmpty(dbArea)) {
      throw new HttpException('Area is not found', HttpStatus.BAD_REQUEST);
    }
    const sumLotInTransactionIn = await this.transactionRepository.sum(
      'quantity',
      {
        status: TransactionStatus.INBOUND,
        lotNo: lotNo,
      },
    );
    const sumLotInTransaction = await this.transactionRepository.sum(
      'quantity',
      {
        status: TransactionStatus.OUTBOUND,
        lotNo: lotNo,
      },
    );
    if (sumLotInTransactionIn - sumLotInTransaction - quantity < 0) {
      throw new HttpException(
        'Item in lot not enough (happen only scan lot in the same time.)',
        HttpStatus.BAD_REQUEST,
      );
    }

    const newRMTransaction = await this.transactionRepository.create({
      receipt: checkReceipt.id,
      status: TransactionStatus.OUTBOUND,
      quantity,
      lotNo: lotNo,
      area: dbArea,
      itemId: receiptItem.id,
      price: price,
      scanBy: user,
      type: stockType,
    });
    await this.transactionRepository.save(newRMTransaction);
    const sumOutboundItemQuantity = await this.transactionRepository.sum(
      'quantity',
      {
        itemId: receiptItem.id,
        status: TransactionStatus.OUTBOUND,
      },
    );
    if (
      (Math.round(sumOutboundItemQuantity * 100) / 100).toFixed(2) ==
      (Math.round(receiptItem.quantity * 100) / 100).toFixed(2)
    ) {
      receiptItem.status = ReceiptItem.OUTBOUND;
      await this.rawMaterialItemRepository.save(receiptItem);
    }

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
          lotNo: lotNo,
        },
        createdAt: Between(startDate, endDate),
        isDiff: true,
      },
    };
    const inventoryList = await this.inventoryRepository.find(findOption);
    const stock = sumLotInTransactionIn - sumLotInTransaction - quantity;
    await Promise.all(
      inventoryList.map(async (item) => {
        const diffValue = item.inventoryCount - stock;
        const bool = diffValue != 0;
        item.stockCount = stock;
        item.isDiff = bool;
        await this.inventoryRepository.save(item);
      }),
    );

    const countInboundItem = await this.rawMaterialItemRepository.count({
      where: {
        status: ReceiptItem.WAITING,
        receiptNo: {
          receiptNo,
        },
      },
    });
    if (countInboundItem === 0) {
      checkReceipt.status = RawMaterialReceiptStatus.COMPLETE;
      await this.rawMaterialRepository.save(checkReceipt);
    }
    const products = await this.productService.getSumItem({
      id: receiptItem.productId.id,
    });
    const product = await this.productService.findOne(receiptItem.productId.id);
    if (!products.items.length) {
      throw new HttpException(
        'Pao: Product stock not found',
        HttpStatus.BAD_REQUEST,
      );
    }
    try {
      const newHistory = await this.historyRepository.create({
        type: OperationType.OUTBOUND,
        operator: user,
        productId: product,
        area: dbArea,
        amount: quantity,
        stock: products.items[0].stock,
      });
      await this.historyRepository.save(newHistory);
    } catch (err) {
      // Log or rethrow
      console.error('Failed to save history:', err);
      throw new HttpException(
        'Pao: Failed to save history' + err,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return { success: true };
  }

  async createOutboundFinal(createOutboundDto: CreateOutboundFinalsDto) {
    const {

      receiptNo,
      partNo,
      lotNo,
      quantity,
      area,
      userId,
      quantityOk,
      stockType,
      move
    } = createOutboundDto;
    console.log("receiptNo : ", receiptNo);
    console.log("partNo : ", partNo);
    console.log("lotNo : ", lotNo);
    console.log("quantity : ", quantity);
    console.log("area : ", area);

    console.log("quantity : ", quantity);
    console.log("quantityOk : ", quantityOk);
    console.log("move : ", move);

    let flagComp = 'F';
    if (quantity == quantityOk) {
      flagComp = 'T';
    }
    const user = await this.userService.findById(userId);
    if (isEmpty(user)) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    const checkReceipt = await this.rawMaterialRepository.findOne({
      where: {
        receiptNo,
      },
    });
    console.log('receiptNo : ', receiptNo);
    if (isEmpty(checkReceipt)) {
      throw new HttpException('Not found receipt', HttpStatus.BAD_REQUEST);
    }

    if (checkReceipt.status !== RawMaterialReceiptStatus.NOT_COMPLETE) {
      throw new HttpException(
        'Status is not NOT_COMPLETE',
        HttpStatus.BAD_REQUEST,
      );
    }
    const receiptItem = await this.rawMaterialItemRepository.findOne({
      relations: ['productId'],
      where: {
        receiptNo: {
          receiptNo,
        },
        productId: {
          partNo,
        },
        status: ReceiptItem.WAITING,
      },
    });
    if (isEmpty(receiptItem)) {
      throw new HttpException(
        'Receipt item is not waiting',
        HttpStatus.BAD_REQUEST,
      );
    }

    // 🔹 หา area จาก TransactionEntity (INBOUND ล่าสุดของ lot นี้ + type นี้)
    const lastInboundTrx = await this.transactionRepository.findOne({
      where: {
        //receipt :checkReceipt.id,
        lotNo,
        status: TransactionStatus.INBOUND,
        type: stockType,        // ถ้า type ใน TransactionEntity คือ AreaStockType (RM/WIP/FG/BS)
      },
      relations: ['area'],
      order: {
        createdAt: 'DESC',      // เอาตัวล่าสุด
      },
    });
    console.log('lastInboundTrx : ', lastInboundTrx);

    if (!lastInboundTrx || !lastInboundTrx.area) {
      throw new HttpException(
        'Area is not found from transaction',
        HttpStatus.BAD_REQUEST,
      );
    }
    const dbArea = lastInboundTrx.area;
    if (isEmpty(dbArea)) {
      throw new HttpException('Area is not found', HttpStatus.BAD_REQUEST);
    }
    const sumLotInTransactionIn = await this.transactionRepository.sum(
      'quantity',
      {
        status: TransactionStatus.INBOUND,
        lotNo: lotNo,
      },
    );
    const sumLotInTransaction = await this.transactionRepository.sum(
      'quantity',
      {
        status: TransactionStatus.OUTBOUND,
        lotNo: lotNo,
      },
    );
    if (sumLotInTransactionIn - sumLotInTransaction - quantityOk < 0) {
      throw new HttpException(
        'Item in lot not enough (happen only scan lot in the same time.)',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (flagComp == 'T') {
      const updateResult = await this.transactionRepository.update(
        {
          lotNo: lotNo,
          receipt: checkReceipt.id,
          itemId: receiptItem.id,
          status: TransactionStatus.HOLD2
        },
        {
          status: TransactionStatus.OUTBOUND,
        },
      );
      console.log('updateResult => ', updateResult);
      // กันกรณีไม่มี transaction ให้ update
      if (!updateResult.affected || updateResult.affected === 0) {
        throw new HttpException(
          'Transaction not found for update',
          HttpStatus.BAD_REQUEST,
        );
      }



      const sumOutboundItemQuantity = await this.transactionRepository.sum(
        'quantity',
        {
          itemId: receiptItem.id,
          status: TransactionStatus.OUTBOUND,
        },
      );
      if (
        (Math.round(sumOutboundItemQuantity * 100) / 100).toFixed(2) ==
        (Math.round(receiptItem.quantity * 100) / 100).toFixed(2)
      ) {
        receiptItem.status = ReceiptItem.OUTBOUND;
        await this.rawMaterialItemRepository.save(receiptItem);
      }
    } else {

      const newRMTransaction = await this.transactionRepository.create({
        receipt: checkReceipt.id,
        status: TransactionStatus.OUTBOUND,
        quantity: quantityOk,
        lotNo: lotNo,
        area: dbArea,
        itemId: receiptItem.id,
        price: 1,
        scanBy: user,
        type: stockType,
      });
      await this.transactionRepository.save(newRMTransaction);
    }



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
          lotNo: lotNo,
        },
        createdAt: Between(startDate, endDate),
        isDiff: true,
      },
    };
    const inventoryList = await this.inventoryRepository.find(findOption);
    const stock = sumLotInTransactionIn - sumLotInTransaction - quantityOk;

    console.log("sumLotInTransactionIn : ", sumLotInTransactionIn);
    console.log("sumLotInTransaction : ", sumLotInTransaction);
    console.log("quantityOk : ", quantityOk);
    await Promise.all(
      inventoryList.map(async (item) => {
        const diffValue = item.inventoryCount - stock;
        const bool = diffValue != 0;
        item.stockCount = stock;
        item.isDiff = bool;
        await this.inventoryRepository.save(item);
      }),
    );

    const countInboundItem = await this.rawMaterialItemRepository.count({
      where: {
        status: ReceiptItem.WAITING,
        receiptNo: {
          receiptNo,
        },
      },
    });
    if (countInboundItem === 0) {
      checkReceipt.status = RawMaterialReceiptStatus.COMPLETE;
      await this.rawMaterialRepository.save(checkReceipt);
    }
    const products = await this.productService.getSumItem({
      id: receiptItem.productId.id,
    });
    const product = await this.productService.findOne(receiptItem.productId.id);
    if (!products.items.length) {
      throw new HttpException(
        'Pao: Product stock not found',
        HttpStatus.BAD_REQUEST,
      );
    }
    try {
      const newHistory = await this.historyRepository.create({
        type: OperationType.OUTBOUND,
        operator: user,
        productId: product,
        area: dbArea,
        amount: quantityOk,
        stock: products.items[0].stock,
        // stock: quantity - quantityOk,
      });
      await this.historyRepository.save(newHistory);
    } catch (err) {
      // Log or rethrow
      console.error('Failed to save history:', err);
      throw new HttpException(
        'Pao: Failed to save history' + err,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return { success: true };

    // // 1) หา user
    // const user = await this.userService.findById(userId);
    // if (isEmpty(user)) {
    //   throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    // }


    // const updateResult = await this.transactionRepository.update(
    //   {
    //     lotNo: lotNo,
    //     status: TransactionStatus.HOLD2
    //   },
    //   {
    //     status: TransactionStatus.OUTBOUND,
    //   },
    // );
    // console.log('updateResult => ', updateResult)

    // // กันกรณีไม่มี transaction ให้ update
    // if (!updateResult.affected || updateResult.affected === 0) {
    //   throw new HttpException(
    //     'Transaction not found for update',
    //     HttpStatus.BAD_REQUEST,
    //   );
    // }

    // return { success: true };
  }


  async createMove(createMove: CreateMoveDto) {
    const { partNo, lotNo, area, stockType, userId } = createMove;
    const user = await this.userService.findById(userId);
    if (isEmpty(user)) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    const receiptItem = await this.rawMaterialItemRepository.findOne({
      relations: ['productId'],
      where: {
        productId: {
          partNo,
          type: stockType,
        },
        lotNo,
      },
    });
    if (isEmpty(receiptItem)) {
      throw new HttpException(
        'Receipt item is not found',
        HttpStatus.BAD_REQUEST,
      );
    }
    const option: FindOneOptions<AreaEntity> = {
      where: {
        areaNo: area,
      },
    };
    const dbArea = await this.areaService.findOneByOption(option);
    if (isEmpty(dbArea)) {
      throw new HttpException('Area is not found', HttpStatus.BAD_REQUEST);
    }
    const allTransaction = await this.transactionRepository.find({
      where: {
        lotNo,
        type: stockType,
      },
    });
    await Promise.all(
      allTransaction.map(async (item) => {
        item.area = dbArea;
        await this.transactionRepository.save(item);
      }),
    );
    receiptItem.area = dbArea;
    await this.rawMaterialItemRepository.save(receiptItem);
    const countOutboundItemQuantity = await this.transactionRepository.sum(
      'quantity',
      {
        lotNo,
        status: TransactionStatus.OUTBOUND,
      },
    );
    const countInboundItemQuantity = await this.transactionRepository.sum(
      'quantity',
      {
        lotNo,
        status: TransactionStatus.INBOUND,
      },
    );
    const products = await this.productService.getSumItem({
      id: receiptItem.productId.id,
    });
    const product = await this.productService.findOne(receiptItem.productId.id);
    const newHistoryMove = await this.historyRepository.create({
      type: OperationType.MOVE,
      operator: user,
      productId: product,
      area: dbArea,
      amount: countInboundItemQuantity - countOutboundItemQuantity,
      stock: products.items[0].stock,
    });
    await this.historyRepository.save(newHistoryMove);
    return { success: true };
  }

  async findAllReceipt({
    limit = 10,
    offset = 0,
    type = '',
    stockType,
    receiptNo = '',
    date = '',
    status = '',
    inputPartNumber = undefined,
  }: {
    limit: number;
    offset: number;
    type: string;
    stockType: string;
    receiptNo: string;
    date: string;
    status: string;
    inputPartNumber: string;
  }) {
    const options: FindManyOptions<RawMaterialEntity> = {
      skip: offset,
      take: limit,
      where: {
        type:
          type === RawMaterialType.INBOUND
            ? RawMaterialType.INBOUND
            : RawMaterialType.OUTBOUND,
      },
      order: {
        createdAt: 'DESC',
      },
    };
    if (stockType != 'PICKUP') {
      options.where = {
        ...options.where,
        stockType: this.utilService.mapStringtoAreaStockType(stockType),
      };
    }
    if (receiptNo.length > 0) {
      options.where = { ...options.where, receiptNo: Like(`%${receiptNo}%`) };
    }
    if (date.length > 0) {
      options.where = {
        ...options.where,
        createdAt: Between(
          new Date(date),
          new Date(moment(date).endOf('day').toISOString()),
        ),
      };
    }
    if (status.length > 0 && status !== 'ALL') {
      options.where = {
        ...options.where,
        status:
          status === RawMaterialReceiptStatus.COMPLETE
            ? RawMaterialReceiptStatus.COMPLETE
            : status === RawMaterialReceiptStatus.NOT_COMPLETE
              ? RawMaterialReceiptStatus.NOT_COMPLETE
              : RawMaterialReceiptStatus.DRAFT,
      };
    }
    if (inputPartNumber) {
      const normalizedInput = inputPartNumber.replace(/-/g, '').toLowerCase();

      const items = await this.rawMaterialItemRepository
        .createQueryBuilder('item')
        .leftJoinAndSelect('item.productId', 'product')
        .leftJoinAndSelect('item.receiptNo', 'receipt')
        .where(
          "REPLACE(LOWER(TRIM(product.partNo)), '-', '') LIKE :normalizedInput",
          { normalizedInput: `%${normalizedInput}%` },
        )
        .getMany();

      const listReceiptNo = items.map((i) => i.receiptNo.receiptNo);
      options.where = {
        ...options.where,
        receiptNo: In(listReceiptNo),
      };
    }
    const items = await this.rawMaterialRepository.find(options);
    const total = await this.rawMaterialRepository.count(options);
    return {
      items,
      total,
    };
  }

  async findReceiptByTypePickup() {
    // async findReceiptByTypePickup(stockType: AreaStockType) {
    const receipt = await this.rawMaterialRepository
      .createQueryBuilder('entity')
      .where('entity.type = :type', { type: RawMaterialType.OUTBOUND })
      .andWhere('entity.status = :status', {
        status: RawMaterialReceiptStatus.NOT_COMPLETE,
      })
      .andWhere('(entity.isHide IS NULL OR entity.isHide = :isHide)', {
        isHide: false,
      })
      .getMany();

    return {
      receipt,
    };
  }

  async findReceiptByTypePartNo() {
    // async findReceiptByTypePickup(stockType: AreaStockType) {
    const receipt = await this.rawMaterialRepository
      .createQueryBuilder('entity')
      .where('entity.type = :type', { type: RawMaterialType.INBOUND })
      .andWhere('entity.status = :status', {
        status: RawMaterialReceiptStatus.NOT_COMPLETE,
      })
      .andWhere('(entity.isHide IS NULL OR entity.isHide = :isHide)', {
        isHide: false,
      })
      .getMany();

    return {
      receipt,
    };
  }

  async findReceiptByReceiptNo({
    limit = 10,
    offset = 0,
    receiptNo = '',
  }: {
    limit: number;
    offset: number;
    receiptNo: string;
  }) {
    if (receiptNo === '') {
      return {
        success: true,
      };
    } else {
      const receipt = await this.rawMaterialRepository.findOne({
        where: {
          receiptNo,
        },
      });
      // if (receipt.status === RawMaterialReceiptStatus.DRAFT) {
      //   throw new HttpException(
      //     'This receipt has not saved yet',
      //     HttpStatus.BAD_REQUEST,
      //   );
      // }
      const receiptItem = await this.rawMaterialItemRepository.find({
        relations: [
          'productId',
          'receivedBy',
          'supplierId',
          'createdBy',
          'customer',
        ],
        where: {
          receiptNo: {
            receiptNo: receipt.receiptNo,
          },
          // status: Not(ReceiptItem.DRAFT),
        },
        order: {
          lotNo: 'ASC',
        },
        take: limit,
        skip: offset,
      });

      const output = await Promise.all(
        receiptItem.map(async (item) => {
          const sumItemInTransaction = await this.transactionRepository.sum(
            'quantity',
            {
              itemId: item.id,
            },
          );

          const response = omit(item, [
            'productId',
            'supplierId',
            'receivedBy',
            'createdBy',
            'customer',
          ]);
          return {
            ...response,
            partNo: item.productId.partNo,
            partName: item.productId.partName,
            supplier: item?.supplierId?.supplierName,
            receivedBy: item.receivedBy.firstName,
            createdBy: item.createdBy.firstName,
            customer: item.customer?.customerName,
            customerType: item.customer?.customerType,
            transactionItemSum: sumItemInTransaction || 0,
          };
        }),
      );
      return {
        receipt,
        receiptItem: output,
        total: output.length,
      };
    }
  }

  async findReceiptByReceiptNo2({
    limit = 10,
    offset = 0,
    receiptNo = '',
  }: {
    limit: number;
    offset: number;
    receiptNo: string;
  }) {


              console.log("findReceiptByReceiptNo2");

    if (receiptNo === '') {
      return {
        success: true,
      };
    } else {
      const receipt = await this.rawMaterialRepository.findOne({
        where: {
          receiptNo,
        },
      });
      // if (receipt.status === RawMaterialReceiptStatus.DRAFT) {
      //   throw new HttpException(
      //     'This receipt has not saved yet',
      //     HttpStatus.BAD_REQUEST,
      //   );
      // }
      const receiptItem = await this.rawMaterialItemRepository.find({
        relations: [
          'productId',
          'receivedBy',
          'supplierId',
          'createdBy',
          'customer',
        ],
        where: {
          receiptNo: {
            receiptNo: receipt.receiptNo,
          },
          // status: Not(ReceiptItem.DRAFT),
        },
        order: {
          lotNo: 'ASC',
        },
        take: limit,
        skip: offset,
      });

      const output = await Promise.all(
        receiptItem.map(async (item) => {
          const sumItemInTransaction = await this.transactionRepository.sum(
            'quantity',
            {
              itemId: item.id,
              status: TransactionStatus.OUTBOUND
            },
          );

          console.log("sumItemInTransaction : ", sumItemInTransaction);


          const response = omit(item, [
            'productId',
            'supplierId',
            'receivedBy',
            'createdBy',
            'customer',
          ]);
          return {
            ...response,
            partNo: item.productId.partNo,
            partName: item.productId.partName,
            supplier: item?.supplierId?.supplierName,
            receivedBy: item.receivedBy.firstName,
            createdBy: item.createdBy.firstName,
            customer: item.customer?.customerName,
            customerType: item.customer?.customerType,
            transactionItemSum: sumItemInTransaction || 0,
          };
        }),
      );
      return {
        receipt,
        receiptItem: output,
        total: output.length,
      };
    }
  }

  async findAllRecieptItem({ limit = 10, offset = 0, invoiceNo = '' }) {
    const option: FindManyOptions<RawMaterialItemEntity> = {
      skip: offset,
      take: limit,
      relations: ['productId', 'receivedBy', 'supplierId'],
      where: {
        status: Not(ReceiptItem.DRAFT),
      },
      order: {
        createdAt: 'DESC',
      },
    };
    if (invoiceNo.length > 0) {
      option.where = { ...option.where, invoiceNo: Like(`%${invoiceNo}%`) };
    }
    const items = await this.rawMaterialItemRepository.find(option);
    const output = items.map((item) => {
      const response = omit(item, ['productId', 'receivedBy']);
      return {
        ...response,
        partNo: item.productId.partNo,
        partName: item.productId.partName,
        receivedBy: item.receivedBy.firstName,
      };
    });
    const total = await this.rawMaterialItemRepository.count({
      where: option.where,
    });
    return {
      items: output,
      total,
    };
  }

  async removeReceiptItemDraft(receiptItemId: string[], receiptNo: string) {
    const receiptItem = await this.rawMaterialItemRepository.find({
      where: {
        id: In(receiptItemId),
        status: ReceiptItem.DRAFT,
      },
    });
    if (isEmpty(receiptItem)) {
      throw new HttpException('Not found receipt item', HttpStatus.BAD_REQUEST);
    }
    await this.rawMaterialItemRepository.softRemove(receiptItem);
    const countItem = await this.rawMaterialItemRepository.count({
      where: {
        receiptNo: {
          receiptNo,
          status: RawMaterialReceiptStatus.DRAFT,
        },
        status: ReceiptItem.DRAFT,
      },
    });
    if (countItem === 0) {
      const receipt = await this.rawMaterialRepository.findOne({
        where: {
          receiptNo,
        },
      });
      await this.rawMaterialRepository.softRemove(receipt);
      return {
        success: true,
        deletedReceipt: true,
      };
    }
    return {
      success: true,
    };
  }

  async findScanDataInbound(getInboundDto: GetInboundV2Dto) {
    const { partNo, lotNo } = getInboundDto;
    const receiptItem = await this.rawMaterialItemRepository.findOne({
      relations: ['productId', 'receiptNo', 'supplierId'],
      where: {
        productId: {
          partNo,
        },
        lotNo,
      },
    });


    if (isEmpty(receiptItem)) {
      throw new HttpException('Not found receipt item', HttpStatus.BAD_REQUEST);
    }

    if (receiptItem.status !== ReceiptItem.WAITING) {
      throw new HttpException('Status is not match', HttpStatus.BAD_REQUEST);
    }
    const options: FindManyOptions<AreaEntity> = {
      where: {

      },
      order: {
        createdAt: 'asc',
      },
    };
    const area = await this.areaService.findByOption(options);
    const customerOption: FindManyOptions<CustomerEntity> = {
      order: {
        createdAt: 'asc',
      },
    };
    const customer = await this.customerService.findByOption(customerOption);
    const response = {
      ...omit(receiptItem, ['productId', 'supplierId']),
      partNo: receiptItem.productId.partNo,
      partName: receiptItem.productId.partName,
      supplier: receiptItem.supplierId.supplierName,
      area,
      customer,
    };
    return response;
  }
  async findScanDataInboundQc(getInboundDto: GetInboundV2Dto) {
    const { partNo, lotNo } = getInboundDto;
    const receiptItem = await this.rawMaterialItemRepository.findOne({
      relations: ['productId', 'receiptNo', 'supplierId'],
      where: {
        productId: {
          partNo,
        },
        lotNo,
      },
    });


    if (isEmpty(receiptItem)) {
      throw new HttpException('Not found receipt item', HttpStatus.BAD_REQUEST);
    }
    console.log("receiptItem.status  : ", receiptItem.status);
    if (receiptItem.status !== ReceiptItem.WAITING) {
      throw new HttpException('Status is not match', HttpStatus.BAD_REQUEST);
    }
    const options: FindManyOptions<AreaEntity> = {
      where: {

      },
      order: {
        createdAt: 'asc',
      },
    };
    const area = await this.areaService.findByOption(options);
    const customerOption: FindManyOptions<CustomerEntity> = {
      order: {
        createdAt: 'asc',
      },
    };
    const customer = await this.customerService.findByOption(customerOption);
    const response = {
      ...omit(receiptItem, ['productId', 'supplierId']),
      partNo: receiptItem.productId.partNo,
      partName: receiptItem.productId.partName,
      supplier: receiptItem.supplierId.supplierName,
      area,
      customer,
    };
    return response;
  }

  async findScanDataOutbound(getOutboundDto: GetOutboundDto) {
    const { receiptNo, partNo, lotNo } = getOutboundDto;
    const receiptItem = await this.rawMaterialItemRepository.findOne({
      relations: ['productId', 'area', 'supplierId'],
      where: {
        productId: {
          partNo,
        },
        lotNo,
        status: ReceiptItem.INBOUND,
      },
    });
    if (isEmpty(receiptItem)) {
      throw new HttpException('Not found receipt item', HttpStatus.BAD_REQUEST);
    }

    if (receiptItem.status !== ReceiptItem.INBOUND) {
      throw new HttpException('Status is not match', HttpStatus.BAD_REQUEST);
    }

    const sumLotInTransactionIn = await this.transactionRepository.sum(
      'quantity',
      {
        status: TransactionStatus.INBOUND,
        lotNo: lotNo,
      },
    );
    const sumLotInTransaction = await this.transactionRepository.sum(
      'quantity',
      {
        status: TransactionStatus.OUTBOUND,
        lotNo: lotNo,
      },
    );
    if (sumLotInTransactionIn - sumLotInTransaction < 0) {
      throw new HttpException(
        'Out of stock for this lotNo',
        HttpStatus.BAD_REQUEST,
      );
    }
    receiptItem.quantity = sumLotInTransactionIn - sumLotInTransaction;
    const receiptItemPickup = await this.rawMaterialItemRepository.findOne({
      relations: ['productId'],
      where: {
        receiptNo: {
          receiptNo: receiptNo,
        },
        productId: {
          partNo: partNo,
        },
        status: ReceiptItem.WAITING,
      },
    });

    const sumTransactionOfThisItem = await this.transactionRepository.sum(
      'quantity',
      {
        itemId: receiptItemPickup.id,
      },
    );
    receiptItemPickup.quantity -= sumTransactionOfThisItem;
    const response = {
      ...omit(receiptItem, ['productId', 'area', 'supplierId']),
      partNo: receiptItem.productId.partNo,
      partName: receiptItem.productId.partName,
      supplier: receiptItem.supplierId.supplierName,
      area: receiptItem.area.areaNo,
      pickup: receiptItemPickup,
    };
    return response;
  }

  async findScanDataOutboundFinal(getOutboundDto: GetOutboundDto) {
    const { receiptNo, partNo, lotNo } = getOutboundDto;
    const receiptItem = await this.rawMaterialItemRepository.findOne({
      relations: ['productId', 'area', 'supplierId'],
      where: {
        productId: {
          partNo,
        },
        lotNo,
        status: ReceiptItem.INBOUND,
      },
    });
    if (isEmpty(receiptItem)) {
      throw new HttpException('Not found receipt item', HttpStatus.BAD_REQUEST);
    }

    if (receiptItem.status !== ReceiptItem.INBOUND) {
      throw new HttpException('Status is not match', HttpStatus.BAD_REQUEST);
    }

    const sumLotInTransactionIn = await this.transactionRepository.sum(
      'quantity',
      {
        status: TransactionStatus.INBOUND,
        lotNo: lotNo,
      },
    );
    const sumLotInTransaction = await this.transactionRepository.sum(
      'quantity',
      {
        status: TransactionStatus.OUTBOUND,
        lotNo: lotNo,
      },
    );
    if (sumLotInTransactionIn - sumLotInTransaction < 0) {
      throw new HttpException(
        'Out of stock for this lotNo',
        HttpStatus.BAD_REQUEST,
      );
    }
    receiptItem.quantity = sumLotInTransactionIn - sumLotInTransaction;
    const receiptItemPickup = await this.rawMaterialItemRepository.findOne({
      relations: ['productId'],
      where: {
        receiptNo: {
          receiptNo: receiptNo,
        },
        productId: {
          partNo: partNo,
        },
        status: ReceiptItem.WAITING,
      },
    });

    const sumTransactionOfThisItem = await this.transactionRepository.sum(
      'quantity',
      {
        itemId: receiptItemPickup.id,
      },
    );
    receiptItemPickup.quantity -= sumTransactionOfThisItem;
    const response = {
      ...omit(receiptItem, ['productId', 'area', 'supplierId']),
      partNo: receiptItem.productId.partNo,
      partName: receiptItem.productId.partName,
      supplier: receiptItem.supplierId.supplierName,
      area: receiptItem.area.areaNo,
      pickup: receiptItemPickup,
    };
    return response;
  }

  async findScanDataOutboundFinalBK(getOutboundDto: GetInboundV2Dto) {
    const { partNo, lotNo } = getOutboundDto;
    const receiptItem = await this.rawMaterialItemRepository.findOne({
      relations: ['productId', 'receiptNo', 'supplierId'],
      where: {
        productId: {
          partNo,
        },
        lotNo,

      },
    });


    if (isEmpty(receiptItem)) {
      throw new HttpException('Not found receipt item', HttpStatus.BAD_REQUEST);
    }
    console.log("receiptItem.status  : ", receiptItem.status);
    if (receiptItem.status !== ReceiptItem.INBOUND) {
      throw new HttpException('Status is not match', HttpStatus.BAD_REQUEST);
    }
    const options: FindManyOptions<AreaEntity> = {
      where: {

      },
      order: {
        createdAt: 'asc',
      },
    };
    const area = await this.areaService.findByOption(options);
    const customerOption: FindManyOptions<CustomerEntity> = {
      order: {
        createdAt: 'asc',
      },
    };
    const customer = await this.customerService.findByOption(customerOption);
    const response = {
      ...omit(receiptItem, ['productId', 'supplierId']),
      partNo: receiptItem.productId.partNo,
      partName: receiptItem.productId.partName,
      supplier: receiptItem.supplierId.supplierName,
      area,
      customer,
    };
    return response;
  }

  async findScanDataMove(getInboundDto: GetInboundDto) {
    const { partNo, lotNo, stockType } = getInboundDto;
    const receiptItem = await this.rawMaterialItemRepository.findOne({
      relations: ['productId', 'area', 'receiptNo', 'supplierId'],
      where: {
        productId: {
          partNo,
        },
        lotNo,
        stockType,
      },
    });

    if (isEmpty(receiptItem)) {
      throw new HttpException('Not found receipt item', HttpStatus.BAD_REQUEST);
    }

    if (receiptItem.status !== ReceiptItem.INBOUND) {
      throw new HttpException('Status is not match', HttpStatus.BAD_REQUEST);
    }
    const customerOption: FindManyOptions<CustomerEntity> = {
      order: {
        createdAt: 'asc',
      },
    };
    const stockOut = await this.transactionRepository.sum('quantity', {
      lotNo: lotNo,
      status: TransactionStatus.OUTBOUND,
    });
    const stockIn = await this.transactionRepository.sum('quantity', {
      lotNo: lotNo,
      status: TransactionStatus.INBOUND,
    });
    if (stockIn - stockOut === 0) {
      throw new HttpException('No item in stock', HttpStatus.BAD_REQUEST);
    }

    const customer = await this.customerService.findByOption(customerOption);
    const response = {
      ...omit(receiptItem, ['productId', 'supplierId']),
      partNo: receiptItem.productId.partNo,
      partName: receiptItem.productId.partName,
      supplier: receiptItem.supplierId.supplierName,
      customer,
      stock: stockIn - stockOut,
    };
    return response;
  }


  async findScanDataMove2(getInboundDto: GetInboundDto) {
    const { partNo, lotNo, stockType } = getInboundDto;
    const receiptItem = await this.rawMaterialItemRepository.findOne({
      relations: ['productId', 'area', 'receiptNo', 'supplierId'],
      where: {
        productId: {
          partNo,
        },
        lotNo,
        stockType,
      },
    });

    if (isEmpty(receiptItem)) {
      throw new HttpException('Not found receipt item', HttpStatus.BAD_REQUEST);
    }

    if (receiptItem.status !== ReceiptItem.INBOUND) {
      throw new HttpException('Status is not match', HttpStatus.BAD_REQUEST);
    }
    const customerOption: FindManyOptions<CustomerEntity> = {
      order: {
        createdAt: 'asc',
      },
    };
    const stockOut = await this.transactionRepository.sum('quantity', {
      lotNo: lotNo,
      status: TransactionStatus.OUTBOUND,
    });
    const stockIn = await this.transactionRepository.sum('quantity', {
      lotNo: lotNo,
      status: TransactionStatus.INBOUND,
    });
    if (stockIn - stockOut === 0) {
      throw new HttpException('No item in stock', HttpStatus.BAD_REQUEST);
    }

    const customer = await this.customerService.findByOption(customerOption);
    const response = {
      ...omit(receiptItem, ['productId', 'supplierId']),
      partNo: receiptItem.productId.partNo,
      partName: receiptItem.productId.partName,
      supplier: receiptItem.supplierId.supplierName,
      customer,
      stock: stockIn - stockOut,
    };
    return response;
  }

  async findScanDataInventory(getInboundDto: GetInboundDto) {
    const { partNo, lotNo, stockType } = getInboundDto;
    const receiptItem = await this.rawMaterialItemRepository.findOne({
      relations: ['productId', 'area', 'receiptNo', 'supplierId'],
      where: {
        productId: {
          partNo,
        },
        lotNo,
        stockType,
      },
    });

    if (isEmpty(receiptItem)) {
      throw new HttpException('Not found receipt item', HttpStatus.BAD_REQUEST);
    }

    if (receiptItem.status !== ReceiptItem.INBOUND) {
      throw new HttpException('Status is not match', HttpStatus.BAD_REQUEST);
    }
    const customerOption: FindManyOptions<CustomerEntity> = {
      order: {
        createdAt: 'asc',
      },
    };
    const stockOut = await this.transactionRepository.sum('quantity', {
      lotNo: lotNo,
      status: TransactionStatus.OUTBOUND,
    });
    const stockIn = await this.transactionRepository.sum('quantity', {
      lotNo: lotNo,
      status: TransactionStatus.INBOUND,
    });
    // if (stockIn - stockOut === 0) {
    //   throw new HttpException('No item in stock', HttpStatus.BAD_REQUEST);
    // }

    const customer = await this.customerService.findByOption(customerOption);
    const response = {
      ...omit(receiptItem, ['productId', 'supplierId']),
      partNo: receiptItem.productId.partNo,
      partName: receiptItem.productId.partName,
      supplier: receiptItem.supplierId.supplierName,
      customer,
      stock: stockIn - stockOut,
    };
    return response;
  }

  async findScanDetail(getInboundDto: GetInboundDto) {
    const { partNo, lotNo } = getInboundDto;
    const receiptItem = await this.rawMaterialItemRepository.findOne({
      relations: ['productId', 'area', 'receiptNo', 'supplierId'],
      where: {
        productId: {
          partNo,
        },
        lotNo,
      },
    });

    if (isEmpty(receiptItem)) {
      throw new HttpException('Not found receipt item', HttpStatus.BAD_REQUEST);
    }
    const data = await this.productService.getSumItemDetail(
      receiptItem.productId.id,
    );
    data.areas = data.areas.filter((area) => parseFloat(area.temp_stock) != 0);
    return data;
  }

  async findAll({
    limit = 10,
    offset = 0,
  }): Promise<{ items: RawMaterialEntity[]; total: number }> {
    const items = await this.rawMaterialRepository.find({
      skip: offset,
      take: limit,
      order: {
        createdAt: 'DESC',
      },
    });
    const total = await this.rawMaterialRepository.count();
    return {
      items,
      total,
    };
  }

  async findOne(id: string): Promise<RawMaterialEntity> {
    return this.rawMaterialRepository.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<{ success: boolean }> {
    try {
      const rm = await this.rawMaterialRepository.findOne({
        where: {
          id,
        },
      });
      if (!rm) {
        throw new HttpException(
          'Not found raw material',
          HttpStatus.BAD_REQUEST,
        );
      }
      await this.rawMaterialRepository.softRemove(rm);
      return {
        success: true,
      };
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }

  async generateInvoiceNo() {
    const result = await this.rawMaterialItemRepository
      .createQueryBuilder()
      .withDeleted()
      .getCount();
    const dataLength = `${result}`;
    const prefix = 'INV';
    const yearMonthDate = moment().format('YYYYMMDDHHmmssSS');
    let generated = `${prefix}${yearMonthDate}`;
    for (let i = 0; i < 3 - dataLength.length; i++) {
      generated += '0';
    }
    generated += (result % 100) + 1;
    return generated;
  }

  async generateLotNo() {
    const result = await this.rawMaterialItemRepository
      .createQueryBuilder()
      .withDeleted()
      .getCount();
    const dataLength = `${result}`;
    const prefix = 'LOT';
    const yearMonthDate = moment().format('YYYYMMDDHHmmssSSS');
    let generated = `${prefix}${yearMonthDate}`;
    for (let i = 0; i < 3 - dataLength.length; i++) {
      generated += '0';
    }
    generated += (result % 100) + 1;
    return generated;
  }

  async getRMInformation() {
    const genLotNo = await this.generateLotNo();
    const genInvoiceNo = await this.generateInvoiceNo();
    const products = await this.productService.findProductByType(
      AreaStockType.RM,
    );
    const supplier = await this.supplierService.findPrepareSupplier();
    const users = await this.userService.findByOption({
      select: ['firstName', 'id'],
      where: { role: ENUM_ROLE.OPERATOR },
    });
    const customers = await this.customerService.findByOption({
      select: ['id', 'customerName'],
      // where: { role: ENUM_ROLE.OPERATOR },
    });
    return {
      product: products,
      suppliers: supplier,
      users,
      invoiceNo: genInvoiceNo,
      lotNo: genLotNo,
      customers,
    };
  }

  async getInformation(stockType: string, partNo: string) {
    const genLotNo = await this.generateLotNo();
    const genInvoiceNo = await this.generateInvoiceNo();
    const products = await this.productService.findProductByType(
      stockType,
      // partNo,
    );
    // const products = await this.productService.findProductByTypeAndPartNo(
    //   stockType,
    //   partNo,
    // );
    const supplier = await this.supplierService.findPrepareSupplier();
    const users = await this.userService.findByOption({
      select: ['firstName', 'id'],
      where: { role: ENUM_ROLE.OPERATOR },
    });
    const customers = await this.customerService.findByOption({
      select: ['id', 'customerName'],
      // where: { role: ENUM_ROLE.OPERATOR },
    });
    return {
      product: products,
      suppliers: supplier,
      users,
      invoiceNo: genInvoiceNo,
      lotNo: genLotNo,
      customers,
    };
  }

  async generateQRReceiptByReceiptNo(receiptNo: string) {
    const items = await this.rawMaterialItemRepository.find({
      relations: ['productId', 'supplierId'],
      where: {
        receiptNo: {
          receiptNo: receiptNo,
        },
      },
      order: {
        lotNo: 'ASC',
      },
    });
    return items;
    // return receipt;
  }

  async generateQRRMInformation(id: string) {
    const receiptItem = await this.rawMaterialItemRepository.findOne({
      relations: ['productId', 'supplierId'],
      where: { id: id },
    });
    if (isEmpty(receiptItem)) {
      throw new HttpException('Not found product', HttpStatus.BAD_REQUEST);
    }
    ``;
    // add lot
    return receiptItem;
  }

  async generateReceiptByReceiptNo(receiptNo: string) {
    const receipt = await this.rawMaterialRepository.findOne({
      where: {
        receiptNo,
      },
    });
    const receiptItem = await this.rawMaterialItemRepository.find({
      relations: ['productId', 'createdBy', 'customer'],
      where: {
        receiptNo: {
          receiptNo: receipt.receiptNo,
        },
      },
    });
    return {
      receipt,
      receiptItem: receiptItem,
    };
  }

  async getItemsArea(areaNo: string) {
    const receiptItem = await this.rawMaterialItemRepository.find({
      relations: ['productId', 'area'],
      where: {
        area: {
          areaNo,
        },
      },
    });
    const responseArea = [];
    for (const eachItem of receiptItem) {
      const tx = await this.transactionRepository.find({
        where: {
          lotNo: eachItem.lotNo,
        },
      });
      const stock = sumBy(tx, (o) => {
        if (o.status === TransactionStatus.INBOUND) {
          return +o.quantity;
        } else if (o.status === TransactionStatus.OUTBOUND) {
          return -o.quantity;
        }
      });
      const sumPrice = eachItem.price * stock;
      const temp_stock = (Math.round(stock * 100) / 100).toFixed(2);
      const temp_sumPrice = (Math.round(sumPrice * 100) / 100).toFixed(2);
      if (temp_stock !== '0.00') {
        responseArea.push({ ...eachItem, temp_stock, temp_sumPrice });
      }
    }
    return {
      receiptItem: responseArea,
    };
  }

  async updateRawMaterialItemNote(request: UpdateRawMaterialItemDto) {
    const { id, note, qty } = request;
    if (!id) {
      throw new HttpException('Not found id', HttpStatus.BAD_REQUEST);
    }
    const materialItem = await this.rawMaterialItemRepository.findOne({
      where: {
        id,
      },
    });
    if (isEmpty(materialItem)) {
      throw new HttpException('Not found receipt item', HttpStatus.BAD_REQUEST);
    }
    await this.rawMaterialItemRepository.update(materialItem.id, {
      note: note,
      quantity: qty,
    });
    return this.rawMaterialItemRepository.findOne({
      where: { id: materialItem.id },
    });
  }

  async hideRawMaterialItem(request: HideRawMaterialDto) {
    const { receiptNo } = request;
    if (!receiptNo) {
      throw new HttpException('Not found receiptNo', HttpStatus.BAD_REQUEST);
    }
    const receipt = await this.rawMaterialRepository.findOne({
      where: {
        receiptNo,
      },
    });
    if (isEmpty(receipt)) {
      throw new HttpException('Not found receipt', HttpStatus.BAD_REQUEST);
    }
    receipt.isHide = true;
    await this.rawMaterialRepository.save(receipt);
    return this.rawMaterialRepository.findOne({
      where: { id: receipt.id },
    });
  }

  async unhideRawMaterialItem(request: HideRawMaterialDto) {
    const { receiptNo } = request;
    if (!receiptNo) {
      throw new HttpException('Not found receiptNo', HttpStatus.BAD_REQUEST);
    }
    const receipt = await this.rawMaterialRepository.findOne({
      where: {
        receiptNo,
      },
    });
    if (isEmpty(receipt)) {
      throw new HttpException('Not found receipt', HttpStatus.BAD_REQUEST);
    }
    receipt.isHide = false;
    await this.rawMaterialRepository.save(receipt);
    return this.rawMaterialRepository.findOne({
      where: { id: receipt.id },
    });
  }



  async UpdateInbound(createInboundDto: UpdateInboundDto) {
    const { receiptNo, partNo, lotNo, quantity, userId, checkStatus } =
      createInboundDto;
    const user = await this.userService.findById(userId);
    if (isEmpty(user)) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    const receipt = await this.rawMaterialRepository.findOne({
      where: {
        receiptNo,
        status: RawMaterialReceiptStatus.COMPLETE,
        // stockType,
      },
    });
    const stockType = receipt.stockType;

    console.log('📦 products from stockType =', stockType);


    if (isEmpty(receipt)) {
      throw new HttpException('Data not match', HttpStatus.BAD_REQUEST);
    }
    const receiptItem = await this.rawMaterialItemRepository.findOne({
      relations: ['receiptNo', 'productId', 'area'],
      where: {
        lotNo,
        status: ReceiptItem.INBOUND,
        receiptNo: {
          receiptNo,
        },
        productId: {
          partNo,
          type: stockType,
        },
        stockType,
      },
    });

    if (isEmpty(receiptItem)) {
      throw new HttpException('Not found receipt item', HttpStatus.BAD_REQUEST);
    }

    const updateResult = await this.transactionRepository.update(
      {
        receipt: receipt.id,
        itemId: receiptItem.id,
        price: receiptItem.price,
      },
      {
        status: TransactionStatus.INBOUND,
        scanBy: user,
        checkStatus: checkStatus,
      },
    );
    // กันกรณีไม่มี transaction ให้ update
    if (!updateResult.affected || updateResult.affected === 0) {
      throw new HttpException(
        'Transaction not found for update',
        HttpStatus.BAD_REQUEST,
      );
    }
    return { success: true };
  }
}
