import { AreaStockType } from 'src/modules/area/entities/area.entity';
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

export enum RawMaterialType {
  INBOUND = 'INBOUND',
  OUTBOUND = 'OUTBOUND',
}

export enum RawMaterialReceiptStatus {
  COMPLETE = 'COMPLETE',
  NOT_COMPLETE = 'NOT_COMPLETE',
  DRAFT = 'DRAFT',
}

@Entity('raw_material')
export class RawMaterialEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'receipt_no',
  })
  receiptNo: string;

  @Column({
    type: 'enum',
    enum: RawMaterialType,
    default: RawMaterialType.INBOUND,
  })
  type: RawMaterialType;

  @Column({
    type: 'enum',
    enum: RawMaterialReceiptStatus,
    default: RawMaterialReceiptStatus.NOT_COMPLETE,
  })
  status: RawMaterialReceiptStatus;

  @Column({
    name: 'stock_type',
    enum: AreaStockType,
    type: 'enum',
    nullable: true,
  })
  stockType: AreaStockType;

  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({
    name: 'user_id',
  })
  user: UserEntity;

  @Column({
    nullable: true,
  })
  note: string;

  @Column({
    nullable: true,
    name: 'is_hide',
  })
  isHide: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
