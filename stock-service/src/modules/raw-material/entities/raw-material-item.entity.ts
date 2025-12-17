import { ProductEntity } from 'src/modules/product/entities/product.entity';
import { UserEntity } from 'src/modules/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RawMaterialEntity } from './raw-material.entity';
import {
  AreaEntity,
  AreaStockType,
} from 'src/modules/area/entities/area.entity';
import { CustomerEntity } from 'src/modules/customer/entities/customer.entity';
import { SupplierEntity } from 'src/modules/suppliers/entities/supplier.entity';

export enum ReceiptItem {
  WAITING = 'WAITING',
  INBOUND = 'INBOUND',
  OUTBOUND = 'OUTBOUND',
  DRAFT = 'DRAFT',
   HOLD = 'HOLD',
    HOLD2 = 'HOLD2',
}

@Entity('raw_material_item')
export class RawMaterialItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => RawMaterialEntity, (rm) => rm.receiptNo, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'receipt_no',
  })
  receiptNo: RawMaterialEntity;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  quantity: number;

  @Column({     name: 'quantity_ok', type: 'decimal', precision: 10, scale: 2, default: 0 })
  quantityOk: number;

  @Column({
    nullable: true,
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
  })
  price: number;

  @Column({
    name: 'invoice_no',
    nullable: true,
  })
  invoiceNo: string;

  @Column({
    name: 'lot_number',
    nullable: true,
  })
  lotNo: string;

  @ManyToOne(() => ProductEntity, (p) => p.id)
  @JoinColumn({
    name: 'product_id',
  })
  productId: ProductEntity;

  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({
    name: 'received_by',
  })
  receivedBy: UserEntity;

  @ManyToOne(() => CustomerEntity, (user) => user.id)
  @JoinColumn({
    name: 'customer_id',
  })
  customer: CustomerEntity;

  @ManyToOne(() => SupplierEntity, (supplier) => supplier.id)
  @JoinColumn({
    name: 'supplier_id',
  })
  supplierId: SupplierEntity;

  @Column({
    nullable: true,
  })
  date: Date;

  @Column({
    enum: ReceiptItem,
    type: 'enum',
    default: ReceiptItem.WAITING,
  })
  status: ReceiptItem;

  @Column({
    name: 'stock_type',
    enum: AreaStockType,
    type: 'enum',
  })
  stockType: AreaStockType;

  @Column({
    nullable: true,
  })
  note: string;

  @ManyToOne(() => AreaEntity, (area) => area.id, { nullable: true })
  @JoinColumn({
    name: 'area_id',
  })
  area: AreaEntity;

  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({
    name: 'created_by',
  })
  createdBy: UserEntity;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
  })
  deletedAt: Date;

  @Column({
    name: 'check_status',
    nullable: true,   // ใส่ก็ได้ ไม่ใส่ก็ได้ ถ้า DB พร้อมแล้ว
  })
  checkStatus: string;
}
