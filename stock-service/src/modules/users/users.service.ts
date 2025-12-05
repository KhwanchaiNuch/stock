import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ENUM_ROLE, UserEntity } from './entities/user.entity';
import { FindManyOptions, Like, Repository } from 'typeorm';
import { isEmpty, omit } from 'lodash';
import * as bcrypt from 'bcrypt';
import { UserTokenEntity } from './entities/user-token.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    @InjectRepository(UserTokenEntity)
    private usersTokenRepository: Repository<UserTokenEntity>,
  ) {}

  async findByUsername(username: string): Promise<UserEntity> {
    const result = await this.usersRepository.findOne({
      where: {
        username,
      },
    });
    if (!result) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    return result;
  }

  async findUserProfile(userId: string): Promise<Partial<UserEntity>> {
    const result = await this.usersRepository.findOne({
      where: {
        id: userId,
      },
    });
    if (!result) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    const filterPassword = omit(result, ['password']);
    return filterPassword;
  }

  async findByName(name: string): Promise<UserEntity> {
    const result = await this.usersRepository.findOne({
      where: {
        firstName: name,
      },
    });
    if (!result) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    return result;
  }

  async findById(userId: string): Promise<UserEntity> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const result = await this.usersRepository.findOne({
      where: {
        id: userId,
      },
      relations: ['userToken'],
    });
    if (!result) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    result.password = '';
    return result;
  }

  async create(createUserDto: CreateUserDto) {
    const {
      firstName,
      lastName = '',
      operatorNo,
      password,
      role,
    } = createUserDto;
    const user = await this.usersRepository.findOne({
      where: {
        username: operatorNo,
      },
    });
    if (user) {
      throw new HttpException('User is dupplicated.', HttpStatus.BAD_REQUEST);
    }
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const encryptPassword = await bcrypt.hash(password, salt);
    const payload = {
      firstName,
      lastName,
      username: operatorNo,
      password: encryptPassword,
      role,
    };
    const newUser = await this.usersRepository.create(payload);
    await this.usersRepository.save(newUser);
    return omit(newUser, ['password']);
  }

  async update(updateUserDto: UpdateUserDto) {
    const { id, password } = updateUserDto;
    if (!id) {
      throw new HttpException('Not found id', HttpStatus.BAD_REQUEST);
    }
    const user = await this.usersRepository.findOne({
      where: { id },
    });
    if (isEmpty(user)) {
      throw new HttpException('Not found User', HttpStatus.BAD_REQUEST);
    }
    const payload = { ...updateUserDto };
    if (password) {
      const saltRound = 10;
      const salt = await bcrypt.genSalt(saltRound);
      const encryptPassword = await bcrypt.hash(password, salt);
      payload.password = encryptPassword;
    }
    await this.usersRepository.update(user.id, {
      ...omit(payload, ['id', 'operatorNo']),
    });
    const updatedUser = await this.usersRepository.findOne({
      where: { id: user.id },
    });
    return omit(updatedUser, ['password']);
  }

  async findAll({
    limit = 10,
    offset = 0,
    operatorNo,
    name,
    level,
  }: {
    limit: number;
    offset: number;
    operatorNo?: string;
    name?: string;
    level?: ENUM_ROLE;
  }) {
    const findOption: FindManyOptions<UserEntity> = {
      select: {
        password: false,
      },
      take: limit,
      skip: offset,
      where: {
        username: operatorNo ? Like(`%${operatorNo}%`) : null,
        firstName: name ? Like(`%${name}%`) : null,
        role: level,
      },
      order: {
        createdAt: 'DESC',
      },
    };
    const users = await this.usersRepository.find(findOption);
    const total = await this.usersRepository.count(findOption);
    return {
      items: users,
      total,
    };
  }

  async findOne(id: string) {
    const user = await this.usersRepository.findOne({
      where: {
        id,
      },
    });
    return { ...user.toJson() };
  }

  async findByOption(
    options: FindManyOptions<UserEntity>,
  ): Promise<UserEntity[]> {
    const users = await this.usersRepository.find(options);
    return users;
  }

  async updateRefreshToken(userId: string, payload): Promise<UserTokenEntity> {
    const user = await this.usersRepository.findOne({
      where: {
        id: userId,
      },
    });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    const userToken = await this.usersTokenRepository.findOne({
      where: {
        user: {
          id: user.id,
        },
      },
    });
    if (!userToken) {
      const userToken = await this.usersTokenRepository.create({
        user,
        refreshToken: payload.userToken.refreshToken,
      });
      return this.usersTokenRepository.save(userToken);
    }
    userToken.refreshToken = payload.userToken.refreshToken;
    return this.usersTokenRepository.save(userToken);
  }

  async remove(id: string): Promise<{ success: boolean }> {
    try {
      const user = await this.usersRepository.findOne({
        where: {
          id,
        },
      });
      if (!user) {
        throw new HttpException('Not found user', HttpStatus.BAD_REQUEST);
      }
      await this.usersRepository.softRemove(user);
      return {
        success: true,
      };
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }
}
