import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserTokenEntity } from './user-token.entity';
import { omit } from 'lodash';

export enum ENUM_ROLE {
  ADMIN = 'ADMIN',
  OPERATOR = 'OPERATOR',
  VIEWER = 'VIEWER',
}

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'first_name',
  })
  firstName: string;

  @Column({
    name: 'last_name',
  })
  lastName: string;

  @Column({
    name: 'username',
  })
  username: string;

  @Column({
    name: 'password',
  })
  password: string;

  @OneToOne(() => UserTokenEntity, (ut) => ut.user)
  userToken: UserTokenEntity;

  @Column({
    enum: ENUM_ROLE,
    type: 'enum',
    default: ENUM_ROLE.OPERATOR,
    nullable: true,
  })
  role: ENUM_ROLE;

  @Column({
    name: 'note',
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

  toJson() {
    return omit(this, ['password']);
  }
}
