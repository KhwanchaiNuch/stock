import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { UsersModule } from 'src/modules/users/users.module';
import { JwtService } from '@nestjs/jwt';
import { AccessTokenStrategy } from 'src/strategies/accessToken.strategy';
import { RefreshTokenStrategy } from 'src/strategies/refreshToken.strategy';

@Module({
  controllers: [AuthenticationController],
  providers: [
    AuthenticationService,
    JwtService,
    AccessTokenStrategy,
    RefreshTokenStrategy,
  ],
  imports: [UsersModule],
})
export class AuthenticationModule {}
