import {
  Controller,
  Get,
  HttpStatus,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { UtilService } from './modules/utils/utility.service';

@Controller({ version: '1' })
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly utilService: UtilService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImg(@UploadedFile() file: Express.Multer.File) {
    // const result =
    console.log(file);
    const result = await this.utilService.base64ToImage(file);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }
}
