import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertProductFG1702590239996 implements MigrationInterface {
  name = 'InsertProductFG1702590239996';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '48820-fg', '48820-NK068  48820-1HJOA SHAFT  ASSY  STEERING   COLUME  LOWER   (NK001-SVN28-N20)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '304153-fg', 'BOX M20  OD  350*700*225   COLUMN  ASSY  2:1  L42L  ( 304153)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '304154-fg', 'PARTITION  SET  M20     COLUMN  ASSY  2:1  L42L  (304154)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808960-fg', '17B50118342A Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808962-fg', '17B50118342C Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808963-fg', '17B50118342D Packing Specification (PCS = 136 Baht)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808964-fg', '17B50118342E Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808966-fg', '17B50118757 Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808967-fg', '17B50118759  Packing Specification (PCS = 149 Baht)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808968-fg', '17B50118762 Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808969-fg', '17B50118765 Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808970-fg', '17B50118767 Packing Specification (PCS = 140 Baht)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808971-fg', '17B50118771 Packing Specification (PCS = 141 Baht)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808972-fg', '17B50118772 Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808973-fg', '17B50118773 Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808974-fg', '17B50118774 Packing Specification (PCS = 149 Baht)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808975-fg', '17B50118783 Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808976-fg', '17B50118809 Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808977-fg', '17B50118816 Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808978-fg', '17B50119004 Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808979-fg', '17B50119006 Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808980-fg', '17B50119764 Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808981-fg', '17B50119780 Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808982-fg', '17B50119933 Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808983-fg', '17B50120000 Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808984-fg', '17B50120758 Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808985-fg', '17B50120760 Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808986-fg', '17B50120761 Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808987-fg', '17B50120763A Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808988-fg', '17B50120763B Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808989-fg', '17B50120763D Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808992-fg', '17B50120781 Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808993-fg', '17B50120786 Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808994-fg', '17B50120818 Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808995-fg', '17B50120934 Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808997-fg', '17B50338768 Packing Specification (PCS = 165 Baht)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808998-fg', '17B50338769 Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5808999-fg', '17B50338770 Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5809000-fg', '17B50338775 Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5810110-fg', 'CC0002800A CAP-A 624W*464L (KI150/CA125*3/KI150  BC/F) AIRCON-INDOOR-A PACK 20 PCS (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5810121-fg', 'CC0002937A PARTITION-A 880W*610L KA230/M/KA230  C/F  XY-RAM PACK 20 PCS (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5810122-fg', 'CC0002938A PARTITION-B 243W*466L KA230/M/KA230 C/F  XY-RAM PACK 50 PCS(PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5810123-fg', 'CC0002939A CUSHION  610L*50W*20T (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5810124-fg', 'CC0002940A PARTITION-C 503W*466L KA230/M/KA230 C/F  XY-RAM PACK 20 PCS (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5814887-fg', '17B50120779 Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5814905-fg', '17B50118785 Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5814906-fg', '17B50118811 Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5814907-fg', '17B50119002 Packing Specification (PCS = 221 Baht)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5814908-fg', '17B50119003 Packing Specification (PCS = 189 Baht)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5814909-fg', '17B50119788 Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5814910-fg', '17B50119817 Packing Specification (PCS = 181 Baht)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5814911-fg', '17B50120001A Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5814912-fg', '17B50120001B Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5814915-fg', '17B50120347 Packing Specification (PCS = 122 Baht)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5814916-fg', '17B50120810 Packing Specification (PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '9343534-fg', 'Paper Reel  24', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '9343535-fg', 'Paper Reel  34', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '9343536-fg', 'Paper Reel  156', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '39120036-fg', 'BODY PACKAGE HSL-EDGE-BOARD 12-000-51252 (Conner ID : 75*75*8P*190L (5T) KB450)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '39130009-fg', 'BODY PACKAGE PAPER REEL SIZE : 800(300)29MM', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '71001540-fg', 'CARTON BOX  OD  600*1700*740  MM', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '71001572-fg', 'Box  OD Size  800W*1800L*870H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '71001908-fg', 'Carton Box 370*320*195 mm  (G029)   (1 Set = 1 Pcs)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '71001909-fg', 'Carton Box 980*1140*1102 mm  (G030)   ( 1  Set = 1  PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '71001910-fg', 'Carton Box 1087*1142*1125 mm  (G031)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '71001911-fg', 'KPPP-00022  PACKING  FOR  GM131UK  (CARTON BOX 602*1010*840 MM)   (G032)   (1SET = 1  PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '71002726-fg', 'CARTON BOX  800*2060*1025  MM.(KA230/3CA125/KA230 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '71002727-fg', 'CARTON BOX  650*1970*730  MM', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '407300280-fg', 'COVER ASSY OD : 150W*150L MM', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '407300290-fg', 'PAPER PIPE 56*670 MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '602010504-fg', 'PAPER PIPE OD : 56W*890L MM', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '602010507-fg', 'COVER ASSY OD : 180W*180L MM', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2313030006-fg', 'PSB-GCP/T6 (456W*1492L) KA150/CA125*3/KA150 BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2313030008-fg', 'Continental  1  Layer  (H195 mm) - B1', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2313030009-fg', 'CONTAINENTAL  2  LAYER  (H 390  mm)-B2', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2313030010-fg', 'CONTAINENTAL  3  LAYER  (H 585  mm)-B3', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2313030011-fg', 'CONTAINENTAL  4  LAYER  (H 780  mm)-B4', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2315010003-fg', 'PBB-DrBA-YP5-EX (PACKAGE FOR MODEL : SUZUKI YP5)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2315010004-fg', 'PACKAGE FOR MODEL H60A-LT27_EX  (PAPER TRAY 1:4 + PAD 1:1)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2315010008-fg', 'PACKAGE FOR MODEL H60A-LT27_EX  (PAPER TRAY 1:5 + PAD 1:1)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2315010009-fg', 'PACKAGE   PBB-JAZZ14_EX (SET)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '3311200880-fg', 'FIBER ANGLE  OD  50x50x5MM.x1090L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '3311200890-fg', 'FIBER ANGLE  OD  50x50x5MM.x1030L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '3311200900-fg', 'FIBER ANGLE  OD  50x50x5MM.x870L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '9352170072-fg', 'HARD ANGLE 44*44*8P*950L  CP', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '9352170089-fg', 'HARD ANGLE 44*44*8P*265L  CP', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '9352170096-fg', 'HARD ANGLE 44*44*8P*750L  CP', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '9352170201-fg', 'HARD ANGLE 80*80*5.3T*440L KB', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '9352170218-fg', 'HARD ANGLE 80*80*5.3T*380L KB', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '9354885004-fg', 'PAPER ANGLE L383  (ID : 30*40*383L MM.)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '9356504002-fg', 'HARD ANGLE 44*44*8P*423L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '9363267006-fg', 'HARD ANGLE 44*44*8P*982L  CP', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '9365614013-fg', 'HARD ANGLE 44*44*8P*315L  CP', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '9365614020-fg', 'HARD ANGLE 44*44*8P*355L  CP', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '9371200026-fg', 'FLAT BOARD 60W*5T/7P*770L(HARD ANGLE)CP', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '9371616018-fg', 'FLAT BOARD 70W*15T/21P*301L(HARD ANGLE)CP', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '9378127012-fg', 'FLAT BOARD 45W*15T/21P*273L  (FB/CB)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '9378127029-fg', 'FLAT BOARD 70W*15T/21P*273L  (FB/CB)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '9380832003-fg', 'FLAT BOADR B', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), ' PACKAGE H60A(R5T)-fg', 'PACKAGE  FOR  NISSAN H60A (R5T)  Pack 5:1 (Working day 08.00-17.45)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '1271271200A28-fg', 'CUSHION 127W*127T/28P*1200L(A/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0013-fg', 'TOP CAP (KA230/CA185x3/KA230 BC/F) SMNx1JA', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0014-fg', 'SLEEVE (STICKER RED) + CORNER (KA230/CA185x3/KA230 BC/F + KB450) SMNx1JA', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0015-fg', 'BOX OD SIZE 152W x 313L x106H (KA150/CA125x3/KA150 C/F) SMNx1JA  (1:54)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0016-fg', 'PAD SIZE 144W x 305L SMNx1JA   (1:108)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0017-fg', 'BOTTOM CAP (KA230/CA185x3/KA230 BC/F) SMNx1JA', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0018-fg', 'WOODEN PALLET 2 WAY (HEAT TREATMENT) SMNX1JA', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0127-fg', 'WOODEN PALLET SIZE : 1140W*1160L*135H  SMA2104', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0128-fg', 'WOODEN PALLET SIZE : 1130W*1260L*135H SVB9213', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0130-fg', 'TOP CAP (KA230/CA125*3/KA230 BC/F) ID SIZE 1050W*1156L*110H SMA2104', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0131-fg', 'SLEEVE (ASSY) ID:1019W*1125L*240H +CORNER 44*44*7P*240L (KA230/CA125*3*KA230 BC/F +KB450) ID 1084W*1114L+STICKER SMA2104', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0132-fg', 'BOX ID SIZE 160W*365L*68H (KA185/CA125/KA185 C/F)+PRINTING BLACK COLOR SMA2104 (1:54)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0133-fg', 'PAD SIZE 154Wx 359L SMA2104   (1:108)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0134-fg', 'BOTOM CAP (KA230/CA125*3/KA230 BC/F) SIZE ID : 1050W*1156L*110H SMA2104', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0135-fg', 'TOP CAP (KA230/CA125*3/KA230 BC/F) ID SIZE 1050W*1231L*110H SVB9213', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0136-fg', 'SLEEVE (ASSY) ID : 1019W*1200L*226H +CORNER SIZE : 44*44*7P*226L (KA230/CA125*3*KA230 BC/F +KB450) STICKER SVB9213', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0137-fg', 'BOX ID SIZE 160W*390L*60H (KA185/CA125/KA185 C/F)+PRINTING BLACK COLOR SVB9213 (1:54)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0138-fg', 'PAD SIZE 154Wx 384L SVB9213   (1:108)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0139-fg', 'BOTOM CAP (KA230/CA125*3/KA230 BC/F) SIZE ID : 1050W*1231L*110H SVB9213', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0146-fg', 'TOP CAP (KA230/CA185x3/KA230 BC/F) SMA2104', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0147-fg', 'SLEEVE (ASSY) ID : 1086W*1161L*460H +CORNER SIZE : 44*44*7P*460L (KA230/CA185*3*KA230 BC/F +KB450) STICKER SMA2104', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0148-fg', 'BOX OD SIZE 262W x 375L x115H (KA150/CA125/KA150 C/F) SMA2104  (1:48)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0149-fg', 'PAD SIZE 250Wx 365L (KA150/CA125/KA150 C/F) SMA2104    (1:96)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0150-fg', 'BOTOM CAP (KA230/CA125*3/KA230 BC/F)  SMA2104', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0169-fg', 'TOP CAP SIZE : 1130W*1130L*110H MM.  SMN0000', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0170-fg', 'SLEEVE+CORNER  SIZE : 1099W*1110L*448H MM.  SMN0000', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0171-fg', 'BOX SIZE : 269W*354L*112H MM.  SMN0000', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0172-fg', 'BOTTOM CAP : 1130W*1130L*110H MM.SMN0000', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0173-fg', 'WOODEN PALLET 4 WAY 1105W*1116L*111H (Heat treatment) SMN0000', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0174-fg', 'CASE & PAPER PALLET ASSY OD : 422W*880L*205H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0184-fg', 'TOP CAP SIZE (OD) W-887 x L-979 x H-110 MM (KA230/3CA185/KA230 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0185-fg', 'SLEEVE+CORNER SIZE (OD) W-857 x L-942 x H-320 MM (KA230/3CA185/KA230 BC/F+KB450)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0186-fg', 'BOTTOM CAP SIZE (OD) W-887 x L-979 x H-110 MM (KA230/3CA185/KA230 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0188-fg', 'CASE & PAPER PALLET ASSY OD : 334W*686L*240H  KA', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0194-fg', 'TOP CAP SIZE ID :W-1075 x L-1170 x H-110 MM', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0195-fg', 'SLEEVE ASSY SIZE ID : W-1019 x L-1125 x H-240 MM (WITH CORNER & STICKER)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0196-fg', 'BOX SIZE OD : W-143 x L-278 x H-116 MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0197-fg', 'PAD SIZE OD : W-135 x L-270 MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0198-fg', 'BOTTOM CAP SIZE ID : W-1075 x L-1170 x H-110 MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0213-fg', 'TOP CAP SIZE : 769W*1146L*105H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0214-fg', 'SLEEVE SET SIZE : 738W*1126L*924H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0215-fg', 'CARTON BOX SIZE : 275W*358L*132H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0217-fg', 'BOTTOM CAP : 769W*1146L*105H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0218-fg', 'WOODEN PALLET SIZE : 769W*1146L*135H MM (WOOD)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0245-fg', 'TOP CAP SIZE OD:1075Wx1170Lx70H MM. (KA230/KA230 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0246-fg', 'SLEEVE ASSY SIZE OD :1043Wx1149Lx190H MM. (KA230/KA230 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0247-fg', 'BOX SIZE OD : 143Wx278Lx94H MM. (KA150/KA150 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0248-fg', 'PAD SIZE OD : 129Wx264L MM. (KA125/KA125 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '14PC0249-fg', 'BOTTOM CAP SIZE OD:1075Wx1170Lx70H MM. (KA230/KA230 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50118342-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50118342A-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50118342B-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50118342C-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50118342D-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50118342E-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50118342F-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50118757 Cancel-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50118759-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50118762-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50118765-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50118767-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50118771-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50118772-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50118773-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50118774-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50118783-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50118785-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50118809-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50118811-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50118816-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50119002-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50119003-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50119004-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50119006-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50119764-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50119780-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50119788-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50119817-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50119933-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50120000-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50120001A-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50120001B-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50120347-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50120758-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50120760-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50120761-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50120763A-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50120763B-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50120763B,C,D-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50120763D-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50120768-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50120775-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50120779-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50120781-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50120786-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50120810-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50120818-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50120934-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50338768-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50338769-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50338770-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '17B50338775-fg', 'Packing Specification', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2315010004-1-fg', 'PACKAGE FOR MODEL H60A-LT27_EX  (PAPER TRAY 1:4 + PAD 1:1) New Top cover Pad', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2315010005 Cancel-fg', 'PACKAGE FOR MODEL H60A-LT30_EX  (PAPER TRAY 1:4 + PAD 1:1)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2315010005-1-fg', 'PACKAGE FOR MODEL H60A-LT30_EX  (PAPER TRAY 1:5 + PAD 1:1)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2315010005-2-fg', 'PACKAGE FOR MODEL H60A-LT30_EX  (PAPER TRAY 1:5 + PAD 1:1) New spec of Cover pad', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '2315010005-3-fg', 'PACKAGE FOR MODEL H60A-LT30_EX (3 Layer)  (PAPER TRAY 1:3 + PAD 1:1) (Pack 27)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '28500-1-fg', '28500-NK071  28500-1HAOA CONTROLLER ASSY - POWER STEERING (300*684)  KI150/CA125/KI50  B/F SCREEN', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '405APA1140-fg', 'FIBER  ANGLE  OD 50*50*5P*1140L  AP500', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '405APA1200-fg', 'FIBER  ANGLE  OD 50*50*5P*1200L  AP500', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '405GBA0150-fg', 'Fiber  Angle  OD  50*50*5P*150L  GB', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '405GBA0630-fg', 'HARD ANGLE  OD  50*50*5P*630L  GB500', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '405GBA0890-fg', 'HARD ANGLE  OD  50*50*5P*890L   GB', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '405GBA0970-fg', 'HARD ANGLE  OD  50*50*5P*970L  GB500', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '405GBA0990-fg', 'HARD ANGLE  OD  50*50*5P*990L   GB', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '405GBA1020-fg', 'HARD ANGLE  OD  50*50*5P*1020L  GB500', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '405GBA1030-fg', 'HARD ANGLE  OD  50*50*5P*1030L  GB500', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '405GBA1050-fg', 'HARD ANGLE  OD  50*50*5P*1050L  GB500', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '405GBA1100-fg', 'Fiber  Angle  OD  50*50*5P*1100L  GB', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '405GBA2200-fg', 'HARD ANGLE  OD  50*50*5P*2200L  GB500', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '444CBA0830-MAX-fg', 'PAPER CORNER  ID 44*44*2.8/4P*830L  CB', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '444CBA1040-fg', 'HARD ANGLE  44*44*4P*1040L  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '444CBA1100-fg', 'HARD ANGLE  ID 44*44*4P*1100L  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '444KBA0230 Cancel-fg', 'HARD ANGLE  ID 44*44*7P*230L KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '444KBA1800-fg', 'HARD ANGLE 44x44x7Px1800L KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '444KBA2000-fg', 'HARD ANGLE 44*44*4P*2000L  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '445APA0885-fg', 'HARD  ANGLE  44*44*5P*885  GB', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '445CBA0960-D-fg', 'HARD ANGLE 44*44*5P*960L  CB', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '445GBA0100-fg', 'HARD ANGLE  44*44*5P*100L  (GB)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '445GBA0920-fg', 'HARD ANGLE 44*44*5P*920L  GB', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '445GBA0950-fg', 'HARD ANGLE 44*44*5P*950L  GB', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '445GBA1100-fg', 'HARD ANGLE  44*44*5P*1100L  GB', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '445GBA1198-fg', 'HARD ANGLE 44*44*5P*1198L (GB)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '445GBA1200-fg', 'HARD ANGLE 44*44*5P*1200L  GB', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '445KBA0927-fg', 'HARD ANGLE  44x44x5Px927L KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '445KBA1750-fg', 'HARD ANGLE 44*44*5P*1750L  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '446CBA0810-fg', 'HARD ANGLE 44*44*6P*810L (CB)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '446CBA0930-fg', 'HARD ANGLE 44*44*6P*930L (CB)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '446CBA0970-fg', 'HARD ANGLE  44*44*6P*970L  CB', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '446KB1110-fg', 'HARD ANGLE  44*44*6P*1110L  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '446KBA0395-fg', 'HARD ANGLE  44*44*6P*395L  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '446KBA0815-fg', 'CONNER 44x44x6Px815L KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '446KBA0860-fg', 'HARD ANGLE  44*44*6P*860L  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '446KBA1050-fg', 'HARD ANGLE  44*44*6P*1050L  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '447CBA0060-fg', 'HARD ANGLE  44*44*7P*60L  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '447CBA0560-fg', 'HARD ANGLE  44*44*7P*560L  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '447CBA0820-fg', 'CORNER  SUPPORT  (5MM)   OD  50*50*7P*820L  CB', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '447CBA0850-fg', 'HARD ANGLE  44*44*7P*850L  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '447CBA0920-fg', 'Corner Support  OD :  50*50*7P*920L  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '447CBA0970 (CCI)-fg', 'HARD ANGLE  44*44*7P*970L  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '447CBA0980-fg', 'HARD ANGLE  44*44*7P*980L  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '447CBA1000-fg', 'HARD ANGLE  44*44*7P*1000L KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '447CBA1030-fg', 'Z-NK001-HA41N-4  HARD  ANGLE  44*44*7P*1030L  CB', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '447CBA1090-fg', 'CORNER  SUPPORT  (5MM)  OD  50*50*7P*1090L   CB', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '447CBA1200-fg', 'HARD ANGLE 44*44*7P*1200L  CB', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '447CBA1300-fg', 'Corner  Support    50*50*1300    (ID  44*44*7P*1300L)  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '447CBA1330-fg', 'HARD ANGLE  44*44*7P*1330L  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '447CBA1460-fg', 'HARD ANGLE  44*44*7P*1460L  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '447CBA1800-fg', 'HARD ANGLE  44*44*7P*1800L  CB', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '447CBA2000-fg', 'HARD  ANGLE  44*44*7P*2000L    KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '447GBA0050-fg', 'HARD ANGLE 44*44*7P*50L (GB500)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '447KBA0050-fg', 'CORNER SUPPORT SIZE : 44*44*7P*50L (KB450)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '447KBA0230-fg', 'HARD ANGLE  ID 44*44*7P*230L KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '447KBA100-fg', 'Corner support 44*44*7P*100L (KB 450)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '447KBA1200-fg', 'HARD ANGLE  44*44*7P*1200L  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '447KBA1750-fg', 'HARD ANGLE 44*44*7P*1750L  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '448CBA0150-fg', 'HARD ANGLE 44*44*8P*150L  MM  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '448CBA0850-fg', 'HARD ANGLE  44*44*8P*850L   KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '448CBA0870-fg', 'PAPER CORNER  DE00070  44*44*8P*870L  KB450  PAPER004', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '448CBA0900-fg', 'Z-NK001-HAG06  HARD ANGLE 44*44*8P*900L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '448CBA1500-SIAM-fg', 'HARD ANGLE 44*44*8P*1500L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '448CBA1700-fg', 'HARD ANGLE  44*44*8P*1700L  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '448CBA2020-fg', 'HARD ANGLE 44*44*8P*2020L (CB)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '448KBA0075-fg', 'HARD ANGLE 44*44*8P*75L  MM  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '448KBA0890-fg', 'HARD ANGLE  44x44x5T/8Px890L mm.KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '448KBA1030-fg', 'HA 44x44x8Px1030L KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '448KBA2000-fg', 'CONNER : (ID)44*44*8P*2000L (KB450)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '46-12SAFI060-01A-fg', 'CARTON BOX  JT100G , JT1G', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '480803RA1A-fg', '48080-3RA1A  PACKAGE L12F FOR SERVICE PART  NISSAN  CARTON  BOX  SIZE  512W*249L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '488203RH1A-fg', '48820-3RH1A  Package  L12F  For  Service  Part  Nissan  (NK001-SVN20-3RA1A)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5022202-1-fg', 'PACKAGING  PROPSHAFT  FOR  MODEL  X60A  (PART  5022202-1 , 5022204-1 , 5022205-1  DAN-1303019-01-00)  PACK  1  SHAFT)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5022206-1171-fg', 'PACKAGING  PROPSHAFT  FOR  MODEL  X60A  (PART  5022206-1171  , 5022206-1195 M )  DAN -1303019-02-00)  PACK  1  SHAFT)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5022207-410-fg', 'PACKAGING  PROPSHAFT  FOR  MODEL  X60A  (PART  5022207-410  DAN-1303019-03-00    PACK  1  SHAFT)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '504APA1030-fg', 'FIBER ANGLE  OD  50x50x4P(3MM)x1030L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '504APA1110-fg', 'FIBER ANGLE  OD  50x50x4P(3MM)x1110L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '504KBA0100-fg', 'CORNER SUPPORT SIZE (OD) : 50*50*4P*100l (KB450)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '5050APA690-fg', 'HARD ANGLE  OD  50*50*5P*690L  AP500', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '505APA0150-fg', 'HARD ANGLE  50*50*5P*150L (AP500)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '505APA0540-fg', 'FIBER ANGLE  OD  50x50x5Px540L AP500 (ไม่หุ้มกระดาษ CA185)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '505APA0850-fg', 'Corner gard OD : 50*50*5P*850L (AP500)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '505APA0860-fg', 'FIBER ANGLE  50*50*5P*860L  AP500 (ไม่หุ้มกระดาษ)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '505APA0870 Cancel-fg', 'FIBER ANGLE  OD  50x50x4P(3MM)x870L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '505APA0870-1-fg', 'FIBER ANGLE  OD  50x50x5MM.x870L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '505APA0930-fg', 'Corner gard OD : 50*50*5P*930L (AP500)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '505APA0930-1-fg', 'FIBER ANGLE 50*50*5P*930L  AP500 (ไม่หุ้มกระดาษ)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '505APA0970-fg', 'Corner gard OD : 50*50*5P*970L (AP500)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '505APA1000-fg', 'CORNER GARD  50*50*5P*1000L (AP500)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '505APA1030-1-fg', 'FIBER ANGLE  OD  50x50x5MM.x1030L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '505APA1060-fg', 'HARD ANGLE  OD  50*50*5P*1060L  AP500', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '505APA1090 Cancel-fg', 'FIBER ANGLE  OD  50x50x4P(3MM)x1090L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '505APA1090-1-fg', 'FIBER ANGLE  OD  50x50x5MM.x1090L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '505APA1110 Cancel-fg', 'FIBER ANGLE  OD  50x50x4P(3MM)x1110L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '505APA1110-1-fg', 'FIBER ANGLE  OD  50x50x5MM.x1110L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '505APA1160-fg', 'FIBER ANGLE  50*50*5P*1160L AP500 (ไม่หุ้มกระดาษ)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '505GBA1000-fg', 'Code : 491-16 HARD ANGLE  OD  50*50*5P*1000L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '505KB1000-fg', 'HARD ANGLE  OD  50*50*5P*1000L (KB450)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '505KBA1100-fg', 'CORNER PAPER SIZE OD : 50x50x7Px1100L MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '505KBA1130-fg', 'Coner size : ID 44*44*5P*1130L (KB450)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '506KBA0600-fg', 'Coner size OD : 50*50W*6P(4T)*600L (KB450)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '507CBA0065-fg', 'CONER SUPPORT  (5MM)   OD  50*50*7P*65L  CB', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '507CBA1113-fg', 'CORNER SUPPORT OD  50*50*7P*1113L (5T)  CB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '507CBA1173-fg', 'CONER SUPPORT  OD  50*50*7P*1173L  CB', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '507GBA0025-fg', 'HA 50 X 50 X 7P X 25L     GB 500', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '507GBA0325-fg', 'HA 50 X 50 X 7P X 325L     GB 500', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '507GBA0490-fg', 'HA 50 X 50 X 7P X 490L     GB 500', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '507KBA1000-fg', 'Corner Guard OD 50x50x1000mm. 7P (KB450) / กระดาษฉาก', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '507KBA1600-fg', 'CONER SUPPORT  50*50*7P*1600L(5T) CB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '556KBA1750-fg', 'HARD ANGLE 55*55*6P*1750L  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '602010504-1-fg', 'PAPER PIPE 77*5T*120L MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '602010504-2-fg', 'PAPER PIPE 77*5T*170L MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '6-PAP0002-3-fg', 'Packing  For Model  STEP  (RH & LH)  (747/748)  BOTTOM  PLATE (BIWALL 850AA)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '754APA0400-fg', 'HARD ANGLE 75*75*4P*400L (AP500)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '754APA0580-fg', 'HARD ANGLE 75*75*4P*580L (AP500)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '754APA0670-fg', 'HARD ANGLE 75*75*4P*670L (AP500)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '754APA0760-fg', 'HARD ANGLE 75*75*4P*760L (AP500)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '754APA0830-fg', 'HARD ANGLE 75*75/4P*830L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '754APA1020-fg', 'HARD ANGLE 75*75*4P*1020L (AP500)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '754GBA0520-fg', 'HARD ANGLE 75*75*4P*520L (GB)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '754GBA0600-fg', 'HARD ANGLE 75*75*4P*600L AP500', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '754GBA0800-fg', 'HARD ANGLE 75*75*4P*800L (GB)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '754GBA0950-fg', 'HARD ANGLE 75*75/4P*950L(GB)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '754GBA1000-fg', 'HARD ANGLE 75*75*4P*1000L (GB)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '754GBA1100-fg', 'HARD ANGEL75*75*4P*1100L(GB)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '755APA1200-fg', 'PAPER CORNER 75x75x5Px1200 MM.(AP500)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '755GBA1000-fg', 'HARD ANGLE 75*75*5P*1000L(GB)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '7575KBA0825-fg', 'CORNER 75W*75W*7P*825L KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '757APA0900-fg', 'CORNER SUPPORT SIZE : 75*75*7P*900L (AP500)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), '807KB0700-fg', 'CORNER  SIZE 80x80x5T(7P)x700L MM. (KB450)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AAA-003-1-fg', 'PAD SIZE 255W*423L KA150/CA125/KA150 C/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AAA-005-fg', 'CARTON BOX SIZE OD 205W*460L*102H KA185/3CA105/KA185 BC/F No Print screen', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AAA-006-fg', 'BOX (OD) : 376W*455L*190H MM. (KA185/CA125/KA185 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AAA-007-fg', 'PARTITION-A : 174W*362L MM. (KA185/CA125/KA185 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AAA-008-fg', 'PARTITION-B : 174W*440L MM. (KA185/CA125/KA185 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AAA-009-fg', 'PAD : 362W*440L MM. (KA185/CA125/KA185 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AAA-010-fg', 'Box (OD) : 220Wx885Lx170H MM. (KA125/3CA125/KA125 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AAA-011-fg', 'Pad  (OD) : 200Wx865L MM. (KA125/CA125/KA125 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AAM-01-fg', 'BOX FOR DRIVE HEAD 359*386*522', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AAM-01-1-fg', 'BOX FOR DRIVE HEAD 359*386*522', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AAM-01-2-fg', 'PARTITION ASSY FOR BOX DRIVE HEAD', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AAM-012-1-fg', 'BOX FOR SIZE 270*175*95 (S)  KA230/CA125/KA230 C/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AAM-02-fg', 'PACKAGE COMPONANT PART (GEAR SET)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AAM-021-fg', 'PTT-A 95Wx270L (1:2) + PTT-B 95Wx175L (1:2)  KA185/CA125*3/KA185 BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AAM-02-1-fg', 'BOX SIZE ID : 387W*457L*127H (FOR PKG.COMPONANT PART (GEAR SET)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AAM-02-2-fg', 'PARTITION ASSEMBLY (FOR PKG.COMPONANT PART (GEAR SET)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AAM-08-fg', 'BOX FOR  (B)  SIZE OD 275W*360L*107H  KA230/CA125/KA230 C/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AAM-15-fg', 'Box  For  Front  Axle GMI 700', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AAM-16-1-fg', 'CARTON BOX FOR SPARE PART  SIZE  ID  387*457*127H   KA230/CA125*3/KA230  BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ACA-001-fg', 'BOX SIZE(OD) : 327Wx1800Lx738H MM. (KA230/CA125x3/KA230 BC/F) MODEL : AL400', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ACA-002-fg', 'PAD SIZE(OD) : 716Wx1780L MM. (KA230/CA125x3/KA230 C/F) MODEL : AL400', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AGC-001-fg', 'Corner support 50 x 50 x 650', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHT-001-fg', 'Sleeve -A 585W*950L For Model Continental B3', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHT-002-fg', 'Sleeve -B 585W*1584L For Model Continental B3', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHT-003-fg', 'PACKAGE FOR MODEL : Y4L (4 LAYER) วางแนวนอน', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHT-004-fg', 'CAP 1134Wx1137Lx125H FOR MODEL : T6-FSAO', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHT-005-fg', 'Coner HA-KB450 44*44*6P*150L model Jazz', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHT-006-fg', '2315010006  PACKAGE FOR MODEL : Y4L (12  LAYER) วางแนวนอน', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHT-008-fg', 'Carton box OD : 634Wx634Lx212H MM. Model Y4L Pack 8 Pcs.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHT-009-fg', 'Tray Assy OD : 255Wx536Lx72H MM. Model Y4L Pack 8 Pcs.1:2', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHT-010-fg', '2313030019 PBB-T6-E4 CARTON SET CONTINENTAL E4', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHT-011-fg', 'PAD SUPPORT : 1070Wx1120L MM. Model LT30 (Old Spec)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHT-012-fg', 'Carton box OD: 355Wx550Lx240H MM.(KP230) (Box YP5)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHT-013-fg', 'Bottom Cap Model Y4L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHT-015-fg', 'SLEEVE ASSY FOR MODEL T6', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHT-016-fg', 'Bottom Cap Model T6', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHT-017-fg', 'SLEEVE COVER OD : 980W*1539L MM (FOR MODEL BRAKE ASSY T-6 NSB-7)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHT-018-fg', 'PARTITION ASSY OD : 1088W*1088L*141H MM (FOR MODEL BRAKE ASSY T-6 NSB-7)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHT-019-fg', 'BOTTOM CAP OD : 1137W*1137L*110H MM (FOR MODEL BRAKE ASSY T-6 NSB-7)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHT-020-fg', 'WOODEN PALLET OD : 1149W*1161L*110H MM (FOR MODEL BRAKE ASSY T-6 NSB-7)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHT-021-fg', 'BOTTOM CAP OD: 1120*1146*110H MM ( model JAZZ14_EX )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHT-022-fg', 'WOODEN PALLET OD: 1120*1150*110H MM ( model JAZZ14_EX )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHT-023-fg', '2313030020 PBB-P703A-EX CARTON 6 LAYER', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHT-025-fg', 'PARTATION SET 258W*359L*35H FOR MODEL JAZZ', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHT-026-fg', 'TOP CAP OD : 1134Wx1134Lx112H MM. Model : P703', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHT-027-fg', 'PAD SUPPORT OD : 1070Wx1120L MM. Model : Nissan LT27', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHTT-001-fg', 'BOX OD : 320 x 460 x 215H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHTT-002-fg', 'PARTITION ASSY FOR AP3', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHTT-003-fg', 'SLEEVE 950 x 1020 x 940H  FOR A3E', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHTT-004-fg', 'PARTITION ASSY FOR A3E', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHTT-005-fg', 'SLEEVE 950 x 1020 x 840H FOR Z94', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHTT-006-fg', 'SLEEVE 950 x 1020 x 840H FOR Z92', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHTT-007-fg', 'PARTITION ASSY FOR Z92', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHTT-008-fg', 'SLEEVE 850 x 1020 x 895H FOR AP3', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHTT-009-fg', 'TOP CAP : 980*1040*110  (A3E)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHTT-010-fg', 'PAPER PALLET : 980*1040*212 (Z94)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHTT-011-fg', 'PARTITION ASSY (Z94)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHTT-012-fg', 'TOP CAP : 980*1040*110 (Z94)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHTT-013-fg', 'PAPER PALLET : 980*1040*212 (Z92)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHTT-014-fg', 'TOP CAP : 980*1040*110  (Z92)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHTT-015-fg', 'TOP CAP (OD) : 1164*1524*110H MM.  (22P) (KA125/3CA125/KA125 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHTT-016-fg', 'SLEEVE (OD) 1130Wx1500Lx820H MM.  (22P) (KA125/3CA125/KA125 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AHTT-018-fg', 'PAD SIZE : 230Wx360L MM. (CA125/3CA125/CA125 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-001-fg', '140024000010 Paper Pallet for MY17 :  Size (OD) 855W*966L*894H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-006 -1-fg', '140023000010 PAD 250W*230L CA125/CA125/CA125 C/F 1:4  (M.KA020A)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-009 Cancel-fg', 'PAPER PALLET FOR  E2XX  : 1003x1100x944 MM. (PACK 100 PCS.)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-013-fg', '130022000043 BOX SIZE (OD) : 110W*230L*135H MM. PRINT SCREEN 1 PLACE KI032-A', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-014-2-fg', '140024000015 TOP CAP SIZE OD : 1100W*1100L*110H MM. (KA150/3CA125/KA150 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-015-fg', '140023000011 PARTITION SIZE : 1100W*1100L (KA125/3CA125/KA125 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-016-fg', '130022000044 INNER BOX :EFC/650A', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-017-fg', '140022000027 OUTER BOX :EFC/650A', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-018(Cancel)-fg', '140022000028 OUTER PALLET KA034-A : PAD E2XX 1200LX1000W600H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-018-1-fg', '140022000028 OUTER PALLET KA034-A  PKG.928W*1109L*600H (DV)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-019-fg', '140024000032 PAPER&WOODEN PALLET FOR E2XX : 1003*1140*959 MM. (PACK 100 PCS.)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-021-fg', 'SOFT SHEET SIZE : 45W*20T*3P*230L MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-022-fg', 'SOFT SHEET SIZE : 45W*35T*5P*230L MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-032-fg', '140024000035  TOP CAP MY17', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-033-fg', '140024000036  SLEEVE  MY17', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-034-fg', '140024000038  PAPER PALLET   MY17', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-038-fg', '130022000018 INNER BOX KI018-A', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-039-fg', '140024000044 Wooden Pallet for MY17 :  Size (OD) 852W*996L*934H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AKE-040-fg', '140024000037 PARTITION MY17', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AMT-001-fg', 'BOX ID : 390x390x600 MM. KA125/3CA125/KA125 BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AMT-003-fg', 'Paper sheet board OD : 2000*1000 / กระดาษลัง (KA125/M/KA125 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'APE-001-fg', 'FLAT BOARD (OD) 105 x 105 x 7P MM AP500', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ART-001-fg', 'SMALL BOX 243x123x82H (OD) KA125/CA125/KA125 C/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ART-002-fg', 'BIG BOX 1014x670x642H (OD) TOP CAP,SLEEVE,BOTTOM CAP WITH PALLET KA230/CA185*3/KA230 BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ART-004-fg', 'BIG BOX SIZE 645x952x642H (OD) TOP CAP,SLEEVE,BOTTOM CAP+PALLETHA KA230/CA185*3/KA230 BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ART-007-1-fg', 'PKG.VG PAD', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ART-008/1-fg', '40105BIGBOX004 PKG J08E(HINO) BIG BOX SIZE OD 1036W*1075L*1074H (TOP CAP 1:1,SLEEVE 1:1,BOTTOM CAP 1:1,PALLET 1:1, H/A Support 1:8 ) KA230/CA185*3/KA230 BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ART-009-fg', '40105252372128  PKG. J08E(HINO)   SMALL BOX 252W*372L*128H 1:70 (KA230/CA125/KA230 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ART-009-1-fg', '40105252372128  PKG. J08E(HINO)   SMALL BOX 252W*372L*128H  (KA125/CA125/KA125 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ART-010-fg', '42103101102400  PKG. J08E(HINO)   PARTITION W SIZE 110W*240L+L SIZE 110W*350L 1:70 (KA230/CA125/KA230 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ART-010-1-fg', '42103101102400  PKG. J08E(HINO)   PARTITION W SIZE 110W*240L+L SIZE 110W*350L  (KA125/CA125/KA125 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ART-011-fg', '4310PAD108E000  PKG. J08E(HINO)  PAD 240W*350L 1:70 (KA230/CA125/KA230 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ART-011-1-fg', '4310PAD108E000  PKG. J08E(HINO)  PAD 240W*350L  (KA125/CA125/KA125 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ART-012/1-fg', '460STOPPER1051  PKG. J08E(HINO)  STOPPER 1053W*920L 1:1', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ART-015-fg', 'TOP CAP Model Big box Size : 645x952x642H KA230/CA185*3/KA230 BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ART-016-fg', 'SLEEVE Model Big box Size : 645x952x642H KA230/CA185*3/KA230 BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ART-017-fg', 'TOP CAP Model Big box Size : 1014x670x642H KA230/CA185*3/KA230 BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ART-018-fg', 'SLEEVE Model Big box Size : 1014x670x642H KA230/CA185*3/KA230 BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-013-fg', 'BOX : 1120*1450*464 MM MODEL : IMV: TG446290-31209G (1) TOP CAP 1:1 (2) BOTTOM CAP 1:1 (3) SLEEVE 1:1 (4) PARTITION 1:1 (5) AIR BUBBLE 1:1', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-017-fg', 'BOX OD : 234W*1134L*152H (KA230/CA125*3/KA230 BC/F) 379W*1389L 1:2', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-019-fg', 'PAPER PALLET SIZE 960W*1130L*120H (KA185/CA125*3/KA185 BC/F) For Small Box   (4 ขา)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-019/1-fg', 'PAPER PALLET SIZE 960W*1130L*131H (KA185/CA125*3/KA185 BC/F)  (3 ขา)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-020-1-fg', 'PAD SIZE 255W*423L KA150/CA125/KA150 C/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-022-fg', 'BOX 260W*880L*262H KA185/CA125*3/KA185 BC/F  Model :483961-0981 (BOX ONLY)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-023-fg', 'BOX 430W*1080L*262H KA185/CA125*3/KA185 BC/F  Model :483961-0992 (BOX ONLY)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-024-3-fg', 'BOTTOM CAP MODEL :483961-0981', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-025-fg', 'PACKAGE FOR MODEL :483961-0992', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-035-fg', 'PARTITION MODEL : TG446290-19730T & PH446270-10229C', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-044-fg', 'PAPER PALLET : 960W*1585L*131H (KA150/CA125*3/KA150 BC/F) (+Red Screen)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-049-fg', 'Box size OD 488Wx988Lx412H (KA125/CA125/KA125 C/F) + No Print Screen Model : TG446220-50000M', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-050-fg', 'Partition Assy size 476Wx976Lx200H + Stopper size 395W*1012L Model : TG446220-50000M', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-051-fg', 'Box size OD 488Wx988Lx412H (KA125/CA125/KA125 C/F) + No Print Screen Model :TG446220-36120M', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-052-fg', 'Partition Assy size 476Wx976Lx200H + Stopper size 395W*1012L Model :TG446220-36120M', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-053-fg', 'Box size OD 478Wx1328Lx412H (KA125/CA125/KA125 C/F) + No Print Screen Model : Box 2 TG446290-19640T', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-054-fg', 'Partition Assy size 470Wx1316Lx120H (KA125/KA125*3/KA125 BC/F) Model : TG446290-19640T', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-055-fg', 'Box size OD 478Wx1328Lx412H (KA125/CA125/KA125 C/F) + No Print Screen Model : Box TG446290-19840T', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-057-fg', 'BOX SIZE : 488Wx988Lx412H (KA125/CA125/KA125 C/F) + BOX PRINT SCREEN Model Box 1 TG446290-36500M', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-058-fg', 'Partition Assy size 474Wx976Lx395H (KA125/KA125*3/KA125 BC/F) Model : Box 1 TG446290-36500M', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-059-fg', 'BOX SIZE : 634Wx1238Lx545H (KA125/CA125/KA125 C/F) + BOX PRINT SCREEN Model  TG446290-56620T', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-060-fg', 'Partition Assy size 620Wx1224Lx530H (KA125/3KA125/KA125 BC/F) Model : TG446290-56620T', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-066-fg', 'PARTITION MODEL : TG989364-0460G', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-068-fg', 'PARTITION ASSY  SIZE : 486W*1186L*473H MM. model TG-446270-7200T/81700T', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-069 (Cancel)-fg', 'PARTITION 990W x 350L mm  (KA185/KA185 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-069-1-fg', 'PARTITION (P10151)  SIZE: 740W x 350L mm  (KA185/KA185 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-072-fg', 'PARTITION 6021  SIZE: 150x460x150  (KA125/3CA125/KA125 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AST-077-fg', 'CARTON  BOX  SIZE   OD   500W*1450L*288H mm. +Sticker', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-001-fg', 'CARTON BOX OD 514W*554L*411H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-002-fg', 'TOP CAP 1056W*1130L*90H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-003-fg', 'PARTITION ASSY 498W*538L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-004-fg', 'PAPER PALLET 1056*1130*175 MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-006-1-fg', 'Carton Box OD size 355W*550L*160H mm.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-007-1-fg', 'Carton Box OD size 355W*550L*80H mm.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-009-1-fg', 'Carton Box OD size 275W*800L*80H mm.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-010-fg', 'Carton Box OD size 275W*355L*80H (KA185/CA125/KA185 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-011-fg', 'Partition assy size : 262W*346L (KA185/CA125/KA185 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-027-2-fg', 'BOX OD SIZE : 547W*704L*195H MM. PKG for model Seat Rail Parts (Pack 5)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-028-1-fg', 'PARTITION ASSY 528W*685L*160H MM. PKG for model Seat Rail Parts (Pack 5)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-029-1-fg', 'PAD SUPPORT  528W*685L MM. PKG for model Seat Rail Parts (Pack 5)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-030-1-fg', 'PAPER PALLET 734W*1135L*247H MM. PKG for model Seat Rail Parts (Pack 5)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-031-fg', 'CORNER (OD)  44*44*7P*100L  MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-031-1-fg', 'CORNER (OD)  44*44*7P*100L  MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-032-fg', 'CORNER (OD)  44*44*7P*960L  MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-032-1(Cancel)-fg', 'CORNER (OD)  44*44*7P*960L  MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-032-2-fg', 'CORNER (OD)  44*44*7P*975L  MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AUT-033-fg', 'CORNER (OD)  44*44*7P*600L  MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AVN-001-fg', 'BOX FE3-A345-000 SET (IDEA-2)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AVN-002-fg', 'PLATE RECHARGE (1:3) SIZE OD : 260Wx495Lx25H mm. Model : BOX FE3-A345-000 SET (IDEA-2)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AXLE BEAM E240-fg', 'PACKAGE FOR AXLE BEAM E240', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AXLESHAFT-fg', 'PACKAGE  FOR  AXLE SHAFT    1120W*800L*1035H   (80 PCS/SET)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'AXLESHAFT1PCS-fg', 'BOX  FOR AXLE SHAFT WITH BRAKE ASSY', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'B1759-40010-fg', 'B1759-40010  (DRYER)   47 g', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'B1945-44360-fg', 'BOX B1945-44360 434W*1023L KA125/CA125*3/KA125 BCF OD:214W*294L*227H PRINT SCREEN BLACK MODEL 872', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'B1946_44310-fg', 'LOWER  TRAY _ B1946-44310', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'B1946-44320-fg', 'MIDDLE TRAY _ B1946-44320', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'B1946-44330-fg', 'UPPER  TRAY _ B1946-44330', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'B1947-41340-fg', 'CORNER 09D  ( ID:75*75*7P*865L  KB450 )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'B1979-fg', 'B1979-40020  (Desiccant)   45 g', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'B1979-40021-fg', 'B1979-40021   (Desiccant)   45 g', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'B221-fg', 'PACKAGE FOR MODEL : B221', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'B3V44-fg', 'Carton box  DO 450W*595L*285L    Ka 185/Ca125*3/Ka185  BC/F  Model  B3V44', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'B401-fg', 'B 401  PK289', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'B402-fg', 'B 402  SLEEVE & COVER + BOTTOM  SET  PK291', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'B405 Cancel-fg', 'B405  PK895', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'B501-fg', 'TOP CAP AND SLEEVE B501  PK 449', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'B503-fg', 'TOP CAP AND SLEEVE B503  PK 450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'B903-fg', 'B 903  (OB210)  PK320', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'B904-fg', 'B 904  (OBE175)  PK322', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BA759-40210-fg', 'DRYER   (BA759-40210)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BA759-40400-fg', 'DRYER   (BA759-40400)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BA759-4Y4JA-fg', 'DRYER  BA759-4Y4JA', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BB3011-fg', 'TOP CAP SIZE(OD) 1110W*1210L*75H (KA230/3CA125/KA230 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BB3012-fg', 'TOP CAP SIZE(OD) 1110W*1210L*170H (KA230/3CA125/KA230 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BB3013-fg', 'TOP CAP SIZE(OD) 1110W*1210L*200H (KA230/3CA125/KA230 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BB3021-fg', 'TOP CAP SIZE(OD) 1350W*1350L*75H (KA230/3CA125/KA230 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BB3022-fg', 'TOP CAP SIZE(OD) 1350W*1350L*170H (KA230/3CA125/KA230 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BB3023-fg', 'TOP CAP SIZE(OD) 1350W*1350L*200H (KA230/3CA125/KA230 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BB3031-fg', 'TOP CAP SIZE(OD) 1690W*1690L*75H (KA230/3CA125/KA230 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BB3032-fg', 'TOP CAP SIZE(OD) 1690W*1690L*170H (KA230/3CA125/KA230 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BB3033-fg', 'TOP CAP SIZE(OD) 1690W*1690L*200H (KA230/3CA125/KA230 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BB4001-fg', 'PACKAGE FOR MODEL : BB4001 COLOR BLACK', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BB4002-fg', 'PACKAGE FOR MODEL : BB4002 COLOR BLACK', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BB4003-fg', 'PACKAGE FOR MODEL : BB4003 COLOR BLACK', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BB4004-fg', 'PACKAGE FOR MODEL : BB4004 COLOR BLACK', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BB6404-fg', 'PACKAGE FOR MODEL : BB6404 COLOR BLACK', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BB6408-fg', 'PACKAGE FOR MODEL : BB6408 COLOR BLACK', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BB8401-fg', 'PACKAGE FOR MODEL BB8401', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BB8402-fg', 'PACKAGE FOR MODEL BB8402', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BB8407-fg', 'PACKAGE FOR MODEL : BB8407 COLOR BLACK', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BB8409-fg', 'PACKAGE FOR MODEL BB8409', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BBH001-fg', 'PACKAGE FOR MODEL BBH001', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BBH002-fg', 'PACKAGE FOR MODEL BBH002', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BBH003-fg', 'PACKAGE FOR MODEL BBH003', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BBH004-fg', 'PACKAGE FOR MODEL BBH004', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BBI401-fg', 'PACKAGE FOR MODEL BBI401', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BBI402-fg', 'PACKAGE FOR MODEL BBI402', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BBI407-fg', 'PK1183 CARTON BOX PACKAGE BBI407 NK', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BBI409-fg', 'PACKAGE FOR MODEL BBI409', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BBK404-fg', 'PK1185 CARTON BOX PACKAGE BBK404 NK', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BBK408-fg', 'PK1184 CARTON BOX PACKAGE BBK408 NK', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BC1903-fg', 'PACKAGE FOR MODEL : BC1903 COLOR BLACK', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BC1904-fg', 'PACKAGE FOR MODEL NAME : BC1904 COLOR BLACK', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BD4001-fg', 'PACKAGE FOR MODEL BD4001', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BD4002-1-fg', 'PACKAGE FOR MODEL BD4002 TOP CAP + SLEEVE', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BD4501-fg', 'PACKAGE FOR MODEL : BD4501 COLOR BLACK', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BD4503-fg', 'PACKAGE FOR MODEL : BD4503 COLOR BLACK', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BDD001-fg', 'PACKAGE FOR MODEL BDD001', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BDD002-fg', 'PACKAGE FOR MODEL BDD002', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BDD003-fg', 'PACKAGE FOR MODEL BDD003', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BDD004-fg', 'PACKAGE FOR MODEL BDD004', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BE5221-fg', 'PACKAGE FOR MODEL : BE5221 COLOR BLACK', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEARING-fg', 'Support Substitute for Bearing 91W*91L*20H mm. Q.08272', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEN-001-fg', 'PACKAGE FOR MODEL : SMALL (PACK 840 PCS.)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEN-002-fg', 'PACKAGE FOR MODEL : STEEL RING (PACK 840 PCS.)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEN-004-fg', 'BOX SET : 830W*1065L*579H MM. **HIRUTA**', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEN-005-fg', 'PACKAGE FOR MODEL : 13453-87Z03 (PACK 960 PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEN-006-fg', 'PACKAGE FOR MODEL : 13453-0M010 (PACK 840 PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEN-007-fg', 'CARTON BOX HR10DET  : 324W*324L*232H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEN-008-fg', 'TRAY ASSY : 306W*306L*47H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEN-009-fg', 'PAD : 310W*310L*3T MM', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEN-010-fg', 'BOX SET FOR MODEL : HR10DET', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEN-011-fg', 'BOX FOR MODEL 31122-ZE3-8200', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEN-012-fg', 'CARTON BOX : 324W x 324L x 232H MM. FOR MODEL HR10DET', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEN-013-fg', 'TRAY : 306W x 306L x 47H MM. FOR MODEL HR10DET', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEN-014-fg', 'PAD : 310W x 310L x 3T MM. FOR MODEL HR10DET', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEN-015-fg', 'BOX SET : 934W*1166L*964H MM. FOR BZ120', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEN-016-fg', 'PACKAGE FOR MODEL : 12622-82000 (PACK 900 PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEN-017-fg', 'PACKAGE FOR MODEL : Z5T (PACK 1500 PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEN-018-fg', 'PACKAGE FOR MODEL : 12622-77002K (PACK 960 PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BEN-019-fg', 'BOX SET : 12622-60A00A', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BOX PACKAGE FOR 811-1-fg', '71003396 CARTON BOX OD 560Wx960Lx240H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BOX SUZUKI  YL1-fg', 'Z-NK002-15183  BOX + PTT ASSY  SUZUKI YL1 (SERVICE PART) OD 414W*871L*290H (KA230/CA125*3/KA230 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BOX-PINION VALVE-fg', 'Z-NK002-BOX03  CARTON BOX  (M. PINION VALVE)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BOXPUMP-1-fg', 'Z-NK001-BOX27  CARTONBOX 414W*1107L M&M KA125/CA125*3/KA125  BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BP03590538-fg', 'Z-NK001-BTP03  BOTTOM PLATE VALVE 538*361', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BUNJO X60A (5 LINK)-fg', 'SERVICE PART X60A BUNJO (5 LINK)  Pack 1 Pcs/Box', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BUNJOCOMMON-fg', 'BOX FOR BUNJO COMMON  SIZE  349*153*214H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CAP B501-fg', 'Cap  B501', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CAPB401-fg', 'TOP CAP B401', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CAPB402-fg', 'TOP CAP B402', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CAP-TOYODA-fg', 'Z-NK001-CAP08  CAP VALVE 1156W*1183L*100H (CAP001)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CARRIER-T6-fg', 'PALLET 365*365*470H FOR CARRIER AAT T6', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CB0240240180H-1-fg', 'CARTON BOX  ID  240*240*180H  KA125/KA125  BC/F (BOX S) PACK 10 PCS', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CB0260500300H-1-fg', 'CARTON BOX  ID  260*500*300H (KA125/BC/F  BOX L) PACK 10 PCS', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CB0365270160-1-fg', 'CARTON BOX S (OD) 365*270*160 MM (KA230 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CB0365540160-1-fg', 'CARTON BOX M (OD) 365*540*160 MM (KA230 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CB0365540320-1-fg', 'CARTON BOX L (OD) 365*540*320 MM (KA230 BC /F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CB-22562439-fg', 'Carton Box Size : 313W*455L*164H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CB-22562444-fg', 'Carton Box Size : 313W*455L*164H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CB-GM0-006-fg', 'BOX OD : 503W*508L*288H MODEL WHEEL HOUSE LIP RH/LH (GMI700_MY17)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CB-TYD001-1-fg', 'Z-NK001-CBV01  CARTON BOX VALVE ID 540*361*106  (CB001)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CC0002939A-fg', 'CUSHION  610L*50W*20T  (CC0002939A)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CC0006149A-fg', 'DB-ITA 155Wx470L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CENTERBEARING-NEW-fg', 'PACKING Model X61B Center Bearing Argentina 5014865 (441 Pcs.) SIZE  931W*930L*583H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CMT-001-fg', 'HARD ANGLE  50*50*5P*840L MM (AP500)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CMT-002-fg', 'HARD ANGLE  50*50*5P*980L MM (AP500)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CMT-003-fg', 'HARD ANGLE  50*50*5P*750L MM (AP500)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CVJ P703-fg', 'Packaging for model CVJ (P703)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CVJ PACK36-fg', 'Packaging for model CVJ Assembly', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CYC-007-1-fg', 'TOP CAP Package YA(25PCS) 1205W*1200L (KA230/CA185*3/KA230 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CYC-009-1-fg', 'BOTTOM CAP  Package YA(25PCS) 1205W*1200L (KA230/CA185*3/KA230 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CYC-010-fg', 'CONNER SUPPORT PP BRAND 44*44*7P*80L (1:4)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CYC-013-fg', 'CARTON BOX PACKAGE MODEL INNER PIPE (1:30)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CYC-014-fg', 'TOP CAP  PACKAGE MODEL INNER PIPE (1:1)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CYC-015-fg', 'SLEEVE SET PACKAGE MODEL INNER PIPE (1:1)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CYC-016-fg', 'BOTTOM CAP PACKAGE MODEL INNER PIPE (1:1)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CYC-017-2-fg', 'SLEEVE SET  Package YA(25PCS) 459W*1965L (KA230/CA185*3/KA230 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'CYC-019-fg', 'PACKAGE MODEL YA PACK 25. (CARTON BOX  = 75 pcs (8.73 THB/PCS), PARTITION ASSY (1:8) = 75 PCS (13.97 THB/PCS), PAD =75 PCS (1.16 THB/PCS), TOP CAP = 1 PCS (82.45 THB/PCS), SLEEVE SET = 1 PCS (106.70 THB/PCS), WOODEN PALLET 2 WAY =421.95 THB/PALLET', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'D040-fg', 'PACKAGE FOR MODEL D040', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'D22 PACK70-fg', 'PACKAGE FOR   MODEL  D22 (Pack70) (1) Top & Bottom Plate 1099W*2222L*80H (2) Side & End Sleeve Set Assembly 1099W*2222L*710H (3) Partition Set Assembly 715W*1066L*50T (4) Zerust Bag 1200*2500*1500*0.07T', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'D2801-fg', 'PACKAGE FOR MODEL D2801 BOX + PAD', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'D2802-fg', 'PACKAGE FOR MODEL D2802 BOX + PAD', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DAI-002 Cancel-fg', 'PARTITION A SIZE 225W*110L (CA105/CA105/CA105 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DAI-003 Cancel-fg', 'PARTITION B SIZE 340W*110L (CA105/CA105/CA105 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DAI-004-fg', 'PARTITION A SIZE 255W*110L & PARTITION B SIZE 340W*110L (CA105/CA105/CA105 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DAN-003-fg', 'Package IRS size:369WX369LX537H mm 1:1', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DAN-LKB-001-fg', 'BOX T6/P375  ICA FORD SOUTH AFRICA  25 PCS (DV)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DAN-LKB-002-fg', 'PKG.EXPORT JMC PHEV. Size (OD) : 1050Wx1604Lx989H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DAN-RY-002-fg', 'Packaging T-Rex M250 (Pack 48) Service', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DAN-RY-003-fg', 'Packaging T-Rex ELD Diff Pack 64 :1', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DAN-RY-004-fg', 'Packaging U725 Pack 100 Pcs.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DAN-RY-004-1-fg', 'Packaging U725 Pack 100 Pcs.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DAN-RY-004-2(PLY WOOD)-fg', 'Packaging U725 Pack 100 Pcs.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DAN-RY-005-fg', 'Packaging Diff ELD,JL,U725 Pack 100:1', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DAN-RY-006-fg', 'PACKAGE SIZE (OD) : 455Wx1934Lx609H mm. Package for service parts  Axle RR M220 CVJ Disc(Pack 1)(P703)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DAN-RY-007-fg', 'Package For Carrier Assembly   (Pack 1)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DAN-RY-008-fg', 'P708 - Packaging for PV sample (T6 Diff case EDL M300) (Pack 48)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DAN-RY-009-fg', 'BOX SHAFT ASSY + DISC BRAKE', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DAN-RY-010-fg', 'BOX BRAKE ASSY', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DAN-RY-011-fg', 'BOX DRUM BRAKE', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DAN-RY-012-fg', 'BOX SHAFT ASSY + DRUM BRAKE PKG for P703 (PACK 1)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DAN-RY-013-fg', 'Package For Carrier SUB Assembly (Pack 1)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DAP-002-fg', 'PALLET SET SIZE : 1438x1139x1123H (OD,Included Pallet)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DI445910-1600-fg', 'DRYER 45 G.(DENSO SINGAPORE)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DI445910-16004W-fg', 'DRYER 45 G.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DIT-001-fg', 'PACKAGE FOR MODEL : STATOR CORE LAMINATE (PACK150)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DIT-002-fg', 'PACKAGE FOR MODEL : ROTOR CORE LAMINATE (PACK900)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DIT-002-1-fg', 'PARTITION ASSY (OD) : 1007W*1007L*50H MM. (PACKAGE FOR MODEL : ROTOR CORE LAMINATE (PACK900)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DTR-001-fg', 'CARTON BOX  ID 756W*1383L*335H KA230/CA125x3/KA230 BC/F 1:1 M.J36T (FR/PR)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DTR-002-fg', 'TOP CAP 977Wx830L KA185/CA125x3/KA185/BC/F 1:1  MODEL J36T (FR/PR)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DTR-003-fg', 'SLEEVE-B1 (ID 610Wx752Lx1077H) KA185/CA125x3/KA185/BC/F 1:1  MODEL J36T (FR/PR)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DTR-004-fg', 'PLATE  ASSY  RH   MODEL  J36T  (FR/PR) M3', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'DTR-005-fg', 'PLATE  ASSY  RH   MODEL  J03E/F  (FR/PR) M2', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'E012-fg', 'BOX RF-TEN (RF10) SERVICE PART SIZE 355W*355L*120H  KA230/CA125/KA230 C/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ECA-004 Cancel-fg', 'BOX OD : 503W*508L*288H MODEL WHEEL HOUSE LIP RH/LH (GMI700_MY17)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ECA-005 Cancel-fg', 'PARTITION ASSY (MODEL WHEEL HOUSE LIP RH/LH (GMI700_MY17)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ELEC01-fg', 'ELECTRIC FOR FACTORY', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ELECTRIC-fg', 'ค่าไฟฟ้า', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EX-001-fg', 'HARD  ANGLE  75*75*7P*1500  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EX-002-fg', 'HARD  ANGLE  75*75*7P*830  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EX-003-fg', 'HARD  ANGLE  75*75*7P*820  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EX-004-fg', 'HARD  ANGLE  75*75*7P*800  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EX-005-fg', 'HARD  ANGLE  75*75*7P*940  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EX-006-fg', 'HARD  ANGLE  75*75*7P*840  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EX-007-fg', 'HARD  ANGLE  75*75*7P*900  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EX-008-fg', 'HARD  ANGLE  75*75*7P*895  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EX5200054-fg', 'PKG.FOR MODEL : Z92', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EX5200054-1-fg', 'SLEEVE 950x1020x840H FOR MODEL : Z92', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EX5200055-fg', 'PKG.FOR MODEL : AP3', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EX5200055-1-fg', 'PARTITION ASSY FOR MODEL : AP3', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EX5200055-2-fg', 'SLEEVE 850x1020x895H FOR MODEL : AP3', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EX5200056-fg', 'PKG.FOR MODEL : A3E', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EX5200056-1-fg', 'SLEEVE 950x1020x940H FOR MODEL : A3E', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EX5200056-2-fg', 'PARTITION ASSY FOR MODEL : A3E', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EX5200057-fg', 'PKG.FOR MODEL : Z94', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EX5200057-1-fg', 'SLEEVE 950x1020x840H FOR MODEL : Z94', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EX5220-02-fg', 'PKG.FOR MODEL : 22P', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EXCELSHAFTCOMMON-fg', 'Package for Excel  Shaft  Common  Part  (4  Pcs / Box)  Size  658*986*200H mm              (1.)  Outter  Case  1  Pcs  KA230/CA125/KA230  BC/F  ( 2.)   End  Panel   2  Set   KI150/CA125/KI150  BC/F     (3.)   Partition    2  Set   KI150/CA125/KI150  BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'EXCELSHAFTCOMMON-1-fg', 'Package for Excel  Shaft  Common  Part  (4  Pcs / Box) New Size', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-002-fg', 'CARTON PALLET (B299-BA NEW DESIGN Pack 18 PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-003-fg', 'CARTON BOX FOR  EB3G5H 211AC-CC (PACK 75)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-004-fg', 'Packaging For Model : U375  (EB3-5230-BB,CB,DA) OD:1126W*1804L*1106H  (PACK 12 )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-007-fg', 'CARTON BOX OD SIZE : 234W*263L*72H (Argentina)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-008-fg', 'BOX PROTOTYPE PACK 1 OD SIZE : 407W*1214L*272H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-009-fg', 'BOX PROTOTYPE PACK 10 OD SIZE : 1107W*1214L*272H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-010-fg', 'BOX FOR PART SIZE 240W*310L*530H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-011-fg', 'BOX FOR PART SIZE 200W*270L*700H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-012-fg', 'BOX FOR PART SIZE 200W*270L*570H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-013-fg', 'Packaging For Model : U375 (EB3-5230-BB-CB-DA)(Pack 6 Modify)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-014-fg', 'Packaging For Model : Part Conv & PIP ASY EXH (Pack 18)  EB3G 5E211 HC,EC 1110W*1790L*971H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-015-fg', 'Packaging for Model GM : 52094720', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-016-fg', 'Packaging for Model GM : 52105345', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-017-fg', 'Box  For  Part Conv & PIP ASY EXH (Pack 1 )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-020-fg', 'TOP CAP ASSY (Modify Model GM: 5209720 Pack 9)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-021-fg', 'SLEEVE ASSY (Modify Model GM: 5209720 Pack 9)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-022-fg', 'BOTTOM CAP ASSY (Modify Model GM: 5209720 Pack 9)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-023-fg', 'Packaging For Model PIPE 1587177X', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-024-fg', 'Packaging For Model PIPE 1587220X', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-025-fg', 'Packaging For Model PIPE 1587163X', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-026-fg', 'Packaging For Model PIPE 1453135X', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-027-fg', 'Packaging For Model PIPE 1837639X', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-028-fg', 'Packaging For Model PIPE 1453132X', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-031-fg', 'Wooden Pallet Pack 6 (1126W*1804L*120H)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-032 Cancel-fg', 'Wooden Pallet 1000W*1180L*120H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-033-fg', 'TOP CAP ASSY (T6 Panther & Red Back Pack 10)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-034-fg', 'SLEEVE ASSY ASSY (T6 Panther & Red Back Pack 10)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-035-fg', 'PARTITION  ASSY (T6 Panther & Red Back Pack 10)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-036-fg', 'PAD SUPPORT ASSY (T6 Panther & Red Back Pack 10)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-037-fg', 'BOTTOM CAP ASSY (T6 Panther & Red Back Pack 10)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-038-fg', 'WOODEN PALLET (T6 Panther & Red Back Pack 10)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-039-fg', 'WOODEN PALLET :1126W*1804L*140H (PACK 12)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-040-fg', 'CARTON BOX FOR EB3G 5H211 CA PACK 6', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-041-fg', 'CARTON BOX FOR EB3G 5230 CC,BB PACK 9', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-042-fg', 'CARTON BOX FOR JB3G 5H211 CA PACK 75', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-043-fg', 'CARTON BOX FOR JB3G 5K214 KC PACK 18', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-045-fg', 'CARTON BOX FOR JB3G 5H2114 CA PACK 75', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-046-fg', 'Packaging for Redback JB3G5k214 (Pack 3)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-047-fg', 'Packaging for Model GM : 52094720 ( 1 Layer)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-048-fg', 'Packaging for Model GM : 52094720 ( 2 Layer)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-049-fg', 'Box OD 271W*364L*147H  (SA, Cape town) (KA185/CA125*3/KA185 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-051-fg', 'CARTON BOX FOR JB3G EA PACK 9', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-052-fg', 'CARTON BOX FOR JB3G 5K214 HB PACK 9', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-053-fg', 'Repair  CARTON BOX FOR B515', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-054-fg', 'BOX Service part GMB 511', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-055-fg', 'Repair  CARTON BOX EB3G5H211 AC,CC PACK 75', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-056-fg', 'Packaging for Model : DN34 40 500', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-057-fg', 'Packaging for Model : 52103511', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-058-fg', 'Packaging for Model : 52083737', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-059-fg', 'Packaging for Model : 52083734', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-060-fg', 'Carton Box For Part JB3G-5H211 CA,EA,FA (PACK 75)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-063-fg', 'PKG.FOR JB3G5K214H (SERVICE PART PACK 3)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-066-fg', 'CARTON BOX FOR JB3G-5K214-B MF PACK 10', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-067-fg', 'CARTON BOX FOR JB3G-5K214-C MF PACK 12', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-068-fg', 'CARTON BOX FOR JB3G-5230-C  PACK 12', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-069-fg', 'CARTON BOX FOR JB3G-5230-E  PACK 12', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-070-fg', 'CARTON BOX FOR JB3G-5230-F  PACK 12', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-071-fg', 'CARTON BOX FOR EB3G-5H211-C  PACK 12', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-072-fg', 'CARTON BOX FOR JB3G-5H211-CA PACK 12', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-077-fg', 'CARTON BOX PROTON REAR 1901854X', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-078-fg', 'CARTON BOX PROTON FRONT 1878446X', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-079-fg', 'PACKAGING LB3G 5M210 A*FOR SEND PROTOTYPE PART', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-081-fg', 'Packaging P/N 10900272 pack 20 pcs/pallet', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-082-fg', 'Packaging P/N 10900273 pack 30 pcs/pallet', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-083-fg', 'Packaging P/N 10900274 pack 24/pallet', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-084-fg', 'PKG.FOR MUFFLER ASM-EXH MID PIPE,E PACK 20 (10900272)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-085-fg', 'PKG.FOR MUFFLER ASM-EXH MID PIPE,E PACK 10 (10900272)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-086-fg', 'PKG.FOR PIPE ASM-FT EXH FLEX,C PACK 12 (10900274)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-087-fg', 'PKG.FOR MUFFLER ASM-EXH RR,F PACK 30 (10900273)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FAE-089-fg', 'PKG.FOR STRAIGHT PIPE P/N 3221210', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FB1000501000A8-fg', 'PAPER SHEET 100W*5T/8P*1000L (AP500)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FJA-008-fg', 'PAD 280W*350L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FJA-017-1-fg', 'PAD SIZE 760W*1170L (KA125/CA125/KA125 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FJA-018-fg', 'Partition for Volvo (assy) Size : 770x1170x179 mm.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FJA-020-1-fg', 'PAD SIZE : 214W*564L (CA125/CA125/CA125 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FJA-020-2-fg', 'CARTON BOX COLUMP OD 234W*584L*217H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FJA-020-3-fg', 'CARTON BOX COLUMP OD 234W*584L*217H (KA150/KA150/BCF)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FJA-023-fg', 'HARD ANGLE OD 50*50*7P*1100L MM.  (KB450)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FJA-024-fg', 'PARTITION (ASSY) SIZE ID : 770 x 1170 x 258 MM. (KA230 C/F + K)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FJA-025-fg', 'BOX (OD) SIZE : 249W*1219L*204H MM (KA185/KA185/BCF)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FJA-026-fg', 'PARTITION (ASSY)  : 235W*1205L*178H MM (KA185/KA185/BCF)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FJA-029-fg', 'HARD ANGLE OD 50*50*7P*500L MM.  (KB450)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FJA-030-fg', 'HARD ANGLE OD 50*50*7P*830L MM.  (KB450)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FJA-032-fg', 'HARD ANGLE OD 50*50*7P*900L MM.  (KB450)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FJA-033-fg', 'HARD ANGLE OD 50*50*7P*1050L MM.  (KB450)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FJA-034-fg', 'HARD ANGLE OD 50*50*7P*1070L MM.  (KB450)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FJA-035-fg', 'HARD ANGLE OD 50*50*7P*1090L MM.  (KB450)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FJA-036-fg', 'HARD ANGLE OD 50*50*7P*890L MM.  (KB450)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FJA-037-fg', 'HARD ANGLE OD 50*50*7P*950L MM.  (KB450)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FJA-038-fg', 'HARD ANGLE OD 50*50*7P*1000L MM.  (KB450)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FJK-010-fg', 'DESICCANT BAG  ASSY 45 G. (N1-07030-04210)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FJK-012-fg', 'DESICCANT ASSY 60 G. ( N1-07030-04250 )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FJK-014-fg', 'DESICCANT   ASSY  60 G. ( N1-ZM4-0719320 #1 )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FJK-020-fg', 'DESICCANT BAG  ASSY 30 G. (N1-07030-04220)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FJK-040-fg', 'DESICCANT BAG  ASSY 35 G. (N1-07030-04240)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FTT-001-fg', 'HA 44x44x7Px100L Conner angle   (KB)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FTT-002-fg', 'PACKING FOR COOLING PUMP SIZE: 670x505x612H(OD) MATERIAL: KA230/CA125x3/KA230  BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FTT-003-fg', 'PAPER PALLET FOR COOLING PUMP SIZE: 1010x670x109H(OD) MATERIAL: KA230/CA125x3/KA230  BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FTT-005-fg', '479Wx492Lx352H(OD) KA230xCA125*3xKA230 BC/F No Printing', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FTT-006 Cancel-fg', 'Package for FTC-B255FS MAIN BODY  KA185xCA125*3xKA185 BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FTT-006-1-fg', 'Package for FTC-B255FS MAIN BODY  KA185xCA125*3xKA185 BC/F (New design)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FTT-007-fg', 'BOX (Included Partition) 446x345x234H KA230xCA125*3xKA230 BC/F (SET)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FTT-008-fg', 'Pallet 910x710x117H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FTT-009-fg', 'BOX (Included Partition) 446x345x234H KA230xCA125*3xKA230 BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FTT-010-fg', 'Partition SET (Partition and Top pad)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'FTT-011-fg', 'HA 44x44x7Px100L  KB-450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'G-FI-003-fg', 'HARD ANGLE  OD  50*50*5P*1050L  GB500', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'G-FI-021-fg', 'HARD ANGLE  OD  50*50*5P*990L   GB', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'G-FI-040-fg', 'FIBER ANGLE  OD  50x50x5Px540L AP500 (ไม่หุ้มกระดาษ CA185)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'H60A-Holiday-fg', 'PACKAGE&PACKING FEE FOR MODEL NISSAN H60A  (Packing Fee Holiday)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'H60A-NORMAL-fg', 'PACKAGE&PACKING FEE FOR MODEL NISSAN H60A  (Working day 08.00-17.45)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'H60A-OT-fg', 'PACKAGE&PACKING FEE FOR MODEL NISSAN H60A  (Time After17.45)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HARD- PINION VALVE-fg', 'Z-NK002-HAR06  HARD ANGLE 44*44*7P*100L (PINION VALVE)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HDM-001-fg', 'Package for Cop Engine Audit 940Wx1050Lx894H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HINO-fg', 'HINO 82-9883', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HINO 82-6636-fg', 'HINO 82-6636', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HIO-002-fg', 'TOP CAP OD SIZE : 1091W*2019L*175H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HIO-003-fg', 'BOTTOM CAP OD SIZE : 1060W*1999L*175H (PKG.for Converter assy) (Pack 3)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HIO-004-fg', 'PARTITION ASSEMBLY  (PKG.for Converter assy) (Pack 3)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HIO-005-fg', 'PAPER PAD SIZE: 1029W*1979L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HIO-006-fg', 'WOODEN PALLET 4 WAY (HEAT TREATMENT) SIZE: 1091W*2019L*120H   (PKG.for Converter assy) (Pack 3)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HIO-007-fg', 'BOX OD SIZE: 768W*1050L*410H (PKG.for Silencer assy) (Pack 3)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HIO-008-fg', 'PARTITION ASSEMBLY  (PKG.for Silencer assy) (Pack 3)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HIO-009-fg', 'PAPER PAD SIZE: 748W*1030L (PKG.for Silencer assy) (Pack 3)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HIO-010-fg', 'BOX OD SIZE: 541W*1050L*410H (PKG.for Silencer assy) (Pack 2)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HIO-011-fg', 'PARTITION ASSEMBLY  (PKG.for Silencer assy) (Pack 2)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HIO-012-fg', 'PAPER PAD SIZE: 521W*1030L (PKG.for Silencer assy) (Pack 2)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HIT-001-fg', 'Top cap size OD 933W*1022L*110H (KA185/CA125*3/KA185 BC/F) for 17B50118,119,120', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HIT-002-fg', 'Bottom cap size OD 933W*1022L*110H (KA185/CA125*3/KA185 BC/F) for 17B50118,119,120', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HIT-004-fg', 'TOP CAP : 861Wx1100Lx110H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HIT-005-fg', 'SLEEVE : 830Wx1080Lx982H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HIT-006-fg', 'BOX+PARTITION : 530Wx810Lx491H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HIT-010-fg', 'TOP CAP : 861Wx1100Lx110H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HIT-011-fg', 'SLEEVE : 830Wx1080Lx508H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HIT-012-fg', 'BOX + PARTITION : 530Wx810Lx254H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HIT-013-fg', 'WOOD PALLET : 861Wx1100Lx110H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOP-058-fg', 'Package Material 75512/3 3SB0A', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOP-059-fg', 'Package Material 75586 3SB0A', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOWA-002-fg', 'BOX L42L- IPO SR 1934x1368x500 S/R', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOWA-004-fg', 'PACKAGE SERVICE PART H/L L42L (NR) OD : 1375 x 1834 x 334 mm.  TOP CAP + BOX ASSY + PARTITION  ASSY', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOWA-005-fg', 'PACKAGE  SERVICE PART H/L L42L (SR) OD : 1375*1834*334 MM. TOP CAP + BOX ASSY + PARTITION  ASSY', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOWA-007-fg', 'BOX IPO-L12F (PACK6) 1900x1320x420 (OD : 1934x1368x430)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOWA-010-fg', 'BOX L42L - KDSR 1934x1368x460 S/R', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOWA-011-fg', 'BOX L42L - KDNR 1934x1368x460 N/R', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOWA-020-fg', 'BOX L12F KD (PACK12) 1900x1320x420 (OD : 1934x1368x430)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HOWA-023-fg', 'PACKAGE  SERVICE PART L42L H/L  SR IPO SIZE : 1368Wx1934Lx324H MM. TOP CAP + BOX ASSY + PARTITION  ASSY', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HPS-004-fg', 'PARTITION FOR SUPPORT PALLET-A  (48 PCS/RACK)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HPS-005-fg', 'PARTITION FOR SUPPORT PALLET-P  (20 PCS/RACK)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HPT-001-fg', 'CARTON BOX OD : 203W*353L*125H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HPT-002-fg', '9383728013 CARTON BOX (OD) : 361W*636L*192H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HPT-003-fg', '9383728013 PARTITION ASSY (OD) : 341W*616L*84H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HPT-004-fg', '9383728013 PAD (OD) : 341W*616L MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HPT-005-fg', '9387714012 CARTON BOX (OD) : 436W*506L*173H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HPT-006-fg', '9387714012 PARTITION ASSY (OD) : 416W*486L*70H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HPT-007-fg', '9387714012 PAD (OD) : 486W*416L  MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HPT-008-fg', '9387714029 CARTON BOX (OD) : 286W*636L*192H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HPT-009-fg', '9387714029 PARTITION ASSY (OD) : 266W*616L*80H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HPT-010-fg', '9387714029 PAD (OD) : 616W*266L MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HPT-011-fg', 'CARTON BOX (OD) : 372W*812L*200H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HPT-012-fg', 'PAD (OD) : 254W*434L MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HPT-013-fg', 'PAD (OD) : 360W*410L MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HPT-014-fg', 'CARTON BOX (OD) : 645W*720L*376H  KA125 BCF (For model 2P668148E Pack 5) Small', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HPT-015-fg', 'PAD (OD) : 700W*625L KA125 C/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HPT-016-fg', 'PARTITION ASSY (OD) : 625W*700L*320H MM KA125 BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HPT-018-fg', 'PAD (OD) : 800W*750L KA125 C/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HPT-019-fg', 'PARTATION ASSY (OD) : 800W*750L*350H MM KA125 BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HSB-001-fg', 'CARTON  BOX   SIZE  280L * 218W*304H    KL205/3M/KL205  BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HSB-002-fg', 'Bottom  Assy  Size  267W*200L  KL205/M/KL205  C/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HSB-003-fg', 'Cover  Assy  Size  267W*200L  KL205*M/KL205  C/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HSB-020-fg', 'CARTON BOX SIZE 230W*359L*295H KL205/3M/KL205 BC/F MODEL 115D31LT110', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HSB-021-fg', 'Bottom  Assy  Size 213W*345  KL205/M/KL205  C/F MODEL 115D31LT1100', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HSB-022-fg', 'Cover  Assy Size 213W*345L KL205*M/KL205  C/F MODEL 115D31LT110', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HYM-001-fg', 'TOP CAP  OD : 602W*854L*110H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HYM-002-fg', 'PARTITION SET OD : 543W*810L*174H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HYM-003-fg', 'SLEEVE SET OD : 557W*832L*708H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HYM-004-fg', 'PAPER PALLET SIZE 602W*854L*187H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HYS-009-fg', 'INNER BOX (OD) 895x545x320H : KA230/CA125/KA230  C/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HYS-010-fg', 'PTT 441W*538L+COVER215W*538L  (4 PCS/BOX)  : KA185/CA125*3/KA185 BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HYS-011 (Cancel)-fg', 'TOP CAP OD : 944W*1120L*112L : KA125/CS110*3/KA125  BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HYS-012 (Cancel)-fg', 'BOTTOM CAP OD : 944W*1120L*112L : KA125/CS110*3/KA125  BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HYS-014-fg', 'Box for Model : T6 All D-Cab (Cap :1502W*2380L*230H Print screen + Tray : 1492W*2370L*230H)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HYS-014-1 Cancel-fg', 'Box for Model : T6 All D-Cab (Cap :1520W*2390L*300H Sticker + Tray : 1500W*2359L*300H)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HYS-015-fg', 'Box for Model : T6 All R-Cab (Cap :1502W*2188L*230H Print screen + Tray : 1492W*2178L*230H)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HYS-015-1-fg', 'Box for Model : T6 All R-Cab (Cap :1520W*2160L*300H Sticker + Tray : 1500W*2129L*300H)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HYS-016-fg', 'Box for Model : T6 All S-Cab (Cap :1502W*1600L*230H Print screen + Tray : 1492W*1590L*230H)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'HYS-016-1 Cancel-fg', 'Box for Model : T6 All S-Cab (Cap :1520W*1620L*300H Sticker + Tray : 1500W*1589L*300H)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ITOH-002-fg', 'PAD SIZE 255W*423L KA150/CA125/KA150 C/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JCS-001-fg', 'BOX (OD) SIZE : 249Wx1219Lx204H MM (KA185/KA185/BCF)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JCS-002-fg', 'PARTITION (ASSY) : 235Wx1205Lx178H MM. (KA185/KA185/BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JCT-001-fg', 'HARD ANGLE  44*44*6P*660L  (KB450)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JK445910-00819I-fg', 'DRYER (45 G.)  JK445910-00819I', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-003-2-fg', 'PAPER BOARD SIZE 700*700 MM. (KA185/CA125/KA185 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-004-2-fg', 'PAPER BOARD SIZE 900*900 MM. (KA185/CA125/KA185 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-005-2-fg', 'PAPER BOARD SIZE 920*920 MM. (KA185/CA125/KA185 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-008-1-fg', 'PAD SIZE 75W*1000L (KA150/M/KA150 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-011-2-fg', 'PAPER BOARD SIZE 880W*880L (KA185/CA125/KA185 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-012-2-fg', 'PAPER BOARD SIZE 680W*680L (KA185/CA125/KA185 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-014-2-fg', 'PAPER BOARD SIZE 740W*740L (KA185/CA125/KA185 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-015-1-fg', 'PAD SIZE 75W*820 (KA150/CA125/KA150 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-016-1-fg', 'PAD SIZE 75W*640 (KA150/CA125/KA150 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-029-1-fg', 'PAD SIZE 75W*600L (KA150/CA125/KA150 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-030-1-fg', 'PAPER BOPARD SIZE 780W*780L (KA185/CA125/KA185 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-032-1-fg', 'PAD SIZE 75W*690L (KA150/CA125/KA150 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-033-fg', 'PAD SIZE 75W*620L (KA150/CA125/KA150 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-034-fg', 'PAD SIZE 75W*670L (KA150/CA125/KA150 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-035-fg', 'PAPER BOARD SIZE 720W*720L (KS170/CA125/CA125 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-036-fg', 'PAPER BOARD SIZE 740W*740L (KS170/CA125/CA125 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-037-fg', 'PAPER BOARD SIZE 760W*760L (KS170/CA125/CA125 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-038-fg', 'PAPER BOARD SIZE 640x640 (KA185/CA125/KA185 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-039-fg', 'PAPER BOARD SIZE 660x660 (KA185/CA125/KA185 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-040-fg', 'PAD SIZE 75W*1050L (KA150/CA125/KA150 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-041-fg', 'PAPER BOARD SIZE 1000x1000 (KA185/CA125/KA185 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-042-fg', 'PAPER BOARD SIZE 1020x1020 (KA185/CA125/KA185 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-043-fg', 'PAPER PAD SIZE 75W*930L (KA150/CA125/KA150 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-044-fg', 'PAPER BOARD SIZE 500W*500L (KS170/CA125/CA125 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-045-fg', 'PAPER BOARD SIZE 520W*520L (KS170/CA125/CA125 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-046-fg', 'PAPER BOARD SIZE 540W*540L (KS170/CA125/CA125 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-047-fg', 'PAPER BOARD SIZE 700W*700L (KS170/CA125/CA125 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-048-fg', 'PAPER PAD SIZE 75W*780L (KA150/CA125/KA150 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-049-fg', 'PAPER BOARD SIZE 560W*560L (KS170/CA125/CA150 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-050-fg', 'PAPER PAD SIZE 75W*720L (KA150/CA125/KA150 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JNC-051-fg', 'PAPER PAD SIZE 75W*870L (KA150/CA125/KA150 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT007-fg', 'Z-NK001-SCA28  SIDE COVER-A L12F RV7  880W*1015L KA230/CA125/KA230 C/F (1:2)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT012-fg', 'Z-NK001-PAD33  PAD L12F RV7 1070W*1080L  KA230/CA125*3/KA230  BC/F  1:4', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT020-fg', 'Z-NK001-PD41N-1  PAPER  PALLET MODEL D54T', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT023-fg', 'Z-63PTT-JT023  PARTITION  SET  FOR  MODEL  MT380A   (PTT-A  +  PTT-C)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT027-fg', 'Z-NK001-CD41N-3  CAP MODEL D41N+ 54T', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT028-fg', 'Z-NK001-SD41N-2  SLEEVE  MODEL   D41N + D54T', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT037-fg', 'Z-48200-NK84M Package Assy For 4820084M10-20 (Service part YLA)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT042-1-fg', 'Z-NK003-BOXGJ-SPS  BOX SPS&GJ 399W*1329L OD:280W*372L*123H MM. KA230/CA125/KA230 C/F (MODEL: 3730A-OK020 (SPS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT044-fg', 'Z-NK003-PTTGJ-SPS  PARTITION SET OD : 272W*364L*111 H MM  KA185/CA125*3/KA185 BC/F (MODEL 3730A-OK020 (SPS) )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT047-2-fg', 'Z-NK003-BOXN6-SS BOX OD:280Wx372Lx123H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT048-1-fg', 'Z-NK003-PTTN6-SS  PARTITION SET OD : 272W*364L*111 H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT049-fg', 'Z-NK002-15182 BOX OD 462Wx531Lx330H + PTT COLUMN STEERING HONDA  (SERVICE PART)  KA230/CA125*3/KA230 BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JT050-fg', 'Z-NK002-15181 BOX MCU HONDA (SERVICE PART) OD : 188W*188L*202H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTB-001-fg', 'PARTITION ASSY  OD : 180*180 MM (CA100102182)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTB-002-fg', 'PAD COVER OD : 180*189*50 MM (CA080615769)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTB-003-fg', 'PARTITION (L02D) OD : 1095x1108x237 MM. CA100102181', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTB-004-fg', 'PARTITION ASSY  OD : 1095*1108*174 mm (H61BE&H60A&H61P) 1:8 CA100102184', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTB-005-fg', 'CARTON BOX : 274W x 401L x 127H Model BEARING & HUB PACKING (CA100102215)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTB-006-fg', 'PARTITION : 258W x 387L x 105H Model BEARING & HUB PACKING (CA100102216)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTB-011-fg', 'COMPLETE SET Model : I G P', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTB-012-fg', 'TOP CAP(OD): 651W*1040L*120H MM. For model : IGP', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTB-013-fg', 'PAPER PALLET (OD) : 651Wx1030Lx234H MM. For model : I G P', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-004-fg', 'Z-NK002-YL1KD PACKAGE FOR MODEL:SUZUKI YL1-KD', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-005-fg', 'Z-53213-T7Y-003 BOX ASSY FOR MODEL : INTERMIDAI SHAFT', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-006-fg', 'Z-NK002-YLA-A PARTITION - A (1:12)  (MODEL SUZUKI YLA)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-007-fg', 'Z-NK002-YLA-B PARTITION - B (1:3)  (MODEL SUZUKI YLA)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-008-fg', 'Z-NK002-YLA-C PARTITION - C (1:6)  (MODEL SUZUKI YLA)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-009-fg', 'Z-NK002-YLA-D  PARTITION - D (1:24) (MODEL SUZUKI YLA)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-010-fg', 'Z-NK002-YLA-E  PARTITION - E (1:6) (MODEL SUZUKI YLA)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-011-fg', 'Z-NK002-TCYLA  TOP CAP YLA-KD OD:1132W*1139L*105H MM. (MODEL SUZUKI YLA)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-012-fg', 'Z-NK002-SLYLA  SLEEVE SET YLA-KD OD:1098W*1119L*645H MM. (MODEL SUZUKI YLA)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-013-fg', 'Z-NK002-BTYLA  BOTTOM CAP  YLA-KD OD:1132W*1139L*105H MM. (MODEL SUZUKI YLA)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-014-fg', 'Z-NK002-PLYLA  PAPER PALLET   YLA-KD OD:1132W*1139L*130H MM. (MODEL SUZUKI YLA)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-030-fg', 'Z-NK002-YLAKD PACKAGE FOR MODEL:SUZUKI YLA-KD', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-031 (Cancel)-fg', 'Z-NK002-17082  PACKAGE FOR MODEL : KMP', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-031-1 (Cancel)-fg', 'Z-NK002-17082  PACKAGE FOR MODEL : KMP', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-031-2 Cancel-fg', 'Z-NK002-17082  PACKAGE FOR MODEL : KMP (DV.)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-031-3-fg', 'Z-NK002-17082  PACKAGE FOR MODEL : KMP (DV2.)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-032 Cancel-fg', 'Z-NK002-17081 PACKAGE FOR MODEL: 230B', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-032-1-fg', 'Z-NK002-17081 PACKAGE FOR MODEL: 230B DV.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-033-1-fg', 'Z-NK002-CBS12  PAD (OD) 490W*240L MM. FOR MODEL : CENTER BEARING', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-034-1-fg', 'Z-NK002-CBS11  PARTITION  (OD) 225W*490L MM. FOR MODEL : CENTER BEARING', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-036 (Cancel)-fg', 'Z-NK002-18006 PACKAGE FOR MODEL : SLEEVE PINION', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-037-fg', 'Z-NK002-18003 PACKAGE FOR MODEL : L12F-KD (PACK 12 PCS/SET)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-038-fg', 'Z-NK002-18005  PACKAGE FOR MODEL : NUT LOCK', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-039-fg', 'Z-NK002-18006  PACKAGE FOR MODEL : SLEEVE PINION', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-040-fg', 'Z-NK002-18014  PACKAGE FOR MODEL : SLEEVE SHAFT ASSY', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-042-fg', 'Z-NK004-BOX SPS&GJ DLC CARTON BOX SPS&GJ 272W*372L*123H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-043-fg', 'Z-NK004-PTT SPS&GJ DLC  PARTITION  SPS&GJ 272W*364L*111H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-044(CANCEL)-fg', 'Z-NK002-190801 PACKAGE FOR MODEL : RING CAM (AMERICA)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-044-1-fg', 'Z-NK002-190801 PACKAGE FOR MODEL : RING CAM (AMERICA)  (PAD 1:36)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-044-2-fg', 'CARTON BOX OD: 303W*360L*144H MM  (MODEL : RING CAM (AMERICA))', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-044-3-fg', 'PARTITION SET OD: 289W*346L*60 MM  (MODEL : RING CAM (AMERICA))', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-044-4-fg', 'PAD OD: 289W*346L MM  (MODEL : RING CAM (AMERICA))', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-045-fg', 'PARTITION LINK ASSY PKG.FOR SREVICE PART TOYOTA (L/R)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-046-fg', 'Z-NK002-15012-2 TOP PAD ASSY 715W*780L WI-WALL', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-047 Cancel-fg', 'Z-NK002-0020M  PACKAGE FOR MODEL : 20M HONDA EXPORT', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-047-1-fg', 'Z-NK002-0020M  PACKAGE FOR MODEL : 20M HONDA EXPORT DV.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-048-fg', 'Z-NK002-00740B  PACKAGE FOR MODEL : 740B JAMY', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-049-fg', 'PACKAGE FOR MODEL : JPC PACK 20 PCS / SET', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-050-fg', 'Z-NK003-JLA07 PACKAGE FOR MODEL : JLA07-000060 (Magnetic shied)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-051 Cancel-fg', 'Z-NK003-BSP11  BOX SERVICE  LINK TOYODA (PACK 1)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-055 Cancel-fg', 'PACKAGE FOR MODEL : 104D JAMY (PACK 32 PCS/SET)  Z-NK002-104DJM', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-055-1-fg', 'PACKAGE FOR MODEL : 104D JAMY (PACK 32 PCS/SET)  Z-NK002-104DJM DV.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-056-fg', 'PACKAGE FOR LINK ASSY POWER STEERING', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-057 (Cancel)-fg', 'PACKAGE FOR MODEL : 3M0A JAMY', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-057-1 Cancel-fg', 'Z-NK002-21092 PACKAGE FOR MODEL : 3M0A JAMY (MALAYSIA) (PACK 18 PCS/SET) DV.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-057-2-fg', 'Z-NK002-21092 PACKAGE FOR MODEL : 3M0A JAMY (MALAYSIA) (PACK 18 PCS/SET) DV2.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-058-fg', 'PACKAGE FOR MODEL BOX TUBE ASSY (OD) : 320W x 595L x 100H mm. Z-NK002-21175', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-059-fg', 'PARTITION  ASSY FOR MODEL LINK TOYOTA OD : 1090W x 1430L x 130H (1:20)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-060-fg', 'Wooden pallet & Bottom cap OD: 759W*826L*130H MM', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-061-fg', 'SERVICE FUMIGATION WOODEN PALLET OD: 759*826*130H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-062 (Cancel)-fg', 'PARTITION ASSY  OD: 270*1410*127H (PKG. FOR LINK ASSY POWER STEERING)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-062-1-fg', 'PARTITION ASSY  OD: 270*1410*127H (PKG. FOR LINK ASSY POWER STEERING)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-063-fg', 'TOP CAP   OD: 1211*1464*110H (PKG. FOR LINK ASSY POWER STEERING)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-064-fg', 'SLEEVE SET   OD: 1180*1444*825H (PKG. FOR LINK ASSY POWER STEERING)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-065-fg', 'WOODEN PALLET & BOTTOM CAP  OD: 1211*1464*230H (PKG. FOR LINK ASSY POWER STEERING)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-066-fg', 'CARTON BOX  OD: 290*1424*165H (PKG. FOR LINK ASSY POWER STEERING)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-067-fg', 'WOODEN PALLET (OD) : 1200W*1250L*135H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-068-fg', 'CARTON BOX LINK ASSY 188D PROJECT', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-070 Cancel-fg', 'PACKAGE FOR MODEL : RACK SHAFT PAPER (PACK 60 PCS)  Z-NK002-17019', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-070-1-fg', 'Z-NK002-17019-1 PACKAGE FOR MODEL : RACK SHAFT PAPER (PACK 60 PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-071-fg', 'Carton Box Model D92A (Pack 1 )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-072-fg', 'Partition Assy Model D92A (Pack 1 )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-075 Cancel-fg', 'PKG For Model D92A (Pack 32 )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-075-1-fg', 'TOP CAP  PKG For Model D92A (Pack 32 )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-075-2-fg', 'SLEEVE SET  PKG For Model D92A (Pack 32 )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-075-3-fg', 'PARTITION-3A  PKG For Model D92A (Pack 32 )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-075-4-fg', 'PARTITION-3B  PKG For Model D92A (Pack 32 )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-075-5-fg', 'PAD  PKG For Model D92A (Pack 32 )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-075-6-fg', 'PAPER PALLET & BOTTOM CAP  PKG For Model D92A (Pack 32 )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-075-7 Cancel-fg', 'PKG For Model D92A (Pack 32 ) DV.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-075-8-fg', 'PKG For Model D92A (Pack 32 ) DV.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-076-fg', 'Package Model Suzuki YL1 (Partition Only)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-077-fg', 'Z-NK001-PAM43  PACKAGE  ASSY FOR MODEL D41N, D54T ( PALLET/SLEEVE/CAP )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-078-fg', 'TOP CAP SIZE OD : 765Wx819Lx110H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-079-fg', 'SLEEVE SET SIZE OD : 734Wx799Lx514L MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-080-fg', 'PARTITION ASSY SIZE OD : 714Wx779Lx128H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-081-fg', 'WOODEN PALLET & BOTTOM CAP SIZE OD : 759Wx826Lx240H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-082-fg', 'PARTITION-A1 (OD) : 426Wx1420L MM. Model : D66B (PERODUA)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-083-fg', 'PARTITION-A2 (OD) : 1066Wx100L MM. Model : D66B (PERODUA)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-084-fg', 'PARTITION-A3 (OD) : 426Wx1066L MM. Model : D66B (PERODUA)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'JTK-085-fg', 'PAD (OD) : 1400Wx1066L MM. Model : D66B (PERODUA)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KBL-003-fg', '100  BOX :(OD)370*540*300H   KA125/CA125/KA125 C/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KNS-001-fg', 'CUSHION  SIZE  75W*75T*530L MM   ลอนแนวตั้ง+ปิดกระดาษทุกด้าน', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KNS-002-fg', 'CUSHION  SIZE  20W*75T*530L MM ลอนแนวตั้ง+ปิดกระดาษทุกด้าน', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KNS-003-fg', 'CUSHION  SIZE  25W*75T*530L MM   ลอนแนวตั้ง+ปิดกระดาษทุกด้าน', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KOY-001-fg', 'Carton Reel size 610x610 mm.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KOY-002-fg', 'BOX SIZE (ID) : 315Wx315Lx145H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KOY-003-fg', 'BOX SIZE (ID) : 140Wx300Lx120H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KOY-004-fg', 'Carton Pad Size : 800x800 mm. (KA125/KA125)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KOY-006-fg', 'Carton Box Size : 160Wx640Lx645 mm. KA125/3CA125/KA125 BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KSI-001-fg', 'TOP CAP', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KSI-002-fg', 'PARTITION SET', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KSI-003-fg', 'SLEEVE SET', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KSI-004-fg', 'PAPER PALLET', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-013-fg', 'TOP CAP SIZE OD 1050W*1365L (KI150/CA125*3/KI150 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-015-fg', 'BOTTOM CAP SIZE OD 1030W*1334L (KI150/CA125*3/KI150 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-018-fg', 'BOX OD SIZE 650W*650L*350H  (KA125/CA125*3/KA125 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-024-fg', 'BOX SIZE 440W*1335L*595 H (KI150/CA125*3/KI150 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-058-fg', 'BOX ID SIZE : 1600W*1600L*800H (TOPCAP+SLEEVE+BOTTOM+WOOD PALLET) (RR LCP)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-059-fg', 'BOX ID SIZE : 1000W*1600L*800H (TOPCAP+SLEEVE+BOTTOM+WOOD PALLET) (FR LCP)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-066-fg', 'PAD OD 1260Wx560L (KI150/CA125/KI150 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-075-fg', 'PAPER PALLET 1100x1900x89 MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-078-fg', 'BOX ID SIZE : 1500W*2500L*800H (TOPCAP+SLEEVE+BOTTOM+WOODEN PALLET)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-079-fg', 'BOX ID SIZE : 1500W*2500L*1200H (TOPCAP+SLEEVE+BOTTOM+WOOD PALLET)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-082-fg', 'Partition : 517W x 432L Assy  (LH/RH) (KI125/KA125/KA125 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-083-fg', 'Cover : 850W x 500L (CA125 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-085-fg', 'BOX ID SIZE : 1300W*1600L*1000H (TOP CAP + SLEEVE + BOTTOM + WOOD PALLET)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-087-fg', 'PARTITION SIZE : 1140W*1780L MM. (KI125/CA125/KI125 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-087-1 Cancel-fg', 'PARTITION SIZE : 1140W*1780L MM. (KI150/CA125/KI150 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-088-fg', 'PAD SIZE : 1090W*1690L MM. (KI125/CA125/KI125 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-088-1 Cancel-fg', 'PAD SIZE : 1090W*1690L MM. (KI150/CA125/KI150 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-089-fg', 'PAD SIZE : 490W*1020L MM. (KI125/CA125/KI125 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-089-1 Cancel-fg', 'PAD SIZE : 490W*1020L MM. (KI150/CA125/KI150 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-090-fg', 'PAD SIZE : 460W*1660L MM. (KI125/CA125/KI125 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-090-1 Cancel-fg', 'PAD SIZE : 460W*1660L MM. (KI150/CA125/KI150 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-091-fg', 'BOX ID SIZE : 1750W*2350L*1000H (Topcap+Sleeve+Bottom+Wood Pallet)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-098-fg', 'TOP CAP SIZE (ID) : 1414W*1420L*68H MM. (KA185/CA125/KA185 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-099-fg', 'BOTTOM CAP SIZE (ID) : 1400W*1400W*68H MM. (KA185/CA125/KA185 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-100-fg', 'BOX ID SIZE : 1600W*2600L*600H (TOP CAP+SLEEVE+BOTTOM+WOOD PALLET)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-108-fg', 'BOX SIZE OD : 430Wx600Lx350H MM. KA125/3CA125/KA125 BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-109-fg', 'BOX SIZE OD : 1750Wx1750Lx700H MM. (TOPCAP+SLEEVE+BOTTOM+WOODEN PALLET)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KTF-110-fg', 'BOX SIZE OD : 1750Wx1750Lx200H MM. (TOPCAP+TRAY+WOODEN PALLET)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KYB-001-fg', '511-G001-00 Conner Guard  OD  50*50*7P*100L  (KB450)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KYB-002-1-fg', 'KST002 PKG.BOX BODY', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'KYB-004-1-fg', 'PAD B3  : 350W*486L MM. (KA230/KA230 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LHT-001-fg', 'HARD ANGLE : 35x35x7Px1820L MM.(5T) KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'LHT-008-fg', 'CARDBORAD REEL 1040/545 MM. with PVC GUIDE', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MA445910-00819M-fg', 'DRYER (45 G.)  MA445910-00819M', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MACHINE-STRAWBERRY-NKF-fg', 'MACHINE-STRAWBERRY-NKF', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MAT ASSY-fg', 'MAT ASSY', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MAT COMMON-fg', 'MAT COMMON', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MAT-HA-fg', 'MAT-HA', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MAT-PACKIN-fg', 'MAT-PACKIN', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MAT-PALLET-fg', 'MAT-PALLET', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MAT-SAMPLE-fg', 'MAT-SAMPLE', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MIS-NKF-fg', 'MIS-NKF', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MNS-0001-fg', 'Package for Model : TP-91099X,91100X', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MOLECULAR RD-7-fg', 'MOLECULAR SIEVE RD-7', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MOU-fg', 'MOLECULAR', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MRRK-019-fg', 'CARTON BOX  MODEL  SNA  SIZE OD 732*1129*560 MM', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MRRK-020-fg', 'PARTITION  SET ASSEMBLY  SIZE  718W*132L    MODEL  SNA', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MRRK-021-fg', 'PAPER  PALLET  ASSEMBLY  SIZE  1160W*1484L   MODEL  SNA', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MRRK-043-fg', 'CORNNER  SUPPORT SIZE 44*44*6P*150  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MSE-001-fg', 'CORNER SIZE : 30*40W*7P*1400L KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MSE-002-fg', 'CORNER SIZE : 30*40W*7P*1700L KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MSE-003-fg', 'CORNER SIZE : 30*40W*7P*1900L KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MSE-004-fg', 'CORNER SIZE : 30*40W*7P*2200L KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MSE-005-fg', 'CORNER SIZE : 30*40W*7P*2500L KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MSE-006-fg', 'CORNER SIZE : 70*90W*7P*1285L KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MSE-007-fg', 'CORNER SIZE : 70*90W*7P*1435L KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MSE-008-fg', 'CORNER SIZE : 70*90W*7P*1630L KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MSE-009-fg', 'CORNER SIZE : 70*90W*7P*1830L KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MSE-010-fg', 'CORNER SIZE : 70*90W*7P*2030L KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MSE-011-fg', 'CORNER SIZE : 70*90W*7P*2230L KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MSE-012-fg', 'BOX OD SIZE : 310Wx1070Lx210H MM. KA185/3CA125/KA185 BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MSE-013-fg', 'BOX OD SIZE : 380Wx1600Lx310H MM. KA185/3CA125/KA185 BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MSE-014-fg', 'BOX OD SIZE : 310Wx1070Lx210H MM. KA185/3CA125/KA185 BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MSN-0001-1-fg', 'Package for Model : TP-94034X,94035X', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MST-003-fg', 'Paper Reel 400 x 25T (OD)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MST-004-fg', 'BOX for Paper Reel 400 x 25T', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MST-005-fg', 'Paper Reel 530 x 35T (OD)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MST-006-fg', 'BOX for Paper Reel 530 x 35T', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MT-009-fg', 'PAPER PALLET ASSY', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MYACC-NKF-fg', 'MYACC-NKF', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NAGANO-003-1-fg', 'BOX OD : 333W*408L*92H  KA230/CA125/KA230 CF (MODEL : W8 )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-006-fg', 'TOP CAP OD : 1904 x 1233 x 110H  (Model : Outer box for Camera 1st layer)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-006-1-fg', 'TOP CAP OD : 1904 x 1233 x 110H  (Model : Outer box for Camera 2nd layer)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-007-fg', 'SLEEVE OD : 1053 x 1203 x 980H (Model : Outer box for Camera 1st layer)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-007-1-fg', 'SLEEVE OD : 1053 x 1203 x 785H (Model : Outer box for Camera 2nd layer)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-008-fg', 'Bottom OD : 1094 x 1233 x 110H (Model : Outer box for Camera 1st layer)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-008-1-fg', 'Bottom OD : 1094 x 1233 x 110H (Model : Outer box for Camera 2nd layer)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-009-fg', 'HARD ANGLE  75*75*7P*880L  KB450 (Model : Outer box for Camera 1st layer)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-009-1-fg', 'HARD ANGLE  75*75*7P*785L  KB450 (Model : Outer box for Camera 2nd layer)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-010-fg', 'TOP CAP OD : 803 x 1204 x 110H  (Model : Outer box for ABS 1st layer)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-010-1-fg', 'TOP CAP OD : 803 x 1204 x 110H  (Model : Outer box for ABS 2nd layer)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-011-fg', 'SLEEVE OD : 762 x 1174 x 974H (Model : Outer box for ABS 1st Layer)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-011-1-fg', 'SLEEVE OD : 762 x 1174 x 732H (Model : Outer box for ABS 2nd Layer)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-012-fg', 'Bottom OD : 803 x 1204 x 110H  (Model : Outer box for ABS 1st Layer)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-012-1-fg', 'Bottom OD : 803 x 1204 x 110H  (Model : Outer box for ABS 2nd Layer)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-013-fg', 'HARD ANGLE  75*75*7P*974L  KB450 (Model : Outer box for ABS 1st Layer)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-013-1-fg', 'HARD ANGLE  75*75*7P*732L  KB450 (Model : Outer box for ABS 2nd Layer)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-015-fg', 'CARTON SLEEVE ABS SIZE OD : 1515W x 345L  mm.  ( KL205/CA125/KL205  C/F )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-020-fg', 'MIDLE PAD  SIZE OD : 310W x 367L mm.  ( KI125/CA125/KI125  C/F ) 1:2', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-022-fg', 'CORNER SIZE (ID) 44x44x4Px800L MM. KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-027-fg', 'MIDLE PAD SIZE OD : 310Wx367L mm. ( KI125/CA125/KI125 C/F ) ( 1 PCS/SET)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-028-fg', 'OUTER FOR BOX : CAMERA (PACK 30) TOP CAP,SLEEVE SET,PAD,BOTTOM CAP', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NDE-029-fg', 'PAD COVER SIZE : 404Wx375L MM. KI125/CA125/KI125 BC/f (1PCS/SET)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NGN-002-fg', 'CARTON BOX  OD:249W*529L*80H + PTT ASSY  237W*517L*58H + PAD 517W*237L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NISSANSERVICEPART-fg', 'Package for Rear Excel Nissan (Service Part)   Size 438*1802*602H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NSB-015 (CANCEL)-fg', '2315010002  PACKAGE PBB-JAZZ14EX  (OUTTER) (1:1)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NSB-016 (CANCEL)-fg', '2315010001  PACKAGE PSB-JAZZ14EX  (INNER) (1:36)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NSB-017-fg', 'PAPER TRAY ASSY OD:1070W*1120L*107H  ( LT27 )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NSB-018-fg', 'PAD SUPPORT OD:1070W*1120L*4T  ( LT27 )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NSB-024-fg', 'PACKAGE FOR MODEL : Y4L (EXPORT BY AIR)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NSB-044-fg', 'SLEEVE COVER  FOR MODEL T6', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NSB-10/1-fg', 'Package  DrBA  X61B 2313040002 (PTT:KA185/CA125*3/KA185 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NSB-7-fg', 'T6 FSAO  PACKING  7 LAYER  63 PCS/SET  2313030013', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NSK-023-1-fg', 'CARTON BOX SIZE OD 320Wx435Lx220H KA125/CA125*3/KA125 BC/F (ลูกค้า ลังใส่เอกสาร Size 423*300*200 mm.)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT261268-fg', 'Carton box assy  365W*365L*495H   (1: 36)   (418  STRG ,  V36  HUB  CORE  INDONESIA)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT261268-1-1-fg', 'CARTON BOX ASSY (365W*365L*495H) /047 Pallet', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT261268-2-fg', 'Carton Box assy (365W*365L*495H)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT261269-fg', 'HARD ANGLE  44*44*7P*1980L  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT261290-fg', 'PAPER PALLET  ASSY  TOA  AND  TRO   FULL  SET', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT2612901-fg', 'TRAY C1  1:1  (NO ASSY)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT2612902-fg', 'PARTITION  C2  1:5 (NO ASSY)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT2612903-fg', 'PARTITION  C3  1:5 (NO ASSY)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT2612904-fg', 'STOPPER C4 1:4 (NO ASSY)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT2612905-fg', 'PARTITION  C5  1:2 (NO ASSY)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT261291-fg', 'TOP CAP & SLEEVE TOA & TRO', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT2612911-fg', 'TOP CAP & 676Wx2140Lx135H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT261291-1-fg', 'TRAY&PARTATION 1:15 (ASSY)  Model : XC2A(099A)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT261291-1-2-fg', 'TRAY & PARTATION 1:15 (ASSY)  P33A JPN', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT261291-1-3-fg', 'TOP CAP 676W*2140L*135H P33A JPN', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT2612912-fg', 'SLEEVE-A 940Wx2000L MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT261291-2-fg', 'TRAY&PARTATION 1:9 (ASSY)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT261291-3-fg', 'TRAY&PARTATION 1:11 (ASSY)   (XC2B,132)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT261313-1-fg', 'PARTITION ASSY 490W*514L*126H MM.189G', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT261316-fg', 'PAPER PALLET  AS  MODEL  AS  TYO', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT261320-fg', 'PAPER PALLET  DR  MODEL  TYO', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT261346-fg', 'CARTON  BOX   SET  TYO  STRG', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT261347-fg', 'HARD ANGLE   44*44*8P*2200L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT2759-fg', 'Partition - A  Size  377W*692L   ( 1:2) KL205/CA185/KL205 BF MODEL L12F DR', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT2760-fg', 'Partition - B  Size  158W*508L   (1:4) KL205/CA185/KL205 BF MODEL L12F DR', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT3271-fg', 'WOODEN  PALLET  MODEL  2GA  DR', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT3678-fg', 'CARTON BOX SET 2GA  STRG', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT3679-fg', 'HARD ANGLE SET 2GA STRG  (44*44*8P*2200L)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT4084-fg', 'BOX 2XP PANEL ASSY DR', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT4085-fg', 'BOX 2XP PANEL ASSY AS', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT4086-fg', 'BOX 2XP COVER ASSY AS UNDER', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT4087-fg', 'BOX 2XP GARN AS,DR SIDE DEFF', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT4088-fg', 'BOX 2XP VISOR ASSY METER', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT4323-fg', 'PAPER BOX SERENA SIDE VENT RH', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT4324-fg', 'PAPER BOX SERENA SIDE VENT LH', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT4354-fg', 'PAPER BOX SERENA CTR VENT LH', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT4426-fg', 'Carton Box OD:255W*385L*105H mm (YL1)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT4426-1-fg', 'PAD : 240W*370L mm.(YL1)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT4427-fg', 'Carton Box OD:275W*355L*160H mm (YL1)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT4427-1-fg', 'PAD : 261W*341L mm.(YL1)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT4428-fg', 'Carton Box OD:580W*730L*340H mm (YL1)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT4428-1-fg', 'PAD : 564W*714L mm.(YL1)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT4429-fg', 'Carton Box OD:315W*550L*80H mm (YL1)  (New size)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT4429-1-fg', 'Partition Assy 339W*536L*68H (YL1)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT4429-2-fg', 'PAD : 339W*536L mm.(YL1)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT4485-fg', 'Carton Box (With Partition & Pad (YWO)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT4487-fg', 'Conner Support (YWO)  44*44*8P*890L KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT4522-fg', 'Carton Box ID : 400W*400L*533H mm (782B,D)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT4524-fg', 'Carton Box OD: 440W*440L*522H mm (X61G) BOX/SET', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT4525-fg', 'HARD ANGLE   44*44*7P*2088L mm', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT4613-fg', 'Carton Box OD : 550W*620L*245H mm. (CTR) 2HU Pallet/SET', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT4613-2-fg', 'Wooden Pallet (1120W*1120L*130H)  2HU', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NT4646-fg', 'Carton Box (With Partition & Pad )(XC2A,099A)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NTN-001-fg', 'BOX  SET  -  C  ID  SIZE  850*705*100 MM +  BOTTOM  TRAY  ID  SIZE  850*685*200 MM  (เป็นค่าสินค้าไม่สามารถหัก ณ ที่จ่ายได้)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NTT-001-fg', 'PACKAGE FOR MODEL P32R PACK 54 PCS/BOX', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NTT-002-fg', 'Partition Set Assembly (PACK 54 PCS.)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'NV-fg', 'NAVARA ฒท7408', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'OLD ISUZU TRUCK-fg', 'ISUZU TURCK FTR33P24-7002607 WITH CONTAINER', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'P1-3D8-fg', 'PACKAGE ASSY FOR P1-3D8', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'P32-fg', 'PACKAGE FOR NISSAN  PART  P32  SIZE  992*2308*1044H    (1)  TOP CAP  (2)  SLEEVE  SET  (3)  PARTITION  SET  (4)   PALLET  SIZE  992*2300*145H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'P32R-1-fg', 'PACKAGE FOR   MODEL  P32  R    (Pack  1)   (1)  TOP CAP   500W*2340L   (2)  Bottom  Cap  514W  * 2340L    (3)  Side & End Sleeve  Set Assembly  290W*476L  (4)   Partition  Set  Assembly  160W*160L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'P32R-18-fg', 'PACKAGE FOR MODEL P32R (Pack 18 Pcs)  (1)  TOP CAP 824W*2300L (2) Paper Pallet 784W*2300L(3)Side & End Sleeve Set Assembly 380W* 2266L (4) Partition Set Assembly 327W* 7366L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'P32R-2-fg', 'PACKAGING FOR  MODEL P32R  (PACK  2  PCS / BOX)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'P32R-32-fg', 'Packing  Prop  Shaft  P32 R (37000 4BEOA)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'P32R-40-fg', 'PACKAGE FOR   MODEL  P32  R   (Pack  40  Pcs)   Steel  Rack  Nissan', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'P32R-45-fg', 'PACKAGE FOR MODEL P32R PACK 45 PCS ( R5T Steel  Rack  Nissan)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'P32R-45-1-fg', 'PACKAGE FOR MODEL P32R PACK 45 PCS ( R5T Steel  Rack  Nissan)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'P32R-54-fg', 'PACKAGE FOR MODEL P32R PACK 54 PCS/BOX', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'P32R-77-fg', 'Packing  P32R-77  (37000 4BA1A (5021072-1)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'P4-6BG-SHAFT CAM-fg', 'PACKAGE ASSY  P4-6BG-SHAFT CAM', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'P4-6BG-SHAFT CAM/TOP CAP-fg', 'TOP CAP MODEL : PACKAGE ASSY  P4-6BG-SHAFT CAM', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'P4-6EK (Cancel)-fg', 'PACKAGE ASSY FOR P4-6EK', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'P60A  ALU-PACK 5-fg', 'PACKAGE SERVICE PART : ALUMINIUM PROPSHAFT P60 AI (PACK 5 PCS./PALLET)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'P60A JVC-PACK 10-fg', 'PACKAGING  P60A  JVC  Prop Shaft  (PACK 10 PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'P60A-PACK 10-fg', 'PACKAGE SERVICE PART : ALUMINIUM PROPSHAFT P60 AI (PACK 10 PCS./PALLET)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PACKAGE DFF CASE EDL (PE)-fg', 'Package T6 Diff Case ELD (New PE Bag)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PACKAGE DFF CASE EDL(NEW)-fg', 'Package for Export Package Dff Case JL EDL (NEW)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PAD-22562439 Cancel-fg', 'PAD Size : 295W*435L 1:3', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PAD-22562439-1-fg', 'PAD Size : 295W*435L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PAD-22562444-fg', 'PAD Assy Size : 295W*435L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PADL-DANA-1-fg', 'PAD SIZE  260*500   CA125*CA125*3*CA125  BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PADS-DANA-1-fg', 'PAD SIZE  240*240   CA125*CA125*3*CA125  BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PAD-TOYODA/1-fg', 'Z-65PAD-TOYODA SIZE 347W*514L KA125/CA125/KA125 C/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PALLET-KELLOGG-fg', 'K190342000   PAPER  PALLET  1236 mm*1060 mm*1145 mm  1.8 k  (Paragon)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PAPER PALLET-fg', 'Z-NK001-PPP07  PAPER  PALLET VALVE (PP001)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PAPER PALLET-PINION VALVE-fg', 'Z-NK002-PAP05  PAPER PALLET (M. PINION VALVE)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PAR-GM0-007-fg', 'PARTITION ASSY (MODEL WHEEL HOUSE LIP RH/LH (GMI700_MY17)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-CTN-HR014-1-fg', 'CARTON BOX (SET) BAI WALL + KL250/3CA125/KL250 BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-EPE-012-fg', 'EPE FOAM 50W*50L*270H MM', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-FI-016-fg', 'FIBER ANGLE  50*50*5P*1100L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-FI-970-fg', 'FIBER ANGLE  50*50*5P*970L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PH9-PAD-HR014-fg', '940W*1070L  (KI125/CA125/CA125 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PKCB00100-fg', 'BOX OD : 300W*1500L*1100H MM', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PKD41+54T Cancel-fg', 'Z-NK001-PAM43  PACKAGE  ASSY FOR MODEL D41N, D54T ( PALLET/SLEEVE/CAP )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PM00491-fg', 'PAPER SUPPORT 780*780mm', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PP-4J2-fg', 'PACKAGE ASSY FOR 4J2 BODY  CYLINDER (TOP CAP , SLEEVE, PARTITION,PAD,PAPER PALLET)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PPD-600-fg', 'PACKING  FOR PART NO  5016308   600  PCS/ PALLET 3 LAYER', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PP-HTET001-1-fg', 'PAPER PALLET 1120*1120*100H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PP-HTET001-2-fg', 'CAP 1120W*1120L*100H (PALLET)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PP-HTET001-3-fg', 'PALLET 964W * 978L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PP-HTET001-4-fg', 'PAPER PALLET 1136W*1154L*163H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PP-HTET001-5-fg', 'CAP 1136W*1154L*65H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PP-HTET001-6-fg', 'TOP CAP 933W*1022L*110H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PPPUMP-fg', 'Z-NK001-PPM25  PAPER PALLET PUMP WITH TOP CAP AND SLEEVE M&M', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PPYMH-4-fg', 'PAPER PALLET WITH T/B   SLEEVE  (MODEL 4CW)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PRV-001-fg', 'PAPER ROLL 540x540Wx294H (KA230/CA125*3/KA230 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PRV-003-fg', 'Cornner  Size  50*50*4P*1500L  (KB450)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PRV-007-fg', 'PAPER ROLL 645x645Wx155H (KL205/CA125*3/KL205 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PRV-008-fg', 'Cornner  Size  50*50*4P*2000L  (KB450)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PS0027220-fg', 'BOX NO.B6', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PS0027221-fg', 'BOX NO.B7', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PS0052073-fg', 'BOX NO.B6-20', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PS0052073-1-fg', 'BOX NO.B6-20  (KA185/CA125/KA185 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PS0052555-fg', 'PAPER PAD 270-6KB', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PS0052556-fg', 'PAPER PAD 345-6KA', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PS0052557-fg', 'PAPER PAD 270-6KA', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PT3V44A-fg', 'PARTITION -A 250W*438L KI150/CA125*3/KI150 BC/F Model  3V44  1:6', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PT3V44B-fg', 'PARTITION -B 250W*580L KI150/CA125*3/KI150  BC/F Model  3V44  1:4', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTP-001-fg', 'HARD  ANGLE  44*44*7P*150L MM/  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTT SET-PINION VALVE-fg', 'Z-NK002-PTT04  PARTITION  SET- PINION VALVE (1:2)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTT-22562439 Cancel-fg', 'Partition Assy Size : 295Wx435Lx41H 1:3', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTT-22562439-1-fg', 'Partition Assy Size : 295Wx435Lx41H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTT-22562444-fg', 'Partition Assy Size : 375W*435L*137H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTT-A-1-fg', 'PARTITION-A  SIZE 107W*230L  KA230/M125/KA230   C/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTT-B-1-fg', 'PARTITION-B  SIZE 190W*228L  KA230/M125/KA230   C/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTT-CVJ T6-fg', 'PARTITION FOR CVJ T6 (Sample)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTT-H-1-fg', 'PARTITION-H SIZE 130W*240L  KA230/CA125/KA230  C/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTT-JTEKT-fg', 'Z-44PTT-JTEKT PARTITION SUPPORT SIZE  240*31T*30H  (940*240) KA230*M*KA230 C/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTT-RACK SHAFT-fg', 'PARTITION ASSY OD:715Wx780Lx82H 1:6 ( M.RACK SHAFT PAPER PACK 60 PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'PTTYMH-03-fg', 'PARTITION  SET  ASSY  (PACKING 3  LAYER / PALLET)  PACKING  FOR  4CW  SIZE  742*895*509H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RACK SHAFT (PACK 60 PCS)C-fg', 'PACKAGE FOR MODEL : RACK SHAFT PAPER (PACK 60 PCS)  Z-NK002-17019', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RACK SHAFT- PTT ASSY-fg', 'PARTITION ASSY 715W*780L FUTURE 5T+ EVA (1:6) MODEL RACK SHAFT', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RCF-001-fg', 'PAPER CIRCLE SIZE : 825 MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'REF-003-fg', 'PKG  FOR : COUPLING B (Pack 60 Pcs.)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'REF-004-fg', 'PKG  FOR : BRAKE WHEEL (Pack 20 Pcs.)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-099-fg', 'PTT-3B 428W*1006L KA230/CA125*3/KA230  BCF MODEL:JTK-031 มัดละ 25 ชิ้น', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKEL-004-1-fg', 'BEAM 1067W*1022L KI185/CA125*3/KI185 BC/F 1:2 มัดละ 10 ชิ้น', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKEL-005-fg', 'SLEEVE 1035W*2268L KI125/CA125*3/KI125 BC/F 1:2 ไม่ต้องมัดวางสลับ มือละ 10 ชิ้น', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-062-fg', 'WOODEN PALLET SIZE 970W*1130L*135H (FUMIGATION) MODEL  M07', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-071-fg', 'TOP CAP 1310W*1316L  KA230/CA185*3/KA230 BCF  MODEL:M08  SCREEN COLOR BLACK', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-072-fg', 'PTT-3A 450W*1036L  KA230/CA125/KA230 CF  MODEL:M08', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-073-fg', 'PTT-3B 442W*1023L  KA230/CA125/KA230 CF  MODEL:M08', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-074-fg', 'SLEEVE ASSY -A (2A) 423W*2171L  KA230/CA185*3/KA230 BCF  MODEL:M08  SCREEN COLOR BLACK', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-075-fg', 'SLEEVE ASSY -B (2B) 423W*2043L  KA230/CA185*3/KA230 BCF (W52"L80"7/16) ผ่า 3) MODEL:M08', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-076-fg', 'BOTTOM CAP 1310W*1316L  KA230/CA185*3/KA230 BCF  MODEL:M08  SCREEN COLOR BLACK', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-077-fg', 'WOODEN PALLET SIZE 1100W*1100L*135H (HEAT TREATMENT) MODEL M08 Stamp 08 Red Color.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKT-001-fg', 'OUTER BOX OD : 323W*456L*727H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKT-002-fg', 'INNER BOX OD : 61W*712L*442H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKT-003-fg', 'PAPER PALLET 1100W*1100L*114H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKT-005-fg', 'OUTER BOX OD : 368W*556L*200H Type A', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKT-006-fg', 'INNER BOX OD : 88W*135L*92H Type A', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-001 C01-fg', 'CAP 1460W*1372L KA230/CA185*3/KA230 BC/F 1:2 (DR)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-002-fg', 'SIDE COVER 1000W*1672L KA230/CA185*3/KA230 BC/F 1:2 (DR)  (W40"*L65" 7/8)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-003-fg', 'CAP 1300W*1364L KA230/CA185*3/KA230 BC/F 1:2 (AS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-004-fg', 'SIDE COVER 975W*1580L KA230/CA185*3/KA230 BC/F 1:2 (AS) ทับรอย 255-1070-255', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-086-fg', 'PARTITION-B 107Wx146L KA125/CA125x3/KA125 BCF 1:180 (TY0 & 2GA)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-087-fg', 'PARTITION-C 107Wx130L KA125/CA125x3/KA125 BCF 1:180 (TY0 & 2GA)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-095-fg', 'WOODEN PALLET 1030Wx1098Lx120H (FUMIGATION) AS', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-096-fg', 'WOODEN PALLET 1100Wx1197Lx110H (FUMIGATION) STAMP DR ด้าน W', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-102-fg', 'BOTTOM PAD 400W*400L KA185/CA125/KA185 CF 1:36 (TY0 & 2GA)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-103-fg', 'TOP ASSY-A 400W*400L DIA 41 KA185/CA125/KA185 CF 1:36 (TY0 & 2GA)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-104-fg', 'TOP ASSY-B 200W*200L DIA 41 KA125/CA125*3/KA125 BCF 1:36 (TY0 & 2GA)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RPS0-001828-fg', 'TOP PAD SIZE : 330W*495L  MODEL RC3-20 (100 PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RPS0-001829-fg', 'PARTATION SET  MODEL RC3-20 (100 PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-HIT-001-6-fg', 'SHEET BOARD 1105W*630L KA125/CA105*3/KA125 BC/F (HITACHI TOCHIKI) (W44"*L24" 13/16)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-003-2-fg', 'S/B 730W*720L  KA185/CA125/KA185 CF 1:1 (W58"*L28" 3/8 ผ่า2)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-012-2-fg', 'S/B 704W*700L  KA185/CA125/KA185 CF 1:1 (W56"*L27" 9/16 ผ่า2)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-022-fg', 'S/B 1003W*1000L  KA185/CA125/KA185 CF 1:1 (W40"*L39" 3/8)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-035-fg', 'S/B 755W*740L  KS170/CA125/CA125 CF 1:1 (W60"*L29" 3/16 ผ่า 2)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-036-fg', 'S/B 781W*760L  KS170/CA125/CA125 CF 1:1 (W62"*L29" 15/16 ผ่า2)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-039-fg', 'S/B 679W*680L KA185/CA125/KA185 C/F (W54"L26" 13/16)  ผ่า 2', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-041-fg', 'S/B 1020W*1020L KA185/CA125/KA185 C/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-042-fg', 'S/B 1040W*1040L KA185/CA125/KA185 C/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-044-fg', 'S/B 1054W*1040L  KS170/CA125/CA125 CF 1:4 (W42"*L41")', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-045-fg', 'S/B 1105W*1080L  KS170/CA125/CA125 CF 1:4 (W44"*L42" 9/16)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-034-1-fg', 'BOX 1029W*1289L KA185/CA125*3/KA185 BC/F MODEL:RG72LH SCREEN COLOR BLAK', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-035-fg', 'TRAY 698W*860L KA125/CA125/KA125 C/F MODEL:RG72LH', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-036-fg', 'EVA-2B 25W*30T*65L MODEL:RG72LH,RG72RH', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-037-fg', 'EVA-2C 25W*30T*50L MODEL:RG72LH,RG72RH', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-038-fg', 'EVA-2D 25W*30T*40L MODEL:RG72LH,RG72RH', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-039-fg', 'EVA-2E 25W*30T*30L MODEL:RG72LH,RG72RH', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-040-fg', 'FOAM SUPPORT 80W*10T*80l MODEL:RG72LH,RG72LRH', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-041-fg', 'TOP PAD 498W*733L KA125/CA125/KA125 C/F MODEL:RG72LH,RG72RH', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-042-1-fg', 'BOX 1029W*1289L KA185/CA125*3/KA185 MODEL:RG72RH SCREEN COLOR BLAK', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-043-fg', 'TRAY-2A 698W*860L KA125/CA125/KA125 C/F MODEL:RG72RH', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-058-6-fg', 'เชื่อกปอ 6MM (2500 M./ม้วน) MODEL:RG71RH,RG71LH,RG72RH,RG72LH', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-078-fg', 'SUPPORT 50W*3T*1023L EVA STICKER 1:4 RG35 (PACK 28 PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-126-fg', 'BOX 650W*2016L KA185/CA125*3/KA185 BC/F MODEL:VN24 RQ SUV-R   RG83R  SCREEN COLOR BLACK มัดละ 10 ชิ้น', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-130-fg', 'BOX 650W*2016L KA185/CA125*3/KA185 BC/F MODEL:VN24 RQ SUV-L   RG84L  SCREEN COLOR BLACK มัดละ 10 ชิ้น', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-131-fg', 'BOX 690W*2096L KA185/CA125*3/KA185 BC/F MODEL:VN24 RQ SDN-R   RG85R  SCREEN COLOR BLACK มัดละ 10 ชิ้น', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-133-fg', 'BOX 690W*2096L KA185/CA125*3/KA185 BC/F MODEL:VN24 RQ SDN-L   RG86L  SCREEN COLOR BLACK มัดละ 10 ชิ้น', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-009-fg', 'PTT-B4 170W*510L KA125/CA125/KA125 CF 1:6 MODEL B7', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-010-1 CANCELL-fg', 'BOX B6  719W*2093L  KA185/CA125/KA185 CF 1:1 MODEL B6 เย็บเป็นกล่องแล้ว Screen Color Blue (WF 06429 BLUE)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-014-fg', 'PTT-B1 160W*426L KA125/CA125/KA125 CF 1:6 MODEL B6', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-015-fg', 'PTT-B2 160W*505L KA125/CA125/KA125 CF 1:2 MODEL B6', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-016-fg', 'PTT-B3 160W*505L KA125/CA125/KA125 CF 1:3 MODEL B6', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-017-fg', 'PTT-B4 160W*510L KA125/CA125/KA125 CF 1:3 MODEL B6', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-018-fg', 'PTT-B5 160W*104L KA125/CA125/KA125 CF 1:2 MODEL B6', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNC-001/1-fg', 'SLEEVE 580W*2178L KA150/CA125*3/KA150 BC/F 1:2 (เย็บ) ( COMMON J3A,J1A,J4A)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNC-005/1-fg', 'TOP CAP 1332W*1264L KA150/CA125*3/KA150 BC/F 1:1 (COMMON J3A,J1A,J4A)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNC-007/1-fg', 'BOTTOM CAP 1332W*1264L KA150/CA125*3/KA150 BC/F 1:1 (COMMON J3A,J1A,J4A)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNC-013/1-fg', 'PARTITION-1  332W*300L KA150/CA125*3/KA150 BC/F 1:2 (678101HJ4A)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-013/2-fg', 'PLATE 1188W*1130L KA125/CA125*3/KA125 BCF 1:4 MODEL CV3 PACKING (W48"*L44" 1/2)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-015-fg', 'WOODEN PALLET1135W*1190L*140H HEAT TRETMENT MODEL:COIL V3', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-016-1-fg', 'PTT-A1 867W*570L  KAC125/M125*3/KAC125 BC/F 1:12 MODEL V4,V3 PACKING  มัดละ 10 ชิ้น', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-012/1CANCELL-fg', 'SLEEVE TRI-WALL1300G (AAA) OD:1016W*1016L*970H ID:986W*986L*970H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-013-fg', 'WOODEN PALLET 1036W*1047L*125H MM. (HEAT TRETMENT)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-015-1CANCELL-fg', 'PE SHEET 1700W*1700L*0.05T 1:20 EXCEL SHAFT(P375)FOR FORD SOM-001', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-020-fg', 'PARTITON-B 842W*669L KI150/CA125*3/KI150 BC/F 1:11 MODEL K191-195', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-021-fg', 'S/B PAD 669W*969L KI150/CA125*3/KI150 BC/F  MODEL K1910-GW (54"*L38" 3/16 ผ่า 2)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-022-fg', 'WOODEN PALLET 726W*1015L*120H HEAT TRETMENT MODEL: K1910-GW', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-002CANCELL-fg', 'CORE DAI OD 160*5T*25L (Size 150mm*5mm*25mm) Thickness +-0.2mm  2)L+-0.5mm  3)ID+-0.1mm  4)OD+-0.5mm', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-009-1-fg', 'CORE DAI  OD 160*8.5T*31L MM.(ID=143) (Stamp 31 ด้านนอก)Thickness +-0.2mm  2)L+-0.5mm  3)ID+-0.1mm  4)OD+-0.5mm Model:Carton Box P/N.973051-3 For Reel P/N.3-973053-5', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-011-1-fg', 'BOX+PAD 3912012  Size 172W*590L*596H  KL205/CA185/KL205 CF  MODEL:PKG.REEL P/N:912116-6', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSH-035-fg', 'BOX 713W*2087L KA230/CA125*3/KA230 BCF 1:16 MODEL: 812', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSL-008-fg', 'SLEEVE 1040W*2207L KA230/CA125*3/KA230  BC/F 2 Pcs/Set ( M.G031) เย็บแล้ว  มัดละ 5 ชิ้น', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSM-004-fg', 'CASE 1996W* 995L  KA230/CA125/KA230  C/F 1:1 (Bumper) ***SUPPORT URGENT BY ORDER', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSM-005-fg', 'SIDE CASE  1580W*592L  KA230/CA125/KA230  C/F 1:2 (Bumper) ***SUPPORT URGENT BY ORDER', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSM-006-fg', 'PARTITION 866W*844L  KA230/CA125/KA230  C/F 1:2 (M.Bumper) ***SUPPORT URGENT BY ORDER', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTTP-007-fg', 'CASE 976W*1390L KA230/CA125/KA230 C/F 2:1 (M.800*2060*1025H)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTTP-009-fg', 'PARITION-R 1158W*455L KA230/CA125/KA230 C/F 1:2 (M.800*2060*1025H)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTTP-010-1-fg', 'PARITION-R 1158W*455L KA230/CA125/KA230 C/F 1:2 (M.800*2060*1025H)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTTP-011-fg', 'SIDE CASE 1185W*888L KA230/CA125/KA230 C/F 1:2 (M.800*2060*1025H)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTTP-012-fg', 'COVER 914W*888L KA230/CA125/KA230 C/F 1:2 (M.800*2060*1025H)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTYD-002-1-fg', 'TOP PLATE 1134W*1149L KA185/CA125*3/KA185 BC/F1:2  (PALLET 4 WAY) (W46"*L45" 1/4)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTYD-004-fg', 'PLATE 359W*538L KA185/CA125*3/KA185 BC/F 1:1 (VALVE) (W44"*L21" 3/16 ผ่า3)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYRZ-004-fg', 'C-F1 340W*1080L KA125/CA125*3/KA125   MODEL L12F CURRENT DESIGN CUS', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYRZ-005-fg', 'D-F2 445W*1080L KA125/CA125*3/KA125 1:22 MODEL L12F CURRENT DESIGN CUS', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYRZ-039-fg', 'PTT-A 210W*668L KA230/CS110*3/KA230 BCF 1:40 PACK 20 PCS', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYRZ-040-fg', 'PTT-B 210W*1665L KA230/CS110*3/KA230 BCF 1:25 PACK 20 PCS', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SB-ART-001-fg', 'SOFT SHEET SIZE  65W*23T*250L MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SB-ART-002-fg', 'SOFT SHEET SIZE  50W*15T*300L MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SBSM-010-1-fg', 'PT245725003  725W*245L KA125/CA125/KA125 CF 1:1  PTT', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SBSM-012-1-fg', 'PT244320090   PTT ASSY PTT-A 90W*320L  KA125/CA125/KA125 CF 1:3 + PTT-B 90W*244L  KA125/CA125/KA125 CF 1:6', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SBSM-016-1-fg', ' PT27353634  CARTON PARTITION (OD:273W*536L*34H MM.)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SBSM-020-fg', 'CARTON BOX OD : 230W*320L*340H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCN-027-fg', 'E200-0034-0340-00 Paper Box EVAP-NEW Size : 1399W*2567L , Size : 1054W*2487L (KA185/CA125*3/KA185 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCN-028-fg', 'E200-0034-0342-00 Tray Box Condenser (NEW) Size :1746W* 1672L (KA185/CA125*3/KA185 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCN-029-fg', 'E200-0034-0343-00 Cover Box Condenser (NEW) Size : 1770W*1696L (KA185/CA125*3/KA185 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCR-005-1-fg', 'PAD 255W*423L KA150/CA125/KA150 CF 1:1 MODEL PAD 255W*423L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCR-007-fg', 'BOX OD : 234W*1134L*152H (KA230/CA125*3/KA230 BC/F) 379W*1389L 1:2', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCR-008-fg', 'PAD 215W*1115L (KA230/CA125*3/KA230 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCR-009-fg', 'BOX OD : 234W*2024L*152H (KA230/CA125*3/KA230 BC/F) 379W*2279L 1:2', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCR-010-1-fg', 'PAD 215W*2005L (KA230/CA125*3/KA230 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCR-011-fg', 'PARTITION MODEL : TG446270-34009B (MOQ = 100 Set)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCR-012-fg', 'Partition 10239C', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCR-013-fg', 'BOX OD : 234*1290*152H SCREEN', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCR-014-fg', 'PAD 210W*1270L KA185/CA125*3/KA185 BCF 1:1', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCR-015-fg', 'PAPER PALLET 4 WAYS  SIZE 960W*1130L*120H (KA185/CA125*3/KA185 BC/F)(+Red Screen)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCR-017-fg', 'PAPER PALLET SIZE 960W*1130L*131H (KA185/CA125*3/KA185 BC/F)  (3 ขา)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCR-018-fg', 'HARD ANGLE SIZE (OD) 50x50x5Px650L MM. AP500', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCR-019-fg', 'HARD ANGLE SIZE (OD) 50x50x5Px770L MM. AP500', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCR-020-fg', 'HARD ANGLE SIZE (OD) 50x50x5Px920L MM. AP500', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SCR-021-fg', 'HARD ANGLE SIZE (OD) 50x50x5Px1150L MM. AP500', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SE-002-1-fg', 'CARTON BOX ASS''Y GLUE (RSC) 205W*335L*85H MM.(KA150/KA150 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SE-003-1-fg', 'PAD SIZE 320W*200L KA125/CA125/KA125 C/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SE-006 (cancel)-fg', 'SLEEVE BOX 787x581x424 MM/BOX SET', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SE-008-fg', 'SLEEVE BOX SIZE : 556Wx1117Lx511H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SEW-001-fg', 'HARD ANGLE : 50*50*8P*150L MM. KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SFE-001-fg', 'PACKAGE FOR MODEL : H60A+SAF', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SGB-001-fg', 'CARTON BOX RG72 RH SIZE DO 515W*750L*520H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SGB-002-fg', 'CARTON BOX RG71 RH SIZE DO 365W*575L*670H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SGB-003-fg', 'CARTON BOX NISSAN RG37 SIZE DO 432W*347L*359H MM.( PACK 12 PCS.)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SGB-004-NEW-fg', 'CARTON BOX NISSAN RG79 ( FOR RG35) SIZE DO 1065W*1090L*595H MM.( PACK 28 PCS.)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SGB-005-fg', 'CARTON BOX NISSAN RG80 (FOR RG36)  SIZE DO 990W*1250L*570H MM.( PACK 17 PCS.)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SGB-006-fg', 'CARTON BOX RG72 LH SIZE DO 515W*750L*520H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SGB-007-fg', 'CARTON BOX RG71 LH SIZE DO 365W*575L*670H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SGB-008-fg', 'CARTON BOX NISSAN RG50 SIZE DO 1039W*1069L*799H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SGB-008-NEW-fg', 'CARTON BOX NISSAN RG81 (FOR RG50) SIZE DO 1140W*1015L*514H MM.( PACK 41 PCS.)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SGB-009-fg', 'CARTON BOX NISSAN RG82 (FOR RG51) SIZE : 1080W*1040L*514H MM  (Develop pack 34)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SGB-009-OLD-fg', 'CARTON BOX NISSAN RG51  ( PACK 34 Old Design)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SGB-010-fg', 'CARTON BOX NISSAN RG52  OD:1262W*980L*884H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SGB-011-fg', 'CARTON BOX NISSAN RG69  OD:994W*1100L*509H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SGB-012-fg', 'Partition Assy Carton Box RG72 LH +EVE+Foam', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SGB-013-fg', 'Partition Assy Carton Box RG72 RH +EVE+Foam', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SGB-015-fg', 'CARTON BOX & PARTITION VN24 RQ SUV RH (PRINT SCREEN)  RG83', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SGB-015-1-fg', 'CARTON BOX & PARTITION RG83_S/R SUV RH NEW  SNP 10', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SGB-016-fg', 'CARTON BOX & PARTITION VN24 RQ SUV LH (PRINT SCREEN)   RG84', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SGB-016-1-fg', 'CARTON BOX & PARTITION RG84_S/L SUV LH NEW SNP 10', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SGB-017-fg', 'CARTON BOX & PARTITION VN24 RQ SDN RH (PRINT SCREEN)  RG85', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SGB-017-1-fg', 'CARTON BOX & PARTITION RG85_S/R SDN RH NEW SNP 5', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SGB-018-fg', 'CARTON BOX & PARTITION VN24 RQ SDN LH (PRINT SCREEN)  RG86', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SGB-018-1-fg', 'CARTON BOX & PARTITION RG86_S/L SDN LH NEW SNP 5', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SGB-019-fg', 'CARTON BOX & PARTITION ES1 BL SPART PART SIZE : 150W*1358L*572H MM (RG87)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SGB-021-fg', 'PACKAGE FOR MITSUBISHI 4P45 S1 LH (PACK24)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SGB-022-fg', 'PACKAGE FOR MITSUBISHI 4P45 S1 RH (PACK24)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SGL-001-fg', 'PACKAGE FOR MODEL : REAR AXLE SUZUKI SERVICE PART (PACK 1 PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-009-1-fg', 'Cardboard A Pad  KL205/CA125*3/KL205 BC/F PRINT 2 PLATE DIA 368 MM (งานจริง 369)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-010-1-fg', 'Cardboard A Pad KL205/CA125*3/KL205 BC/F PRINT 2 PLATE DIA 402 MM', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-011-1-fg', 'Cardboard A Pad KL205/CA125*3/KL205 BC/F PRINT 2 PLATE DIA 460 MM (งานจริง461)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-012-1-fg', 'Cardboard A Pad KL205/CA125*3/KL205 BC/F PRINT 2 PLATE DIA 513 MM', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-020-1-fg', 'Cardboard B Pad KL205/CA125/KL205 C/F NO PRINTING DIA 368 MM (งานจริง 369)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-021-1-fg', 'Cardboard B Pad KL205/CA125/KL205 C/F NO PRINTING DIA 402 MM', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-022-1-fg', 'Cardboard B Pad KL205/CA125/KL205 C/F NO PRINTING DIA 460 MM (งานจริง 461)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-023-1-fg', 'Cardboard B Pad KL205/CA125/KL205 C/F NO PRINTING DIA 513 MM', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-025-1-fg', 'Cardboard  A  KL205/3CA125/KL205  BC/F  PRINTING    DIA  417 MM', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-028-1-fg', 'Cardboard  B  KL205/CA125/KL205  C/F  NOPRINT    DIA  417 MM', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-033-1-fg', 'Cardboard B Pad KL205/CA125/KL205 C/F NO PRINTING 2 PLACES DIA 436 MM', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-034-1-fg', 'Cardboard A Pad KL205/CA125*3/KL205 BC/F PRINTING 2 PLACES  DIA 436 MM', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-035-1-fg', 'Cardboard A Pad KL205/CA125*3/KL205 BC/F PRINTING 2 PLACES  DIA 563 MM', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-036-1-fg', 'Cardboard B Pad KL205/CA125/KL205 C/F NO PRINTING DIA 563 MM', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-040-fg', 'Cardboard A Pad KL205/CA125*3/KL205 BC/F PRINTING 2 PLACES  DIA 430 MM', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-041-fg', 'Cardboard B Pad  KL205/CA125/KL205  C/F  NO PRINTING    DIA  430 MM', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SKS-001-fg', 'BOX (RSC) : 721W x 732L x471H (CONCEPT 1)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SKS-002-fg', 'BOX (RSC) : 721W x 732L x471H (CONCEPT 2)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SKT-002-fg', 'Carton box for TEM (CAP : 1060W*1347L*108H,SLEEVE : 1029W*1327L*700H,PAPER PALLET : 1055W*1353L*170H)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SL107510751000H-fg', 'SLEEVE BOX 1075W*1075L*1000H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SLD41N+D54T-1-fg', 'Z-NK001-SLE10  SLEEVE 880*2141  KA185/3M*KA185 BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SLEEVE B501-fg', 'SLEEVE B501', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SLEEVE SET-PINION VALVE-fg', 'Z-NK002-SLE02  SLEEVE SET (M. PINION VALVE)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SLEEVEB401-fg', 'SLEEVE B401', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SLEEVEB402-fg', 'SLEEVE B402', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SLEEVE-RACK SHAFT-fg', 'SLEEVE ASSY OD:734Wx799Lx514H 1:1   ( M. RACK SHAFT PAPER PACK 60 PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SLEEVE-TOYODA-1-fg', 'Z-NK001-SLV05  SLEEVE VALVE 674*1122*1145  KA185/3M/KA185 BC/F (SL001)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SNC-006-fg', 'PACKAGE 1A SIZE OD:1142*1083*700H  67897-1HJ1A  ( KA150 )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SNC-007-fg', 'PACKAGE 4A SIZE OD:1142*1083*700H  67810-1HJ4A  ( KA150 )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SNH-003-fg', 'PACKAGING FOR MODEL :  CV4 Packaging Part No.A2PK-0001-0022-00', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SNH-003-1-fg', '28000043 PACKING V4  LOW PALLET 2', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SNH-003-2-fg', '28000042 PACKING V4  HIGH PALLET 3', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SNH-008 (Cancel)-fg', 'Wooden Pallet 4 way 1150*1190*140  For Pkg.CV4', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SNH-009-fg', '28000038 PACKAGE ASSEMBLY HIGH PALLET (AEX INV 3 LAYER (IDEA 2))', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SNH-010-fg', '28000039 PACKAGE ASSEMBLY LOW PALLET (AEX INV 2 LAYER (IDEA 2))', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SNH-013-fg', '28000041  PACKING SET (2LAYERS) WHP (U0583514) REV_A', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SNH-013-1-fg', '28000037  PACKING SET (3LAYERS) FOR Wall Heat Pump', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SNH-014-fg', '28000044 Wooden Pallet 4 way 1135W*1190L*140H (COMMON CV4)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SNH-015-fg', 'PACKAGE FOR MODEL : CASS A (2 LAYER)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SNH-016-fg', 'PACKAGE FOR MODEL : CASS A (3 LAYER)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SNH-017-fg', 'PKG.FOR KRONOTERN COIL PACK48', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SNH-018-fg', '28000061 Wooden Pallet + PAD (SET) 1135W*1190L*140H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SNH-019-fg', '70016773 KRONOTERN COIL PACK 20', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SNH-026-fg', '28000060 Packaing spare part Coil V4 (PACK 48)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SNH-027-fg', '710016773  Packing Kroontern Coil Pack 20 (Outter : Top cap+Sleeve+Bottom cap+Wooden pallet', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SNH-028-fg', '28000064 PACKING CV5 VM HIGH PALLET 3', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SNH-029-fg', '28000065 PACKAGING FOR ANGLE+FIXING PART', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-001 (Cancel)-fg', 'Package for Axle Shaft model P375 for Ford 100 pcs.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-001-1-fg', 'Package for Axle Shaft model P375 for Ford 100 pcs. (Development change material)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-004-fg', 'CONNER SIZE : 44*44W*7P*150L (KB450)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-006-fg', 'BOTTOM CAP SIZE : OD 1036W*1047L*110H (KA230/CA185*3/KA230 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-007-fg', 'PACKAGE FOR AXLE SHAFT U725 (2 LAYERS) PACK 20', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-008-fg', 'PACKAGE FOR AXLE SHAFT U725 (3 LAYERS) PACK30', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-009-fg', 'PACKAGE FOR AXLE SHAFT U725 (6 LAYERS) PACK60', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-010-fg', 'PACKAGE FOR AXLE SHAFT U725 (8 LAYERS) PACK80', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-011-fg', 'TOP CAP SIZE : OD 1036W*1047L*110H (KA230/CA185*3/KA230 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-012-fg', 'WOOD PALLET : 1036W*1047L*125H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-013-fg', 'CONNER SIZE : 44*44*7P*970L (KB450)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-014-fg', 'PARTITION SET ASSEMBLY SIZE OD : 116W*860L*50T', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-015-fg', 'SLEEVE 1016W*1016L*970L 9TW 1300)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-017-fg', 'BOTTOM PLATE ASSEMBLY SIZE : OD 1010W*1010L (KA230/CA185*3/KA230 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-019-fg', 'STOPPER 80W*870L*5P+PTT 3D', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-020-fg', 'SLEEVE SET 1016W*1016L*290HL', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-021-fg', 'Package for excel shaft DANA (P703) & AAM (P703&U704) _Prototype (PACK 32 PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-022-fg', 'Package for excel shaft DANA (P703) & AAM (P703&U704) _Prototype (PACK 40 PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-023-fg', 'PACKAGE FOR AXLE SHAFT U275 NO.10148878-B 8 PCS/LAYER (PACK 40 PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-024-fg', 'PACKAGE FOR EXLE SHAFT U275 NO.10148878-B 8 PCS/LAYER (PACK 32PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-027-fg', 'Package for excel shaft DANA (P703) & AAM (P703&U704) _Prototype (PACK 24 PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-028-fg', 'PACKAGE FOR AXLE SHAFT U725 (5 LAYERS) PACK50', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-029(Cancel)-fg', 'PACKAGE FOR AXLE SHAFT (U725)  BRONCO&RG06  (PACK 20) SIZE 1036W*1047L*439H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-030(Cancel)-fg', 'PACKAGE FOR AXLE SHAFT (U725)  BRONCO&RG06  (PACK 40) SIZE 1036W*1047L*609H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-031(Cancel)-fg', 'PACKAGE FOR AXLE SHAFT (U725)  BRONCO&RG06  (PACK 50) SIZE 1036W*1047L*699H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-031-1-fg', 'PACKAGE FOR AXLE SHAFT (U725)  BRONCO&RG06  (PACK 50) SIZE 1036W*1047L*699H (New spec PTT)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-032 (Cancel)-fg', 'PACKAGE FOR AXLE SHAFT (U725)  BRONCO&RG06  (PACK 80) SIZE 1036W*1047L*959H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-032-1-fg', 'PACKAGE FOR AXLE SHAFT (U725)  BRONCO&RG06  (PACK 80) SIZE 1036W*1047L*959H(New spec PTT)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-033 (Cancel)-fg', 'PACKAGE FOR AXLE SHAFT (U725)  BRONCO&RG06  (PACK 100) SIZE 1036W*1047L*1119H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-033-1-fg', 'PACKAGE FOR AXLE SHAFT (U725)  BRONCO&RG06  (PACK 100) SIZE 1036W*1047L*1119H (new spec PTT)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-033-2-fg', 'PACKAGE FOR AXLE SHAFT (U725)  BRONCO&RG06  (PACK 100) SIZE 1036W*1047L*1119H (new spec PTT)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-038 (Cancel)-fg', 'PACKAGE FOR AXLE SHAFT (U725)  BRONCO (PACK 100)  SIZE 1076W*1087L*1119H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-038-1-fg', 'PACKAGE FOR AXLE SHAFT (U725)  BRONCO (PACK 100)  SIZE 1076W*1087L*1119H  (new spec PTT)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-038-2-fg', 'PACKAGE FOR AXLE SHAFT (U725)  BRONCO (PACK 100)  SIZE 1076W*1087L*1119H  (new spec PTT)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-042-fg', 'Package for excel shaft DANA (P703) & AAM (P703&U704) _Prototype (PACK 16 PCS) 2 LAYERS', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-046-fg', 'CONNER SIZE : 44*44W*5P*150L (KB450) (For U725 Bronco)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-047-fg', 'TOP CAP SIZE : OD 1076W*1087L*110H (For U725 Bronco)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-048-fg', 'BOTTOM CAP SIZE : OD 1076W*1057L*110H (For U725 Bronco)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-049-fg', 'SLEEVE SIZE : 1056W*1056L*970H (For U725 Bronco)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-050-fg', 'CONNER SIZE : 75*75W*7P*970L (KB450) (For U725 Bronco)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-051-fg', 'PARTITION SET ASSEMBLY SIZE OD : 116W*910L*50T (For U725 Bronco)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-052-fg', 'STOPPER 80W*910L*5P+PTT 3D (For U725 Bronco)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-056-fg', 'Package for excel shaft DANA (P703) & AAM (P703&U704) _Prototype (PACK 64 PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SOM-057-fg', 'Package for excel shaft DANA (P703) & AAM (P703&U704) _Prototype (PACK 80 PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SRI-003-fg', 'PAD SIZE : 255W*423L (KA150/CA125/KA150 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'STEP  (RH & LH) (990/992)-fg', 'Paper Packing  For Model  STEP  (RH & LH)  (990/992)  BOTTOM  PLATE (BIWALL 850AA)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'STJ-001-fg', 'HARD ANGLE SIZE(ID) : 44*44*5P*860L AP500', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'STJ-002-fg', 'HARD ANGLE SIZE(ID) : 44*44*5P*1020L AP500', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'STJ-003-fg', 'HARD ANGLE SIZE(ID) : 44*44*5P*1090L AP500', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SUN-004-1-fg', 'PAD 245W*337L TG446251-7180 ( KA125/CA125/KA125 C/F )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SUN-006-fg', 'PAD SIZE 257W*427L KA125/CA125/KA125 C/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SUZUKI-DANA-fg', 'Package for Rear Excel Suzuki  (OD 1632L*400W*554H)  ( DAN-07002 )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SWA-001-fg', 'TOP CAP', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SWA-002-fg', 'BOTTOM  CAP  ASSEMBLY', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SWA-003-fg', 'SLEEVE  SET  ASSEMBLY', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SWA-004-fg', 'PARTITION  SET-A', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SWA-005-fg', 'PARTITION  SET-B', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SWA-006-fg', 'WOOD PALLET', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SWA-009-fg', 'HARD ANGLE  44*44*7P*900L  KB 450  (1: 4)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SWH-002-fg', 'PACKAGE FOR MODEL : NANTO-ECO PACKAGING PROJECT (15 L)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SWH-003-fg', 'INSERT L-1 SIZE 823W*994L & INSERT L-2 SIZE 579W*483L  FOR NANTO  (15L)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SWH-004-fg', 'INSERT R-1 SIZE 823W*994L & INSERT R-2 SIZE 579W*483L  FOR NANTO  (15L)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SWH-005-fg', 'INSERT L-1 SIZE 922W*1164L & INSERT L-2 SIZE 698W*560L  FOR NANTO  (30L)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SWH-006-fg', 'INSERT R-1 SIZE 922W*1164L & INSERT R-2 SIZE 698W*560L  FOR NANTO  (30L)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SWH-007-fg', 'PAD INSERT L/R-3  SIZE 150W*420L CA125/3CA125/CA125 BCF  FOR NANTO  (30L)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SWH-008-fg', 'PAD SUPPORT L/R-3 SIZE 50W*420L CA125/3CA125/CA125 BCF   FOR NANTO  (30L)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SWH-009-fg', 'PAD INSERT L/R  SIZE 150W*3450L CA125/3CA125/CA125 BCF   FOR NANTO  (15L)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SWH-010-fg', 'PAD SUPPORT L/R SIZE 50W*345L CA125/3CA125/CA125 BCF   FOR NANTO  (15L)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SWH-011-fg', 'PAD SIZE : 900Wx1200L MM. KA125/CA125/KA125 C/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'T6/P375 (25 PCS)-fg', 'BOX T6/P375  ICA FORD SOUTH AFRICA (25 PCS.)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'T6-PACK 1 (Cancel)-fg', 'PACKAGE FOR MODEL : SERVICE PART T6 (PACK 1 PCS/BOX)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'T6-PACK 10-fg', 'PACKAGING T6 PACK 10', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'T6-PACK 1-1-fg', 'PACKAGE FOR MODEL : SERVICE PART T6 (Single pack with pallet)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'T6-PACK 1-2-fg', 'PACKAGE FOR MODEL : SERVICE PART T6 (Pack 1 Pcs/Box)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'T6-PACK 1-3-fg', 'PACKAGE FOR MODEL : SERVICE PART T6 (Pack 1 Pcs/Box)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'T6-PACK 24-fg', 'Carton PKG T6-PACK 24', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'T6-PACK 5-fg', 'PACKAGE FOR MODEL : SERVICE PART T6 ( Pack 5 units with pallet)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TBM-004-fg', 'TOP&BOTTOM SIZE (ID) : 770W*1110L*100H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TC422-4211-4-fg', '71003410    PLATE  SHUTTER  TC422-4211-5', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TC422-9453-1-fg', '71003411 PLATE FENDER TC422-94531', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TCM-001 cancel-fg', 'Package For REEL P/No.912116-6', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TCM-001-1-fg', 'Package For REEL P/No.912116-6', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TCM-001-2-fg', '2237775-1  E,REEL CO,ASSEMBLE to replace paper reel PN912116-6+Box PN912012-8', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TCM-002-fg', 'PAPER REEL, 780(OD),227(ID) & 45(W) P/No.97442-1', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TCM-003-fg', 'Package For REEL P/No.3-973053-5', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TCM-004-fg', 'Package For REEL P/No.4-973053-6', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TCM-004-1-fg', '2237775-3 E,REEL CO,ASSEMBLY  To replace paper reel PN4-973053-6+Box PN973051-3', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TCM-008-fg', 'P/N.2237762-1    BOX-973051-3 (1 Box) + REEL-4-973053-5 (3 Pcs.)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TCM-010-fg', ' Package for P/N.2237764-1', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TCM-012-fg', 'OVERPACK CARTON TOP 800*1200*100 mm', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TCM-014-fg', 'OVERPACK CARTON BOTTOM 800*1200*100 mm', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TFT-001-fg', 'BOX OD : 300W*1250L*300H (KA150/CA125/KA150 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TG445910-0081-fg', 'DRYER ( 45 G.)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TG445910-0081D-fg', 'DRYER ( 45 G.)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TG445910-0081H-fg', 'DRYER ( 45 G.)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TG445910-0320-fg', 'DRYER  TG445910-0320  ( 60 G.)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TG445910-0320D-fg', 'DRYER  TG445910-0320  ( 60 G.)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'THS-002-fg', 'PACKAGING : 1071W*1414L*1014H Box for Paper bag Mingtai chemical', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TJT-001-fg', 'PARTITION-06   SIZE 366W*1185L KA230/CA125*3/KA230  BC/F  1:30', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TJT-002-fg', 'PARTITION-07   107W * 1000L  KA230/CA125*3/KA230  BC/F 1:40', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKHR-001-fg', 'SOFT SHEET 25Wx80L MM. (KA125/CA125/KA125)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKHR-002-fg', 'SOFT SHEET SIZE : 30W*100L MM. (KA125/CA125/KA125 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-003-fg', 'PAPER PALLET : 1200Wx1200Lx150H MM.(Leg paper tube)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-004 Cancel-fg', 'INNER SLEEVE : 390W*490L*234H MM.(KA150/CA125/KA150 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-005-fg', 'HD-WALL : 760W*1170L MM.(KA230/3CA125/KA230 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-006-fg', 'CAP PAD : 760W*1170L MM.(KA230/CA125/KA230 C/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-008 Cancel-fg', 'BOX OD : 464x494x300H (KA185/3CA125/KA185 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-008-1-fg', 'BOX OD : 458x488x283H (KA230/CA125/KA230 C/F) Model Box J59C,J59K', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-009 Cancel-fg', 'PARTITION SET : (KA185/3CA125/KA185 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-009-1-fg', 'PARTITION SET : (KA150/3CA125/KA150 BC/F)  Model Box J59C,J59K', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-010 Cancel-fg', 'PAD : (KA185/3CA125/KA185 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-010-1-fg', 'PAD : (KA125/CA125/KA125 C/F) Model Box J59C,J59K', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-012-fg', 'COVER CAP : 947x996x110H MM. 1:1 Model Box J59C', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-013-fg', 'TRAY PALLET : 944x1004x175H MM 1:1 Model Box J59C', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-016-fg', 'TOP CAP OD: 1110 x 1120 x 110H MM.(1:1) (DAIHATSU)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-017-fg', 'SLEEVE OD : 1090 x 1090 x 890H MM.(1:1) (DAIHATSU)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-018 (Cancel)-fg', 'PARTITION FOR DAIHATSU (1 : 11 Layer)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-018-1-fg', 'PARTITION FOR DAIHATSU (1 : 11 Layer)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-019-fg', 'PAD : 1070 x 1070 (1:11 Pcs)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-020 Cancel-fg', 'PAPER PALLET OD : 1110 x 1120 x 215H MM.(1:1)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-020-1 (Cancel)-fg', 'PAPER PALLET OD : 1110 x 1120 x 230H MM.(1:1)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-020-2-fg', 'PAPER PALLET OD : 1110 x 1120 x 230H MM.(1:1) (DAIHATSU)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-021-fg', 'TOP CAP OD: 1110 x 1120 x 110H MM.(1:1) (model  EGR Suzuki)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-022-fg', 'SLEEVE OD : 1090 x 1090 x 890H MM.(1:1) (model  EGR Suzuki)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-023 (Cancle)-fg', 'PARTITION FOR SUZUKI ASSY (1 : 8 Layer)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-023-1-fg', 'PARTITION FOR SUZUKI ASSY (1 : 8 Layer)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-024(Cancel)-fg', 'PAD : 1070 x 1070 (1:8 Pcs) ( Model EGR Suzuki)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-025 Cancel-fg', 'PAPER PALLET OD : 1110 x 1120 x 215H MM.(1:1) ( Model EGR Suzuki)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-025-1-fg', 'PAPER PALLET OD : 1110 x 1120 x 230H MM.(1:1) ( Model EGR Suzuki)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-026-fg', 'BOX OD : 458 x 488 x 283H (KA230/CA125/KA230 C/F) Model Box 715B', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-027-fg', 'PARTITION SET (KA150/3CA125/KA150 BC/F) Model Box 715B', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-028-fg', 'PAD : (KA125/CA125/KA125 C/F) Model Box 715B', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-029 Cancel-fg', 'TOP CAP OD: 1110 x 1120 x 110H MM.(1:1) model EGR Cooler (SUBARU)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-029-1-fg', 'TOP CAP OD: 1110 x 1120 x 110H MM.(1:1) model EGR Cooler (SUBARU) New Design', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-030 Cancel-fg', 'SLEEVE OD : 1090 x 1090 x 890H MM.(1:1) model  EGR Cooler SUBARU', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-030-1-fg', 'SLEEVE OD : 1090 x 1090 x 890H MM.(1:1) model  EGR Cooler SUBARU New Design', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-031 Cancel-fg', 'PARTITION FOR SUBARU ASSY (1 : 9 Layer)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-031-1-fg', 'PARTITION FOR SUBARU ASSY (1 : 9 Layer) New design', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-032 Cancel-fg', 'PAD : 1070 x 1070 (1:9 Pcs) Model EGR SUBARU', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-033 Cancel-fg', 'PAPER PALLET OD : 1110 x 1120 x 230H MM.(1:1) Model EGR SUBARU', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-033-1-fg', 'PAPER PALLET OD : 1110 x 1120 x 230H MM.(1:1) Model EGR SUBARU New Design', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-034 (Cancel)-fg', 'TOP CAP OD: 1110 x 1120 x 110H MM.(1:1) model EGR 5A45V MITSUBISHI', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-034-1-fg', 'TOP CAP OD: 1110 x 1120 x 110H MM.(1:1) model EGR 5A45V MITSUBISHI', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-035 (Cancel)-fg', 'SLEEVE OD : 1090 x 1090 x 890H MM.(1:1) model EGR 5A45V MITSUBISHI', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-035-1-fg', 'SLEEVE OD : 1090 x 1090 x 890H MM.(1:1) model EGR 5A45V MITSUBISHI', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-036 (Cancel)-fg', 'PARTITION FOR MITSUBISHI ASSY (1:7 Layer)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-036-1-fg', 'PARTITION FOR EGR 5A45V MITSUBISHI ASSY (1:7 Layer)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-037 (Cancel)-fg', 'PAD : 1070 x 1070 (1:7 Pcs) Model EGR 5A45V MITSUBISHI', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-038 (Cancel)-fg', 'PAPER PALLET OD : 1110 x 1120 x 230H MM.(1:1) Model EGR 5A45V MITSUBISHI', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-038-1-fg', 'PAPER PALLET OD : 1110 x 1120 x 230H MM.(1:1) Model EGR 5A45V MITSUBISHI', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-039-fg', 'CARTON BOX RF29,RT88 ID:390W*730L*285H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-040-fg', 'PARTITION R : 750W*390L (RF29,RT88)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-041-fg', 'PARTITION L : 866W*390L (RF29,RT88)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-042-fg', 'BOX OD : 140W x 215L x110H KA125/CA125/KA125 C/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-043-fg', 'BOX OD : 107W x 120L x72H KA125/CA125/KA125 C/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-045-fg', 'PAD SIZE : 240W x 420 x 3T MM KA125/CA125/KA125 C/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-046-fg', 'TOP CAP : 1110 x 1120 x 110H MM. (1:1)  for model ES13', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-047-fg', 'SLEEVE : 1090 x 1090 x 890H MM. (1:1)  for model ES13', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-048-fg', 'PARTITION ASSY : 1070 x 1076 x 220H MM. (1:4 Layer)  for model ES13', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-049-fg', 'PAD SUPPORT : 1070 x 1076 (1:1) for model ES13', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-050-fg', 'Paper Pallet : 1110 x 1120 x 215H MM. (1:1) for model ES13', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-059-fg', 'BOX SIZE OD : 488 x 536.5 x 315H MM (1:1) Model Y415,Y417,Y418,Y419', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-060-fg', 'Partition Assembly Size : 480 x 528.5 x 302H MM (1:2) Model Y415,Y417,Y418,Y419', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-061-fg', 'Pad Size : 480 x 528.5L MM (1:3) Model Y415,Y417,Y418,Y419', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-066-fg', 'Box For Keep Document Size : 333W*499L*369H MM. (KA125/3CA125/KA125 BC/F)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TKR-067-fg', 'Paper Pallet : 1100 x 1100 x 150H MM. (Leg Paper Tube)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TOOL-NKF-fg', 'TOOL-NKF', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TOP CAP- PINION VALVE-fg', 'Z-NK002-TOP01  TOP CAP (M.PINION VALVE)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TOP CAP-RACK SHAFT-fg', 'TOP CAP OD:765Wx819Lx110H 1:1   ( M. RACK SHAFT PAPER PACK 60 PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TOP COVERB402-fg', 'TOP COVER B402', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TOP PAD-RACK SHAFT-fg', 'TOP PAD ASSY OD:780Wx715L 1:1 ( M.RACK SHAFT PAPER PACK 60 PCS)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TP03590538-fg', 'Z-NK001-TOP02  TOP PLATE VALVE 538W*359L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TSH-002-fg', '71003401 CARTON BOX OD:480W*560L*240H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TSH-003-fg', 'TOP CAP OD:1008Wx1150Lx110H (KA230/CA125*3/KA230 BC/F) 1:1 (M.812)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TSH-004-fg', '71003397  PALLET SIZE 980Wx1140Lx123H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TSH-005-fg', '71003399 CONNER SIZE 44*44*7P*960L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TSH-006-fg', '71003400 CONNER SIZE 44*44*7P*100L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TSH-009-1-fg', '71003451  SIDE PANEL-A STEP (RH,LH) (990/992) (1:3)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TSH-010-1-fg', '71003452 SIDE PANEL-B SIZE : 669W*1096L (1:2)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TSH-011-fg', '71003453 STOPPER SIZE : 100W*100T/200L (1:2)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TSH-013-fg', 'Carton Box Set for JB3C-5F085-AA UP375 MY18 (Export-Australia)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TSH-015-fg', 'CARTON BOX IMC 190 OD:960W*1120L*480H MM. FOR JB3C-5F085-AA (Export)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TSH-016-fg', 'Partition Set & Conner Support  For JB3C-5F085-AA (Export)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TSH-017-fg', 'Pad Support OD: 820W*770L For JB3C-5F085-AA (Export)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TSH-018-fg', 'Wooden Pallet For JB3C-5F085-AA (Export)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TSH-019 Cancel-fg', 'Top Cap OD: 1008W*1150L*110H For JB3C-5F085-AA (Export)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TSH-019-1-fg', '71003398 Top Cap OD: 1008W*1150L*110H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TSH-022-fg', 'PARTITION SIZE : 420W*520L FOR STEP 990/992 (28 Pcs/Set)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TSH-024-fg', '71003455 Partition Size : 420W x 520L. (1:28)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TSH-025-fg', '71003699 TOP COVER (OD) : 1140Wx1490Lx100H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TTR-001-fg', 'PA2025 PACKAGE FOR NR-VALVE ( BOX Size : 414 x 503 x 130H 1:1 + PTT Assy : 395 x 490 x 14H 1:9 )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TTR-002-fg', 'PA2022 PACKAGE FOR 218305 ( BOX Size : 414 x 503 x 130H 1:1 + PTT Assy : 395 x 490 x 14H 1:9 )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TTR-003-fg', 'PA2023 PACKAGE FOR 218312 ( BOX Size : 414 x 503 x 130H 1:1 + PTT Assy : 395 x 490 x 14H 1:9 )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TTR-004-fg', 'PA2024 PACKAGE FOR 218315 ( BOX Size : 414 x 503 x 130H 1:1 + PTT Assy : 395 x 490 x 14H 1:9 )', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TWS-001-fg', 'PAPER PAD LAMINATE SIZE 1120Wx1220L MM. CA125/3CA125/CA125  BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TYG-008-1-fg', 'PI002-00274-66299 Paper box 1120*2230*580 MM.for Hanger-722B Headlamp (DV)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TYG-009 (Cancel)-fg', 'PI002-00273-66299 Paper box 1120*2230*605 MM.for Hanger-515 N Mid Grille Moul', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TYG-009-1-fg', 'PI002-00273-66299 Paper box 1120*2230*605 MM.for Hanger-515B N Mid Grille Moul  (DV)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TYG-011-fg', 'PI002-00309-66299 Paper box 1120*2230*994 MM. for Manger-271B Headlamp (Pack3)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TYG-013-fg', 'PI002-00311-66299 Paper box 1120*2230*605 MM. For Jig Hanger 805B Grille No.1,No.2,No.3,No.4 (Pack3)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TYG-014-fg', 'PI002-00345-66299 Paper box 935*2230*425 MM. For Jig Hanger 805B Grille No.5,No.6 (Pack2)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TYG-015-fg', 'PI002-00344-66299 Paper box 1405*2230*605 MM. For Jig Hanger 805B Grille No.7 (Pack3)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TYG-016-fg', 'PI002-00343-66299 Paper box 725*2050*1125 MM.  JIG HANGER J72A  (Pack2)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TYG-016-1-fg', 'PI002-00343-66299 Paper box 725*2050*1125 MM.  JIG HANGER J72A  (Pack2)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TYG-017-fg', 'PI002-00348-66299 Paper box 745*1519*1555 MM.  FOR J240B GU (Pack4)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TYG-018-fg', 'PI002-00356-66299 Paper box 1120*2230*575 MM.  FOR HANGER 722B Hood Moul  (Pack3)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TYG-019-fg', 'PI002-00357-66299 Paper box 432*432*182 MM.  FOR Contact.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TYG-020-fg', 'PI002-00371-66299 Paper box 1410*2224*605 MM.  For HANGER  700B Lower Grile Moul (Pack 3)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TYG-021-fg', 'PI002-00381-66299 Paper box 1500*2230*795 MM.  For HANGER  670B A MID UPR MALL (Pack 4)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'UC3C-38811-D-fg', '71003456 SIZE ID 760W*1767L  UNDER 811 UC3C-3811-D', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'UNS005-fg', 'CARTON 4G / Y20.3/S 320 X 220 X285', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'UNS007-2-fg', '( 4W) CARTON BOX  ID 385W*663L*230H 1:1 , PTT-A 489W*656L 1:1 , PTT-B 459W*656L 1:1 , PTT-W 390W*155L 1:2 , COVER 572W*390L 1:1  KL205/CA125*3/KL205 BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'UNS010-1-fg', '(4W)  UN 4G /Z7.0/S 655*1480*102H(1).BOX745W*2158L 1:1 (2.)PARTITION-A 644W*1470L 1:2 (3).PARTITION-B 1365W*70L 1:3 KL205/M/KL205 C/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'VMI-001-fg', 'HARD ANGLE  ID 44*44*4P*93L  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'VMI-002-fg', 'HARD ANGLE  ID 44*44*4P*77L  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'VMI-003-fg', 'HARD ANGLE  ID 44*44*4P*72L  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'VMI-004-fg', 'HARD ANGLE  ID 44*44*4P*48L  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'VMI-005-fg', 'HARD ANGLE  ID 44*44*4P*930L  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'VMI-006-fg', 'HARD ANGLE  ID 44*44*4P*770L  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'VMI-007-fg', 'HARD ANGLE  ID 44*44*4P*720L  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'VMI-008-fg', 'HARD ANGLE  ID 44*44*4P*480L  KB450', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'VOLVO PACK-1-fg', 'PACKAGE FOR SERVICE PART PROP SHAF VOLVO PACK 1 (L)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'VOLVO PACK-1 (XL)-fg', 'PACKAGE FOR SERVICE PART PROP SHAF VOLVO PACK 1 (XL)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'VOLVO SL PACK 5 DAI 130-fg', 'PACKAGE FOR SHAFT VOLVO SL PACK 5  DAI 130 MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WOODEN PALLET-RACK SHAFT-fg', 'WOODEN PALLET 759W*826L*130H (MODEL RACK SHAFT)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'X60A PACK 20-fg', 'PACKAGE FOR MODEL  X60A  (SERVICE PART PACK 20 PCS./BOX)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'X60A PACK10-fg', 'PACKAGE FOR MODEL  X60A  (SERVICE PART PACK 10 PCS./BOX)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'X60A PACK120-fg', 'PACKAGE FOR MODEL FRONT STEEL X60A PACK 120 PCS (R5T Steel Rack NISSAN)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'X60A PACK120-1-fg', 'PACKAGE FOR MODEL FRONT STEEL X60A PACK 120 PCS (R5T Steel Rack NISSAN)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'X60A PACK28-fg', 'PACKAGE FOR MODEL ALUMINUM  X60A PACK 28 PCS (R5T Steel Rack NISSAN)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'X60A PACK28-1-fg', 'PACKAGE FOR MODEL ALUMINUM  X60A PACK 28 PCS (R5T Steel Rack NISSAN)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'X60A PACK36-fg', 'PACKAGE FOR MODEL PROP DRIVE SHAFT X60A PACK 36 PCS (R5T Steel Rack NISSAN)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'X60A-1-fg', 'Packaging  Propshaft  For  model  X60A  (Pack  5  Shaft * 3 Layer)  ( PALLET  684W*958L*211H  + CAP  1154W*887L  + SLEEVE 650W*923L*431H + PARTITION  431W*650L  (5022207-410M,  DAN -1303019-04-00)  KA230/3CA185/KA230  BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YMH-001-fg', 'PACKAGE ASSY FOR 63P (TOP CAP Size: 984W*1016L*110HMM. 1:1, CORNER 75W*75L*7P*825L KB450 1:4, CORNER 44W*44L*7P*100L KB450 1:8, PAPER PALLET OD Size: 990W*1006L*95H MM.1:1)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YMH-001-1-fg', 'TOP CAP PACKAGE ASSY FOR 63P Size: 984W*1016L*110HMM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YMH-003-fg', 'TOP CAP OD SIZE : 984W*1016L*110H MM. FOR  63P', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YMH-004-fg', 'PACKAGE ASSY FOR 1C3 BODYCYLINDER (TOP CAP OD: 918W*929L*110H MM. 1:1, SLEEVE OD:898W*898L MM. 1:1, PTT ASSY OD:107W*878L MM 1:5, PAD OD: 878W*878L MM.1:5,PAPER PALLET OD:924W*924L*144H MM. 1:1,HARD 44*44*7P*100L 1:8)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YMH-004-1-fg', 'Pad 878Wx878L MM.model 1C3 Body cylinder', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YMH-004-2-fg', 'Sleeve  898Wx898L MM.model 1C3 Body cylinder', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YMH-005-fg', 'BOX SET OD Size : 170W*170L*190L MM FOR MODEL CAM SHAFT (BOX 1:1,PAD 1:3)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YMH-007-fg', 'PACKAGE ASSY FOR MODEL HB131 (TOP CAP OD:918Wx929Lx110H MM,SLEEVE OD:898Wx898L MM,PARTITION A OD:88Wx878L MM,PAD OD 878Wx878L MM,PAPER PALLET 924Wx924Lx144H MM,SUP PP BRAND:44x44x7Px100L)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YMH-008-fg', 'PACKAGE ASSY FOR MODEL : BR800 (TOP CAP OD : 918Wx929Lx110H,SLEEVE OD 898x898L MM,PARTITION A OD : 107Wx878L MM.(ASSY),PAD OD : 878Wx878L MM,PAPER PALLET OD : 924Wx924Lx144H MM,SUP PP BRAND : 44x44x7Px100L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YMH-008-1-fg', 'TOP CAP OD : 918Wx929Lx110H Model BR800', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YMH-008-2-fg', 'PAD OD 878W x 878L MM Model BR800', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YMH-008-3-fg', 'PAPER PALLET OD : 924Wx924Lx144H MM', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YMH-008-4-fg', 'SUP PP BAND 44 X 44 X7P 100L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YMH-008-5-fg', 'SLEEVE : 898Wx898L MM. Model BR800', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YMH-008-6-fg', 'Partition A : 107Wx878L MM. Model BR800', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YMH-009-fg', 'PACKAGE ASSY FOR MODEL : B4B (TOP CAP 918Wx929Lx110H MM,SLEEVE 898Wx898L MM ,PARTITION A 107Wx878L MM ASSY,PAD 878Wx878L MM,PAPER PALLET 924Wx924Lx144H MM,SUP PP BAND 44*44*7P*100L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YMH-009-1-fg', 'Sleeve 898Wx898L MM.model B4B Body cylinder', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YMH-009-2-fg', 'Pad 878Wx878L MM.model B4B Body cylinder', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YMH-009-3-fg', 'Top Cap 918Wx929Lx110H MM.model B4B Body cylinder', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YMH-010-fg', 'PACKAGE ASSY FOR MODEL : 5UP (Top cap 929Wx1035Lx110H MM , Sleeve 898Wx1015L MM , Partition 160Wx995L MM.Assy , Pad 878Wx995L MM , Paper Pallet 924Wx1041Lx144H MM , Sup PP Band 44x44x7Px100L', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YMH-011-fg', 'PACKAGE CAP FOR CAMSHAFT: (Top cap 1040Wx1035Lx110H , Sleeve 1030Wx1030Lx420H , Paper pallet 1035Wx1040Lx95H)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YMH-012-fg', 'PACKAGE ASSY FOR B4X BODYCYLENDER', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YMH-015-fg', 'PKG. FOR 4CW SLEEVE SIZE (OD) : 733W * 908L * 514H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YMH-016-fg', 'PACKAGE ASSY FOR P4-6EK', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YMH-017-fg', 'PACKAGE ASSY  P4-6BG-SHAFT CAM', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YMH-018-fg', 'TOP CAP P4-6BG OD SIZE : 952W*1193L*110H', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YMS-001-fg', 'PACKAGE SIZE : (OD) 986Wx1083Lx873H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YMS-001-1-fg', 'PACKAGE SIZE : (OD) 986Wx1083Lx873H MM. (No Hard Sup. PP BAND)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YRZ-003-fg', 'PACKAGE FOR MODEL H60A (RV8)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YRZ-004-fg', 'PACKAGE FOR MODEL L12F ( PACK 12 ) 55501 3STOA FULL SET', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'YRZ-032-fg', 'PACKAGE FOR MODEL : L12F (55501 3STOA) PACK 20 PCS.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ZZB0101-fg', 'TOP CAP /BOTTOM CAP  OD : 944W*1120L*112L : KA125/CS110*3/KA125  BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ZZB0102-fg', 'HARD ANGEL 75*75*7P*960L (KB450)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ZZB0103-fg', 'INNER BOX (OD) 895x545x320H + PTT (4 PCS//BOX) + COVER', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ZZB0104-fg', 'PAPER PALLET OD:960W*1130L*131H : KA185/CA125x3/KA185 BC/F', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ZZB0295-fg', 'TOP CAP : 861Wx1100Lx110H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ZZB0297-fg', 'SLEEVE : 830Wx1080Lx982H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ZZB0298-fg', 'BOX+PARTITION : 530Wx810Lx491H MM.', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ZZB0302-fg', 'Box for Model : T6 All D-Cab (Cap :1520W*2390L*300H Sticker + Tray : 1500W*2359L*300H)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ZZB0303-fg', 'Box for Model : T6 All S-Cab (Cap :1520W*1620L*300H Sticker + Tray : 1500W*1589L*300H)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ZZB0304-fg', 'Box for Model : T6 All R-Cab (Cap :1520W*2160L*300H Sticker + Tray : 1500W*2129L*300H)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ZZB0306-fg', 'BOX for model : RJ01 (1520x2300x320)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ZZB0308-fg', 'BOX for model : RJ01 (1470x2520x270)', 0, now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ZZB0316-fg', 'BOX for model : RJ01 (1020x1470x340)', 0, now(), now(), 'FG');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM TABLE "products" where type='FG'`);
  }
}
