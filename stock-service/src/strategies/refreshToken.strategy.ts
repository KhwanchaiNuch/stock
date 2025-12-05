import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { JWT_REFRESH_SECRET } from 'src/constants';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Request } from 'express';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          return request?.cookies?.Authentication;
        },
      ]),
      passReqToCallback: true,
      secretOrKey: JWT_REFRESH_SECRET,
    });
  }

  async validate(payload: any) {
    return {
      ...payload,
    };
  }
}
