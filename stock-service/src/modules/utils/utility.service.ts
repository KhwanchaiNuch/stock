import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { writeFileSync } from 'fs';
import { v4 as uuid } from 'uuid';
import { AreaStockType } from '../area/entities/area.entity';

@Injectable()
export class UtilService {
  base64ToImage(file: Express.Multer.File) {
    if (!file) {
      return {
        success: false,
      };
    }
    const uniqueId = uuid();
    const fileName = `${uniqueId}-${file.originalname}`;
    const result = writeFileSync(`./src/assets/imgs/${fileName}`, file.buffer);
    return {
      success: true,
      fileName: fileName,
      result,
    };
  }

  mapStringtoAreaStockType(input: string) {
    switch (input) {
      case 'RM':
        return AreaStockType.RM;
      case 'WIP':
        return AreaStockType.WIP;
      case 'FG':
        return AreaStockType.FG;
      case 'BS':
        return AreaStockType.BS;
      default:
        throw new HttpException('stock Type not match', HttpStatus.BAD_REQUEST);
    }
  }
}
