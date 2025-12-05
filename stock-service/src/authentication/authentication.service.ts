import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } from 'src/constants';
import * as bcrypt from 'bcrypt';
import { UserEntity } from 'src/modules/users/entities/user.entity';
import { ValidateUserDto } from './dto/validata-user.dto';
import { GetTokenDto } from './dto/get-token.dto';
import { UpdateRefreshTokenDto } from './dto/update-refresh-token.dto';
import { isEmpty } from 'lodash';

@Injectable()
export class AuthenticationService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}
  async validateUser(payload: ValidateUserDto): Promise<Partial<UserEntity>> {
    const { username, password } = payload;
    const user = await this.userService.findByUsername(username);
    if (user && user.password === password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...response } = user;
      return response;
    }
    return {};
  }

  async getTokens(payload: GetTokenDto) {
    const { userId, username } = payload;
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          username,
        },
        {
          secret: JWT_ACCESS_SECRET,
          expiresIn: '15d',
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          username,
        },
        {
          secret: JWT_REFRESH_SECRET,
          expiresIn: '15d',
        },
      ),
    ]);
    return {
      accessToken,
      refreshToken,
    };
  }

  async updateRefreshToken(payload: UpdateRefreshTokenDto) {
    const { userId, refreshToken } = payload;
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const hashRefreshToken = await bcrypt.hash(refreshToken, salt);
    await this.userService.updateRefreshToken(userId, {
      userToken: {
        refreshToken: hashRefreshToken,
      },
    });
  }

  async refreshTokens(payload: UpdateRefreshTokenDto) {
    const { userId, refreshToken } = payload;
    const user = await this.userService.findById(userId);
    if (!user || !user.userToken.refreshToken) {
      throw new HttpException('Access Denied', HttpStatus.FORBIDDEN);
    }
    const refreshTokenMatches = await bcrypt.compare(
      refreshToken,
      user.userToken.refreshToken,
    );
    if (!refreshTokenMatches)
      throw new HttpException('Access Denied.', HttpStatus.FORBIDDEN);
    const token = await this.getTokens({
      userId: user.id,
      username: user.username,
    });
    await this.updateRefreshToken({
      userId: user.id,
      refreshToken: token.refreshToken,
    });
    return token;
  }

  async jwtDecode(token: string) {
    if (!token) {
      return {};
    }
    const result = await this.jwtService.decode(token);
    return result;
  }

  async login(username: string, password: string) {
    const user = await this.userService.findByUsername(username);
    if (isEmpty(user)) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    const passwordMatched = await bcrypt.compare(password, user.password);
    if (!passwordMatched) {
      throw new HttpException(
        'Password are incorrect.',
        HttpStatus.BAD_REQUEST,
      );
    }
    const tokens = await this.getTokens({
      userId: user.id,
      username: user.username,
    });
    await this.updateRefreshToken({
      userId: user.id,
      refreshToken: tokens.refreshToken,
    });
    return { ...tokens };
  }

  async logout(userId: string) {
    return this.userService.updateRefreshToken(userId, {
      userToken: {
        refreshToken: null,
      },
    });
  }
}
