// src/modules/transaction/dto/update-qc-status.dto.ts
import { IsIn, IsString } from 'class-validator'

export class UpdateQcStatusDto {
  @IsString()
  id: string

  @IsIn(['OK', 'NG'])
  checkStatus: 'OK' | 'NG'
}

export class UpdateAllQcStatusDto {
  @IsIn(['OK', 'NG'])
  checkStatus: 'OK' | 'NG'
}
