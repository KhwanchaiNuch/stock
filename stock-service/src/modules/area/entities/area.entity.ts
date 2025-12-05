import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum AreaStockType {
  FG = 'FG',
  WIP = 'WIP',
  RM = 'RM',
  BS = 'BS',
}

@Entity('areas')
export class AreaEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'area_no',
    unique: true,
  })
  areaNo: string;

  @Column({
    name: 'area_name',
  })
  areaName: string;

  @Column({
    name: 'note',
    nullable: true,
  })
  note: string;

  @Column({
    name: 'type_of_stock',
    nullable: true,
    enum: AreaStockType,
    type: 'enum',
  })
  typeOfStock: AreaStockType;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
