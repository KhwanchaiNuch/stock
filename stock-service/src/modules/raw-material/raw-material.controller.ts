import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  HttpStatus,
  UseGuards,
  Req,
  Res,
  Put,
} from '@nestjs/common';
import { RawMaterialService } from './raw-material.service';
import { CreateRawMaterialDto } from './dto/create-raw-material.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { CreateInboundDto, GetInboundDto, GetInboundV2Dto, UpdateInboundDto } from './dto/create-inbound.dto';
import pdf from 'html-pdf';
import { RawMaterialType } from './entities/raw-material.entity';
import { CreateOutboundDto, CreateOutboundFinalsDto, GetOutboundDto } from './dto/create-outbound.dto';
import { AreaStockType } from '../area/entities/area.entity';
import * as ExcelJS from 'exceljs';
import { Response } from 'express';
import { CreateMoveDto } from './dto/create-move.dto';
import * as PDFDocument from 'pdfkit';
import * as QRCode from 'qrcode';
import { UpdateRawMaterialItemDto } from './dto/update-raw-material-item.dto';
import { HideRawMaterialDto } from './dto/hide-raw-material.dto';
import { ReceiptItem } from './entities/raw-material-item.entity';
import { Request } from 'express';

// export enum FilterReceiptStatus {
//   ALL = 'ALL',
//   COMPLETE = 'COMPLETE',
//   NOT_COMPLETE = 'NOT_COMPLETE',
// }

@Controller({ path: 'raw-material', version: '1' })
export class RawMaterialController {
  constructor(private readonly rawMaterialService: RawMaterialService) { }

  // @Get('test')
  // async test() {
  //   return this.rawMaterialService.getSumItem(
  //     'ebba7add-0169-40a7-832a-69bc0c245673',
  //   );
  // }

