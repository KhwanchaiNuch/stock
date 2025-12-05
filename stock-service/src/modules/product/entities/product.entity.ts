import { AreaStockType } from 'src/modules/area/entities/area.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'part_no',
    unique: true,
  })
  partNo: string;

  @Column({
    name: 'part_name',
  })
  partName: string;

  @Column({
    name: 'minimum_stock',
  })
  minimumStock: string;

  @Column({
    nullable: true,
  })
  note: string;

  @Column({
    nullable: true,
  })
  spec: string;

  @Column({
    nullable: true,
  })
  model: string;

  @Column({
    nullable: true,
  })
  size: string;

  @Column({
    nullable: true,
  })
  quantity: number;

  @Column({
    type: 'enum',
    enum: AreaStockType,
    nullable: false,
  })
  type: AreaStockType;

  @Column({
    name: 'image_name',
    nullable: true,
  })
  imageName: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
