import { AreaEntity } from 'src/modules/area/entities/area.entity';
import { ProductEntity } from 'src/modules/product/entities/product.entity';
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

@Entity('history')
export class HistoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: OperationType,
    nullable: false,
  })
  type: OperationType;

  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({
    name: 'operator_id',
  })
  operator: UserEntity;

  @ManyToOne(() => ProductEntity, (p) => p.id)
  @JoinColumn({
    name: 'product_id',
  })
  productId: ProductEntity;
  @ManyToOne(() => AreaEntity, (area) => area.id, { nullable: true })
  @JoinColumn({
    name: 'area_id',
  })
  area: AreaEntity;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  amount: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  stock: number;

  @Column({
    nullable: true,
  })
  note: string;

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
