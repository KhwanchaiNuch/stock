import { AreaEntity } from 'src/modules/area/entities/area.entity';
import { ProductEntity } from 'src/modules/product/entities/product.entity';
import { RawMaterialItemEntity } from 'src/modules/raw-material/entities/raw-material-item.entity';
import { RawMaterialEntity } from 'src/modules/raw-material/entities/raw-material.entity';
import { UserEntity } from 'src/modules/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

export enum OperationType {
  INBOUND = 'Inbound',
  OUTBOUND = 'Outbound',
  MOVE = 'Move',
  INVENTORY = 'Inventory',
}

@Entity('inventory')
export class InventoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => RawMaterialItemEntity, (receiptItem) => receiptItem.id)
  @JoinColumn({
    name: 'receipt_item',
  })
  receiptItem: RawMaterialItemEntity;

  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({
    name: 'operator_id',
  })
  operator: UserEntity;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  inventoryCount: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  stockCount: number;

  @Column({ default: false }) // Assuming default value is false
  isDiff: boolean;

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
}