  @UseGuards(JwtAuthGuard)
  @Get('/rm-information')
  async getPrepareInformation() {
    const result = await this.rawMaterialService.getRMInformation();
    return { statusCode: HttpStatus.OK, result };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/information')
  async getInformation(
    @Query()
    params: {
      stockType: string;
      partNo: string;
    },
  ) {
    const { stockType, partNo } = params;
    const result = await this.rawMaterialService.getInformation(
      stockType,
      partNo,
    );
    return { statusCode: HttpStatus.OK, result };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/receipts')
  async findAllReceipt(
    @Query()
    params: {
      limit: number;
      offset: number;
      type: string;
      stockType: string;
      receiptNo: string;
      date: string;
      status: string;
      inputPartNumber: string;
    },
  ) {
    const {
      limit,
      offset,
      type,
      stockType,
      receiptNo,
      date,
      status,
      inputPartNumber,
    } = params;
    const result = await this.rawMaterialService.findAllReceipt({
      limit,
      offset,
      type,
      stockType,
      receiptNo,
      date,
      status,
      inputPartNumber,
    });
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Query() params: { limit: number; offset: number }) {
    const { limit, offset } = params;
    const result = await this.rawMaterialService.findAll({
      limit,
      offset,
    });
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/check-receipt')
  async checkReceipt(
    @Query() params: { stockType: string; type: RawMaterialType },
    @Req() req: Request,
  ) {
    const { stockType, type } = params;
    const userId = req['user']['id'];
    const result = await this.rawMaterialService.checkUserReceipt(
      userId,
      stockType,
      type,
    );
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/receipt')
  async findOne(
    @Query()
    params: {
      limit: number;
      offset: number;
      receiptNo: string;
      status: string;
      date: string;
    },
  ) {
    const result = await this.rawMaterialService.findReceiptByReceiptNo(params);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/receipt2')
  async findOne2(
    @Query()
    params: {
      limit: number;
      offset: number;
      receiptNo: string;
      status: string;
      date: string;
    },
  ) {
    const result = await this.rawMaterialService.findReceiptByReceiptNo2(params);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }
  
  @UseGuards(JwtAuthGuard)
  @Get('/receipt3')
  async findOne3(
    @Query()
    params: {
      limit: number;
      offset: number;
      receiptNo: string;
      status: string;
      date: string;
    },
  ) {
    const result = await this.rawMaterialService.findReceiptByReceiptNo3(params);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/receipt/inbound')
  // async findPickup() {
  async findPartNo() {
    const result = await this.rawMaterialService.findReceiptByTypePartNo();
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }
  @UseGuards(JwtAuthGuard)
  @Get('/receipt/outbound')
  // async findPickup() {
  async findPickup() {
    const result = await this.rawMaterialService.findReceiptByTypePickup();
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }
  @UseGuards(JwtAuthGuard)
  @Get('/receipt/outbound-final')
  // async findPickup() {
  async findPickupFinal() {
    const result = await this.rawMaterialService.findReceiptByTypePickupFianl();
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/receipt/:id')
  async remove(@Param('id') id: string) {
    const result = await this.rawMaterialService.remove(id);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('/receipt/inbound')
  async createReceipIn(
    @Req() req: Request,
    @Body() body: { receiptNo: string; stockType: AreaStockType },
  ) {
    const userId = req['user']['id'];
    const { receiptNo, stockType } = body;
    const result = await this.rawMaterialService.createReceipt(
      userId,
      receiptNo,
      stockType,
      RawMaterialType.INBOUND,
    );
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('/receipt/outbound')
  async createReceiptOut(
    @Req() req: Request,
    @Body() body: { receiptNo: string; stockType: string },
  ) {
    const userId = req['user']['id'];
    const { receiptNo, stockType } = body;
    const result = await this.rawMaterialService.createReceipt(
      userId,
      receiptNo,
      stockType,
      RawMaterialType.OUTBOUND,
    );
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/receipt')
  async deleteReceipt(@Body() body: { receiptNo: string }) {
    const result = await this.rawMaterialService.removeReceipt(body.receiptNo);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('/receipt-item')
  async createReceiptItem(
    @Body() body: CreateRawMaterialDto,
    @Req() req: Request,
  ) {
    const userId = req['user']['id'];
    const result = await this.rawMaterialService.createReceiptItem(
      body,
      userId,
    );
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/receipt-item')
  async findReceiptItem(@Query() params: { limit: number; offset: number }) {
    const result = await this.rawMaterialService.findAllRecieptItem({
      limit: params.limit,
      offset: params.offset,
    });
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/receipt-item')
  async removeReceiptItem(
    @Body() body: { receiptItemId: string; receiptNo: string; note: string },
  ) {
    const result = await this.rawMaterialService.removeReceiptItem(
      body.receiptItemId,
      body.receiptNo,
      body.note,
    );
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/receipt-item-waiting')
  async removeReceiptItemWaiting(
    @Body() body: { receiptItemId: string; receiptNo: string },
  ) {
    const result = await this.rawMaterialService.removeReceiptItemWaiting(
      body.receiptItemId,
      body.receiptNo,
    );
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/receipt-item-draft')
  async removeReceiptItemDraft(
    @Body() body: { receiptItemId: string[]; receiptNo: string },
  ) {
    const result = await this.rawMaterialService.removeReceiptItemDraft(
      body.receiptItemId,
      body.receiptNo,
    );
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('/receipt-save')
  async saveReceipt(@Req() req: Request, @Body() body: { receiptNo: string }) {
    const userId = req['user']['id'];
    const result = await this.rawMaterialService.saveReceipt(
      body.receiptNo,
      userId,
    );
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('pre-inbound')
  async getPreInbound(@Query() query: GetInboundV2Dto) {
    const result = await this.rawMaterialService.findScanDataInbound(query);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }
  @UseGuards(JwtAuthGuard)
  @Get('pre-inbound-qc')
  async getPreInboundQc(@Query() query: GetInboundV2Dto) {
    const result = await this.rawMaterialService.findScanDataInboundQc(query);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }
  @UseGuards(JwtAuthGuard)
  @Get('pre-outbound-final')
  async getPreOutboundFinal(@Query() query: GetOutboundDto) {
    const result = await this.rawMaterialService.findScanDataOutboundFinal(query);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('pre-outbound')
  async getPreOutbound(@Query() query: GetOutboundDto) {
    const result = await this.rawMaterialService.findScanDataOutbound(query);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }
  @UseGuards(JwtAuthGuard)
  @Get('pre-move')
  async getPreMove(@Query() query: GetInboundDto) {
    const result = await this.rawMaterialService.findScanDataMove(query);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('pre-move-2')
  async getPreMove2(@Query() query: GetInboundDto) {
    const result = await this.rawMaterialService.findScanDataMove2(query);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('pre-inventory')
  async getPreInventory(@Query() query: GetInboundDto) {
    const result = await this.rawMaterialService.findScanDataInventory(query);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('scan-detail')
  async getScanDetail(@Query() query: GetInboundDto) {
    const result = await this.rawMaterialService.findScanDetail(query);
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('create-inbound')
  async createInbound(
    @Body() createInboundRawMaterialDto: CreateInboundDto,
    @Req() req: Request,
  ) {
    const userId = req['user']['id'];
    const result = await this.rawMaterialService.createInbound({
      ...createInboundRawMaterialDto,
      userId,
    });
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('update-inbound')
  async updateInbound(
    @Body() updateInboundRawMaterialDto: UpdateInboundDto,
    @Req() req: Request,
  ) {
    const userId = req['user']['id'];
    const result = await this.rawMaterialService.createInboundST2({
      ...updateInboundRawMaterialDto,
      userId,
    });
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('create-outbound')
  async createOutbound(
    @Body() createOutboundRawMaterialDto: CreateOutboundDto,
    @Req() req: Request,
  ) {
    const userId = req['user']['id'];
    const result = await this.rawMaterialService.createOutbound({
      ...createOutboundRawMaterialDto,
      userId,
    });
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('create-outbound-final')
  async createOutboundFinal(
    @Body() createOutboundRawMaterialDto: CreateOutboundFinalsDto,
    @Req() req: Request,
  ) {
    const userId = req['user']['id'];
    const { move, location, partNo, lotNo, stockType,quantityOk } = createOutboundRawMaterialDto;
    if(quantityOk > 0){
        const result = await this.rawMaterialService.createOutboundFinal({
        ...createOutboundRawMaterialDto,
        userId,
      });
    }
    

    if (move && move > 0 && location && location.trim() !== '') {
      const result2 = await this.rawMaterialService.createMove2({
        partNo,
        lotNo,
        area: location,
        stockType,
        userId,
        move
      });
      console.log('result2 : ', result2);
    }

    
    return {
      statusCode: HttpStatus.OK,
      success : true
      //result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('create-outbound-final-move')
  async createOutboundFinalMove(
    @Body() createOutboundRawMaterialDto: CreateOutboundFinalsDto,
    @Req() req: Request,
  ) {
    const userId = req['user']['id'];

    const { move, location, partNo, lotNo, stockType } = createOutboundRawMaterialDto;
    const result = await this.rawMaterialService.createMove({
      partNo,
      lotNo,
      area: location,
      stockType,
      userId,
    });
    console.log('result : ', result);

    return {
      statusCode: HttpStatus.OK,
      result,
    };





  }

  @UseGuards(JwtAuthGuard)
  @Post('move')
  async createMove(
    @Body() createMoveRawMaterialDto: CreateMoveDto,
    @Req() req: Request,
  ) {
    const userId = req['user']['id'];
    const result = await this.rawMaterialService.createMove({
      ...createMoveRawMaterialDto,
      userId,
    });
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('/pdfv1')
  async generatePdfFromImages(@Req() req: Request, @Res() res: Response) {
    try {
      const id = req['body']['id'];
      const palletCount = req['body']['palletCount'];
      const pallet1 = req['body']['pallet1'];
      const pallet2 = req['body']['pallet2'];
      const pallet3 = req['body']['pallet3'];
      // this.rawMaterialService.createReceiptItem
      const receiptItem = await this.rawMaterialService.generateQRRMInformation(
        id,
      );
      let file =
        receiptItem.productId.partNo +
        ',' +
        receiptItem.productId.partName +
        ',';
      file =
        file +
        receiptItem.lotNo +
        ',' +
        receiptItem.date.toLocaleDateString() +
        ',' +
        receiptItem.supplierId.supplierName;
      const dataP1 = file + ',' + pallet1;
      const dataP2 = file + ',' + pallet2;
      const dataP3 = file + ',' + pallet3;

      const data = [dataP1, dataP2, dataP3];
      const dataToDisplay = data.slice(0, palletCount);
      // const dataToDisplay = data;

      const htmlContent = `
        <html>
          <body>
            <script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>
            <div style="display: flex; flex-wrap: wrap;">
            ${dataToDisplay
          .map(
            (d, i) => `
            <table style="margin-left: auto; margin-right: auto;">
              <tr>
                  <td class="column"  style="padding: 10px;" id="${i}">
                  <script type="text/javascript">
                  var qrcode = new QRCode(document.getElementById("${i}"), {
                  text: "${d}",
                  width: 100,
                  height: 100,
                  correctLevel : QRCode.CorrectLevel.H
                  });
                  </script>
                  </td>
                  <td class="column">
                  <ul style="list-style-type: none;">
                      <li>Part No.</li>
                      <li>Part Name</li>
                      <li>Lot No.</li>
                      <li>Receipt Date</li>
                      <li>Supplier Name</li>
                      <li>Quantity</li>
                  </ul>
                  </td>
                  <td>
                      <ul style="list-style-type: none;">
                          <li>: ${receiptItem.productId.partNo}</li>
                          <li>: ${receiptItem.productId.partName}</li>
                          <li>: ${receiptItem.lotNo}</li>
                          <li>: ${receiptItem.date.toDateString()}</li>
                          <li>: ${receiptItem.supplierId.supplierName}</li>
                          <li>: ${d.split(',').pop()}</li>
                      </ul>
                  </td>
              </tr>
            </table>        
            `,
          )
          .join('')}
            </div>
          </body>
        </html>
      `;

      // ...

      const pdfOptions = {
        format: 'A4',
      };

      pdf.create(htmlContent, pdfOptions).toBuffer((err, pdfBuffer) => {
        if (err) {
          console.error('Failed to generate PDF', err);
          res.status(500).send('Internal Server Error');
        } else {
          res.setHeader('Content-Type', 'application/pdf');
          res.setHeader(
            'Content-Disposition',
            'attachment; filename=generated.pdf',
          );
          res.send(pdfBuffer);
        }
      });
    } catch (error) {
      console.error('Failed to generate PDF from images', error);
      res.status(500).send('Internal Server Error');
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('/receipt-generate-excel')
  async generateExcel(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<void> {
    const workbook = new ExcelJS.Workbook();
    const receiptNo = req['body']['receiptNo'];
    const worksheet = workbook.addWorksheet(receiptNo);
    const result = await this.rawMaterialService.generateReceiptByReceiptNo(
      receiptNo,
    );
    // Add data to the worksheet
    // Header
    worksheet.addRow(['Pickup No.', result.receipt.receiptNo]);
    worksheet.addRow(['Part No.', 'Part Name', 'Ship to', 'Qty', 'By']);
    for (const receiptItem of result.receiptItem) {
      worksheet.addRow([
        receiptItem.productId.partNo,
        receiptItem.productId.partName,
        receiptItem.customer.customerName,
        receiptItem.quantity,
        receiptItem.createdBy.firstName,
      ]);
    }
    // Set response headers for Excel download
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.setHeader('Content-Disposition', 'attachment; filename=example.xlsx');

    // Pipe the workbook to the response
    await workbook.xlsx.write(res);

    // End the response
    res.end();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/items-area')
  async getItemsArea(@Query() params: { areaNo: string }) {
    const { areaNo } = params;
    const result = await this.rawMaterialService.getItemsArea(areaNo);
    return { statusCode: HttpStatus.OK, result };
  }

  @UseGuards(JwtAuthGuard)
  @Post('/pdf')
  async generatePdfFromImagesV2(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<void> {
    const id = req['body']['id'];
    const palletCount = req['body']['palletCount'];
    const pallet1 = req['body']['pallet1'];
    const pallet2 = req['body']['pallet2'];
    const pallet3 = req['body']['pallet3'];
    // this.rawMaterialService.createReceiptItem
    const receiptItem = await this.rawMaterialService.generateQRRMInformation(
      id,
    );
    let file =
      receiptItem.productId.partNo + ',' + receiptItem.productId.partName + ',';
    file =
      file +
      receiptItem.lotNo +
      ',' +
      receiptItem.date.toLocaleDateString() +
      ',' +
      receiptItem.supplierId.supplierName;
    const pallets = [pallet1, pallet2, pallet3];
    const pdfDoc = new PDFDocument();

    // Set content disposition to force download
    res.setHeader('Content-Disposition', 'attachment; filename=qrcode.pdf');

    // Pipe the PDF to the response
    pdfDoc.pipe(res);

    // Add these styles at the beginning of the generatePdf method
    // pdfDoc.style('header', { bold: true, fontSize: 10 });
    // pdfDoc.style('content', { fontSize: 10 });

    // Generate QR code and embed it in the PDF
    for (let i = 1; i <= palletCount; i++) {
      const palletData = `${file},${pallets[i - 1]}`;

      // Generate QR code and embed it in the PDF
      const qrCodeBuffer = await QRCode.toBuffer(palletData);

      // Draw QR code
      pdfDoc.image(qrCodeBuffer, 50, 50 + (i - 1) * 150, { width: 100 });

      // Draw details
      pdfDoc
        .font('Helvetica-Bold')
        .fontSize(12)
        .text(`Details for Pallet ${i}:`, 200, 50 + (i - 1) * 150);

      const details = [
        `Part No: ${receiptItem.productId.partNo}`,
        `Part Name: ${receiptItem.productId.partName}`,
        ``,
        `Lot No: ${receiptItem.lotNo}`,
        `Receipt Date: ${receiptItem.date.toDateString()}`,
        `Supplier Name: ${receiptItem.supplierId.supplierName}`,
        `Quantity: ${palletData.split(',').pop()}`,
      ];

      const startY = 70 + (i - 1) * 150;
      const lineHeight = 15;

      details.forEach((detail, index) => {
        pdfDoc
          .font('Helvetica')
          .fontSize(12)
          .text(detail, 200, startY + index * lineHeight);
      });
    }

    // End the PDF stream
    pdfDoc.end();
  }

  @UseGuards(JwtAuthGuard)
  @Post('/generate-qr')
  async generatePdfFromImagesV3(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<void> {
    const receiptNo = req['body']['receiptNo'];
    // this.rawMaterialService.createReceiptItem
    const receiptItems =
      await this.rawMaterialService.generateQRReceiptByReceiptNo(receiptNo);
    const pdfDoc = new PDFDocument();

    // Set content disposition to force download
    res.setHeader('Content-Disposition', 'attachment; filename=qrcode.pdf');

    // Pipe the PDF to the response
    pdfDoc.pipe(res);

    // Generate QR code and embed it in the PDF
    let i = 1;
    for (const item of receiptItems) {
      if (i % 5 === 0) {
        pdfDoc.addPage(); // Start a new page
        i = 1;
      }

      // const palletData = `${file},${pallets[i - 1]}`;
      const file =
        item.productId.partNo +
        ',' +
        item.productId.partName +
        ',' +
        item.lotNo +
        ',' +
        item.date.toLocaleDateString() +
        ',' +
        item.supplierId.supplierName +
        ',' +
        item.quantity;
      // Generate QR code and embed it in the PDF
      const qrCodeBuffer = await QRCode.toBuffer(file);

      // Draw QR code
      pdfDoc.image(qrCodeBuffer, 50, 50 + (i - 1) * 150, { width: 100 });

      // Draw details
      pdfDoc
        .font('Helvetica-Bold')
        .fontSize(12)
        .text(`Details for Item:`, 200, 50 + (i - 1) * 150);

      const status =
        item.status === ReceiptItem.INBOUND ? 'Completed' : 'In Progress';
      const details = [
        `Part No: ${item.productId.partNo}`,
        `Part Name: ${item.productId.partName}`,
        ``,
        `Lot No: ${item.lotNo}`,
        `Receipt Date: ${item.date.toDateString()}`,
        `Supplier Name: ${item.supplierId.supplierName}`,
        `Quantity: ${item.quantity}`,
        `Status: ${status}`,
      ];

      const startY = 70 + (i - 1) * 150;
      const lineHeight = 15;

      details.forEach((detail, index) => {
        pdfDoc
          .font('Helvetica')
          .fontSize(12)
          .text(detail, 200, startY + index * lineHeight);
      });
      i++;
    }

    // End the PDF stream
    pdfDoc.end();
  }

  @UseGuards(JwtAuthGuard)
  @Put('/note')
  async update(@Body() updateRawMaterialItemDto: UpdateRawMaterialItemDto) {
    const result = await this.rawMaterialService.updateRawMaterialItemNote(
      updateRawMaterialItemDto,
    );
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('/hide-receipt')
  async hideReceipt(@Body() hideRawMaterialDto: HideRawMaterialDto) {
    const result = await this.rawMaterialService.hideRawMaterialItem(
      hideRawMaterialDto,
    );
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('/unhide-receipt')
  async unhideReceipt(@Body() hideRawMaterialDto: HideRawMaterialDto) {
    const result = await this.rawMaterialService.unhideRawMaterialItem(
      hideRawMaterialDto,
    );
    return {
      statusCode: HttpStatus.OK,
      result,
    };
  }
}
