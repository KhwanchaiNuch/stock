import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  UseGuards,
  ForbiddenException,
  Req,
  HttpException,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
// import { CreateAuthenticationDto } from './dto/create-authentication.dto';
// import { UpdateAuthenticationDto } from './dto/update-authentication.dto';

@Controller({ version: '1', path: 'auth' })
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('login')
  async login(@Body() payload: LoginDto) {
    const { username, password } = payload;
    const result = await this.authenticationService.login(username, password);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('/logout')
  async logout(@Req() req: Request) {
    try {
      if (!req['user']['id']) {
        throw new HttpException('Access denied', HttpStatus.FORBIDDEN);
      }
      await this.authenticationService.logout(req['user']['id']);
      return {
        status: 200,
        success: true,
      };
    } catch (e) {
      return {
        status: 401,
        error: e.message,
      };
    }
  }

  // @Post()
  // create(@Body() createAuthenticationDto: CreateAuthenticationDto) {
  //   return this.authenticationService.create(createAuthenticationDto);
  // }

  // @Get()
  // findAll() {
  //   return this.authenticationService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authenticationService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthenticationDto: UpdateAuthenticationDto) {
  //   return this.authenticationService.update(+id, updateAuthenticationDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authenticationService.remove(+id);
  // }
}
