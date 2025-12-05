import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import {
  FindManyOptions,
  ILike,
  In,
  IsNull,
  Like,
  Not,
  Repository,
} from 'typeorm';
import { find, flatMap, isEmpty, omit, sumBy } from 'lodash';
import { RawMaterialItemEntity } from 'src/modules/raw-material/entities/raw-material-item.entity';
import {
  RawMaterialEntity,
  RawMaterialReceiptStatus,
} from 'src/modules/raw-material/entities/raw-material.entity';
import {
  TransactionEntity,
  TransactionStatus,
} from 'src/modules/transaction/entities/transaction.entity';
import * as moment from 'moment';
import { UtilService } from '../utils/utility.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { AreaStockType } from '../area/entities/area.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
    @InjectRepository(RawMaterialItemEntity)
    private rawMaterialItemRepository: Repository<RawMaterialItemEntity>,
    @InjectRepository(TransactionEntity)
    private transactionRepository: Repository<TransactionEntity>,
    @InjectRepository(RawMaterialEntity)
    private rawMaterialRepository: Repository<RawMaterialEntity>,
    private utilService: UtilService,
  ) {}
  async create(createProductDto: CreateProductDto): Promise<ProductEntity> {
    const product = await this.productRepository.findOne({
      where: [
        { partNo: createProductDto.partNo },
        {
          partName: createProductDto.partName,
        },
      ],
    });
    if (!isEmpty(product)) {
      throw new HttpException('Dupplicate product', HttpStatus.BAD_REQUEST);
    }
    const newProduct = await this.productRepository.create(createProductDto);
    await this.productRepository.save(newProduct);
    return newProduct;
  }

  async update(updateProductDto: UpdateProductDto): Promise<ProductEntity> {
    const { id } = updateProductDto;

    await this.productRepository.update(id, {
      ...omit(updateProductDto, ['id']),
    });

    return this.productRepository.findOne({ where: { id } });
  }

  async findAll({
    limit = 10,
    offset = 0,
    partNo,
    partName,
    model,
    size,
    spec,
  }: {
    limit: number;
    offset: number;
    partNo?: string;
    partName?: string;
    model?: string;
    size?: string;
    spec?: string;
  }): Promise<{ items: ProductEntity[]; total: number }> {
    const findOption: FindManyOptions<ProductEntity> = {
      take: limit,
      skip: offset,
      where: {
        partNo: partNo ? ILike(`%${partNo}%`) : null,
        partName: partName ? Like(`%${partName}%`) : null,
        model: model ? Like(`%${model}%`) : null,
        spec: spec ? Like(`%${spec}%`) : null,
        size: size ? ILike(`%${size}%`) : null,
      },
      order: {
        createdAt: 'DESC',
      },
    };
    const products = await this.productRepository.find(findOption);
    const total = await this.productRepository.count(findOption);
    return {
      items: products,
      total,
    };
  }

  async findOne(uuid: string): Promise<ProductEntity> {
    return this.productRepository.findOne({
      where: {
        id: uuid,
      },
    });
  }

  async save(payload: ProductEntity) {
    return this.productRepository.save(payload);
  }

  async findOneByOption(
    entity: Partial<ProductEntity>,
    findOption?: object,
  ): Promise<ProductEntity> {
    return this.productRepository.findOne({
      where: {
        ...entity,
      },
      ...findOption,
    });
  }

  async findAllByOption(
    // entity: Partial<ProductEntity>,
    findOption: FindManyOptions<ProductEntity>,
  ) {
    return this.productRepository.find(findOption);
  }

  async findProductByType(type: string): Promise<ProductEntity[]> {
    if (type != 'PICKUP') {
      return this.productRepository.find({
        where: {
          type: this.utilService.mapStringtoAreaStockType(type),
        },
      });
    } else {
      return this.productRepository.find();
    }
  }

  async findProductByTypeAndPartNo(
    type: string,
    partNo: string,
  ): Promise<ProductEntity[]> {
    if (type != 'PICKUP') {
      const findOption: FindManyOptions<ProductEntity> = {
        take: 10,
        where: {
          partNo: partNo ? ILike(`${partNo}%`) : null,
          type: this.utilService.mapStringtoAreaStockType(type),
        },
        order: {
          createdAt: 'DESC',
        },
      };
      return this.productRepository.find(findOption);
    } else {
      const findOption: FindManyOptions<ProductEntity> = {
        take: 10,
        where: {
          partNo: partNo ? ILike(`${partNo}%`) : null,
        },
        order: {
          createdAt: 'DESC',
        },
      };
      return this.productRepository.find(findOption);
    }
  }

  async remove(id: string): Promise<{ success: boolean }> {
    try {
      const product = await this.productRepository.findOne({
        where: {
          id,
        },
      });
      if (!product) {
        throw new HttpException('Not found product', HttpStatus.BAD_REQUEST);
      }
      await this.productRepository.softRemove(product);
      return {
        success: true,
      };
    } catch (e) {
      throw new Error(e);
    }
  }

  async getSumItem({
    limit = 10,
    offset = 0,
    partNo = '',
    inputPartName = undefined,
    id = '',
    stockType = 'ALL',
  }) {
    let productOption: FindManyOptions<ProductEntity>;
    if (limit == 99) {
      if (id === '') {
        productOption = {
          where: {
            partNo: ILike(`%${partNo}%`),
          },
        };
      } else {
        productOption = {
          where: {
            id,
          },
        };
      }
    } else if (id === '') {
      productOption = {
        take: limit,
        skip: offset,
        where: {
          partNo: ILike(`%${partNo}%`),
        },
      };
    } else {
      productOption = {
        take: limit,
        skip: offset,
        where: {
          id,
        },
      };
    }
    if (inputPartName) {
      productOption.where = {
        ...productOption.where,
        partName: ILike(`%${inputPartName}%`),
      };
    }

    if (stockType.length > 0 && stockType !== 'ALL') {
      productOption.where = {
        ...productOption.where,
        type: this.utilService.mapStringtoAreaStockType(stockType),
      };
    }
    const products = await this.findAllByOption(productOption);
    if (isEmpty(products)) {
      throw new HttpException('Not found product', HttpStatus.BAD_REQUEST);
    }
    const items = [];
    await Promise.all(
      products.map(async (product) => {
        const response = { ...product, stock: 0.0, sumPrice: 0.0 };

        // Fetch raw material items in parallel
        const rmItems = await this.rawMaterialItemRepository.find({
          relations: ['receiptNo', 'productId'],
          where: {
            productId: {
              id: product.id,
              partName: product.partName,
              partNo: product.partNo,
            },
            receiptNo: {
              status: Not(RawMaterialReceiptStatus.DRAFT),
            },
            lotNo: Not(IsNull()),
          },
        });

        // Process each item in parallel
        await Promise.all(
          rmItems.map(async (item) => {
            const [stockOut, stockIn] = await Promise.all([
              this.transactionRepository.sum('quantity', {
                lotNo: item.lotNo,
                status: TransactionStatus.OUTBOUND,
              }),
              this.transactionRepository.sum('quantity', {
                lotNo: item.lotNo,
                status: TransactionStatus.INBOUND,
              }),
            ]);

            const temp = stockIn - stockOut;
            response.stock += temp;
            response.sumPrice += temp * item.price;

                console.log('📦 receiptItem from getSumItem temp =', temp);

          }),
        );

        items.push(response);
      }),
    );
    // for (const product of products) {
    //   const response = { ...product, stock: 0.0, sumPrice: 0.0 };
    //   const rmItems = await this.rawMaterialItemRepository.find({
    //     relations: ['receiptNo', 'productId'],
    //     where: {
    //       productId: {
    //         id: product.id,
    //         partName: product.partName,
    //         partNo: product.partNo,
    //       },
    //       receiptNo: {
    //         status: Not(RawMaterialReceiptStatus.DRAFT),
    //       },
    //       lotNo: Not(IsNull()),
    //     },
    //   });
    //   for (const item of rmItems) {
    //     const stockOut = await this.transactionRepository.sum('quantity', {
    //       lotNo: item.lotNo,
    //       status: TransactionStatus.OUTBOUND,
    //     });
    //     const stockIn = await this.transactionRepository.sum('quantity', {
    //       lotNo: item.lotNo,
    //       status: TransactionStatus.INBOUND,
    //     });
    //     const temp = stockIn - stockOut;
    //     response.stock += temp;
    //     response.sumPrice += temp * item.price;
    //   }
    //   items.push(response);
    // }
    // productOption.take = undefined;
    const total = await this.productRepository.count(productOption);
    return { items, total };
  }

  async getSumItemExcel({
    limit = 10,
    offset = 0,
    partNo = '',
    inputPartName = undefined,
    id = '',
    stockType = 'ALL',
  }) {
    let productOption: FindManyOptions<ProductEntity>;
    if (limit == 99) {
      if (id === '') {
        productOption = {
          where: {
            partNo: ILike(`%${partNo}%`),
          },
        };
      } else {
        productOption = {
          where: {
            id,
          },
        };
      }
    } else if (id === '') {
      productOption = {
        take: limit,
        skip: offset,
        where: {
          partNo: ILike(`%${partNo}%`),
        },
      };
    } else {
      productOption = {
        take: limit,
        skip: offset,
        where: {
          id,
        },
      };
    }
    if (inputPartName) {
      productOption.where = {
        ...productOption.where,
        partName: ILike(`%${inputPartName}%`),
      };
    }

    if (stockType.length > 0 && stockType !== 'ALL') {
      productOption.where = {
        ...productOption.where,
        type: this.utilService.mapStringtoAreaStockType(stockType),
      };
    }
    const products = await this.findAllByOption(productOption);
    if (isEmpty(products)) {
      throw new HttpException('Not found product', HttpStatus.BAD_REQUEST);
    }

    const items = [];
    // Fetch all raw material items for all products in a single query
    const productIds = products.map((product) => product.id);
    const rmItems = await this.rawMaterialItemRepository.find({
      relations: ['receiptNo', 'productId'],
      where: {
        productId: {
          id: In(productIds),
        },
        receiptNo: {
          status: Not(RawMaterialReceiptStatus.DRAFT),
        },
        lotNo: Not(IsNull()),
      },
    });
    console.log(rmItems.length);

    // Group raw material items by product id
    const rmItemsByProductId = rmItems.reduce((acc, item) => {
      const productId = item.productId.id;
      if (!acc[productId]) {
        acc[productId] = [];
      }
      acc[productId].push(item);
      return acc;
    }, {});

    // Fetch all transaction sums for INBOUND and OUTBOUND in a single query
    const lotNos = rmItems.map((item) => item.lotNo);
    const [inboundSums, outboundSums] = await Promise.all([
      this.transactionRepository
        .createQueryBuilder('transaction')
        .select('transaction.lotNo')
        .addSelect('SUM(transaction.quantity)', 'sum')
        .where('transaction.lotNo IN (:...lotNos)', { lotNos })
        .andWhere('transaction.status = :status', {
          status: TransactionStatus.INBOUND,
        })
        .groupBy('transaction.lotNo')
        .getRawMany(),
      this.transactionRepository
        .createQueryBuilder('transaction')
        .select('transaction.lotNo')
        .addSelect('SUM(transaction.quantity)', 'sum')
        .where('transaction.lotNo IN (:...lotNos)', { lotNos })
        .andWhere('transaction.status = :status', {
          status: TransactionStatus.OUTBOUND,
        })
        .groupBy('transaction.lotNo')
        .getRawMany(),
    ]);
    console.log(inboundSums, outboundSums);

    // Map the sums by lotNo for quick lookup
    const inboundSumsByLotNo = inboundSums.reduce(
      (acc, { transaction_lotNo, sum }) => {
        acc[transaction_lotNo] = parseFloat(sum);
        return acc;
      },
      {},
    );

    const outboundSumsByLotNo = outboundSums.reduce(
      (acc, { transaction_lotNo, sum }) => {
        acc[transaction_lotNo] = parseFloat(sum);
        return acc;
      },
      {},
    );

    console.log(inboundSumsByLotNo, outboundSumsByLotNo);

    // Process each product in parallel
    await Promise.all(
      products.map(async (product) => {
        const response = { ...product, stock: 0.0, sumPrice: 0.0 };
        const productRmItems = rmItemsByProductId[product.id] || [];

        productRmItems.forEach((item: { lotNo: string; price: number }) => {
          const stockIn = inboundSumsByLotNo[item.lotNo] || 0;
          const stockOut = outboundSumsByLotNo[item.lotNo] || 0;
          const temp = stockIn - stockOut;
          response.stock += temp;
          response.sumPrice += temp * item.price;
        });

        items.push(response);
      }),
    );
    const total = await this.productRepository.count(productOption);
    return { items, total };
  }

  async getSumItemDetail(productId: string) {
    const product = await this.findOneByOption({ id: productId });
    if (isEmpty(product)) {
      throw new HttpException('Not found product', HttpStatus.BAD_REQUEST);
    }
    const receiptItems: RawMaterialItemEntity[] =
      await this.rawMaterialItemRepository.find({
        relations: ['receiptNo', 'area', 'productId'],
        where: {
          productId: {
            id: product.id,
          },
          receiptNo: {
            status: Not(RawMaterialReceiptStatus.DRAFT),
          },
          lotNo: Not(IsNull()),
        },
      });
    if (isEmpty(receiptItems)) {
      return { receiptItems: [], areas: [] };
    }
    const mappedArea = [];
    const responseArea = [];
    flatMap(receiptItems, (item: RawMaterialItemEntity) => {
      if (item.area === null) return;
      return find(mappedArea, (ix) => ix.id === item.area.id)
        ? null
        : mappedArea.push({
            area: item.area,
            lotNo: item.lotNo,
            price: item.price,
          });
    });
    for (const eachArea of mappedArea) {
      const tx = await this.transactionRepository.find({
        where: {
          lotNo: eachArea.lotNo,
        },
      });
      const stock = sumBy(tx, (o) => {
        if (o.status === TransactionStatus.INBOUND) {
          return +o.quantity;
        } else if (o.status === TransactionStatus.OUTBOUND) {
          return -o.quantity;
        }
      });
      const sumPrice = eachArea.price * stock;
      const temp_stock = (Math.round(stock * 100) / 100).toFixed(2);
      const temp_sumPrice = (Math.round(sumPrice * 100) / 100).toFixed(2);
      if (temp_stock !== '0.00') {
        responseArea.push({ ...eachArea, temp_stock, temp_sumPrice });
      }
    }

    // if (isEmpty(receiptItems)) {
    //   throw new HttpException(
    //     'Not found any receipt items',
    //     HttpStatus.BAD_REQUEST,
    //   );
    // }

    const mappedReceipts = [];
    flatMap(receiptItems, (item: RawMaterialItemEntity) =>
      find(mappedReceipts, (ix) => ix.receiptNo === item.receiptNo.receiptNo)
        ? null
        : mappedReceipts.push(omit(item.receiptNo, ['area'])),
    );
    return { receiptItems: mappedReceipts, areas: responseArea };
  }

  async getSumItemArea({ limit = 10, offset = 0 }) {
    const queryBuilder: {
      areaId: string;
      areaName: string;
      receiptId: string;
      lotNo: string;
      type: AreaStockType;
    }[] = await this.transactionRepository
      .createQueryBuilder('transaction')
      .leftJoinAndSelect('areas', 'area', 'transaction.areaId = area.id')
      .select('transaction.receipt_no', 'receiptId')
      .distinct(true)
      .addSelect('area.id', 'areaId')
      .addSelect('area.area_name', 'areaName')
      .addSelect('transaction.lotNo', 'lotNo')
      .addSelect('transaction.type', 'type')
      .where('transaction.created_at BETWEEN :start AND :end', {
        start: new Date(moment().startOf('day').toISOString()),
        end: new Date(moment().endOf('day').toISOString()),
      })
      .limit(limit)
      .offset(offset)
      .getRawMany();
    const total = await this.transactionRepository
      .createQueryBuilder('transaction')
      .leftJoinAndSelect('areas', 'area', 'transaction.areaId = area.id')
      .select('transaction.receipt_no', 'receiptId')
      .distinct(true)
      .addSelect('area.id', 'areaId')
      .addSelect('area.area_name', 'areaName')
      .addSelect('transaction.lotNo', 'lotNo')
      .where('transaction.created_at BETWEEN :start AND :end', {
        start: new Date(moment().startOf('day').toISOString()),
        end: new Date(moment().endOf('day').toISOString()),
      })
      .getRawMany();
    const items = [];

    // STEP 1 QUERY TRANSACTION FOR AREA
    // STEP 2

    for (const transaction of queryBuilder) {
      const response = {};
      const dbTransaction = await this.transactionRepository.find({
        where: {
          lotNo: transaction.lotNo,
          receipt: transaction.receiptId,
          type: transaction.type,
          area: {
            id: transaction.areaId,
            areaName: transaction.areaName,
          },
        },
      });
      const sumQuantity = sumBy(dbTransaction, (o) => {
        if (o.status === TransactionStatus.INBOUND) {
          return +o.quantity;
        } else if (o.status === TransactionStatus.OUTBOUND) {
          return -o.quantity;
        }
      });
      const getTx = await this.transactionRepository.findOne({
        relations: ['area'],
        where: {
          lotNo: transaction.lotNo,
          receipt: transaction.receiptId,
          type: transaction.type,
          area: {
            id: transaction.areaId,
            areaName: transaction.areaName,
          },
        },
      });
      const rmReceiptItem = await this.rawMaterialItemRepository.findOne({
        relations: ['productId'],
        where: {
          receiptNo: {
            id: getTx.receipt,
          },
        },
      });
      items.push(
        Object.assign(response, {
          ...getTx.area,
          stock: sumQuantity,
          lotNo: transaction.lotNo,
          product: rmReceiptItem.productId,
        }),
      );
    }
    return { items, total: total.length };
  }

  async test() {
    const transactions = await this.transactionRepository.find({
      relations: ['area'],
    });
    for (const transaction of transactions) {
      const receipt = await this.rawMaterialRepository.findOne({
        where: {
          id: transaction.receipt,
        },
      });
      if (isEmpty(receipt)) {
        continue;
      }
      // if (!isEmpty(receipt.area)) continue;
      // receipt.area = transaction.area;
      await this.rawMaterialRepository.save(receipt);
    }
    return {
      success: true,
    };
  }
}
