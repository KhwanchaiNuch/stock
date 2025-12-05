import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertProductBS1702590239998 implements MigrationInterface {
  name = 'InsertProductBS1702590239998';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '38813-bs', '71003458 SIZE ID : 588*1207 812 UC2N-38813-A', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '48810-bs', '48810-NK067  48810-1HJOA COLUME ASSY  STEERING UPPER (NK001-SVN27-N10)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '75630-bs', '75630  3SBOAJC / MBR  ASSY - RR   SEAT  CROSS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '75650-bs', '75650  3SBOA / MBR  ASSY - RR CROSS, CTR', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5810011-bs', 'CC0001898A HDPE sheet 1500mm*2200mm*0.050 mm', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5810107-bs', 'CC0002799A CASE 478W*2250L PACK 10 PCS (PCS = 45.00 Baht)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5810108-bs', 'CC0002799B CASE (OD) 480*640*265H PACK 10 PCS(PCS)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5810109-bs', 'CC0002799C CASE 528W*2250L KI150/CA125*3/KI150 BC/F PACK 10 PCS (PCS = 38.05 Baht)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5810114-bs', 'CC0002860A PARTITION-A SIZE 354W*466L KA 150/M/KA150  C/F THAINICHI INDOOR (PACK 20 PCS) (PCS = 4.92 Baht)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5810115-bs', 'CC0002861A PARTITION-B SIZE 610W*90L KA150/M/KA150 C/F THAINICHI INDOOR (PACK 50 PCS) (PCS = 1.80 Baht)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5810116-bs', 'CC0002862A PARTITION-C SIZE 550W*86L KA 150/M/KA 150 C/F THAINICHI INDOOR (PACK 50 PCS) (PCS = 1.66 Baht)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '71000486-bs', 'EPE FOAM SHEET 1T*500W*700L MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '71000487-bs', 'EPE FOAM SHEET  1T*600W*1500L  MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '71000488-bs', 'HDPE FILM BAG 0.03*400W*1600L MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '71000489-bs', 'HDPE FILM BAG BAG  0.05*400W*700L MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '71002139-bs', 'EPE  FOAM  BAG  100mm * 1100MM * 1T MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '71002729-bs', 'CARTON BOX  OD: 80*400*60  MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '71002730-bs', 'CARTON BOX OD:120*560*110MM (226W*1385L) KA125/CA125/KA125 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '9371201023-bs', 'SQUARE TUBE 65*10*3T*770L', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '9371201030-bs', 'SQUARE  TUBES  A  (L=25)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '9371201047-bs', 'SQUARE  TUBES  A  (L=57)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '10OT4475 (Cancel)-bs', 'Carton  box  Size ID  :  265 X 350 X 170 MM  3PC-P  KA230/CA125/KA230 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '10OT4476 (Cancel)-bs', 'PAD  SIZE  :  250 X 340 MM  3PC- P CA125/CA125/CA125 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '10OT7300 (Cancel)-bs', 'PARTITION FOR NOZZLE  KA125/M/KA125 C/F (1.PARTITION-A 60W*220L 1:7, 2.PARTITION-B 60W*410L 1:6 , 3. PAD 410W*220L 1:1, 4. PAD 430W*230L 1:1 )', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '10OT7780 (Cancel)-bs', 'WOODEN PALLET 1000Wx1150Lx135H MM.(4 WAY) SCREEN NDK (COVER)  Exculde Fumigatiun', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '120740-DA-bs', 'HDPE BAG-DANA  SIZE 120W*740*0.06T  MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0080-bs', 'Carton  box  Size ID  :  265 X 350 X 170 MM  3PC-P  KA230/CA125/KA230 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0081-bs', 'PAD  SIZE  :  250 X 340 MM  3PC- P CA125/CA125/CA125 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0082-bs', 'PARTITION FOR NOZZLE  KA125/M/KA125 C/F (1.PARTITION-A 60W*220L 1:7, 2.PARTITION-B 60W*410L 1:6 , 3. PAD 410W*220L 1:1, 4. PAD 430W*230L 1:1 )', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0157-bs', 'WOODEN PALLET 1000Wx1150Lx135H MM.(4 WAY) SCREEN NDK (COVER)   Fumigatiun', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0176-bs', 'CARTON BOX SIZE 152W*278L*106H MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0177-bs', 'PAD  SIZE 144W*270L  MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0187-bs', 'WOODEN PALLET 2 WAY SIZE (OD) W-890 x L-980 x H125 MM (HEAT TREATMENT)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14SP7925-bs', 'Blue Tape (For cut end) 50W*45Y ard (40m)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '28500 (Cancel)-bs', '28500-NK071  28500-1HAOA CONTROLLER ASSY - POWER STEERING (300*684)  KI150/CA125/KI50  B/F SCREEN', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '38812-E-bs', '71003457 SIZE ID 540W*1167L 812  UC2N-38812-E', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '420AD-CB-bs', 'Carton Box  420AD-CB  ID 420*250*120H  (KL205/CA125*3/KL150  BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '420AD-CS-bs', 'Carton Box  420AD-CS ID420*220*115H  (KL205/CA125*3/KL150  BC/F)  มัดละ 10 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '428AD-CB-bs', 'Carton Box  428AD-CB  ID 420*250*120H  (KL205/CA125*3/KL150  BC/F) มัดละ 10 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '428AD-CS-bs', 'Carton Box  428AD-CS  ID 420*220*110H  (KL205/CA125*3/KL150  BC/F) มัดละ 10 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '428H-CB-bs', 'CARTON BOX 428H-CB 430*240*140 MM KL205/CA125*3/KL150 BC/F มัดละ 10 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '428HCS-bs', 'CARTON BOX D.I.D 428H-CS  420*230*135 MM KL205/CA125*3/KL150 BC/F มัดละ 10 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '428H-CS-bs', 'CARTON BOX 428H-CS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '480803RAA (Cancel)-bs', '48080-3RA1A  PACKAGE L12F FOR SERVICE PART  NISSAN  CARTON  BOX  SIZE  512W*249L', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '488103RH1A-bs', 'Package  L12F  For  Service  Part  Nissan  48810-3RH1A   (NK001-SVN10-3RA1A)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '602010504-3-bs', 'PAPER PIPE 77*5T*120L MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '602010504-4-bs', 'PAPER PIPE 77*3T*120L MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '6SW100L4-L-bs', 'Z-NK001-SLG17  SILICA GEL 100 G (NON WOVEN) (120 Pcs/Box)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '6SW10L4-6-bs', 'Z-NK001-SLG09  SILICA GEL 10 g (Non Woven)  (600 Pcs/Box)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '75510 3SB0A JD-bs', '75510 3SBOA JD / MBR  ASSY - RR  SIDE , RH', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '75511 3SB0A JD-bs', '75511 3SBOA JD / MBR  ASSY - RR  SIDE , LH', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '914-DA-bs', 'ZERUST  BAG  FERROUS    9*14*0.08 MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AAA-001-bs', 'CARTON  BOX  SIZE  OD 265W*435L*83H  KA185/CA125/KA185 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AAA-002-bs', 'CARTON  BOX  SIZE   OD   265W*435L*175H   KA185/CA125/KA185   C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AAA-002-1-bs', 'CARTON  BOX  SIZE   OD   265W*435L*175H   KA185/CA125/KA185   C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AAA-004-bs', 'SILICA GEL 10 G. (Non Woven)  600 PCS/BOX', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AAM-012 (Cancel)-bs', 'BOX FOR SIZE 270*175*95 (S)  KA230/CA125/KA230 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AB0130050-bs', 'AIR BUBBLE   SIZE 1300 mm* 50 M    (ROOL 2 LAYER 25 MM NORMAL (100 GSM)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHC-001-bs', 'CARTON BOX (388Wx450Lx385H MM)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHC-002-bs', 'BOX D/C (419Wx424Lx252H MM)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHC-003-bs', 'PAD PAPER (225Wx370L MM)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHC-004-bs', 'PAD PAPER (395Wx405L MM)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHT-014-bs', 'Service Fumigation Wooden Pallet', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHT-024-bs', 'CARTON BOX SIZE 266W*372L*242H FOR MODEL JAZZ', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHTT-017-bs', 'PAD SIZE 205Wx285L mm. กระดาษลูกฟูก 3 ชั้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AIT-001-bs', 'E992000093 CARTON B (Small) 75W*100L*270H (KS170/CA125/CA125 F)+No Print', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AIT-002-bs', 'E992000094 CARTON Module ASM BOX OD 72W*80L*182H (CB 400 G.)+Crease Line', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AIT-003-bs', 'E992000081 Carton Blower Motor  SIZE OD 185W*185L*192H (KL175/CA125/KL175 C/F) + Print screen', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-006-bs', '140022000012 OUTER BOX KA020-A :  250W*270L*140H 1:1 / PAD 250W*230L MM.1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-008-bs', '130022000039 :  INNER BOX GMT17X', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-010-bs', 'PARTITION-3B SIZE 160W*1036L  (KA185/CA125*3/KA185 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-012-bs', '130022000042 BOX SIZE (OD) : 150W*170L*175H MM. PRINT SCREEN 1 PLACE KI031-A', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-014 (Cancel)-bs', 'CAP SIZE OD : 1100W*1100L*110H MM. (KA150/3CA125/KA150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-023-bs', '130022000016 INNER BOX KI016-A', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-024-bs', '130023000016 PARTITION  KI016-A', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-026-bs', '120060000021 ECO DRY BEAD SIZE 50 G (NON WOVEN)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-027-bs', '220085000038 Zerust Ferrous Cover Bag 110cm.x110cm.x0.10m.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-028-bs', '140027000033 EVA Sheet Size : 45mm x 500mm x T30 mm. (Black Color)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-029-bs', '140027000028 EVA Sheet Size : 45mm x 70mm x T45 mm. (Black Color)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-030-bs', '140027000029 EVA Sheet Size : 85mm x 70mm x T45 mm. (Black Color)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-031-bs', '140027000030 EVA Sheet Size : 75mm x 410mm x T65 mm. (Black Color)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-035-bs', '140024000039  TOP CAP SIZE : 1136W x 1146L x 120H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-036-bs', '140024000040  SLEEVE SIZE : 1110W x 1120L x 395H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-037-bs', '140024000041  BOTTOM CAP+ PALLET SIZE : 1136W x 1146L x 225H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ALC-001-bs', 'Install heat shiled sheet : Install area top & Only hot areas on the sides 26.0 M2 Size : 2100Wx11810Lx1250H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AMT-002-bs', 'Paper sheet board OD : 2000*1000 / กระดาษลัง (KA150/M/KA150 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ART-005/1-bs', 'PKG.VG CARTON BOX', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ART-006-bs', 'PKG.VG PTT ASSY PTTA+PTTB', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ART-007 (Cancel)-bs', 'PKG.VG PAD', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ART-014-bs', 'SERI (EXPORT)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AS-001-bs', 'PP  BAND  15 MM*1200M / ROLL  สีดำ', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AS-002-bs', 'SEAL  CLIP', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-003-bs', 'CARTON BOX SIZE OD 530W*880L*262H KA185/CA125*3/KA185  BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-004 (Cancel)-bs', 'CARTON  BOX  SIZE   OD   265W*435L*175H   KA185/CA125/KA185   C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-004-1-bs', 'CARTON  BOX  SIZE   OD   265W*435L*175H   KA185/CA125/KA185   C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-005-bs', 'CARTON  BOX  SIZE  OD   265W*435L*83H   KA185/CA125/KA185   C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-012-bs', 'SILICA GEL 10 G. (Non Woven)  600 PCS/BOX', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-018-bs', 'PAD 215W*1115L (KA230/CA125*3/KA230 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-020 (Cancel)-bs', 'PAD SIZE 255W*423L KA150/CA125/KA150 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-021-bs', 'AIR BUBBLE SIZE 260W*426L*10MM (MM) PACK 100 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-026-bs', 'AIR BUBBLE 600W*1200L*10MM PACK 100 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-042-bs', 'BOX OD : 234W*1584L*152H + PAD : 214W*1564L (KA230/CA125*3/KA230 BC/F) PACK 5 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-043-bs', 'BOX OD : 234W*1584L*152H + PAD : 214W*1564L (KA125/CA125*3/KA125 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-045-bs', 'BOX OD : 593W*980L*630H + Print Screen color Red (KA230/CA125/KA230 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-046-bs', 'Partition Assy size : 583W*970L*615H (KA125/KA125*3/KA125 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-047-bs', 'AIR BUBBLE 100W*200L', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-048-bs', 'ECO DRY 10 G. ( 600 PCS/BOX )', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-063-bs', 'EPE FOAM SHEET : 200 x 1000 (COLOR WHITE) T2 MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-064-bs', 'Wood Pallet Fumigate OD : 630W*1260L*125H MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-065-bs', 'PAD : 214W*1564L', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-067(Cancel)-bs', 'CARTON BOX OD: 500W*1200L*485H MM. model TG-446270-7200T/81700T', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-067-1 (Cancel)-bs', 'CARTON BOX OD: 500W*1200L*485H MM. model TG-446270-7200T/81700T', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-067-2-bs', 'CARTON BOX OD: 500W*1200L*485H MM. model TG-446270-7200T/81700T(KA230)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-070-bs', 'Outdoor unit cover print + sunshade + concrete printing/CDU-F-1-6 BTU 196600', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-071-bs', 'Outdoor Unit Cover Pint+Sunshade+Concrete Painting/ a)Big Unit : 8 Unit , b)Small Unit : 20 Unit , c)Concrete Are', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-073-bs', 'INSTALLATION OF HEAT SHIEELD SHEET FOR OUTDOOR UNIT AIR CONDITIONER', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-074-bs', 'WOODEN PALLET 900W*1600L*130H MM (HEAT TREATMENT)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-075-bs', 'BOX OD : 593W*980L*630H + Print Screen color Red (KA230/CA125/KA230 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-076-bs', 'Partition Assy size : 582W*970L*615H (KA125/KA125*3/KA125 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ASTREA SUPRA-AD-bs', 'INNER ASTREA SUPRA  428AD X 104 L  (15T-40T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ASTREA-AD-bs', 'INNER ASTREA GRAND 428AD X 100 L  (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ATM-001-bs', 'COVER A', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ATM-002-bs', 'COVER B', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-007 (Cancel)-bs', 'Carton Box OD size 355W*550L*80H mm.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-008-bs', 'Partition assy size 345W*540L*50H mm.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-012-bs', 'CARTON BOX OD:88W*1682L*77H MM + PARTITION ASSY OD:70W*205L*69H MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-013-bs', 'BOX OD SIZE : 384W*1214L*252H MM. (KA125/3CA125/KA125) BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-014-bs', 'BOX OD SIZE : 224W*620L*197H MM. (KA185/3CA125/KA185) BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-015-1-bs', 'PARTITION SET : 172W*224L MM. (KA185/3CA125/KA185) BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-016-bs', 'VCI SHEET SIZE : 1000W*1300L*0.06T MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-017-bs', 'BOX OD SIZE : 623W*704L*192H MM. PKG for model Seat Rail Parts (Pack 5)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-018-bs', 'PARTITION ASSY 603W*685L*160H MM. PKG for model Seat Rail Parts (Pack 5)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-019-bs', 'PAD SUPPORT  603W*685L MM. PKG for model Seat Rail Parts (Pack 5)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-020-bs', 'WOODEN PALLET 714W*1256L*120H MM. PKG for model Seat Rail Parts (Pack 5)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-023-bs', 'BOX OD SIZE : 242W*704L*357H MM. PKG for model Seat Rail Parts (Pack 4)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-024-bs', 'PARTITION ASSY 222W*685L*160H MM. PKG for model Seat Rail Parts (Pack 4)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-025-bs', 'PAD SUPPORT  222W*685L MM. PKG for model Seat Rail Parts (Pack 4)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-026-bs', 'PAPER  PALLET 714W*978L*137H MM. PKG for model Seat Rail Parts (Pack 4)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-027-bs', 'BOX OD SIZE : 563W*704L*192H MM. PKG for model Seat Rail Parts (Pack 5)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-027-1(Cancel)-bs', 'BOX OD SIZE : 547W*704L*192H MM. PKG for model Seat Rail Parts (Pack 5)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-028-bs', 'PARTITION ASSY 543W*685L*160H MM. PKG for model Seat Rail Parts (Pack 5)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-029-bs', 'PAD SUPPORT  543W*685L MM. PKG for model Seat Rail Parts (Pack 5)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-030-bs', 'PAPER PALLET 714W*1136L*137H MM. PKG for model Seat Rail Parts (Pack 5)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-034-bs', 'CARTON BOX (OD) SIZE : 560W*1120L*159H MM. PKG FOR MODEL : XLE BAR  (Pack 3)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-035-bs', 'PARTITION ASSY (OD) : 540W*1100L*130H MM. PKG FOR MODEL : XLE BAR (Pack 3)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-036-bs', 'PAD SUPPORT (OD) :540W*1100L MM. PKG FOR MODEL : XLE BAR (Pack 3)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AXELO (HDS)-bs', 'INNER AXELO (HDS ) 428HDS  X  102 L (14T-34T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'B1946-44470-bs', 'PARTITION ASS''Y B1946-44470 PTT-A 184W*200L 1:1 , PTT-B 184W*200L 1:2 , PTT-C 200W*280L 1:4 KA125/CA125*3/KA125 BCF MODEL 872', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BC175 HDS-42T-bs', 'INNER BC175  428HDS X 110 L (14T-42T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEISHIN-002-bs', 'CORRUGATE SHEET SIZE 294W*510L*3T MM.FOR H60A MEX (BLACK COLOR)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEISHIN-003-bs', 'CARTON BOX OD 530*315*365 MM. KA125/CA125*3/KA125 BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEISHIN-004-bs', 'PARTITION A SIZE 160W*294L MM. 1:4  KA125/CA125/KA125 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEISHIN-005-bs', 'PARTITION B SIZE 160W*510L MM. 1:6  KA125/CA125/KA125 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEISHIN-006-bs', 'WOODEN PALLET SIZE 1100W*970L*120H MM. FUMIGATE', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEISHIN-009-bs', 'PAD SIZE 294Wx510L MM.(KA125/CA125/KA125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEISHIN-011-bs', 'WOODEN PALLET SIZE 1100W*1100L*120H MM.Fumigation heat tretment', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEISHIN-013-bs', 'PARTITON-A 190W*563L 1:14+ PARTITON-B 190W*503L 1:12  (CA125/CA125/CA125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEISHIN-016-bs', 'CARTON BOX  OD 550W*1100L*360H  MM.(KA125/CA125/KA125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEISHIN-017-bs', 'PARTITON SET (2A+2B): 167Wx1086L MM. (CA125/CA125/CA125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEISHIN-018-bs', 'PAD: 540Wx1086L MM.(CA125/CA125/CA125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEISHIN-019-bs', 'CONNER GUARD : 44x44x8Px1880L MM (KB450)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEISHIN-020-bs', 'CARTON BOX OD: 530W*700L*400H  KA125/3M/KA125 BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEISHIN-021-bs', 'PAPER PAD: 155Wx367L MM.(KA125/CA125/KA125 C/F) 1:2 ( FIN L42L)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEISHIN-022-bs', 'PAPER PAD : 727Wx367L MM.(KA125/CA125/KA125 C/F) 1:1 ( FIN L42L)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEISHIN-023-bs', 'PAPER PAD : 510W*680L MM.(KA125/CA125/KA125 C/F) FOR MODEL 2HX', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEISHIN-024-bs', 'CARTON BOX OD: 550Wx550Lx195H MM.(KA125/CA125/KA125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEISHIN-025-bs', 'PAPER PAD : 530Wx530L MM. (CA125/CA125/CA125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEISHIN-026-bs', 'PAPER PAD : 540Wx88L MM. (CA125/CA125/CA125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEISHIN-027-bs', 'CARTON BOX SIZE : 385W*420L*350H MM. (KA125/CA125/KA125 C/F) 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEISHIN-028-bs', 'PARTITION ASSY SET : 371W*406L*60H MM. (KA125/CA125/KA125 C/F) 1:5', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEISHIN-029-bs', 'PAD SIZE : 371W*406L*67H MM. (เจาะรู) (KA125/CA125/KA125 C/F) 1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEN-003-bs', 'PP BOARD OD : 1100Wx2200Lx3 MM. COLOR BLUE', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEP-001-bs', 'CARTON  BOX  SIZE  OD   265W*435L*83H (KA185/CA125/KA185 C/F) + Printing', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEP-002 cancel-bs', 'Pad size : 255W*423L (KA150/CA125/KA150 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEP-003-bs', 'ECO DRY 10 G.600 PCS/BOX', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BL12F (Cancel)-bs', 'Z-45CTB-BL12F  Carton Box  L12F - KD ID 506W*1036L*267H (OD 450W* 595L* 285H)  KA230/CA125*3/KA230  BC/F (1:1)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BL12F-1-bs', 'Z-45CTB-BL12F  Carton Box  L12F - KD ID 506W*1036L*267H (OD 450W* 595L* 285H)  KA230/CA125*3/KA230  BC/F (1:1)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BLOCK ART-003-bs', 'BLOCK PRINT FOR SERI EXPORT', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BOX PACKAGE FOR 811Cancel-bs', 'CARTON BOX OD 560Wx960Lx240H (AAT 811) MM. (KA230/3CA125/KA230 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BOX-B02A-bs', 'Z-NK001-BOX18  CARTON BOX  B02A-KD ID 506*1036*220H  KA230/3M/KA230 BC/F มัดละ 5 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BOX-BO2A Cancel-bs', 'Z-NK001-BOX18  CARTON BOX  BO2A-KD ID 506*1036*220H  KA230/3M/KA230 BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BOXPUMP (Cancel)-bs', 'Z-NK001-BOX27  CARTONBOX 414W*1107L M&M KA125/CA125*3/KA125  BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BRO-001-bs', 'CARTON  BOX  SIZE  300*200*100  (498W*1049L) KI150/CA125/KI150 BF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BROBA-bs', 'BOX 200*100*100 (324W*644L)  KI150/KI150  B/F มัดละ 10 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-001-bs', 'CARTON  BOX  SERVICE  PART  MOTOR  OD  140*184*60 MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-004-bs', 'CARTON  BOX  OD 360*565*130H MM (486W*1875L) KI125/CA125/KI125 C/F 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-005/2-bs', 'CARTON  BOX  OD 540W*720L*130H MM (700W*1323L) KI125/CA125/KI125 C/F 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-006-bs', 'BOX OD : 740W*1000L*220H (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-BAG3-L-bs', 'Green Reflective Jacket(Old size )', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-BAG3-M-bs', 'Green Reflective Jacket(Old size)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BW-001-bs', 'JUMBO  ROLL  KB450   (873W)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BW-002-bs', 'JUMBO  ROLL  KB450   (812W)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BW-003-bs', 'JUMBO  ROLL  CB450   (840W)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BW-004-bs', 'JUMBO  ROLL  CB450   (895W)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'C50Z-AD-bs', 'INNER C50Z  420AD X 100L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'C700-AD3-bs', 'INNER C700 420AD3  X 100 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'C900-AD3-bs', 'INNER  C 900 420AD3  X 100 L  ( 15T-39T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'C90-AD3-bs', 'INNER  C 90 420AD3  X 100 L  ( 15T-39T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CAP B503-bs', 'TOP CAP B503 1108*1108', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'Cartispenser-bs', 'Cartispenser รถเข็นใส่สายรัด', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CB015701670011-bs', 'CARTON BOX NTN 157*167*11 MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CB0240240180H (Cancel)-bs', 'CARTON BOX  ID  240*240*180H  KA125/KA125  BC/F (BOX S) PACK 10 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CB0260500300H (Cancel)-bs', 'CARTON BOX  ID  260*500*300H (KA125/BC/F  BOX L) PACK 10 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CB0365270160 Cancel-bs', 'CARTON BOX S (OD) 365*270*160 MM (KA230 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CB0365540160 Cancel-bs', 'CARTON BOX M (OD) 365*540*160 MM (KA230 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CB0365540320 Cancel-bs', 'CARTON BOX L (OD) 365*540*320 MM (KA230 BC /F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CB-49180-bs', 'Z-55CTB-49180  CARTON BOX  49180 - EB700NO TANK ASSY-PS OD 347*517*115H  (452*1748) KA 185/M/KA185 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CBR 150 AD-bs', 'INNER CBR 150 428AD X 124 L (15T-44T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CBR 150 HDS(15T-44T)-bs', 'INNER CBR 150 428HDS  X 126 L (15T- 44T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CBR 150-HDS-bs', 'INNER CBR 150 428HDS X 124 L (15T-44T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CB-TYD001 (Cancel)-bs', 'Z-NK001-CBV01  CARTON BOX VALVE ID 540*361*106  (CB001)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CC0001898A-bs', 'HDPE sheet 1500mm*2200mm*0.050 mm', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CC0002799A-bs', 'CASE 478W*2250L  KI150/CA125*3/KI150  BC/F  (CC0002799A) PACK 10 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CC0002799B-bs', 'CASE    (OD)  480*640*265H  (DRAWING NO  HIT-0802001-01-03)    KI150/CA125*3/KI150   BC/F  ( CC0002799B )   PACK  10  PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CC0002799C-bs', 'CASE 528W*2250L  KI150/CA125*3/KI150  BC/F  (CC0002799C) PACK 10 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CC0002800A-bs', 'CAP-A  624W*464L   KI150/CA125*3/KI150  BC/F  (CC0002800A)  AIRCON-INDOOR-A) PACK 20 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CC0002845A-bs', 'PARTITION  OD  267W*426L  KA230/M*KA230  C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CC0002846A-bs', 'UPPER  PAD      206*660   KA230/3M125KA230    BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CC0002860A-bs', 'PARTITION - A   SIZE  354W*466L   KA 150/M/KA150  C/F  THAINICHI  INDOOR   (PACK  20  PCS)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CC0002861A-bs', 'PARTITION - B   SIZE  610W*90L   KA 150/M/KA 150  C/F  THAINICHI  INDOOR   (PACK  50  PCS)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CC0002862A-bs', 'PARTITION - C   SIZE  550W*86L   KA 150/M/KA 150  C/F  THAINICHI  INDOOR   (PACK  50  PCS)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CC0002937A-bs', 'PARTITION-A 880W*610L KA230/M/KA230  C/F  ( CC0002937A )  XY-RAM PACK 20 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CC0002938A-bs', 'PARTITION-B 243W*466L KA230/M/KA230 C/F  ( CC0002938A )  XY-RAM PACK 50 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CC0002940A-bs', 'PARTITION-C 503W*466L KA230/M/KA230 C/F  ( CC0002940A )  XY-RAM PACK 20 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CD100-AD-bs', 'INNER  CD100  428AD X 108 L  (14T-43T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CD185-112-AD-bs', 'INNER CD185  428AD X 112L  (15T- 34T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CD70/CDI-AD-bs', 'INNER  CD70/CDI  420AD X 104 L  (14T-41T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CD70/CDI-MODIFIED-bs', 'INNER CD70/CDI MODIFIED 420AD X104 L (15T-38T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CG125 DX-AD-bs', 'INNER CG125 DX  428AD X 108 L  ( 14T-38T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CG125-AD-bs', 'INNER  CG125  428AD X 100 L  (15T-38T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CG125-AD-100-bs', 'INNER CG125 428AD X100 L (15T-38T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CG125DLX (5S)-AD-bs', 'INNER CG125 DLX (5S) 428AD X 110 L  (14T-43T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CG125DX-bs', 'INNER CG125 DX 428AD X 108 L  (14T-38T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CONTAINERDRII-bs', 'DANA-CONTAINERDRI II (150 G. 100 pcs/ box)  USE 4:1 Package For Pack rear axle Nissan Ship to Brazil  & T6', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CRYPTON-AD-bs', 'INNER CRYPTON 105 02 428AD X 100 L  (15T-37T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CRYPTON-AD-104-bs', 'INNER CRYPTON 110 04 428AD X 104 L  (15T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CRYPTON-AD-112-bs', 'INNER CRYPTON X 135 428AD X 112 L  (15T-39T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CST-001-bs', 'BOX : 220x270x155H (OD) KA185/CA125x3/KA185 Print 2 Place', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CYC-001-bs', 'WOODEL PALLET 640W*640L*135H (FUMI) FOR MODEL INNER PIPE', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CYC-004-1-bs', 'CARTONBOX SIZE OD: 188W*188L*148H (75 Box/Set)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CYC-005-3-bs', 'PARTITION  ASSY (1:8) 131 W*176L (75 Pcs/Set) KA230/CA125/KA230 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CYC-006-1-bs', 'PAD 176W*176L (75Pcs./Set)  KA230/CA125/KA230 B/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CYC-007 (Cancel)-bs', 'TOP CAP Package YA(25PCS) 1205W*1200L (KA230/CA185*3/KA230 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CYC-009 (Cancel)-bs', 'BOTTOM CAP  Package YA(25PCS) 1205W*1200L (KA230/CA185*3/KA230 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CYC-012-bs', 'WOODEN PALLET 985W*995L*130H (2 WAY FUMIGATE)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CYC-017-1 (Cancel)-bs', 'SLEEVE SET  Package YA(25PCS) 459W*1965L (KA230/CA185*3/KA230 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CYC-018-bs', 'PATITION  SUPPORT SIZE 230W*304L*50H (FUTURE BOARD 3 MM. GRAY)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'D-007-bs', 'CARTON BOX  D-007  SIZE  370W*660*320 MM.  KA230/3M/KA230  BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'D162D-bs', 'CARTON BOX D162 D SIZE (OD) 1000W*1100L*200H KA230/CA125*3/KA230 BC/F (ราคาเป็นกล่อง)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DA-003-bs', 'LDPE BAG 400*550*0.10T', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DAN-001-bs', 'BOX IMC OD: 240W*280L*120H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DAN-002-bs', 'CARTON BOX (OD) : 230W x 310L x 270H MM. KA125 C/F (BOX NO PRINT SCREEN)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DAN-RY-001-bs', 'Wood pallet box for Carrier T6 370*370*90H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DEN-002-bs', 'FELT 60 g.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DEN-003-bs', 'Almi Bag 60 g.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DIA-001-bs', 'LABLE TO DISPOSE OLD', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DID-003-bs', 'PRINT PLATE FEE', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DID-004-bs', 'INNER BOX NSD KIT', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DID-005-bs', 'INNER BOX DXN KIT', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DID-006-bs', 'CARTON BOX NGK KIT SET', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DID-007-bs', 'INNER BOX FOR HDN KIT', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DINAMIK (AD) 37T-bs', 'INNER DINAMIK 120 428AD X 122 L (14T-37T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DINAMIK (AD) 38T-bs', 'INNER DINAMIK 120 428AD X 122 L (14T-38T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DINAMIK (AD) 39T-bs', 'INNER DINAMIK 120 428AD X 122 L (14T-39T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DINAMIK (HDS) 35T-bs', 'INNER DINAMIK 120 428HDS X 122 L (14T-35T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DINAMIK (HDS) 36T-bs', 'INNER DINAMIK 120 428HDS X 122 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DINAMIK (HDS) 37T-bs', 'INNER DINAMIK 120 428HDS X 122 L (14T-37T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DINAMIK (HDS) 38T-bs', 'INNER DINAMIK 120 428HDS X 122 L (14T-38T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DINAMIK (HDS) 39T-bs', 'INNER DINAMIK 120 428HDS X 122 L (14T-39T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DINAMIK(AD) 35T-bs', 'INNER DINAMIK 120 428AD X 122 L (14T-35T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DINAMIK(AD) 36T-bs', 'INNER DINAMIK 120 428AD X 122 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DREAM (AD3)-bs', 'INNER   DREAM (AD3)  428AD X 100 L  ( 14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DREAM (AD3)100-bs', 'INNER DREAM (AD3) 428AD X 100 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DREAM (HDS)-bs', 'INNER  DREAM (HDS)  428HDS X 100 L  ( 14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DREAM 100-100 AD3-bs', 'INNER DREAM 100  428AD3 X 100 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DREAM 110 -106 AD3-bs', 'INNER DREAM 110 428AD3  X  106 L  ( 14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DREAM 110 428AD3-bs', 'INNER DREAM 110  428AD3  X 104 L  (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DREAM 110-100-AD3-bs', 'INNER DREAM 110 428AD3 X 100 L (14T- 36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DREAM 110-104 (38T) AD3-bs', 'INNER DREAM 110 428AD3 X 104 L (14T- 38T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DREAM 110-108 AD3-bs', 'INNER DREAM 110 428AD3 X 108 L (14T- 38T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DREAM 110HDS-bs', 'INNER DREAM 110 428HDS  X 100 L (14T- 36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DREAM 125-104-bs', 'INNER DREAM 125 420AD3  X  104 L  ( 14T-35T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DREAM 125-HDS-bs', 'INNER DREAM 125 428HDS X 98 L (14T-35T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DREAM 428AD3-bs', 'INNER DREAM  428AD3 X 100 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DREAM/C100 HDS-34T-bs', 'INNER DREAM/C100  428HDS X 110 L ( 14T-34T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DREAM/C100 HDS-36T-bs', 'INNER DREAM/C100  428HDS X 110 L ( 14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DREAM100-HDS-bs', 'INNER DREAM 100 428HDS X 100 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DREAM110/WAVE110-AD3-bs', 'INNER DREAM110/WAVE110  428AD3  X 104 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DREAM110/WAVE110-HDS-bs', 'INNER DREAM110/WAVE110  428HDS X 104 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DREAM-110-100-AD3-bs', 'INNER DREAM 110 428AD3 X 100 L (14T- 36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DREAM-110-AD3-bs', 'INNER DREAM 110 428AD3  X 106 L (14T- 36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DREAM110-AD3-36T-bs', 'INNER DREAM110  428AD3  X 100 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DREAM110-AD3-36T-106-bs', 'INNER DREAM110  428AD3  X 106 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DREAM-AD3-1-bs', 'INNER DREAM 428AD3  X 100 L  ( 14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EX5- AD-36T-bs', 'INNER EX5 428AD X 96 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EX5-(33T) AD-bs', 'INNER EX5 428AD X 96 L (14T-33T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EX5-(34T) AD-bs', 'INNER EX5 428AD X 96 L (14T-34T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EX5-(35T)-AD-bs', 'INNER EX5 428AD X 96 L (14T-35T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EXCITER -2 (HDS)-bs', 'INNER  EXCITER - 2  (HDS) 428HDS X 114L  ( 15T/39T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EXCITER-2 HDS (15T-39T)-bs', 'INNER  EXCITER-2  (HDS) 428HDS X 114 L  ( 15T-39T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EXE-001-bs', 'DUNNAGE AIR BAG (800x1200mm.) ถุงกันกระแทก', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EXE-002-bs', 'AIR GUN', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EXE-003-bs', 'AIR BAG 900 x 1200 mm.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-018-bs', 'WOODEN PALLET 1439W*2839L*124H FOR MODEL GM : 52094720', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-019-bs', 'CARTON BOX FOR Flange Size 265W*435L*83H (KA185/CA125/KA185 C/F)+Print screen', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-032-1-bs', 'Wooden Pallet 1000W*1180L*120H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-044-bs', 'WOODEN PALLET :1100W*1100L*135H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-050-bs', 'Wooden Pallet size 1100W*1100L*120H (Heat Treatment)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-061-bs', 'Wooden Pallet size 1424W*1759L*111H (Heat Treatment)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-064-bs', 'Wooden Pallet size 1424W*1664L*120H (Heat Treatment)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-065-bs', 'Wooden Pallet Mix size', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-073-bs', 'VCI BAG SIZE 1270*2370*2000 T.0.08', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-074-bs', 'WOODEN PALLET 1250W*2246L*124H FOR 5208373', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-075-bs', 'VCI BAG SIZE 1200*2500*1500  T.0.07', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-076-bs', 'Container DRY 150 g.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FILM-BS-bs', 'STRETCH FILM 15MIC*50CM*300M', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FJA-007-bs', 'BOX OD 300W*370L*155H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FJA-016-bs', 'PAPER PAD SIZE 1092W*1120L (CA125/CA/CA125*3/CA125 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FORCE-1NEW-AD-bs', 'INNER FORCE-1 (NEW) 428AD X 100 L  (14T-39T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FUTURE-125 (35T) AD-bs', 'INNER FUTURE 125 428AD X 108 L (14T-35T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FUTURE-125 (36T) AD-bs', 'INNER FUTURE 125 428AD X 108 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FUTURE-125 AD-bs', 'INNER FUTURE 125 428AD X 108 L (14T-34T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FUTURE-125 HDS-bs', 'INNER FUTURE 125 (HDS) 428HDS X 108 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FZ 150 124L-bs', 'INNER FZ 150 428HDSX 124L (14T-42T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FZ 150 428HDS-42T-bs', 'INNER  FZ  150 428HDS  X  128 L  (15T-42T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FZ 150I HDS (15T-38T)-bs', 'INNER  FZ  150I 428HDS  X  122 L  (15T-38T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FZ 150I HDS (15T-39T)-bs', 'INNER  FZ  150I 428HDS  X  122 L  (15T-39T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FZ 150I HDS (15T-40T)-bs', 'INNER  FZ  150I 428HDS  X  122 L  (15T-40T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FZ 150I HDS (15T-41T)-bs', 'INNER  FZ  150I 428HDS  X  122 L  (15T-41T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FZ 150I HDS (15T42T)-bs', 'INNER  FZ  150I 428HDS  X  122 L  (15T-42T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FZ 150I-38T-AD 122L-bs', 'INNER  FZ  150I 428AD  X  122 L  (15T-38T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FZ 150I-39T-AD 122L-bs', 'INNER  FZ  150I 428AD  X  122 L  (15T-39T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FZ 150I-40T-AD 122L-bs', 'INNER  FZ  150I 428AD  X  122 L  (15T-40T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FZ 150I-41T-AD 122L-bs', 'INNER  FZ  150I 428AD  X  122 L  (15T-41T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FZ 150I-42T-AD 122L-bs', 'INNER  FZ  150I 428AD  X  122 L  (15T-42T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FZ150 HDS-bs', 'INNER  FZ150 428HDS X 130 L  (14T- 42T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FZ150I-428HDS-bs', 'INNER  FZ150I 428HDS X 128 L  (14T- 40T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FZ150I-428HDS-41T-bs', 'INNER  FZ150I 428HDS X 128 L  (14T- 41T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FZ150I-428HDS-42T-bs', 'INNER  FZ150 428HDS X 128 L  (14T- 42T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'GRAND 428AD-36T-bs', 'INNER GRAND/PRIMA 428AD X 100 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HIO-001-bs', 'TOP+BOTTOM : 997Wx1116Lx110H PH9-CTN-HR014-1 (1:2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HIO-013-bs', 'Stretch film (size 500*200*1.5 mic) (6 Roll/1ctn)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HIO-014-bs', 'PLASTIC SEAL 15 MM. (5 kg./Box)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HIO-015-bs', 'Plastic straping 15mm./สายรัดพลาสติก 15 มม.x1,300ม. สีดำ', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HIO-016-bs', 'ฟิล์มยืดใส / Wrapping film (size 50 cm*200 m*0.9 mic) (6 roll/ 1 ctn)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HIT-003-bs', 'Wooden Pallet 4 way size OD 933W*1022L*110H (Heat Treatment) for 17B50118,119,120', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HIT-007-bs', 'WOOD PALLET : 861Wx1100Lx120H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HIT-008-bs', 'PARTITION-A1 SIZE : 250W*469L MM.1:15', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HIT-009-bs', 'PARTITION-A2 SIZE : 250W*601L MM.1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOP-003-bs', 'LDPE  COVER  BAG  2370MM * 1270MM * 2000MM * 0.07 MM (10 Pcs./Pack)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOP-045-bs', 'BOX OD : 250W*900L*150H KA150/CA125*3/KA150 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOP-046-bs', '75526 CJ410 SN REINF ASSY-RR SIDE MBR,RH', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOP-047-bs', '75527 CJ410 SN REINF ASSY-RR SIDE MBR,LH', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOP-048-bs', '75580 EE520 SN BRKT ASSY-RR SEAT MTG RR RH', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOP-049-bs', '75581 EE520 SN BRKT ASSY-RR SEAT MTG RR LH', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOP-050-bs', '76442 EE500 SN CLOSING PLATE SILL RH', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOP-051-bs', '76443 EE500 SN CLOSING PLATE SILL LH', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOP-052-bs', '75512 2TP6A SN MBR ASSY-RR SIDE RH', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOP-053-bs', '75513 2TP6A SN MBR ASSY-RR SIDE LH', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOP-054-bs', '75520 CJ410 SN EXT ASSY RR SIDE MBR RH', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOP-055-bs', '75521 2TP6A SN EXT ASSY RR SIDE MBR LH', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOP-056-bs', '76454 2TP6A SN EXT ASSY-SILL,INR RH', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOP-057-bs', '76455 2TP6A SN EXT ASSY-SILL,INR LH', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOWA-012-bs', 'Storage Fee of L42L-1250L', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOWA-013-bs', 'Storage Fee of L12F - 1000L', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOWA-014-bs', 'Storage Fee of L12F - 1460L', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOWA-015-bs', 'STEEL L12F 2260x1450x1000', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOWA-016-bs', 'STEEL L42L 2260x1450x1250', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOWA-017-bs', 'STEEL L12F 2260x1450x1460', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOWA-018-bs', 'DUM CARTON 1450 x 1940 x 20 MM.(KA125/CA125/KA125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOWA-019-bs', 'WOOD PALLET : 1300W*2300L*120H MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOWA-021-bs', 'Wooden Pallet 1300x2550x120h mm.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOWA-022-bs', 'Wooden Pallet 1500x2700x125H mm.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HPS-002-bs', 'CARTON BOX OD : 230W*540L*130H MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HPS-003-bs', 'PACK HPS MODEL : MBR ASSY - RR SIDE,LH (Packing 08.00-17.45)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HPT-017-bs', 'CARTON BOX (OD) : 770W*820L*400H MM  KA125 BCF (For model 2P677104C  Pack 5) BIG', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HRG-001-bs', 'PAD AUTOVER SIZE : 145W*213L (Bi-wall 40AA)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HYS-013-bs', 'Kraft Paper / กระดาษน้ำตาล CA105 1500mm.(60inch)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ICE PACK V3-bs', 'ICE PACK V3 130mm*180mm*26mmT', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ICE PACK V3-JAPAN#2*1-bs', 'ICE PACK V3-JAPAN#2*1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ICE PACK V3-JAPAN#4-bs', 'ICE PACKV3-JAPAN#4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'INNER BOX  (AD BLANK)-bs', 'INNER BOX PROFESSIONAL KIT (AD) NO ASSY', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'INNER BOX  (AD3 BLANK)-bs', 'INNER BOX PROFESSIONAL KIT (AD3) NO ASSY', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'INNER BOX  (HDS BLANK)-bs', 'INNER BOX PROFESSIONAL KIT (HDS) NO ASSY', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'INNER MEGA PRO-bs', 'INNER MEGA PRO 428HDS X 112 L (14T-46T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'INNER RXS/RXK-bs', 'INNER RXS/RXK 428HDS X 110 L (15T-37T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'INNOVA 420-AD-bs', 'INNER INNOVA 420AD X 104 L (14-35T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'INNOVA 428-AD-bs', 'INNER INNOVA 428AD X 104 L (14T-35T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ITOH-001-bs', 'CARTON  BOX  SIZE  OD   265W*435L*83H   KA185/CA125/KA185   C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ITOH-003-bs', 'SILICA GEL 10 G. (Non Woven)  600 PCS/BOX', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ITOH-004-bs', 'CARTON BOX SIZE : 217Wx267Lx85H KA150/CA125/KA150 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JCH-001-bs', 'PARTITION-A1 SIZE : 469W*250L*3 MM. FUTURE BOARD : BLACK (NO ASSY) 1:15', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JCH-002-bs', 'PARTITION-A2 SIZE :  601W*250L*3 MM. FUTURE BOARD : BLACK (NO ASSY)  1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JCH-003-bs', 'PACKAGE FOR : INSERT PACKING FOR WORLD PC (Included Assy)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JCH-004-bs', 'PACKAGE FOR : INSERT PACKING FOR WORLD PCBA (Paper)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JFE-001-bs', 'PALLET PLASTIC SIZE 1100W*1100L*150H MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-003 (Cancel)-bs', 'PAPER BOARD SIZE 700*700 MM. (KA150/3M/KA150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-003-1 Cancel-bs', 'PAPER BOARD SIZE 700*700 MM. (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-004 Cancel-bs', 'PAPER BOARD SIZE 900*900 MM. (KA150/3M/KA150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-004-1 Cancel-bs', 'PAPER BOARD SIZE 900*900 MM. (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-005 (Cancel)-bs', 'PAPER BOARD SIZE 920*920 MM. (KA150/3M/KA150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-006 (Cancel)-bs', 'PAPER BOARD SIZE 940*940 MM. (KA150/3M/KA150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-006-1-bs', 'PAPER BOARD SIZE 940*940 MM. (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-007 (Cancel)-bs', 'PAPER BOARD SIZE 960*960 MM. (KA150/3M/KA150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-007-1-bs', 'PAPER BOARD SIZE 960*960 MM. (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-008 (Cancel)-bs', 'PAD SIZE 75W*1000L (KA150/M/KA150 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-009-1-bs', 'PAPER BOARD SIZE 800W*800L (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-010-1-bs', 'PAPER BOARD SIZE 820W*820L (KA185/CA125/CA182 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-011 Cancel-bs', 'PAPER BOARD SIZE 880W*880L (KA150/CA125*3/KA150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-011-1 Cancel-bs', 'PAPER BOARD SIZE 880W*880L (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-012 (Cancel)-bs', 'PAPER BOARD SIZE 680W*680L (KA150/CA125*3/KA150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-012-1 Cancel-bs', 'PAPER BOARD SIZE 680W*680L (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-013 (Cancel)-bs', 'PAPER BOARD SIZE 720W*720L (KA150/CA125*3/KA150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-013-1-bs', 'PAPER BOARD SIZE 720W*720L (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-014 Cancel-bs', 'PAPER BOARD SIZE 740W*740L (KA150/CA125*3/KA150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-014-1 Cancel-bs', 'PAPER BOARD SIZE 740W*740L (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-015 (Cancel)-bs', 'PAD SIZE 75W*820 (KA150/CA125/KA150 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-016 (Cancel)-bs', 'PAD SIZE 75W*640 (KA150/CA125/KA150 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-017 (Cancel)-bs', 'PAPER BOARD SIZE 860W*860L (KA150/CA125*3/KA150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-017-1-bs', 'PAPER BOARD SIZE 860W*860L (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-022 (Cancel)-bs', 'PAPER BOARD SIZE 980W*980L  (KA150/CA125*3/KA150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-022-1-bs', 'PAPER BOARD SIZE 980W*980L  (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-023-1-bs', 'PAPER BOARD 500W*500L (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-024-1-bs', 'PAPER BOARD 520W*520L (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-028 (Cancel)-bs', 'PAPER BOARD 760W*760L KA150/CA125*3/KA150 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-028-1-bs', 'PAPER BOARD 760W*760L (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-029 (Cancel)-bs', 'PAD SIZE 75W*600L (KA150/CA125/KA150 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-030 Cancel-bs', 'PAPER BOPARD SIZE 780W*780L (KA150/3CA125/KA150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-031-1-bs', 'PAPER BOARD SIZE 840W*840L (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-032 (Cancel)-bs', 'PAD SIZE 75W*690L (KA150/CA125/KA150 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT008-bs', 'Z-NK001-SCB29  SIDE COVER-B L12F RV7 880W*1070L  KA230/CA125/KA230  C/F 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT009-bs', 'Z-NK001-PT130  PARTITION-01 L12F RV7 293W*1060L KA230/CA125*3/KA230  BC/F  1: 24', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT009/1-bs', 'Z-NK001-PT130-1  PARTITION-01/1  L12F RV7  586W*1100L KA230/CA125*3/KA230  BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT010-bs', 'Z-NK001-PT231  PARTITION-02 L12F  RV7 293W*1100L KA230/CA125*3/KA230  BC/F 1:18', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT011-bs', 'Z-NK001-PT332  PARTITION-03 L12F RV7 310W*346L KA230/CA125*3/KA230  BC/F  1:36', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT029-bs', 'Z-NK001-PB139  PTT B1 SIZE 170W*1048L KA230/CA125*3/KA230 BC/F 1:2 (381A)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT030-bs', 'Z-NK001-PB240  PTT B2 SIZE 396W*1048L  KA230/CA125*3/KA230 BC/F 1:8 (381A)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT031-bs', 'Z-NK001-PB341  PTT B3 SIZE 396W*1012L KA230/CA125*3/KA230 BC/F 1:16 (381A)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT032-bs', 'Z-NK001-PB442  PTT B4 SIZE 170W*1012L  KA230/CA125*3/KA230 BC/F 1:4 (381A)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT042 (Cancel)-bs', 'Z-NK003-BOXGJ-SPS  BOX SPS&GJ 399W*1329L OD:280W*372L*123H MM. KA230/CA125/KA230 C/F (MODEL: 3730A-OK020 (SPS)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT047-1 (Cancel)-bs', 'Z-NK003-BOX-N6-SS BOX OD:280Wx372Lx123H MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT052-bs', 'Z-NK002-1AIPO  PTT-1A  245W*1130L KA230/CA125*3/KA230 BCF 1:4 MODEL B02A-IPO', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT053-bs', 'Z-NK002-1BIPO PTT-1B 500W*1130L KA230/CA125*3/KA230 BCF 1:2 MODEL B02A-IPO', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT054-bs', 'Z-NK002-1CIPO  PTT-1C 125W*1130L KA230/CA125*3/KA230 BCF 1:4 MODEL B02A-IPO', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT055-bs', 'Z-NK002-1DIPO  PTT-1D 500W*1070L KA230/CA125*3/KA230 BCF 1:8 MODEL B02A-IPO', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT056-bs', 'Z-NK002-1EIPO PTT-1E 500W*318L KA230/CA125*3/KA230 BCF 1:12 MODEL B02A-IPO', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT057-bs', 'Z-NK002-SCB02  SIDE COVER 505W*1060L KA230/CA125/KA230 CF 1:2 MODEL B02A-IPO', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT058-bs', 'Z-NK002-PAB02  PAD 1072W*1132L KA230/CA125*3/KA230 CF 1:2 MODEL B02A-IPO', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTB-007-bs', 'PAPER BOX  (OD) + PRINT SCREEN Model : 140W x 240L x 120H mm (KA125/KA125/CF)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTB-008-bs', 'PAPER BOX  (OD) + PRINT SCREEN PAPER PARTITION Model : 107W x 207L x 86H mm (KA230/KA230/CF) 240W x 210Lmm.(KA230/KA230/CF)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTB-009-bs', 'PAPER BOX  (OD) + PRINT SCREEN PAPER PARTITION Model : 120W x 943L x 130H mm /110W x 929L x 110H mm.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTB-010-bs', 'PAPER BOX  (OD) + PRINT SCREEN PAPER PARTITION Model : 120W x 707L x 110H mm /110W x 693L x 110H mm.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-015-bs', 'Z-NK002-PT12F-1A PTT-1A 200W*1070L KA230/CA125*3/KA230 BC/F (DV.L12F-IPO)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-016-bs', 'Z-NK002-PT12F-1B  PTT-1B  418W*1130L KA230/CA125*3/KA230 BC/F (DV.L12F-IPO)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-017-bs', 'Z-NK002-PT12F-1C PTT-1C  200W*1130L KA230/CA125*3/KA230 BC/F (DV.L12F-IPO)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-018-bs', 'Z-NK002-PT12F-1D PTT-1D  200W*1130L KA230/CA125*3/KA230 BC/F (DV.L12F-IPO)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-019-bs', 'Z-NK002-PT12F-1E PTT-1E  155W*1130L KA230/CA125*3/KA230 BC/F (DV.L12F-IPO)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-020-bs', 'Z-NK002-PT12F-2A PTT-2A  205W*1070L KA230/CA125*3/KA230 BC/F (DV.L12F-IPO)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-021-bs', 'Z-NK002-PT12F-2B PTT-2B  150W*1130L KA230/CA125*3/KA230 BC/F (DV.L12F-IPO)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-022-bs', 'Z-NK002-PT12F-2C PTT-2C  618W*1130L KA230/CA125*3/KA230 BC/F (DV.L12F-IPO)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-023-bs', 'Z-NK002-PT12F-2D PTT-2D 305W*1130L KA230/CA125*3/KA230 BC/F (DV.L12F-IPO)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-024-bs', 'Z-NK002-PT12F-2E PTT-2E  150W*241L KA230/CA125*3/KA230 BC/F (DV.L12F-IPO)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-025-bs', 'Z-NK002-SC12F-IPO SIDE COVER  505W*1060L KA230/CA125/KA230 CF (DV.L12F-IPO)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-026-bs', 'Z-NK002-PA12F-IPO PAD  1072W*1132L KA230/CA125/KA230 BC/F (DV.L12F-IPO)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-027-bs', 'Z-NK002-PES02 ZERUST SHEET 1400W*1500L*0.08T', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-033 (Cancel)-bs', 'Z-NK002-CBS12  PAD (OD) 490W*240L MM. FOR MODEL : CENTER BEARING', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-034 (Cancel)-bs', 'Z-NK002-CBS11  PARTITION  (OD) 225W*490L MM. FOR MODEL : CENTER BEARING', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-035-bs', 'Z-NK002-CBS13  SUPPORT (OD) 1062W*1120L MM. FOR MODEL : CENTER BEARING', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-041-bs', 'Z-NK001-RF05 RUST-PROOF FILM : 650W*1000L*0.06T (PACK 150 PCS)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-052-bs', 'Z-NK003-WPL11  WOODEN PALLET', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-053-bs', 'Z-NK003-LB4330  STICKER LINK SERVICE SIZE 8*15 CM.(JG301-004330)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-054-bs', 'Z-NK003-LB4340  STICKER LINK SERVICE SIZE 8*15 CM. (JG3011-004340)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-073-bs', 'Sticker for part number :  JG301-004390', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-074-bs', 'Sticker for part number :  JG301-004420', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-086-bs', 'ZERUST SHEET (OD) : 2300Wx3500L MM. (0.06T) Model : D66B (PERODUA)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-087-bs', 'ZERUST SHEET (OD) : 1500Wx2000L MM. (0.06T) Model : D66B (PERODUA)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-088-bs', 'ZERUST BAG (OD) : 1200Wx2300Lx1400H MM. (0.06T) Model : D66B (PERODUA)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JUPITER FI-bs', 'INNER JUPITER FI (HDS) 428HDS X 108 L (13T-41T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JUPITER GRAVITA-bs', 'INNER JUPITER GRAVITA 2011(HDS) 428HDS X 106 L (15T-38T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JUPITER MX-HDS-bs', 'INNER JUPITER MX 428HDS X 112 L (15T-39T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JUPITER RC (HDS)-bs', 'INNER  JUPITER RC  (HDS)  428HDS X 106 L (14T- 38T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JUPITER V (HDS)-bs', 'INNER  JUPITER V (HDS)  428HDS X 104 L (15T - 36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JUPITER V-AD3-bs', 'INNER  JUPITER V (AD3)  428AD X 104 L   (15T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JUPITERMX-AD-bs', 'INNER JUPITER MX 428AD X 112 L (15T-39T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JUPITERZ-AD-bs', 'INNER  JUPITER Z 428AD X  104 L  ( 15T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JUPITERZ-HDS-bs', 'INNER  JUPITER Z 428HDS X 104 L ( 15T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JVT-001 (Cancel)-bs', 'CARTON BOX WEATHER SHIELD DBL SIZE OD258W*995L*78H,TRAY SIZE 1140W*370L KA125/CA125/KA125 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JVT-002 (Cancel)-bs', 'CARTON BOX WEATHER SHIELD RAP SIZE OD196W*1100L*86H  KA125/CA125/KA125 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KARISMA-AD-bs', 'INNER KARISMA  420AD X 104 L (14T-35T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KBL-002-bs', 'CORRUGATE SHEET SIZE : 90W*150L*T5 MM  (BLUE COLOR)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KOY-005-bs', 'Carton Pad Size : 900x900 mm. (KA125/KA125)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KOY-007-bs', 'Stretch Film 15 micron x 50 cm. x 200 m.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KRISS-108-38T-bs', 'INNER KRISS 110/120  428AD  X  108 L (14T-38T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KRYM-005-bs', 'PARTITION FOR ASSIST GRIP  PTT A  (KA230/CA125/KA230 C/F) 1:6 + PTT B (KA185/CA125*3/KA185 BC/F) 1:6  NO Printing', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-003-bs', 'SHEET BOARD 1500Wx2400L KA230/CA125*3/KA230 BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-005-bs', 'PAD SIZE 915Wx1460L  (KI150/CA125*3/KI150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-007-bs', 'BOX RG37 OD SIZE 1060W*1060L*675H  (KA125/CA125*3/KA125 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-011-bs', 'PAD SIZE 1550Wx2185L (KA125/CA125/KA125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-012-bs', 'PAD SIZE 720Wx2185L (KA125/CA125/KA125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-014-bs', 'PARTITION SIZE 1034W*1342L (KI150/CA125/KI150 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-016-bs', 'BOX NISSAN OD : 1085W*1355L*50H (KI150/CA125/KI150 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-017-bs', 'PARTITION SIZE 1036W*1345L (KI150/CA125/KI150 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-069-2-bs', 'BOX OD : 1000Wx1400Lx300H (KA185/CA125*3/KA185 BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-070-2-bs', 'PARTITION SIZE : 990Wx1360L (KI150/CA125/KI150 C/F) 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-071-2-bs', 'PAD 560Wx1370L (KI150/CA125/KI150)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-080 (cancel)-bs', 'WOOD PALLET 1545 x 2534 x 145 MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-092-bs', 'PAD SIZE 1770Wx2350L (KI125/CA125/KI125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-092-1-bs', 'PAD SIZE 1766Wx2350L (KI125/CA125/KI125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-093-bs', 'PAD SIZE 730Wx2350L (KI125/CA125/KI125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-093-1-bs', 'PAD SIZE 700Wx2350L (KI125/CA125/KI125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-094-bs', 'PAD SIZE 730Wx1770L (KI125/CA125/KI125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-094-1-bs', 'PAD SIZE 700Wx1770L (KI125/CA125/KI125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-095-bs', 'PAD SIZE 1110Wx1650L  MM (KI125/CA125/KI125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-096-bs', 'PAD SIZE 1030Wx1130L  MM (KI125/CA125/KI125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-097-bs', 'PLATE DIE CUT FOR PARTITION SIZE : 990Wx1360L MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-101-bs', 'PAD SIZE : 1590W*2590L MM. (KI125/CA125/KI125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-102-bs', 'PAD SIZE : 700W*2590L MM. (KI125/CA125/KI125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-103-bs', 'PAD SIZE : 700W*1590L MM. (KI125/CA125/KI125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-104-bs', 'TOP CAP SIZE (ID) : 1080W*1385L*230H MM. (KL205/3CA125/KL205 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-105-bs', 'TOP CAP (BOTTOM) SIZE (ID) : 1057W*1362W*220H MM. (KL205/3CA125/KL205 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-106-bs', 'PAD SIZE (ID) : 1335W*1035L (KL175/CA125/KL175 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-107-bs', 'WOOD PALLET 1550 x 2200 x 120 MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KYB-002 (Cancel)-bs', 'KST002 PKG.BOX BODY', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KYB-003-bs', 'PARTITION ASSY B1 : 82W*350L + B2  : 82W*486L (KA230/KA230 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KYB-004 (Cancel)-bs', 'PAD B3  : 350W*486L MM. (KA230/KA230 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KYB-005-bs', 'PAPER PAD SUPPORT  : 995W*1010L MM. (KA125/CA125/KA125  C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KYB-006-bs', 'PAPER PAD SUPPORT  : 1070W*1075L MM. (KA125/KA125  C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KYB-007-bs', 'PAPER PAD SUPPORT  : 995W*1010L MM. (KA150/CA125/KA150 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KYB-008 Cancel-bs', 'BOX ID SIZE : 275W*380L*150H MM.(KA185/KA185 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KYB-008-1-bs', 'BOX ID SIZE : 275W*380L*150H MM.(KA125/KA125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KYB-009 Cancel-bs', 'PARTITION-A : 160W*275L MM.& PARTITION-B 160W*380L MM. (KA185/KA185 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KYB-010 Cancel-bs', 'PAD : 275W*380L MM.(KA125/KA125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KYB-010-1-bs', 'PAD : 275W*380L MM.(CA125/CA125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KYB-011-bs', 'PARTITION-A : 160W*275L MM.(KA185/KA185 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KYB-012-bs', 'PARTITION-B 160W*380L MM. (KA185/KA185 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LC135 428AD (14T-36T)-bs', 'INNER LC135 428AD X 114 L (14T- 36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LC135 428AD (14T-37T)-bs', 'INNER LC135 428AD X 114 L (14T- 37T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LC135 428AD (14T-38T)-bs', 'INNER LC135 428AD X 114 L (14T- 38T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LC135 428AD (15T-36T)-bs', 'INNER LC135 428AD X 114 L (15T- 36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LC135 428AD (15T-37T)-bs', 'INNER LC135 428AD X 114 L (15T- 37T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LC135 428AD (15T-38T)-bs', 'INNER LC135 428AD X 114 L (15T- 38T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LC135 428AD (15T-39T)-bs', 'INNER LC135 428AD X 114 L (15T- 39T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LC135 428HDS (15T-37T)-bs', 'INNER LC135  428HDS X 114 L (15T- 37T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LC135 428HDS (15T-38T)-bs', 'INNER LC135  428HDS X 114 L (15T- 38T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LC135 428HDS (15T-39T)-bs', 'INNER LC135  428HDS X 114 L (15T- 39T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LC135 II-bs', 'INNER LC135 II  428HDS X 114 L  (15T-39T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LC135 III-(HDS)-bs', 'INNER LC135 III (HDS) 428HDS X 114L  (15T-38T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LC135 III-HDS-bs', 'INNER LC135 III 428HDS X 114L  (15T-38T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LC135 IV-AD-bs', 'INNER LC135 IV 428AD X 114 L  (15T-37T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LC135 IV-HDS-bs', 'INNER LC135 IV 428HDS X 114 L (15T-37T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LC135(HDS)-bs', 'INNER LC135  428HDS X 114 L  (15T-39T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LC135-AD-bs', 'INNER LC135  II 428AD X 114 L  (15T-39T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LC135-AD-III-bs', 'INNER LC135  III 428AD X 114 L  (15T-38T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LC135-HDS-bs', 'INNER LC135 428HDS X 114 L (15T- 36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LGI-001-bs', 'PH9-BOS-025 BOSELON103 SHEET 800*800*0.08 MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LGI-002-bs', 'PH9-CTN-HR001 CARTON BOX SIZE OD : 280W*480L*135H (KA125/3CA125/KA125 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LGI-003-bs', 'PH9-CTN-HR005 CARTON BOX SIZE OD : 560W*480L*250H (KA125/3CA125/KA125 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LHT-002-bs', 'PVC GUIDE FOR CARDBORAD REEL 1040/549 MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LHT-003-bs', 'PAPER TUBE 63.5x3.2x90 MM (OD 70 MM)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LHT-004-bs', 'PAPER TUBE 85.4x2.5x90 MM (OD 90 MM)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LHT-005-bs', 'PAPER TUBE 93x3.5x135 MM (OD 100 MM)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LHT-006-bs', 'PAPER TUBE 93x3.5x90 MM (OD 100 MM)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LHT-007-bs', 'PAPER TUBE 93x3.5x65 MM (OD 100 MM)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LHT-009-bs', 'CENTER PAPER OD 600x3Tmm.x280H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LHT-010-bs', 'PAPER TUBE SIZE : 600x3Tx230', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LHT-011-bs', 'PAPER TUBE SIZE : 600x3Tx300', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'Magicool-bs', 'Migicool Fit (S,M,L)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MST-001-bs', 'PAPER CORE : 300x20Tx40W MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MST-002-bs', 'PAPER CORE : 300x20Tx44W MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MSX 125-AD3-bs', 'INNER MSX  125 420AD3  X 106 L  ( 15T-34T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MT-007-bs', 'TOP CAP 965W*1340L KA230/CA125*3/KA230 BC/BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MT-008-bs', 'SLEEVE  SET  640W*1860L KA230/CA185*3/KA230 BCF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NAGANO-001-bs', 'BOX OD:168Wx258Lx137H + PTT-A 90W*141L (1:9) + PTT-B 110W*246L (1:4)+PAD 246Wx141L(1:2) KA125/CA125/KA125 C/F  (M.CHUTE W12-W14)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NAGANO-003 Cancel-bs', 'BOX OD : 333W*408L*92H  KA230/CA125/KA230 CF (MODEL : W8 )', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NAGANO-005-bs', 'BOX OD: 235*265*215H 443W*1007L KA125/CA125*3/KA125 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NAGANO-006-bs', 'PAD 250W*220L CA125/CA125/CA125 CF 1:8', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NAGANO-007-bs', 'BOX OD:350Wx550Lx110H MM.KA230/3CA125/KA230 BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-001-bs', 'Carton box No printing (1PCS/SET) (KI125/3CA125/KI125 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-002-bs', 'Partition - A  (12PCS/SET)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-003-bs', 'Partition - B  (8PCS/SET)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-004-bs', 'Partition - C  (30PCS/SET)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-005-bs', 'MIDDLE PAD (2PCS/SET)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-014-bs', 'CARTON BOX ABS SIZE OD : 363W x 569L x 242H mm.  ( KA185/3CA125/KA185  BC/F )', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-016-bs', 'CARTON BOX CAMERA SIZE OD : 339W x 389L x 195H mm.  ( KI125/3CA125/KI125  BC/F ) 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-017-bs', 'PARTITION-A  SIZE OD : 80W x 321L mm.  ( KI125/CA125/KI125  C/F ) 1:12', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-018-bs', 'PARTITION-B  SIZE OD : 80W x 373L mm.  ( KI125/CA125/KI125  C/F ) 1:8', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-019-bs', 'PARTITION-C  SIZE OD : 80W x 178L mm.  ( KI125/CA125/KI125  C/F )  1:30', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-021-bs', 'PAPER PAD SIZE (OD) : 930Wx1100L MM. KL125/KL125/CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-023-bs', 'CARTON BOX CAMERA SIZE OD : 339Wx389Lx110H mm. ( KI125/3CA125/KI125  BC/F ) NO PRINTING (1PCS/SET)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-024-bs', 'PARTITION-A SIZE OD : 80Wx321Lmm.(KI125/CA125/KI125 C/F) (6 PCS/SET)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-025-bs', 'PARTITION-B SIZE OD : 80Wx373L mm. ( KI125/CA125/KI125 C/F ) (4 PCS/SET)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-026-bs', 'PARTITION-C SIZE OD : 80Wx178L mm. ( KI125/CA125/KI125 C/F ) ( 15 PCS/SET )', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-030-bs', 'PAPER PAD SIZE(OD) : 1180Wx1030L MM. KL125/CA125/KL125 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NGC-001-bs', 'Wooden Sheet Size : 75W*2000L*75Tmm.(Heat Tretment)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NKK-001-bs', 'Paper sheet (KA230/3CA125/KA230) 1200Wx900L', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NKK-002-bs', 'Package and Packing Fee', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NKK-003-bs', 'Air Delivery Fee', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NPT-C27054355180-bs', 'SMALL OUTER BOX 440W1439L (270.5W*435.5L*180H)  KA185/CA125/KA185 C/F มัดละ 10 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NPT-P2504253-bs', 'SMALL PAD PAPER 250W*425L*3T  KA125/CA125/KA125 C/F มัดละ 50 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NSK-023 (Cancel)-bs', 'CARTON BOX SIZE OD 320Wx435Lx220H KA125/CA125*3/KA125 BC/F (ลูกค้า ลังใส่เอกสาร Size 423*300*200 mm.)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT118-bs', 'CARTON BOX FOR USB MODEL 2PX (TD-0711011) DETAIL  1. BOX 1:1  KA150/CA125/KA150  C/F  2. PARTITION A  11:1  KA125/CA125/KA125 + PP FOAM  E/F   3. PARTITION B 7:1  KA125/CA125/KA125 + PP FOAM  E/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT1299-bs', 'UNIT CASE MODEL DR 1070W*1166L KA230/CA125/KA230  C/F  WITH WATER PROOF OUT SIZE  (1:24)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT1300-bs', 'PARTITION-A MODEL DR 280W*1070L MM  KA230/CA125/KA230  B/F  (1:48)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT1301-bs', 'PARTITION-B MODEL DR 234W*376L MM  KA230/CA125/KA230  B/F  (1:144)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT25750-bs', 'UN CODE :  AS (L12F) , DR (L12F) 189G MODEL', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT261313-bs', 'UNIT CASE  MODEL  AS  MODEL  TYO   840W*1324L MM  KL205/CA185/KL205  C/F  WITH  WATER  PROOF  OUT  SIZE   1:28', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT261313-2-bs', 'CARTON BOX OD: 498W*552L*138H (1:1) PRINT MODEL 189G (Pack 9)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT261314-bs', 'PARTITION-A MODEL  AS  MODEL  TYO  252W*514L MM  KL205/CA185/KL205  C/F  (1:84)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT261315-bs', 'PARTITION-B MODEL  AS  MODEL  TYO  404W*490L MM  KL205/CA185/KL205  C/F  (1:84)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT261317-bs', 'UNIT CASE MODEL DR 1070W*1166L KL205/CA185/KL205  C/F  WITH WATER PROOF OUT SIZE  (1:24)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT261318-bs', 'PARTITION-A   DR MODEL  TYO   280W*1070L MM  KL205/CA185/KL205  B/F  (1:48)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT261319-bs', 'PARTITION-B   DR MODEL TYO  234W*376L MM  KL205/CA185/KL205  B/F  (1:144)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT261348-bs', 'WOODEN PALLET 1100Wx1100Lx120H (FUMIGATION)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT2753-bs', 'UNIT CASE 1070W*1170L KL205/CA185/KL205 C/F 1:21   2GA(DR)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT2754-bs', 'PARTITION-A  296W*1070L KL205/CA185/KL205 C/F 1:42  2GA(DR)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT2755-bs', 'PARTITION-B 270W*376L KL205/CA185/KL205 C/F 1:126  2GA(DR)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT2758-bs', 'Carton Box 700*520/175 m56  12F  (DR) KL205/CA185/KL205 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT3176-bs', 'WOOD PALLET  SIZE  800*1200 *120H mm   (MODEL  937A  STRG)  1:1   FUMIGATION)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT3788-bs', 'TRAY  1 :9  (NO  ASSY)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT4349-bs', 'PARTITION (1:6)x9 (NO ASSY)  TOA', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT4526-bs', 'Wooden Pallet (882W*1324L*120H) mm', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NTN-007-bs', 'CARTON BOX OD:320Wx470Lx320H mm.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NTT-003-bs', 'ZERUST FERROUS COVER BAG (PACK 54 PCS)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'OMI-006-bs', 'PAD  SIZE  :  490W*340L  (KA125/CA125/KA125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'OMI-007-bs', 'BOX SIZE :  175W*635L*320H (KL205/CA125/KL205CF)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'OMI-009-bs', 'PAD SIZE 330W*1020L (KA125/KA125 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'OMI-010-bs', 'PAD SIZE 1020W*1020L (KA125/CS110*3/KA125 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'Pack ELD (special)-bs', 'Packing fee for pack Diff Case  ELD (Normal+ot+holiday)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'Packing H60A R5T- Holiday-bs', 'Packing FEE Holiday', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'Packing H60A R5T- NORMOL-bs', 'Packing FEE Working day (08.00-17.45) (20.00-05.45)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'Packing H60A R5T- Public-bs', 'Packing FEE Public Holiday', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PACKING-DIFFCASE-DANA-bs', 'PACKAGE  FOR  DIFF CAFF   820W*1020L*1320H (72 PCS/SET)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PACKINGSMALLPART-DANA-bs', 'PACKAGE  FOR  SMALL PART   820W*1020L*1320H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PackT6-bs', 'Packing  Fee  Carrier  T6  Holiday', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'Pack-T6-2-bs', 'Packing  Fee  Carrier  T6   Working day 08.00-17.45', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PADL-DANA (Cancel)-bs', 'PAD SIZE  260*500   CA125*CA125*3*CA125  BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PADS-DANA (Cancel)-bs', 'PAD SIZE  240*240   CA125*CA125*3*CA125  BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PAD-TOYODA (Cancel)-bs', 'Z-65PAD-TOYODA SIZE 347W*514L KA185/CA125/KA185 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'P-B01-003-bs', 'CARTON BOX W/S RAP', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'P-B01-004-bs', 'CARTON BOX W/S DBL', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'P-BO1-005-bs', 'CARTON BOX S/P RAP', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'P-BO1-006-bs', 'CARTON BOX S/P DBL', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-AIR-006-bs', 'AIR BUBBLE T = 40 MICRON  300W*490L*0.04T', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-BOS-010-bs', 'BOSELON103 BAG 900*1200*0.07 MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-BOS-023-bs', 'BOSELON103 SHEET 1600*1600*0.07 MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-BOS-024-bs', 'BOSELON103  BAG 400*500*0.07 MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-BOS-025-bs', 'BOSELON103 SHEET 800*800*0.07 MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-BOS-026-bs', 'BOSELON103 SHEET 1400*1600*0.07 MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-BOS-031-bs', 'BOSELON103 BAG 300*350*0.08 MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-BOS-507-bs', 'BOSELON SHEET : 4000 x 4000L x 0.08MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-CTN-HR001-bs', 'CARTON BOX SIZE OD : 280W*480L*135H (KA125/3CA125/KA125 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-CTN-HR004-bs', 'CARTON BOX SIZE OD : 280W*480L*240H (KA125/3CA125/KA125 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-CTN-HR005-bs', 'CARTON BOX SIZE OD : 480W*560L*250H (KA125/3CA125/KA125 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-CTN-HR010-bs', 'CARTON BOX SIZE OD : 480W*560L*485H (KL205/CA125/KL205 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-CTN-HR011-bs', 'CARTON BOX SIZE OD : 325W*560L*255H (KL205/CA125/KL205 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-CTN-HR015-bs', 'CARTON BOX OD:280W*480L*97H KA125/3CA125/KA125 BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-EPE-006-bs', 'EPE FOAM 50*25*460', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-EPE-007-bs', 'EPE FOAM 50*50*540', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-EPE-008-bs', 'EPE FOAM 50*25*540', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-EPE-010-bs', 'EPE FOAM 50*50*460', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-EPE-011-bs', 'EPE FOAM 25W*50L*270H MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-PAD-HR001-bs', 'PAPER PAD SIZE OD : 260W*460L (KI125/CA125/CA125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-PAD-HR002-bs', 'PAPER PAD SIZE OD : 460W*540L  (KI125/CA125/CA125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-PAD-HR003-bs', 'PAPER PAD SIZE OD : 300W*700L  (KI125/CA125/CA125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-PAD-HR005-bs', 'PAPER PAD SIZE OD : 300W*540L  (KI125/CA125/CA125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-PAL-001-bs', 'WOODEN PALLET SIZE 980W*1140L*123H (4WAY)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-PAL-001-1-bs', 'WOODEN PALLET SIZE  980W*1140L*123H (4WAY)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-PAL-024-bs', 'WOODEN PALLET SIZE 1140W*1470L*123H (4WAY)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-PAR-HR014AB-2-bs', 'PARTITION-A1 460W x 940L 1:4 , PARTITION-A2 460W x 1070L 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-PAR-HR10-bs', 'PARTITION SET SIZE : 455W x 540L x 450H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'POLY SHEET (Roll)-bs', 'Poly Sheet L:300 M * W : 240 cm.*Tnk :0.03 mm.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PPBRAND-BS-bs', 'PP BARND สายรัดกล่อง W15 mm.*L1200 M. สีดำ (8 KGS/ROLL)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PP-HTET001-7-bs', 'WOODEN PALLET 4 Way 933W*1022L*120H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PRV-009-bs', 'PAD SIZE : 1140W*1140L (CA125/CA105/CA125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PS0000676-bs', 'CARTON BOX 281W*801L (KA230/CA125/KA230 C/F 1:1 เป็นกล่องแล้ว SCREEN COLOR BLACK', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTL12FA1-bs', 'Z-46PTL-12FA1  PARTITION-A1  L12F-KD  264W*1030L  KA230/3M/KA230 BC/F L12F (1:2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTL12FA2-bs', 'Z-47PTL-12FA2  PARTITION-A2  L12F - KD  525W*506L KA230/3M/KA230  BC/F L12F (1:2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTL12FA3-bs', 'Z-48PTL-12FA3  PARTITION-A3 L12F - KD 264W*506LL KA230/3M/KA230  BC/F L12F (1:2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTT HOUSING RACK-bs', 'Z-NK002-16019-2 PARTITION SUPPORT MODEL HOUSING RACK FUTURE BOARD SIZE 100W*2106L*3T', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTT SUPPORT VALVE-bs', 'Z-NK002-16019-1 PARTITION SUPPORT MODEL VAVE FUTURE BOARD SIZE 85W*1598L*3T', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTT-06-bs', 'PARTITION-06   SIZE 366W*1185L KA230/CA125*3/KA230  BC/F  1:30', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTT-07-bs', 'PARTITION-07   107W * 1000L  KA230/CA125*3/KA230  BC/F 1:40', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTT49180-bs', 'Z-56PTT-49180  Partition  Assy  Partition 01  Size 92W *508L Ka185/M125/Ka185  C/F  (1:2)+Partition 02  92W*338L  Ka185/M125/Ka185 C/F (1:3)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTT-A ( Cancel )-bs', 'PARTITION-A  SIZE 107W*230L  KA230/M125/KA230   C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTTA1-BO2A-bs', 'Z-NK001-PA119  PARTITION A1 BO2A-KD 320*1030  KI150/3M/KI150  BC/F (1:2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTTA2-BO2A-bs', 'Z-NK001-PA220  PARTITION A2 BO2A-KD 440*507  KI150/3M/KI150  BC/F (1:2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTTA3-BO2A-bs', 'Z-NK001-PA321  PARTITION A3 BO2A-KD 320*507  KI150/3M/KI150 BC/F (1:2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTTA4-BO2A-bs', 'Z-NK001-PA422  PARTITION A4 BO2A-KD 440*558 KI150/3M/KI150  BC/F (1:1)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTTA5-BO2A-bs', 'Z-NK001-PA523  PARTITION A5 BO2A - KD 506*530 KA230/3M/KA230  BC/F (1:1)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTTA6-BO2A-bs', 'Z-NK001-PA624  PAD BO2A - KD 220*507 KA185/3M/KA185  BC/F (1:2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTTA-L12F-KD-bs', 'Z-NK002-PTTA1 PTT-A1 267Wx1034L MM.KA230/CA125*3/KA230 BCF 1:2 (L12F-KD)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTT-B (Cancel)-bs', 'PARTITION-B  SIZE 190W*228L  KA230/M125/KA230   C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTTB1D41N+D54T-bs', 'Z-NK001-PB111  PARTITION  B1  270*1048  KA230/CA125*3/KA230  BC/F (1:2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTTB2D41N+D54T-bs', 'Z-NK001-PB212  PARTITION  B2  372*1048  KA230/CA125*3/KA230  BC/F (1:8)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTTB3D41N+D54T-bs', 'Z-NK001-PB313  PARTITION  B3  372*1012  KA230/CA125*3/KA230  BC/F (1:16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTTB4D41N+D54T-bs', 'Z-NK001-PB414  PARTITION  B4  270*1012  KA230/CA125*3/KA230  BC/F (1:4)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTTB-L12F-KD-bs', 'Z-NK002-PTTB1  PTT-B1 140Wx504L MM. KA185/CA125*3/KA185 BCF 1:2  (L12F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTTC-L12F-KD-bs', 'Z-NK002-PTTC1  PTT-C1 534Wx504L MM.  KA185/CA125*3/KA185 BCF 1:2  (L12F-KD)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTTD-L12F-KD-bs', 'Z-NK002-PTTD1  PTT-D1 284Wx371L MM. KA185/CA125*3/KA185 BCF 1:2  (L12F-KD)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTTE-L12F-KD-bs', 'Z-NK002-PTTE1  PTT-E1 222Wx371L MM.KA185/CA125*3/KA185 BCF 1:2  (L12F-KD)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTTF-L12F-KD-bs', 'Z-NK002-PTTF1  PTT-F1 380Wx504L MM. KA185/CA125*3/KA185 BCF 1:1  (L12F-KD)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTT-H (Cancel)-bs', 'PARTITION-H SIZE 130W*240L  KA230/CA125/KA230  C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTT-H60A-bs', 'PARTITION 358Wx240L MM.  1:3   FOR  NISSAN H60A', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTTPUMP-bs', 'Z-NK001-PTM26  PARTITION PUMP 344W*276L M&M KA125/CA125*3/KA125  BC/F PACK 50 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTT-TOYODA-bs', 'Z-64PTT-TOYODA PTT SET PTT-01 138W*514L 1:2 + PTT-02 347W*138L 1:4  KA185/CA125/CA125  C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'QTC-001-bs', 'BOX OD 200W*200L*300H (KA230/CA125/KA230 C/F) + Sticker', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RACK SHAFT- TOP PAD-bs', 'TOP PAD ASSY 715W*780L WI-WALL (1:1) MODEL RACK SHAFT', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RCF-002-bs', 'PAPER PAD SIZE : 1100Wx1100L MM. CA125 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'REF-001-bs', 'CARTON  BOX  SIZE  OD   265W*435L*83H   KA185/CA125/KA185   C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'REF-002-bs', 'Eco Dry 10 g.(600 Pcs/1 Box)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'REIDAN-KUN-bs', 'REIDAN-KUN SIZE : 180W x 390L MM. (Color Black)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'REVO FIT- AD-bs', 'INNER REVO FIT 420AD X 104 L (14T-37T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RPF10001300006-bs', 'Z-NK001-RPF04  RUST-PROOF FILM 1300*1000*0.06T (Pack 150 Pcs)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RPF121212-bs', 'Z-NK002-BAG02  ZERUST FERROUS COVER BAG 1200*1200*1200*0.06T 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RPF1212-DA-bs', 'Zerust VCI BAG 1200*1200*1600*0.06  (Pack EDL)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RPF13001000008 (Cancel)-bs', 'Z-NK001-RPF04  RUST-PROOF FILM 1300*1000*0.08T (Pack 150 Pcs)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RPF15001200 (Cancel)-bs', 'Z-NK001-RPF15  ZERUST SHEET 1500*2000*0.08T (Yellow) (Pack 50 Pcs)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RPF15001200-1-bs', 'Z-NK001-RPF15  ZERUST SHEET 1500*2000*0.06T (Yellow) (Pack 50 Pcs)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RPS0-008702-bs', 'CARTON BOX SIZE : 255W x 635L x 165H mm', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RPS0-008703-bs', 'CARTON BOX SIZE : 230W x 553L x 230H (KL175/CA125/KL175 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RPS0-008704-bs', 'PAPER PAD 240W x 620L', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RST-001-bs', 'ZERUST SHEET SIZE : 1300x1000x0.06T', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RV5-bs', 'ZERUST  BAG  2370*1270*2000*0.08MM     (RV5  ORANGE)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RXZ (15T-35T)-AD-bs', 'INNER RXZ 428AD X 120 L  (15T-35T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RXZ (15T-36T)-AD-bs', 'INNER RXZ 428AD X 120 L  (15T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RXZ (15T-37T)-AD-bs', 'INNER RXZ 428AD X 120 L  (15T-37T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RXZ (15T-39T)-AD-bs', 'INNER RXZ 428AD X 120 L  (15T-39T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RXZ 428AD (15T-38T)-bs', 'INNER RXZ 428AD X 120 L (15T- 38T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RXZ 428HDS (15T-35T)-bs', 'INNER RXZ 428HDS X 120 L  (15T-35T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RXZ 428HDS (15T-36T)-bs', 'INNER RXZ 428HDS X 120 L  (15T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RXZ 428HDS (15T-37T)-bs', 'INNER RXZ 428HDS X 120 L  (15T-37T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RXZ 428HDS (15T-38T)-bs', 'INNER RXZ 428HDS X 120 L  (15T-38T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RXZ 428HDS (15T-39T)-bs', 'INNER RXZ 428HDS X 120 L  (15T-39T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RXZ135 AD-35T-bs', 'INNER RXZ135 428AD X 120 L  (15T-35T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RXZ135 AD-36T-bs', 'INNER RXZ135 428AD X 120 L  (15T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RXZ135 AD-37T-bs', 'INNER RXZ135 428AD X 120 L  (15T-37T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RXZ135 AD-38T-bs', 'INNER RXZ 135 428AD X 120 L  (15T-38T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SBSM-009-bs', 'CB280365140  BOX  OD:275W*360L*150H MM.  (2M)   KA125/CA125/KA125 C/F SCREEN', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SBSM-010 Cancel-bs', 'PT245725003  725W*245L KA125/CA125/KA125 CF 1:1  PTT', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SBSM-011/1-bs', 'PT350550003  PTT ASSY PTT-A 35W*230L  KA125/CA125/KA125 CF 1:4 + PTT-B 35W*285L  KA125/CA125/KA125 CF 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SBSM-012 Cancel-bs', 'PT244320090   PTT ASSY PTT-A 90W*320L  KA125/CA125/KA125 CF 1:3 + PTT-B 90W*244L  KA125/CA125/KA125 CF 1:6', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SBSM-013-bs', 'CB270358070  BOX  OD 270W*360L*77H (343W*1285L) KI150/CA125*KI150 CF 1:1 SCREEN RED', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SBSM-014-bs', 'CB070745100  BOX ASSY OD 76W*755L*123H BOX ASSY A 269W*859L KA125/CA125/KA125 CF 1:1 + BOX ASSY B 269W*859L KA125/CA125/KA125 CF 1:1  SCREEN RED มัดละ 20 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SBSM-015-bs', 'CB355550160  CARTON BOX (OD:355*550*160H)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SBSM-016 Cancel-bs', ' PT27353634  CARTON PARTITION (OD:273W*536L*34H MM.)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SBSM-017-bs', 'SH7001400  VCI SHEET 700W*1400L*0.06T (Pack-F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SBSM-018-bs', 'BB33052510 AIR PACK SHEET 330W*525L*10  (Pack-F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SBSM-019-bs', 'CARTON BOX OD : 230W*320L*390H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCN-030-bs', 'PA03788200 TOP CAP (จ้างทำ)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCN-031-bs', 'PA03788300 BOTTOM CAP (จ้างทำ)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCN-032-bs', 'PA03788000 TOP CAP (จ้างทำ)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCN-033-bs', 'PA03788100 BOTTOM CAP (จ้างทำ)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCN-034-bs', 'PA03798300 TOP CAP H42 (จ้างทำ)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCN-035-bs', 'PA03798400 BOTTOM CAP H42 (จ้างทำ)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCR-001-1-bs', 'CARTON  BOX  SIZE   OD   265W*435L*175H   KA185/CA125/KA185   C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCR-002-bs', 'CARTON  BOX  SIZE   OD   530W*880L*262H      KA185/CA125*3/KA185  BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCR-003-bs', 'SILICA GEL 10 G. (Non Woven)  600 PCS/BOX', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCR-004-bs', 'CARTON  BOX  SIZE  OD 503W*1005L*288H  KA230/CA125/KA230  C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCR-006-bs', 'CARTON  BOX  SIZE  OD   265W*435L*83H   KA185/CA125/KA185   C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCR-016-bs', 'Slip Sheet Size : 1070L*(100+1060+100)mm', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SD110-AD-bs', 'INNER SD110  428AD X 104 L  (15T- 37T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SE-001-bs', 'WOODEN PALLET 1100Wx1100Lx130H (FUMIGATION) 2WAY', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SE-002 (Cancel)-bs', 'CARTON BOX ASS''Y GLUE (RSC) 205W*335L*85H MM.(KA150/KA150 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SE-005 (Cancel)-bs', 'WOODEN PALLET 750Wx1100Lx120H MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SE-005-1-bs', 'WOODEN PALLET 750Wx1100Lx120H MM. (DV.) (แผ่นบนตีเต็ม ไม่มีช่องห่าง)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SE-007-bs', 'SLEEVE SET ID : 1060x1060x800 mm.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SERVICE-DANA LKB-bs', 'SERVICE DELIVERY PRODUCT  DANA LADKRABANG', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SGB-014-bs', 'Paper Pad 145W*213L (Bi-wall 40AA)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SGB-020-bs', 'Carton board for packing E2SC export (Sheet board : 1200W*1200L MM)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SHOGUN125/SMASH-bs', 'INNER SHOGUN 125/SMASH 428HDS X 100 L (14T-35T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SHOGUN125/SMASH AD-bs', 'INNER SHOGUN 125/SMASH 428ADX 100 L (14T-35T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-001-bs', 'PP BARND สายรัดกล่อง 15 T MM X 1200L  MM. สีฟ้า (8 KGS/ROLL)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-002-bs', 'CLIP STEEL LOCK PP BRAND /คลิบล๊อกสายรัด', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-009 Cancel-bs', 'Cardboard A Pad  KL205/CA125*3/KL205 BC/F PRINT 2 PLATE DIA 368 MM (งานจริง 369)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-010 (Cancel)-bs', 'Cardboard A Pad KL205/CA125*3/KL205 BC/F PRINT 2 PLATE DIA 402 MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-011 Cancel-bs', 'Cardboard A Pad KL205/CA125*3/KL205 BC/F PRINT 2 PLATE DIA 460 MM (งานจริง461)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-012 Cancel-bs', 'Cardboard A Pad KL205/CA125*3/KL205 BC/F PRINT 2 PLATE DIA 513 MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-020 Cancel-bs', 'Cardboard B Pad KL205/CA125/L205 C/F NO PRINTING DIA 368 MM (งานจริง 369)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-021 Cancel-bs', 'Cardboard B Pad KL205/CA125/L205 C/F NO PRINTING DIA 402 MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-022 Cancel-bs', 'Cardboard B Pad KL205/CA125/L205 C/F NO PRINTING DIA 460 MM (งานจริง 461)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-023 Cancel-bs', 'Cardboard B Pad KL205/CA125/L205 C/F NO PRINTING DIA 513 MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-025 Cancel-bs', 'Cardboard  A  KL205/3CA125/KL205  BC/F  PRINTING    DIA  417 MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-028 Cancel-bs', 'Cardboard  B  KL205/CA125/KL205  C/F  NOPRINT    DIA  417 MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-033 Cancel-bs', 'Cardboard B Pad KL205/CA125/KL205 C/F NO PRINTING 2 PLACES DIA 436 MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-034 Cancel-bs', 'Cardboard A Pad KL205/CA125*3/KL205 BC/F PRINTING 2 PLACES  DIA 436 MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-035 Cancel-bs', 'Cardboard A Pad KL205/CA125*3/KL205 BC/F PRINTING 2 PLACES  DIA 563 MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-036 Cancel-bs', 'Cardboard B Pad KL205/CA125/L205 C/F NO PRINTING DIA 563 MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIDE COVER-H60A-bs', 'SIDE COVER 370Wx800L MM.  1:4   FOR  NISSAN H60A', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIRIUS (AD3)-bs', 'INNER SIRIUS  (AD3) 428AD X 100 L  ( 15T-35T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIRIUS FI-40T-bs', 'INNER SIRIUS FI (HDS) 428HDS X 108 L  ( 14T- 40T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIRIUS-1 (AD3)-bs', 'INNER  SIRIUS-1 (AD3)  428AD X 104 L (15T-35T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIRIUS-1 (HDS)-104-bs', 'INNER SIRIUS-1 (HDS) 428HDS X 104 L  ( 15T- 35T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIRIUS-HDS-bs', 'INNER SIRIUS (HDS) 428HDS X 100 L  ( 15T- 35T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SLD41N+D54T(Cancel)-bs', 'Z-NK001-SLE10  SLEEVE 880*2141  KA185/3M*KA185 BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SLEEVE-TOYODA (Cancel)-bs', 'Z-NK001-SLV05  SLEEVE VALVE 674*1122*1145  KA185/3M/KA185 BC/F (SL001)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SMASH - AD3-bs', 'INNER SMASH 428AD3 X 100 L (14T- 36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SMASH (AD3)-102-bs', 'INNER SMASH (AD3)  428AD X 102 L  (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SMASH 110 428AD3 106L-bs', 'INNER SMASH 110 428AD3  X  106L  ( 14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SMASH100 HDS-bs', 'INNER SMASH 110  428HDS  X 100 L ( 14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SMASH110 HDS-104L-bs', 'INNER SMASH110  428HDS  X 104 L ( 14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SMASH110 HDS-34T-bs', 'INNER SMASH110  428HDS  X 110 L ( 14T-34T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SMASH110 HDS-36T-bs', 'INNER SMASH110  428HDS  X 110 L ( 14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SMASH-110-AD3-bs', 'INNER SMASH 110  428AD3  X 100 L ( 14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SMASH-110-AD3-35T-bs', 'INNER SMASH 110  428AD3  X 100 L ( 14T-35T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SMASH-AD3-bs', 'INNER SMASH  428AD X 100L  ( 14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-002-bs', 'PE SHEET SIZE : 1700W*1700L*0.06T', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-003-bs', 'ZERUST BAG 1200*1200*1600*0.06T (1150*1150*1650*0.07T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-005-bs', 'CONTAINER DRI II (100g.)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-039-bs', 'PP BAND Black color 15MM*0.7T*1200M', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-040-bs', 'BAG IDPE SIZE : 1625W*2083L*0.04T MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-041-bs', 'PAD SIZE : 305W*920L (AP500)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-043-bs', 'PE SHEET SIZE : 1700W*1700L*0.04T(For U725 Bronco)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-044-bs', 'CONTAINER DRI II (100g.) (For U725 Bronco)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-045-bs', 'ZERUST BAG  1150*1150*1650*0.07T (For U725 Bronco)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-053-bs', 'PAPER (230-350 gsm) SIZE : 40 x 47 inches.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SRI-001-bs', 'CARTON BOX  SIZE OD:265Wx435Lx83H (KA185/CA125/KA185 C/F)+PRINT', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SRI-002-1-bs', 'CARTON BOX  SIZE OD:265Wx435Lx175H (KA185/CA125/KA185 C/F) +PRINTING', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SRI-004-bs', 'ECO DRY 10g (600PCS/BOX)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SRI-005-bs', 'CARTON BOX  SIZE OD:210W*285L*100H (KA185/CA125*3/KA185 BC/F)+PRINTING', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SRI-006-bs', 'CARTON BOX  SIZE OD:230W*300L*100H (KA185/CA125*3/KA185 BC/F)+PRINTING', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SRL 115-38T-AD-bs', 'INNER SRL 115 428AD  X  110 L (14T-38T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SRL 115-39T-AD-bs', 'INNER SRL115 428AD  X  110 L (14T-39T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SRL 115-40T-AD-bs', 'INNER SRL 115 428AD  X  110 L (14T-40T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SRL 115-AD-bs', 'INNER SRL 115 428AD  X  110 L (14T-37T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SRL110 428AD (15T-36T)-bs', 'INNER SRL110 428AD X 104 L (15T- 36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SSP-001-bs', 'Carton Box Size 630W*1370L*330H  (  KA230/3CA125/KA230   BC/F) + No print', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SSR-001-bs', 'TOP  CAP  1247W*1396L   KA230/CA125*3/KA230   BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'STT-001-bs', 'STEEL DRUM (200L) SIZE : OD 570Wx920L MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SUN-003-bs', 'BOX  TG446251-7180 (OD) : 258W*348L*182H mm ( KA185/CA125/KA185 C/F ) SCREEN', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SUN-005 (Cancel)-bs', 'BOX OD : 265W*435L*175L 435W*1424L KA185/CA125/KA185 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SUN-005-1-bs', 'BOX OD : 265W*435L*175L 435W*1424L KA185/CA125/KA185 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SUN-007-bs', 'SILICA GEL 10 g (Non Woven)  (600 Pcs/Box)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SUN-009-bs', 'BOX OD : 265W*435L*83H (KA185/CA125/KA185 C/F)+Printing Screen', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SUN-010-bs', 'Heat shield sheet for insulation tank (Cut sheet sales only) (Top cover / Front & back side / Left & right side)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SUPRA-AD-bs', 'INNER SUPRA FIT NEW 428AD X  106 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SUPRA-AD-104-bs', 'INNER SUPRA  428AD X 104 L  (15T-40T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SUPRA-HDS-bs', 'INNER SUPRA FIT NEW 428HDS X 106 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SUPRA-HDS-104-bs', 'INNER SUPRA  428HDS X 104 L  (15T-40T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-10OT4475-bs', 'S/B 1369W*1283L   KA230/CA125/KA230  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312040005-bs', 'S/B  1560W*1308L  KA185/CA125/KA185  C/F 6:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312040006-bs', 'S/B 1150W*1297L KA185/CA125/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312040007-bs', 'S/B  1171W*1279L  KA185/CA125/KA185  C/F 8:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312040016-bs', 'S/B 1156W*947L  KA185/CA125/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312040019-1CANCEL-bs', 'S/B1458W*1130L  KI185/CA125/KI185 BF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312040038-bs', 'S/B  1059W*1265L  KA185/CA125/KA185  C/F 8:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312040039-bs', 'S/B  1210W*1283L KA150/CA125/KA150 CF 3:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312040042-bs', 'S/B 1015W*1285L KA185/CA125/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312040044-bs', 'S/B  1015W*1285L  KA185/CA125/KA185  C/F 6:1 (W42"*L50" 5/8)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312040045-bs', 'S/B  1411W*1323L KA150/CA125/KA150 CF 3:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312080044-bs', 'S/B 1192W*1299L KI185/CA125/KI185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312080046-bs', 'S/B  1141W*1339L  KI185/CA125/KI185  C/F 3:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312080048-bs', 'S/B  1276W*2009L KI185/CA125/KI185 CF 3:1 (W52"*L79" 1/8)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312080050-bs', 'S/B  1057W*1129L KI185/CA125/KI185 CF 3:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312080052-bs', 'S/B  1222W*1381L KI185/CA125/KI185 CF 3:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312080054-bs', 'S/B  1420W*1323L KI185/CA125/KI185 CF 3:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312080063-bs', 'S/B  1067W*1275L KA125/CA125/KA125 CF 8:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312080065-bs', 'S/B  1067W*1275L KA125/CA125/KA125 CF 8:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312080067-bs', 'S/B  1315W*1275L KA125/CA125/KA125 CF 8:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312080068-bs', 'S/B  1369W*1275L KA125/CA125/KA125  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312080069-bs', 'S/B  1315W*1275L KA125/CA125/KA125 CF 8:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312080070-bs', 'S/B 1384W*1300L KA125/CA125/KA125 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312080071-bs', 'S/B  996W*1094L KI185/CA125/KI185 CF 4:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312080072-bs', 'S/B  1290W*1334L  KI185/CA125/KI185 CF 10:1 (W52"*L52" 9/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312080073-bs', 'S/B  1212W*939 KI185/CA125/KI185 CF 4:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312080075-bs', 'S/B  1160W-929L KI185/CA125/KI185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312080076-bs', 'S/B  1112W*1274L KI185/CA125/KI185 CF 8:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312080077-bs', 'S/B  1132W*1374L KI185/CA125/KI185 CF 8:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312080078-bs', 'S/B  1056W*1334L KI185/CA125/KI185 CF 6:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312080079-bs', 'S/B  1032W*1334L KI185/CA125/KI185 CF 8:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2313010018-bs', 'S/B  1207W*993L KI125/CA125/KI125 CF 3:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2313030006-bs', 'S/B  1378W*1492L KA150/CA125*3/KA150  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2313030016-bs', 'S/B  1288W*1442L KA150/CA125*3/KA150  BCF (W52"*L56" 13/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2313030017-bs', 'S/B  1378W*1492L KA150/CA125*3/KA150  BCF (W56"*L58" 3/4)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2314010084-bs', 'S/B 1306W/1268L KL175/CA125/KL175 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-420AD-CS-bs', 'S/B  1099W*1344L KL205/CA125*3/KL150  BCF  1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-428AD-CS-bs', 'S/B  1087W*1344L KL205/CA125*3/KL150  BCF 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-428H-CB-bs', 'S/B  1225W*1411L KL205/CA125*3/KL150 BC 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-428HCS-bs', 'S/B  1189W*1364L KL205/CA125*3/KL150  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-AAM-012-bs', 'S/B 1163W*950L KA230/CA125/KA230  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-AST-003-bs', 'S/B  1568W*1442L KA185/CA125*3/KA185 BCF 2:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-AST-004-bs', 'S/B  1315W*1424L KA185/CA125/KA185 CF 3:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BEISHIN-003-bs', 'S/B  1354W*1701L KA125/CA125*3/KA125 BCF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BEISHIN-003-1-bs', 'S/B  1354W*1701L KA125/CS110*3/KA125 BCF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BEISHIN-004-bs', 'S/B  1352W*1248L KA125/CA125/KA125 CF 1:16(32)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BEISHIN-004-1-bs', 'S/B  1352W*1248L KA125/CS110/KA125 CF 1:16(32)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BEISHIN-005-bs', 'S/B  1352W*1056L KA125/CA125/KA125 CF 1:8(16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BEISHIN-005-1-bs', 'S/B  1352W*1056L KA125/CS110/KA125 CF 1:8(16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BEISHIN-009-1-bs', 'S/B  1196W*1040L KA125/CA125/KA125 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BEISHIN-009-2-bs', 'S/B  1196W*1040L KA125/CS110/KA125 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BOX  PACKAGE FOR 811-bs', 'S/B  1596W*1539L KA230/CA125*3/KA230 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-001-bs', 'S/B  1356W*1388L KI125/CA125/KI125  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-004-bs', 'S/B  1468W*1875L KI125/CA125/KI125  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-005/1-bs', 'S/B  1342W*1288L  KI125/CA125/KI125  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BSA-BEISHIN-017-bs', 'S/B  1062W*1120L CA125/CA125/CA125 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BSA-BEISHIN-017/1-bs', 'S/B  1062W*1106L CA125/CA125/CA125 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-AKE-012-bs', 'S/B  1294W*1328L KA125/CA125/KA125  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-AKE-013-bs', 'S/B  974W*1408L KA125/CA125/KA125  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BSA-SBSM-011/1-1-bs', 'S/B 1110W*915L  KA125/CA125/KA125  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BSA-SBSM-011-1-bs', 'S/B 1110W*1000L  KA125/CA125/KA125  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BSA-SBSM-012-bs', 'S/B 1160W*1020L KA125/CA125/KA125  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BSA-SBSM-012/1-bs', 'S/B 1160W*1056L KA125/CA125/KA125  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BSA-SCN-012-bs', 'S/B 1800W*990L  KA125/CA125/KA125  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BSA-SCN-012/1-bs', 'S/B 1800W*872L  KA125/CA125/KA125  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-AST-003-bs', 'S/B  1568W*1442L KA185/CA125*3/KA185 BCF 2:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-AST-004-bs', 'S/B 1382W*1424L KA185/CA125/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-AST-005-bs', 'S/B 1382W*1424L KA185/CA125/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-AST-043-bs', 'S/B  1526W*1842L  KA125/CA125*3/KA125 BCF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BSA-STD-008-bs', 'S/B 988W*1070L KA125/CA125/KA125 CF 1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-BEISHIN-017-bs', 'S/B 1062W*1120L CA125/CA125/CA125 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-BEISHIN-017/1-bs', 'S/B 1062W*1106L CA125/CA125/CA125 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-CYC-004-1-bs', 'S/B  1014W*1564L  KA230/CA125/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-CYC-005-3-bs', 'S/B 1680W*1638L KA230/CA125/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-CYC-005-3/1-bs', 'S/B 1680W*1962 KA230/CA125/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-CYC-006-1-bs', 'S/B  1063W*1063 KA185/CA125/KA185 BF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-CYC-007-bs', 'S/B  1215W*1200L KA230/CA185*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-CYC-009-bs', 'S/B  1215W*1200L KA230/CA185*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-CYC-017-1-bs', 'S/B 928W*1965L KA230/CA185*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-DAN-002-KA185-bs', 'S/B  858W*1816L KA185/CA125*3/KA185 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-FJA-005-bs', 'S/B 868W*1252L KA185/CA125*3/KA185 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-FJA-005/1-bs', 'S/B 980W-1260L KA185/CA125*3/KA185 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-FJA-005/2-bs', 'S/B 932W-1260L KA185/CA125*3/KA185 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-FJA-005/3-bs', 'S/B 1090W-1260L KA185/CA125*3/KA185 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-FJA-006-bs', 'S/B 838W*1652L KA125/CA125*3/KA125 BCF (W68"*L66" 1/16 ผ่า 2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-FJA-006/1-bs', 'S/B 1145W*920L KA125/CA125/KA125 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-HOWA-018-bs', 'PAD 1510W*2000L KA125/CA125/KA125 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-HPS-002-bs', 'S/B  722W*793L  KA185/CA125/KA185 CF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-JTK-015-bs', 'S/B 1260W*1090L KA230/CA125*3/KA230  BCF 1:6', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-JTK-016-bs', 'S/B 1314W*1150L KA230/CA125*3/KA230  BCF 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-JTK-017-bs', 'S/B 1260W*1150L KA230/CA125*3/KA230  BCF 1:6', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-JTK-018-bs', 'S/B 1260W*1150L KA230/CA125*3/KA230  BCF 1:6', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-JTK-019-bs', 'S/B 1320W*1150L KA230/CA125*3/KA230  BCF 1:8', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-JTK-020-bs', 'S/B 1290W*1090L KA230/CA125*3/KA230  BCF 1:6', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-JTK-021-bs', 'S/B 1280W*1150L KA230/CA125*3/KA230  BCF 1:8', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-JTK-022-bs', 'S/B 1276W*1150L KA230/CA125*3/KA230  BCF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-JTK-023-bs', 'S/B 1300W*1150L KA230/CA125*3/KA230  BCF 1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-JTK-024-bs', 'S/B 1280W*1004L KA230/CA125*3/KA230  BCF 1:32', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-KTF-004-bs', 'S/B 970W*800L CA125/CA125/CA125 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-KTF-006-bs', 'S/B 1014W*2826 L  KA125/CA125*3/KA125 BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-KTF-008-bs', 'S/B 940W*1857L  (KI150/CA125*3/KI150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-KTF-010-bs', 'S/B 982W*1018L  (KI150/CA125/KI150 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-KTF-013-bs', 'S/B 1595W*1286L KI150/CA125*3/KI150 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-NTN-007-bs', 'S/B 633W*1587L KA185/CA125*3/KA185 BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-SCN-012-bs', 'S/B 1800W*1263L  KA125/CA125/KA125  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-SCR-004-bs', 'S/B  1574W*1539L KA230/CA125/KA230 CF 1:1 (W64"*L60" 5/8)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-STD-006/1-bs', 'S/B 1038W*1875L KA230/CA125/KA230', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-STD-007-bs', 'S/B 1528W*1070L KA125/CA125/KA125 CF 1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-STD-011-bs', 'S/B 722W*724L KA125/CA125/KA125 CF 1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-STD-011/1-bs', 'S/B 702W*704L KA125/CA125/KA125 CF 1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-SUN-009-bs', ' S/B 1382W*1424L KA185/CA125/KA185   C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-YRZ-010-bs', 'S/B1028W*1817L KA125/CA125*3/KA125 BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-CB015701670011-bs', 'S/B 1620W*1386L KI150/CA125/KI150   CF 1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-CB0240240180H-bs', 'S/B 1405W*1042L KA125/CA125*3/KA125 BCF  3:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-CB0260500300H-bs', 'S/B 1190W*1592L KA125/CA125*3/KA125 BCF  1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-CB0365270160-bs', 'S/B 1282W*1289L  KA230/CA125*3/KA230  BCF 1;3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-CB0365540160-bs', 'S/B 1046W*1829L KA230/CA125*3/KA230 BCF 2:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-CB0365540320-bs', 'S/B 1366W*1829L  KA230/CA125*3/KA230  BCF 1;2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-CB-49180-bs', 'S/B 1369W*1748L KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-CC0002799A-bs', 'S/B 1072W*2258L  KI150/CA125*3/KI150 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-CC0002799B-bs', 'S/B 1072W*2258L KI150/CA125*3/KI150 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-CC0002799B-1CANCELL-bs', 'S/B 1012W*2258L KI150/CA125*3/KI150 BCF (W42"*L88" 15/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-CC0002799C-bs', 'S/B 1072W*2258L  KI150/CA125*3/KI150 BCF 1:2 (W44"*L88" 15/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-CC0002800A-bs', 'S/B 1258W*1402L  KI150/CA125*3/KI150 BCF 6:1 (W50"*L55" 3/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-CC0002860A-1-bs', 'S/B 1116W*1452L  KA150/CA125/KA150 CF 1:9 (W46"*L57" 3/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-CC0002861A-1-bs', 'S/B 1256W*990L  KA150/CA125/KA150 CF 10:1  (W50"L39")', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-CC0002862A-bs', 'S/B 1136W*1140L KA150/CA125/KA150  CF 1:12 (W46"*L44" 15/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-CC0002937A-bs', 'S/B 900W*1260L  KA230/CA125/KA230  CF (W36"*L49" 5/8)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-CC0002938A-bs', 'S/B 1052W*972L KA230/CA125/KA230  CF (W42"*L38" 1/4)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-CC0002940A-bs', 'S/B 1052W*972L  KA230/CA125/KA230  CF (W42"*L38" 5/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-DRUMBRAKE-bs', 'S/B 1009W*1104L KA230/CA125/KA230  CF (W42"*L43" 1/2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JNC-003-bs', 'S/B 1440W*1440L  KA150/CA125*3/KA150 BCF 4:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JNC-006-bs', 'S/B 960W*960L  KA150/CA125*3/KA150 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JNC-007-bs', 'S/B 980W*980L  KA150/CA125*3/KA150 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JNC-008-1-bs', 'S/B 1540W*1020L  KA150/CA125/KA150 CF 1:14', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JNC-011-bs', 'S/B 900W*900L  KA150/CA125*3/KA150 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JNC-012-bs', 'S/B 1400W*1400L  KA150/CA125*3/KA150 BCF 1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JNC-013-bs', 'S/B 1480W*1480L  KA150/CA125*3/KA150 BCF 1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JNC-014-bs', 'S/B 1520W*1520L  KA150/CA125*3/KA150 BCF 1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JNC-016-1-bs', 'S/B 1540W*1320L  KA150/CA125/KA150 CF 1:40', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JNC-017-bs', 'S/B 880W*880L  KA150/CA125*3/KA150 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JNC-022-bs', 'S/B 1000W*1000L KA150/CA125*3/KA150  BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JNC-028-bs', 'S/B 780W*780L  KA150/CA125*3/KA150  BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JNC-028-1-bs', 'S/B 780W*780L  KA150/CA125*3/KA150  BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JNC-029-bs', 'S/B 770W*620L KA150/CA125/KA150 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JNC-030-bs', 'S/B 800W*800L  KA150/CA125*3/KA150  BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JT029-bs', 'S/B 1080W*1068L KA230/CA125*3/KA230 BCF 3:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JT030-bs', 'S/B 1248W*1068 KA230/CA125*3/KA230 BCF 3:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JT031-bs', 'S/B 1248W*1068 KA230/CA125*3/KA230 BCF 3:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JT032-bs', 'S/B 1080W*1068L KA230/CA125*3/KA230 BCF 3:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JT042-bs', 'S/B 1207W*1329L KA230/CA125/KA230  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JT047-1-bs', 'S/B 1207W*1329L KA230/CA125/KA230  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JVT-001/CASE-1-bs', 'S/B 1457W*995L KA125/CA125/KA125 CF (W58"*L39" 3/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JVT-001/TRAY-1-bs', 'S/B 1160W*780L  KA125/CA125/KA125 CF (W48"*L30" 3/4)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JVT-002-bs', 'S/B 1364W*1210L KA125/CA125/KA125 CF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-KBL-003 CANCEL-bs', 'S/B 666W*1840L  KA125/CA125/KA125  CF (W54"*L72" 1/2 ผ่า 2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NAGANO-001-1-bs', 'S/B  1130W*1684L  KA125/CA125/KA125  C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NAGANO-001-2-bs', 'S/B  990W*1113L  KA125/CA125/KA125  C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NAGANO-001-3-bs', 'S/B  1190W*1056L KA125/CA125/KA125  C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NAGANO-001-4-bs', 'S/B  1240W*1138L  KA125/CA125/KA125  C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NHT-003-bs', 'S/B  1162W*1080L KA185/CA125*3/KA185 BCF 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NPT-C27054355180-bs', 'S/B 1327W*1439L  KA185/CA125/KA185 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NPT-P2504253-bs', 'S/B 1007W*1707L  KA125/CA125/KA125 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NSK-023-bs', 'S/B 1076W*1521L  KA125/CA125*3/KA125*3 BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NT261448(PTT)/1-bs', 'S/B 1553W*720L KA185/CA125/KA185 CF 1:10', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NT261448(TRAY)-bs', 'S/B 1619W*2100L KA185/CA125/KA185 CF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-PS0000676-bs', 'S/B 1131W*1609L  KA230/CA125/KA230 CF (W46"*L63" 3/8)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-PTTB1D41N+D54T-bs', 'S/B 1176W*1068L KA230/CA125*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-PTTB2D41N+D54T-bs', 'S/B 1176W*1068L KA230/CA125*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-PTTB3D41N+D54T-bs', 'S/B 1176W*1068L KA230/CA125*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-PTTB4D41N+D54T-bs', 'S/B 1176W*1068L KA230/CA125*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-PTT-JTEKT-bs', 'S/B 958W*1032L  KA230/CA125/KA230 CF 1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-PTTPUMP-bs', 'S/B 1092W*1184L KA125/CA125*3/KA125 BCF 1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-PTT-TOYODA-01-bs', 'S/B 1480W*1068L  KA185/CA125/KA185 CF 1:10 (W60"*L42" 1/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-PTT-TOYODA-02-bs', 'S/B 1101W*1480L KA185/CA125/KA185 CF 1:15 (W44"*L58" 5/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAIR-046-bs', 'S/B 1040W*1164L KA185/CA125*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAIR-051-bs', 'S/B 1280W*1016L KA185/CA125*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAIR-052-bs', 'S/B 1092W*1252L KA185/CA125*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAIR-053-bs', 'S/B 1092W*1252L KA185/CA125*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAIR-054-bs', 'S/B 1092W*1005L KA185/CA125*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAIR-055-bs', 'S/B 1092W*1005L KA185/CA125*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAKE-001-bs', 'S/B 1062W*1212L KA230/CA185*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAKE-004-bs', 'S/B  1150W*962L  KA230/CA125*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAKE-005 CANCEL-bs', 'S/B  1280W*1614L  KA230/CA125*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAKE-005-1-bs', 'S/B  1280W*1604L  KA230/CA125*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAKE-007-bs', 'S/B  1062W*1212L  KA230/CA185*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAKE-010-1-bs', 'S/B 943W*2043L KA230/CA125*3/KA230 BC/F 1:.1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAKE-013-bs', 'S/B 1240W*1256L KA230/CA125*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAKE-017-bs', 'S/B  1213W*1316L  KA230/CA185*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAKE-018/1-bs', 'S/B  825W*1250L  KA230/CA185*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RART-001-bs', 'S/B 798W*1516L KA125/CA125/KA125 CF 1:8', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RART-012-bs', 'S/B 920W*2097L KA230/CA185*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RART-015-bs', 'S/B 1210W*1273L  KA230/CA125/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RART-016-bs', 'S/B 1210W*1500L  KA230/CA125/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RART-017-bs', 'S/B 1210W*1500L  KA230/CA125/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RBOX-FUJI-10-bs', 'S/B 942W*1352L KA230/CA125/KA230  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RBOX-FUJI-20-bs', 'S/B 872W*1332L KA230/CA125/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RCYC-001-bs', 'S/B1684W*1702L KA230/CA185*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RCYC-002-bs', 'S/B 1230W*993L KA230/CA125*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RCYC-005-bs', 'S/B1684W*1702L KA230/CA185*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-015-bs', 'S/B 1660W*2230L KA230/CA185*3/KA230 BC 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-018-bs', 'S/B 1740W*1620L KA230/CA185*3/KA230 BC 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-026-bs', 'S/B 950W*1130L KA230/CA185*3/KA230 BC 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-027-bs', 'S/B 950W*1130L KA230/CA185*3/KA230 BC 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-028-bs', 'S/B 736W*1000L KA230/CA185*3/KA230 BC 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-029-bs', 'S/B 1090W*960L KA230/CA185*3/KA230 BC 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-037-bs', 'S/B 1241W*765L KA230/CA125*3/KA230 BC 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-038-bs', 'S/B 1280W*1140L KA230/CA125*3/KA230 BC 1:6', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-042-bs', 'S/B 1500W*2119L KA230/CA185*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-043-bs', 'S/B 1290W*1000L KA230/CA185*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-044-bs', 'S/B 1280W*1290L  KA230/CA125*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-045-bs', 'S/B 1280W*1290L  KA230/CA125*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-072-1-bs', 'S/B  1538W*1325L KA230/CA185*3/KA230 BCF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-074-1-bs', 'S/B 1190W*1324L KA230/CA125/KA230 CF 1:20', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-080-1-bs', 'S/B  1538W*1325L KA230/CA185*3/KA230 BCF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-099-bs', 'S/B 1280W*2276L KA230/CA125*3/KA230 BCF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-100-bs', 'S/B  1096W*2290L KA230/CA125*3/KA230 BCF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-101-bs', 'S/B  1360W*1260L KA230/CA125*3/KA230 BCF 1:16', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-102-bs', 'S/B  1360W*1260L KA230/CA125*3/KA230 BCF 1:16', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-104-bs', 'S/B 1046W*1066L KA230/CA125*3/KA230 BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-108-1-bs', 'S/B 810W*1435L KA150/CA125*3/KA150  BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-109-1-bs', 'S/B 810W*1258L KA150/CA125*3/KA150  BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-114-1-bs', 'S/B 810W*1035L KA150/CA125*3/KA150  BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-124-bs', 'S/B 1311W*1306L KA185/CA125*3/KA185   BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-125-bs', 'S/B 1280W*1050L  KA185/CA125*3/KA185 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-126-bs', 'S/B  1050W*1050L  KA150/CA125*3/KA150  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-128-bs', 'S/B 1311W*1306L KA185/CA125*3/KA185  BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-141-bs', 'S/B 1228W*1116L KA230/CA125*3/KA230 1:12 BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-142-bs', 'S/B 1228W*1116L KA230/CA125*3/KA230 1:12 BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-161-bs', 'S/B  954W*670L  KA230/CA125/KA230  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDEN-004-bs', 'S/B 766W*1429L KL205/CA125/KL205 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDEN-006-bs', 'S/B 1047W*979L KL205/CA125/KL205 CF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDIC-007-bs', 'S/B 1392W*1117L KA185/CA125*3/KA185 BCF 2:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDIC-008-bs', 'S/B 1008W*1156L KA185/CA125*3/KA185 BCF 8:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDIC-009-bs', 'S/B 1008W*1156L KA185/CA125*3/KA185 BCF 8:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDIC-010-bs', 'S/B 1008W*1156L KA185/CA125*3/KA185 BCF 8:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDIC-011/1-bs', 'S/B 1140W*1278L KA185/CA125*3/KA185 BCF 6:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDIC-013-bs', 'S/B 926W*1309L KA230/CA125*3/KA230 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDIC-014-bs', 'S/B 926W*1309L KA230/CA125*3/KA230 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDIC-015-bs', 'S/B 1312W*1200L KA230/CA125*3/KA230 BCF 8:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDIC-016-bs', 'S/B 1312W*1200L KA230/CA125*3/KA230 BCF 8:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDIC-017-bs', 'S/B 1312W*1200L KA230/CA125*3/KA230 BCF 8:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDIC-018-bs', 'S/B 1398W*1352L KA230/CA125*3/KA230 BCF 018/4:1,019/3:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDIC-019-bs', 'S/B 1398W*1352L KA230/CA125*3/KA230 BCF 018/4:1,019/3:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RFAE-004-bs', 'S/B  814W*1763L KA230/CA185*3/KA230 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RFAE-005-bs', 'S/B  1048W*857L KA230/CA185*3/KA230 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RFAE-006-bs', 'S/B 1114W*1763L KA230/CA185*3/KA230 BCF 1:1 (W46"*L69" 7/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RFAE-007-bs', 'S/B  746W*857L KA230/CA185*3/KA230 BCF 1:1 (W60"*L33" 3/4 ผ่า 2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RFAE-008-bs', 'S/B  1340W*1763L KA230/CA185*3/KA230 BCF 1:1 (W54"*L69" 7/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RFAE-009-bs', 'S/B  1340W*810L KA230/CA185*3/KA230 BCF 1:1 (W54"*L31" 7/8)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RFAE-029-bs', 'S/B  1665W*1900L KA230/CA125*3/KA230 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RFAE-030-bs', 'S/B  1665W*1900L KA230/CA125*3/KA230 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RFAE-034-bs', 'S/B  910W*1450L KA230/CA125*3/KA230 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RFAE-035-bs', 'S/B  946W*1450L KA230/CA125*3/KA230 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RFAE-036-bs', 'S/B  1336W*2020L KA230/CA125*3/KA230 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RFAE-038-bs', 'S/B  1012W*1101L KA230/CA125*3/KA230 BCF 1:4 (W42"*L43" 3/8)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RFAE-039-bs', 'S/B  1012W*1101L KA230/CA125*3/KA230 BCF 1:4 (W42"*L43" 3/8)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RFAE-040-bs', 'S/B  1012W*1101L KA230/CA125*3/KA230 BCF 1:4 (W42"*L43" 3/8)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RFAE-041-bs', 'S/B  1336W*2020L  KA230/CA125*3/KA230 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RFAE-043-bs', 'S/B  1012W*1790L  KA230/CA125*3/KA230 BCF 1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RFAE-043-1-bs', 'S/B  1012W*1856L  KA230/CA125*3/KA230 BCF 1:4 (W42"*L73" 1/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RFAE-044-1-bs', 'S/B  953W*1650L KA230/CA125*3/KA230 BCF 1:1 (W38"*L65")', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RFAE-045-1-bs', 'S/B  953W*1650L KA230/CA125*3/KA230 BCF 1:1 (W38"*L65")', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RHOD-001/1-bs', 'S/B 1134W*1248L KL205/CA125*3/KL205 BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RHOD-002/1-bs', 'S/B 1400W*1474L KL205/CA125*3/KL205 BCF 1:6', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RHOD-003/1-bs', 'S/B 1400W*1474L KL205/CA125*3/KL205 BCF 1:6', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RHOW-001-bs', 'S/B 1695W*2270L KA230/CA125*3/KA230 BC/F 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RHOW-010-bs', 'S/B 1020W*1326L KA230/CA125*3/KA230 BC/F 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RHOW-024-bs', 'S/B 1092W*1950L KA230/CA125*3/KA230 BC/F 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RHOW-025-bs', 'S/B 1092W*1370L KA230/CA125*3/KA230 BC/F 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RHOW-026-1-bs', 'S/B 1260W*1390L KA230/CA125*3/KA230 BC/F 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RHSB-001-bs', 'S/B 1028W*1021L KL205/CA125*3/KL205 BCF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RHSB-002-bs', 'S/B 1148W*1260L KL205/CA125/KL205 CF 1:12', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RJTK-018-bs', 'S/B  1289W*1161L KA185/CA125*3/KA185 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RJTK-020-bs', 'S/B  892W*1975L KA185/CA125*3/KA185 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RJTK-021-bs', 'S/B  1289W*1161L KA185/CA125*3/KA185 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RJTK-022-1-bs', 'S/B  1307W*1266L KA230/CA185*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RJTK-033-bs', 'S/B  1030W*1586L KA230/CA125/KA230 CF 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RJTK-038-bs', 'S/B  1158W*1126L KA230/CA125/KA230 CF 1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RJTK-046-bs', 'S/B 928W*1168L  KA185/CA125*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RJTK-047-bs', 'S/B 1228W*1152L  KA185/CA125*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RJTK-048-bs', 'S/B 1228W*1152L  KA185/CA125*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RJTK-059-bs', 'S/B  1038W*800L  KA230/CA125/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RJTK-060-bs', 'S/B  1446W*735L   KA230/CA185*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RJTK-070-bs', 'S/B  920W*982L    KA185/CA125*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RJTK-071-bs', 'S/B  920W*1111L    KA185/CA125*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RJTK-072-bs', 'S/B  920W*1111L    KA185/CA125*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RJTK-073-bs', 'S/B  920W*756L    KA185/CA125*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RJTK-074-bs', 'S/B  1111W*680L    KA185/CA125*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RJTK-075-bs', 'S/B  1329W*1345L    KA230/CA125*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RJTK-081-bs', 'S/B  1329W*1345L    KA230/CA125*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKEL-001-bs', 'S/B 1246W*1442L KI125/CA125*3/KI125 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKEL-004-1-bs', 'S/B 1087W*1042L KI185/CA125*3/KI185 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-065-bs', 'S/B 1136W*2071L KA230/CA185*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-071-bs', 'S/B 1310W*1316L KA230/CA185*3/KA230 BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-072-bs', 'S/B  940W*1056L  KA230/CA125/KA230  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-073-bs', 'S/B  924W*1043L  KA230/CA125/KA230  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-074-bs', 'S/B 856W*2171L KA230/CA185*3/KA230 BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-076-bs', 'S/B 1310W*1316L KA230/CA185*3/KA230 BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-078-bs', 'S/B 1310W*1316L KA230/CA185*3/KA230 BC 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-079-bs', 'S/B 1172W*2171L KA230/CA185*3/KA230 BC 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-081-1-bs', 'S/B 1401W*1056L KA230/CA125/KA230 CF 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-082-1-bs', 'S/B 1377W*1043L KA230/CA125/KA230 CF 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-083-bs', 'S/B 1310W*1316L KA230/CA185*3/KA230 BC 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-085-bs', 'S/B 1180W*1346L KA230/CA185*3/KA230 BCF 1:1 MODEL M09', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-086-bs', 'S/B 1136W*2071L KA230/CA185*3/KA230 BCF 1:2 MODEL M09', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-088-bs', 'S/B 1040W*1086L KA230/CA125/KA230 CF 1:2 MODEL M09', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-089-bs', 'S/B 1024W*915L KA230/CA125/KA230 CF 1:2 MODEL M09', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-090-bs', 'S/B 1180W*1346L KA230/CA185*3/KA230 BCF 1:1 MODEL M09', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-092-bs', 'S/B 1180W*1346 KA230/CA185*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-093-bs', 'S/B 980W*2071L KA230/CA185*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-095-bs', 'S/B 1180W*1346 KA230/CA185*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKTW-007-bs', 'S/B 982W*1409L KA230/CA125*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKTW-008-bs', 'S/B 982W*1016L KA230/CA125*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKTW-009-bs', 'S/B 982W*1016L KA230/CA125*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKTW-010-bs', 'S/B 880W*1016L KA230/CA125*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKTW-011-bs', 'S/B 880W*886L KA230/CA125*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKTW-012-bs', 'S/B 982W*1973L KA230/CA185*3/KA230 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKTW-013-bs', 'S/B 1170W*1348L KA230/CA185*3/KA230 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RMSE-001-2-bs', 'S/B 1660W*1177L KA230/CA125*3/KA230  BCF 1:1 (W66"*L46" 3/8)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RMSE-002-bs', 'S/B 1544W*1188L KA185/CA125*3/KA185  BCF 1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RMSE-003-bs', 'S/B 915W*742L KA185/CA125*3/KA185  BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RMSE-007-1-bs', 'S/B 784W*1340L KA230/CA125*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RMSE-008-bs', 'S/B 1136W*916L KA230/CA125*3/KA230 BCF 1:4 (W46"*L36" 1/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RMSE-009-1-bs', 'S/B 784W*1340L KA230/CA125*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RMSE-014-bs', 'S/B 1108W*1108L KA230/CA125*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RMSE-015-3-bs', 'S/B 1498W*1808L KA230/CA125*3/KA230  BCF (W60"*L71" 3/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RMSE-016-3-bs', 'S/B 1898W*1808L KA230/CA125*3/KA230 BC (W76"*L71" 3/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RMSE-020-bs', 'S/B 1152W*828L KA230/CA125*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RMSE-023-bs', 'S/B 915W*742L KA185/CA125*3/KA185  BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RMSE-024-1-bs', 'S/B 1830W*1197L KA230/CA125*3/KA230  BCF 1:1 (W74"*L47" 1/8)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNDK-001-1-bs', 'S/B 772W*949 KA150/CA125/KA150 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNGN-001-bs', 'S/B 988W*1575L KA230/CA125/KA230 CF 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNGN-002-bs', 'S/B 1104W*1074L KA185/CA125/KA185 CF 1:36', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNGN-003-bs', 'S/B 1104W*988L KA185/CA125/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-001 C01-bs', 'S/B 1460W*1376L KA230/CA185*3/KA230  BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-003-bs', 'S/B 1300W*1364L KA230/CA185*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-062-bs', 'S/B 1040W*980L  KA125/CA125*3/KA125  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-063-bs', 'S/B 1200W*1040L  KA125/CA125*3/KA125  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-072-bs', 'S/B 854W*1484L  KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-074-bs', 'S/B 966W*1094L  KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-085-bs', 'S/B 1032W*1184L  KA125/CA125*3/KA125  BCF 8:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-086-bs', 'S/B 1110W*1248L  KA125/CA125*3/KA125  BCF 8:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-087-bs', 'S/B 1110W*1120L  KA125/CA125*3/KA125  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-090-bs', 'S/B 1390W*1604L KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-092-bs', 'S/B 1450W*1442L KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-093-bs', 'S/B 930W*1320L KA185/CA125*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-097-bs', 'S/B 1032W*1776 KA230/CA125/KA230 C 1:18', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-098-bs', 'S/B 1260W*1824L KA125/CA125*3/KA125 BC 1:24', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-101-bs', 'S/B 956W*1663L KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-102-bs', 'S/B 1640W*1640L  KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-103-bs', 'S/B 1640W*1640L  KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-104-bs', 'S/B 1680W*1640L  KA125/CA125*3/KA125  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-105-bs', 'S/B 1640W*1640L  KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-106-1-bs', 'S/B 1680W*1640L KA125/CA125*3/KA125 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-107-bs', 'S/B 900W*2052L KA230/CA125*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-108-bs', 'S/B 900W*2052L KA230/CA125*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-109-bs', 'S/B 1120W*1164L KA230/CA125*3/KA230  BCF 2:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-110-bs', 'S/B 1405W*1256L KA230/CA125*3/KA230  BCF 1 :1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-111-bs', 'S/B 1302W*2221L KA230/CA125*3/KA230 BC 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-119-bs', 'S/B 1350W*1164L KA230/CA125/KA230 C 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-120-bs', ' S/B 1556W*1164L KA230/CA125/KA230 C 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-121-bs', 'S/B 976W*1100L KA230/CA125/KA230 C 1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-122-bs', 'S/B 976W*1240L KA230/CA125/KA230 C 1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-123-bs', 'S/B 976W*1240L KA230/CA125/KA230 C 1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-124-bs', 'S/B 1356W*1004L KA230/CA125/KA230 C 1:2/1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-125-bs', 'S/B 1356W*1004L KA230/CA125/KA230 C 1:2/1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-128-bs', 'S/B 1304W*1176L KA230/CA125/KA230 C 1:12', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-138-bs', 'S/B 1302W*2221L KA230/CA125*3/KA230  BCF 1 :2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-143-1-bs', 'S/B  1534W*2247L KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-144-bs', 'S/B  812W*1040L KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-145-bs', 'S/B  890W*1208L KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-148-1-bs', 'S/B  1534W*2247L KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-149-bs', 'S/B  876W*1208L  KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-150-bs', 'S/B  676W*1040L  KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-153-1-bs', 'S/B  1534W*2247L KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-154-bs', 'S/B  876W*1208L  KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-155-bs', 'S/B  676W*1040L  KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-158-bs', 'S/B 724W*1040L KA185/CA125/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-159-1-bs', 'S/B  1534W*2247L KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-160-bs', 'S/B  812W*1040L KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-161-bs', 'S/B  890W*1208L KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-170-bs', 'S/B 1258W*780L KA230/CA125*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-171-bs', 'S/B 1258W*780L KA230/CA125*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-172-bs', 'S/B 1258W*780L KA230/CA125*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-177-bs', 'S/B 697W*1084L KA230/CA125/KA230  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-178-bs', 'S/B 1040W*968L KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-179-bs', 'S/B 816W*968LL KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-180-bs', 'S/B 840W*1176L KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHS-011-bs', 'S/B 1249W*1099L KA230/CA185*3/KA230 BC/F 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHS-012-bs', 'S/B 1249W*1099L KA230/CA185*3/KA230 BC/F 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHS-019-bs', 'S/B 1249W*1099L  KA230/CA185*3/KA230 BC/F 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHS-025-bs', 'S/B 1249W*1099L KA230/CA185*3/KA230 BC/F 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHS-028-bs', 'S/B 1140W*922L KA230/CA125*3/KA230 BC/F 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHS-029-bs', 'S/B 1140W*1704L KA230/CA125*3/KA230 BC/F 1:10', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHS-030-bs', 'S/B 1140W*1009L  KA230/CA125*3/KA230 BC/F 1:5', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHS-032-bs', 'S/B 1140W*943L KA230/CA125*3/KA230 BC/F 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHS-033-bs', 'S/B 1140W*1704L KA230/CA125*3/KA230 BC/F 1:8', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHS-034-bs', 'S/B 1140W*1009L KA230/CA125*3/KA230 BC/F 1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNSB-007-bs', 'S/B 1247W*1396L KA230/CA125*3/KA230 BC 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNSB-008-bs', 'S/B 1318W*1166L KA230/CA125/KA230 CF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNSB-009-bs', 'S/B 1318W*1166L KA230/CA125/KA230 CF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNSB-010-bs', 'S/B 1385W*1405L KA230/CA185*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNSB-012(FOR SALE)-bs', 'S/B 1000W*1568L KA230/CA185*3/KA230 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNSB-012-1-bs', 'S/B 980W*1539L KA230/CA185*3/KA230 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNSB-014-bs', 'S/B 1385W*1405L KA230/CA185*3/KA230 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNSB-016-bs', 'S/B 1000W*1568L KA230/CA185*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNSB-016(FOR SALE)-bs', 'S/B 1000W*1568L KA230/CA185*3/KA230 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNSB-016-1-bs', 'S/B 980W*1548L KA230/CA185*3/KA230 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNSB-036-bs', 'S/B 1325W*1325L KA185/CA125*3/KA185 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNSB-037-bs', 'S/B 1288W*1215L KA185/CA125*3/KA185 BCF 1:12', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNSB-038-bs', 'S/B 1288W*1215L KA185/CA125*3/KA185 BCF 1:12', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNSB-043-bs', 'S/B 1110W*834L KA125/CA125/KA125 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNSB-044-bs', 'S/B 1110W*928L KA125/CA125/KA125 CF 1:60', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNSB-045-bs', 'S/B 1018W*1301L KA185/CA125/KA185 CF 1:60', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNSB-050-bs', 'S/B 1114W*1090L KA185/CA125*3/KA185 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNSB-051-bs', 'S/B 1132W*1140L KA185/CA125*3/KA185 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNSK-001-bs', 'S/B 1136W-1069L KA230/CA125*3/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RPRV-001/1-bs', 'S/B 1120W*1290L KA230/CA125*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RPRV-002/2-bs', 'S/B 1120W*1290L KA230/CA125*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RPRV-005-bs', 'S/B 1320W*1365L KL205/CA125*3/KL205 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RPRV-006-bs', 'S/B 1320W*1365L KL205/CA125*3/KL205 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSAN-003-bs', 'S/B 1240W*1092L KA185/CA125*3/KA185 BC 1;2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSAN-007-bs', 'S/B 1240W*1092L KA185/CA125*3/KA185 BC 1;2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSAN-009-bs', 'S/B 876W*1092L  KA185/CA125*3/KA185 BC 1;1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSAN-010-bs', 'S/B 876W*1092L  KA185/CA125*3/KA185 BC 1;1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSAN-012-bs', 'S/B 1092W*1092L  KA185/CA125*3/KA185 BC 1;1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSAN-013-bs', 'S/B 1092W*1092L  KA185/CA125*3/KA185 BC 1;1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSCR-001-bs', 'S/B 1280W*1016L KA185/CA125*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSCR-002-bs', 'S/B 1092W*1016L KA185/CA125*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSCR-003-bs', 'S/B 1280W*1016L KA185/CA125*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSCR-004-bs', 'S/B 1092W*1016L KA185/CA125*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSCR-005-bs', 'S/B 1280W*1016L KA185/CA125*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSCR-006-bs', 'S/B 1092W*1252L KA185/CA125*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSCR-007-bs', 'S/B 1092W*1252L KA185/CA125*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSCR-008-bs', 'S/B 1092W*1005L KA185/CA125*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSCR-009-bs', 'S/B 1092W*1005L KA185/CA125*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSEW-001-bs', 'S/B 1160W*1160L KL205/CA185/KL205 BF 16:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSEW-002-bs', 'S/B 1160W*1160L KL205/CA185/KL205 BF 16:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSEW-004-bs', 'S/B 1260W*1260L KL205/CA185/KL205 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSEW-006-bs', 'S/B 1008W*1008L CA125/CA125/CA125 CF 16:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSEW-007-bs', 'S/B 1147W*1177L KA125/CA125/KA125 CF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSEW-008-1-bs', 'S/B 1073W*1279L KA150/CA125/KA150 CF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSEW-011-bs', 'S/B 952W*1269L KA150/CA125/KA150 CF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSGB-025-1-bs', 'S/B  1049W*984L KA185/CA125*3/KA185 BCF 1: 0.5', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSGB-026-1-bs', 'S/B  840W*1040L KA125/CA125/KA125 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSGB-032-1-bs', 'S/B  1049W*984L KA185/CA125*3/KA185 BCF 1: 0.5', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSGB-033-1-bs', 'S/B  840W*1040L KA125/CA125/KA125 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSGB-034-1-bs', 'S/B 1049W*1309L KA185/CA125*3/KA185 BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSGB-035-bs', 'S/B  718W*880L KA125/CA125/KA125 CF 1: 1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSGB-042-1-bs', 'S/B 1049W*1309L KA185/CA125*3/KA185 BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSGB-043-bs', 'S/B  718W*880L KA125/CA125/KA125 CF 1: 1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSGB-051-bs', 'S/B 1410W*1565L KA230/CA125*3/KA230 BCF 1: 2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSGB-112-bs', 'S/B 1465W*1186L  KL205/CA125*3/KL205 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSGB-116-bs', 'S/B 945W*1234L  KL205/CA125*3/KL205 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSGB-117 CANCEL-bs', 'S/B 956W*1140L  KA125/CA125*3/KA125  BCF 1:20', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSGB-118-bs', 'S/B 1465W*1186L  KL205/CA125*3/KL205 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSGB-119-bs', 'S/B 1300W*1200L  KL205/CA125*3/KL205 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSGB-120-bs', 'S/B 1300W*1200L  KL205/CA125*3/KL205 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSMT-001-1-bs', 'S/B 1448W*2093L KA185/CA125/KA185  CF  1 : 2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSMT-003-bs', 'S/B 1050W*1050L KA125/CA125*3/KA125 BCF 1 : 4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSMT-005-bs', 'S/B 1050W*1050L KA125/CA125*3/KA125 BCF 1 : 4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSMT-006-bs', 'S/B 1080W*1335L KA125/CA125/KA125  CF  1:9', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSMT-007-bs', 'S/B 1080W*1050L KA125/CA125/KA125  CF  1:6', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSMT-008-bs', 'S/B 1080W*1050L KA125/CA125/KA125  CF  1:6', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSMT-009-bs', 'S/B 1080W*1060L KA125/CA125/KA125  CF  1:6', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSMT-010-1-bs', 'S/B 1448W*2093L KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSMT-014-bs', 'S/B 1020W*1338L KA125/CA125/KA125  CF  1:9', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSMT-015-bs', 'S/B 1020W*1050L  KA125/CA125/KA125  CF  1:6', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSMT-016-bs', 'S/B 1020W*1050L  KA125/CA125/KA125  CF  1:6', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSMT-017-bs', 'S/B 1020W*1060L  KA125/CA125/KA125  CF  1:6', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSMT-018-bs', 'S/B 1020W*1308L  KA125/CA125/KA125  CF  1:9', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNC-001-bs', 'S/B 1170W*2178L KA185/CA125*3/KA185 BC 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNC-001/1-bs', 'S/B 1170W*2178L KA150/CA125*3/KA150 BC 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNC-005-bs', 'S/B 1332W*1264L KA185/CA125*3/KA185 BC 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNC-005/1-bs', 'S/B 1332W*1264L  KA150/CA125*3/KA150 BC 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNC-007-bs', 'S/B 1332W*1264L KA185/CA125*3/KA185 BC 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNC-007/1-bs', 'S/B 1332W*1264L   KA150/CA125*3/KA150 BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNC-013/1-bs', 'S/B 1056W*960L  KA150/CA125*3/KA150 BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNC-013-1-bs', 'S/B 1045W*1120L KA185/CA125*3/KA185 BC 1:16', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNC-014-bs', 'S/B 1320W*1120L KA185/CA125*3/KA185 BC 1:12', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNC-014/1-bs', 'S/B 1320W*1120L   KA150/CA125*3/KA150 BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNC-014-1-bs', 'S/B 1045W*1120L KA185/CA125*3/KA185 BC 1:16', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNC-015-bs', 'S/B 1170W*1506L KA185/CA125*3/KA185 BC 1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNC-015/1-bs', 'S/B 580W*748L   KA150/CA125*3/KA150 BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNH-018-SUDA-bs', 'SHEET BOARD 1640W*706L  KA125/CS110*3/KA125  BC/F  MODEL: V3,V4 PTT-A2 / A3 (400W*334L)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNH-019-SUDA-bs', 'SHEET BOARD 1640W*706L  KA125/CS110*3/KA125  BC/F  MODEL: V3,V4 PTT-A2 / A3 (400W*334L)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNH-020--SUDA-bs', 'SHEET BOARD 1640W*706L  KA125/CS110/KA125  C/F   MODEL:COIL V3,V4 COVER-A', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNH-021-SUDA-bs', 'SHEET BOARD 1036W*1100L  KA125/CS110/KA125  C/F  1 : 2 MODEL:COIL V3,V4 COVER-B', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNH-022-SUDA-bs', 'SHEET BOARD 910W*1140L  KA125/CS110*3/KA125  BC/F  1 : 2 MODEL:COIL V3,V4 PTT-C1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNH-023-SUDA-bs', 'SHEET BOARD 910W*1186L  KA125/CS110*3/KA125  BC/F  1 : 2 MODEL:COIL V3,V4 PTT-C2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNH-024-SUDA-bs', 'SHEET BOARD 910W*672L  KA125/CS110*3/KA125  BC/F  MODEL:COIL V3,V4 CORNER-A', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNH-025-SUDA-bs', 'SHEET BOARD 1664W*832L  KA125/CS110*3/KA125  BC/F   MODEL:COIL V3,V4 STOPPER', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSSL-001-bs', 'S/B 1600W*1600L KA185/CA125*3/KA185 BCF 1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSWA-001-bs', 'S/B 1377W*1406L KA230/CA125*3/KA230 BCF 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSWA-004-bs', 'S/B 1132W*1260L KA230/CA125*3/KA230 BCF 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSWA-005-bs', 'S/B 1230W*1098L  KA230/CA125*3/KA230 BCF 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSWA-006-bs', 'S/B 1230W*1098L  KA230/CA125*3/KA230 BCF 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSWA-007-bs', 'S/B 1132W*1260L KA230/CA125*3/KA230 BCF 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSWA-008-bs', 'S/B 1293W*1098L KA230/CA125*3/KA230 BCF 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSWA-009-bs', 'S/B 1293W*1098L KA230/CA125*3/KA230 BCF 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSWA-010-bs', 'S/B 1377W*1406L KA230/CA125*3/KA230 BCF 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSWA-016-bs', 'S/B 936W*1231L KL205/CA125*3/KL205 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSWA-017-bs', 'S/B 936W*1231L KL205/CA125*3/KL205 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTHS-001 CANCEL-bs', 'S/B  1000W*2111L KA230/CA125*3/KA230  BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTHS-001-1-bs', 'S/B 1000W*2139L  KA230/CA125*3/KA230 BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTHS-002-bs', 'S/B  1000W*2139L KA230/CA125*3/KA230  BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTHS-003-bs', 'S/B 1505W*1501L KA230/CA125*3/KA230  BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTSH-035-bs', 'S/B  1436W*2091L KA230/CA125*3/KA230 BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTSL-001-bs', 'S/B 1274W*1330L KA185/3M/KA185 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTSL-002-bs', 'S/B 1282W*1040L KA230/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTSL-003-bs', 'S/B 1314W*1137L KA230/CA125/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTSL-004-bs', 'S/B 1274W*1330L KA185/3M/KA185 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTSL-006-bs', 'S/B 1126W*1060L KA230/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTSL-007-bs', 'S/B 1104W*1051L KA230/3M/230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTSL-008-bs', 'S/B 1040W*2207L  KA230/CA125*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTSL-009-bs', 'S/B 1064W*1060L KA230/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTSL-012-bs', 'S/B 1164W*1660L KA185/3M/KA185 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTSL-013-bs', 'S/B 1166W*1126L KA230/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTSL-019 CANCELL-bs', 'S/B 1057W*1401L  KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTSL-019-1-bs', 'S/B 1105W*1421L  KA185/CA125/KA185  CF 1:3 (W44"*L56")', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTSL-021-bs', 'S/B  968W*908L KA185/CA125/KA185  BF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTTP-001-1-bs', 'S/B 1532W*1220L KA230/CA125/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTTP-003-bs', 'S/B 1007W*990W  KA230/CA125/KA230 CF  1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTTP-004-bs', 'S/B 1007W*990W  KA230/CA125/KA230 CF  1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTTP-005-bs', 'S/B  973W*753L KA230/CA125/KA230 CF  1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTTP-006-bs', 'S/B  833W*753L KA230/CA125/KA230 CF  1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTTP-007-bs', 'S/B  996W*1410L KA230/CA125/KA230 CF  1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTTP-009-1-bs', 'S/B  1178W*950L  KA230/CA125/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTTP-010-1-bs', 'S/B  1178W*950L  KA230/CA125/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTTP-011-bs', 'S/B  1205W*908L KA230/CA125/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTTP-012-bs', 'S/B  934W*908L   KA230/CA125/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RYRZ-003-bs', 'S/B  900W*1100L KA125/CA125*3/KA125  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RYRZ-004-bs', 'S/B 1400W*1100L  KA125/CA125*3/KA125  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RYRZ-005-bs', 'S/B 1820W*1100L  KA125/CA125*3/KA125  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SBSM-009-bs', 'S/B 844W*1294L KA125/CA125/KA125  CF (W68"*L51")', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SBSM-010-bs', 'S/B 1490W*1060L KA125/CA125/KA125  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SBSM-015-bs', 'S/B 1028W*1817L  KA125/CA125*3/KA125  BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SBSM-016-bs', 'S/B 1170W*1112L KA150/CA125/KA150  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SCR-004-bs', 'S/B 1574W*1539L  KA230/CA125/KA230  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SCR-007-bs', 'S/B 1526W*1389L  KA230/CA125*3/KA230  BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SCR-009-bs', 'S/B 1526W*2279L  KA230/CA125*3/KA230  BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SE-002-bs', 'S/B  1154W*1116L  KA150/CA125/KA150 CF 1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SIAM-009-bs', 'S/B  1536W*1182L  KL205/CA125*3/KL205 BCF 1:6', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SIAM-010-bs', 'S/B  844W*844L  KL205/CA125*3/KL205 BCF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SIAM-011-bs', 'S/B  952W*1458L  KL205/CA125*3/KL205 BCF (W38"*L57" 7/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SIAM-012-bs', ' S/B 1056W*1076L KL205/CA125*3/KL205 BC (W44"*L42" 3/8)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SIAM-020-bs', 'S/B  768W*1182L KL205/CA125/KL205 CF 3:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SIAM-021-bs', 'S/B  1266W*1266L KL205/CA125/KL205 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SIAM-022-bs', 'S/B  952W*1458L  KL205/CA125/KL205 CF 1:6 (W38"*L57" 7/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SIAM-023-bs', 'S/B  1056W*1076L KL205/CA125/KL205 CF 2:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SLEEVE-TOYODA-bs', 'S/B 1358W*2307L  KA185/CA125*3/KA185 BCF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-STD-006/1-bs', 'S/B 1038W*949L KA230/CA125/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-STD-006/1-1-bs', 'S/B 1038W*1875L KA230/CA125/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-STD-011-bs', 'S/B 722W*724L KA125/CA125/KA125  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-UNS001-bs', 'S/B 1072W*1015L KL205/CA125/KL205 CF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-UNS003-bs', 'S/B 1594W*1244L KL205/CA125/KL205 CF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-UNS007-bs', 'S/B 1304W*1105L KL205/CA125*3/KL205 BCF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-UNS007/COVER-bs', 'S/B 1164W*1200L KL205/CA125*3/KL205 BCF 1:6', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-UNS007/PTT-A-bs', 'S/B 1497W*1332L KL205/CA125*3/KL205 BCF 1:6', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-UNS007/PTT-B-bs', 'S/B 1497W*1332L KL205/CA125*3/KL205 BCF 1:6', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-UNS007/PTT-W-bs', 'S/B 1200W*1164L KL205/CA125*3/KL205 BCF 1:21', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-UNS009-bs', 'S/B 1174W*1193L KL205/CA125/KL205 CF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-UNS010-bs', 'S/B 1497W*2158L KL205/CA125/KL205 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-UNS010-PTT-A-bs', 'S/B 1295W*1470L KL205/CA125/KL205 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-UNS010-PTT-B-bs', 'S/B 1383W*1314L KL205/CA125/KL205 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SWA-007-bs', 'ZERUST  BAG  100W* 150L * 0.08 MM 1:40 (Pack 500)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SWA-010-1-bs', 'AQUASORBIT 150 GM (100 Pcs/Box)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SWP-001-bs', 'REIDUN-KUN FOR AIR CONDITIONER 180*390 MM.(FCU008,009)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TAURUS (AD3)-bs', 'INNER  TAURUS  (AD3) 428AD X 108 L  ( 15T- 41T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TAURUS-AD3-bs', 'INNER  TAURUS  (AD3) 428AD X 108 L  ( 15T-41T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TBM-001-bs', 'SLEEVE SIZE (ID) : 750W*1095L*690H MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TBM-003-bs', 'SLEEVE SIZE (ID) : 750W*1095L*345H MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TCM-009-bs', '2237768-1  DESICCANT (AQUASORBIT 20GM,N/W (600 PCS/BOX))', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TCM-011-bs', 'SHEET BOARD 1000W*1200L mm. (KA230/3CA125/KA230 BC/F) (Double Wall 5 Layer)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TCM-013-bs', 'OVERPACK CARTON BODY 769*1180*1010 mm', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TCM-016-bs', 'HONEYCOMB SHEET BOARD SIZE 800W*1200L*30 MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TCM-017-bs', 'HONEYCOMB SHEET BOARD SIZE 1000W*1200L*30 MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TEST-HCT01-bs', 'TEST COST FROM THAI  PACKAGING CENTER   11  ITEMS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TEST-HCT02-bs', 'CHARGE FROM MARINE DEPT', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TEST-HCT03-bs', 'PACKAGE FOR TEST : 11 SET/MODEL', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TEST-HCT04-bs', 'TRANSPORTATION & GASOLINE (Delivery Package for Test (11 Set) To TPC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TEST-HCT05-bs', 'TRANSPORTATION & GASOLINE (Receive Document & Package for test to NK-AXIS)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TEST-HCT06-bs', 'TRANSPORTATION & GASOLINE (Sent Document about for UN-CODE to marine Department)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TEST-HCT07-bs', 'TRANSPORTATION & GASOLINE (Receive Document for UN-CODE form marine Department)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TEST-HCT08-bs', 'Service charge', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TESTHONDA-11-bs', 'Package  For  Test     ITEM    PCS / MODEL', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TESTHONDA-5-bs', 'Transportation &Gasoline', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TESTHONDA-9-bs', 'TEST COST FROM THAI  PACKAGING CENTER     ITEMS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'THERMAL BARRIER-bs', 'THERMAL BARRIER COATING', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'THF-001-bs', 'PAPER CORE SIZE : 2.3" (58MM)x 2 MM x 1870 MM (FASTENAL)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'THF-002-bs', 'PAPER CORE SIZE : 2.3" (58MM)x 2 MM x 3710 MM (FASTENAL)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKI-001-bs', '(M02 M01-W2419) HEAT SHIELD SHEET CONTROL PANEL 1000*4000/DC37,20,21,23,24,32 SHEET WIDTH IS MAX 1,000 MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKI-002-bs', '(M02 M01-W2418) HEAT SHIELD SHEET : ELECTRIC FURNACE (AL28) 1.ENERGY REDUCION 2.WORK ENVIRONMENT IMPROVEMENT 3.CO2 REDUCTION', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKI-003-bs', '(O01 C01-AP10) HEAT SHIELD SHEET : CONTROL PANEL SP-HTR W1M*L5M=5SQ.M', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKI-004-bs', '(M02 M01-W2494) INSTALLATION HEAT SHIELD (SP-HTR) CENTER FURNACE.4 (16SQ.M)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKI-005-bs', '(M02 M01-W2694) INSTALLATION HEAT SHIELD (SP-HTR) CENTER FURNACE.4 (18SQ.M)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKI-006-bs', '(M02 M01-W2881) INSTALLATION HEAT SHEILD FOR HOLD FURNANCE No.06', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-001-bs', 'Zerust Ferrous Gusset (24cm) 56 cm*80cm*0.08T mm.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-002-bs', 'Zerust Ferrous Bag : 25cm*50cm*0.08T', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-004-1 Cancel-bs', 'INNER SLEEVE : 390W*490L*234H MM.(KA150/CA125/KA150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-004-2-bs', 'INNER SLEEVE : 385W*510L*234H MM.(KA150/CA125/KA150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-007-bs', 'TOP PAD : 705W*750L MM.(KA150/3CA125/KA150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-011-bs', 'ECO DRY BEAD SIZE 10 G (Non woven)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-014-bs', 'LDPE Bag 224CM x 196CM x 00.10T MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-015-bs', 'PETBAG SPEC OPP20/MPET12/LL65', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-044-bs', 'BOX OD : 240Wx340Lx140H KA125/CA125/KA125 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-051-bs', 'Carton Box Size : 325W*733L*205H  Model RT87/92,EJ83/88 KA185/3CA125/KA185 BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-052-bs', 'Partition R Size : 694W*320L  Model RT87/92,EJ83/88 KA185/3CA125/KA185 BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-053-bs', 'Partition L Size : 678W*320L  Model RT87/92,EJ83/88 KA185/3CA125/KA185 BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-054-bs', 'BOX OD : 270W*285L*210H MM. KA125/CA125/KA125 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-055-bs', 'CARTON BOX OD : 480W*560L*250H MM. KA230/CA125/KA230 C/F 1:1 577B (BODY)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-056-bs', 'PARTITION-A (OD) : 110W*547L MM. KA230/CA125/KA230 C/F 1:6 577B (BODY)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-057-bs', 'PARTITION-B (OD) : 110W*467L MM. KA230/CA125/KA230 C/F 1:6 577B (BODY)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-058-bs', 'PAD (OD) : 470W*547L MM. KA230/CA125/KA230 C/F 1:2 577B (BODY)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-062-bs', 'CARTON BOX OD : 480W*560L*250H MM. KA230/CA125/KA230 C/F 1:1 577B (CAP)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-063-bs', 'PARTITION-A (OD) : 70W*547L MM. KA230/CA125/KA230 C/F 1:9 577B (CAP)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-064-bs', 'PARTITION-B (OD) : 70W*470L MM. KA230/CA125/KA230 C/F  1:12 577B (CAP)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-065-bs', 'PAD (OD) : 470W*547L MM. KA230/CA125/KA230 C/F 1:3 577B (CAP)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TMX HDS-42T-bs', 'INNER TMX  428HDS  X 110 L ( 14T-42T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TMX155/CS90-42T-bs', 'INNER TMX155/CS90 428HDS  X 110 L ( 14T-42T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TMX155/CS90-45T-bs', 'INNER TMX155/CS90  428HDS  X 120 L ( 15T-45T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TMX-HDS-120-bs', 'INNER TMX  428HDS  X 120 L ( 15T-45T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TRT-001-bs', 'HEAT SHIELD SHEET for ruducing power consumption for air conditioners', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TSH-007-bs', '71003405 SIDE PANEL-A SIZE : 669W*916L (1:2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TSH-008-bs', '71003450 ZERUST BAG  Size : 1200x1200x0.06T (1:1)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TSH-010 Cancel-bs', 'SIDE PANEL-B STEP (RH,LH) (990/992)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TSH-012-bs', 'SHEET BORAD  SIZE 670Wx920L MM. (KA125/3CA125/KA125 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TSH-014-bs', 'ZERUST BAG STEP (RH,LH) (990/992)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TSH-020-bs', 'ค่าบริการจัดส่งกล่องไป บริษัทเหรียญทอง Model:EB3C-5F085-AA', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TSH-023-bs', '71003454 BOTTOM PLATE Size 1128W*917L MM. (1:1)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TSL-013-bs', 'CARTON BOX 800W*850L*300H MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TYG-001-bs', 'PI002-00073-64102  BOX UNS003 ID 290*295*166H (2SV)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'UACJ-001-bs', 'Poly sheet  Size  0.07*3600*5200 mm พับละ 1 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'UACJ-003-bs', 'Polyester Sheet   Size 0.10 * 2300 * 2300 mm พับละ 1 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'UACJ-004-bs', 'Polyester Sheet   Size 0.22 * 2300 * 2300 mm พับละ 1 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'UACJ-010/1-bs', 'FELT 70mmW*3000mmL*5Tmm.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'UACJ-013-bs', 'Clear adhesive tape  (50W x  50m)   Size  50 W x 50m)  (60 Roll / Set)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'UACJ-014-bs', 'Cloth  tape  (50Wx 30 Yard)  (27 m)  BLUE TAPE ผ้า', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'UACJ-016-bs', 'Drying agent  ( ECO DRY 500 G. NON WOVEN 25 PCS/BOX )', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'UACJ-017-bs', 'CLAER OPP TAPE 90 Micon 75Wx50M (30 Roll/Box)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'UACJ-017-1-bs', 'CLAER OPP TAPE 90 Micon 72Wx50M (56 Roll/Box)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'UACJ-020-bs', 'Polysheet  Size  0.10  X  1600  X 1600', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'UACJ-021-bs', 'Poly  Tube  Size  0.07 x 2000 x 3200  mm', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'UACJ-022-bs', 'Plastic Bag   Size  0.07 x 2000 x 2000  mm พับละ 1 ชิ้น PACK 20 PCS/PACK', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'UACJ-023-bs', 'Poly  Tube  Size  0.07 x 2400 x 3200 mm', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'UACJ-025-bs', 'POLY  BAG  SIZE 0.07T*2600MM*2600MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'UACJ-026-bs', 'Poly Sheet Size 0.07 * 3800 * 5800 mm.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'UACJ-027-bs', 'POLY ROLL SIZE 0.07T*2000W (MM)*200M', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'UACJ-028-bs', 'POLY ROLL (LDPE) SIZE 0.07T*2500W (MM)*150M', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'UC2N-38813 (Cancel)-bs', 'Carton  Box  For  Part Cover  Under  UC2N-38-813  588W*1207L', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'UNS001-bs', 'UN CARTON ID 185*285*110H  KL205/CA125/KL205 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'UNS003-bs', '( 4W ) UN CARTON 4G/Z1.7/S  ID  290*295*166H KL205/CA125/KL205 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'UNS007 Cancel-bs', '( 4W) CARTON BOX  ID 385W*663L*230H 1:1 , PTT-A 489W*656L 1:1 , PTT-B 459W*656L 1:1 , PTT-W 390W*155L 1:2 , COVER 572W*390L 1:1  KL205/CA125*3/KL205 BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'UNS008-bs', '(4W) UN CARTON 4G/Z7.7/S  ID  638*920*223H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'UNS009-bs', '( 4W )  UN CARTON 4G/Z2.6/S/14  ID 185*375*120H  KL205/CA125/KL205 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'UNS010 cancel-bs', '(4W)  UN 4G /Z7.0/S 655*1480*102H(1).BOX745W*2158L 1:1 (2.)PARTITION-A 644W*1470L 1:2 (3).PARTITION-B 1365W*70L 1:3 KL205/M/KL205 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'VEGA ZR-AD-bs', 'INNER VEGA ZR 420AD X 108 L (15T-40T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'VIVA FI (HDS)-102-bs', 'INNER VIVA FI (HDS) 428HDS X 102 L ( 14T-37T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'VIVA-AD3-bs', 'INNER VIVA (AD3) 428AD X 100 L (14T- 36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE (AD3)-bs', 'INNER WAVE (AD3) 428AD X 102 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE (HDS)-bs', 'INNER  WAVE (HDS ) 428HDS  X  102 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE (HDS) 102-bs', 'INNER WAVE (HDS) 428HDS X 102 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE 100-AD-bs', 'INNER WAVE 100 428AD X 100 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE 110i-102-AD3-bs', 'INNER  WAVE 110i  420AD3  X 104 L  ( 14T-37T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE 125 -(36T) AD-bs', 'INNER WAVE 125  428AD  X 108 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE 125 -104 AD3-bs', 'INNER WAVE 125  420AD3 X 104 L (14T-35T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE 125 -108 (34T) AD-bs', 'INNER WAVE 125  428AD  X 108 L (14T-34T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE 125 -108 AD-bs', 'INNER WAVE 125  428AD  X 108 L (14T-33T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE 125 420AD-bs', 'INNER WAVE 125  420AD X 110 L (14T-34T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE 125 420AD (36T)-bs', 'INNER WAVE 125  420AD X 110 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE 125-108  AD3-bs', 'INNER WAVE 125 428AD3  X 108 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE 125i 420 AD3-bs', 'INNER WAVE 125i  420AD3  X 108 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE 125i-108 35T-bs', 'INNER WAVE 125i 420AD3 X 108 L (14T-35T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE 125S-106-bs', 'INNER WAVE 125S 428AD3  X  106 L  ( 14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE RS (CN) (AD3)-bs', 'INNER  WAVE RS (CN) (AD3)  428AD X 106 L ( 14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE RS (CN) (HDS)-bs', 'INNER  WAVE RS (CN) (HDS) 428HDS X 106 L (14T - 36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE RS (CN) (HDS)-106-bs', 'INNER  WAVE RS (CN) (HDS) 428HDS X 106 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE RS (JP) -HDS-bs', 'WAVE RS (JP)  (HDS) 428HDS X 106L ( 14T/36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE RS(JP) (AD3)-bs', 'INNER  WAVE RS (JP)  (AD3) 428AD X 106 L  ( 14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE RS(JP)-AD3-bs', 'INNER WAVE RS(JP)  (AD3) 428AD X 106L( 14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE RS(JP)-HDS-bs', 'INNER WAVE RS (JP)(HDS) 428HDS X 106 L( 14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE S,X,Z  98L-AD3-bs', 'INNER  WAVE S,X,Z 428AD3 X 98 L ( 14T-35T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE S,X,Z AD3-35T-bs', 'INNER  WAVE S,X,Z 428AD3 X 106 L ( 14T-35T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE S,X,Z HDS-bs', 'INNER  WAVE S,X,Z 428HDS X 106 L ( 14T-35T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE S,X,Z HDS 100 L-bs', 'INNER  WAVE S,X,Z 428HDS X 100 L ( 14T-35T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE S,X,Z HDS 98 L-bs', 'INNER  WAVE S,X,Z 428HDS X 98 L ( 14T-35T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE100R HDS-34T-bs', 'INNER WAVE100R  428HDS X 110 L (14T-34T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE100R HDS-36T-bs', 'INNER WAVE100R  428HDS X 110 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE125  428AD3-bs', 'INNER WAVE 125  428AD3  X 104 L (14T-35T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE125  428AD36T-bs', 'INNER WAVE 125  428AD3  X 104 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE125-AD3-bs', 'INNER WAVE 125  428AD3 X 106 L (14T-35T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE125-AD3-36T-bs', 'INNER WAVE 125  428AD3 X 106 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE125-HDS-35T-bs', 'INNER WAVE 125 428HDS X 106 L (14T-35T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVE125-HDS-36T-bs', 'INNER WAVE 125  428HDS X 106 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVERS (CN) -AD3-bs', 'INNER   WAVE RS (CN) (AD3)   428 AD X 106L    ( 14T/36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAVERS JP(HDS)-bs', 'INNER  WAVE RS (JP) (HDS)  428HDS X 106L  (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WIN-428AD-bs', 'INNER  WIN 428AD  X 110 L (14T-40T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WIN-HDS-1-bs', 'INNER WIN 428HDS X 110 L (14T-40T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WP082010200100H-bs', 'WOODEN PALLET 820*1020*100H WITH FUMIGATE', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WP09801140123H-bs', 'WOODEN PALLET 980W*1140L*123H  WITH HEAT TRETMENT', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'XRM110 HDS-34T-bs', 'INNER XRM110  428HDS X 110 L (14T-34T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'XRM110 HDS-36T-bs', 'INNER XRM110  428HDS X 110 L (14T-36T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'Y15-ZR 418AD (14T-41T)-bs', 'INNER Y15-ZR 428AD X 122 L (14T- 41T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'Y15-ZR 428AD (14T-38T)-bs', 'INNER Y15-ZR 428AD X 122 L (14T- 38T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'Y15-ZR 428AD (14T-39T)-bs', 'INNER Y15-ZR 428AD X 122 L (14T- 39T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'Y15-ZR 428AD (14T-40T)-bs', 'INNER Y15-ZR 428AD X 122 L (14T- 40T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'Y15-ZR 428AD (14T-42T)-bs', 'INNER Y15-ZR 428AD X 122 L (14T- 42T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'Y15-ZR HDS (14T-38T)-bs', 'INNER Y15-ZR 428HDS  X 122 L (14T- 38T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'Y15-ZR HDS(14T-39T)-bs', 'INNER Y15ZR 428HDS  X 122 L (14T- 39T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'Y15-ZR HDS(14T-40T)-bs', 'INNER Y15ZR 428HDS  X 122 L (14T- 40T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'Y15-ZR HDS(14T-41T)-bs', 'INNER Y15-ZR 428HDS  X 122 L (14T- 41T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'Y15-ZR HDS(14T-42T)-bs', 'INNER Y15ZR 428HDS  X 122 L (14T- 42T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YB100-AD-bs', 'INNER YB100  420AD X 100 L  (15T- 37T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YD100-AD-bs', 'INNER YD100 420AD X 102 L (14T-37T)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YFT-001-bs', 'BOX OD : 265W*435L*83H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YOO-001-bs', 'Carton Box Size 630W*1370L*330H  (  KA230/3CA125/KA230   BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YOO-003-bs', 'Carton Box OD: 593W*980L*630H KA230/KA230  C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YSTK-006-bs', '09008213 : HEAT SHIELD SHEET TYPE SP-HTR Max Temperature 130'' SIZE : 1M x 2M.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YSTK-007-bs', '09008213 : HEAT TREATMENT FURNACE 1606W*930L*1170LH', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YSTK-008-bs', '09002160 : Inner wall SP-AL25 10.9 M2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ZERUST4055-DA-bs', 'Zerust VCI BAG ALL PARTS 40*55*0.10   (Pack EDL)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ZZB0299-bs', 'WOOD PALLET : 861Wx1100Lx120H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040005-bs', 'PSB - 8 - 97917 - 904-0  CARTON BOX (251W*636L) KA185/CA125/KA185 3 ชั้นลอน C', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040006-bs', 'PBB - 8 - 97917 - 904-0 CARTON BOX (381W*1290L) KA185/CA125/KA185  3ชั้นลอน C', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040007-bs', 'PSB - 8 - 97917 - 905-0 (BOX 291W*636L KA185/KA150 3ชั้น C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040008-bs', 'PBB - 8 - 97917 - 905-0 (BOX 426W*1290L ka185/ka150 3ชั้น C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040009-bs', 'PBB- 8 - 97206 - 617 - T(422W*1132L) KA185/CA125/KA185 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040010-bs', 'PBB- 8 - 97206 - 618 - T(478W*1252L)KI185/KI150 B/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040011-bs', 'PBB- 8 - 97206 - 619 - T(478W*1252L) KI185/CA125/KI185 B/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040016-bs', 'PSB - 5 - 87870028 - T CARTON BOX (280W*929L) KA185/KA150 3 ชั้นลอน C', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040017-bs', 'PBB - 5 - 87870028 - T CARTON BOX (426W*1989L) KA185/CA125/KA185 CF SCREEN RED', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040019-bs', 'PBB- 8 - 98079104 - T(468W*1112L)KI185/CA125/KI185 B/F NEW SCREEN "RED COLOR"', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040036-bs', 'PSB-1-8761-6014-0  263W*629L  KA185/CA125/KA185 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040037-bs', 'PBB-1-8761-6014-0  401W*1283L  KA150/CA125/KA150 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040038-bs', 'PSB-1-8761-6015-0 263W x 629L  KA185/CA125/KA185  C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040039-bs', 'PBB-1-8761-6015-0 401W X 1283L KA150/CA125/KA150  C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040040-bs', 'PSB-1-8761-6016-0  243W*623L  KA185/CA125/KA185 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040041-bs', 'PBB-1-8761-6016-0 381W * 1259L  KA150/CA125/KA150 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040042-bs', 'PSB-1-8761-6017-0  336W*639L  KA185/CA125/KA185 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040043-bs', 'BOX  PBB-1-8761-6017-0  468W*1323L  KA150/CA125/KA150  C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040044-bs', 'PSB-1-8761-6018-0  336W*639L  KA185/CA125/KA185 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040045-bs', 'PBB-1-8761-6018-0  468W * 1323L  KA150/CA125/KA150 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040046-bs', 'PSB-1-8761-6019-0  283W*629L  KA185/CA125/KA185  C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040047-bs', 'PBB-1-8761-6019-0  421W*1283L  KA150/CA125/KA150  C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080044-bs', 'PBB - 04477 - E0200   CARTON BOX (395W*1299L) KI185/KI150 3 ชั้นลอน C', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080046-bs', 'PBB - 04477 - E0120  CARTON BOX (378W*1339L) KI185/KI150  3 ชั้นลอน C', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080048-bs', 'PBB-04477-E0130 (CARTON BOX  (OD) 285W*705L*135H MM KL185/KL150 3ชั้น C', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080050-bs', 'PBB - 04477 - E0110  CARTON BOX (350W*1129L) KI185/KI150 3 ชั้นลอน C', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080052-bs', 'PBB - 04477 - E0140 CARTON BOX (405W*1381L) KI185/KI150 3 ชั้นลอน C', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080054-bs', 'PBB - 04477 - E0150 CARTON BOX (471W*1323L) KI185/KI150 3 ชั้นลอน C', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080056-bs', 'PBB - 04477 - E0160 CARTON BOX (380W*1349L) KI185/KI150 3 ชั้นลอน C', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080062-bs', 'PBB-04477-E0190 (BOX ID : 279W*614L*127H KI185/CA125/KI185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080063-bs', 'PSB - 47441 - E0130P  CARTON BOX (265W*634L) KA125/KA125   3ชั้นลอน C', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080064-bs', 'PBB - 47441 - E0130P   CARTON BOX (399W*1300L) KA125/KA125  3 ชั้นลอน C', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080065-bs', 'PSB - 47442 - E0040P  CARTON BOX (265W*634L) KA125*KA125  3ชั้นลอน C', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080066-bs', 'PBB - 47442 - E0040P CARTON BOX (399W*1300L) KA125/KA125  3 ชั้นลอน C', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080067-bs', 'PSB - 47443 - E0130P (BOX 327W*634L  KA125/KA125 3 ชั้น C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080068-bs', 'PBB - 47443 - E0130P (BOX 454W*1270L KA125/KA125 3ชั้น C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080069-bs', 'PSB - 47444 - E0040P  CARTON BOX (327W*634L)  KA125/KA125  3ชั้นลอน C', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080070-bs', 'PBB - 47444 - E0040P CARTON BOX  (459W*1300L) KA125/KA125  3 ชั้นลอน C', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080071-bs', 'PSB-04477-E0110  (NEW - SMART CHOICE) CARTON BOX (OD) 85W*165L*152H MM 3ชั้น C', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080072-bs', 'PSB-04477-E0120  (NEW - SMART CHOICE) (BOX 240W*649L KI185/KI150 3ชั้น C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080073-bs', 'PSB-04477-E0130  (NEW - SMART CHOICE) CARTON BOX (OD) 166W*280L*115H MM 3ชั้น C', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080075-bs', 'PSB-04477-E0190  (NEW  SMART  CHOICE) BOX 270W*871L KI185/KI150 3ชั้น C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080076-bs', 'PSB - 04477 - E0200  - (NEW SMART CHOICE)  CARTON BOX (260W*619L) KI185/KI150 3 ชั้นลอน C', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080077-bs', 'PSB - 04477 - E0140  - (NEW SMART CHOICE) CARTON BOX (265W*669L) KI185/KI150 3ชั้นลอน C', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080078-bs', 'PSB - 04477 - E0150  - (NEW SMART CHOICE) CARTON BOX (334W*649L) KI185/KI150 3 ชั้นลอน C', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080079-bs', 'PSB - 04477 - E0160  - (NEW SMART CHOICE) CARTON BOX (240W*649L) KI185/KI150 3 ชั้นลอน C', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080080-bs', 'PSB-04477-E0170 ( NEW SMART CHOICE) 240W*659L KI185/CA125/KI185 3 ชั้น ลอน C', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2313010018-bs', 'PSB - NDB-K CARTON BOX (400W*993L) KI125/KI125 3 ชั้นลอน C', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2313030003-bs', 'PSB- ISZB - B50 - GSA (403W*1472L) KA150/CA125*3/KA150 BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2313030016-bs', 'PSB-MB-A-NSB-B  426W*1442L  KA150/CA125*3/KA150 BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2313030017-bs', 'PSB-MB-B50/B170  456W*1492L  KA150/CA125*3/KA150 BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2314010084-bs', 'PSB- DPMI - A510E (LA101700027)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '9371201031-bs', 'SQUARE TUBE-K65 x 10 x 3T x 25L', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '9371201048-bs', 'SQUARE TUBE - K65 x 10 x 3T x 57L', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '224-0005-16-bs', 'Carton box 769W*419L KA230/M/KA230/CF  (Service  Part  432063STOA)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '224-0005-28 Cancel-bs', 'BOX FOR MITSUBISHI DRUM BRAKE 205 991Wx534L KA230/CA125/KA230 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040019-H-bs', 'PBB- 8 - 98079104 - T(468W*1112L)KI185/CA125/KI185 B/F NEW SCREEN "RED COLOR" (HELP NK SUPPORT SHEET BOARD)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040038-H-bs', 'BOX  PSB-1-8761-6015-0  263W x 629L  KA185/CA125/KA185  C/F (HELP NK SUPPORT SHEET BOARD)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040039-H-bs', 'BOX  PBB-1-8761-6015-0  401W X 1283L  KA150/CA125/KA150  C/F (NK Support Sheet Board)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040040-H-bs', 'BOX  PSB-1-8761-6016-0  243W*623L  KA185/CA125/KA185 C/F (NK SUPPORT Sheet Board)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040041-H-bs', 'BOX  PBB-1-8761-6016-0  381W * 1259L  KA150/CA125/KA150 C/F (NK SUPPORT Sheet Board)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040044-H-bs', 'BOX  PSB-1-8761-6018-0  336W*639L  KA185/CA125/KA185 C/F (HELP NK SUPPORT SHEET BOARD)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040045-H-bs', 'BOX  PBB-1-8761-6018-0  468W * 1323L  KA150/CA125/KA150 C/F (HELP NK SUPPORT SHEET BOARD)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312040046-H-bs', 'BOX  PSB-1-8761-6019-0  283W*629L  KA185/CA125/KA185  C/F (NK Support S/B)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080044-H-bs', 'PBB - 04477 - E0200   CARTON BOX (395W*1299L) KI185/CA125/KI185  CF (NK Support Sheet Board)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080046-H-bs', 'PBB - 04477 - E0120  CARTON BOX (378W*1339L) KI185/CA125/KI185  CF (NK Support Sheet Board)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080048-H-bs', 'PBB-04477-E0130 CARTON BOX  423W*2009L  KI185/CA125/KI185 CF ( NK Support Sheet Board)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080050-H-bs', 'PBB - 04477 - E0110  CARTON BOX (350W*1129L) KI185/CA125/KI185  CF ( NK Support Sheet Board)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080052-H-bs', 'PBB - 04477 - E0140 CARTON BOX (405W*1381L) KI185/CA125/KI185  CF (NK Support Sheet Board)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080054-H-bs', 'PBB - 04477 - E0150 CARTON BOX (471W*1323L) KI185/CA125/KI85  CF (NK Support Sheet Board)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080063-H-bs', 'PSB - 47441 - E0130P  CARTON BOX (265W*634L) KA125/CA125KA125  CF (HELP NK SUPPORT SHEET BOARD)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080064-H-bs', 'PBB - 47441 - E0130P   CARTON BOX (399W*1300L) KA125/CA125/KA125  CF (NK Support Sheet Board)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080065-H-bs', 'PSB - 47442 - E0040P  CARTON BOX (265W*634L) KA125/CA125/KA125  CF (NK Support Sheet Board)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080066-H-bs', 'PBB - 47442 - E0040P CARTON BOX (399W*1300L) KA125/KA125  3 ชั้นลอน C NK SUPPORT SB', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080067-H-bs', 'PSB - 47443 - E0130P (BOX 327W*634L  KA125/KA125 3 ชั้น C/F) (NK Support Sheet Board)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080068-H-bs', 'PBB - 47443 - E0130P (BOX 454W*1270L KA125/KA125 3ชั้น C/F) (NK Support Sheetbord)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080069-H-bs', 'PSB - 47444 - E0040P  CARTON BOX (327W*634L)  KA125/KA125  3ชั้นลอน C (NK Support Sheet Board)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080071-H-bs', 'PSB-04477-E0110  (NEW - SMART CHOICE) CARTON BOX (OD) 85W*165L*152H MM 3ชั้น C', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080072-H-bs', 'PSB-04477-E0120  (NEW - SMART CHOICE) (BOX 240W*649L KI185/KI150 3ชั้น C/F) NK Support Sheet Board', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080073-H-bs', 'PSB-04477-E0130  (NEW - SMART CHOICE) CARTON BOX (OD) 166W*280L*115H MM 3ชั้น C NK Support Sheet Board', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080076-H-bs', 'PSB - 04477 - E0200  - (NEW SMART CHOICE)  CARTON BOX (260W*619L) KI185/KI150 3 ชั้นลอน C (NK Support S/B)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080077-H-bs', 'PSB - 04477 - E0140  - (NEW SMART CHOICE) CARTON BOX (265W*669L) KI185/KI150 3ชั้นลอน C (NK Support Sheet Board)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2312080078-H-bs', 'PSB - 04477 - E0150  - (NEW SMART CHOICE) CARTON BOX (334W*649L) KI185/KI150 3 ชั้นลอน C NK support Sheet Board', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '6EB100L2-L-bs', 'ECO DRY BEAD 100 g (Non Woven)  (120 Pcs/Box)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '6EB10L2-6-bs', 'ECO DRY BEAD 10 g (Non Woven)  (600 Pcs/Box)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '6EB50L2-bs', 'ECO DRY BEAD 50 g (Non Woven)  (200 Pcs/Box) (NT5428)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '90737-DA/1-bs', 'HDPE BAG-DANA  SIZE 120W*740*0.05T  MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-10OT4475 (Cancel)-bs', 'Carton  box 454W*1283L (Size ID 265 X 350 X 170 MM  3PC-P)  KA230/CA125/KA230 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-10OT4476-bs', 'PAD  SIZE  :  250 X 340 MM  3PC- P CA125/CA125/CA125 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-10OT7780-bs', 'WOODEN PALLET 1000Wx1150Lx135H MM.(4 WAY) SCREEN NDK (COVER)  Exculde Fumigatiun', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-14PC0080-1CANCELLED-bs', 'Carton  box 452W*1286L (Size ID 265Wx350Lx170H)  KA230/CA125/KA230 C/F (Common BS-10OT4475)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-14PC0080-2-bs', 'Carton  box 452W*1286L (Size ID 265Wx350Lx170H)  KA230/CA125/KA230 C/F (Common BS-10OT4475) เปลี่ยนแบบพิมพ์ STD. packing 10 pcs./pack มัดเชือกฟาง 2 เส้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-14PC0080CANCELL-bs', 'Carton  box 454W*1283L (Size ID 265 X 350 X 170 MM  3PC-P)  KA230/CA125/KA230 C/F (Common BS-10OT4475)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-14PC0081-bs', 'PAD  SIZE  :  250 X 340 MM  3PC- P CA125/CA125/CA125 C/F STD. Packing 50 pcs./pcs. มัดเชือกฟาง2เส้น+ใช้กระดาษรองเชือก', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-14PC0157(CANCEL)-bs', 'WOODEN PALLET 1000Wx1150Lx135H MM.(4 WAY) SCREEN NDK (COVER)   Fumigatiun', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-14PC0157-1-bs', 'WOODEN PALLET 1000Wx1150Lx135H MM.(4 WAY) SCREEN NDK (COVER)   Fumigatiun CHANGE DESIGN', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-14PC0187-bs', 'WOODEN PALLET 890W x L-980L x 125H MM (HEAT TREATMENT)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-2312040010-H-bs', 'PBB- 8 - 97206 - 618 - T(BOX 478W*1252L)KI185/KI150 B/F (NK Support Sheet Board)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-2312040019/2-H-bs', 'PBB- 8 - 98079104 - T(468W*1112L)KI185/CA125/KI185 B/F NEW SCREEN "RED COLOR" (HELP NK SUPPORT SHEET BOARD)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-2312080058-bs', 'PBB - 04477 - E0170 378W*1343L (BOX OD 229x433x154H) KI185/CA125/KI185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-2312080060-bs', 'PBB - 04477 - E0180 426W*1986L KI185/CA125/KI185 CF มัดละ 20 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-2312080068-H CANCEL-bs', 'PBB - 47443 - E0130P (BOX 454W*1270L KA125/KA125 3ชั้น C/F) (NK Support Sheetbord)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-2312080070-H-bs', 'PBB - 47444 - E0040P CARTON BOX  (454W*1270L) KA125/KA125  3 ชั้นลอน C (NK Support Sheet Board)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-2312080074-bs', 'PSB - 04477 - E0180  - NEW SMART CHOICE  BOX 269W*909L (KI185/CA125/KI185 C/F) 1:1 มัดละ 20 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-2312080079-H-bs', 'PSB - 04477 - E0160  - (NEW SMART CHOICE) CARTON BOX (240W*649L) KI185/KI150 3 ชั้นลอน C (NK Support Sheet Board)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-2313030003-bs', 'PSB- ISZB - B50 - GSA (403W*1472L) KA150/CA125*3/KA150 BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-2313030003-H-bs', 'BOX  PSB- ISZB - B50 - GSA  403W*1472L  KA150/CA125*3/KA150 BC/F (HELP NK SUPPORT SHEET BOARD)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-2313030019-bs', 'BOX 482W*1014L  ID 141W*338L*130H (Die cut) (KA185/CA125/KA185 C/F)+Printing  มัดละ 10 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-2313030019-H-bs', 'BOX 482W*1014L  ID 141W*338L*130H (Die cut) (KA185/CA125/KA185 C/F)+Printing  มัดละ 10 ชิ้น (NK Support Sheet Board)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-2313030020-bs', 'BOX 965W*516L KA185/CA125/KA185 CF  (OD 280W*312L*95H)  MODEL  PSB-DPTT-E480 (Box CBI Brazil) มัดละ 20 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-2313030020-H-bs', 'BOX 965W*516L KA185/CA125/KA185 CF  (OD 280W*312L*95H)  MODEL  PSB-DPTT-E480 (Box CBI Brazil) มัดละ 20 ชิ้น(NK Support S/B)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-2313030021-bs', 'CARTON BOX 368W*1200L OD:240*348*132H KA185/CA125/KA185 CF M.PSB-NSB-B/MB-A มัดละ 10 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-2313030021-H-bs', 'CARTON BOX 368W*1200L OD:240*348*132H KA185/CA125/KA185 CF M.PSB-NSB-B/MB-A มัดละ 10 ชิ้น NK SUPPORT SB', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-2313030023-bs', 'Carton box 398W*1260L OD: 270Wx348L132H KA185/CA125/KA185 C/F PSB-MB-B มัดละ 10 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-2314010084 CANCELLED-bs', 'PSB- DPMI - 510 (2B36141-B) (635W*616L) KL175/CA125/KL175 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-420AD-CB-bs', 'Carton Box  420AD-CB  398W*1404L ID 420*250*120H  (KL205/CA125*3/KL150  BC/F) มัดละ 10 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-420AD-CS-bs', 'Carton Box  420AD-CS 363W*1344L  ID420*220*115H  (KL205/CA125*3/KL150  BC/F)  มัดละ 10 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-428AD-CB-bs', 'Carton Box  428AD-CB 398W*1404L  ID 420*250*120H  (KL205/CA125*3/KL150  BC/F) มัดละ 10 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-428AD-CS-bs', 'Carton Box  428AD-CS  ID 420*220*110H  (KL205/CA125*3/KL150  BC/F) มัดละ 10 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-428H-CB-bs', 'CARTON BOX 428H-CB ID 430*242*140 MM KL205/CA125*3/KL150 BC/F มัดละ 10 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-602010504-4-bs', 'PAPER PIPE ID : 77*3T*120L MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-71002729-bs', 'CARTON BOX  OD: 80*400*60  MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AAA-001-bs', 'CARTON  BOX  SIZE  OD   265W*435L*83H   KA185/CA125/KA185   C/F  SCREEN COMMON AST-005 มัดละ 10 ชิ้น KPC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AAA-002-bs', 'CARTON  BOX  435W*1424L SIZE OD 265W*435L*175H   KA185/CA125/KA185   C/F  SCREEN COMMON BS-AST-004 มัดละ 10 ชิ้น KPC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AAA-004-bs', 'ECO DRY 10 G.600 PCS/BOX', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BSA-AAM-021-bs', 'PTT-A 95Wx270L (1:2)  KA185/CA125*3/KA185 BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BSA-AAM-021/1-bs', 'PTT-B 95Wx175L (1:2)  KA185/CA125*3/KA185 BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AAM-012-bs', 'BOX FOR SIZE 270*175*95 (S) 289W*950L KA230/CA125/KA230 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BSA-ART-005/2-bs', 'PTT-A 54W*330L KA125/CA125/KA125 CF 1:6 MODEL VG', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BSA-ART-005/3-bs', 'PTT-B 54W*325L KA125/CA125/KA125 CF 1:6 MODEL VG', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BSA-AST-046-bs', 'PTT-A 400W*582L KA125/CA125*3/KA125 BCF 1:1  MODEL (OD 593W*980L*630H)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BSA-AST-046/1-bs', 'PTT-B  330W*582L KA125/CA125*3/KA125 BCF 1:4  MODEL (OD 593W*980L*630H)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BSA-AST-046/2-bs', 'PTT-C  615W*970L KA125/CA125*3/KA125 BCF 1:2  MODEL (OD 593W*980L*630H)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BSA-AST-046/2 HELP-bs', 'PTT-C SIZE SHOT 1230W*970L KA125/CA125*3/KA125 BCF 1:2  MODEL (OD 593W*980L*630H)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BSA-AUT-008-bs', 'PTT-W 50W*345L  KA185/CA125/KA185 CF 1:13  (355*550*80H) PACK 20 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BSA-AUT-008/1-bs', 'PTT-L 50W*540L  KA185/CA125/KA185 CF 1:5  (355*550*80H) PACK 20 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BSA-BEISHIN-013-PTT-A-bs', 'PARTITON-A 190W*563L 1:14 (CA125/CA125/CA125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BSA-BEISHIN-013-PTT-B-bs', 'PARTITON-B 190W*503L 1:12  (CA125/CA125/CA125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BSA-BEISHIN-017-bs', 'PTT-A 167W*540L CA125/CA125/CA125 CF 1:6 (Pack 25 Pcs)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BSA-BEISHIN-017/1-bs', 'PTT-B 167W*1086L CA125/CA125/CA125 CF 1:8 2HX', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BSA-BEISHIN-017/2-bs', 'PTT-B 1086W*167L CA125/CA125/CA125 CF 1:8 2HX (Pack 25 Pcs)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BSA-BEISHIN-018-bs', 'PAD 540W*1086L CA125/CA125/CA125 CF 1:1 MODEL 2HX (W44"*L42" 3/4 ผ่า 2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BSA-CYC-005-3-bs', 'PARTITION  ASSY  Package YA(25PCS) 131W*176L (KA230/CA125/KA230 C/F) 1:8*75 YA PACK 25 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BSA-CYC-005-3/1-bs', 'PARTITION  ASSY  Package YA(25PCS) 131W*212L (KA230/CA125/KA230 C/F) 1:1*75 YA PACK 25 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AHTT-001CANCELLED-bs', 'CARTON  BOX  528W*1576L  OD 320W*460L*215H  KI125/CA125*4 BC/F (10 ชิ้น / มัด)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AIT-001-bs', 'CARTON  BOX 488W*369L KS175/CA125/CA125 F/F BOX OD 75W*100L*270H  PACKING STD 50 PCS/มัด', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AIT-002-bs', 'CARTON  BOX  315W*354L DUPLEX PAPER 400G(WHITE) BOX OD 72W*80L*182H  PACKING STD 50 PCS/มัด', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AIT-003-bs', 'Box E992000081 Carton Blower Motor  SIZE OD 185W*185L*192H (KL175/CA125/KL175 C/F) + Print screen (มัดละ 10 ชิ้น)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AKE-006-bs', 'BOX OD 250W*270L*140H (386W*1062L) KI150/CA125/KI150 CF 1:1 SCREEN มัดละ 10 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AKE-006/1-bs', 'PAD 250W*230L CA125/CA125/CA125 CF 1:4 SCREEN มัดละ 50 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AKE-006/1-H-bs', 'PAD 250W*230L CA125/CA125/CA125 CF 1:4 SCREEN มัดละ 50 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AKE-006-H-bs', 'BOX OD 250W*270L*140H (386W*1062L) KI150/CA125/KI150 CF 1:1 SCREEN มัดละ 10 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AKE-008/2-bs', 'INNER BOX GMT17X 130022000039 : 544W*687L KA185/CA125*3/KA185 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AKE-012-bs', 'BOX 321W*659L KA125/CA125/KA125 CF 1:1  PRINT MODEL KI031-A มัดละ 10 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AKE-013-bs', 'BOX 241W*699L KA125/CA125/KA125 CF 1:1  PRINT MODEL KI032-A', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AKE-014-bs', 'CAP 1306W*1312L KA150/CA125*3/KA150 BCF 1:1 CAP OD 1100*1100*110H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AKE-015-bs', 'PAD 1100W*1100L KA125/CA125*3/KA125 BCF 1:1 PAD (1100*1100)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AKE-023-bs', 'BOX 187W*579L KA125/CA125/KA125 CF 1:1 PRINT SCREEN COLOR BLACK MODEL BOX KI016-A', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AKE-026-bs', '120060000021 ECO DRY BEAD SIZE 50 G (NON WOVEN) (200 Pcs/Box)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AKE-027-bs', '220085000038 Zerust Ferrous Cover Bag 110 cm.x 110 cm.x 135 cm. x 0.10 mm.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AKE-028-bs', 'EVA Sheet Size : 45mm x 500mm x T30 mm. (Black Color) 140027000033', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AKE-029-bs', 'EVA Sheet Size : 45mm x 70mm x T45 mm. (Black Color) 140027000028', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AKE-030-bs', 'EVA Sheet Size : 85mm x 70mm x T45 mm. (Black Color) 140027000029', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AKE-031-bs', 'EVA Sheet Size : 75mm x 410mm x T65 mm. (Black Color) 140027000030', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AKE-035-bs', 'TOP CAP (ID) 1116W*1126L*110H BI-WALL (KA540) AA/F PRINT SCREEN COLOR BLACK MODEL PKG.SIZE (ID) 1080W*1090L*395H MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AKE-036-bs', 'SLEEVE (OD) 1110W*1120L*395H TW-WALL 1300 AAA/F PRINT SCREEN COLOR BLACK MODEL PKG.SIZE (ID) 1080W*1090L*395H MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AKE-037-bs', 'PAPER PALLET AND PAPER PAD (OD) 1136W*1146L*225MM. BI-WALL (KA540) AA/F PRINT SCREEN COLOR BLACK MODEL PKG.SIZE (ID) 1080W*1090L*395H MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AMT-002-bs', 'PAD SIZE 1000W*2000L KA150/CA125/KA150 CF (W40"*L78" 3/4) M.PAPER PAD 1000*2000 MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AMT-003-bs', 'PAD SIZE 1000W*2000L KA125/CA125/KA125 CF (W40"*L78" 3/4) M.PAPER PAD 1000*2000 MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BSA-PTT-TOYODA-01-bs', 'Z-64PTT-TOYODA PTT-01 138W*514L 1:2 KA185/CA125/CA125  C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BSA-PTT-TOYODA-02-bs', 'Z-64PTT-TOYODA PTT-02 347W*138L 1:4  KA185/CA125/CA125  C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-ART-005/1-bs', 'BOX 516W*1387L KA230/CA125/KA230 CF 1:1 MODEL VG PACK 10 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-ART-014-bs', 'BOX 189Wx254L SERI (EXPORT)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BSA-SBSM-011/1-1-bs', ' PTT-B 35W*285L  KA125/CA125/KA125 CF 1:3 MODEL DV.PT350550003 PTT', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BSA-SBSM-011-1-bs', 'PTT-A 35W*230L  KA125/CA125/KA125 CF 1:4 MODEL DV.PT350550003 PTT', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BSA-SBSM-012-bs', 'PTT ASSY PTT-A 90W*320L  KA125/CA125/KA125 CF 1:3 MODEL PT244320090 PTT มัดละ 100 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BSA-SBSM-012/1-bs', 'PTT ASSY PTT-B 90W*244L  KA125/CA125/KA125 CF 1:6 MODEL PT244320090 PTT มัดละ 100 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BSA-SCN-012-bs', 'PTT2A 85W*475L KA125/CA125/KA125 CF 1:11  FOR MODEL BRACK', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BSA-SCN-012/1-bs', 'PTT-2B 85W*416L KA125/CA125/KA125 CF 1:4 FOR MODEL BRACK', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AST-003-bs', 'CARTON BOX SIZE OD 530W*880L*262H KA185/CA125*3/KA185  BC/F ADD SCREEN (5 ชิ้น/มัด) KPC มัดตรงกลางเส้นเดียวรองกระดาษ', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AST-004-1-bs', 'CARTON  BOX  SIZE 435W*1424L  OD   265W*435L*175H   KA185/CA125/KA185   C/F ADD SCREEN (10 ชิ้น / มัด หัว-ท้าย) Change Design', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AST-004CANCELLED-bs', 'CARTON  BOX  SIZE 435W*1424L  OD   265W*435L*175H   KA185/CA125/KA185   C/F ADD SCREEN (10 ชิ้น / มัด) KPC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AST-005-bs', 'CARTON  BOX  SIZE  OD   265W*435L*83H   KA185/CA125/KA185   C/F ADD SCREEN (10 ชิ้น/มัด มัด2เส้นด้าน Lไม่รองกระดาษ) KPC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AST-005-H-bs', 'CARTON  BOX  SIZE  OD   265W*435L*83H   KA185/CA125/KA185   C/F ADD SCREEN (10 ชิ้น/มัด มัด2เส้นด้าน Lไม่รองกระดาษ) KPC  HELP NK SUPPORT SB', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AST-026-bs', 'AIR BUBBLE SHEET 600W*1200L*10MM PACK 100 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AST-043-bs', 'BOX OD :379W*1842L (234W*1584L*152H) (KA125/CA125*3/KA125 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AST-045-bs', 'BOX 1220W*1596L (OD 593W*980L*630H) KA230/CA125/KA230 CF SCREEN 1:1 กาวเป็นกล่องแล้ว (5 ชิ้น/มัด) มัดตรงกลางเส้นเดียวรองกระดาษ', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AST-057-bs', 'BOX 896W*1504L (OD 488W*988L*412H) KA125/CA125/KA125 C/F M.BOX 1 (TG446290-36500M) SCREEN 1:1 กาวเป็นกล่องแล้ว (5 ชิ้น/มัด)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AST-059-bs', 'BOX 1175W*1900L (OD 634W*1238L*545H) KA125/CA125/KA125 C/F M.TG446290-56620T SCREEN 1:1 กาวเป็นกล่องแล้ว (5 ชิ้น/มัด)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AST-063-bs', 'EPE FOAM SHEET SIZE 200*1000*T2 MM.(COLOR WHITE) (50 Pcs/ Pack)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AST-067-1-bs', 'BOX-A1+BOX-A2 981W*1728L KA125/CA125/KA125 CF SCREEN COLOR RED กาวเป็นกล่องแล้ว (5 ชิ้น/มัด)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AST-067-2-bs', 'BOX-A1+BOX-A2 981W*1728L KA230/CA125/KA230 CF SCREEN COLOR RED กาวเป็นกล่องแล้ว (5 ชิ้น/มัด)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AST-071-bs', 'Outdoor Unit Cover Pint+Sunshade+Concrete Painting/ a)Big Unit : 8 Unit , b)Small Unit : 20 Unit , c)Concrete Are', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AST-073-bs', 'INSTALLATION OF HEAT SHIEELD SHEET FOR OUTDOOR UNIT AIR CONDITIONER', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AST-074-bs', 'WOODEN PALLET 900W*1600L*130H HEAT TREATMENT', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BSA-STD-008CANCELLED-bs', 'PTT 474W*515L KA125/CA125/KA125 CF 1:1 MODEL 14075-EZ35A CONN-WATER มัดละ 20 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AUT-004-bs', 'Wooden Pallet 714W*1256L*120H  FUMIGATION', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AUT-007-bs', 'Carton Box 461W*1830L KA185/CA125/KA185 CF OD size 355W*550L*80H mm. PACK 10 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AUT-012-1-bs', 'CARTON  BOX  SIZE 354W*1822L OD:88W*1672L*77H MM  KA125/CA125/KA125  C/F 1:1  M.BOX+PTT', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AUT-012-2-1-bs', 'PARTITION SIZE 557W*70L KA125/CA125/KA125  C/F  M.BOX+PTT *** Change สลับลอน***', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-AUT-012-2CANCELLED-bs', 'PARTITION SIZE 70W*557L KA125/CA125/KA125  C/F  M.BOX+PTT', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-BEISHIN-002-bs', 'CORRUGATE SHEET SIZE 294W*510L*3T MM.FOR H60A MEX (BLACK COLOR) PACK 50 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-BEISHIN-003-bs', 'CARTON BOX OD 530*315*365 MM. KA125/CA125*3/KA125 BC/F PACK 10 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-BEISHIN-004-bs', 'PARTITION A SIZE 160W*294L MM. 1:4  KA125/CA125/KA125 C/F (Pack 25 Pcs)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-BEISHIN-005-bs', 'PARTITION B SIZE 160W*510L MM. 1:6  KA125/CA125/KA125 C/F (Pack 25 Pcs)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-BEISHIN-006 CANCEL-bs', 'WOODEN PALLET SIZE 1100W*970L*120H MM. FUMIGATE', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-BEISHIN-006/1-bs', 'WOODEN PALLET SIZE 1100W*970L*120H MM. FUMIGATE เปลี่ยนแบบ', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-BEISHIN-009-bs', 'PAD SIZE 294Wx510L MM.(KA125/CA125/KA125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-BEISHIN-011-bs', 'WOODEN PALLET SIZE 1100W*1100L*120H MM.Fumigation heat tretment', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-BEISHIN-016-bs', 'BOX  906W*1673L KA125/CA125/KA125 CF 1:2 MODEL 2HX PACK 5 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-BEISHIN-018-bs', 'PAD 540W*1086L CA125/CA125/CA125 CF 1:1 MODEL 2HX', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-BEISHIN-020-bs', 'CARTON BOX OD: 530W*700L*400H  KA125/3M/KA125 BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-BEISHIN-021-bs', 'PAPER PAD: 155Wx367L MM.(KA125/CA125/KA125 C/F) 1:2 ( FIN L42L)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-BEISHIN-022-bs', 'PAPER PAD : 727Wx367L MM.(KA125/CA125/KA125 C/F) 1:1 ( FIN L42L)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-BEISHIN-023-bs', 'PAD 510W*680L KA125/CA125/KA125 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-BEISHIN-027-bs', 'CARTON BOX SIZE : 385W*420L*350H MM. (KA125/CA125/KA125 C/F) 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-BEP-001-bs', 'CARTON  BOX  SIZE 343W*1424L OD 265W*435L*83H   KA185/CA125/KA185   C/F  SCREEN COMMON AST-005 มัดละ 10 ชิ้น KPC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-BEP-003-bs', 'ECO DRY 10 G.600 PCS/BOX (COMMON AST 6EB10L2-6)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-BROBA-bs', 'BOX 200*100*100 (324W*644L)  KI150/KI150  B/F มัดละ 20 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-BS-005/2-bs', 'CARTON  BOX  OD 540W*720L*130H MM (666W*1288L) KI125/CA125/KI125 C/F 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-BS-006-bs', 'CARTON  BOX  956W*1763L KA185/CA125/KA185 CF BOX OD 740*1000*220H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-CB015701670011-bs', 'CARTON BOX NTN 396W*675L (157*167*11  MM)  KI150/CA125/KI150 B/F มัดละ 10 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-CB0240240180H-bs', 'CARTON BOX  ID  240*240*180H  KA125/KA125  BC/F (BOX S) PACK 10 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-CB0260500300H (Cancel)-bs', 'CARTON BOX  ID  260*500*300H (KA125/BC/F  BOX L) PACK 10 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-CB0365270160-bs', 'CARTON BOX S (OD) 365*270*160 MM (KA230 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-CC0001898A-bs', 'HDPE Sheet 1500 mm. x 2200 mm. x 0.050 mm.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-CC0002799A-bs', 'CASE 478W*2250L  KI150/CA125*3/KI150  BC/F  (CC0002799A) PACK 10 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-CC0002799A-1-bs', 'CASE 480W*2256L (OD 480*640*245H)  KI150/CA125*3/KI150  BC/F  (CC0002799A) (DRAWING NO JCH-0802001-01-13)   PACK  10  PCS แก้ไขระยะทับรอยใช้บล๊อคสกรีนเดิม', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-CC0002799B-bs', 'CASE    (OD)  480*640*265H  (DRAWING NO  HIT-0802001-01-03)    KI150/CA125*3/KI150   BC/F  ( CC0002799B )   PACK  10  PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-CC0002799B-1-bs', 'CASE(OD)480*640*265H  SIZE 500W*2256L KI150/CA125*3/KI150   BC/F  ( CC0002799B )(DRAWING NO JCH-0802001-01-13)   PACK  10  PCS แก้ไขระยะทับรอยใช้บล็อกสกรีนเดิม', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-CC0002799C-bs', 'CASE 528W*2250L  KI150/CA125*3/KI150  BC/F  (CC0002799C) NEW SCREEN', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-CC0002800A-bs', 'CAP-A  624W*424L   KI150/CA125*3/KI150  BC/F  (CC0002800A)  AIRCON-INDOOR-A) PACK 20 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-CC0002860A-bs', 'PARTITION - A   SIZE  354W*466L   KA 150/M/KA150  C/F  THAINICHI  INDOOR   (PACK  20  PCS)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-CC0002861A-bs', 'PARTITION - B   SIZE  610W*90L   KA 150/M/KA 150  C/F  THAINICHI  INDOOR   (PACK  50  PCS)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-CC0002862A-bs', 'PARTITION - C   SIZE  550W*86L   KA 150/M/KA 150  C/F  THAINICHI  INDOOR   (PACK  50  PCS)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-CC0002937A-bs', 'PARTITION-A 880W*610L KA230/M/KA230  C/F  ( CC0002937A )  XY-RAM PACK 20 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-CC0002938A-bs', 'PARTITION-B 243W*466L KA230/M/KA230 C/F  ( CC0002938A )  XY-RAM PACK 50 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-CC0002940A-bs', 'PARTITION-C 503W*466L KA230/M/KA230 C/F  ( CC0002940A )  XY-RAM PACK 20 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-CST-001-bs', 'BOX 368W*996L  OD : 220x270x155H (OD) KA185/CA125x3/KA185 BCF SCREEN BLACK', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-CYC-001-bs', 'WOODEL PALLET 640W*640L*135H (FUMI) FOR MODEL INNER PIPE', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-CYC-004-2-bs', 'BOX Package YA(25PCS) 332W*776L (KA230/CA125/KA230 C/F) YA PACK 25 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-CYC-006-1-bs', 'PAD Package YA(25PCS) 176W*176L (KA185/CA125/KA185 B/F) YA PACK 25 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-CYC-007-bs', 'TOP CAP Package YA(25PCS) 1205W*1200L (KA230/CA185*3/KA230 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-CYC-009-bs', 'BOTTOM CAP  Package YA(25PCS) 1205W*1200L (KA230/CA185*3/KA230 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-CYC-012-bs', 'WOODEN PALLET 985W*995L*130H (2 WAY FUMIGATE)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-CYC-017-1-bs', 'SLEEVE SET  Package YA(25PCS) 459W*1965L (KA230/CA185*3/KA230 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-CYC-018-bs', 'PATITION  SUPPORT PTT-A 46W*304L 1:3 PTT-B 46W*230L 1:11 PTT-C 295W*304L 1:1 SCREW 1:2  (FUTURE BOARD 3 MM. GRAY)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-DA-003-bs', 'LDPE BAG 400*550*0.10T', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-DAN-001/1-bs', 'BOX IMC 030 ID 232W*272L*108H (356W*1065L) KA230/CA125/KA230 CF 1:1 MODEL IMC 030 SCREEN BLACK COLOR', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-DAN-002-bs', 'CARTON BOX 496W*1104L  (OD) : 230W x 310L x 270H MM. KA125/CA125/KA125 C/F (BOX NO PRINT SCREEN)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-DAN-002-KA185-bs', 'BOX 858W*1816L (OD 400*500*465H ) KA185/CA125*3/KA185 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-DAN-RY-001-bs', 'WOOD PALLET SIZE  370*370*90H mm   (HEAT TREATMENT) BOC FOR CARRIER T6', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-DID-004-bs', 'INNER BOX NSD KIT  PRINTING : 4/C+WB+กันปลอม SIZE : 192x34x187 MM. MATERIAL : CB 270g+ปะกบลูกฟูก KI', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-DID-005-bs', 'INNER BOX DXN KIT  PRINTING : 4/C+WB+กันปลอม SIZE : 192x34x187 MM. MATERIAL : CB 270g+ปะกบลูกฟูก KI', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-DID-006-bs', 'CARTON BOX NGK KIT SET 424W*1192L KI125/CA125*3/KI125 BC  Std. 10 pcs./ มัด', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-DID-007-bs', 'INNER BOX HDN KIT  PRINTING : 4/C+WB+กันปลอม SIZE : 192x34x187 MM. MATERIAL : CB 270g+ปะกบลูกฟูก KI', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-DTR-002-bs', 'TOP CAP 977Wx830L KA185/CA125x3/KA185/BC/F 1:1  MODEL J36T (FR/PR)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-DTR-003-bs', 'SLEEVE-B1 (ID 610Wx752Lx1077H) KA185/CA125x3/KA185/BC/F 1:1  MODEL J36T (FR/PR)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-EXE-001-bs', 'DUNNAGE AIR BAG (800x1200mm.) ถุงกันกระแทก 50 pcs/box', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-EXE-002-bs', 'AIR GUN', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-EXE-003-bs', 'DUNNAGE AIR BAG 900 x 1200 mm. ถุงกันกระแทก', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-FAE-044-bs', 'WOODEN PALLET :1100W*1100L*135H  FUMIGATION FAE-044 Common RKIR-077 Kiriu M08 แต่ไม่Stamp 08', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-FAE-050-bs', 'Wooden Pallet size 1100W*1100L*120H (Heat Treatment) M.T6 PANTHER(SA)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-FAE-061-bs', 'Wooden Pallet size 1424W*1759L*111H (Heat Treatment) Ref.RFAE-119', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-FILTER ENEVGY-bs', 'FILTER ENEVGY SAVING (REIDUN-KUN)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-FJA-005-bs', 'BOX  429W*1252L KA185/CA125*3/KA185 BCF  MODEL C.R. PACK 50 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-FJA-005/1-bs', 'PARTITION-2A 470W*200L  KA185/CA125*3/KA185 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-FJA-005/2-bs', 'PARTITION-2B  223W*200L  KA185/CA125*3/KA185 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-FJA-005/3-bs', 'PARTITION-2C 525W*200L  KA185/CA125*3/KA185 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-FJA-006-bs', 'BOX OD 414W*1652L  KA125/CA125*3/KA125 BC/F   MODEL H60A', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-FJA-006-1-bs', 'PARTION-02 1125W*210L   KA125/CA125/KA125   C/F   MODEL H60A', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-FJA-007-bs', 'BOX 448W*1356L KA125/CA125*3/KA125 BC/F  MODEL SHARP 380A', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-FJA-008-bs', 'PAD 280W*350L CA125/CA125/CA125 CF MODEL SHARP 380A (W46"*L13" 13/16 ผ่า 4)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-FJA-009-bs', 'BOX  429W*1252L KA185/CA125*3/KA185 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-FJA-011-bs', 'PARTITION-2A 470W*200L  KA185/CA125*3/KA185 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-FJA-012-bs', 'PARTITION-2B  223W*200L  KA185/CA125*3/KA185 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-FJA-013-bs', 'PARTITION-2D 525W*200L  KA185/CA125*3/KA185 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-FJA-015-bs', 'PAD SIZE 230W*700L (CA125/CA125/CA125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-FJA-015-1-bs', 'PAD SIZE 230W*700L (CA125/CA125/CA125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-FJA-016-bs', 'PAD SIZE 1092W*1120L (CA125/CA125*3/CA125 BC/F) (W44"*L44" 1/8)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-FJA-017-bs', 'PAD SIZE 770W*1170L (KA125/CA125/KA125 C/F) (W62"*L46" 1/8 ผ่า2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-FJA-017-1-bs', 'PAD SIZE 760W*1170L (KA125/CA125/KA125 C/F) (W62"*L46" 1/8 ผ่า2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-FJA-017-2-bs', 'PAD SIZE 760W*1170L (KA125/CS110/KA125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-FJA-020-2-bs', 'CARTON BOX OD 234W*584L*217H (444W*1652L) KA125/CA125*3/KA125 BC MODEL H60A, มัดเชือกฟาง = 10 pcs./มัด', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-FJA-020-2-H-bs', 'CARTON BOX OD 234W*584L*217H (444W*1652L) KA125/CA125*3/KA125 BC MODEL H60A, มัดเชือกฟาง = 10 pcs./มัด (NK support S/B)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-FJA-020-3-bs', 'CARTON BOX OD 234W*584L*217H (444W*1652L) KA150/CA125*3/KA150 BC MODEL H60A, มัดเชือกฟาง = 10 pcs./มัด', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-FJA-022-bs', 'PAD SIZE : 1100W*1100L CA125/CA125*3/CA125 BCF (W44"L43" 5/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-HIO-006-bs', 'WOODEN PALLET SIZE 1091W*2019L*120H (HEAT TREATMENT) MODEL CONVENTER ASSY PACK 3.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-HIO-013-bs', 'STRETCH FILM 15MIC*50CM*200M (6 PCS./BOX)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-HIO-014-bs', 'กิ๊ฟพลายสติก (M) 15 mm. บรรจุ 5 Kg./BOX (500 PCS./Kg.)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-HIO-015-bs', 'PP BARND สายรัดกล่อง 15 มม*1200 เมตร  สีดำ (8 KGS/ROLL)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-HOP-045-bs', 'BOX OD : 250W*900L*150H KA150/CA125*3/KA150 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-HOWA-018-bs', 'PAD 1490W*1980L KA125/CA125/KA125 CF 1:1 DUM CARTON', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-HOWA-019-bs', 'PALLET 1300W*2300*120H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-HOWA-021-bs', 'WOODEN PALLET 1300Wx2550Lx121H (พาเลทมือ 2 ต่อแบบใหม่ ปูไม้อัด)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-HOWA-022-bs', 'Wooden Pallet 1500x2700x125H mm.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-HPS-002-bs', 'BOX 356W*793L  KA185/CA125/KA185  (CARTON BOX OD : 230W*540L*130H MM.)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-HPT-008-bs', 'Carton  box 471W*1860L (Size ID 272Wx622Lx170H)  KA125/CA125*3/KA125 BC M.9387714029, PKG.STD 10 pcs./pack มัดเชือกฟาง 1 เส้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-HPT-014-bs', 'CARTON BOX Size :1015W*1389L (OD) : 645W*720L*376H  KA125/CA125*3/KA125  BC/F (BOX 2 JOINT GLUE)SCREEN COLOR RED (For model 2P668148E Pack 5) Small HPT-2208016-00-00 มัดเชือกฟาง 2 เส้นคู่ 5 PCS./มัด', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-HPT-017-bs', 'CARTON BOX 1163W*1614L  (OD) : 770W*820L*400H  KA125/CA125*3/KA125  BC/F (BOX 2 JOINT GLUE)SCREEN COLOR RED (For Model 2P677104C (BIG)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-HRG-001-bs', 'Paper Pad 145W*213L (Bi-wall 40AA) มัดละ 50 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-HYS-013-bs', 'Kraft Paper / กระดาษน้ำตาล CA105 (W=60")', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-ITOH-004-bs', 'BOX   SIZE 299W X 992L MM KA150/CA125/KA150 C/F STD. Packing 20 ชิ้น/มัด จับขอบมัดขวางลอน BOX MODEL OD : 217WX267LX85H กาวเป็นกล่องแล้ว', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JCH-001-bs', 'PTT-A1 SIZE : 469W*250L*3 MM. FUTURE BOARD CONDUCTIVE : BLACK (NO ASSY)   STD PACKING  25PCS/PACK  1:15  MODEL WORLD PCBA', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JCH-002-bs', 'PARTITION-A2 SIZE :  601W*250L*3 MM. FUTURE BOARD CONDUCTIVE  : BLACK (NO ASSY)  1:2  STD PACKING  25PCS/PACK  MODEL WORLD PCBA', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JCH-003-bs', 'PACKAGE FOR : INSERT PACKING FOR WORLD PC (Included Assy) CONDUCTIVE COL. BLACK STD PACKING 5 SET/PACK', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JFE-001-bs', 'PALLET PLASTIC SIZE 1100W*1100L*150H(MM.) PALLET 4 WAYS.(NSH04 110.110LN) PP BLACK COLOR', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-003-bs', 'PAPER BOARD SIZE 700*700 MM. (KA150/3M/KA150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-003/1-bs', 'PAPER BOARD SIZE 700*700 MM. (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-003-1-bs', 'PAPER BOARD SIZE 700*700 MM. (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-004-bs', 'PAPER BOARD SIZE 900*900 MM. (KA150/3M/KA150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-004-1-bs', 'PAPER BOARD SIZE 900*900 MM. (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-005-bs', 'PAPER BOARD SIZE 920*920 MM. (KA150/3M/KA150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-006-bs', 'PAPER BOARD SIZE 940*940 MM. (KA150/3M/KA150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-007-bs', 'PAPER BOARD SIZE 960*960 MM. (KA150/3M/KA150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-008-1-bs', 'PAD SIZE 75W*1000L (KA150/M/KA150 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-011-bs', 'PAPER BOARD SIZE 880W*880L (KA150/CA125*3/KA150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-011/1-bs', 'PAPER BOARD SIZE 880W*880L (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-011-1-bs', 'PAPER BOARD SIZE 880W*880L (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-012-bs', 'PAPER BOARD SIZE 680W*680L (KA150/CA125*3/KA150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-012/1-bs', 'PAPER BOARD SIZE 680W*680L (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-012-1-bs', 'PAPER BOARD SIZE 680W*680L (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-013-bs', 'PAPER BOARD SIZE 720W*720L (KA150/CA125*3/KA150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-013/1-bs', 'PAPER BOARD SIZE 720W*720L (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-013-1-bs', 'PAPER BOARD SIZE 720W*720L (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-014-bs', 'PAPER BOARD SIZE 740W*740L (KA150/CA125*3/KA150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-014/1-bs', 'PAPER BOARD SIZE 740W*740L (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-014-1-bs', 'PAPER BOARD SIZE 740W*740L (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-015-1-bs', 'PAD SIZE 75W*820 (KA150/CA125/KA150 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-016-1-bs', 'PAD SIZE 75W*640 (KA150/CA125/KA150 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-017-bs', 'PAPER BOARD SIZE 860W*860L (KA150/CA125*3/KA150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-017-1-bs', 'PAPER BOARD SIZE 860W*860L (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-024-1-bs', 'PAPER BOARD 520W*520L (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-028-bs', 'PAPER BOARD 760W*760L KA150/CA125*3/KA150 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-028-1-bs', 'PAPER BOARD 760W*760L (KA185/CA125/KA185 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-029-bs', 'PAD SIZE 75W*600L (KA150/M/KA150 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-030-bs', 'PAPER BOARD SIZE 780W*780L (KA150/3CA125/KA150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JNC-032-bs', 'PAD SIZE 75W*690L (KA150/CA125/KA150 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JTK-015-bs', 'PTT-1A 200W*1070L  KA230/CA125*3/KA230  BCF  1:5', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JTK-016-bs', 'PTT-1B 418W*1130L  KA230/CA125*3/KA230  BCF  1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JTK-016-1-bs', 'PTT-1B 400W*1130L  KA230/CA125*3/KA230  BCF  1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JTK-017-bs', 'PTT-1C 200W*1130L  KA230/CA125*3/KA230  BCF  1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JTK-018-bs', 'PTT-1D 200W*1130L  KA230/CA125*3/KA230  BCF  1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JTK-019-bs', 'PTT-1E 155W*1130L  KA230/CA125*3/KA230  BCF  1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JTK-020-bs', 'PTT-2A 205W*1070L  KA230/CA125*3/KA230  BCF  1:5', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JTK-021-bs', 'PTT-2B 150W*1130L  KA230/CA125*3/KA230  BCF  1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JTK-022-bs', 'PTT-2C 618W*1130L  KA230/CA125*3/KA230  BCF  1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JTK-022-1-bs', 'PTT-2C 610W*1130L  KA230/CA125*3/KA230  BCF  1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JTK-023-bs', 'PTT-2D 305W*1130L  KA230/CA125*3/KA230  BCF  1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JTK-024-bs', 'PTT-2E 150W*241L  KA230/CA125*3/KA230  BCF  1:8', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JTK-025-bs', 'SIDE COVER 505W*1060L  KA230/CA125/KA230  CF  1:2 (W42"*L41" 3/4)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JTK-026-bs', 'PAD 1072W*1132L  KA230/CA125*3/KA230  BCF  1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JTK-027-bs', 'Z-NK002-PES02 ZERUST SHEET 1400W*1500L*0.08T Yellow (Pack 100 Pcs)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JTK-041-bs', 'Z-NK001-RF05 RUST-PROOF FILM : 650W*1000L*0.06T (PACK 150 PCS)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JTK-052-bs', 'NK003-WPL11  WOODEN PALLET 1160W*1424L*120H HEAT TREATMENT (WOODEN PALLET BOF BOX LING ASSY POWER STEERING', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JTK-053-bs', 'NK003-LB4330  LABEL LINK 4*2 JG301-004330 STICKER PVC-GW SIZE :8*15 CM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JTK-054-bs', 'NK003-LB4340 LABEL LINK 4*4  JG301-004340 STICKER PVC-GW SIZE :8*15 CM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JTK-055-bs', 'STICKER LINK SERVICE : JG301-004420 STICKER PVC-GW SIZE : 8*15 cm. 4 Color', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JTK-056(CANCEL)-bs', 'STICKER LINK SERVICE : JG301-004390 STICKER PVC-GW SIZE : 8*15 cm. 4 Color', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JTK-067-bs', 'WOODEN PALLET 1200W*1250L*135H HEAT TREATMENT : model WOODEN PALLET (OD) 1200W*1250L*120H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JVT-001-bs', 'CARTON BOX WEATHER SHIELD DBL SIZE OD258W*995L*78H,TRAY SIZE 1140W*370L KA125/CA125/KA125 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JVT-002-bs', 'CARTON BOX 1346W*587L KA125/CA125/KA125 C/F OD196W*1100L*86H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JVT-003-bs', 'CARTON BOX SCUFF PLATB DBL (OD) 30*60*405H FORD T6 KA185/CA125/KA185 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-JVT-004-bs', 'CARTON BOX 650W*194L SCUFF PLAT T6 RAP T6 KA185/CA125/KA185 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KBL-002-bs', 'CORRUGATE SHEET SIZE : 90W*150L*T5 MM  (BLUE COLOR)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KBL-003-bs', 'BOX :(OD)370*540*300H  SIZE : 666W*1840L KA125/CA125/KA125 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KOY-005-bs', 'PAD 900W*900L  KA125/CA125/KA125  CF  (W36"*L35 7/16)  วางสลับมือ : 10 Pcs.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KRYM-005-bs', 'PARTITION FOR ASSIST GRIP  PTT A  (KA230/CA125/KA230 C/F) 1:6 + PTT B (KA185/CA125*3/KA185 BC/F) 1:6  NO Printing', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KRYM-005-PTT-A-bs', 'PTT-A  367W*393L KA230/CA125/KA230 CF 1:6 M.PARTITION FOR ASSIST GRIP', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KRYM-005-PTT-B-bs', 'PTT-B  260W*542L KA185/CA125*3/KA185 BCF 1:6 M.PARTITION FOR ASSIST GRIP', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-004-bs', 'PAD SIZE 120Wx800L (CA125/CA125/CA125 C/F)  ทับรอย 30*30*30*30', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-005-bs', 'PAD SIZE 915Wx1460L  (KI150/CA125*3/KI150 BC/F) ทับรอย 240*135*155*140*245', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-006 CANCEL-bs', 'BOX 1014W*2826L  (KA125/CA125*3/KA125 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-006-1-bs', 'BOX 1014W*1429L  (KA125/CA125*3/KA125 BC/F)  เย็บแล้ว  มัดละ 10 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-007 CANCEL-bs', 'BOX 1728W*2145L (KA125/CA125*3/KA125 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-007-1-bs', 'BOX 1728W*2145L (KA125/CA125*3/KA125 BC/F) SCREEN', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-007-2-bs', 'BOX 1728W*2145L (KA125/CA125*3/KA125 BC/F) NO SCREEN', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-008-bs', 'BOX  SIZE 940W*1857L   (KI150/CA125*3/KI150 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-009-bs', 'PAD SIZE 622Wx1170L (KI150/CA125/KI150 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-010-bs', 'PARTITION  SIZE 243Wx504L (KI150/CA125/KI150 C/F) (Excluded assembly)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-011-bs', 'PAD SIZE 1550Wx2185L (KA125/CA125/KA125 C/F) STAMP COLOR BLACK', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-012-bs', 'PAD SIZE 720Wx2185L (KA125/CA125/KA125 C/F) (W58"*L86" 1/16 ผ่า 2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-013-bs', 'TOP CAP 1595W*1286L KI150/CA125*3/KI150 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-014-bs', 'PTT-02 1034W*1342L KI150/CA125/KI150 CF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-015-bs', 'BOTTOM CAP 1564W*1266L KI150/CA125*3/KI150 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-016-bs', 'BOX  1457W*2289L NISSAN OD : 1085W*1355L*50H (KI150/CA125/KI150 C/F) มัดละ 5 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-017-bs', 'PARTITION SIZE 1036W*1345L (KI150/CA125/KI150 C/F) มัดละ 10 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-019-bs', 'PAD SIZE : 640W*1642L  (KA125/CA125/KA125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-020-bs', 'PAD SIZE : 720W*1642L  (KA125/CA125/KA125 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-021-bs', 'PAD SIZE : 625W*2185L  (KA125/CA125/KA125 C/F) (W50"*L86" 1/16 ผ่า 2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-024-bs', 'BOX ID 440W*1335L*595 H (1064W*1827L)  KI150/CA125*3/KI150 BC/F มัดละ 5 Pcs', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-025-bs', 'PAD 915W*1460L KI150/CA125*3/KI150 BCF (W38"L57" 1/2)  ทับรอย 240*140*155*140*240', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-040-bs', 'Wooden Pallet size 1400Wx1800Lx130H Heat treatment', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-065-bs', 'BOX 828W*1888L OD 580Wx1280Lx252H (KA230/CA125/KA230 C/F)  เย็บเป็นกล่องแล้ว มัดละ 5 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-065-2-bs', 'BOX 825W*1884L OD 580Wx1280Lx252H (KA185/CA125*3/KA185 BC/F)  เย็บเป็นกล่องแล้ว มัดละ 5 ชิ้น ***เปลี่ยน Size+เปลี่ยนเกรดกระดาษ+Special Case Price***', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-066-bs', 'PAD SIZE 1260Wx560L (KI150/CA125/KI150 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-067-bs', 'PARTITION 260Wx505L (CA125/CA125/CA125 C/F) มัดละ 50 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-069-1CANCELLED-bs', 'BOX 1329W*2432L OD : 1014Wx1394Lx322H  KA185/CA125*3/KA185 BC/F เย็บเป็นกล่องแล้ว มัดละ 5 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-069-2-bs', 'BOX-A1 1329W*2452L 2 JOINT  OD : 1014Wx1414Lx322H  KA185/CA125*3/KA185 BC/F เย็บเป็นกล่องแล้ว มัดละ 5 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-069CANCELL-bs', 'BOX 1413W*2544L OD : 1070Wx1450Lx350H  KA185/CA125*3/KA185 BC/F เย็บเป็นกล่องแล้ว มัดละ 5 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-070-1-bs', 'PARTITION SIZE : 1000Wx1380L (KI150/CA125/KI150 C/F) 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-070CANCELL-bs', 'PARTITION SIZE : 1030Wx1400L (KI150/CA125/KI150 C/F) 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-071-1-bs', 'TOP PAD 1370Wx560L KI150/CA125/KI150 CF 1:1 (W56"*L22" 1/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-071CANCELL-bs', 'TOP PAD 1430Wx560L (KI150/CA125/KI150)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-080-bs', 'WOODEN PALLET 1545W*2534L*145H HEAT TRETMENT FOR MODEL COMMON BOX  ID 1500*2500*1200 , 1500*2500*800', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-081-bs', 'BOX : 589W*1437L KI125/CA125*3/KI125 BCF 1:2 + Box Print screen  เย็บเป็นกล่องแล้ว for Model B02A(IDEA NK) STD Packing  10 pcs/pack', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-092CANCELL-bs', 'PAPER PAD-A1 SIZE 1770Wx2350L KI125/CA125/KI125 C/F 1:1 MODEL 2ZJ', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-095-bs', 'PAPER PAD-A SIZE 1110Wx1650L KI125/CA125/KI125 C/F 1:1  (W46"*L64" 16/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KTF-107-bs', 'WOODEN PALLET 1550W*2200L*120H HEAT TRETMENT DRAWING TD-KTF-2209043-00-00', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KYB-005-bs', 'PAPER PAD SUPPORT  : 995W*1010L MM. (KA125/CA125/KA125  C/F) (W40"*L39" 13/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KYB-006-bs', 'PAPER PAD SUPPORT  : 1070W*1075L MM. (KA125/CA125/KA125  C/F) (W44"*L42" 3/8)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-KYB-007-bs', 'PAPER PAD SUPPORT  : 995W*1010L MM. 1:1  KA150/CA125/KA150  C/F (W40"*L39" 13/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-LHT-002-bs', 'Plastic stopper /จุกดำพลาสติก 300 PCS./PACK', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-LHT-003-bs', 'PAPER TUBE 63.5*3.2T*90mm. (OD 70MM)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-LHT-004-bs', 'PAPER TUBE 85.4*2.5T*90mm (OD 90MM)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-LHT-005-bs', 'PAPER TUBE 93*3.5T*135mm (OD 100MM)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-LHT-006-bs', 'PAPER TUBE 93*3.5T*90mm (OD 100MM)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-LHT-007-bs', 'PAPER TUBE 93*3.5T*65mm (OD 100MM)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-LHT-009-bs', 'CENTER PEPER ID: 600*3Tmm*280H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-LHT-010-bs', 'CENTER PEPER ID: 600*3Tmm*230H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-LHT-011-bs', 'CENTER PEPER ID: 600*3Tmm*300H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-MST-001-bs', 'PAPER CORE : ID 300x20Tx40W MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-MST-002-bs', 'PAPER CORE : ID 300x20Tx44W MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NAGANO-001-bs', 'BOX OD:168Wx258Lx137H + PTT-A 90W*141L (1:9) + PTT-B 110W*246L (1:4)+PAD 246Wx141L(1:2) KA125/CA125/KA125 C/F  (M.CHUTE W12-W14)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NAGANO-003-bs', 'BOX OD : 333W*408L*92H  KA230/CA125/KA230 CF (MODEL : W8 )', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NAGANO-005-bs', 'BOX 443W*1007L OD: 235*265*215H  KA125/CA125*3/KA125 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NAGANO-007-bs', 'BOX 453W*1816L OD:350Wx550Lx110H MM.KA230/3CA125/KA230 BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NDE-014-bs', 'CARTON BOX SIZE 597W*1885L KA185/CA125*3/KA185 BCF MODEL BOX FOR ABS มัดละ 10 ชิ้น มัด 2 เส้นด้าน L ไม่รองกระดาษ', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NDE-016-bs', 'CARTON BOX SIZE 528W*1467L KI125/CA125*3/KI125 BCF MODEL BOX FOR CAMERA มัดละ 10 ชิ้น มัด 2 เส้นด้าน L ไม่รองกระดาษ', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NDE-017-1-bs', 'PTT-A SIZE 80W*321L KI125/CA125/KI125 CF 1:12 มัดละ 100 ชิ้น MODEL BOX FOR CAMERA', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NDE-017CANCELLED-bs', 'PTT-B1 SIZE 80W*321L KI125/CA125/KI125 CF 1:12 มัดละ 50 ชิ้น MODEL BOX FOR CAMERA', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NDE-018-1-bs', 'PTT-B SIZE 80W*373L KI125/CA125/KI125 CF 1:8 มัดละ 100 ชิ้น MODEL BOX FOR CAMERA', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NDE-018CANCELLED-bs', 'PTT-B2 SIZE 80W*373L KI125/CA125/KI125 CF 1:8 มัดละ 50 ชิ้น MODEL BOX FOR CAMERA', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NDE-019-1-bs', 'PTT-C SIZE 80W*178L KI125/CA125/KI125 CF 1:30 มัดละ 100 ชิ้น MODEL BOX FOR CAMERA', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NDE-019CANCELLED-bs', 'PTT-B3 SIZE 80W*178L KI125/CA125/KI125 CF 1:30 มัดละ 50 ชิ้น MODEL BOX FOR CAMERA', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NDE-020CANCELLED-bs', 'PAD SIZE 310W*367L KI125/CA125/KI125 CF 1:2 มัดละ 50 ชิ้น MODEL BOX FOR CAMERA', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NDE-021-bs', 'PAD SIZE 930W*1100L KL125/CA125/KL125 C/F 1:1 MODEL:PAPER PAD(OD):930W*1100L MM (W38"*L43" 5/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NDE-023-bs', 'CARTON BOX SIZE 443W*1467L KI125/CA125*3/KI125 BCF MODEL BOX FOR CAMERA มัดละ 10 ชิ้น มัด 2 เส้นด้าน L ไม่รองกระดาษ', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NDE-030-bs', 'PAD SIZE 1180W*1030L KL125/CA125/KL125 C/F 1:1 MODEL:PAPER PAD(OD): 1180W*1030L MM (W48"*L40" 9/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NGC-001-bs', 'WOODEN SHEET SIZE 75W*75T*2000L (HEAT TREATMENT) (Stam Fumigate)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NHT-003 Cancel-bs', 'CARTON BOX OD 265W*265L*125H  KA185/CA125*3/KA185 BC/F  (SCREEN PRINTING STH 0111101)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NHT-003/1-bs', 'CARTON BOX OD 265W*265L*125H  KA185/CA125*3/KA185 BC/F  ((SCREEN PRINTING STH 0311101) มัดละ 10 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NHT-003-2-bs', 'CARTON BOX OD 265W*265L*125H  KA185/CA125*3/KA185 BC/F  (SCREEN PRINTING STH 0111101) มัดละ 10 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NSK-023-bs', 'CARTON BOX SIZE OD 320Wx435Lx220H KA125/CA125*3/KA125 BC/F (ลูกค้า ลังใส่เอกสาร Size 423*300*200 mm.)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT261313/1CANCELL-bs', 'UNIT CASE  MODEL  AS  MODEL  TYO   840W*1324L MM  KL175/CA125/KL175  C/F  OUT  SIZE   1:28 PACK 20 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT261313/4CANCELLED-bs', 'BOX  MODEL 189G  632W*2064L MM  KL175/CA125/KL175  C/F  OUT  SIZE   1:1 PACK 20 PCS UN CODE 4G/Z12.2/S/21', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT261313/5-bs', 'BOX  MODEL 189G  632W*2064L MM  KL175/CA125/KL175  C/F  OUT  SIZE   1:1 PACK 20 PCS UN CODE 4G/Z12.2/S/22', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT261313/6-bs', 'BOX  MODEL 189G  632W*2064L MM  KL175/CA125/KL175  C/F  OUT  SIZE   1:1 PACK 20 PCS UN CODE 4G/ Z 7.8 / S /23', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT261313CANCELL-bs', 'UNIT CASE  MODEL  AS  MODEL  TYO   840W*1324L MM  KL205/CA185/KL205  C/F  OUT  SIZE   1:28 PACK 20 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT261314/1-bs', 'PARTITION-A MODEL  AS  MODEL  TYO  252W*514L MM  KL175/CA125/KL175  C/F  (1:84) PACK 50 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT261314CANCELLED-bs', 'PARTITION-A MODEL  AS  MODEL  TYO  252W*514L MM  KL205/CA185/KL205  C/F  (1:84) PACK 50 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT261315/1-bs', 'PARTITION-B MODEL  AS  MODEL  TYO  404W*490L MM  KL175/CA125/KL175 C/F  (1:84) PACK 50 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT261315CANCELLED-bs', 'PARTITION-B MODEL  AS  MODEL  TYO  404W*490L MM  KL205/CA185/KL205  C/F  (1:84) PACK 50 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT261317/1CANCELL-bs', 'UNIT CASE MODEL DR 1070W*1166L KL175/CA125/KL175  C/F  OUT SIZE  (1:24) PACK 20 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT261317/2-bs', 'UNIT CASE MODEL DR 1070W*1166L KL175/CA125/KL175  C/F  OUT SIZE  (1:24) PACK 20 PCS***UN 4G/Z13.1/S/20***', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT261317CANCELL-bs', 'UNIT CASE MODEL DR 1070W*1166L KL205/CA185/KL205  C/F  OUT SIZE  (1:24) PACK 20 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT261318-bs', 'PARTITION-A   DR MODEL  TYO   270W*1070L MM  KL205/CA185/KL205  B/F  (1:48) PACK 50 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT261318/1-bs', 'PARTITION-A   DR MODEL  TYO   270W*1070L MM  KL175/CA125/KL175  C/F  (1:48) PACK 50 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT261319-bs', 'PARTITION-B   DR MODEL TYO  234W*376L MM  KL205/CA185/KL205  B/F  (1:144) PACK 50 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT261319/1-bs', 'PARTITION-B   DR MODEL TYO  234W*376L MM  KL175/CA125/KL175  C/F  (1:144) PACK 50 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT261348-bs', 'WOODEN PALLET 1100Wx1100Lx120H (FUMIGATION)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT2753-1-bs', 'UNIT CASE 1070W*1170L KL205/CA185/KL205 C/F 1:21   2GA(DR) PACK 20 PCS  ***UN CODE 4G/Z15.0/S/20***', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT2753CANCELL-bs', 'UNIT CASE 1070W*1170L KL205/CA185/KL205 C/F 1:21   2GA(DR) PACK 20 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT2754CANCELL-bs', 'PARTITION-A  296W*1070L KL205/CA185/KL205 C/F 1:42  2GA(DR) PACK 50 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT2755-bs', 'PARTITION-B 270W*376L KL205/CA185/KL205 C/F 1:126  2GA(DR) PACK 50 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT2758-bs', 'Carton Box 700*520/175 m56  12F  (DR) KL205/CA185/KL205 CF PACK 10 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT2759-bs', 'Partition - A  Size  377W*692L   ( 1:2) KL205/CA185/KL205 CF MODEL L12F DR PACK 50 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT2760-bs', 'Partition - B  Size  158W*508L   (1:4) KL205/CA185/KL205 CF MODEL L12F DR PACK 50 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT2813-1 CANCEL-bs', 'Carton  Box   L12F   AS   700*520*175   (683W*1245L)   (1:1) KL205/CA185/KL205 CF PACK 10 PCS***UN 4G/Z11.1/S/20***', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT2813-2CANCELLED-bs', 'Carton  Box   L12F   AS   700*520*175   (683W*1245L)   (1:1) KL205/CA185/KL205 CF PACK 10 PCS***UN 4G/Z11.1/S/21***', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT2813-3-bs', 'Carton  Box   L12F   AS   700*520*175   (683W*1245L)   (1:1) KL205/CA185/KL205 CF PACK 10 PCS***UN 4G/Z11.0/S/22***', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT2813-4-bs', 'Carton  Box   L12F   AS   700*520*175   (683W*1245L)   (1:1) KL205/CA185/KL205 CF PACK 10 PCS***UN 4G / Z 11.2 / S /23', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT2813CANCELL-bs', 'Carton  Box   L12F   AS   700*520*175   (683W*1245L)   (1:1) KL205/CA185/KL205 CF PACK 10 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT2844-bs', 'PARTITION-A  SIZE  192*696   KL205/CA185/KL205  C/F   (1:2) MODEL L12F AS PACK 50 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT2845-bs', 'PARTITION - B SIZE  202*696    KL205/CA185/KL205  C/F   (1:2)  MODEL L12F AS PACK 50 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT2846-bs', 'PARTITION - C SIZE  155*512   KL205/CA185/KL205  C/F   (1:4) MODEL L12F AS PACK 50 PCS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT3176-bs', 'WOOD PALLET  SIZE  800*1200 *120H mm   (MODEL  937A  STRG)  1:1   FUMIGATION)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT3788-bs', 'S/B 806W*2100L KA185/CA125/KA185 CF ทับรอย 103*600*103', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT4349-bs', 'PARTITION 1533Wx70L KA185/CA125/KA185C/F 1:6', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT4355-bs', 'WOODEN PALLET 1120Wx1120Lx130H (FUMIGATION) SCREEN 008A', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT437-bs', 'EPE FOAM BAG LAMINATE  SIZE 550 W*520 L*1.5T  MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NT4486-bs', 'WOOD PALLET  SIZE  1000W*1180L *120H mm   (MODEL  YWO)  1:1   FUMIGATION)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-NTN-007-bs', 'CARTON BOX 633W*1587L KA185/CA125*3/KA185 BCF 1:1 PRINT SKY BLUE (320*470*320H) มัดละ 10 ชิ้น มัดเชือก 2 เส้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-OMI-006-bs', 'PAD  SIZE  : 990W*1030L ( 490W*340L)  (KA125/CS110/KA125 C/F)  1:6', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-OMI-007-1-bs', 'BOX 491W*1639L KL205/CA125/KL205 CF 1:1 BOX OD 175*635*320H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-OMI-009-bs', 'PAD SIZE 1000W*1020L ( 330W*1020L)  (KA125/CS110*3/KA125 BC/F)  1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-OMI-010-bs', 'PAD SIZE 1020W*1020L (KA125/CS110*3/KA125 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PAD-TOYODA/1-bs', 'PAD-TOYODA SIZE 347W*514L KA125/CA125/KA125 C/F (42"*L20" 1/4 ผ่า 3)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-P-B01-003-bs', 'CARTON BOX 1346W*587L KA125/CA125/KA125 C/F OD196W*1100L*86H REF.BS-JVT-002 มัดละ 10 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-P-B01-004-bs', 'CARTON BOX WEATHER SHIELD DBL SIZE OD258W*995L*78H,TRAY SIZE 1140W*370L KA125/CA125/KA125 C/F REF.BS-JVT-001 มัดละ 20 มัดหัว-ท้าย ไม่รองกระดาษ', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-P-B01-004/TRAY-bs', 'TRAY WEATHER SHIELD DBL SIZE 1140W*370L KA125/CA125/KA125 C/F REF.BS-JVT-001 มัดละ 20 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-P-B01-005-bs', 'CARTON BOX 650W*194L SCUFF PLAT T6 RAP T6 KA185/CA125/KA185 C/F Common BS-JVT-004', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-P-B01-006-bs', 'CARTON BOX 194W*460L KA185/CA125/KA185 C/F (OD) 30*60*408H  REF.BS-JVT-003', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-AIR-006-bs', 'AIR BUBBLE SHEET 300W*490L*0.04T (10MM)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-BOS-010-bs', 'ZERUST SHEET 1200W*900*0.07T 50 Pcs/Pack', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-BOS-010-1-bs', 'ZERUST SHEET 1200W*900*0.06T', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-BOS-023-bs', 'ZERUST SHEET 1600W*1600L*0.07T STD PACKING  50 PCS/PACK', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-BOS-023-1-bs', 'ZERUST SHEET 1600W*1600L*0.06T STD PACKING  พับละ 10 ชิ้น ห่อย่อย 50 ชิ้น ห่อใหญ่ 150 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-BOS-024-bs', 'ZERUST BAG 400W*500L*0.07T  50 Pcs/Pack', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-BOS-024-1-bs', 'ZERUST BAG 400W*500L*0.06T  50 Pcs/Pack', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-BOS-025-bs', 'ZERUST SHEET 800W*800L*0.07T  50 Pcs/Pack', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-BOS-025-1-bs', 'ZERUST SHEET 800W*800L*0.06T  50 Pcs/Pack', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-BOS-026-bs', 'ZERUST SHEET 1400W*1600L*0.07T STD PACKING  50 PCS/PACK', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-BOS-026-1-bs', 'ZERUST SHEET 1400W*1600L*0.07T STD PACKING  พับละ 10 ชิ้น ห่อย่อย 50 ชิ้น ห่อใหญ่ 150 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-BOS-031-bs', 'ZERUST BAG 300W*350L*0.07T  100 Pcs/Pack', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-BOS-507-bs', 'ZERUST SHEET 4000W*4000L*0.08T 1 Pcs/Pack', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-CTN-HR001-bs', 'BOX 413W*1546L KA125/CA125*3/KA125 BCF SCREEN BLACK COLOR  10 ชิ้น / มัด', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-CTN-HR001-1-bs', 'BOX 408W*1536L KA125/CA125*3/KA125 BCF SCREEN BLACK COLOR  10 ชิ้น / มัด ***แก้ไขขนาดกล่อง***', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-CTN-HR004-bs', 'CARTON BOX  518W*1536L  OD : 280W*480L*245H KA125/CA125*3/KA125  BC/F SCREEN BLACK COLOR  10 ชิ้น / มัด', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-CTN-HR005-bs', 'BOX 723W*2096L (OD:480W*560L*250H)KA125/CA125*3/KA125 BCF SCREEN BLACK COLOR  5 ชิ้น / มัด', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-CTN-HR010-bs', 'BOX 961W*2104L KL205/CA125/KL205 CF SCREEN BLACK COLOR มัดละ 5 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-CTN-HR011-bs', 'BOX 576W*1794L KL205/CA125/KL205 CF SCREEN BLACK COLOR มัดละ 10 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-CTN-HR015-bs', 'BOX 370W*1544L KA125/CA125*3/KA125 BCF SCREEN BLACK COLOR', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-EPE-006-1-bs', 'EPE FOAM 50W*460L*25H MM (100 Pcs/Pack)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-EPE-007-bs', 'EPE FOAM 50W*540L*50H MM (100 Pcs/Pack)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-EPE-008-bs', 'EPE FOAM 50W*540L*25H MM  (100 Pcs/Pack)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-EPE-010-bs', 'EPE FOAM 50W*460L*50H MM  (100 Pcs/Pack)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-PAD-HR001-bs', 'PAD 260W*460L KI125/CA125/CA125 CF มัดละ 50 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-PAD-HR002-bs', 'PAD 460W*540L  KI125/CA125/CA125 C/F มัดละ 50 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-PAD-HR003-bs', 'PAD 300W*700L  KI125/CA125/CA125 C/F มัดละ 50 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-PAD-HR005-bs', 'PAD 300W*540L  KI125/CA125/CA125 C/F มัดละ 50 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-PAL-001-bs', 'WOODEN PALLET SIZE 980W*1140L*123H (4WAY) (HEAT TREATMENT) (เน้นสวยงาม ห้ามใช้ไม้ 3 หน้า และ ควบคุมความชื้น)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-PAL-001-1-bs', 'WOODEN PALLET SIZE 980W*1140L*123H (4WAY) (HEAT TREATMENT)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-PAL-024-bs', 'WOODEN PALLET SIZE 1140W*1470L*120H (HEAT TREATMENT)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-PAR-HR014AB-2-bs', 'PARTITION-A1 460W x 940L 1:4 , PARTITION-A2 460W x 1070L 1:3  KI150/CA125/CA125 CF มัดละ 5 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-PAR-HR10-bs', 'PARTITION SET SIZE : 455W x 540L x 450H (PTTA 445W*455L=7 PCS / PTTB 445W*540L=6 PCS) STD 5 PCS/PACK', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-PAR-HR10-PTT-A1-bs', 'PARTITION SIZE : 445W x 455L PTT-A1 KI150/CA125/CA125 C/F FOR PTT-A1 BS-PH9-PAR-HR10 HIO-1912007-00-00', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PH9-PAR-HR10-PTT-A2-bs', 'PARTITION SIZE : 445W x 540L PTT-A2 KI150/CA125/CA125 C/F FOR PTT-A2 BS-PH9-PAR-HR10 HIO-1912007-00-00', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-POLY SHEET (Roll)-bs', 'Poly Sheet HDPE SC-ROLL  W:240CM* L:300M*0.025T mm.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PP-HTET001-7-bs', 'WOODEN PALLET 4 Way 933W*1022L*100H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PRV-009-bs', 'PAD SIZE 1140Wx1140L (CA105/CA105/CA105 C/F)  (W46"*L44" 15/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PS0000676-bs', 'CARTON BOX 281W*801L (KA230/CA125/KA230 C/F 1:1 เป็นกล่องแล้ว SCREEN COLOR BLACK', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PTT-06-bs', 'PARTITION-06   SIZE 366W*1185L KA230/CA125*3/KA230  BC/F  1:30', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PTT-07-bs', 'PARTITION-07   107W * 1000L  KA230/CA125*3/KA230  BC/F 1:40', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PTTA1-B02A/1-bs', 'Z-NK001-PA119 PARTITION A1 BO2A-KD 320W*1014L  KI150/3M/KI150  BC/F (1:2) SPECIAL มัดละ 20 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PTTA2-B02A/1-bs', 'Z-NK001-PA220 PARTITION A2 B02A-KD 440W*506L  KI150/3M/KI150  BC/F (1:2) SPECIAL มัดละ 20 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PTTA3-B02A/1-bs', 'Z-NK001-PA321 PARTITION A3 B02A-KD 320W*506L  KI150/3M/KI150  BC/F (1:2) SPECIAL มัดละ 20 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-PTTA4-B02A/1-bs', 'Z-NK001-PA422 PARTITION A4 B02A-KD 440W*549L  KI150/3M/KI150  BC/F (1:2) SPECIAL มัดละ 20 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-RCF-002-bs', 'PAD SIZE 1100W*1100L CA125/CA125/CA125 CF (W44"*L43" 5/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-REF-001 Cancel-bs', 'CARTON  BOX  343W*1424L  (OD   265W*435L*83H)  KA185/CA125/KA185   C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-REF-001-1-bs', 'CARTON  BOX  343W*1424L  (OD   265W*435L*83H)  KA185/CA125/KA185   C/F Common AST-005 (10 ชิ้น/มัด) KPC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-REF-002-bs', 'ECO DRY 10 G.600 PCS/BOX', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-REIDAN-KUN-bs', 'REIDAN-KUN SIZE : 180W x 390L MM. (Color Black)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-REIDUN-KUN-bs', 'REIDUN-KUN SIZE : 180W x 390L MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-RPSO-008702-bs', 'CARTON  BOX  SIZE 415W*1804L  OD 255W*635L*165H MM.  KA230/CA125/KA230   C/F (20 ชิ้น / มัด) Joint GLUE', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-RPSO-008703-bs', 'CARTON  BOX  SIZE 476W*1622L  ID 230W*553L*230H MM.  KL175/CA125/KL175   C/F (20 ชิ้น / มัด) Joint GLUE', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-RSB-2312040045-1-bs', 'S/B  1410W*1323L KA150/CA125/KA150 CF 3:1 (W56"xL52" 1/8)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-RSB-2312080048-1-bs', 'SB SIZE 1308W*2008L KI185/CA125/KI185  C/F W52"*L79" 1/16', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-RSB-2313030020-bs', 'S/B 1003W*550L KA185/CA125/KA185 CF  (W40"xL21" 11/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-RSB-2313030021-bs', 'S/B 902W*1200L KA185/CA125/KA185 CF  (W36"xL47" 1/4)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-RSB-NSA-COM-013-bs', 'S/B 1156W*1378L  KI185/CA125/KI185 C/F  (W46"*L54" 1/4)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-RSB-NSA-COM-016-bs', 'S/B 1308W*1381L  KI185/CA125/KI185 C/F  (W52"*L54" 3/8)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-RSB-NSA-COM-021-bs', 'SB SIZE 1207W*1398L KI185/CA125/KI185  C/F W48"*L55" 1/16', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-RSB-SBSM-013-bs', 'S/B 1461W*1315L KI150/CA125/KI150 CF M.SBSM-013 (W58"*L51" 13/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-RSB-SBSM-013-1-bs', 'S/B 716W*1315L KI150/CA125/KI150 CF M.SBSM-013 (W58"*L51" 13/16 ผ่า2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SBSM-009-bs', 'CB280365140  BOX  OD:275W*360L*150H MM.  KA125/CA125/KA125 C/F SCREEN มัดละ 10 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SBSM-010-bs', 'PT245725003  725W*245L KA125/CA125/KA125 CF 1:1  PTT มัดละ 25 PCS.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SBSM-013-bs', 'CB270358070  BOX  OD 270W*360L*77H (343W*1285L) KI150/CA125*KI150 CF 1:1 SCREEN RED มัดละ20 PCS.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SBSM-013-H-bs', 'CB270358070  BOX  OD 270W*360L*77H (343W*1285L) KI150/CA125*KI150 CF 1:1 SCREEN RED มัดละ20 PCS. (NK Support Sheet Board)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SBSM-014-bs', 'CB070745100  BOX ASSY OD 76W*755L*123H BOX ASSY A 269W*859L KA125/CA125/KA125 CF 1:1 + BOX ASSY B 269W*859L KA125/CA125/KA125 CF 1:1  SCREEN RED มัดละ 20 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SBSM-015-1-bs', 'BOX 509W*1826L (OD:355*550*160H) KA125/CA125*3/KA125 BCF MODEL CB355550160  มัดละ10 PCS/PACK SCREEN ***แก้ไขระยะกล่องให้เท่ากัน***', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SBSM-015CANCELL-bs', 'BOX 509W*1817L (OD355*550*160H) KA125/CA125*3/KA125 BCF MODEL CB355550160  มัดละ10 PCS/PACK SCREEN', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SBSM-016-bs', 'PTT 565W*536L KA150/CA125/KA150 CF MODEL PT27353634  มัดละ 10 PCS/PACK', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SBSM-017-bs', ' ZERUST SHEET 700L*1400*0.06T (400 Pcs/Pack)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SBSM-018-bs', 'BB33052510 AIR PACK SHEET 330W*525L*10  (Pack-F) 150 Gram 3 Layer (200 Pcs/Pack)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SBSM-019-bs', 'CARTON BOX 616W*1124L (OD : 230W*320L*390H MM.) KI125/CA125/KI125 CF (มัดละ 20 ชิ้น)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SCN-012-bs', ' BOX 835W*1243L KA125/CA125/KA125 CF 1:1  FOR MODEL BRACK', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SCN-024-bs', ' BOX 835W*1243L KA125/CA125/KA125 CF 1:1  FOR MODEL BRACK', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SCN-026-bs', 'PTT-2B 85W*416L KA125/CA125/KA125 CF 1:4 FOR MODEL BRACK', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SCR-001 CANCEL-bs', 'CARTON  BOX  SIZE   OD   265W*435L*175H   KA185/CA125/KA185   C/F Common AST-004 มัดละ 10 ชิ้น KPC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SCR-002-bs', 'CARTON BOX SIZE OD 530W*880L*262H KA185/CA125*3/KA185  BC/F Common BS-AST-003 (5 ชิ้น/มัด) KPC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SCR-003-bs', 'ECO DRY 10 G.600 PCS/BOX', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SCR-004-bs', 'CARTON  BOX  SIZE 782W*1539L (OD 503W*1005L*288H)  KA230/CA125/KA230  C/F 1:1 Common AST-010 มัดละ 10 ชิ้น ตรงกลางเส้นเดียวรองกระดาษ', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SCR-006 CANCEL-bs', 'CARTON  BOX  343W*1424L SIZE  OD 265W*435L*83H  KA185/CA125/KA185 C/F PRINT RED DRA NO. SCR-1602008-01-00', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SCR-006-1-bs', 'CARTON  BOX  343W*1424L SIZE  OD 265W*435L*83H  KA185/CA125/KA185 C/F PRINT RED DRA NO. SCR-1602008-01-00 Common AST-005 มัดละ 10 ชิ้น KPC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SCR-007 CANCEL-bs', 'BOX 379W*1389L (OD 234W*1134L*152H) KA230/CA125*3/KA230 BC/F  1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SCR-007-1CANCELL-bs', 'BOX 379W*1389L (OD 234W*1134L*152H) KA230/CA125*3/KA230 BC/F  1:1 Common AST-017 มัดละ 10 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SCR-007-2-bs', 'BOX 379W*1392L (OD 234W*1134L*152H) KA230/CA125*3/KA230 BC/F  1:1 Common AST-017 มัดละ 10 ชิ้นมัดหัว-ท้ายรองกระดาษ', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SCR-007-2-H-bs', 'BOX 379W*1392L (OD 234W*1134L*152H) KA230/CA125*3/KA230 BC/F  1:1 Common AST-017 มัดละ 10 ชิ้นมัดหัว-ท้ายรองกระดาษ SB NK', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SCR-009 Cancel-bs', 'BOX OD : 234W*2024L*152H (KA230/CA125*3/KA230 BC/F) 379W*2279L 1:2 PRINT RED DRA NO.SCR-1602008-03-00', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SCR-009-1-bs', 'BOX OD : 234W*2024L*152H (KA230/CA125*3/KA230 BC/F) 379W*2279L 1:2 PRINT RED DRA NO.SCR-1602008-03-00 Common AST-015 KPC มัดละ 5 ชิ้น มัดหัว-ท้าย รองกระดาษ', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SCR-009-1-H-bs', 'BOX OD : 234W*2024L*152H (KA230/CA125*3/KA230 BC/F) 379W*2279L 1:2 PRINT RED DRA NO.SCR-1602008-03-00 Common AST-015 KPC  (SB NK KPC HELP) มัดละ 5 ชิ้น มัดหัว-ท้าย รองกระดาษ', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SCR-013 CANCEL-bs', 'BOX ASSY-A 379W*1548L (OD 234*1290*152H) KA185/CA125*3/KA185 BCF 1:1 SCREEN เย็บเป็นกล่องแล้ว', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SCR-013-1-bs', 'BOX ASSY-A 379W*1548L (OD 234*1290*152H) KA185/CA125*3/KA185 BCF 1:1 SCREEN เย็บเป็นกล่องแล้ว Common AST-033,AST-034 KPC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SCR-016-bs', 'Slip Sheet Size : 1070W*(100+1010+100)mm', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SE-001-bs', 'WOODEN PALLET 1100Wx1100Lx130H (FUMIGATION) 2WAY', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SE-002-bs', 'CARTON 284W*1140L  BOX ASS''Y GLUE (RSC)  205W*335L*85H MM.(KA150/KA150 C/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SE-005-bs', 'WOOD PALLET  SIZE  750*1100 *120H mm   (HEAT TREATMENT)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SE-005-1-bs', 'WOOD PALLET  SIZE  750*1100 *120H mm   (HEAT TREATMENT) แผ่นบนตีไม้เต็มไม่มีช่องห่าง', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SGB-014-bs', 'PAPER PAD  SIZE 145Wx213L (BI-WALL 40AA) มัดละ 50 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SGB-020-bs', 'SHEET BOARD SIZE 1200W*1200L KA125/CA125/KA125 CF (W48"*L47" 1/4) PKG.E2SC EXPORT.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SIAM-001-bs', 'PP BARND สายรัดกล่อง 15 T MM X 1200L  MM. สีฟ้า (8 KGS/ROLL)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SIAM-002-bs', 'CLIP STEEL LOCK PP BRAND /คลิบล๊อกสายรัด', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SIAM-025-bs', 'Cardboard  A  KL205/3CA125/KL205  BC/F  PRINTING    DIA  417 MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SIAM-028-bs', 'Cardboard  B  KL205/CA125/KL205  C/F  NOPRINT    DIA  417 MM', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SNC-STICHING-bs', 'HELP STITCHING', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SNC-STITCHING-100-bs', 'HELP STITCHING TOP TRAY 782W*562L*100H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SNC-STITCHING-70-bs', 'HELP STITCHING TOP TRAY 782W*562L*70H', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SNH-001-bs', 'PAPER PAD SIZE 950W x 810L x 15 MM. KA270/CA185*3/KA270 AAA/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SOM-039-bs', 'PP BARND สายรัดกล่อง 15 มม*1200 เมตร  สีดำ (8 KGS/ROLL)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SOM-053-bs', 'PAPER PAD CB (230-350 gsm) Size 40*47 inches', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SRI-001-bs', 'CARTON BOX  343W*1424L SIZE OD:265Wx435Lx83H (KA185/CA125/KA185 C/F)+PRINT COMMON AST-005 มัดละ 10 ชิ้น KPC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SRI-002-bs', 'CARTON BOX  435W*1424L SIZE OD:265Wx435Lx175H (KA185/CA125/KA185 C/F) +PRINTING COMMON AST-004 (10 ชิ้น / มัด) KPC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SRI-004-bs', 'ECO DRY 10 G.600 PCS/BOX', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SRI-005-bs', 'CARTON BOX  303W*1006L SIZE OD:210*285*100H (KA185/CA125*3/KA185 C/F) +PRINTING', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SRI-006-bs', 'CARTON BOX  323W*1076L SIZE OD:230*300*100H (KA185/CA125*3/KA185 C/F) +SCREEN COLOR RED', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-STD-005-bs', 'WOODEN PALLET 4 WAY SIZE 1100W*1100L*120H  (FUMIGATION)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-STD-006/1-bs', 'BOX SIZE 514W*1865L OD 367*540*130H 1:2  (KA230/CA125/KA230 C/F) BOX DC3  M. CONNWATER NEW', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-STD-007-bs', 'COVER 744W*515L KA125/CA125/KA125 CF 1:1 MODEL 14075-EZ35A CONN-WATER มัดละ 20 ชิ้น มัดหัว-ท้ายไม่รองกระดาษ', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-STD-008 CANCEL-bs', 'PTT 474W*515L KA125/CA125/KA125 CF 1:1 MODEL 14075-EZ35A CONN-WATER', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-STD-009-bs', 'PTT 770W*350L KA125/CA125/KA125 CF 1:1 MODEL 11060-4KV1A OUTLET ASSY WATER', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-STD-011-bs', 'PTT-A 341W*342L KA125/CA125/KA125 CF 1:1 MODEL 13049-JA01A INLET WATER มัดละ 50 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-STD-014-bs', 'PAD 940W*750L MM. (KA125/CA125/KA125 CF) (W38"L29" 9/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-STD-015-1-bs', 'PARTITION-A1 824W*349L MM. (KA125/CA125/KA125 CF) M.5JGOA มัดละ 25 ชิ้น ***แก้ไข Design***', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-STD-015CANCELL-bs', 'PARTITION-A1 824W*349L MM. (KA125/CA125/KA125 CF) M.5JGOA มัดละ 25 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-STD-016-bs', 'PAD 520W*349L MM. (KA125/CA125/KA125 CF) M.5JGOA มัดละ 25 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SUN-001/1-bs', '(BLUE)  PTT A  274W*259L 1:6 FUTURE BOARD 3 MM.+ PTT B 110W*337L 1:6 FUTURE BOARD 5 MM.) ประกอบแล้ว', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SUN-002/1-bs', '(Black) PTT A 274W*259L 1:6 FUTURE BOARD 3 MM.+PTT B 110W*337L 1:6 FUTURE BOARD 5 MM ประกอบแล้ว', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SUN-003-bs', 'BOX 431W*1236L TG446251-7180  ( KA185/CA125/KA185 C/F ) SCREEN', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SUN-003-H-bs', 'BOX 431W*1236L TG446251-7180  ( KA185/CA125/KA185 C/F ) SCREEN (HELP)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SUN-005-bs', 'BOX OD : 265W*435L*175L 435W*1424L KA185/CA125/KA185 C/F  เปลี่ยนแบบพิมพ์ Common AST-004 มัดละ 10 ชิ้น KPC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SUN-006-bs', 'PAD SIZE 257W*427L KA125/CA125/KA125 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SUN-009-bs', 'CARTON  BOX  SIZE  OD   265W*435L*83H   KA185/CA125/KA185   C/F Common AST-005 มัดละ 10 ชิ้น KPC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SWA-007-bs', 'ZERUST  BAG  100W* 150L * 0.08 MM 1:40 (Pack 500)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SWA-010-1-bs', 'AQUASORBIT 150 GM (100 Pcs/Box)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SWA-016-bs', 'BAG  (ANTI RUST) 4.8 cm.x25 cm.x0.08 mm.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SWA-016-1-bs', 'BAG  (ANTI RUST) 10 cm.x25 cm.x0.08 mm.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SWA-017-bs', 'AIR BUBBLE BAG 50 Gsm.2L Dai 44 cm. x 100 cm.(200 PCS./PACK)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SWA-018-bs', 'SILICA  WHITE 5 GM,PAPER', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SWA-018-1-bs', 'ECO DRY BEAD 5 g (Non Woven)  (1500 Pcs/Box)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SWA-021 CANCEL-bs', 'BOX OD : 343W*1314L KA230/3CA125/KA230 BC/F 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SWA-033-bs', 'LDPE COVER  BAG  1120MM * 1120MM * 920MM * 0.10MM (10 Pcs./Pack)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SWA-034-bs', 'WOODEN PALLET SIZE 1100W*1100L*120H (4WAY) HEAT TREATMENT  COMMON BS-FAE-050', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-SWA-041-bs', 'WOODEN PALLET :1100W*1100L*120H (มือ 2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-TBM-001-bs', 'SLEEVE 690W x 1928L (ID 750 x 1095 x 690 mm ) KA270/CA185/KA540/CA185/KA270 BC/F SCREEN COLOR RED&BLACK', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-TBM-003-bs', 'SLEEVE 345W x 1909L (ID 750 x 1095 x 345 mm ) KA270/CA185*3/KA270/CA185/KA270 BCB/F (Ref.BS-TBM-002) SCREEN COLOR RED', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-TCM-009-bs', '2237768-1  DESICCANT (AQUASORBIT 20GM,N/W (600 PCS/BOX))', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-TCM-013-bs', 'SLEEVE STITCHING 1010W*1976L TRI-WALL 100 AAA  TD-TCM-2205055-00-00', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-TCM-015-bs', 'HONEY COMB PAPER SHEET SIZE:800W*1200L*20T MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-TCM-016-bs', 'HONEY COMB PAPER SHEET SIZE:800W*1200L*30T MM.ไม่ต้องมัด On Pallet 50 PCS./Pallet', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-TCM-017-bs', 'HONEY COMB PAPER SHEET SIZE:1000W*1200L*30T MM.ไม่ต้องมัด On Pallet 50 PCS./Pallet', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-THERMAL BARRIER-bs', 'THERMAL BARRIER COATING', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-THF-001-bs', 'PAPER CORE size  2.3"(58mm) x 2mm x 1870mm (Fastenal)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-THF-002-bs', 'PAPER CORE size  2.3"(58mm) x 2mm x 3710mm (Fastenal)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-TKR-001-bs', 'Zerust Ferrous Gusset (24cm) 56 cm*80cm*0.08T mm.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-TKR-002-bs', 'Zerust Ferrous Bag : 25 cm * 50 cm * 0.08T mm.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-TKR-004-2-bs', 'INNER SLEEVE 234W*1704L KA150/CA125*3/KA150 BCF M.TYPE A INNER SLEEVE SET มัดละ 12 ชิ้น มัดเส้นเดียวด้าน L ไม่รองกระดาษ', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-TKR-007-1-bs', 'TOP PAD SIZE 705Wx750L KA150/CA125*3/KA150 BCF ทับรอย 65*575*65 M.TYPE A INNER SLEEVE SET  (W56"*L29" 9/16 ผ่า2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-TKR-007CANCELL-bs', 'TOP PAD SIZE 705Wx750L KA150/CA125*3/KA150 BCF ทับรอย 65*620*65 M.TYPE A INNER SLEEVE SET  (W56"*L29" 9/16 ผ่า2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-TKR-014-bs', 'LDPE Bag 224CM x 196CM x 0.10T MM.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-TKR-051-bs', 'CARTON BOX 560W*2188L KA185/CA125*3/KA185 BCF มัดละ 10 ชิ้น MODEL CONVERTER RT92,RT87,EJ88,EJ83 (ใช้กระดาษศานติ)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-TKR-055-bs', 'BOX 726W*2104L (OD:480W*560L*250H)  KA230/CA125/KA230 C/F 1:1 มัดละ 10 PCS. Jiont:GLUE  MODEL:577B(BODY) COMMON MODEL:577B(CAP)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-TKR-056 CANCEL-bs', 'PTT-A  110W*547L KA230/CA125/KA230 C/F 1:6  มัดละ 25 PCS. MODEL:577B(BODY) TKR-055 TO 058', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-TKR-057 CANCEL-bs', 'PTT-B  110W*467L KA230/CA125/KA230 C/F 1:6  มัดละ 25 PCS. MODEL:577B(BODY) TKR-055 TO 058', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-TKR-058-bs', 'SB SIZE 470W*547L KA230/CA125/KA230  C/F (W38"*L21"9/16 ผ่า 2) PAD MODEL:577B(BODY) COMMON MODEL:577B(CAP)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-TKR-062-bs', 'BOX 726W*2104L (OD:480W*560L*250H)  KA230/CA125/KA230 C/F 1:1 มัดละ 10 PCS. Jiont:GLUE  MODEL:577B(BODY) COMMON MODEL:577B(CAP)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-TKR-063CANCELLED-bs', 'PTT-A  70W*547L KA230/CA125/KA230 C/F  1:9 มัดละ 25 PCS. MODEL:577B(CAP)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-TKR-064CANCELLED-bs', 'PTT-B  70W*470L KA230/CA125/KA230 C/F  1:12 มัดละ 25 PCS. MODEL:577B(CAP)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-TKR-065-bs', 'SB SIZE 470W*547L KA230/CA125/KA230  C/F (W38"*L21"9/16 ผ่า 2) PAD MODEL:577B(BODY) COMMON MODEL:577B(CAP)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-TSH-014-bs', 'ZERUST FERROUS  COVER  BAG  1200*1200*1600*0.06 MM (COMMON)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-UACJ-003-bs', 'Polyester Sheet   Size 0.10 * 2300 * 2300 mm พับละ 1 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-UACJ-004-bs', 'Polyester Sheet   Size 0.22 * 2300 * 2300 mm พับละ 1 ชิ้น', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-UACJ-013-bs', 'Clear adhesive tape  (50W x  50m)   Size  50 W x 50m)  (108 Roll / Box)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-UACJ-016-bs', 'Drying agent  ( ECO DRY 500 G. NON WOVEN 25 PCS/BOX )', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-UACJ-017-1-bs', 'CLAER OPP TAPE 90 Micon 72Wx50M (56 Roll/Box)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-UACJ-020-bs', 'Polysheet  Size  0.10  X  1600  X 1600  (20 Pcs/Pack)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-UACJ-022-bs', 'Plastic Bag   Size  0.07 x 2000 x 2000  mm พับละ 1 ชิ้น PACK 20 PCS/PACK', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-UACJ-025-bs', 'POLY  BAG  SIZE 0.07T*2600MM*2600MM (20 Pcs/Pack)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-UACJ-026-bs', 'Poly Sheet Size 0.07 * 3800 * 5800 mm. (20 Pcs/Pack)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-UACJ-027-bs', 'POLY ROLL SIZE 0.07T*2000W (MM)*200M', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-UACJ-028-bs', 'POLY ROLL (LDPE) SIZE 0.07T*2500W (MM)*150M', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-UNS001/4-bs', 'UN 4G/Z1.4/S/21  CARTON ID 185*285*110H  516W*995L   KL205/CA125/KL205 C/F 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-UNS003/1 CANCEL-bs', '( 4W ) UN CARTON 4G/Z1.7/S  ID  290*295*166H KL205/CA125/KL205 C/F NEW UNCODE', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-UNS003/2CANCELLED-bs', '( 4W ) UN CARTON 4G/Z1.7/S/18  ID  290*295*166H 777W*1221L  KL205/CA125/KL205 C/F NEW UNCODE ( S/B NK )', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-UNS003/3CANCELL-bs', '( 4W ) UN CARTON 4G/Z4.2/S/19  ID  290*295*166H 777W*1221L  KL205/CA125/KL205 C/F NEW UNCODE ( S/B NK )', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-UNS003/4CANCELL-bs', '( 4W ) UN CARTON 4G/Z4.2/S/20  ID  290*295*166H 777W*1221L  KL205/CA125/KL205 C/F NEW UNCODE ( S/B NK )', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-UNS003/5-bs', '( 4W ) UN CARTON 4G/Z4.2/S/21  ID  290*295*166H 777W*1221L  KL205/CA125/KL205 C/F NEW UNCODE ( S/B NK )', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-UNS007/1 CANCEL-bs', '( 4W) CARTON BOX  ID 385W*663L*230H 1:1 CHANGE UN CODE  , PTT-A 489W*656L 1:1 , PTT-B 459W*656L 1:1 , PTT-W 390W*155L 1:2 , COVER 572W*390L 1:1  KL205/CA125*3/KL205 BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-UNS007/1-1 CANCEL-bs', '( 4W) CARTON BOX  ID 385W*663L*230H 1:1 CHANGE UN CODE   KL205/CA125*3/KL205 BC/F (10 ชิ้น / 1 มัด) Sheet Board NK', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-UNS008/1 CANCEL-bs', 'UN CARTON 4G/Z7.7/S  ID  638*920*223H (BOX 892W*1615L KL205/CA125*3/KL205 BC/F , PARTITION-A 621W*916L KL205/CA125*3/KL205 BC/F, PARTITION-B 571W*916L KL205/CA125*3/KL205 BC/F, PARTITION-W 644W*155L KL205/CA125*3/KL205 BC/F, COVER 718W*644L KL205/CA125*3/', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-UNS009/1 CANCEL-bs', '( 4W )  UN CARTON 4G/Z2.6/S/14  ID 185*375*120H  KL205/CA125/KL205 C/F NEW UNCODE', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-UNS009/2CANCELLED-bs', '( 4W )  UN CARTON 4G/Z2.6/S/18  ID 185*375*120H  569W*1175L KL205/CA125/KL205 C/F NEW UNCODE', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-UNS009/3CANCELL-bs', '( 4W )  UN CARTON 4G/Z3.6/S/19  ID 185*375*120H  569W*1175L KL205/CA125/KL205 C/F NEW UNCODE', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-UNS009/4CANCELL-bs', '( 4W )  UN CARTON 4G/Z3.5/S/20  ID 185*375*120H  569W*1175L KL205/CA125/KL205 C/F NEW UNCODE', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-UNS009/5-bs', '( 4W )  UN CARTON 4G/Z3.5/S/21  ID 185*375*120H  569W*1175L KL205/CA125/KL205 C/F NEW UNCODE', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-UNS010/1 CANCEL-bs', '(4W)  UN 4G /Z7.0/S 655*1480*102H(1).BOX745W*2158L 1:1 (2.)PARTITION-A 644W*1470L 1:2 (3).PARTITION-B 1365W*70L 1:3 KL205/M/KL205 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-YFT-001-bs', 'CARTON  BOX  343 W*1424L SIZE  OD   265W*435L*83H   KA185/CA125/KA185   C/F  COMMOMN AST-005', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-YRZ-007-bs', 'BOX 552W*1478L KA230/CA125/KA230 CF MODEL 72390-7800-000(FORNT)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-YRZ-010-bs', 'BOX 509W*1817L (OD355*550*160H) KA125/CA125*3/KA125 BCF MODEL CB355550160  10 PCS/PACK SCREEN', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-YRZ-011-bs', 'AIR BUBBLE 330W*525L*10MM (แบบเรียบ 2 ด้าน แบบแข็ง)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-YRZ-012-bs', 'SH7001400  VCI SHEET 700W*1400L*0.06T (Pack-F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-YRZ-074-bs', 'Sheet Board 500W*2220L KA125/CA125/KA125 CF (W40"*L87" 7/16 ผ่า2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BS-ZZB0299-bs', 'WOODEN PALLET 861W*1100L*120H (HEAT TREATMENT) MODEL PKG.SUNSHADE ASSY RR SIDE RH,LH) (RHYS-008)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'Color NSA-bs', 'Support printing Nisshinbo Somboon RED Color', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CONTAINERDRII-1-bs', 'DANA-AQUASORBIT 150 GM (100 Pcs/Box) USE 4:1 Package For Pack rear axle Nissan Ship to Brazil  & T6', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'D162 D-1/1-bs', 'CARTON BOX D162 D ย้าย SCREEN  (ราคาเป็นกล่อง)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DRUMBRAKE-bs', '224-0005-05  CARTON BOX DRUM BRAKE SCREEN (NISSAN) (ID) 991*534 KA230/CA125/KA230 (C)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HEAT SHIELD SHEET-1-bs', 'HEAT SHIELD SHEET TYPE:SP-FN', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HEAT SHIELD SHEET-2-bs', 'HEAT SHIELD SHEET TYPE:SP-HTR', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HEAT SHIELD SHEET-3-bs', 'HEAT SHIELD SHEET TYPE:SP-HTR (MAX TEMPERATURE 130) Sheet Only', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HEAT SHIELD SHEET-4-bs', 'HEAT SHIELD SHEET TYPE:SP-HTR Size : 1000Wx2500mm (L) Sheet Only', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HEAT SHIELD SHEET-5-bs', 'HEAT SHIELD SHEET FOR REDUCING POWER CONSUMPTION FOR AIR CONDITIONERS', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HEAT SHIELD SHEET-6-bs', 'INSTALLATION HEAT SHIELD SHEET FOR HOLD FURNANCE No.6', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOP-001-bs', 'ZERUST  FERROUS  SHEET  1100MM*2200MM*0.08MM (50 Pcs./Pack)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOP-002-bs', 'ZERUST  FERROUS  SHEET  1740MM*1100MM*0.08MM (50 Pcs./Pack)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOP-004-bs', 'LDPE  COVER  BAG  2370MM * 1270MM * 900MM * 0.07 MM  (10 Pcs./Pack)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOP-005-bs', 'LDPE  COVER  BAG  1100MM * 1200MM * 900MM * 0.07 MM (10 Pcs./Pack)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOP-006-bs', 'ฟิวเจอร์บอร์ด สีน้ำเงิน size 1100W * 1060L * T3 mm.', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOP-010-bs', 'BOTTOM  PAD  380W * 1020L  KA230/CA125/KA230  C/F (W46"*L40" 3/16 ผ่า 3)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOP-011-bs', 'LATERAL  PAD  380W * 1050L  KA230/CA125/KA230  C/F (W46"*L41" 3/8 ผ่า 3)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOP-012-bs', 'BOTTOM  PAD  500W * 1020L  KA230/CA125/KA230  C/F (W40"*L40" 3/16 ผ่า 2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOP-013-bs', 'DOWN  PAD  1700W * 1080 L *3T    (PP  BOARD)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOP-014-bs', 'LATERAL  PAD  500W * 1700 L    KA230/CA125/KA230  C/F (W40"*L66" 15/16 ผ่า 2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOP-035-bs', 'PP BOARD  1080W * 1640L *3T    (PP  BOARD) MBR BLUE', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOP-036-bs', 'SIDE L-R 1130W*1020L KA230/CA125/KA230 CF 1:2 75510/75511 3SBOAJD (W46"*L40" 3/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOP-037-bs', 'WIDE  L-R 1130W*1640L KA230/CA125/KA230 CF 1:2 75510/75511 3SBOAJD (W46"*L64" 5/8)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'INNER WALL-1-bs', 'INNER WALL SP-AL25 (INSTALLATION)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'INNERBOXDID-bs', 'INNER BOX PROFESSIONAL KIT DID   (AD)  WATER BASE  SIZE  621W*335L  mm   (4 COLORS / CB270)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'INNERBOXDID-10-bs', 'INNER BOX PROFESSIONAL KIT DID   (HDS) NEW  WATER BASE  SIZE  621W*335L  mm   (4 COLORS / CB270) NEW PRINT', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'INNERBOXDID-5-bs', 'INNER BOX PROFESSIONAL KIT DID   (HDS) NEW  WATER BASE  SIZE  621W*335L  mm   (4 COLORS / CB270)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'INNERBOXDID-7-bs', 'INNER BOX PROFESSIONAL KIT DID (AD3)  NEW  WATER BASE  SIZE  621W*335L  mm   (4 COLORS / CB270)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'INNERBOXDID-9-bs', 'INNER BOX PROFESSIONAL KIT DID (AD3)  NEW  WATER BASE  SIZE  621W*335L  mm   (4 COLORS / CB270) NEW PRINT', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT031/1-bs', 'Z-NK001-PB341  PTT B3 SIZE 396W*1012L KA230/CA125*3/KA230 BC/F 1:16 (381A)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LINEAR SQUARE TUBE-bs', 'LINEAR SQUARE TUBE # 35MM*35MM*1100L', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NHT-003-bs', 'CARTON BOX OD 265W*265L*125H  KA185/CA125*3/KA185 BC/F  (SCREEN PRINTING STH 0111101)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT261448-bs', 'TRAY & PARTITION ( NO  ASSY)  Detail   (1.)  TRAY 806Wx2100L KA185/CA125/KA185 C/F 1:1   (TOA)       (2.)   PARTITION 1533Wx70L KA185/CA125/KA185C/F 1:6   (TOA)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PINE WOOD-KIRIU-bs', '224-0008-68 Pine wood Size 1.5"*3"*3000 mm.(Heat Treatment)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PPBRAND-BS/BLACK-bs', 'PP BARND สายรัดกล่อง W15 mm.*L1200 M. สีดำ  (8 KGS/ROLL)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PPBRAND-BS/BLUE-bs', 'PP BARND สายรัดกล่อง W15 mm.*L1200 M. สีน้ำเงิน (8 KGS/ROLL)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'REWORK-bs', 'REWORK# PH9-PAL-001', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'STD-005-bs', 'WOODEN PALLET 4 WAY SIZE 1100W*1100L*120H  (FUMIGATION)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'Sticker Paper A4  (Kraft)-bs', 'สติ๊กเกอร์อเนกประสงค์ กระดาษคราฟท์  เอ4  สีน้ำตาล / Sticker Paper A4  Kraft support Jetkt', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-10OT4475-1-bs', 'S/B 1369W*1283L   KA230/CS110/KA230  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-224-0005-28-bs', 'S/B 1009W*1104L KA230/CA125/KA230  CF (W42"*L43" 1/2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312040008-bs', 'S/B  1285W*1297L KA185/CA125/KA185 CF 3:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312040009 CANCELL-bs', 'S/B  1276W*1132L KA185/CA125/KA185  CF (W52"*L44" 5/8)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312040010-bs', 'S/B 1488W*1270L KI185/CA125/KI185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312040045-1-bs', 'S/B  1410W*1323L KA150/CA125/KA150 CF 3:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312080048-1-bs', 'S/B  1308W*2008L KI185/CA125/KI185 CF 1:3 (W52"*L79" 1/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312080056-bs', 'S/B  1147W*1349L KI185/CA125/KI185 CF 3:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312080064-bs', 'S/B  1204W*1300L KA125/CA125/KA125 CF (W48"*L51" 3/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312080066-bs', 'S/B  1204W*1300L KA125/CA125/KA125 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2312080071-1-bs', 'S/B  1000W*1094L KI185/CA125/KI185 CF 4:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2313030016-1-bs', 'S/B  902W*1492L KA150/CA125*3/KA150  BCF (W36"*L58" 3/4) 2313030016, 2313030017', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-2313030016-2-bs', 'S/B  902W*1442L KA150/CA125*3/KA150  BCF (W36"*L56" 13/16) 2313030016', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-428AD-CB-bs', 'S/B  1225W*1411L KL205/CA125*3/KL150 BC 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-AST-004/1-bs', 'S/B  1382W*1424L KA185/CA125/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-AST-005-bs', 'S/B  1039W*1424L KA185/CA125/KA185 CF 2:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-AST-005/1-bs', 'S/B  1382W*1424L KA185/CA125/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BEISHIN-003-2-bs', 'S/B  1352W*1701L KA125/CA125*3/KA125 BCF 1:2 (W54"*L67")', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BEISHIN-013-PTT-A-bs', 'S/B  800W*1146L CA125/CA125/CA125 CF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BEISHIN-013-PTT-B-bs', 'S/B  800W*1026L CA125/CA125/CA125 CF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BEISHIN-020-bs', 'S/B 1856W*1254L KA125/3M/KA125 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BL12F-1-bs', 'S/B  1614W *1585L  KA230/ CA125*3 / KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BL12F-2-bs', 'S/B  1614W *1585L  KA230/ CS110*3 / KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BOX  PACKAGE FOR811-1-bs', 'S/B  1596W*1539L KA230/CS110*3/KA230 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BOX-B02A-bs', 'S/B 1510W*1585L KA230/CA125*3/KA230 BCF 1:2 BO2A-KD', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-2313030003-bs', 'S/B 1219W*1472L KA150/CA125*3/KA150   BCF (W50"*L58")', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-AAA-001-bs', 'S/B  1382W*1424L KA185/CA125/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-AAA-002-bs', 'S/B  1382W*1424L KA185/CA125/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BSA-ART-005/2-bs', 'S/B 1032W-1050L KA125/CA125/KA125 CF (W42"*L41" 3/8)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BSA-ART-005/3-bs', 'S/B 1032W-1035L KA125/CA125/KA125 CF (W42"*L40" 3/4)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BSA-AST-046-bs', 'PTT-A 820W*1204L KA125/CA125*3/KA125 BCF 1 : 4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BSA-AST-046/1-bs', 'PTT-B 1360W*1204L KA125/CA125*3/KA125 BCF 1:8', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BSA-AST-046/2-bs', 'PTT-C 1250W*990L KA125/CA125*3/KA125 BCF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BSA-AST-046-1-bs', 'S/B PTT-A 825W*602L KA125/CA125*3/KA125 BCF 1 : 2 (W66"*L23" 3/4 ผ่า2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BSA-AUT-008-bs', 'S/B 960W*1830L KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BSA-BEISHIN-017/2-bs', 'PARTITION B SIZE 1106W*1062L CA125/CA125/CA125 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BSA-BEISHIN-017/2-1-bs', 'PARTITION B SIZE 1105W*1062L CA125/CA125/CA125 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BSA-BEISHIN-017-1-bs', 'S/B  1054W*1120L CA125/CA125/CA125 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BSA-BEISHIN-028/1-bs', 'S/B 1200W*762L  KA125/CA125/KA125 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BSA-BEISHIN-028/2-bs', 'S/B 1200W*832L  KA125/CA125/KA125 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-AKE-006-bs', 'S/B  1168W*1062L KI150/CA125/KI150  CF (W48"*L41" 13/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-AKE-006/1-bs', 'S/B 1010W*930L CA125/CA125/CA125 CF 1:16', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-AKE-006/1-1 CANCEL-bs', 'S/B 1003W*920L CA125/CA125/CA125 CF 1:16 (W40"*L36" 1/4)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-AKE-014-bs', 'S/B  1306W*1312L KA150/CA125*3/KA150 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-AKE-023-bs', 'S/B  758W*579L KA125/CA125/KA125 CF 1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BSA-SBSM-012/1-1-bs', 'S/B 1160W*1056L KA125/CS110/KA125  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BSA-SBSM-012/1-2-bs', 'S/B 1156W*1041L KA125/CA125/KA125  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-AST-045-bs', 'BOX 1220W*1596L KA230/CA125/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-AUT-007-bs', 'S/B 872W*1830L KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-BEISHIN-021-bs', 'S/B 1280W*754L  KA125/CA125/KA125 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-BEISHIN-022-bs', 'S/B 747W*754L  KA125/CA125/KA125 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-BEISHIN-027-bs', 'S/B 1461W*1629L  KA125/CA125/KA125 C/F 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-BEISHIN-029-bs', 'S/B 762W*832L  KA125/CA125/KA125 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-BEP-001-bs', 'S/B  1382W*1424L KA185/CA125/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-BS-005/2-bs', 'S/B  1342W*1288L  KI125/CA125/KI125  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-BS-006-bs', 'S/B  956W*1763L KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-CST-001-bs', 'S/B  1114W*996L KA185/CA125*3/KA185 BCF (W46"*L39" 1/4)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-FJA-005/1/2/3-bs', 'S/B 1501W*1260L  KA185/CA125*3/KA185 BCF 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-FJA-006/1-1-bs', 'S/B 1145W*860L KA125/CA125/KA125 CF (W46"*L33" 7/8)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-FJA-015-1-bs', 'S/B 960W*720L CA125/CA125/CA125 CF (W40"*L28" 3/8)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-HOP-045-bs', 'S/B 796WW*1174L KA150/CA125*3/KA150 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-JNC-028-1-bs', 'S/B 780W*780L  KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-JNC-032-bs', 'S/B 770W*710LL  KA150/CA125/KA150  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-KTF-006-1-bs', 'S/B 1014W*1429 L  KA125/CA125*3/KA125 BC/F  1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-KTF-007-bs', 'S/B 1728W*2145LKA125/CA125*3/KA125 BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-KTF-014-bs', 'S/B 1054W*1362L KI150/CA125/KI150 CF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-KTF-014-1-bs', 'S/B 1056W*1365L KI150/CA125/KI150 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-KTF-015-bs', 'S/B 1564W*1266L KI150/CA125*3/KI150 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-KTF-016-bs', 'S/B 1457W*2289L KI150/CA125/KI150 C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-KTF-017-1-bs', 'S/B 1054W*1365L KI150/CA125/KI150 C/F (W42''*L53" 3/4)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-KYB-002-bs', 'S/B 1044W*1747L KA230/CA125/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-OMI-007-bs', 'SB 992W*1639L KL205/CA125/KL205 CF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-SBSM-010-1-bs', 'S/B 1490W*1060L KA125/CS110/KA125  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-SBSM-015-bs', 'S/B 1028W*1817L  KA125/CA125*3/KA125  BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-SBSM-015-1-bs', 'S/B 1028W*1817L  KA125/CS110*3/KA125  BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-SCN-024-bs', 'S/B 1800W*1263L  KA125/CA125/KA125  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-SCR-001-bs', 'S/B  1315W*1424L KA185/CA125/KA185 CF 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-SCR-006-bs', 'S/B  1039W*1424L KA185/CA125/KA185 CF 2:1 (W42"*L56" 1/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-SCR-007-bs', 'S/B 1526W*1389L  KA230/CA125*3/KA230  BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-SCR-009-bs', 'S/B  1526W*2279L KA230/CA125*3/KA230 BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-SCR-013-bs', 'S/B  768W*1548L KA185/CA125*3/KA185 BC/F (W62"*L61" ผ่า 2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-SRI-005-bs', 'S/B  919W*1006L KA185/CA125*3/KA185 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-STD-007-1-bs', 'S/B 1528W*1070L KA125/CS110/KA125 CF 1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-STD-009-bs', 'S/B 790W*1110L KA125/CA125/KA125 CF 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-STD-011-1-bs', 'S/B 722W*724L KA125/CS110/KA125 CF 1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-SWA-021-1-bs', 'S/B  1382W*1314L KA230/CA105*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-YFT-001-bs', 'S/B 1382W*1424L KA185/CA125/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-BS-YRZ-007-bs', 'S/B 1114W*1478L KA230/CA125/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-CC0002799B-2CANCELL-bs', 'S/B 1002W*2258L KI150/CA125*3/KI150 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-CC0002940A-1-bs', 'S/B 1052W*972L  KA230/CS110/KA230  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-CYC-007-bs', 'S/B 1215W*1200L  KA230/CA185*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-CYC-009-bs', 'S/B 1215W*1200L  KA230/CA185*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-D162 D-1/1-bs', 'S/B 1207W*2119L KA230/CA125*3/KA230  BCF 1:2 (W48"*L83" 7/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-DRUMBRAKE-1-bs', 'S/B 1011W*1104L KA230/CA125/KA230  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JNC-003/1-bs', 'S/B 1440W*720L  KA185/CA125/KA185 CF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JNC-003-1-bs', 'S/B 1440W*720L  KA185/CA125/KA185 CF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JNC-004-bs', 'S/B 920W*920L  KA150/CA125*3/KA150 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JNC-004-1-bs', 'S/B 920W*920L  KA185/CA125/KA185 CF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JNC-005-bs', 'S/B 940W*940L  KA150/CA125*3/KA150 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JNC-011-1-bs', 'S/B 900W*900L  KA185/CA125/KA185 CF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JNC-012/1-bs', 'S/B 1400W*700L  KA185/CA125/KA185 CF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JNC-012-1-bs', 'S/B 1400W*700L  KA185/CA125/KA185 CF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JNC-013-1-bs', 'S/B 1480W*740L  KA185/CA125/KA185 CF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JNC-014-1-bs', 'S/B 1520W*760L  KA185/CA125/KA185 CF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JNC-015-1-bs', 'S/B 1540W*1680L  KA150/CA125/KA150 CF 1:14', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JNC-017-1-bs', 'S/B 880W*880L  KA185/CA125/KA185 CF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JNC-024-1-bs', 'S/B 1080W*540L  KA185/CA125/KA185 CF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JT030-1-bs', 'S/B 1248W*1068 KA230/CS110*3/KA230 BCF 3:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JVT-001/TRAY CANCEL-bs', 'S/B 1160W*780L CA125/CA125/CA125  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JVT-003-bs', 'S/B 1218W*1434L KA185/CA125/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-JVT-004-bs', 'S/B 1336W*1218L KA185/CA125/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-KRYM-005-PTT-A-bs', 'S/B  1155W*1233L KA230/CA125/KA230 CF  1:9', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-KRYM-005-PTT-B-bs', 'S/B  1076W*1120L  KA185/CA125*3/KA185  BCF 1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NAGANO-003-bs', 'S/B  1270W*1507L  KA230/CA125/KA230  C/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NAGANO-005-bs', 'S/B 1339W*1007L KA125/CA125*3/KA125 BCF (W54"*L39" 11/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NAGANO-007-bs', 'S/B 453W*1816L KA230/CA125*3/KA230 BCF (W54"*L71" 1/2 ผ่า 3)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NHT-003-1-bs', 'S/B  1156W*1075L KA185/CA125*3/KA185 BCF 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NSA-COM-01-bs', 'S/B 1105W*1312L  KA185/CA125/KA185 C/F  (W44"*L51" 11/16) 2312040016=2, 2312040005=4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NSA-COM-010-bs', 'S/B 1308W*1290L  KA185/CA125/KA185 C/F  2312040008 1:3 (W52"*L50" 13/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NSA-COM-011-bs', 'S/B 1207W*1300L  KA125/CA125/KA125 C/F  2312080064 1:3 , 2312080064 1:3 (W48"*L51" 13/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NSA-COM-012-bs', 'S/B 953W*1338L  KI185/CA125/KI185 C/F  2312080078=4, 2312080054=2 (W38"*L52" 11/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NSA-COM-013-bs', 'S/B 1156W*1378L  KI185/CA125/KI185 C/F  2312080077=8 (W46"*L54" 5/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NSA-COM-014-bs', 'S/B 1105W*1338L  KI185/CA125/KI185 C/F  2312080078 =6  (W44"*L52" 11/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NSA-COM-015-bs', 'S/B 1715W*1283L  KA150/CA125/KA150 C/F  (W68"*L50" 9/16) 2312040039=4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NSA-COM-016-bs', 'S/B 1308W*1381L  KI185/CA125/KI185 C/F  (W52"*L54" 3/8) 2312080072=10, 2312080052=3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NSA-COM-017-bs', 'S/B 1613W*1338L  KA185/CA125/KA185 C/F  (W64"*L52" 11/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NSA-COM-018-bs', 'S/B 1562W*1142L  KI185/CA125/KI185 C/F  (W62"*L45")', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NSA-COM-019-bs', 'S/B 902W*1313L  KA150/CA125/KA150 C/F  (W36"*L51" 3/4)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NSA-COM-02-bs', 'S/B 2019W*1380L  KI185/CA125/KI185 C/F  (W80"*L54" 3/8) 231208076=2, 2312080078=2, 2312080072=2, 2312080071, 4, 2312080077=2, 2312080073=1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NSA-COM-020-bs', 'S/B 1207W*1318L  KA185/CA125/KA185 C/F  (W48"*L51" 11/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NSA-COM-021-bs', 'S/B 1207W*1398L  KI185/CA125/KI185 C/F  (W48"*L55" 1/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NSA-COM-022-bs', 'S/B 1207W*1330L  KA125/CA125/KA125 C/F  (W48"*L52" 3/8)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NSA-COM-03-bs', 'S/B 1257W*2009L  KI185/CA125/KI185 C/F  (W50"*L79" 1/8) 2312080046=1, 2312080048=1, 2312080052=1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NSA-COM-04-bs', 'S/B 953W*1492L  KA150/CA125*3/KA150 BC/F  (W38"*L58" 3/4) 2313030016=2, 2313030003=2, 2313030017=2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NSA-COM-05-bs', 'S/B 1054W*1312L  KA185/CA125/KA185 C/F  (W42"*L51" 11/16) 2312040038=8, 2312040042=6, 2312040044=6', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NSA-COM-06-bs', 'S/B 1461W*1272L  KA185/CA125/KA185 C/F  (W58"*L50" 1/8) 2312040007=10, 2312040040=12', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NSA-COM-07-bs', 'S/B 1512W*1132L  KI185/CA125/KI185 C/F  (W60"*L44" 5/8) 2312040019=3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NSA-COM-08-bs', 'S/B 1003W*1270L  KA125/CA125/KA125 C/F  (W40"*L50" ) 2312080067=6, 2312080069=6, 2312080068=2, 2312080070=2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NSA-COM-09-bs', 'S/B 1512W*1358L  KI185/CA125/KI185 C/F  2312040011 1:3 (W60"*L53" 1/2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-NT4349-bs', 'S/B 1553W*720L KA185/CA125/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-PTT-06-bs', 'S/B  1158W*1205L KA230/CA125*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-PTT-07-bs', 'S/B  896W*1020L  KA230/CA125*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-PTTA1-B02A/1-bs', 'S/B 1020W*1052L KI150/CA125*3/KI150 BCF 3:1 BO2A-KD', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-PTTA1-B02A/1-1-bs', 'S/B 351W*1034L KI150/CA125*3/KI150 BCF 1:2 (W42"L40"3/4 ผ่า 3)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-PTTA2-B02A/1-bs', 'S/B 920W*1052L KI150/CA125*3/KI150 BCF 4:1 BO2A-KD', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-PTTA2-B02A/1-1-bs', 'S/B 476W*526L KI150/CA125*3/KI150 BCF 1:2 (W38"L20"3/4 ผ่า 2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-PTTA3-B02A/1-bs', 'S/B 1020W*1052L KI150/CA125*3/KI150 BCF 3:1 BO2A-KD', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-PTTA3-B02A/1-1-bs', 'S/B 351W*526L KI150/CA125*3/KI150 BCF 1:2 (W42"L20"3/4 ผ่า 3)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-PTTA4-B02A/1-bs', 'S/B 920W*1138L KI150/CA125*3/KI150 BCF 4:1 BO2A-KD', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-PTTA4-B02A/1-1-bs', 'S/B 476W*569L KI150/CA125*3/KI150 BCF 1:2 (W38"L22"7/16  ผ่า 2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-PTTA-L12F-KD-bs', 'S/B 1136W*1054L KA230/CA125*3/KA230 BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-PTTB1D41N+D54T-1-bs', 'S/B 1176W*1068L KA230/CS110*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-PTTB2D41N+D54T-1-bs', 'S/B 1176W*1068L KA230/CS110*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-PTTB3D41N+D54T-1-bs', 'S/B 1176W*1068L KA230/CS110*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-PTTB4D41N+D54T-1-bs', 'S/B 1176W*1068L KA230/CS110*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-PTTB-L12F-KD-1-bs', 'S/B 1200W*1048L  KA185/CA125*3/KA185 BCF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-PTTC-L12F-KD-1-bs', 'S/B 1200W*1048L  KA185/CA125*3/KA185 BCF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-PTTE-L12F-KD-bs', 'S/B 1392W *1173L  KA185 / 3M / KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAHB-008-bs', 'S/B  1378W*1492L KA150/CA125*3/KA150  BCF (W56"*L58" 3/4)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAHB-008-1-bs', 'S/B  456W*1492L KA150/CA125*3/KA150  BCF  1:1 ทับรอย 133*190*133 (W38"*L58" 3/4 ผ่า 2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAIR-052-1-bs', 'S/B 1092W*1252L KA185/CS110*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAKE-023-bs', 'S/B  1213W*1316L  KA230/CA185*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAKE-048-bs', 'S/B  660W*657L  KA185/CS110*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAKE-048-1-bs', 'S/B  660W*657L  KA185/CA125*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAKE-049-bs', 'S/B  1152W*1220L  KA125/CS110/KA125  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAKE-049-1-bs', 'S/B  1152W*1220L  KA125/CA125/KA125  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAUT-001-bs', 'S/B 1229W*1326L KA185/CA125*3/KA185 BC/F 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAUT-002-bs', 'S/B 1310W*1097L KA185/CA125*3/KA185 BC/F 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAUT-002-1-bs', 'S/B 1310W*1097L KA185/CS110*3/KA185 BC/F 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAUT-002-3-bs', 'S/B 1308W*1097L KA185/CA125*3/KA185 BC/F 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAUT-003 L-bs', 'S/B 1148W*1036L KA125/CA125*3/KA125  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAUT-003 R-bs', 'S/B 1148W*1036L KA125/CA125*3/KA125  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAUT-004-bs', 'S/B 974W*1136L KA125/CA125*3/KA125  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAUT-004-1-bs', 'S/B 974W*1136L KA125/CS110*3/KA125  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAUT-005-bs', 'S/B 974W*1136L KA125/CA125*3/KA125  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RAUT-005-1-bs', 'S/B 974W*1136L KA125/CS110*3/KA125  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RBOX-FUJI-40-bs', 'S/B 892W*1352L KA230/CA125/KA230  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RCYC-011-bs', 'S/B  1003W*1564L  KA230/CA125/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RCYC-012-bs', 'S/B 1410W*1962 KA230/CA125/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RCYC-013-bs', 'S/B 1410W*1638L KA230/CA125/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RCYC-014-bs', 'S/B  1063W*1063 KA185/CA125/KA185 BF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-020-bs', 'S/B 900W*948L KA230/CA185*3/KA230 BC 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-021-bs', 'S/B 900W*948L KA230/CA185*3/KA230 BC 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-037-1-bs', 'S/B 1261W*785L KA230/CS110*3/KA230 BC 1:0.5', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-076-bs', 'S/B 1238W*1086L KA230/CA125*3/KA230 BCF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-077-bs', 'S/B 1238W*1086L KA230/CA125*3/KA230 BCF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-108-2-bs', 'S/B 810W*1435L KA150/CS110*3/KA150  BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-109-2-bs', 'S/B 810W*1258L KA150/CS110*3/KA150  BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-114-2-bs', 'S/B 810W*1035L KA150/CS110*3/KA150  BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-124-1-bs', 'S/B 1311W*1306L KA185/CS110*3/KA185   BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-125-1-bs', 'S/B 1280W*1050L  KA185/CS110*3/KA185 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-126-1-bs', 'S/B  1050W*1050L  KA150/CS110*3/KA150  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-128-1-bs', 'S/B 1311W*1306L KA185/CS110*3/KA185  BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-141-1-bs', 'S/B 1228W*1116L KA230/CS110*3/KA230 1:12 BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-142-1-bs', 'S/B 1228W*1116L KA230/CS110*3/KA230 1:12 BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDAN-161-1-bs', 'S/B  954W*670L  KA185/CA150/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDIC-007-1-bs', 'S/B 1392W*1117L KA185/CS110*3/KA185 BCF 2:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDIC-007-2-bs', 'S/B 696W*1117L KA230/CA125*3/KA230 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDIC-008-1-bs', 'S/B 1008W*1156L KA185/CS110*3/KA185 BCF 8:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDIC-008-2-bs', 'S/B 1003W*1156L KA185/CA125*3/KA185 BCF 8:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDIC-009-1-bs', 'S/B 1003W*1156L KA185/CA125*3/KA185 BCF 8:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDIC-010-1-bs', 'S/B 1003W*1156L KA185/CA125*3/KA185 BCF 8:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDIC-011/1-1-bs', 'S/B 1140W*1278L KA185/CS110*3/KA185 BCF 6:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDIC-013-1-bs', 'S/B 926W*1309L KA230/CS110*3/KA230 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDIC-013-2-bs', 'S/B 908W*1309L KA230/CA185*3/KA230 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDIC-014-1-bs', 'S/B 926W*1309L KA230/CS110*3/KA230 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDIC-014-2-bs', 'S/B 926W*1309L KA230/CA185*3/KA230 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDIC-015-1-bs', 'S/B 1312W*1200L KA230/CS110*3/KA230 BCF 8:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDIC-016-1-bs', 'S/B 1312W*1200L KA230/CS110*3/KA230 BCF 8:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDIC-017-1-bs', 'S/B 1312W*1200L KA230/CS110*3/KA230 BCF 8:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDIC-018-1-bs', 'S/B 1398W*1352L KA230/CS110*3/KA230 BCF 018/4:1,019/3:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RDIC-019-1-bs', 'S/B 1398W*1352L KA230/CS110*3/KA230 BCF 018/4:1,019/3:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RECA-001-bs', 'S/B  1640W*1040L KL150/CA125/KL150  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RECA-001-1-bs', 'S/B  1613W*1040L KL150/CA125/KL150  CF (W64"L40" 15/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RECA-001-2-bs', 'S/B  1613W*2046L KL150/CA125/KL150  CF 1:2 (W64"L80" 9/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RECA-002-bs', 'S/B  1640W*1040L KL150/CA125/KL150  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RECA-003-bs', 'S/B  1096W*1040L KL150/CA125/KL150  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-REF-001-bs', 'S/B 1039W*1424L KA185/CA125/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RFAE-044 CANCELL-bs', 'S/B  910W*1650L KA230/CA125*3/KA230 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RFAE-045 CANCELL-bs', 'S/B  946W*1650L KA230/CA125*3/KA230 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RFAE-056-bs', 'S/B  1160W*1752L KA230/CA125*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RFAE-057-bs', 'S/B  1160W*1752L KA230/CA125*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RFAE-058-bs', 'S/B  1160W*1752L KA230/CA125*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RHOW-001-1-bs', 'S/B 1695W*2270L KA230/CS110*3/KA230 BC/F 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RHOW-024-1-bs', 'S/B 1092W*1950L KA230/CS110*3/KA230 BC/F 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RHOW-025-1-bs', 'S/B 1092W*1370L KA230/CS110*3/KA230 BC/F 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RHOW-026-2-bs', 'S/B 1260W*1390L KA230/CS110*3/KA230 BC/F 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RHYS-002-bs', 'S/B  1154W*1336L KA125/CS110*3/KA125  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RHYS-003-bs', 'S/B  880W*1488L KA230/CA125/KA230  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RHYS-003-1-bs', 'S/B  880W*1468L KA230/CA125/KA230  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RHYS-003-2-bs', 'S/B  902W*1468L KA230/CA125/KA230  CF (W36"*L57" 13/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RHYS-004-bs', 'S/B  922W*1116L KA185/CA125*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RHYS-005-bs', 'S/B  1154W*1336L KA125/CS110*3/KA125  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RJTK-020-1-bs', 'S/B  892W*1975L KA185/CS110*3/KA185 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RJTK-033-1-bs', 'S/B 1054W*1576L KA230/CA125/KA230 CF 1:3  MODEL:PINION VALVE  ( W42"*L62" 1/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RJTK-070-1-bs', 'S/B  920W*982L    KA185/CS110*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RJTK-071-1-bs', 'S/B  920W*1111L    KA185/CS110*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RJTK-072-1-bs', 'S/B  920W*1111L    KA185/CS110*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RJTK-073-1-bs', 'S/B  920W*756L    KA185/CS110*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RJTK-075-1-bs', 'S/B  1329W*1345L    KA230/CS110*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RJTK-079-bs', 'S/B  645W*1098L    KA185/CA125*3/KA185  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-064-bs', 'S/B 1180W*1346L  KA230/CA185*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-066-bs', 'S/B 736W*1092L  KA230/CA125*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-067-bs', 'S/B 736W*1092L  KA230/CA125*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-067-1-bs', 'S/B 736W*1092L  KA230/CS110*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-069-bs', 'S/B 1180W*1346L  KA230/CA185*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-072-1-bs', 'S/B  940W*1056L  KA230/CS110/KA230  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-072-3-bs', 'S/B  470W*1056L  KA230/CA125/KA230  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-073-1-bs', 'S/B  924W*1043L  KA230/CS110/KA230  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-073-2-bs', 'S/B  462W*1043L  KA230/CA125/KA230  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-081-2-bs', 'S/B 467W*1056L KA230/CA125/KA230 CF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-082-2-bs', 'S/B 459W*1043L KA230/CA125/KA230 CF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-088-1-bs', 'S/B 1040W*1086L KA230/CS110/KA230 CF 1:2 MODEL M09', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-088-2-bs', 'S/B 520W*1086L KA230/CA125/KA230 CF 1:1 MODEL M09', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-089-1-bs', 'S/B 1024W*915L KA230/CS110/KA230 CF 1:2 MODEL M09', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RKIR-089-2-bs', 'S/B 512W*915L KA230/CA125/KA230 CF 1:1 MODEL M09', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RMSE-001-2/1-bs', 'S/B 1660W*1177L KA230/CS110*3/KA230  BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RMSE-001-4-bs', 'S/B 1660W*1172L KA230/CS110*3/KA230  BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RMSE-002-1-bs', 'S/B 1544W*1188L KA185/CS110*3/KA185  BCF 1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RMSE-003-1-bs', 'S/B 915W*742L KA185/CS110*3/KA185  BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RMSE-007-2-bs', 'S/B 784W*1340L KA230/CS110*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RMSE-008-1-bs', 'S/B 1136W*916L KA230/CS110*3/KA230 BCF 1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RMSE-014-1-bs', 'S/B 1108W*1108L KA230/CS110*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RMSE-015-3/1-bs', 'S/B 1498W*1808L KA230/CS110*3/KA230  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNDK-001-bs', 'S/B 772W*949L KA150/CA125/KA150 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNDK-003-bs', 'S/B 1046W*1171L KA185/CA125/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNDK-003/1-bs', 'S/B 986W*1152L KA185/CA125/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNDK-004-bs', 'S/B 1046W*1171L KA185/CA125/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNDK-004/1-bs', 'S/B 986W*1152L KA185/CA125/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-063-1-bs', 'S/B 1200W*1040L  KA125/CS110*3/KA125  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-072-1-bs', 'S/B 854W*1484L  KA185/CS110/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-074-1-bs', 'S/B 966W*1094L  KA185/CS110/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-085-1-bs', 'S/B 1032W*1184L  KA125/CS110*3/KA125  BCF 8:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-085-2-bs', 'S/B 1032W*1184L  KA125/CA105*3/KA125  BCF 8:1 (W42"*L46" 5/8)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-086-2-bs', 'S/B 1110W*1248L  KA125/CA105*3/KA125  BCF 8:1 (W46"*L49" 3/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-087-2-bs', 'S/B 1110W*1120L  KA125/CA105*3/KA125  BCF (W44"*L44" 1/8)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-101-1-bs', 'S/B 956W*1663L KA185/CS110/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-101-2-bs', 'S/B 956W*1663L KA185/CA105/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-102-1-bs', 'S/B 1640W*1640L  KA185/CS110/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-102-2-bs', 'S/B 1640W*1640L  KA185/CA105/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-103-2-bs', 'S/B 1640W*1640L  KA185/CA105/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-104-1-bs', 'S/B 1680W*1640L  KA125/CA105*3/KA125  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-105-1-bs', 'S/B 1640W*1640L  KA185/CA105/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-106-2-bs', 'S/B 1680W*1640L  KA125/CA105*3/KA125  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-111-1-bs', 'S/B 1302W*2221L KA230/CS110*3/KA230 BC 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-129-bs', 'S/B 1206W*1164L KA230/CA125/KA230 C 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-130-bs', 'S/B 1206W*1164L KA230/CA125/KA230 C 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-131-bs', 'S/B 1014W*1018L KA230/CA125/KA230 C 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-140-bs', 'S/B 1302W*2221L KA230/CA125*3/KA230 BC 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-143-1/1-bs', 'S/B  1534W*2247L KA185/CS110/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-144-1-bs', 'S/B  812W*1040L KA185/CS110/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-158-1-bs', 'S/B 724W*1040L KA185/CS110/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-160-1-bs', 'S/B  812W*1040L KA185/CS110/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-177-1-bs', 'S/B 697W*1084L KA230/CS110/KA230  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-178-1-bs', 'S/B 1040W*968L KA185/CS110/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-180-1-bs', 'S/B 840W*1176L KA185/CS110/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-182-bs', 'S/B 955W*1776L KA125/CA125*3/KA125 BCF (W40"*L69" 15/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-195-bs', 'S/B  768W*2247L KA185/CA125/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-197-bs', 'S/B 768W*2247L KA185/CA125/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-198-bs', 'S/B 1288W*1040L KA185/CA125/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-199-bs', 'S/B 1120W*1208L KA185/CA125/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-200-bs', 'S/B  768W*2247L KA185/CA125/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-201-bs', 'S/B  1374W*1048L KA185/CA125/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-202-bs', 'S/B  1374W*1048L KA185/CA125/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-203-bs', 'S/B 1032W*1184L  KA125/CA105*3/KA125  BCF 8:1 (common SVR-RNHP-085-2) (W42"*L46" 5/8)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-204-bs', 'S/B 1110W*1248L  KA125/CA105*3/KA125  BCF 8:1(common SVR-RNHP-086-2) (W46"*L49" 3/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-205-bs', 'S/B 1110W*1120L  KA125/CA105*3/KA125  BCF(common SVR-RNHP-087-2) (W46"*L44" 1/8)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHP-209-bs', 'S/B 942W*1760L KA230/CA125/KA230 CF 1:1 (W38"*L69" 5/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHS-028-1-bs', 'S/B 1140W*922L KA230/CS110*3/KA230 BC/F 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHS-030-1-bs', 'S/B 1140W*1009L  KA230/CS110*3/KA230 BC/F 1:5', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHS-032-1-bs', 'S/B 1140W*943L KA230/CS110*3/KA230 BC/F 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHS-033-1-bs', 'S/B 1140W*1704L KA230/CS110*3/KA230 BC/F 1:8', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNHS-034-1-bs', 'S/B 1140W*1009L KA230/CS110*3/KA230 BC/F 1:4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNSB-008-1-bs', 'S/B 1318W*1166L KA230/CS110/KA230 CF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNSB-009-1-bs', 'S/B 1318W*1166L KA230/CS110/KA230 CF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNSB-010-1-bs', 'S/B 1385W*1405L KA230/CS110*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNSB-014-1-bs', 'S/B 1385W*1405L KA230/CS110*3/KA230 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNSB-036-1-bs', 'S/B 1325W*1325L KA185/CS110*3/KA185 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNSB-037-1-bs', 'S/B 1288W*1215L KA185/CS110*3/KA185 BCF 1:12', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNSB-038-1-bs', 'S/B 1288W*1215L KA185/CS110*3/KA185 BCF 1:12', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNSB-044-1-bs', 'S/B 1110W*928L KA125/CS110/KA125 CF 1:60', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNSB-050-1-bs', 'S/B 1114W*1090L KA185/CS110*3/KA185 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RNSB-051-1-bs', 'S/B 1132W*1140L KA185/CS110*3/KA185 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSAN-015-bs', 'S/B  1312W*1023L  KA125/CA125*3/KA125  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSAN-016-bs', 'S/B  1164W*1260L  KA125/CA125*3/KA125  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSAN-018-bs', 'S/B  1260W*1160L KA125/CA125*3/KA125  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSEW-001-1-bs', 'S/B 1156W*1156L  KL205/CA185/KL205 BF 1:16 (W46"*L45" 1/2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSEW-002-1-bs', 'S/B 1156W*1156L  KL205/CA185/KL205 BF 1:16 (W46"*L45" 1/2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSGB-085-bs', 'S/B 1243W*1286L KL205/CA125*3/KL205 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSGB-087/1-bs', 'S/B 1010W*2117L KL205/CA125*3/KL205 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSGB-090-bs', 'S/B 1243W*1286L KL205/CA125*3/KL205 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSGB-091-bs', 'S/B 1337W*1221L KL205/CA125*3/KL205 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSGB-094-bs', 'S/B 1010W*2147L KL205/CA125*3/KL205 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSGB-094-1-bs', 'S/B 1003W*2147L KL205/CA125*3/KL205 BCF 1:1 (W40"L84" 9/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSGB-101-bs', 'S/B 1337W*1221L KL205/CA125*3/KL205 BCF 1:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSGB-117-1-bs', 'S/B 1003W*960L  KA125/CA125*3/KA125  BCF 1:16 (W40"*L37" 13/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSMT-001-2-bs', 'S/B 1448W*2093L KA185/CS110/KA185  CF  1 : 2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSMT-003-1-bs', 'S/B 1050W*1050L KA125/CS110*3/KA125 BCF 1 : 4', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSMT-006-1-bs', 'S/B 1080W*1335L KA125/CS110/KA125  CF  1:9', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSMT-009-1-bs', 'S/B 1080W*1060L KA125/CS110/KA125  CF  1:6', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSMT-010-bs', 'S/B 1448W*2107L KA185/CA125/KA185  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSMT-014-1-bs', 'S/B 1020W*1338L KA125/CS110/KA125  CF  1:9', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNH-010-bs', 'S/B 935W*1180L KA125/CA125*3/KA125 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNH-010-1-bs', 'S/B 952W*1180L KA125/CA125*3/KA125 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNH-011-bs', 'S/B 1180W*1089L KA125/CA125*3/KA125 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNH-011-1-bs', 'S/B 952W*1180L KA125/CA125*3/KA125 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNH-012-bs', 'S/B 1402W*1351L KA125/CA125*3/KA125 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNH-018/019-bs', 'SHEET BOARD 820W*706L  KA125/CS110*3/KA125  BC/F  1 : 4 MODEL: V3,V4 PTT-A2 / A3 (400W*334L)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNH-020-bs', 'SHEET BOARD 806W*740L  KA125/CS110/KA125  C/F  1 : 2 MODEL:COIL V3,V4 COVER-A', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNH-021-bs', 'SHEET BOARD 518W*1100L  KA125/CS110/KA125  C/F  1 : 2 MODEL:COIL V3,V4 COVER-B', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNH-022-bs', 'SHEET BOARD 910W*1140L  KA125/CS110*3/KA125  BC/F  1 : 2 MODEL:COIL V3,V4 PTT-C1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNH-023-bs', 'SHEET BOARD 910W*1186L  KA125/CS110*3/KA125  BC/F  1 : 2 MODEL:COIL V3,V4 PTT-C2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNH-024-bs', 'SHEET BOARD 910W*1344L  KA125/CS110*3/KA125  BC/F  1 : 4 MODEL:COIL V3,V4 CORNER-A', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSNH-025-bs', 'SHEET BOARD 416W*840L  KA125/CS110*3/KA125  BC/F  1 : 32 MODEL:COIL V3,V4 STOPPER', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RSWA-001-1-bs', 'S/B 1377W*1406L KA230/CS110*3/KA230 BCF 1:3', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTSH-035-1-bs', 'S/B  1436W*2091L KA230/CS110*3/KA230 BC', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTSH-038-bs', 'S/B  1433W*2104L KA230/CA125*3/KA230 BC/F', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTSL-001-1-bs', 'S/B 1274W*1330L KA185/CS110*3/KA185 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTSL-002-1-bs', 'S/B 1282W*1040L KA230/CS110/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTSL-003-1-bs', 'S/B 1314W*1137L KA230/CS110/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTSL-004-1-bs', 'S/B 1274W*1330L KA185/CS110*3/KA185 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTSL-008-1-bs', 'S/B 1040W*2207L  KA230/CS110*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RTSL-013-1-bs', 'S/B 1166W*1126L KA230/CS110/KA230 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RYMH-002-bs', 'S/B 1054W*1402L KA230/CA125/KA230 C/F 1:6', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RYRZ-004-1-bs', 'S/B 1400W*1100L  KA125/CS110*3/KA125  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RYRZ-005-1-bs', 'S/B 1820W*1100L  KA125/CS110*3/KA125  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RYRZ-039-bs', 'S/B 1320W*1376L KA230/CS110*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RYRZ-039-1-bs', 'S/B 1320W*1376L KA230/CA125*3/KA230 BCF (W54*L54" 3/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RYRZ-040-bs', 'S/B 1320W*1685L KA230/CS110*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RYRZ-040-1-bs', 'S/B 1320W*1685L KA230/CA125*3/KA230 BCF (W54"*L66" 3/8)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RYRZ-041-bs', 'S/B 1080W*1140L KA230/CS110*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RYRZ-041-1-bs', 'S/B 1080W*1140L KA230/CA125*3/KA230 BCF (W44"*L44" 15/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RYRZ-042-bs', 'S/B 1320W*1091L KA230/CS110*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RYRZ-042-1-bs', 'S/B 1320W*1091L KA230/CA125*3/KA230 BCF (W54"*L43")', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RYRZ-043-bs', 'S/B 1080W*1335L KA230/CS110*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RYRZ-044-bs', 'S/B 1320W*1440L KA230/CS110*3/KA230 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-RYRZ-044-1-bs', 'S/B 1320W*1440L KA230/CA125*3/KA230 BCF (W54"*L56" 3/4)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SBSM-013-bs', 'S/B 1039W*1285L KI150/CA125/KI150 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SBSM-013-1-bs', 'S/B 1461W*1315L KI150/CA125/KI150 CF M.SBSM-013 (W58"*L51" 13/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SBSM-014-bs', 'S/B 1086W*859L KA125/CA125/KA125  CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SCR-002-bs', 'S/B 1568W*1442L KA185/CA125*3/KA185  BCF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SCR-006-bs', 'S/B 1039W*1424L KA185/CA125/KA185  CF 1:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SIAM-023-1-bs', 'S/B  1054W*1076L KL205/CA125/KL205 CF 2:1', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SIAM-025-bs', 'S/B  854W*854L KL205/CA125*3/KL205 BCF 2:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SIAM-028-bs', 'S/B  854W*854L KL205/CA125/KL205 CF 2:2', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SIAM-033-bs', 'S/B 1368W*1368L KL205/CA125/KL205 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SIAM-034-bs', 'S/B 1368W*1368L KL205/CA125*3/KL205 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SIAM-035-bs', 'S/B 1166W*1166L KL205/CA125*3/KL205  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SIAM-036-bs', 'S/B 1166W*1166L KL205/CA125/KL205 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SUN-003-bs', 'S/B 1293W*1236L KA185/CA125/KA185 CF 1:3 (W52"*L48" 11/16)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-SUN-005-bs', 'S/B  1315W*1424L KA185/CA125/KA185 CF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-UNS008 / COVER-bs', 'S/B 1476W*700L KL205/3M/KL205 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-UNS008 / PTT-A-bs', 'S/B 1282W*936L KL205/CA125*3/KL205  BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-UNS008 / PTT-B-bs', 'S/B 1182W*936L KL205/3M/KL205 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-UNS008 / PTT-W-bs', 'S/B 1328W*700L KL205/3M/KL205 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SVR-UNS008-BOX-bs', 'S/B 1804W*1625L KL205/CA125*3/KL205 BCF', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SWA-010-bs', 'CONTAINER  DRY  150G (100 pcs/box) ( 1:2)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SWA-021 cancel-bs', 'BOX OD : 240W*1050L*110H MM. (KA230/3CA125/KA230 BC/F)', 0, now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TAPE-KIRIU-bs', '224-0002-02  TAPE ผ้า 3*30Y  (36 ROLL / BOX )  สีน้ำเงิน', 0, now(), now(), 'BS');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM TABLE "products" where type='BS'`);
  }
}
