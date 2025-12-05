import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  UseGuards,
  Req,
  HttpException,
  Query,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { ENUM_ROLE } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller({ version: '1', path: 'users' })
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const result = await this.usersService.create(createUserDto);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async update(@Body() updateUserDto: UpdateUserDto) {
    const result = await this.usersService.update(updateUserDto);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(
    @Query()
    params: {
      limit: number;
      offset: number;
      operatorNo?: string;
      name?: string;
      level?: ENUM_ROLE;
    },
  ) {
    const { limit, offset, operatorNo, name, level } = params;
    const result = await this.usersService.findAll({
      limit,
      offset,
      operatorNo,
      name,
      level,
    });
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('user-profile')
  async findUser(@Req() req: Request) {
    try {
      if (!req['user']['id']) {
        throw new HttpException('Access denied', HttpStatus.FORBIDDEN);
      }
      const result = await this.usersService.findUserProfile(req['user']['id']);
      return {
        status: 200,
        result,
      };
    } catch (e) {
      return {
        status: 401,
        error: e.message,
      };
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.usersService.remove(id);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(id, updateUserDto);
  // }
}
