import {
  AreaEntity,
  AreaStockType,
} from 'src/modules/area/entities/area.entity';
import { UserEntity } from 'src/modules/users/entities/user.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Entity,
} from 'typeorm';

export enum TransactionStatus {
  INBOUND = 'INBOUND',
  OUTBOUND = 'OUTBOUND',
  DRAFT = 'DRAFT',
  CREATED = 'CREATED',
  HOLD = 'HOLD',
  HOLD2 = 'HOLD2',
}

@Entity('transaction')
export class TransactionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'receipt_no',
  })
  receipt: string;

  @Column({
    type: 'enum',
    enum: TransactionStatus,
    default: TransactionStatus.INBOUND,
  })
  status: TransactionStatus;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  quantity: number;

  @ManyToOne(() => AreaEntity, (area) => area.id)
  @JoinColumn()
  area: AreaEntity;

  @Column()
  lotNo: string;

  @Column({
    name: 'item_id',
  })
  itemId: string;
  

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  price: number;

  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({
    name: 'scan_by',
  })
  scanBy: UserEntity;

  @Column({
    type: 'enum',
    enum: AreaStockType,
  })
  type: AreaStockType;

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
