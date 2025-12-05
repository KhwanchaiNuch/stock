import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertProductRM1702590239997 implements MigrationInterface {
  name = 'InsertProductRM1702590239997';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BOX SEWS-CT-rm', 'OUTBOX  REEL 24/34/156 CORRUGATE BOX', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAAA-010-H-rm', 'BOX  SIZE 383W*1129L KA125/CA125*3/KA125 BC/F W&P HELP SLOT NK SUPPORT SB (NK JIONT GLUE)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAHB-001-rm', 'T/B CASE 1385W*1405L KA230/CA185*3/KA230 BC/F 1:2 Y4L (EXPORT) PACK 12 มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAHB-002-rm', 'SLEEVE COVER  980W*1548L KA230/CA185*3/KA230 BC/F 1:2 M.Y4L (EXPORT) PACK 12 (W40"*L61")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAHB-003-rm', 'SLEEVE ASSY  980W*1485L KA230/CA185*3/KA230 BC/F 1:2 M.Y4L (EXPORT) PACK 12 (มัดละ 10 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAHB-004-rm', 'TRAY 1256W*1256L  KA230/CA125*3/KA230 BC/F 1:12 M.Y4L (EXPORT) PACK 12  (มัดละ 10 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAHB-005-rm', 'PTT-A  75W*1198L  KA230/CA125*3/KA230 BC/F 1:36 M.Y4L (EXPORT) PACK 12  (มัดละ 20 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAHB-006-rm', 'PTT-B  75W*1198L  KA230/CA125*3/KA230 BC/F 1:36 M.Y4L (EXPORT) PACK   (มัดละ 20 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAHB-007-rm', 'WOODEN PALLET 800*1200*120H MM. (FUMI) (MODEL PBB-T6-E4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAHB-007-1-rm', 'WOODEN PALLET 800*1200*120H MM. (FUMI) (MODEL PBB-T6-E4) เปลี่ยนหน้าไม้', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAHB-008-rm', 'PSB-GCP/T6 (456W*1492L) KA150/CA125*3/KA150 BC/F M.PBB-T6-E4 Common  2313030006', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAHB-008-H-rm', 'PSB-GCP/T6 (456W*1492L) KA150/CA125*3/KA150 BC/F M.PBB-T6-E4 Common  2313030006', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAIR-035/1-rm', 'TOP-W 960W*1130L KA230/CA125*3/KA230  BCF 1:1  MODEL : TG989300-0030', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAIR-035/1-AMT-rm', 'TOP-W 960W*1130L KA230/CA125*3/KA230  BCF 1:1  MODEL : TG989300-0030', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAIR-035/2-rm', 'TOP-W 960W*1130L KA230/CS110*3/KA230  BCF 1:1  MODEL : TG989300-0030', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAIR-036/1-rm', 'TOP-L 1130W*960L KA230/CA125*3/KA230 BCF  1:1  MODEL:TG989300-0030', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAIR-036/1-AMT-rm', 'TOP-L 1130W*960L KA230/CA125*3/KA230 BCF  1:1  MODEL:TG989300-0030', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAIR-036/2-rm', 'TOP-L 1130W*960L KA230/CS110*3/KA230 BCF  1:1  MODEL:TG989300-0030', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAIR-046-rm', 'BOX  515W*1164L KA185/CA125*3/KA185 BC/F 1:16 M.483961-0981', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAIR-046/1-rm', 'BOX  515W*1164L KA185/CA125*3/KA185 BC/F 1:16 M.483961-0981 ADD SCREEN B262A', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAIR-051-rm', 'PTT-1A 606W*150L KA185/CA125*3/KA185 BC/F 1:1 M.TG446290-19730T&PH446270-10229C', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAIR-052-rm', 'PTT-1B 263W*606L KA185/CA125*3/KA185 BC/F 1:1 M.TG446290-19730T&PH446270-10229C', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAIR-053-rm', 'PTT-1C 263W*606L KA185/CA125*3/KA185 BC/F 1:1 M.TG446290-19730T&PH446270-10229C', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAIR-054-rm', 'PTT-1D 263W*985L KA185/CA125*3/KA185 BC/F 1:1 M.TG446290-19730T&PH446270-10229C', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAIR-055-rm', 'PTT-1E 263W*985L KA185/CA125*3/KA185 BC/F 1:1 M.TG446290-19730T&PH446270-10229C', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAIR-057-rm', 'TOP-W 960W*1130L KA185/CA125*3/KA185  BCF 1:1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAIR-057/AMT-rm', 'TOP-W 960W*1130L KA185/CA125*3/KA185  BCF 1:1 (W40"*L44" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAIR-058-rm', 'TOP-L 1130W*960L KA185/CA125*3/KA185  BCF 1:1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAIR-058/AMT-rm', 'TOP-L 1130W*960L KA185/CA125*3/KA185  BCF 1:1 (W46"*L37" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAIR-059-rm', 'PLATE-L 960W*1585L KA150/CA125*3/KA150 BCF 1:1 MODEL PAPER PALLET FOR BOX 234*1581*152H', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAIR-060-rm', 'PLATE-W 1585W*960L KA150/CA125*3/KA150 BCF 1:1 MODEL PAPER PALLET FOR BOX 234*1581*152H', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAIR-061-rm', 'CARTON BOX 886W*1834L  KA125/CA125/KA125 CF 1:1 MODEL BOX 2 (TG446290-19640T) กาวเป็นกล่องแล้ว (มัดละ 10 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAKE-001-rm', 'TOP CAP 1062W*1212L KA230/CA185*3/KA230 BCF MODEL MY17', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAKE-002-1-rm', 'SLEEVE-A 2A 775W*1286L KA230/CA185*3/KA230 BCF 1:2  (W62"*L50" 11/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAKE-003-1-rm', 'SLEEVE-B 2B 775W*1103L KA230/CA185*3/KA230 BCF 1:2  (W62"*L43" 7/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAKE-004-rm', 'PARITITION-A 3A 555W*942L KA230/CA125*3/KA230 BCF 1:15 MODEL MY17', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAKE-004-HELP-rm', 'PARITITION-A 3A 555W*942L KA230/CA125*3/KA230 BCF 1:15 MODEL MY17', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAKE-005-1-rm', 'PARITITION-B 3B 150W*787L KA230/CA125*3/KA230 BCF 1:30  MODEL MY17', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAKE-007-rm', 'TRAY 1062W*1212L KA230/CA185*3/KA230 BCF 1:1 MODEL MY17', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAKE-010-1-rm', 'BOX 943W*2043L KA230/CA125*3/KA230 BC/F 1:2 DEELOP MODEL: GMT17X', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAKE-013-rm', 'BOTTOM CAP 1240W*1256L KA230/CA125*3/KA230 MODEL:GMT17X', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAKE-017-rm', 'TOP CAP 1213W*1316L KA230/CA185*3/KA230 BC/F MODEL: E2XX (PACK 100)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAKE-018/1-rm', ' SLEEVE-A 825W*1250L KA230/CA185*3/KA230 BC/F 1:2 SCREEN MODEL: E2XX (PACK 100) CANCELLED', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAKE-018/2-rm', ' SLEEVE-A 825W*1250L KA230/CA185*3/KA230 BC/F 1:2 SCREEN MODEL: E2XX (PACK 100)   (ADD SCREEN)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAKE-020/1-rm', 'S/B SIDE END 825W*794L KA230/CA185*3/KA230 BC/F MODEL: E2XX (PACK 100)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAKE-023-rm', 'TRAY 1213W*1316L KA230/CA185*3/KA230 BC/F MODEL: E2XX (PACK 100)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAKE-025-1-rm', 'PALLET 1000W*1200L*120H WOOD(HEAT TREAMENT) 1200*1000*600MM  KA034-A AKE-018, AKE-020 IDEA NK', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAKE-025CANCELL-rm', 'PALLET 1000W*1200L*120H WOOD(HEAT TREAMENT) 1200*1000*600MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAKE-048-rm', 'INNER BOX 640W*637L KA185/CS110*3/KA185 BCF 1:1 PKG FOR 650A & EFC (AKE-016/017)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAKE-049 CANCEL-rm', 'PTT-2B 278W*295L KA185/CS110/KA185 CF 1:1 PKG FOR 650A & EFC (AKE-016/017)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAKE-049-1-rm', 'PTT-2B 278W*295L KA185/CS110/KA185 CF 1:1 PKG FOR 650A & EFC (AKE-016)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAKE-054-rm', 'PALLET 980W*1140L*120H WOOD(HEAT TREAMENT) MODEL : DEVELOP E2XX PACK 100', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAKE-055-rm', 'PALLET 928W*1109L*120H   WOOD(HEAT TREAMENT) MODEL : DV OUTER PALLET KA034-A AKE-018-1,AKE-020-1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAKE-056-rm', 'PALLET 852W*996L*135H   WOODEN(HEAT TREAMENT) MODEL : DV.PAPER PALLET FOR MY17', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RART-001-rm', 'CARTON BOX 196W*752L KA125/CA125/KA125  20:6 FOR MODEL : BOX FOR PIN-PISTON', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RART-005-rm', 'WOODEN PALLET 670*1014*140H 1:1 FUMIGATION MODEL PIN-PISTON', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RART-006-rm', 'WOODEN PALLET 645W*952L*140H 1:1 FUMIGATION MODEL PIN-PISTON NR', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RART-011-rm', 'TOP CAP 1285W*1252L KA230/CA125*3/KA230 BCF 1:1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RART-012-rm', 'SLEEVE 920W*2097L KA230/CA185*3/KA230 BCF 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RART-013-rm', 'BOTTOM CAP 1285W*1252L KA230/CA125*3/KA230 BCF 1:1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RART-014-rm', 'WOOD PALLET 1036W*1074L*140H (FUMIGATION)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RART-015-rm', 'BOX 376W*1273L KA230/CA125/KA230 CF 1:70', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RART-015-1-rm', 'BOX 376W*1273L KA125/CA125/KA125 CF 1:1 MODEL :J08E (HINO) SET SMALL BOX', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RART-016-rm', 'PTT-W 110W*240L KA230/CA125/KA230 CF 1:140', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RART-017-rm', 'PTT-L 110W*350L KA230/CA125/KA230 CF 1:70', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAUT-001-rm', 'CAP 1229W*1326L KA185/CA125*3/KA185 BCF 1:4 MODEL PACKAGE FOR HEADREST P32R', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAUT-002-rm', 'BOX 650W*1097L KA185/CA125*3/KA185 BCF  1:16 MODEL PACKAGE FOR HEADREST P32R แบบทำเป็นกล่องแล้ว', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAUT-003-L-rm', 'PTT-A/1 ( L ) 277W*498L KA125/CA125*3/KA125 BCF 1:16 MODEL PACKAGE FOR HEADREST P32R', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAUT-003-R-rm', 'PTT-A/2 ( R ) 277W*498L KA125/CA125*3/KA125 BCF 1:16 MODEL PACKAGE FOR HEADREST P32R', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAUT-004-rm', 'PTT-B 467W*548L KA125/CA125*3/KA125 BCF 1:16 MODEL PACKAGE FOR HEADREST P32R', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAUT-005-1-rm', 'PTT-C 212W*548L KA125/CA125*3/KA125 BCF 1:16 MODEL PACKAGE FOR HEADREST P32R', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAUT-007-rm', 'PAD 528W*685L KA125/CA125/KA125 CF 1:1 MODEL PKG.FOR SEAT RAIL PART W44"L27" ผ่า2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAUT-008-rm', 'CARTON  BOX 731W*1275L KA185/CA125*3/KA185 BCF MODEL PKG.FOR SEAT PARTS (PACK 5 )(AUT-027-2 TO 033) มัดละ 10 ชิ้น 2 เส้น หัว-ท้าย รองกระดาษ', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RAUT-009-rm', 'SB 734W*1135L KA230/CA125*3/KA230 BC/F 1:1 W60"xL44" 11/16 ผ่า2 (PALLET ASSY-A) MODEL PKG.FOR SEAT RAIL PART', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RBEN-001-rm', 'WOODEN PALLET 909W*1177L*130H HEAT TRETMENT MODEL:PKG.SMALL', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RBEN-002-rm', 'WOODEN PALLET 953W*1237LL*130H HEAT TRETMENT MODEL:PKG.INDONESIA BEN-002', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RBEN-003-rm', 'WOODEN PALLET 830W*1065L*130H HEAT TRETMENT MODEL:BOX SET FOR HIRUTA', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RBEN-004-rm', 'SLEEVE B-1 SIZE 660W*2079L KA230/CA185*3/KA230 BC/F 1:2  (W54"*L81" 7/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RBEN-005-rm', 'SLEEVE B-2 SIZE 660W*879L KA230/CA185*3/KA230 BC/F 1:2 (W54"*L34" 5/8 ผ่า2) MODEL:13453-87Z03 PACK 960 PCS./13453-OMO10 PACK 840 PCS.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RBEN-006-rm', 'SLEEVE B-3 SIZE 660W*1069L KA230/CA185*3/KA230 BC/F 1:2 (W54"*L42" 1/8 ผ่า2) MODEL:13453-87Z03 PACK 960 PCS./13453-OMO10 PACK 840 PCS.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RBEN-007-rm', 'INNER SLEEVE SIZE 660W*1960L KA230/CA185*3/KA230 BC/F 1:2 MODEL:13453-87Z03 PACK 960 PCS./13453-OMO10 PACK 840 PCS.W54"*L77" 3/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RBEN-008-rm', 'PAD SIZE 1080W*835L KA230/CA125/KA230 C/F 1:2  (W44"*L32" 7/8) MODEL:13453-87Z03 PACK 960 PCS./13453-OMO10 PACK 840 PCS.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RBEN-009-rm', 'WOODEN PALLET 934W*1166L*130H HEAT TRETMENTMODEL:13453-87Z03 PACK 960 PCS./13453-OMO10 PACK 840 PCS.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RBEN-010-rm', 'CAP 1144W*1382L KA230/CA185*3/KA230   BC/F  MODEL:13453-87Z03 PACK 960 PCS./13453-OMO10 PACK 840 PCS.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RBEN-013-rm', 'WOODEN PALLET 935W*1140L*130H HEAT TRETMENTMODEL:BOX 31122-ZE3-8200', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RBEN-014-rm', 'WOODEN PALLET 1099W*1092L*130H HEAT TRETMENTMODEL:PKG 12622-77002K PACK 960 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RCB-TYD001-1-rm', 'Z-NK001-CBV01  CARTON BOX VALVE ID 540*361*106 (SIZE :498W*1871L (CB001) KA185/CA125*3/KA185 BCF) มัดเชือก 2 เส้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RCB-TYD001-2-rm', 'Z-NK001-CBV01  CARTON BOX VALVE ID 540*361*106 (SIZE :498W*1871L (CB001) KA185/CA125*3/KA185 BCF) มัดเชือก 2 เส้น (Joint :GLUE)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RCB-TYD001-2-H-rm', 'CARTON BOX VALVE ID 540*361*106 (SIZE :498W*1871L (CB001) KA185/CA125*3/KA185 BCF) มัดเชือก 1 เส้นทางยาว (Joint :GLUE)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RCYC-001-rm', 'TOP CAP 837W*846L KA230/CA185*3/KA230 BC/F 1:1 (M. INNER PIPE)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RCYC-002-rm', 'CARTON BOX 305W*993L KA230/CA125*3/KA230 BC/F 1:30 (M. INNER PIPE)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RCYC-003-rm', 'SLEEVE-A 600W*698L KA230/CA185*3/KA230 BC/F 1:2 (M. INNER PIPE)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RCYC-004-rm', 'SLEEVE-B 600W*606L KA230/CA185*3/KA230 BC/F 1:2 (INNER PIPE)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RCYC-005-rm', 'BOTTOM CAP 837W*846L KA230/CA185*3/KA230 BC/F 1:1 (M. INNER PIPE)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RCYC-011-rm', 'BOX Package YA(25PCS) 332W*776L (KA230/CA125/KA230 C/F) YA PACK 25 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RCYC-012-rm', 'PARTITION  ASSY  Package YA(25PCS) 131W*212L (KA230/CA125/KA230 C/F) 1:1*75 YA PACK 25 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RCYC-013-rm', 'PARTITION  ASSY  Package YA(25PCS) 131W*176L (KA230/CA125/KA230 C/F) 1:8*75 YA PACK 25 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RCYC-014-rm', 'PAD Package YA(25PCS) 176W*176L (KA185/CA125/KA185 B/F) YA PACK 25 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RCYC-015-rm', 'WOODEN PALLET 985W*995L*130H (2 WAY FUMIGATE)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-015-rm', 'SLEEVE 810W*2210L KA230/CA185*3/KA230 BC/F 1:2 (180 PCS./PALLET)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-015-H-rm', 'SLEEVE 810W*2210L KA230/CA185*3/KA230 BC/F 1:2 (180 PCS./PALLET) NK SUPPORT SB', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-018-1CANCELL-rm', 'END PANEL-A 810W*1600L KA230/CA185*3/KA230 BC/F 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-018-2-rm', 'END PANEL-A 810W*1600L KA230/CA125*3/KA230 BC/F 1:2 (180 PCS./PALLET)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-018-2-H-rm', 'END PANEL-A 810W*1600L KA230/CA125*3/KA230 BC/F 1:2 (180 PCS./PALLET) NK SUPPORT SB', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-018CANCELL-rm', 'END PANEL-A 850W*1600L KA230/CA185*3/KA230 BC/F 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-019-1-rm', 'END PANEL-B 932W*810L KA230/CA125*3/KA230 BC/F 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-019CANCELL-rm', 'END PANEL-B 932W*810L KA230/CA185*3/KA230 BC/F 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-020-rm', 'PARTITION-B1,B2 880W*928L KA230/CA185*3/KA230 BC/F 1:12', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-021-rm', 'PARTITION-C1,C2 880W*928L KA230/CA185*3/KA230 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-023-rm', 'OUTER CASE 1042W*986L KA230/CA125*3/KA230 BC/F 1:2  (EXCEL SHAFT COMMON)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-024-rm', 'END PANEL 658W*186L KI150/CA125*3/KI150 BC/F 1:8 (EXCEL SHAFT COMMON)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-025-rm', 'PARTITION 658W*93L KI150/CA125*3/KI150 BC/F 1:16 (EXCEL SHAFT COMMON)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-026-rm', 'PARTITION-UN 449W*1110L KA230/CA185*3/KA230 BC/F 1:12', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-027-rm', 'PARTITION-UP 455W*1110L KA230/CA183*3/KA230 BC/F 1:12', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-028-rm', 'TURN LOCK-B 358W*240L KA230/CA185*3/CA230 BC/F 1:30', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-029-rm', 'END PANEL 1070W*940L KA230/CA185*3/CA230 BC/F 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-032-rm', 'น๊อต M12*1.25 MM / NUT', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-033-rm', 'EPE FOAM ROLL T=1 MM NORMAL SIZE 1.30*150 M', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-037-rm', 'CARTONBOX  1241W*1500L  KA230/CA125*3/KA230  BC/F มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-038-rm', 'Support  260W*130L  KA230/M/KA230  BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-042-rm', 'CAP 745W*2119L KA230/CA185*3/KA230 BC/F 1:2  ( NISSAN SERVICE)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-043-rm', 'STOPPER  410W*240L KA230/CA185*3/KA230 BC/F 1:4  ( NISSAN SERVICE)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-044-rm', 'PARTITION-A 310W*410L KA230/CA125*3/KA230 BC/F 1:10  ( NISSAN SERVICE)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-045-rm', 'PARTITION-B 185W*410L KA230/CA125*3/KA230 BC/F 1:8  ( NISSAN SERVICE)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-069/1-rm', 'ZERUST FERROUS COVER BAG 1200W*2500L*1500H*0.07 MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-072-1-rm', 'END SL-D1 764W*1315L KA230/CA185*3/KA230 BC/F 1:2 (P32R STEEL RACK)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-074-1-rm', 'GUIDE ASSY-G 118W*657L KA230/CA125/KA230 C/F 1:20 (P32R STEEL RACK)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-075-rm', 'T/B PLATE 1060W*2330L KA230/CA185*3/KA230 BC/F 1:2 (P32R STEEL RACK)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-080-1-rm', 'END SL-D2 764W*1315L KA230/CA185*3/KA230 BC/F 1:2 (P32R STEEL RACK)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-099-rm', 'BOTTOM 635W*2276L KA230/CA125*3/KA230 BCF 1:1  MODEL P32R9PACK 2 PC)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-100-rm', 'TOP 543W*2290L KA230/CA125*3/KA230 BCF 1:1  MODEL P32R9PACK 2 PC)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-101-rm', 'PTT DAI 70  80W*295L  KA230/CA125*3/KA230 BCF 1:20  MODEL P32R9PACK 2 PC)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-102-rm', 'PTT DAI 65  80W*295L  KA230/CA125*3/KA230 BCF 1:20  MODEL P32R9PACK 2 PC)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-104-rm', 'PTT-COVER-C1 148W*1066L KA230/CA125*3/KA230 BCF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-105-rm', 'TOP PLATE 2258W*1113L KA230/CA185*3/KA230 BCF 1:1 MODEL P32R PACK 72 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-105/ลดหนี้-rm', 'TOP PLATE 2258W*1130L KA230/CA185*3/KA230 BCF 1:1 MODEL P32R PACK 72 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-106-rm', 'ZERUST FRRROUS COVER BAG 1000*2300*1500H*0.06T 1:1 MODEL T6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-107-rm', 'CAP ASSY-A 2210W*941L KA230/CA185*3/KA230 BCF 2:1  MODEL T6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-108-1-rm', 'GUIDE-B 810W*475L KA150/CA125*3/KA150 BCF 4:1 MODEL T6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-109-1-rm', 'GUIDE-C 810W*416L KA150/CA125*3/KA150 BCF 6:1 MODEL T6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-110-1CANCELL-rm', 'GUIDE ASSY 810W*778L KA150/CS110*3/KA150 BCF 6:1 MODEL T6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-110-2-rm', 'GUIDE ASSY 810W*778L KA125/CA125*3/KA125 BCF 6:1 MODEL T6 (W66"*L30" 5/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-110CANCELL-rm', 'GUIDE ASSY 810W*778L KA150/CA125*3/KA150 BCF 6:1 MODEL T6 (W66"*L30" 5/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-111-1-rm', 'PTT 77  800W*928L KA150/CA125*3/KA150  BCF 20:1 MODEL T6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-111CANCELL-rm', 'PTT 77  800W*928L KA185/CA125*3/KA185  BCF 20:1 MODEL T6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-112-1-rm', 'PTT LOCK A 880W*928L KA150/CA125*3/KA150  BCF 5 :1 MODEL T6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-112CANCELL-rm', 'PTT LOCK A 880W*928L KA185/CA125*3/KA185  BCF 5 :1 MODEL T6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-113-1-rm', 'PTT LOCK B 880W*928L KA150/CA125*3/KA150  BCF 5 :1 MODEL T6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-113CANCELL-rm', 'PTT LOCK B 880W*928L KA185/CA125*3/KA185  BCF 5 :1 MODEL T6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-114-1-rm', 'GUIDE-A 810W*205L KA150/CA125*3/KA150 BCF 4:1 MODEL T6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-115-rm', 'EPE FOAM BULE ( สีฟ้า )  ROLL T=1 MM NORMAL SIZE 1.30*150 M', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-124-rm', 'TOP CAP 1311W*1306L KA185/CA125*3/KA185 BCF 1:1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-125-rm', 'PTT-A 155W*1030L KA185/CA125*3/KA185 BCF 1:32 (มัดเชือก 50 PCS.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-125-H-rm', 'PTT-A 155W*1030L KA185/CA125*3/KA185 BCF 1:32 (มัดเชือก 50 PCS.) NK SUPPORT SHEET BOARD', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-126-rm', 'PAD-A 1030W*1030L KA150/CA125*3/KA150 BCF 1:16 (มัดเชือก 10 PCS.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-126-H-rm', 'PAD-A 1030W*1030L KA150/CA125*3/KA150 BCF 1:16 (มัดเชือก 10 PCS.) NK SUPPORT SHEET BOARD', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-127-rm', 'PAD-B/TOP PAD 1030W*1030L KA230/CA125*3/KA230 BCF 1:5 (W42"*L40" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-127-1-rm', 'PAD-B/TOP PAD 1030W*1030L KA230/CS110*3/KA230 BCF 1:5', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-128-rm', 'BOTTOM CAP 1311W*1306L KA185/CA125*3/KA185 BCF 1:1 MODEL EDL', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-129-rm', 'BOTTOM PLATE 1060W*1060L PLY WOOD 8T MODEL EDL', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-130-rm', 'PALLET 1060W*1060L*128H WOOD(FUMIGATION) 1:1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-131-rm', 'SLEEVE 750W*2126L BI WALL 40 1:2  *มีพิมพ์ เย็บแล้ว*  Model. EDL', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-131-SHINWA-rm', 'SLEEVE 750W*2126L BI WALL 40 1:2  *ไม่พิมพ์ ไม่เย็บ*  Model. EDL', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-133-rm', 'SIDE SL-A 1071W*2246L KA230/CA185*3/KA230 BCF 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-134-rm', 'SL-B 1071W*256L KA230/CA185*3/KA230 BCF 1:4 DV.P32R PACK72 PCS (PARTITION)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-135-rm', 'SL-C 1071W*280L KA230/CA185*3/KA230 BCF 1:2 DV.P32R PACK72 PCS (PARTITION)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-136-rm', 'SL-D 1071W*360L KA230/CA185*3/KA230 BCF  1:4 DV.P32R PACK72 PCS (PARTITION)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-137-rm', 'GUIDE PTT-E 1071W*505L KA230/CA185*3/KA230 BCF 1:6 DV.P32R PACK72 PCS (PARTITION)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-137-1-rm', 'GUIDE PTT-E 1071W*1012L KA230/CA185*3/KA230 BCF 1:6 DV.P32R PACK72 PCS (PARTITION)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-138 CANCEL-rm', 'END SL-A  1071W*1520L KA230/CA185*3/KA230 1:2 BC MODEL P32R PACK77 ทับรอย 205-1110-205', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-138-1-rm', 'END SL-A  1071W*1520L KA230/CA185*3/KA230 1:2 BC MODEL P32R PACK77', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-139 CANCEL-rm', 'END SL-C 1110W*1071L KA230/CA185*3/KA230 BCF 1:2 MODEL P32R PACK77', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-139-1-rm', 'END SL-C 978W*1071L KA230/CA185*3/KA230 BCF 1:2 MODEL P32R PACK77', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-140-rm', 'END SUP 1100W*1100L PE SHEET 0.10T 1:2 DV. PACK 77 PCS (PARTITION)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-141-rm', 'PTT DIA 72 1208W*1096L KA230/CA125*3/KA230 1:12 MODEL P32R PACK77', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-142-rm', 'PTT DIA 67 1208W*1096L KA230/CA125*3/KA230 1:12 MODEL P32R PACK77', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-149-rm', 'ZERUST BAG 40W*55L*0.10T MM MODEL : EDL', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-154-rm', 'PALLET1016W**1770L*140H  WOOD FUMIGATION MODEL : P60A ALUMINIUM PROPSHAFT(PACK 10)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-155-rm', 'PALLET1016W**1770L*140H  WOOD FUMIGATION MODEL : P60A ALUMINIUM PROPSHAFT(PACK 20)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-157-rm', 'PALLET 279W*1914L*120H  WOOD FUMIGATION MODEL : SERVICE PART VOLVO PACK-1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-159-rm', 'TOP ASSY-A 1087W*2210L KA230/CA125*3/KA230 BCF 1:1 P32R PACK 45 R5T STEEL (W44"*L87" 1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-159-1-rm', 'TOP ASSY-A 1087W*2210L KA185/CA125*3/KA185 BCF 1:2 COMMON  X60A STEEL (W44"*L87" 1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-160-rm', 'SIDE ASSY-A 670W*1328L KA230/CA185*3/KA230 BCF 1:2 P32R PACK 45 R5T STEEL', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-160-1-rm', 'SIDE ASSY-A 670W*1328L KA150/CA125*3/KA150 BCF 1:2 COMMON X60A STEEL (W54*L52 5/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-161-rm', 'GUIDE-C 118W*670L KA230/CA125/KA230 CF 1:16 P32R PACK 45 R5T STEEL', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-162-rm', 'END ASSY-A 670W*1047L KA230/CA185*3/KA230 BCF 1:4  P32R PACK 45 R5T STEEL  (W54"*L41" 1/4 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-162-1-rm', 'END ASSY-A 670W*1047L KA150/CA125*3/KA150 BCF 1:4  COMMON X60A STEEL  (W54"*L41" 1/4 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-163-rm', 'END ASSY-B 670W*1025L KA230/CA185*3/KA230 BCF 1:2  P32R PACK 45 R5T STEEL (W54"*L40" 3/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-163-1-rm', 'END ASSY-B 670W*1025L KA150/CA125*3/KA150 BCF 1:2  COMMON X60A STEEL (W54"*L40" 3/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-165-rm', 'SIDE SL-A 728W*2246L KA230/CA185*3/KA230 BCF 1:2 MODEL P32R PACK 54 (W58"*L88" 7/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-166-rm', 'SIDE SL-B 728W*256L KA230/CA185*3/KA230 BCF 1:4 MODEL P32R PACK 54', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-167-rm', 'SIDE SL-C 728W*280L KA230/CA185*3/KA230 BCF 1:2 MODEL P32R PACK 54', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-168-rm', 'SIDE SL-D 728W*360L KA230/CA185*3/KA230 BCF 1:4 MODEL P32R PACK 54', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-169-rm', 'GUIDE PTT-E 728W*505L KA230/CA185*3/KA230 BCF 1:6 MODEL P32R PACK 54', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-170-rm', 'END SL-A 728W*1520L KA230/CA185*3/KA230 BCF 1:2 MODEL P32R PACK 54 (W58"*L59" 7/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-170-1-rm', 'END SL-A 728W*1520L KA230/CA185*3/KA230 BCF 1:2 MODEL P32R PACK 54', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-171 CACEL-rm', 'END SL-C 1110W*728L KA230/CA185*3/KA230 BCF 1:2 MODEL P32R PACK 54', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-171-1-rm', 'END SL-C 978W*728L KA230/CA185*3/KA230 BCF 1:2 MODEL P32R PACK 54', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-172-rm', 'PTT-72 865W*1096L KA230/CA125*3/KA230 BCF 1:12 MODEL P32R PACK 54', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-173-rm', 'PTT-67 865W*1096L KA230/CA125*3/KA230 BCF 1:12 MODEL P32R PACK 54', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-180-rm', 'WOODEN PALLET 966W*1460L*130H FUMIGATION PKG.PART NO.10034235', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-181-rm', 'SHEET BOARD 380W*800L KA125/CA125/KA125  C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-181-1-rm', 'SHEET BOARD 380W*800L KA125/CS110/KA125  C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-182 CANCEL-rm', 'PALLET 279W*2264L*120H  WOOD (HEAT TREATMENT) MODEL : SERVICE PART VOLVO PACK-1 XL', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-182-1-rm', 'PALLET 279W*2450L*120H  WOOD (HEAT TREATMENT) MODEL : SERVICE PART VOLVO PACK-1 XL', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-183-1-rm', 'END SLEEVE 1059W*710L KA185/CA185*3/KA185 BCF 1:2  NISSAN H60A(R5T)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-184 (CANCELLED)-rm', 'SIDE ASSY-A 705W*1547L KA230/CA185*3/KA230 BCF 1:2  NISSAN H60A(R5T)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-184-1-rm', 'SIDE ASSY-A 705W*1547L KA185/CA185*3/KA185 BCF 1:2  NISSAN H60A(R5T)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-185-rm', 'SIDE ASSY-A 710W*1267L KA230/CA185*3/KA230 BCF 1:2 MODEL D22 PACK 70 R5E (W58"*L49" 15/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-187-rm', 'END ASSY-A 710W*1042L KA230/CA185*3/KA230 BCF 1:4  MODEL D22 PACK 70 R5E  (W58"*L41" 1/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-189-rm', 'SLEEVE SHEET BOARD 40AA 2150W*4600L Model. DV.PACKAGE FOR EDL', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-189-H-rm', 'END SLEEVE size 495W*506L KA230/CA185*3/KA230 BC M. PKG. FOR AXLE RR M220 CVJ (PACK1) ทับรอย 50*406*50 มัดละ 10 ชิ้น (NK Support S/B)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-190-rm', 'PTT-A 650W*1066L KA230/CA125*3/KA230 BCF 1:12 MODEL:P32R PACK-45', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-191-rm', 'PTT-B 650W*1066L KA230/CA125*3/KA230 BCF 1:12 MODEL:P32R PACK-45', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-196-rm', 'LDPE BAG 40W*55L*0.10T MM MODEL : EDL PACK 48, PACK 64 STD 500 PCS/PACK', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-196-1-rm', 'LDPE BAG 40W*55L*0.09T MM MODEL : EDL PACK 48, PACK 64, PACK 100 STD 500 PCS/PACK', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-197-rm', 'SLEEVE 883W*2140L KA230/CA185*3/KA230 BCF SCREEN เย็บเป็นกล่องแล้ว MODEL EDL PACK64', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-197-1-rm', 'SLEEVE 883W*2140L KA230/CA125*3/KA230 BCF SCREEN เย็บเป็นกล่องแล้ว MODEL EDL PACK64', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-197-H-rm', 'SLEEVE 883W*2140L KA230/CA185*3/KA230 BCF SCREEN เย็บเป็นกล่องแล้ว MODEL EDL PACK64 (NK SUPPORT SB)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-198-rm', 'PTT-A 354W*1030L KA185/CA125*3/KA185 BCF 1:40 MODEL EDL PACK 64', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-199-rm', 'PAD-A 1030W*1030L KA150/CA125*3/KA150 BCF 1:16 MODEL EDL PACK64', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-200-rm', 'PAD-B 1030W*1030L KA150/CA125*3/KA150 BCF 1:8 MODEL EDL PACK64', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-201-rm', 'PAD-C 1030W*1030L KA230/CA125*3/KA230  BCF 1:4 MODEL EDL PACK64', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-202-rm', 'WOODEN PALLET 1060W*1060L*128H  1:1  HEAT TRETMENT MODEL EDL PACK64 STAM COLOR BLACK  (R)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-202-1-rm', 'WOODEN PALLET 1060W*1060L*129H  1:1  HEAT TRETMENT MODEL DV.EDL PACK100  IDEA 1 เปลี่ยนหน้าไม้ STAM COLOR BLACK  (R)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-203-rm', 'PAD 1030W*1030L KA150/CA125/KA150 CF  MODEL EDL PACK64', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-204-rm', 'SLEEVE 750W*2140L KA230/CA185*3/KA230 BCF SCREEN เย็บเป็นกล่องแล้ว MODEL EDL PACK100 (SLEEVE KA)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-204-1-rm', 'SLEEVE 750W*2140L KA230/CA125*3/KA230 BCF SCREEN เย็บเป็นกล่องแล้ว MODEL EDL PACK100 (SLEEVE KA)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-205-rm', 'T/B CAP size 745W*2230L KA230/CA185*3/KA230 BC มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-205-H-rm', 'T/B CAP size 745W*2230L KA230/CA185*3/KA230 BC Model PKG. FOR AXLE RR M220 CVJ (PACK1) มัดละ 10 ชิ้น (NK Support S/B)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-206-rm', 'SIDE SLEEVE size 495W*1914L KA230/CA185*3/KA230 BC (W40"xL75" 3/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-207-rm', 'WOODEN PALLET 1148W*2230L*126H  1:1  HEAT TRETMENT MODEL T6 P375 & P703 PACK 24', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-207-1-rm', 'WOODEN PALLET 1148W*2230L*124H  1:1  HEAT TRETMENT MODEL T6 P375 & P703 PACK 24', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-208-rm', 'ZERUST FRRROUS COVER BAG 1200*2300*1500H*0.06T 1:1 MODEL T6 P375&P703 PACK 24', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-208-1-rm', 'ZERUST FRRROUS COVER BAG 1200*2300*1400H*0.06T 1:1 MODEL T6 P375&P703 PACK 24 (CHANGE SIZE)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-209-rm', 'WOODEN PALLET 1124W*1124L*128H  1:1  WOOD (FUMIGATION) MODEL EDL M300', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-210-rm', 'CAP ASSY-A/BOTTOM ASSY-A 2210W*1126L KA230/CS110*3/KA230 BCF 2:1  MODEL T6  PACK24', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-210-1-rm', 'CAP ASSY-A/BOTTOM ASSY-A 2210W*1126L KA185/CS110*3/KA185 BCF 2:1  MODEL T6  PACK24 (CHANGE SPEC SB)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-211-rm', 'GUIDE-A 650W*205L KA150/CA125*3/KA150 BCF 1:4 MODEL T6  PACK24', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-212-rm', 'GUIDE-B 650W*475L KA150/CA125*3/KA150 BCF 1:4 MODEL T6  PACK24', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-213-rm', 'GUIDE-C 650W*416L KA150/CA125*3/KA150 BCF 1:6 MODEL T6  PACK24', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-214-H-rm', 'SLEEVE 650W*2200L KA230/CA185*3/KA230 BCF 1:2 MODEL T6  PACK24', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-215-H-rm', 'END PANEL-A 650W*1775L KA230/CA125*3/KA230 BCF 1:2 MODEL T6  PACK24', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-216-rm', 'PTT-77 640W*1103L KA150/CA125*3/KA150 BCF 1:20 MODEL T6  PACK24', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-217-rm', 'PTT LOCK-A 720W*1103L KA150/CA125*3/KA150 BCF 1:5 MODEL T6  PACK24', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-218-rm', 'PTT LOCK-B 720W*1103L KA150/CA125*3/KA150 BCF 1:5 MODEL T6  PACK24', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-219-rm', 'GUIDE ASSY 650W*778L KA150/CA125*3/KA150 BCF 1:6 MODEL T6  PACK24', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-220-rm', 'END PANEL-B 1107W*650L KA230/CA125*3/KA230 BCF 1:2 MODEL T6  PACK24', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-221-rm', 'BOX  size OD 288W*1071L*217H (498W*1383L) KA230/CA125*3/KA230 BC (2 Joint) model SHAFT ASSY (PACK 1) TD-DAN-2206002-00-01', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-222-rm', 'PAPER CORE ID2"(51*5T*150L MM.) แกนมือสอง Support: LEG Model:DV.CARRIER-T6(PACK1) DAN-0904008-00-06', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-222-1-rm', 'PAPER CORE OD 62 mm.แกนมือสอง สำหรับตัด Support: LEG Model:DV.CARRIER-T6(PACK1) DAN-0904008-00-06', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-223-rm', 'BOX SIZE:840W*1485L KA230/CA185*3/KA230 BC/F JOINT:Stilching Model:DV.CARRIER-T6(PACK1) DAN-0904008-00-06 มัดละ 10 PCS.ด้านยาว 2 เส้นไม่รองกระดาษ', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-224-rm', 'SB 738W*2125L KA185/CA125*3/KA185 BCF 1:1 ทับรอย 249*240*249 SUPPORT UNDER CASE MODEL T-6 PACK 1-2 (W60"xL83" 11/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-224-1-rm', 'SB 738W*2125L KA125/CA125*3/KA125 BCF 1:1 ทับรอย 249*240*249 SUPPORT UNDER CASE MODEL T-6 PACK 1-3 (W60"xL83" 11/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-225-rm', 'SB 766W*2125L KA185/CA125*3/KA185 BCF 1:1 ทับรอย 256*254*256 SUPPORT UPPER CASE MODEL T-6 PACK 1-2 (W62"xL83" 11/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-225-1-rm', 'SB 766W*2125L KA125/CA125*3/KA125 BCF 1:1 ทับรอย 256*254*256 SUPPORT UPPER CASE MODEL T-6 PACK 1-3 (W62"xL83" 11/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDAN-226-rm', 'WOODEN PALLET 1050W*1604L*135H  1:1  HEAT TRETMENT MODEL EXPORT JMC PHEV.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-007-1 CANCEL-rm', 'CARTON BOX 676W*1097L  KA185/CA125*3/KA185 BC/F 1:1 (YC) (SCREEN)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-007-2 CALCELLED-rm', 'CARTON BOX 676W*1097L  KA230/CA125*3/KA230 BC/F 1:1 (YC) (SCREEN)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-007-3CANCELL-rm', 'CARTON BOX 676W*1097L  KA230/CA125*3/KA230 BC/F 1:1 (YC) (SCREEN) 46-12AFI064-01B', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-007-4-rm', 'CARTON BOX 676W*1097L  KA230/CA125*3/KA230 BC/F 1:1 (YC) (SCREEN) 46-12AFI064-01C มัดละ 9 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-007-4-H-rm', 'CARTON BOX 676W*1097L  KA230/CA125*3/KA230 BC/F 1:1 (YC) (SCREEN) 46-12AFI064-01C มัดละ 9 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-008 CANCEL-rm', 'PTT-A 242W*269L  KA185/CA125*3/KA185 BC/F 1:1 (YC)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-008-1-rm', 'PTT-A 242W*269L  KA185/CA125*3/KA185 BC/F 1:1 (YC) Ferfarate line 46-12AFI071-00', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-009-rm', 'PTT-B 242W*269L  KA185/CA125*3/KA185 BC/F 1:4 (YC)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-010-rm', 'PTT-C 242W*269L  KA185/CA125*3/KA185 BC/F 1:1 (YC)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-011/1-rm', 'STOPPER 360W*619L  KA185/CA125*3/KA185 BC/F 1:1 (YC)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-012-2 CANCELL-rm', 'BOX NO.7 843W*1289L  KA230/CA185*3/KA230 BC/F 1:1 (SCROLL)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-012-3CANCELL-rm', 'BOX NO.7 843W*1289L  KA230/CA185*3/KA230 BC/F 1:1 (SCROLL)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-012-4-rm', 'BOX NO.7 843W*1289L  KA230/CA185*3/KA230 BC/F 1:1 (SCROLL)  Screen 46-12SAFI060-01C', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-013-1 CANCEL-rm', 'BOX NO.11  888W*1289L  KA230/CA125*3/KA230 BC/F 1:1 MODEL (SCROLL) ADD SCREEN', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-013-2CANCELL-rm', 'BOX NO.11  888W*1289L  KA230/CA185*3/KA230 BC/F 1:1 MODEL (SCROLL)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-013-3CANCELL-rm', 'BOX NO.11  888W*1289L  KA230/CA185*3/KA230 BC/F 1:1 MODEL (SCROLL)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-013-4-rm', 'BOX NO.11  888W*1289L  KA230/CA185*3/KA230 BC/F 1:1 MODEL (SCROLL) Screen 46-12SAFI069-01C', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-013-5-rm', 'BOX NO.11  888W*1289L  KA230/CA185*3/KA230 BC/F 1:1 MODEL (SCROLL) Screen 46-12SAFI069-01D', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-014-1 CANCEL-rm', 'BOX NO.12 906W*1289L  KA230/CA125*3/KA230 BC/F 1:1 (SCROLL) ADD SCREEN', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-014-2 CANCELL-rm', 'BOX NO.12 906W*1289L  KA230/CA185*3/KA230 BC/F 1:1 (SCROLL)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-014-3CANCELL-rm', 'BOX NO.12 906W*1289L  KA230/CA185*3/KA230 BC/F 1:1 (SCROLL)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-014-4-rm', 'BOX NO.12 906W*1289L  KA230/CA185*3/KA230 BC/F 1:1 (SCROLL) Screen 46-12SAFI070-01C', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-014-4 HELP-rm', 'BOX NO.12 906W*1289L  KA230/CA185*3/KA230 BC/F 1:1 (SCROLL) Screen 46-12SAFI070-01C', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-015 CANCEL-rm', 'PTT-B1 636W*280L  KA230/CA125*3/KA230 BC/F 1:1 (SCROLL)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-015-1-rm', 'PTT-B1 636W*280L  KA230/CA125*3/KA230 BC/F 1:1 (SCROLL) add perforate line 46-12SAFI061-01', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-016-1-rm', 'PTT-B2-1 318W*280L KA230/CA125*3/KA230 BCF 1:1 M.SCOLL', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-016-2-rm', 'PTT-B2-2 318W*280L KA230/CA125*3/KA230 BCF 1:1 M.SCOLL', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-016CANCELLED-rm', 'PTT-B2 636W*280L  KA230/CA125*3/KA230 BC/F 1:1 (SCROLL)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-017-rm', 'PTT-B3 318W*280L  KA230/CA125*3/KA230  BC/F 1:1 (SCROLL)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-018-rm', 'PTT-C1 1364W*318L  KA230/CA125*3/KA230  BC/F 1:1 (SCROLL)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-019-rm', 'PTT-D1 1378W*418L  KA230/CA125*3/KA230  BC/F 1:1 (SCROLL)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-020-2CANCELL-rm', 'BOX 984W*1288L KA230/CA185*3/KA230 BCF 1:1 PRINT MODEL 46-17SAFI-001-01C มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-020-3-rm', 'BOX 984W*1288L KA230/CA185*3/KA230 BCF 1:1 PRINT MODEL 46-17SAFI001-01D มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-020-3-H-rm', 'BOX 984W*1288L KA230/CA185*3/KA230 BCF 1:1 PRINT MODEL 46-17SAFI001-01D มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-023-rm', 'BOX 781W*1097L KA230/CA125*3/KA230 BCF 1:1 PRINT MODEL 46-18AFI040-02A', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-026-rm', 'COVER 340W*619L KA185/CA125*3/KA185 BCF 1:1  MODEL 2YC40NXD Change Ferfarate line 18AFI041-01C', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-027-1-rm', 'PTT-A 242W*269L KA185/CA125*3/KA185 BCF 1:1  MODEL 2YC40NXD Change Ferfarate line 18AFI042-01A', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-027CANCELL-rm', 'PTT-A 242W*269L KA185/CA125*3/KA185 BCF 1:1  MODEL 2YC40NXD Ferfarate line 18AFI042-01', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIC-036-H-rm', 'BOX  SIZE 923W*1289L KA230/CA185*3/KA230 BC/F  Model  XJT160P COMMON XJT100P SCREEN COLOR BLACK (HAND HOLD แบบใหม่ตัดไม่ขาด) มัดละ 9 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDID-RIBBON-01-rm', 'RIBBON Wax Size 64mm.x250m. out แบบบาง', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDID-STICKER-01-rm', 'STICKER TTR Size 5.0cm.x2.0cm.(1Roll/2000PCS) แบบบาง', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDID-STICKER-03-rm', 'STICKER TTR Size 4.1cm.x1.6cm.(1Roll/2000PCS) แบบบาง สีขาว', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIT-001-rm', 'WOODEN PALLET 841W*1004L*111H  1:1  HEAT TRETMENT MODEL:STATOR CORE LAMINATE (PACK150)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDIT-002-rm', 'WOODEN PALLET 1046W*1058L*111H  1:1  HEAT TRETMENT MODEL:ROTOR CORE LAMINATE (PACK900)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RECA-001-rm', 'BOX 787W*1040L KL150/CA125/KL150 C/F 1:2 มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RECA-002-rm', 'PTT-1B 130W*500L KL150/CA125/KL150 C/F 1:3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RECA-003-rm', 'PTT-1C 1076W*500L  KL150/CA125/KL150 C/F 1:1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'REPDCNHP-001-rm', 'PLATE DIE CUT REPAIR เพิ่มปุ๊ตัวเลขใน plate 4 รายการ model X61G', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-001-rm', 'TOP CAP 2070W*3326L KA230/CA185*3/KA230 BCF 1:1 MODEL PAG.FOR B299-BA ทับรอย 140*1790*140 (W82"*L131")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-004-rm', 'PTT-3A 794W*1743L KA230/CA185*3/KA230 BCF 1:1 MODEL PAG.FOR B299-BA(NEW DESIGN PACK 18 PCS.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-005-rm', 'PTT-3B 168W*837L KA230/CA185*3/KA230 BCF 1:7 MODEL PAG.FOR B299-BA', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-006-1-rm', 'PTT-4A  1094W*1743L KA230/CA185*3/KA230 BCF 1:2 MODEL PAG.FOR B299-BA(NEW DESIGN PACK 18 PCS.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-007-rm', 'PTT-4B 363W*837L KA230/CA185*3/KA230 BCF 1:14 MODEL PAG.FOR B299-BA(NEW DESIGN PACK 18 PCS.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-008-rm', 'PTT-5A 1319W*1743L KA230/CA185*3/KA230 BCF 1:3 MODEL PAG.FOR B299-BA(NEW DESIGN PACK 18 PCS.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-009-rm', 'PTT-5B 325W*790L KA230/CA185*3/KA230 BCF 1:21 MODEL PAG.FOR B299-BA(NEW DESIGN PACK 18 PCS.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-011-rm', 'BOTTOM CAP 2070W*3326L KA230/CA185*3/KA230 BCF 1:1 MODEL PAG.FOR B299-BA ทับรอย140*1790*140(W82"*L131")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-012-rm', 'WOODEN PALLET 1800W*3075L*131H 1:1 MODEL PAG.FOR B299-BA', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-015-rm', 'SLEEVE-B 1093W*3030L KA230/CA185*3/KA230 BC/F MODEL PAG.FOR B299-BA(PACK 12 PCS) ทับรอย 993*100 (W44"*L119" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-027-rm', 'Sleevel-A 990W*1853L KA230/CA185*3/KA230 BC/FMODEL PAG.FOR B299-BA(PACK 18 PCS) ทับรอย 50*1753*50', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-028-rm', 'WOODEN PALLET 1424W*1664L*120H HEAT TREATMENT MODEL: CARTON BOX FOR RART EB3G5H 211AC,CC', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-029-rm', 'TOP CAP 1665W*1900L KA230/CA125*3/KA230L MODEL: CARTON BOX FOR RART EB3G5H 211AC,CC', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-030-rm', 'BOTTOM TRAY 1665W*1900L KA230/CA125*3/KA230L BC/F MODEL: CARTON BOX FOR RART EB3G5H 211AC,CC', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-032-rm', 'S/B SLEEVE-L 700W*1630L KA230/CA125*3/KA230L BC/F MODEL: CARTON BOX FOR RART EB3G5H 211AC,CC (W56"*L64" 3/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-033-rm', 'S/B SLEEVE-W 700W*1484L KA230/CA125*3/KA230L BC/F MODEL: CARTON BOX FOR RART EB3G5H 211AC,CC ทับรอย40*1404*40 (W56"*L58" 7/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-034-rm', 'PARTITION-A 435W*1430L KA230/CA125*3/KA230L BC/F MODEL: CARTON BOX FOR RART EB3G5H 211AC,CC', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-035-rm', 'PARTITION-B 453W*1430L KA230/CA125*3/KA230L BC/F MODEL: CARTON BOX FOR RART EB3G5H 211AC,CC', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-036-rm', 'TOP CAP  1336W*2020L  KA230/CA125*3/KA230L BC/F MODEL: PKG.U375 (EB3G-5230-BB,CB,DA)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-037 CANCEL-rm', 'SLEEVE-A  972W*1141L  KA230/CA125*3/KA230L BC/F MODEL: PKG.U375 (EB3G-5230-BB,CB,DA) ทับรอย 50*1091', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-037/1-rm', 'SLEEVE-B  972W*1830L  KA230/CA125*3/KA230L BC/F MODEL: PKG.U375 (EB3G-5230-BB,CB,DA) ทับรอย 50*1780', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-038-rm', 'PTT-3A  243W-1081L  KA230/CA125*3/KA230L BC/F MODEL: PKG.U375 (EB3G-5230-BB,CB,DA)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-039-rm', 'PTT-3B  243W-1081L  KA230/CA125*3/KA230L BC/F MODEL: PKG.U375 (EB3G-5230-BB,CB,DA)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-040-rm', 'PTT-3C  243W-1081L  KA230/CA125*3/KA230L BC/F MODEL: PKG.U375 (EB3G-5230-BB,CB,DA)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-041-rm', 'TRAY  1336W*2020L  KA230/CA125*3/KA230L BC/F MODEL: PKG.U375 (EB3G-5230-BB,CB,DA)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-042 CANCEL-rm', 'WOODEN PALLET 1126W*1804L*120H MODEL: PKG.U375 (EB3G-5230-BB,CB,DA)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-042-1-rm', 'WOODEN PALLET 1126W*1804L*120H MODEL: PKG.U375 (EB3G-5230-BB,CB,DA) (เปลี่ยนเต๋า) (EB3G 5230 DA,CC,BB COMMON PACK 6& PACK12)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-043 CANCEL-rm', 'PTT-3D 243W*1770L KA230/CA125*3/KA230 BCF 1:16 MODEL: PKG.U375 (EB3G-5230-BB,CB,DA) PACK 12 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-043-1-rm', 'PTT-3D 243W*1836L KA230/CA125*3/KA230 BCF 1:8 MODEL: PKG.U375 (EB3G-5230-BB,CB,DA) PACK 6 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-044-rm', 'PTT-A 435W*1630L KA230/CA125*3/KA230 BCF 1:5 DV.PART EB3G5H 211AC,CC', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-045-rm', 'PTT-B 453W*1630L KA230/CA125*3/KA230 BCF 1:5 DV.PART EB3G5H 211AC,CC', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-046-rm', 'WOODEN PALLET 793W*942L*120H HEAT TREATMENT MODEL FORD ARGENTINA', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-047-rm', 'S/B 1081W*1760L KA230/CA185/KA230 CF (W44"*L69" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-048-rm', 'S/B 982W*1141L KA230/CA125*3/KA230 BCF PACK 12 PCS ทับรอย 50*1091 (W40"*L44" 15/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-049-rm', 'S/B 982W*1830L KA230/CA125*3/KA230 BCF PACK 12 PCS ทับรอย 50*1780 (W40"*L72" 1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-050 CANCEL-rm', 'WOODEN PALLET 1439W*2839L*127H HEAT TREATMENT MODEL FAURECIA 5209720', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-050-1-rm', 'WOODEN PALLET 1439W*2839L*124H HEAT TREATMENT MODEL FAURECIA 5209720', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-050-2-rm', 'WOODEN PALLET 1439W*2839L*124H HEAT TREATMENT MODEL FAURECIA 5209720 เปลี่ยนระยะ', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-051-rm', 'TOP ASSY -A 1421W*2825L KA230/CA125*3/KA230 BC/F MODEL 5209720 (W58"*L111" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-052-rm', 'SLEEVE-A 840W*1153L KA230/CA125*3/KA230 BCF 1:2 MODEL CONV & PIP ASY EXH(PACK 18 ) ทับรอย 50*1053*50 (W68"*L45" 7/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-053-rm', 'SLEEVE-B 840W*1040L KA230/CA125*3/KA230 BCF 1:2 MODEL CONV & PIP ASY EXH(PACK 18 ) (W68"*L41" ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-054-rm', 'SLEEVE-C 840W*1766L KA230/CA125*3/KA230 BCF 1:4 MODEL CONV & PIP ASY EXH(PACK 18 )(W68"*L69" 9/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-055-rm', 'WOODEN PALLET 1110W*1790L*120H HEAT TREATMENT  MODEL CONV & PIP ASY EXH(PACK 18 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-056-rm', 'PTTA 560W*1732L KA230/CA125*3/KA230 BCF 1:3 MODEL CONV & PIP ASY EXH(PACK 18 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-057-rm', 'PTTB 560W*1732L KA230/CA125*3/KA230 BCF 1:3 MODEL CONV & PIP ASY EXH(PACK 18 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-058-rm', 'PTTC 560W*1732L KA230/CA125*3/KA230 BCF 1:3 MODEL CONV & PIP ASY EXH(PACK 18 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-059-rm', 'BOTTOM ASSY -A 1421W*2825L KA230/CA125*3/KA230 BC/F MODEL 5209720 (W58"*L111" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-060-rm', 'SLEEVE-LA 970W*1487L KA230/CA185*3/KA230 BC/F 1:1 MODEL 5209720 ทับรอย 45*1397*45 (W40"*L58" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-061-rm', 'SLEEVE-LB 970W*1083L KA230/CA185*3/KA230 BC/F 1:2 MODEL 5209720 (W40"*L42" 11/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-062-rm', 'SLEEVE-RA 970W*1487L KA230/CA185*3/KA230 BC/F 1:1 MODEL 5209720 ทับรอย 45*1397*45 (W40"*L58" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-063-rm', 'SLEEVE-RB 970W*1213L KA230/CA185*3/KA230 BC/F 1:2 MODEL 5209720 (W40"*L47" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-064-rm', 'SLEEVE-D1 970W*2819L KA230/CA125*3/KA230 BC/F 1:2 MODEL 5209720 (W40"*L111")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-065-1-rm', 'SLEEVE-D2 970W*710L KA230/CA125*3/KA230 BC/F 1:2 MODEL 5209720  (W40"*L28")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-065CANCELL-rm', 'SLEEVE-D2 970W*355L KA230/CA125*3/KA230 BC/F 1:4 MODEL 5209720 ทับรอย 50*305 (W40"*L14")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-068-rm', 'SLEEVE-LB 970W*806L KA230/CA185*3/KA230 BC/F 1:2 MODEL 52105345 (W40"*L31" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-070-rm', 'SLEEVE-RB 970W*1469L KA230/CA185*3/KA230 BC/F 1:2 MODEL 52105345 (W40"*L57" 7/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-074-rm', 'EVA (BLACK) SIZE 1100W*1200L*T10 MM. (H/N 60-65)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-075-rm', 'PTT-3A 921W*738L KA185/CA125*3/KA185 BCF 1:9 MODEL 52094720 FAE-015', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-076-rm', 'PTT-3B 285W*1395L KA185/CA125*3/KA185 BCF 1:6 MODEL 52094720 FAE-015', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-077-rm', 'PTT-3C 285W*1395L KA185/CA125*3/KA185 BCF 1:6 MODEL 52094720 FAE-015', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-078-rm', 'PTT-3D 1004W*1395L KA185/CA125*3/KA185 BCF 1:3 MODEL 52094720 FAE-015', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-079-rm', 'PTT-3E 1004W*1395L KA185/CA125*3/KA185 BCF 1:3 MODEL 52094720 FAE-015', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-080-rm', 'PTT-3F 285W*244L KA185/CA125*3/KA185 BCF 1:30 MODEL 52094720 FAE-015', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-081-rm', 'PLATE 583W*470L KA230/CA125/KA230 CF 1:8 COMMON MODEL PIPE 1453135X,1453132X,1837639X (W48"*L18" 9/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-083-rm', 'PLATE L 1025W*1270L KA185/CA125*3/KA185 BCF 1:1 COMMON MODEL PIPE 1453135X,1453132X,1837639X,1587220X,1587163X (W42"*L50")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-084-rm', 'PLATE W 1270W*1025L KA185/CA125*3/KA185 BCF 1:1 COMMON MODEL PIPE 1453135X,1453132X,1837639X,1587220X,1587163X (W52"*L40" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-085-rm', 'PAD 1116W*470L KA230/CA125/KA230 CF 1:9 MODEL PIPE 1587163X (W46"*L18"9/16) ทับรอย 1023*93', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-086-rm', 'PLATE 609W*470L KA230/CA125/KA230 CF 1:7 MODEL PIPE 1587220X (W50"*L18" 9/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-088-rm', 'PTT 737W*470L KA230/CA125/KA230 CF 1:40 PIPE 1837639 FAE-027,026 COMMON (W60"*L18" 9/16 ผ่า2) ทับรอย 75*587*75', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-103-rm', 'SLEEVE-A 728W*1141L KA185/CA125*3/KA185 BCF 1:2 MODEL EB3G 5230 DA,CC,BB (PACK 9) (W58"*L44" 15/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-104-rm', 'SLEEVE-B 728W*1830L KA185/CA125*3/KA185 BCF 1:2 MODEL EB3G 5230 DA,CC,BB (PACK 9) (W58"*L72" 1/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-105-rm', 'WOODEN PALLET 1424W*1759L*120H HEAT TREATMENT MODEL FAURECIA JB3G-5H211-CA', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-108-rm', 'BOTTOM ASSY 1104W*1964L KA230/CA125/KA230 CF 1:1 MODEL PKG REDBACK JB3G5K214K', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-109-rm', 'WOODEN PALLET 1131W*1980L*127H (HEAT TREATMENT) MODEL PKG. REDBACK JB3G5K214K', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-110-rm', 'WOODEN PALLET 1131W*2300L*127H (HEAT TREATMENT) MODEL PKG. REDBACK JB3G5K214H', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-111-rm', 'SLEEVE-B1 730W*2280L KA230/CA185*3/KA230 BCF 1:2 MODEL PKG.REDBACK JB3G5K214H (V.2) (W58"*L89" 13/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-112-rm', 'SLEEVE-B2 730W*1188L KA230/CA185*3/KA230 BCF 1:2 ทับรอย 50*1088*50 MODEL PKG.REDBACK JB3G5K214H (V.2) (W58"*L46" 13/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-113-rm', 'SLEEVE-B1 790W*1960L KA230/CA125*3/KA230 BC 1:2 MODEL PKG. REDBACK JB3G5K214K(PACK18) (W64"*L77" 3/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-114-rm', 'SLEEVE-B2 790W*1178L KA230/CA125*3/KA230 BC 1:2 ทับรอย 45*1088*45 MODEL PKG. REDBACK JB3G5K214K(PACK18) (W64"*L46" 7/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-115-rm', 'WOODEN PALLET 1250W*2246L*124H (HEAT TREATMENT) MODEL SERVICE PART PKG.52083737', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-116-rm', 'WOODEN PALLET 1080W*1125L*91H (HEAT TREATMENT) MODEL:PKG.52083734', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-117-rm', 'WOODEN PALLET 970W*1099L*91H (HEAT TREATMENT) MODEL:DN34', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-118-rm', 'WOODEN PALLET 1080W*1125L*110H (HEAT TREATMENT) MODEL:FORD 5210-3511', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-119-rm', 'WOODEN PALLET 1424W*1759L*111H (HEAT TREATMENT) MODEL:PKG.FOR JB3G-5H211-CA', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-120-rm', 'WOODEN PALLET 950W*1526L*120H (HEAT TREATMENT) MODEL:JB3G-5K214-B,C,JB3G-5230-C,E', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-121-rm', 'WOODEN PALLET 1026W*1143L*111H (HEAT TREATMENT) MODEL:PROTON FRONT', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-122-rm', 'WOODEN PALLET 960W*1113L*120H (HEAT TREATMENT) MODEL:PROTON REAR', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-123-rm', 'PAD 974W*1103L KA230/CA125*3/KA230 BCF 1:3 MODEL:PROTON FRONT', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-124-rm', 'PAD 912W*1073L KA230/CA125*3/KA230 BCF 1:2 MODEL:PROTON REAR (W38"*L42" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-125-rm', 'SLEEVE-LB  970W*1064L KA230/CA185*3/KA230 BCF 1:2 MODEL:GM 52094720 FAE-015 DV', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-126-rm', 'WOODEN PALLET 1485W*2719L*120H  (HEAT TREATMENT) MODEL : MID PIPE,E', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-127-rm', 'WOODEN PALLET 1037W*1127L*120H  (HEAT TREATMENT) MODEL : EXH FLEX,C', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-128-rm', 'WOODEN PALLET 866W*1440L*120H  (HEAT TREATMENT) MODEL : EXH RR,F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFAE-129-rm', 'WOODEN PALLET 1485W*2238L*120H  (HEAT TREATMENT) MODEL : ASM-EXH MID PIPE (10900272) PACK 5', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFB-001-rm', 'FUTURE BOARD 1300W*2450L*3T', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFB-001-1-rm', 'FUTURE BOARD 1300W*2450L*5T BLUE', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFJA-001-rm', 'PTT-A1 172W*1170L KA125/CA125*3/KA125 BCF 1:4 MODEL:PARTITION FOR VOLVO', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFJA-002-1-rm', 'PTT-A2 526W*770L KA125/CA125*3/KA125 BCF 1:1 MODEL:PARTITION FOR VOLVO ***New Design***', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFJA-002CANCEL-rm', 'PTT-A2 526W*770L KA125/CA125*3/KA125 BCF 1:1 MODEL:PARTITION FOR VOLVO', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFJA-003-1-rm', 'PTT-A3 336W*770L KA125/CA125*3/KA125 BCF 1:1 MODEL:PARTITION FOR VOLVO***New Design***', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFJA-003CANCELL-rm', 'PTT-A3 336W*770L KA125/CA125*3/KA125 BCF 1:1 MODEL:PARTITION FOR VOLVO', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFJA-004-1-rm', 'PTT-A4 336W*770L KA125/CA125*3/KA125 BCF 1:1 MODEL:PARTITION FOR VOLVO***New Design***', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFJA-004CANCEL-rm', 'PTT-A4 336W*770L KA125/CA125*3/KA125 BCF 1:1 MODEL:PARTITION FOR VOLVO', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFJA-005-rm', 'PTT-A5 526W*770L KA125/CA125*3/KA125 BCF 1:1 MODEL:PARTITION FOR VOLVO', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFJA-006-rm', 'PTT-A6 1480W*770L KA125/CA125/KA125 CF 1:1 MODEL:PARTITION FOR VOLVO', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFJA-007-1-rm', 'SUPPORT-PTTA2 50W*200L*2T EPE FOAM STICKER 1:4 MODEL:PARTITION FOR VOLVO (MOQ=20,000 Pcs)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFJA-007-2-rm', 'SUPPORT-PTT 50W*200L*1T EPE FOAM STICKER MODEL:PARTITION FOR VOLVO', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFJA-007CANCELL-rm', 'SUPPORT-PTTA2 50W*200L*1.5T EPE FOAM STICKER 1:4 MODEL:PARTITION FOR VOLVO (MOQ=20,000 Pcs)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFJA-009-rm', 'SUPPORT-PTT 130W*150L*2T EPE FOAM STICKER 1:1 MODEL:PARTITION FOR VOLVO', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFJA-009-1-rm', 'SUPPORT-PTT 150W*130L*1T MM. EPE FOAM STICKER 1:1 MODEL:PARTITION FOR VOLVO', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFJA-010-rm', 'SUPPORT-PTT 130W*200L*2T EPE FOAM STICKER 1:4 MODEL:PARTITION FOR VOLVO', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFJA-010-1-rm', 'SUPPORT-PTT 200W*130L*1T MM. EPE FOAM STICKER 1:4 MODEL:PARTITION FOR VOLVO', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFJA-011-rm', 'SUPPORT-PTT 80W*130L*2T EPE FOAM STICKER 1:1 MODEL:PARTITION FOR VOLVO', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFJA-011-1-rm', 'SUPPORT-PTT 80W*130L*1T MM. EPE FOAM STICKER 1:1 MODEL:PARTITION FOR VOLVO', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFTT-001-rm', 'BOTTOM-B1 900W*915L KA185/CA125*3/KA185 BCF 1:1 (W36"L36" 1/16) FTC-B255FS MAIN BODY', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFTT-004-rm', 'PALLET-D5 934W*934L KA230/CA185*3/KA230 BCF 1:1 (W38"L36" 13/16) FTC-B255FS MAIN BODY', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RGLH-001/AMTCANCEL-rm', 'GLUE HOT MELT /กาวแท่งไฟฟ้า Lot No.101', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RGLH-001-1/AMTCANCELL-rm', 'GLUE HOT MELT /กาวแท่งไฟฟ้า Lot No.N5135 (1 BOX=25 KG.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RGLH-001-1CANCELL-rm', 'GLUE HOT MELT /กาวแท่งไฟฟ้า Lot No.N5135 (1 BOX=25 KG.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RGLH-001-2-rm', 'GLUE HOT MELT /กาวแท่งไฟฟ้า Lot No.119T (1 BOX=25 KG.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RGLH-001-2/AMT-rm', 'GLUE HOT MELT /กาวแท่งไฟฟ้า Lot No.119T (1 BOX=25 KG.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RGLH-001-3-rm', 'GLUE HOT MELT SB 7642 แท่งขาว (รหัสเดิม N5142)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RGLH-001CANCEL-rm', 'GLUE HOT MELT /กาวแท่งไฟฟ้า Lot No.101', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RGLH-002/AMTCANCELL-rm', 'GLUE HOT MELT /กาวแท่งไฟฟ้า M-530A (25 Kg./BOX.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RGLH-002CANCELL-rm', 'GLUE HOT MELT /กาวแท่งไฟฟ้า M-530A (25 Kg./BOX.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RGLH-004-rm', 'GLUE HOT MELT WL /กาวแท่งไฟฟ้าWL(1 BOX=25 KG.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RGLL-004-rm', 'GLUE  PANATEX P-3447', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RGLL-004/AMT-rm', 'GLUE  PANATEX P-3447', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RGLL-004-1-rm', 'GLUE  PANATEX P-3458', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RGLL-004-1/AMT-rm', 'GLUE  PANATEX P-3458', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RGLL-004-2-rm', 'GLUE  PANATEX P-3453 (ติด TAG สีฟ้า)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RGLL-005-rm', 'GLUE  PANATEX SV-241', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHAM-001-rm', 'S/B 1081W*1260L  KA230/CA125*3/KA230 BCF MODEL SWA-036  3A0A (W44"*L49" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHDM-001-rm', 'SLEEVE SIZE OD 909W*1027L*750HMM. TRIWALL 80AAA MODEL:ENGINES (PACK1) เย็บแล้ว', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHDM-002-rm', 'WOOD SIZE:75W*15T*676L  (HEATTREATMENT) BOTTOM ASSY-5 MODEL:ENGINES(PACK1)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHDM-003-rm', 'WOOD SIZE:100W*15T*481L  (HEATTREATMENT) BOTTOM ASSY-6 MODEL:ENGINES(PACK1)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHDM-005-rm', 'PALLET SIZE:940W*1060L*120H  (HEATTREATMENT) MODEL:ENGINES (PACK1)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHER-001-rm', 'CORE-A3  ID:45*2T*80L (OD:50) MM.แกนแบบสวมThickness +-0.2mm  2)L+-0.5mm  3)ID+-0.1mm  4)OD+-0.5mm Model:PAPER PIPE 670L', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHER-002-rm', 'CORE-A4  ID:50*3T*670L (OD:56) MM.แกนแบบสวมThickness +-0.2mm  2)L+-0.5mm  3)ID+-0.1mm  4)OD+-0.5mm Model:PAPER PIPE 670L', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHIO-001-rm', 'TOP CAP  1207W*1332L KL250/CA125*3/KL250 BCF 1:1   MODEL PH9-CTN-HR014-1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHIO-002-rm', 'BOTTOM CAP  1207W*1332L KL250/CA125*3/KL250 BCF 1:1   MODEL PH9-CTN-HR014-1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHIO-003-rm', 'SLEEVE ID 946Wx1076Lx930H  BI-WALL 40AA 1:1   MODEL PH9-CTN-HR014-1 (เย็บเป็น Set แล้ว)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHIT-001-1-rm', 'CAP 1270W*1264L KA185/CA125*3/KA185 BC/F 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHIT-001-1/ES1-rm', 'CAP 1270W*1264L KA185/CA125*3/KA185 BC/F 1:2 (ใช้กระดาษศานติ)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHIT-001-1/ES2-rm', 'CAP 1270W*1264L KA185/CA125*3/KA185 BC/F 1:2 (ใช้กระดาษศานติ)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHIT-001CANCELL-rm', 'CAP 1334W*1328 KA185/CA125*3/KA185 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHIT-001-LAMINATE 15P-rm', 'SHOFT SHEET  LAMINATE-15P SIZE 1105W*630L*100T (15P) KA125/CA125*3/KA125 BC/F 1:9  ควบคุมความหนาที่ 100T(+/- 3 mm.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHIT-002-rm', 'TOP PLATE 1080W*1080L KA185/CA125*3/KA185 BC/F (W44"*L42" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHIT-002-1-rm', 'TOP PLATE 1080W*1080L KA185/CS110*3/KA185 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHIT-003 C01-1-rm', 'BEAM 568W*1130L KA150/CA125/KA150 B/F ทับรอย 126*98*126*95*123  (W46"*L44" 1/2 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHIT-003 C01CANCELL-rm', 'BEAM 568W*1130L KA185/CA125/KA185 B/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOD-001/1 CANCEL-rm', 'BOX 562W*1248L KL205/CA125*3/KL205 BC/F (M.UNS005)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOD-001/2 CANCEL-rm', 'BOX 562W*1248L KL205/CA125*3/KL205 BC/F (M.UNS005) CHANGE UN CODE', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOD-001/3CANCELL-rm', 'BOX 562W*1248L KL205/CA125*3/KL205 BC/F (M.UNS005) CHANGE UN  4G/Y20.1/S/19', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOD-001/4CANCELL-rm', 'BOX 562W*1248L KL205/CA125*3/KL205 BC/F (M.UNS005) CHANGE UN  4G/Y20/S/20', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOD-001/5-rm', 'BOX 562W*1248L KL205/CA125*3/KL205 BC/F (M.UNS005) CHANGE UN  4G/Y20/S/21', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOD-002/2-rm', 'PAD-A 340W*235L KL205/CA125*3/KL205 BC/F 1:3 (M.UNS005)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOD-003/2-rm', 'PAD-B 340W*235L KL205/CA125*3/KL205 BC/F 1:3 (M.UNS005)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOD-004-rm', 'EVA FOAM 50W*50L*20T MM H/N40-45 1:4 (M.UNS005)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOD-019/1CANCELL-rm', 'BOX  647W*1105L KL205/CA125/KL205 BC/F 1:2 (UNS007) Fef.BS-UNS007/1  UN 4G/Z6.6/S/19 (10 ชิ้น / 1 มัด) Sheet Board NK', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOD-019/2CANCELL-rm', 'BOX  647W*1105L KL205/CA125/KL205 BC/F 1:2 (UNS007) Fef.BS-UNS007/1  UN 4G/Z6.5/S/20 (10 ชิ้น / 1 มัด) Sheet Board NK', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOD-019/3-rm', 'BOX  647W*1105L KL205/CA125/KL205 BC/F 1:2 (UNS007) Fef.BS-UNS007/1  UN 4G/Z6.5/S/21 (10 ชิ้น / 1 มัด) Sheet Board NK', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOD-019/3-H-rm', 'BOX  647W*1105L KL205/CA125/KL205 BC/F 1:2 (UNS007) Fef.BS-UNS007/1  UN 4G/Z6.5/S/21 (10 ชิ้น / 1 มัด) Sheet Board NK', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOD-019CANCELLED-rm', 'BOX  647W*1105L KL205/CA125/KL205 BC/F 1:2 (UNS007) Fef.BS-UNS007/1 (10 ชิ้น / 1 มัด) Sheet Board NK', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOD-024/2-rm', 'BOX 892W*1615L KL205/CA125*3/KL205 BC/F 1:2 (M.UNS008)  UN CODE 4G/Z9.1/S/21', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOD-033/1CANCELL-rm', 'BOX 745W*2158L KL205/CA125/KL205 CF 1:2  UN CODE 4G/Z8.0/S/19  Ref.BS-UNS010 มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOD-033/2CANCELL-rm', 'BOX 745W*2158L KL205/CA125/KL205 CF 1:2  UN CODE 4G/Z7.8/S/20  Ref.BS-UNS010 มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOD-033/3-rm', 'BOX 745W*2158L KL205/CA125/KL205 CF 1:2  UN CODE 4G/Z7.8/S/21  Ref.BS-UNS010 มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOD-033/3-H-rm', 'BOX 745W*2158L KL205/CA125/KL205 CF 1:2  UN CODE 4G/Z7.8/S/21  Ref.BS-UNS010 มัดละ 10 ชิ้น SB NK KPC HELP', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOD-033CANCELLED-rm', 'BOX 745W*2158L KL205/CA125/KL205 CF 1:2  UN CODE 4G/Z7.8/S/18  Ref.BS-UNS010 มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOD-034-rm', 'PARTITION-A 644W*1470L KL205/CA125/KL205 C/F 1:1 (M.UNS010)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOD-STICKER/01-rm', 'STICKER PVC Size 100mm*100mm .(CLASS 9)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOD-STICKER/02-rm', 'STICKER PVC Size 100mm*100mm .(CLASS 8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOD-STICKER/03-rm', 'STICKER PVC Size 70mm*70mm .(CLASS 9)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOD-STICKER/04-rm', 'STICKER PVC Size 50mm*50mm .(CLASS 9)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOW-001-rm', 'TOP CAP 1695W*2270L KA230/3M/KA230 BC/F 1:1 (COMMON)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOW-002-rm', 'SUPPORT SPONGE 200W*50T*436L (MODEL NR-IPO & SR-IPO)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOW-003-rm', 'BOTTOM PTT-C SPONGE 200W*25T*1306L (COMMON)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOW-005-rm', 'SUPPORT SIDE SPONGE 150W*25T*910L (MODEL COMMON )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOW-006-rm', 'BOX ASSY-A 1122W*1950L KA230/3M/KA230 BC/F 1:2 (MODEL NR-IPO & SR-IPO)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOW-007-rm', 'BOX ASSY-B 1122W*1370L KA230/3M/KA230 BC/F 1:2 (MODEL NR-IPO & SR-IPO)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOW-008-rm', 'PTT GUIDE 436W*135L KA230/3M/KA230 BC/F 1:10', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOW-009-rm', 'PLATE 1306W*1900L KA230/3M/KA230 BC/F 1:1 (COMMON) (W52"*L74" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOW-010-rm', 'BOTTOM PTT-B 160W*1306L KA230/3M/KA230 BC/F 1:5', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOW-011-rm', 'BOTTOM PTT-C  SPONGE 200W*25T*1220L 1:1 (MODEL NR-IPO & SR-IPO)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOW-015-rm', 'SUPPORT-D SPONGE 200W*50T*310L 1:10 (MODEL SR-NR SERVICE PART HEADING)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOW-016-rm', 'SUPPORT-E SPONGE 200W*25T*310L 1:2 (MODEL SR-NR SERVICE PART HEADING)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOW-019-rm', 'BOTTOM PTT-D SPONGE 200W*25T*1175L 1:3 (MODEL SR-NR SERVICE PART HEADING)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOW-021-rm', 'SEALING SPONGEADHESIVE/ กาวตราหมาแดง 3.3 Lite', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOW-021-1-rm', 'SEALING SPONGEADHESIVE M-176/ กาวน้ำ M-176', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOW-023-1-rm', ' SPONGE 200W*50T*400L (MODEL L12F)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOW-024-rm', 'BOX ASSY-A 1092W*1950L KA230/3M/KA230 BC/F 1:2 (MODEL L12F)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOW-025-rm', 'BOX ASSY-B 1092W*1370L KA230/3M/KA230 BC/F 1:2 (MODEL L12F)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOW-026-1-rm', 'PTT GUIDE 400W*135L KA230/3M/KA230 BC/F 1:10', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOW-032-rm', ' SPONGE 150W*25T*1000L (MODEL SR-KD, NR-KD) 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOW-038-rm', ' SUPPORT-J SPONGE 150W*50T*150L (MODEL TRIM L42L-SR-IPO) 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOW-039-rm', ' SUPPORT-K SPONGE 150W*50T*200L (MODEL TRIM L42L-SR-IPO) 1:4', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHOW-042-rm', 'SUPPORT SPONGE 200W*50T*300L (MODEL L42P SR IPO PACK 1:7', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHSB-001/1-rm', ' BOX RSC SIZE 509W x 1015L KL205/CA125*3/KL205  BC/F  4G/Y16.7/S/16', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHSB-001-2-rm', ' BOX RSC SIZE 509W x 1015L KL205/CA125*3/KL205  BC/F  4G/Y16.8/S/17 (NEW PRINT UN CODE)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHSB-001-3CANCELL-rm', 'BOX RSC SIZE 509W x 1015L KL205/CA125*3/KL205  BC/F  4G/Y17.2/S/19 (NEW PRINT UN CODE)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHSB-001-4CANCELL-rm', 'BOX RSC SIZE 509W x 1015L KL205/CA125*3/KL205  BC/F  4G/Y17.2/S/20 (NEW PRINT UN CODE)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHSB-001-5-rm', 'BOX RSC SIZE 513W x 1014L KL205/CA125*3/KL205  BC/F  4G/Y17.2/S/20 (NEW PRINT UN CODE)***เปลี่ยน Size กล่องให้ตรง Drawing***', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHSB-002-rm', 'PAD ASSY - A 267W*200L  KL205/KL205 C', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHSB-003-rm', 'EVA  BLACK 5B Size 45Wx45LxT30mm.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHSB-004-rm', 'EVA  BLACK 5C Size 45Wx45LxT30mm.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHSB-005/1CANCELL-rm', 'BOX 518W*1185L KL205/CA125*3/KL205 BC/F 1:1 (NEW UN CODE)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHSB-005-3-rm', 'BOX 518W*1185L KL205/CA125*3/KL205 BC/F 1:1  4G/Y20.6/S/20 (NEW PRINT UN CODE)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHSB-007-rm', 'PTT-B EVA T=30 75W*75L*30T 1:8', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHSB-008-rm', 'PTT-C EVA T=30 75W*75L*30T 1:8', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHYS-002-rm', 'TOP CAP 1154W*1336L KA125/CS110*3/KA125 BCF 1:1 CURTAIN SUB ASSY''Y 011', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHYS-003-1CANCELLED-rm', 'INNER BOX 860W*1468L KA230/CA125/KA230 CF  1:2  เย็บเป็นกล่องแล้ว CURTAIN SUB ASSY''Y 011', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHYS-003-2-rm', 'INNER BOX 860W*1468L KA230/CA125/KA230 CF  1:2  กาวเป็นกล่องแล้ว CURTAIN SUB ASSY''Y 011 TO 0104 CHANGE DESIGN มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHYS-003CANCELLED-rm', 'INNER BOX 860W*1468L KA230/CA125/KA230 CF  1:2  เย็บเป็นกล่องแล้ว CURTAIN SUB ASSY''Y 011', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHYS-004-rm', 'PTT 441W*538L KA185/CA125*3/KA185 BCF 1:4 CURTAIN SUB ASSY''Y 011 มัดละ 20 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHYS-005-rm', 'BOTTOM CAP 1154W*1336L KA125/CS110*3/KA125 BCF 1:1 CURTAIN SUB ASSY''Y 011', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHYS-006-rm', 'TOP-W 960W*1130L KA185/CA125*3/KA185 BCF 1:1 CURTAIN SUB ASSY''Y 011 (W40"*L44" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHYS-007-rm', 'TOP-L 1130W*960L KA185/CA125*3/KA185 BCF 1:1 CURTAIN SUB ASSY''Y 011 (W46"*L37" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RHYS-008-rm', 'WOODEN PALLET 861W*1100L*120H (HEAT TREATMENT) MODEL PKG.SUNSHADE ASSY RR SIDE RH,LH)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJCH-001-rm', 'PTT-B1 114W*490L KA185/CA125/KA185 CF  MODEL 119 COMMON BOX 933, 764 มัดละ 50 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJCH-002-rm', 'PTT-B2 114W*440L KA185/CA125/KA185 CF  MODEL 119 COMMON BOX 933, 764 มัดละ 50 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJCH-003-rm', 'PAD 440W*490L KA185/CA125/KA185 CF 1:3 Common (W36"*L19" 5/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJCH-003-1-rm', 'PAD 440W*982L KA185/CA125/KA185 CF 1:2 Common (W36"*L38" 11/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJCH-004-rm', 'PTT-B1 230W*490L KA185/CA125/KA185 CF  MODEL 118 COMMON BOX 771, 772, 773, 774, 342, 757, 759, 762, 765, 767 มัดละ 50 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJCH-004 HELP-rm', 'PTT-B1 SIZE SHOT 690W*490L KA185/CA125/KA185 CF  MODEL 118 COMMON BOX 771, 772, 773, 774, 342, 757, 759, 762, 765, 767 มัดละ 50 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJCH-005-rm', 'PTT-B2 230W*440L KA185/CA125/KA185 CF  MODEL 118 COMMON BOX 771, 772, 773, 774, 342, 757, 759, 762, 765, 767 มัดละ 50 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJCH-006-1-rm', 'PTT-B1 150W*490L KA185/CA125/KA185 CF  MODEL 120 COMMON :BOX 934, 638B,C,D ,758,760,761,763A มัดละ 50 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJCH-006CANCELL-rm', 'PTT-B1 150W*490L KA185/CA125/KA185 CF  MODEL 120 COMMON :BOX 934, 638B,C,D ,758,760,761,763A มัดละ 50 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJCH-007-rm', 'PTT-B2 150W*440L KA185/CA125/KA185 CF   MODEL 120 COMMON :BOX 934, 638B,C,D ,758,760,761,763A มัดละ 50 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJCH-008-rm', 'CARTON BOX 696W*1924L BOX MODEL 118, 119  KA185/CA125/KA185 CF มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJCH-009-rm', 'CARTON BOX  713W*1924L BOX MODEL 120-2  KA185/CA125/KA185 CF มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJCH-010-rm', 'CARTON BOX 616W*1924L BOX MODEL 120  KA185/CA125/KA185 CF มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJCH-011-rm', 'PTT-B1 246W*490L KA185/CA125/KA185 CF  MODEL 120-2 COMMON มัดละ 25 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJCH-012-rm', 'PTT-B2 246W*440L KA185/CA125/KA185 CF  MODEL 120-2 COMMON มัดละ 50 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTB-001-rm', 'PLATE AS-1-2   1108W*1095L KA185/CA125*3/KA185 BCF 1:8 (SCREEN BLACK H61&H60)  MODEL H60A, LPC, H62BE, H61P', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTB-001-H-rm', 'PLATE AS-1-2   1108W*1095L KA185/CA125*3/KA185 BCF 1:8 (SCREEN BLACK H61&H60)  MODEL H60A, LPC, H62BE, H61P', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTB-002-rm', 'WOODEN PALLET 791W*1080L*120H (HEAT TREATMENT)  FOR MODEL SERVICE PART EXPORT', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTB-003-rm', 'PLATE AS-1-1   1108W*1095L KA185/CA125*3/KA185 BCF 1:8 (SCREEN BLACK H61&H60 (L.1) )  MODEL H60A, LPC, H62BE, H61P', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTB-003-H-rm', 'PLATE AS-1-1   1108W*1095L KA185/CA125*3/KA185 BCF 1:8 (SCREEN BLACK H61&H60 (L.1) )  MODEL H60A, LPC, H62BE, H61P', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTB-004-rm', 'PLATE AS-3   170W*1095L KA185/CA125*3/KA185 BCF 1:80  MODEL H60A, LPC, H62BE, H61P', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTB-005-rm', 'PLATE AS-4   453W*1095L KA185/CA125*3/KA185 BCF 1:8  MODEL H60A, LPC, H62BE, H61P', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTB-006-rm', 'PLATE AS-5   97W*130L KA185/CA125*3/KA185 BCF 1:192  MODEL H60A, LPC, H62BE, H61P', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTB-007-rm', 'PLATE AS-6   100W*414L KA185/CA125*3/KA185 BCF 1:80  MODEL H60A, LPC, H62BE, H61P', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTB-008-rm', 'TOP PLATE   1108W*1095L KA185/CA125*3/KA185 BCF 1:1 (SCREEN BLACK L02D)  MODEL L02D,747D', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTB-008-H-rm', 'TOP PLATE   1108W*1095L KA185/CA125*3/KA185 BCF 1:1 (SCREEN BLACK L02D)  MODEL L02D,747D', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTB-009-rm', 'BOX SIZE 354W*855L KA185/CA125/KA185 C/F JOINT GLUE 2 JOINT SCREEN DARK BLUE AND RED DRAWING:TD-JTB-2202011-00-01 มัดละ 20 ชิ้น หัว-ท้ายรองกระดาษ', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTB-010-rm', 'BOX SIZE 287W*643L KA230/CA125/KA230 C/F JOINT GLUE  SCREEN DARK BLUE AND RED DRAWING:TD-JTB-2202009-00-02 มัดละ 20 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTB-011-rm', 'BOX SIZE 306W*784L KA125/CA125/KA125 C/F JOINT GLUE  SCREEN DARK BLUE AND RED DRAWING:TD-JTB-2202007-00-01 มัดละ 20 ชิ้นตรงกลางเส้นเดียวไม่รองกระดาษ', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTB-012-rm', 'BOX SIZE 354W*1091L KA185/CA125/KA185 C/F JOINT GLUE 2 JOINT  SCREEN DARK BLUE AND RED DRAWING:TD-JTB-2202010-00-01 มัด 20 ชิ้น หัว-ท้ายรองกระดาษ', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTG-001-rm', 'WOODEN PALLET 791W*1080L*125H (HEAT TREATMENT)  FOR MODEL SERVICE PART EXPORT', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-018-rm', 'TOP CAP 1289W*1161L  KA185/CA125*3/KA185 BC/F 1:1 (M&M)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-019-rm', 'BOTTOM PLATE 908W*1031L  KA185/CA125*3/KA185 BC/F 1:1 (M&M)(W38"*L40" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-020-rm', 'SLEEVE SIZE 892W*1975L KA185/CA125*3/KA185 BCF 1:1 ทับรอย 55*894*1026 (M&M) (W36"x L77" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-021-rm', 'BOTTOM CAP 1289W*1161L  KA185/CA125*3/KA185 BC/F 1:1 (M&M)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-022-1-rm', 'T/B CAP 1307W*1266L  KA230/CA185*3/KA230 BC/F 1:2 (D41N+D54T) มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-023-rm', 'T/B BOARD 1040W*1075L  KA230/CA185*3/KA230 BC/F 1:2 (D41N+D54T) (W42"*L42" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-023-1-rm', 'T/B BOARD 1040W*1075L  KA230/CA125*3/KA230 BC/F 1:2 (D41N+D54T) (W42"*L42" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-024-rm', 'SLEEVE A1  854W*1132L  KA230/CA125*3/KA230 BC/F 1:2 (D41N+D54T)   (W68"*L44" 5/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-025-rm', 'SLEEVE A2  854W*1012L  KA230/CA125*3/KA230 BC/F 1:2 (D41N+D54T) (W68"*L39" 7/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-026-rm', 'SLEEVE A3  854W*1076L  KA230/CA125*3/KA230 BC/F 1:2 (D41N+D54T) (W68"*L42" 3/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-027-rm', 'SLEEVE A4  854W*962L  KA230/CA125*3/KA230 BC/F 1:2 (D41N+D54T) (W68"*L37" 7/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-033-rm', 'BOX 340W*1576L KA230/CA125/KA230 CF 1:50  MODEL : PINION VALVE มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-036-rm', 'WOODEN PALLET 759W*826L*150H MODEL RACK SHAFT ( FUMIGATION)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-036-1-rm', 'WOODEN PALLET 759W*826L*130H MODEL RACK SHAFT 60 PC.PAPER ( FUMIGATION)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-038-rm', 'PTT 559W*543L KA230/CA125/KA230 CF  1:100  MODEL PINION VALVE', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-046 CANCEL-rm', 'PTT-3B 111W*272L KA185/CA125*3/KA185 BCF 1:120 MODEL : (SS)&SLEEVE YOKE (N6)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-046/1-rm', 'PTT-3B 111W*272L KA185/CA125*3/KA185 BCF 1:120 MODEL : (SS)&SLEEVE YOKE (N6) เพิ่มปุ๊', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-047 CANCEL-rm', 'PTT-3C 297W*364L KA185/CA125*3/KA185 BCF 1:60 MODEL : (SS)&SLEEVE YOKE (N6)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-047/1-rm', 'PTT-3C 297W*364L KA185/CA125*3/KA185 BCF 1:60 MODEL : (SS)&SLEEVE YOKE (N6) เพิ่มปุ๊', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-048 CANCEL-rm', 'PTT-3D 297W*364L KA185/CA125*3/KA185 BCF 1:120 MODEL : (SS)&SLEEVE YOKE (N6)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-048/1-rm', 'PTT-3D 297W*364L KA185/CA125*3/KA185 BCF 1:120 MODEL : (SS)&SLEEVE YOKE (N6) เพิ่มปุ๊', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-059-rm', 'PTT ASSY-A 326W*780L KA230/CA125/KA230 CF 1:30 M.RACK SHAFT 60 PC PAPER', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-060-rm', 'PTT ASSY-B 77W*715L KA230/CA185*3/KA230 BC 1:54 M.RACK SHAFT 60 PC PAPER', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-070-rm', 'PTT-3A  440W*481L  KA185/CA125*3/KA185  BCF 1:12  MODEL SUZUKI YLA (PACK 24)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-071-rm', 'PTT-3B  440W*1091L  KA185/CA125*3/KA185  BCF 1:3  MODEL SUZUKI YLA (PACK 24)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-072-rm', 'PTT-3C  440W*1091L  KA185/CA125*3/KA185  BCF 1:6  MODEL SUZUKI YLA (PACK 24)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-073-rm', 'PTT-3D  440W*368L  KA185/CA125*3/KA185  BCF 1:24  MODEL SUZUKI YLA (PACK 24)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-074-rm', 'PTT-3E  1091W*110L  KA185/CA125*3/KA185  BCF 1:6  MODEL SUZUKI YLA (PACK 24)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-075-rm', 'BOTTOM CAP  1329W*1345L  KA230/CA125*3/KA230  BCF 1:1  MODEL SUZUKI YLA (PACK 24)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-077-rm', 'SLEEVE-A  645W*1211L  KA185/CA125*3/KA185  BCF 1:2 MODEL SUZUKI YLA (PACK 24)   (W52"*L47"11/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-078-rm', 'SLEEVE-B  645W*1091L  KA185/CA125*3/KA185  BCF 1:2 MODEL SUZUKI YLA (PACK 24) (W52"*L43" ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-079-rm', 'SLEEVE-C  645W*1098L  KA185/CA125*3/KA185  BCF 1:2 MODEL SUZUKI YLA (PACK 24) (W52"*L43" 1/4 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-080-rm', 'SLEEVE-D  645W*984L  KA185/CA125*3/KA185  BCF 1:2 MODEL SUZUKI YLA (PACK 24) (W52"*L38" 3/4 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-081-rm', 'TOP CAP  1A  1329W*1345L KA230/CA125*3/KA230 BCF 1:1 MODEL SUZUKI YLA (PACK 24)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-082-rm', 'TOP PAD  1B  1119W*1098L KA230/CA125*3/KA230 BCF 1:1 MODEL SUZUKI YLA (PACK 24) (W46"*L43" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-093-rm', ' TOP PLATE size 1044W*1110L KA230/CA185*3/KA230 BC  W42"xL43" 3/4 1:1  PKG M.104D JAMY', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-093-1-rm', 'SLEEVE-A  953W*1048L KA185/CA125*3/KA185 BCF 1:2 YL1 (W38"L41" 5/16 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-093CANCELLED-rm', 'SLEEVE-A  464W*1048L KA185/CA125*3/KA185 BCF YL1 (W38"L41" 5/16 ผ่า 2 ) ทับรอย 55*938*55', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-094-rm', 'SLEEVE-B  464W*928L KA185/CA125*3/KA185 BCF YL1 (W38"L36" 9/16 ผ่า 2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-095-rm', 'SLEEVE-C  464W*1098L KA185/CA125*3/KA185 BCF YL1 (W38"L43" 1/4 ผ่า 2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-096-rm', 'SLEEVE-D  464W*984L KA185/CA125*3/KA185 BCF YL1 (W38"L38" 3/4 ผ่า 2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-097-rm', 'PLATE 956W*1100L KA230/CA125*3/KA230  BCF YL1 (W38"L43" 5/16 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-098-rm', 'PTT-3A 584W*1042L KA230/CA125*3/KA230  BCF MODEL:JTK-031', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-099-rm', 'PTT-3B 428W*1006L KA230/CA125*3/KA230  BCF MODEL:JTK-031 มัดละ 25 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-100-rm', 'CARTON BOX 414W*1107L BOX PUMP M&M  KA125/CA125*3/KA125  BC/F 1:1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-101-rm', 'SLEEVE SIZE 530W*1975L KA185/CA125*3/KA185 BCF 1:2 ทับรอย 55*894*1026 (SLEEVE PINION) (W42"x L77" 13/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-102-rm', 'S/B SIZE  1070W*1120L  CA125/CA125/CA125 C/F 1:1 (JTK-035) (W44"*L44" 1/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-103-rm', 'SLEEVE-2B 792W*1012L  KA230/CA125*3/KA230 BC/F 1:2 M.20M HONDA (W64"*L39"  7/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-104-rm', 'SLEEVE-2C 792W*1076L  KA230/CA125*3/KA230 BC/F 1:2 M.20M HONDA  SCREEN COLOR BLACK', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-105-rm', 'SLEEVE-2D 792W*962L  KA230/CA125*3/KA230 BC/F 1:2 M.20M HONDA (W64"*L37"  7/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-106-rm', 'BOX 448W*1738L KA150/CA125*3/KA150 BCF MODEL BOX LINK ASSY POWER STEERING เฉดสี (Blue =MF 2795) (Red=WF 12021  221)  มัดละ 5 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-106-H-rm', 'BOX 448W*1738L KA150/CA125*3/KA150 BCF MODEL BOX LINK ASSY POWER STEERING เฉดสี (Blue =MF 2795) (Red=WF 12021  221)  มัดละ 5 ชิ้น (NK Support Sheet Board)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-107-1-rm', 'BOX 399W*1329L OD: 280W*372L*123H MM. KA185/CA125/KA185 CF Common model N6, GJ, DLC มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-107CANCELLED-rm', 'BOX 399W*1329L OD: 280W*372L*123H MM. KA230/CA125/KA230 CF Common model N6, GJ, DLC มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-108-rm', 'PALLET 1211W*1464L*120H FUMIGATION MODEL PKG.FOR BOX LINK ASSY POWER STRG. (IDEA-1)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-109-H-rm', 'PTT-3A 428W*1042L  KA230/CA125*3/KA230 BCF 1:2 MODEL JTK-032(230B VIOS) JTK-1704004-00-03 HELP', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-110-H-rm', 'PTT-3B 428W*1006L  KA230/CA125*3/KA230 BCF 1:2 MODEL JTK-032(230B VIOS) JTK-1704004-00-03 HELP', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-111-rm', 'PAD 1006W*1042L  KA150/CA125/KA150 CF 1:4 M.D92A (PACK 32) (W42"x L41" 1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-112-rm', ' TOP PLATE size 1044W*1110L KA230/CA125*3/KA230 BC  W42"xL43" 3/4 1:1  PKG M.104D JAMY', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RJTK-113-rm', 'TOP PAD 994Wx942L BI-WALL 800 MODEL RACK SHAFT', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKAF-005-rm', 'AP500  W=33"', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKAF-011-rm', 'KB450  W=31.96" (812mm.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKAF-012-rm', 'KB450  W=34.30" (873mm.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKAF-019-rm', 'CB 500  W=33"  (SAMPLE TEST)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKAF-020-rm', 'CB450  W=33"', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKAF-021-rm', 'GB500  W=33"', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKAF-022-rm', 'CB450  895MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKBN-002-rm', 'DECK BOARD 1040W*1040L KA185/CA125*3/KA185 BC/F  1:1 (W42"*L41")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKEL-001-rm', 'TOP/BOTTOM CAP 1246W*1442L KI125/CA125*3/KI125 BC/F 1:2 มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKEL-002-rm', 'SLEEVE-L 1035W*1280L KI125/CA125*3/KI125 BC/F 1:2 ทับรอย 42*1196*42', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKEL-003-rm', 'SLEEVE-W 1035W*1013L KI125/CA125*3/KI125 BC/F 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKEL-004-1-rm', 'BEAM 1067W*1022L KI185/CA125*3/KI185 BC/F 1:2 มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKEL-005-rm', 'SLEEVE 1035W*2268L KI125/CA125*3/KI125 BC/F 1:2 ไม่ต้องมัดวางสลับ มือละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-061-rm', 'PAD ASSY-01 1200W*1200L  KA185/CA125*3/KA185 BCF 1:3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-062-rm', 'WOODEN PALLET SIZE 970W*1130L*135H (FUMIGATION) MODEL  M07', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-064-rm', 'TOP CAP 1180W*1346L KA230/CA185*3/KA230 BCF 1:1 MODEL  M07', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-065-rm', 'SLEEVE ASSY-A 563W*2071L 2:1  KA230/CA185*3/KA230 BCF  MODEL  M07', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-066-rm', 'PTT-3A 179W*1072L KA230/CA125*3/KA230 BCF 1:12 MODEL  M07', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-067-rm', 'PTT-3C 179W*1072L KA230/CA125*3/KA230 BCF 1:24 MODEL  M07', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-068-rm', 'PAD 903W*1072L KA230/CA125*3/KA230 BCF 1:3 MODEL  M07', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-069-rm', 'BOTTOM CAP 1180W*1346L KA230/CA185*3/KA230 BCF 1:1 MODEL  M07', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-070-rm', 'SLEEVE ASSY -B 563W*1943L  KA230/CA185*3/KA230 BCF 1:2 MODEL  M07 (W46"*L76" 1/2 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-071-rm', 'TOP CAP 1310W*1316L  KA230/CA185*3/KA230 BCF  MODEL:M08  SCREEN COLOR BLACK', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-072-rm', 'PTT-3A 450W*1036L  KA230/CA125/KA230 CF  MODEL:M08', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-073-rm', 'PTT-3B 442W*1023L  KA230/CA125/KA230 CF  MODEL:M08', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-074-rm', 'SLEEVE ASSY -A (2A) 423W*2171L  KA230/CA185*3/KA230 BCF  MODEL:M08  SCREEN COLOR BLACK', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-075-rm', 'SLEEVE ASSY -B (2B) 423W*2043L  KA230/CA185*3/KA230 BCF (W52"L80"7/16) ผ่า 3) MODEL:M08', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-076-rm', 'BOTTOM CAP 1310W*1316L  KA230/CA185*3/KA230 BCF  MODEL:M08  SCREEN COLOR BLACK', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-077-rm', 'WOODEN PALLET SIZE 1100W*1100L*135H (HEAT TREATMENT) MODEL M08 Stamp 08 Red Color.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-077-1-rm', 'WOODEN PALLET SIZE 1100W*1100L*135H (HEAT TREATMENT) MODEL M08 Stamp 08 Red Color. (เพิ่มไม้แผ่นบน 1 แผ่น จาก 6 เป็น 7)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-078-rm', 'TOP CAP 1310W*1316L KA230/CA185*3/KA230 BC/F MODEL M13', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-079-rm', 'SLEEVE ASSY-A 581W*2171L KA230/CA185*3/KA230 BC/F MODEL M13 SCREEN COLOR BLACK', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-080-rm', 'SLEEVE ASSY-B 581W*2043L KA230/CA185*3/KA230 BC/F MODEL M13 ทับรอย 1039*1004', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-080-1-rm', 'SLEEVE ASSY-B 581W*2043L KA230/CA185*3/KA230 BC/F MODEL M13', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-081-rm', 'PTT-3A 447W*1036L KA230/CA125/KA230 C/F MODEL M13', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-082-rm', 'PTT-3B 439W*1023L KA230/CA125/KA230 C/F MODEL M13', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-083-rm', 'BOTTOM CAP 1310W*1316L KA230/CA185*3/KA230 BC/F MODEL M13', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-084-rm', 'WOODEN PALLET SIZE 1100W*1100L*135H (HEAT TREATMENT) MODEL M13 Stamp 13', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-085-rm', 'TOP CAP 1180W*1346L KA230/CA185*3/KA230 BC/F MODEL M09 SCREEN COLOR BLACK', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-086-rm', 'SLEEVE ASSY-A 563W*2071L KA230/CA185*3/KA230 BC/F MODEL M09 SCREEN COLOR BLACK', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-087-rm', 'SLEEVE ASSY-A 563W*1943L KA230/CA185*3/KA230 BC/F MODEL M09 ทับรอย 909*1034', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-088-rm', 'PTT-3A 500W*1066L KA230/CA125/KA230 C/F MODEL M09, M12', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-089-rm', 'PTT-3B 492W*895L KA230/CA125/KA230 C/F MODEL M09,M12', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-090-rm', 'BOTTOM CAP 1180W*1346L KA230/CA185*3/KA230 BC/F MODEL M09 SCREEN COLOR BLACK', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-091 cancel-rm', 'WOODEN PALLET SIZE 970W*1130L*135H (FUMIGATION) MODEL M09 Stamp 09', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-091-1-rm', 'WOODEN PALLET SIZE 970W*1130L*135H (FUMIGATION) MODEL M09 Stamp 09 (New Design เปลี่ยนจาก4คานเป็น 3 คาน)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-092-rm', 'TOP CAP 1180W*1346L KA230/CA185*3/KA230 BC/F MODEL M012 SCREEN COLOR BLACK มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-093-rm', 'SLEEVE ASSY-A 485W*2071L KA230/CA185*3/KA230 BC/F MODEL M012 SCREEN COLOR BLACK', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-094-rm', 'SLEEVE ASSY-B 485W*1943L KA230/CA185*3/KA230 BC/F MODEL M012', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-095-rm', 'BOTTOM CAP 1180W*1346L KA230/CA185*3/KA230 BC/F MODEL M012 SCREEN COLOR BLACK มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-096 cancel-rm', 'WOODEN PALLET SIZE 970W*1130L*135H (FUMIGATION) MODEL M12 Stamp 12', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-096-1-rm', 'WOODEN PALLET SIZE 970W*1130L*135H (FUMIGATION) MODEL M12 Stamp 12 (New Design เปลี่ยนจาก4 คานเป็น 3 คาน)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-097-rm', 'WOODEN PALLET SIZE 940W*940L*135H (FUMIGATION) MODEL M11 Stamp 11 SCREEN BLACK COLOR', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-097/1-rm', 'WOODEN PALLET SIZE 940W*940L*135H (FUMIGATION) เปลี่ยนระยะ DEVELOP MODEL M11', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-098-rm', 'TOP PAD 1060W*1110L KA230/CA125/KA230 C/F MODEL 43206EB70B (W44"L43" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-098-1-rm', 'TOP PAD 1060W*1110L KI125/CA125/KI125 C/F MODEL 43206EB70B (W44"L43" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-099-rm', 'WOODEN PALLET SIZE 1100W*1100L*135H (HEAT TREATMENT) MODEL SERVICE PART INDIA (NO STAMP)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-100-rm', 'PAD 1100W*1100L KA185/CA125/KA185 CF 1:1 MODEL SERVICE PART INDIA (W44"*L43" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-101-rm', 'PTT-A 590W*1072L KA230/CA125*3/KA230 BCF 1:3 MODEL  M07 FOR INDIA (NEW PARTITION) มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-102-rm', 'PTT-B 508W*1072L KA230/CA125*3/KA230 BCF 1:6 MODEL  M07 FOR INDIA (NEW PARTITION) มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-106-rm', 'WOODEN PALLET SIZE 1110W*1125L*135H (HEAT TREATMENT) MODEL SERVICE PART INDIA (BOX)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-107-rm', 'WOODEN PALLET SIZE 880W*958L*135H (HEAT TREATMENT) MODEL DV.05J', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-108-rm', 'PTT-A 539W*1109L KA230/CA125/KA230 CF MODEL PARTITION FOR PACKING PART NO.43206EB70B)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-108-HELP-rm', 'PTT-A 539W*1109L KA230/CA125/KA230 CF MODEL PARTITION FOR PACKING PART NO.43206EB70B)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-109-rm', 'PTT-B  94W*1111L KA230/CA125/KA230 CF MODEL PARTITION FOR PACKING PART NO.43206EB70B)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-110-rm', 'SIDE PAD-A 490W*1060L  KA185/CA125/KA185 CF 1:2 MODEL :PKG H60A LCP DISC FRONT', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-111-rm', 'SIDE PAD-B 490W*1005L  KA185/CA125/KA185 CF 1:2 MODEL :PKG H60A LCP DISC FRONT', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-112-rm', 'WOODEN PALLET SIZE 970W*1156L*135H (HEAT TREATMENT) MODEL PKG.FOR MB3C-3K171-A1 COMMON L/R', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-113-rm', 'WOODEN PALLET SIZE 1100W*1100L*135H (HEAT TREATMENT) MODEL PKG.FOR MODEL 2YC Stamp 03 Black Color.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-114-rm', 'PLATE 896W*1066L  KA230/CA125*3/KA230 BC/F 1:1 MODEL : MB3C-3K171-A1 COMMON L,R (W36"*L41" 16/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-115-H-rm', 'TOP CAP 1180W*1346L KA230/CA185*3/KA230 BCF 1:1 MODEL  PKG.FOR MB3C-3K171-A1 SCREEN K01', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-116-H-rm', 'BOTTOM CAP 1180W*1346L KA230/CA185*3/KA230 BCF 1:1 MODEL  PKG.FOR MB3C-3K171-A1 SCREEN K01', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKIR-117-rm', 'WOODEN PALLET SIZE 1000W*1078L*135H (HEAT TREATMENT) MODEL PKG. FOR VC.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKOY-001-rm', 'CORE DAI (ID) 505W5T*60H MM.  Thickness +- 0.2 mm  2) L +- 0.5 mm  3) ID +- 0.1 mm  4) OD +- 0.5 mm MODEL :REEL SIZE 610 MM. TD-KOY-2306004-00-00', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTF-005-rm', 'WOODEN PALLET 944W*1634L*120H HEATIREAMENT FOR MODEL PKG 900*1600*1000H', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTF-006-rm', 'WOODEN PALLET 1643W*1634L*120H HEATIREAMENT FOR MODEL PKG 1600*1600*800H', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTF-007-rm', 'WOODEN PALLET 1043W*1634L*120H HEATIREAMENT FOR MODEL PKG 1000*1600*800H', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTF-009-rm', 'WOODEN PALLET 1889W*2878L*120H HEATIREAMENT FOR MODEL BOX SET SIZE ID 1820*2820*1000', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTF-010-rm', 'WOODEN SUP.L 75W*12T*2834L HEATIREAMENT FOR MODEL BOX SET SIZE ID 1820*2820*1000', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTF-011-rm', 'WOODEN SUP.H 75W*12T*850L HEATIREAMENT FOR MODEL BOX SET SIZE ID 1820*2820*1000', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTF-012-rm', 'WOODEN SUP.W 75W*12T*1858L HEATIREAMENT FOR MODEL BOX SET SIZE ID 1820*2820*1000', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTF-013-rm', 'S/B 1900W*1100L  KI185/CA125*3/KI185 BCF 1:1 M.PAPER PALET 1100x1900x60 MM. (W76"*L43" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTF-014-rm', 'WOODEN 1344W*1634L*120H  HEATIREAMENT FOR MODEL 1300*1600*1000H (KTF-085)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTF-016-rm', 'WOODEN PALLET 1444W*1734L*120H HEATIREAMENT FOR MODEL BOX  ID 1400*1700*1000H', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-004-rm', 'WOODEN PALLET1069*904*135 (FUMI)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-006 CANCEL-rm', 'EVA Size 80Wx423LxT5mm. 1:32 (OIL PUMP COVER)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-006/1-rm', 'EVA Size 80Wx423LxT3mm. 1:32 (OIL PUMP COVER)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-007-rm', 'BOX  486W*1409L KA230/CA125*3/KA230 BC/F 1:32 (OIL PUMP)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-007/1-rm', 'BOX  486W*1409L KA230/CA125*3/KA230 BC/F 1:32 (OIL PUMP)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-008 CANCEL-rm', 'PARTITION-A 237W*244L KA230/CA125*3/KA230 BC/F 1:128 (OIL PUMP)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-008/1-rm', 'PARTITION-A 237W*244L KA185/CA125*3/KA185 BC/F 1:128 (OIL PUMP)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-009 CANCEL-rm', 'PARTITION-B 237W*244L KA230/CA125*3/KA230 BC/F 1:128 (OIL PUMP )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-009/1-rm', 'PARTITION-B 237W*244L KA185/CA125*3/KA185 BC/F 1:128 (OIL PUMP )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-010 CANCEL-rm', 'PARTITION-C 210W*244L KA230/CA125*3/KA230 BC/F 1:96 (OIL PUMP)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-010/1-rm', 'PARTITION-C 210W*244L KA185/CA125*3/KA185 BC/F 1:96 (OIL PUMP)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-011 CANCEL-rm', 'PARTITION-D 105W*423L KA230/CA125*3/KA230 BC/F 1:64 (OIL PUMP)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-011/1-rm', 'PARTITION-D 105W*423L KA185/CA125*3/KA185 BC/F 1:64 (OIL PUMP)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-012-rm', 'SLEEVE 982W*1973L KA230/CA185*3/KA230 BC/F 1:2 (OIL PUMP)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-013-rm', 'CAP/TRAY 1170*1348  KA230/CA185*3/KA230  BC/F 1:2 (OIL PUMP)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-014-rm', 'EVA Size 20Wx160LxT1.5mm. 1:256 (Coat Glue)   (OIL PUMP COVER)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-015-rm', 'TRAY PTT 1234W*1307L KA185/CA125/KA185 C/F 1:9 (DV.OIL PUMP)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-016-rm', 'PTT-W 240W*1091L KA185/CA125*3/KA185 BC/F 1:72 (DV.OIL PUMP)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-016-1-rm', 'PTT-W 232W*1091L KA185/CA125*3/KA185 BC/F 1:72 (DV.OIL PUMP)***เปลี่ยนแบบ***', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-017-1-rm', 'PTT-L 96W*1018L KA185/CA125*3/KA185 BC/F 1:54 (DV.OIL PUMP)***เปลี่ยนแบบ***', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-017CANCELL-rm', 'PTT-L 96W*1018L KA185/CA125*3/KA185 BC/F 1:54 (DV.OIL PUMP)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-018-rm', 'CAP 1299W*1361L KA230/CA125*3/KA230 BC/F 1:1 (COMMON DV.OIL PUMP/PKG FOR RET ASSY BRG)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-019-1-rm', 'SLEEVE 880W*2170L KA230/CA185*3/KA230 BC/F 1:2 (COMMON DV.OIL PUMP/PKG FOR RET ASSY BRG)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-019CANCELL-rm', 'SLEEVE 900W*2170L KA230/CA185*3/KA230 BC/F 1:2 (COMMON DV.OIL PUMP/PKG FOR RET ASSY BRG)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-020-rm', 'BOTTOM CAP 1299W*1361L KA230/CA125*3/KA230 BC/F 1:1 (COMMON DV.OIL PUMP/PKG FOR RET ASSY BRG)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-021-rm', 'WOODEN PALLET1089W*1145L*135H (HEAT TREATMENT) (DV.OIL PUMP) STAMP C COLOR BLACK ตรงกลาง 4 ด้าน', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-022-rm', 'TRAY PTT 1144W*1217L KA185/CA125/KA185 C/F 1:15 (PKG FOR RET ASSY BRG)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-023 CANCELLED-rm', 'PTT-C2 350W*1087L KA185/CA125/KA185 C/F 1:30 (PKG FOR RET ASSY BRG)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-023-1-rm', 'PTT-E2 350W*1087L KA185/CA125/KA185 C/F 1:30 (PKG FOR RET ASSY BRG (PUMP-014 TO 016)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-024 CANCELLED-rm', 'PTT-C3 56W*1008L KA185/CA125*3/KA185 BC/F 1:90 (PKG FOR RET ASSY BRG)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-024-1-rm', 'PTT-E3 52W*1008L KA185/CA125*3/KA185 BC/F 1:90 (PKG FOR RET ASSY BRG (PUMP-014 TO 016 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-025 CANCELLED-rm', 'PTT-C4 407W*1087L KA185/CA125/KA185 C/F 1:30 (PKG FOR RET ASSY BRG)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-025-1-rm', 'PTT-E4 407W*1087L KA185/CA125/KA185 C/F 1:30 (PKG FOR RET ASSY BRG PUMP-014 TO 016 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-026 CANCELLED-rm', 'WOODEN PALLET1089W*1145L*135H (HEAT TREATMENT) (PKG.FOR RET ASSY BRG) STAMP R COLOR BLACK ตรงกลาง 4 ด้าน', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-026-1-rm', 'WOODEN PALLET1089W*1145L*120H (HEAT TREATMENT) (DV.PKG.FOR RET ASSY BRG) STAMP R COLOR BLACK ตรงกลาง 4 ด้าน', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-027-rm', 'SLEEVE 840W*2223L KA230/CA185*3/KA230 BC/F 1:1 (DV.PKG FOR RET ASSY BRG) เย็บแล้ว มัดละ 5 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-028-rm', 'CAP / BOTTOM CAP 1356W*1326L KA230/CA125*3/KA230 BCF 1:2 PKG FOR RET ASSY BRG (PUMP-014 TO 016)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-029CANCELL-rm', 'SLEEVE 880W*1757L  KA230/CA185*3/KA230 BCF 1:2 PKG FOR RET ASSY BRG (PUMP-014 TO 016)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-030-rm', 'SLEEVE 880W*1482L  KA230/CA185*3/KA230 BCF 1:2 PRINT PKG FOR RET ASSY BRG (PUMP-014 TO 016) SCREEN COLOR RED', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-030-H-rm', 'SLEEVE 880W*1482L  KA230/CA185*3/KA230 BCF 1:2 PRINT PKG FOR RET ASSY BRG (PUMP-014 TO 016) SCREEN COLOR RED (NK SUPPORT SB)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-031-rm', 'WOODEN PALLET 1110W*1146L*120H HEAT TREATMENT 1:1  PKG FOR RET ASSY BRG (PUMP-014 TO 016) STAMP R COLOR BLACK ตรงกลาง 4 ด้าน', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-032-rm', 'SLEEVE OD: 703W*1100L*875H  KA270/CA185/KA540/CA185/KA270 AA/F  (BI-WALL 850 AA)   1:1 MODEL BOX FOR RHS4V TURBINE HOUSING', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RKTW-033-rm', 'WOODEN PALLET 744W*1130L*125H (NOT HEAT TREATMENT) 1:1  MODEL BOX FOR RHS4V TURBINE HOUSING', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RLHC-001-rm', 'COVER-A  1036W*1036L KA185/CA125*3/KA185   BCF 1:2  Blue screen', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RLHC-002-rm', 'COVER-B 1036W*1036L KA185/CA125*3/KA185   BCF 1:2  No Screen', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RLHC-003-rm', 'COVER-D 546W*546L KA125/CA125*3/KA125   BC/F 1:4', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RLHC-004-rm', 'Plastic stopper /จุกดำพลาสติก 300 PCS./PACK', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RLHT-001-1-rm', 'LDPE GUSSET BAG (15CM) 47W*52L*0.06T MM (FOR PACKING BS-LHT-002 Plastic stopper /จุกดำพลาสติก)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-001-2 CANCEL-rm', 'SLEEVE B401 655*482*1660MM KA230/CA125*3/KA230 BC/F NEW SCREEN', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-001-3CANCELL-rm', 'SLEEVE B401 1660W*1172L (655*482*1660MM) KA230/CA125*3/KA230 BC/F CHANGE SCREEN', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-001-4CANCELL-rm', 'SLEEVE B401 1660W*1172L (655*482*1660MM) KA230/CA125*3/KA230 BC/F CHANGE SCREEN มัดละ 5 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-001-5CANCELL-rm', 'SLEEVE BBI401 1660W*1172L (655*482*1660MM) KA230/CA125*3/KA230 BC/F CHANGE SCREEN มัดละ 5 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-001-6-rm', 'SLEEVE BB8401 1660W*1172L (666*490*1660MM) KA230/CA125*3/KA230 BC/F CHANGE SCREEN มัดละ 5 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-002-rm', 'PAD B401 752W*574L KA185/CA125*3/KA185 BC/F มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-003-rm', 'CAP B401 886W*718L KA185/CA125*3/KA185 BC/F มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-007-1 CANCELL-rm', 'CARTON BOX B903 ID 372*262*640MM  KA230/CA125*3/KA230 BC/F NEW SCREEN', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-007-2CANCELL-rm', 'CARTON BOX B903 ID 372*262*640MM  KA230/CA125*3/KA230 BC/F ADD NEW SCREEN 2018', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-007-3CANCELL-rm', 'CARTON BOX B903  784W*1332L ID 372*262*640MM  KA230/CA125*3/KA230 BC/F ADD NEW SCREEN 2018 มัดละ 5 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-007-4CANCELL-rm', 'CARTON BOX BCA903  784W*1332L ID 372*262*640MM  KA230/CA125*3/KA230 BC/F  มัดละ 5 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-007-5-rm', 'CARTON BOX BC1903  784W*1332L ID 372*262*640MM  KA230/CA125*3/KA230 BC/F  มัดละ 10 ชิ้น มัดหัว-ท้าย รองกระดาษ', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-007-5-H-rm', 'CARTON BOX BC1903  784W*1332L ID 372*262*640MM  KA230/CA125*3/KA230 BC/F  SB NK KPC HELP   มัดละ 10 ชิ้น มัดหัว-ท้าย รองกระดาษ', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-008-rm', 'BOTTOM TRAY B903/B904 558W*448L  KA230/CA125*3/KA230 BC/F มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-009-1 CANCELL-rm', 'CARTON BOX B904 ID 372*262*540 KA230/CA125*3/KA230 BC/F NEW SCREEN', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-009-2CANCELL-rm', 'CARTON BOX B904 ID 372*262*540 KA230/CA125*3/KA230 BC/F ADD NEW SCREEN 2018', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-009-3CANCELL-rm', 'CARTON BOX B904 684W*1332L ID 372*262*540 KA230/CA125*3/KA230 BC/F ADD NEW SCREEN 2018 มัดละ 5 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-009-4CANCELL-rm', 'CARTON BOX BCA904 684W*1332L ID 372*262*540 KA230/CA125*3/KA230 BC/F  มัดละ 5 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-009-5-rm', 'CARTON BOX BC1904 684W*1332L ID 372*262*540 KA230/CA125*3/KA230 BC/F  มัดละ 5 ชิ้นมัดหัว-ท้าย รองกระดาษ', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-010-rm', 'WOODEN PALLET 300W*400L*66MM ไม้หนา 10 มิล ใช้ตะปูยิง', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-014-1-rm', 'CAP B503/B501 1106W*1106L KA230/CA125*3/KA230 BC/F 1:1 (M.503/B501 COMMON) มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-014CANCEL-rm', 'CAP B503/B501 1108W*1108L KA230/CA125*3/KA230 BC/F 1:1 (M.503/B501 COMMON)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-015-2CANCELL-rm', 'SLEEVE B501A 895*880*744 MM (744W*1798L) KA230/CA125*3/KA230 BC/F 1:1 CHANGE DETAIL', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-015-3CANCELL-rm', 'SLEEVE B501A 895*880*744 MM (744W*1798L) KA230/CA125*3/KA230 BC/F 1:1 CHANGE DETAIL (มัดละ 5 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-015-4 CANCEL-rm', 'SLEEVE BD4501 892*881*744 MM (744W*1798L) KA230/CA125*3/KA230 BC/F 1:1 BD4501 (มัดละ 5 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-015-5-rm', 'SLEEVE BD4501 892*881*744 MM (744W*1798L) KA230/CA125*3/KA230 BC/F 1:1 BD4501 (มัดละ 5 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-016-2CANCELL-rm', 'SLEEVE B503 895*880*944MM(944W*1798L) KA230/CA125*3/KA230 BC/F CHANGE DETAIL', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-016-3-rm', 'SLEEVE B503 895*880*944MM (944W*1798L) KA230/CA125*3/KA230 BC/F CHANGE DETAIL มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-016-4-rm', 'SLEEVE BD4503 892*8881*944MM (944W*1798L) KA230/CA125*3/KA230 BC/F CHANGE DETAIL มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-016-5-rm', 'SLEEVE BD4503 884*879*944MM (944W*1798L) KA230/CA125*3/KA230 BC/F ADD SCREEN มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-020-rm', 'TOP PAD 364W*256L  KA230/CA125*3/KA230  BCF SUPPORT  B903 ,B904 มัดละ 20 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-023-1-rm', 'TRAY 895Wx725L  KA185/CA125*3/KA185 BC/F 1:1 BB8402 (GPS5)  มัดละ 10 ชิ้น ***แก้ไขระยะ***', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-023CANCELL-rm', 'TRAY 895Wx722L  KA185/CA125*3/KA185 BC/F 1:1 B402 (GPS5)  มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-024-2 CANCEL-rm', 'SLEEVE-C1 OD496Wx674Lx1830H (1830Wx1197L) KA230/CA125*3/KA230 BC/F 1:1  B402 (GPS5) NEW', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-024-3CANCELL-rm', 'SLEEVE-C1 OD496Wx674Lx1830H (1830Wx1197L) KA230/CA125*3/KA230 BC/F 1:1  B402 (GPS5) CHANGE SCREEN', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-024-4CANCELL-rm', 'SLEEVE-C1 OD496Wx674Lx1830H (1830Wx1197L) KA230/CA125*3/KA230 BC/F 1:1  B402 (GPS5) CHANGE SCREEN มัดละ 5 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-024-5CANCELL-rm', 'SLEEVE-C1 OD496Wx674Lx1830H (1830Wx1197L) KA230/CA125*3/KA230 BC/F 1:1  BBI402 CHANGE SCREEN มัดละ 5 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-024-6CANCELL-rm', 'SLEEVE-C1 1830W*1197L OD496Wx674Lx1830H KA230/CA125*3/KA230 BC/F 1:1  BB8402 CHANGE SCREEN มัดละ 5 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-024-7-rm', 'SLEEVE-C1 1830W*1197L OD496Wx674Lx1830H KA230/CA125*3/KA230 BC/F 1:1  BB8402 CHANGE SCREEN มัดละ 5 ชิ้น (แก้ไขระยะ Care Mark)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-029 CANCEL-rm', 'CASE 801W*3210L KA185/CA125*3/KA185 BCF 1:1 B221 มัดละ 5 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-029-1CANCELL-rm', 'CASE 801W*3210L KA185/CA125*3/KA185 BCF 1:1 BEF221 มัดละ 10 ชิ้น หัว-กลาง-ท้าย', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-029-2-rm', 'CASE 801W*3210L KA185/CA125*3/KA185 BCF 1:1 BE5221 มัดละ 10 ชิ้น หัว-กลาง-ท้าย', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-030-rm', 'WOODEN SHEET 35*50*2500MM (HEAT TRETMENT) SUPPORT :MODEL B221', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-031-rm', 'WOODEN SHEET 50*50*800MM (HEAT TRETMENT) SUPPORT :MODEL B221', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-032-1-rm', 'CARTON BOX D040  508W*1576L ID376*376*107 MM   KA125/CA125*3/KA125 BC/F (Change Design) มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-032CANCELL-rm', 'CARTON BOX D040  512W*1576L ID376*376*107 MM   KA125/CA125*3/KA125 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-033-rm', 'PAD 653W*480L KA185/CA125*3/KA185 BCF DV COVER B401 มัดละ 20 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-035-rm', 'TRAY 830W*835L KA185/CA125*3/KA185 BCF  BBK408 มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-036CANCELL-rm', 'SLEEVE 2091W*1778L  KA230/CA125*3/KA230 BCF 1:2  BBK408    มัดละ 5 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-037-rm', 'TRAY  836W*841L KA185/CA125*3/KA185 BCF  1:1  BBK404 มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-038-2-rm', 'SLEEVE -C1 1621W*1240L  KA230/CA125*3/KA230 BCF 1:1  เย็บเป็นกล่องแล้ว BB6404 มัดละ 5 ชิ้น***เปลี่ยนแบบ***', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-038CANCELL-rm', 'SLEEVE -C1 1621W*1240L  KA230/CA125*3/KA230 BCF 1:1  เย็บเป็นกล่องแล้ว BBK404 มัดละ 5 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-039-rm', 'TRAY 1416W*1001L KA185/CA125*3/KA185 BCF 1:1 BBI407  มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-040CANCELL-rm', 'SLEEVE-C1 2091W*2678L KA230/CA125*3/KA230  BCF 1:2 BBI407 มัดละ 5 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-041-rm', 'PAD 572W*586L KA185/CA125*3/KA185 BCF  BBK408  มัดละ 20 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-042-rm', 'PAD  566W*580L KA185/CA125*3/KA185 BCF  1:1  BBK404 มัดละ 20 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-043-rm', 'PAD 1146W*740L KA185/CA125*3/KA185 BCF 1:1 BBI407  มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-044-rm', 'TOP CAP 1131W*1856L KA230/CA125*3/KA230 BCF 1:1 COMMON BDD004 , BDD003', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-045 CANCEL-rm', 'SLEEVE B1 700W*934L +B2 700W*1664L +B3  700W*934L  (ID : 876W1606L*700H) KA230/CA125*3/KA230 BCF 1:1  เย็บเป็นกล่องแล้ว BDD004', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-046-rm', 'TOP CAP 1131W*1426L KA230/CA125*3/KA230 BCF 1:1 COMMON BDD002 , BDD001', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-047 CANCEL-rm', 'SLEEVE B1+B2  700W*2120L   (ID : 876W1176L*700H) KA230/CA125*3/KA230 BCF 1:1  เย็บเป็นกล่องแล้ว BDD002', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-047-1CANCELLED-rm', 'SLEEVE B1+B2  700W*2120L   (ID : 876W1176L*700H) KA230/CA125*3/KA230 BCF 1:1  เย็บเป็นกล่องแล้ว BD4002 CHANGE SCREEN', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-047-2-rm', 'SLEEVE B1+B2  700W*2120L   (ID : 876W1176L*700H) KA230/CA125*3/KA230 BCF 1:1  เย็บเป็นกล่องแล้ว BD4002 CHANGE SCREEN', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-048 CANCEL-rm', 'SLEEVE B1+B2  600W*2120L   (ID : 876W1176L*700H) KA230/CA125*3/KA230 BCF 1:1  เย็บเป็นกล่องแล้ว BDD001', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-049 CANCEL-rm', 'SLEEVE B1 600W*934L +B2 600W*1664L +B3  600W*934L  (ID : 876W1606L*600H) KA230/CA125*3/KA230 BCF 1:1  เย็บเป็นกล่องแล้ว BDD003', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-050-rm', 'TOP CAP 1191W*1186L  KA230/CA125*3/KA230 BCF 1:1  MODEL  COMMON  BB4002 , BB4001', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-051-1CANCELLED-rm', 'SLEEVE B1+B2  500W*1940L   (ID : 936W936L*500H) KA230/CA125*3/KA230 BCF 1:1  เย็บเป็นกล่องแล้ว BB4002', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-051-2CANCELLED-rm', 'SLEEVE B1+B2  500W*1940L   (ID : 936W936L*500H) KA230/CA125*3/KA230 BCF 1:1  เย็บเป็นกล่องแล้ว BB4002 เปลี่ยนขนาด Care Mark', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-051-3-rm', 'SLEEVE B1+B2  500W*1940L   (ID : 936W936L*500H) KA230/CA125*3/KA230 BCF 1:1  เย็บเป็นกล่องแล้ว BB4002 เปลี่ยนขนาด Care Mark', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-051CANCELL-rm', 'SLEEVE B1+B2  500W*1940L   (ID : 936W936L*500H) KA230/CA125*3/KA230 BCF 1:1  เย็บเป็นกล่องแล้ว BBH002', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-052 CANCEL-rm', 'SLEEVE B1+B2  300W*1940L   (ID : 936W936L*300H) KA230/CA125*3/KA230 BCF 1:1  เย็บเป็นกล่องแล้ว BBH001', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-052-1CANCELLED-rm', 'SLEEVE B1+B2  300W*1940L   (ID : 936W936L*300H) KA230/CA125*3/KA230 BCF 1:1  เย็บเป็นกล่องแล้ว BB4001 CHANGE SCREEN', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-052-2-rm', 'SLEEVE B1+B2  300W*1940L   (ID : 936W936L*300H) KA230/CA125*3/KA230 BCF 1:1  เย็บเป็นกล่องแล้ว BB4001  เปลี่ยนขนาด Care Mark', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-054-rm', 'TOP CAP 1431W*1426L  KA230/CA125*3/KA230 BCF 1:1  MODEL  BB4003', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-055-rm', 'SLEEVE B1+B2  500W*2420L   (ID : 1176W*1176L*500H) KA230/CA125*3/KA230 BCF 1:1  เย็บเป็นกล่องแล้ว BBH003', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-055-1-rm', 'SLEEVE B1+B2  500W*2420L   (ID : 1176W*1176L*500H) KA230/CA125*3/KA230 BCF 1:1  เย็บเป็นกล่องแล้ว BB4003 CHANGE SCREEN', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-055-2-rm', 'SLEEVE B1+B2  500W*2420L   (ID : 1176W*1176L*500H) KA230/CA125*3/KA230 BCF 1:1  เย็บเป็นกล่องแล้ว BB4003 เปลี่ยนขนาด Care Mark', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-055-3-rm', 'SLEEVE B1+B2  500W*2420L   (ID : 1176W*1176L*500H) KA230/CA125*3/KA230 BCF 1:1  เย็บเป็นกล่องแล้ว BB4003 เปลี่ยนแบบสกรีน', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-056-rm', 'TOP CAP  1631W*1626L  KA230/CA125*3/KA230 BCF 1:1  MODEL  BBH004', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-057-rm', 'SLEEVE B1+B2+B3 500W*1434L  (ID: 1376*1376*500H) KA230/CA125*3/KA230 BCF 1:1  เย็บเป็นกล่องแล้ว BBH004', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-057-2-rm', 'SLEEVE B1+B2+B3 500W*1434L  (ID: 1376*1376*500H) KA230/CA125*3/KA230 BCF 1:1  เย็บเป็นกล่องแล้ว BB4004 เปลี่ยนขนาด Care Mark', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-057-3-rm', 'SLEEVE B1+B2+B3 500W*1434L (ID: 1376*1376*500H) KA230/CA125*3/KA230 BCF 1:1  เย็บเป็นกล่องแล้ว BB4004 เปลี่ยนขนาด Care Mark', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-058-rm', 'PTT-C2 550W*1600L KA230/CA125*3/KA230 BCF 1:1 BDD004', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-059-rm', 'PTT-C2 500W*1600L KA230/CA125*3/KA230 BCF 1:1 BDD003', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-060-rm', 'PTT-C2 500W*1170L KA230/CA125*3/KA230 BCF 1:1 BDD001', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-061-rm', 'PTT-C2 550W*1170L KA230/CA125*3/KA230 BCF 1:1 BDD002', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-062-rm', 'PTT-C1  600W*478L KA230/CA125*3/KA230 BCF 1:1 BDD001', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-063-rm', 'PTT-C1  700W*478L KA230/CA125*3/KA230 BCF 1:1 BDD002', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-064-rm', 'PTT-C1  600W*478L KA230/CA125*3/KA230 BCF 1:1 BDD003', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-065-rm', 'PTT-C1  700W*478L KA230/CA125*3/KA230 BCF 1:1 BDD004', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-066-rm', 'SLEEVE-C1 1900W*1197L OD 496Wx674Lx1900H  KA230/CA125*3/KA230 BCF 1:1 MODEL BB8409 เย็บเป็นกล่องแล้ว  มัดละ 5 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-067-rm', 'TOP CAP 1486W*1495L KA230/CA125*3/KA230 BCF 1:1 MODEL BB3021', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-068-rm', 'TOP CAP 1346W*1255L KA230/CA125*3/KA230 BCF 1:1 MODEL BB3011', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-069-rm', 'TOP CAP  1826W*1835L  KA230/CA125*3/KA230 BCF 1:1 MODEL BB3031', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-070-rm', 'TOP CAP  2016W*2022L  KA230/CA125*3/KA230 BCF 1:1 MODEL BB3032', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-071-rm', 'TOP CAP  1736W*1742L  KA230/CA125*3/KA230 BCF 1:1 MODEL BB3023', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-072-rm', 'TOP CAP  1676W*1682L  KA230/CA125*3/KA230 BCF 1:1 MODEL BB3022', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-073-1-rm', 'TOP CAP  2066W*2072L  KA230/CA125*3/KA230 BCF 1:1 MODEL BB3033 แก้ไขความสูงของหู Joint', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-073CANCELL-rm', 'TOP CAP  2076W*2082L  KA230/CA125*3/KA230 BCF 1:1 MODEL BB3033', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-074-rm', 'TOP CAP  1596W*1505L  KA230/CA125*3/KA230 BCF 1:1 MODEL BB3013', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-075-rm', 'TOP CAP  1536W*1445L  KA230/CA125*3/KA230 BCF 1:1 MODEL BB3012', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RMSE-076-rm', 'TRAY  887W*713L KA185/CA125*3/KA185 BCF 1:1 BB8401 มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNDK-001-rm', 'BOX 254W*949L KA150/CA125/KA150 C/F MODEL:JAPAN SCREEN COLOR BLACK (PACKING 25 BOX/PACK มัดเชือก 2 เส้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNDK-002-rm', 'PALLET 980*995*125H WOOD (HEAT TREATMENT)  MODEL:JAPAN', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNDK-003/1-rm', 'BOX 244W*1101L KA185/CA125/KA185 C/F MODEL:DEVELOP BOX FOR PART 3192104XOA SCREEN COLOR BLACK (PACKING 25 BOX/PACK มัดเชือก 2 เส้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNDK-004/1-rm', 'BOX 239W*1151L KA185/CA125/KA185 C/F MODEL:DEVELOP BOX FOR PART 319213VXOB SCREEN COLOR BLACK (PACKING 25 BOX/PACK มัดเชือก 2 เส้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNDK-005-rm', 'WOODEN PALLET 1130*1260*135H WOOD (HEAT TREATMENT)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNDK-006-rm', 'WOODEN PALLET 1140*1160*135H WOOD (HEAT TREATMENT)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNDK-008-rm', 'BOX 373W*1293L KA150/CA125/KA150 C/F MODEL:PKG MEXICO', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNDK-009-rm', 'WOODEN PALLET 1105*1116*111H WOOD (HEAT TREATMENT) M.PKG.SHAFT MACHINING', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNGN-001-rm', 'BOX 326W*1575L KA230/CA125/KA230 CF 1:1 OD 249W*526L*80H', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNGN-002-rm', 'PTT-B 58W*517L KA185/CA125/KA185 CF 1:11 OD 249W*526L*80H', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNGN-003-rm', 'PTT-C 58W*237L KA185/CA125/KA185 CF 1:6 OD 249W*526L*80H', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-001 C01-rm', 'CAP 1460W*1372L KA230/CA185*3/KA230 BC/F 1:2 (DR)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-002-rm', 'SIDE COVER 1000W*1672L KA230/CA185*3/KA230 BC/F 1:2 (DR)  (W40"*L65" 7/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-003-rm', 'CAP 1300W*1364L KA230/CA185*3/KA230 BC/F 1:2 (AS)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-004-rm', 'SIDE COVER 975W*1580L KA230/CA185*3/KA230 BC/F 1:2 (AS) ทับรอย 255-1070-255', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-057-1-rm', 'TOP CAP 921 W* 2406L  KA185/CA125*3/KA185  BC/F 1:2 (TOA/TRO COMMON XC2A 009A)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-057CANCELLED-rm', 'TOP CAP 921 W* 2406L  KA230/CA185*3/KA230  BC/F 1:2 (TOA/TRO)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-062-rm', 'Partition-A-1  60W*105L  Ka125/Ca125*3/Ka125  BC/F  1:12 (Indonesia)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-062/1-rm', 'Partition-A-2  60W*120L  Ka125/Ca125*3/Ka125  BC/F  1:12 (Indonesia)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-063-rm', 'Partition-B  70W*120L  Ka125/Ca125*3/Ka125  BC/F  1:48 (Indonesia)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-064-rm', 'SLEEVE  A  940W* 2000L  KA230/CA185*3/KA230  BC/F 1:2 (TOA/TRO COMMON XC2A 009A) (W38"*L78" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-065-rm', 'SLEEVE  B  940W* 1136L  KA230/CA185*3/KA230  BC/F 1:2 (TOA/TRO COMMON XC2A 009A)  (W38"*L44" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-072-rm', 'BOX 854W*1484L KA185/CA125/KA185 C/F 1:36 (HUB CORE COMMON INDONESIA)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-074-rm', 'Corner  478 W * 271L  KA185/CA125/KA185  C/F  1:4 (Indonesia)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-085-rm', 'PARTITION-A 248Wx138L KA125/CA125x3/KA125 BCF 1:180 (TY0 & 2GA)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-085/1-rm', 'PARTITION-A 248Wx138L KA125/CA105x3/KA125 BCF 1:180 (TY0 & 2GA) มัดละ 25 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-086-rm', 'PARTITION-B 107Wx146L KA125/CA125x3/KA125 BCF 1:180 (TY0 & 2GA)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-086/1-rm', 'PARTITION-B 107Wx146L KA125/CA105x3/KA125 BCF 1:180 (TY0 & 2GA) มัดละ 25 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-087-rm', 'PARTITION-C 107Wx130L KA125/CA125x3/KA125 BCF 1:180 (TY0 & 2GA)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-087/1-rm', 'PARTITION-C 107Wx130L KA125/CA105x3/KA125 BCF 1:180 (TY0 & 2GA) มัดละ 25 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-090-rm', 'Carton  Box  Size  690W*1604L  Ka185/Ca125/Ka185  C/F ( Model  937A STRG)  ( 1:24)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-092-rm', 'CONER  480W*358L  Ka185/cA125/kA185  C/F  (MODEL  937A  STRG  1:96', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-093-rm', 'COVER  930W*1320L  Ka185/cA125*3/kA185  BC/F  (MODEL  937A STRG)  1:4', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-095-rm', 'WOODEN PALLET 1030Wx1098Lx120H (FUMIGATION) AS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-096-rm', 'WOODEN PALLET 1100Wx1197Lx110H (FUMIGATION) STAMP DR ด้าน W', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-097-rm', 'PARTITION-A 162Wx138L KA230/CA125/KA230 CF 1:252 (L12F STRG HUB CORE)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-098-rm', 'PARTITION-B 59Wx142L KA125/CA125 x 3/KA125 BCF 1:504 (L12F STRG HUB CORE)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-099-rm', 'PAPER TUBE NEW  ID  85 mm*2.5T mm * 90L MM.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-101-rm', 'BOX 949W*1656L KA185/CA125/KA185 CF 1:36 (TY0 & 2GA)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-101/1-rm', 'BOX 949W*1656L KA185/CA105/KA185 CF 1:36 (TY0 & 2GA) มัดละ 10 PCS.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-101-H-rm', 'BOX 949W*1656L KA185/CA105/KA185 CF 1:36 MODEL 782B  มัดละ 10 PCS. (JOINT GULE)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-102-rm', 'BOTTOM PAD 400W*400L KA185/CA125/KA185 CF 1:36 (TY0 & 2GA)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-102/1-rm', 'BOTTOM PAD 400W*400L KA185/CA105/KA185 CF 1:36 (TY0 & 2GA) มัดละ 50 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-103-rm', 'TOP ASSY-A 400W*400L DIA 41 KA185/CA125/KA185 CF 1:36 (TY0 & 2GA)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-103/1-rm', 'TOP ASSY-A 400W*400L DIA 41 KA185/CA105/KA185 CF 1:36 (TY0 & 2GA)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-104-rm', 'TOP ASSY-B 200W*200L DIA 41 KA125/CA125*3/KA125 BCF 1:36 (TY0 & 2GA)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-104/1-rm', 'TOP ASSY-B 200W*200L DIA 41 KA125/CA105*3/KA125 BCF 1:36 (TY0 & 2GA)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-105-rm', 'TOP ASSY-A 400W*400L DIA 46 KA185/CA125/KA185 CF 1:36 (TY0 & 2GA) มัดละ 50 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-106-rm', 'TOP ASSY-B 200W*200L DIA 46 KA125/CA125*3/KA125  BCF 1:36 (TY0 & 2GA) มัดละ 25 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-107-rm', 'PTT-01 215W*1006L KA230/CA125*3/KA230 BC 1:12  MODEL 2XP-AS UNDER', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-108-rm', 'PTT-02 215W*1006L KA230/CA125*3/KA230 BC 1:9  MODEL 2XP-AS UNDER', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-109-rm', 'PTT-03 135W*1144L KA230/CA125*3/KA230 BC 1:15  MODEL 2XP-AS UNDER', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-110-rm', 'CAP 1405W*1256L KA230/CA125*3/KA230 BC/F 1:1 COMMON', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-111-rm', 'SLEEVE 646W*2221L KA230/CA125*3/KA230 BC/F 1:1  MODEL:2XP-AS แบบเย็บแล้ว', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-111-1-rm', 'SLEEVE 646W*2221L KA230/CA125*3/KA230 BC/F 1:1  (W52"*L87" 1/2 ผ่า2) MODEL:AS MID/DR MID', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-112-rm', 'PLATE 1168W*1024L KA230/CA185*3/KA230 BC/F 1:1 COMMON', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-113-rm', 'BOX 670W*751L KA230/CA125/KA230 C/F 1:36 MODEL 2XP-AS,DR SIDE DEF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-114-rm', 'TRAY 603W*502L KA230/CA125/KA230 C/F 1:90 MODEL 2XP-AS,DR SIDE DEF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-115-rm', 'PTT-02 60W*308L KA230/CA125/KA230 C/F 1:360 MODEL 2XP-AS,DR SIDE DEF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-116-rm', 'PTT-03 60W*361L KA230/CA125/KA230 C/F 1:270 MODEL 2XP-AS,DR SIDE DEF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-119-rm', 'PTT-2A 655W*1144L KA230/CA125/KA230 C/F 1:5 MODEL 2XP-AS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-120-rm', 'PTT-2B 758W*1144L KA230/CA125/KA230 C/F 1:5 MODEL 2XP-AS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-121-rm', 'PTT-3A 117W*265L KA230/CA125/KA230 C/F 1:30 MODEL 2XP-AS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-122-rm', 'PTT-3B 117W*300L KA230/CA125/KA230 C/F 1:30 MODEL 2XP-AS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-123-rm', 'PTT-3C 117W*300L KA230/CA125/KA230 C/F 1:25 MODEL 2XP-AS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-124-rm', 'PTT-3A 108W*984L KA230/CA125/KA230 C/F 1:12 MODEL 2XP-DR', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-125-rm', 'PTT-3B 642W*984L KA230/CA125/KA230 C/F 1:12 MODEL 2XP-DR', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-126-rm', 'PTT-3C 108W*984L KA230/CA125/KA230 C/F 1:12 MODEL 2XP-DR', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-127-rm', 'PTT-3D 642W*984L KA230/CA125/KA230 C/F 1:12 MODEL 2XP-DR', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-128-rm', 'PTT-3E 153W*372L KA230/CA125/KA230 C/F 1:72 MODEL 2XP-DR', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-129-rm', 'PTT-01 583W*1144L KA230/CA125/KA230 C/F 1:4 MODEL 2XP-METER', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-130-rm', 'PPT-02 583W*1144L KA230/CA125/KA230 C/F 1:4 MODEL 2XP-METER', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-131-rm', 'PPT-03 318W*998L KA230/CA125/KA230 C/F 1:22 MODEL 2XP-METER', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-138-rm', 'SLEEVE 646W*2221L KA230/CA125*3/KA230 BC/F 1:1  MODEL: 2XP-UNDER  แบบเย็บแล้ว', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-140-rm', 'SLEEVE 646W*2221L KA230/CA125*3/KA230 BC/F 1:1  MODEL: 2XP-METER  แบบเย็บแล้ว', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-143-1-rm', 'BOX 762W*2247L KA185/CA125/KA185 CF 1:1  MODEL : CTR-RH (RCREEN) มัดเชือก 10 PCS/มัด', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-144-rm', 'PTT-A 396W*500L KA185/CA125/KA185 CF 1:6 MODEL : CTR-RH มัดเชือก 20 PCS /มัด', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-145-rm', 'PTT-B 87W*584L KA185/CA125/KA185 CF 1:10 M.PKG.: CTR-RH มัดยาง 25 PCS /มัด ,  มัดเชือก 100 PCS /มัด', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-146-rm', 'PAD  500W*584L KA185/CA125/KA185 CF 1:3 COMMON M.PKG.: CTR-RH,LH-SIDE-RH,LH', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-148-1-rm', 'BOX 762W*2247L KA185/CA125/KA185 CF 1:2 M.PKG.FOR SERENA VENT SIDE-R (SCREEN)  มัดเชือก 10 PCS /มัด', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-149-rm', 'PTT-A 107W*584L KA185/CA125/KA185 CF 1:8 M.PKG.FOR SERENA VENT SIDE-R  มัดยาง 25 PCS /มัด ,  มัดเชือก 100 PCS /มัด', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-150-rm', 'PTT-B 107W*500L KA185/CA125/KA185 CF 1:6 M.PKG.FOR.SERENA VENT SIDE-R มัดยาง 25 PCS /มัด ,  มัดเชือก 100 PCS/มัด', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-153-1-rm', 'BOX 762W*2247L KA185/CA125/KA185 CF 1:1 M.PKG.FOR.SERENA VENT SIDE-L (SCREEN)  มัดเชือก 10 PCS /มัด', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-154-rm', 'PTT-A 107W*584L KA185/CA125/KA185 CF 1:8 M.PKG.FOR.SERENA VENT SIDE-L  มัดยาง 25 PCS/มัด ,  มัดเชือก 100 PCS/มัด', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-155-1-rm', 'PTT-B 328W*500L KA185/CA125/KA185 CF 1:10 M.PKG.FOR.SERENA VENT SIDE-L มัดเชือก 20 PCS/มัด', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-158-rm', 'PTT-C 352W*500L KA185/CA125/KA185 CF 1:8  VENT SIDE-R มัดเชือก 20 PCS /มัด', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-159-1-rm', 'BOX 762W*2247L KA185/CA125/KA185 CF 1:2 MODEL : VENT CTR-LH (SCREEN)  มัดเชือก 10 PCS /มัด', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-160-rm', 'PTT-A 396W*500L KA185/VA125/KA185 CF 1: 6  MODEL : VENT CTR-LH มัดเชือก 20 PCS/มัด', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-161-rm', 'PTT-B  87W*584L KA185/CA125/KA185 CF 1:10  MODEL : VENT CTR-LH  มัดยาง 25 PCS/มัด , มัดเชือก 100 pcs/มัด', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-170-rm', 'PTT-F 203W-120L KA230/CA125*3/KA230 BCF 1:1 MODEL : STRG HUB CORE 047-1815MO', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-171-rm', 'PTT-S 203W-120L KA230/CA125*3/KA230 BCF 1:7 MODEL : STRG HUB CORE 047-1815MO', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-172-rm', 'PTT-T 203W-120L KA230/CA125*3/KA230 BCF 1:12 MODEL : STRG HUB CORE 047-1815MO', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-177 CANCEL-rm', 'BOX  697W*1084L  KA230/M/KA230 CF 1:2 MODEL:YWO (PACK 32)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-177-1-rm', 'BOX  697W*2146L  KA230/M/KA230 CF 1:2 MODEL:YWO (PACK 32) 1 JOINT  (มัดละ 10 PCS.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-178-rm', 'PTT-2A 100W*464L KA185/CA125/KA185 CF 1:6 MODEL:YWO', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-179-rm', 'PTT-2B  97W*464L KA185/CA125/KA185 CF 1:8 MODEL:YWO', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-180-rm', 'PTT-2C  100W*568L KA185/CA125/KA185 CF 1:10 MODEL:YWO', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-181-rm', 'PAD 464W*568L KA125/CA125/KA125 CF 1:2 MODEL:YWO (W38"*L22" 3/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-181-1-rm', 'PAD 932W*1140L KA125/CS110/KA125 CF 1:2 MODEL:YWO', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-182-rm', 'BOX 955W*1776L KA125/CA125*3/KA125 BCF 1:1 PKG.HUB CORE X61G MODEL 100A FG', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-184-rm', 'PTT-A 218W*138L KA230/CA125*3/KA230 BCF 1:5 PKG.HUB CORE X61G', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-185-rm', 'PTT-B 98W*146L KA230/CA125*3/KA230 BCF 1:5 PKG.HUB CORE X61G', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-186-rm', 'PTT-C 99W*130L KA230/CA125*3/KA230 BCF 1:5 PKG.HUB CORE X61G', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-189-rm', 'WOODEN PALLET 882W*1324L*120H HEAT TREATMENT)  PKG.HUB CORE X61G COMMON 100(PU) 100A', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-190-rm', 'WOODEN PALLET 800W*1200L*120H (HEAT TREATMENT)  782B/782D', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-191-rm', 'BOX 768W*2247L KA185/CA125/KA185 CF 1:1 MODEL CTR-LH/RH 008', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-194-rm', 'WOODEN PALLET 1120W*1120L*130H (HEAT TREATMENT)  SCREEN 008A', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-195-rm', 'BOX 768W*2247L KA185/CA125/KA185 CF 1:1 SCREEN MODEL 008A VENT SIDE LH', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-196-rm', 'PAD 500W*584L KA185/CA125/KA185 CF 1:64  COMMON MODEL 008A VENT SIDE LH,RH,LH/RH (W40"*L23" ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-196-1-rm', 'PAD 500W*1172L KA185/CS110/KA185 CF 1:64  COMMON MODEL 008A VENT SIDE LH,RH,LH/RH', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-197-rm', 'BOX 768W*2247L KA185/CA125/KA185 CF 1:1 SCREEN MODEL 008A VENT CTR LH/RH มัดเชือก 10 PCS.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-198-rm', 'PTT-A 402W*500L KA185/CA125/KA185 CF 1:192   MODEL 008A VENT CTR LH/RH (มัดเชือก 50 PCS.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-199-rm', 'PTT-B 90W*584L KA185/CA125/KA185 CF 1:384   MODEL 008A VENT CTR LH/RH (มัดยาง 25 Pcs.ตามจุดที่ NK กำหนด)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-200-rm', 'BOX 768W*2247L KA185/CA125/KA185 CF 1:1 SCREEN MODEL 008A VENT SIDE RH', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-201-rm', 'PTT-B  66W*504L KA185/CA125/KA185 CF 1:192 MODEL 008A VENT SIDE RH มัดหนังยาง 25 PCS.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-202-rm', 'PTT-C  73W*504L KA185/CA125/KA185 CF 1:192 MODEL 008A VENT SIDE RH มัดหนังยาง 25 PCS.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-203-rm', 'PTT-A  248W*138L KA125/CA105*3/KA125 BCF 1:90 MODEL 782B/782D (SVR-RNHP-085-2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-204-rm', 'PTT-B  107W*146L KA125/CA105*3/KA125 BCF 1:90 MODEL 782B/782D (SVR-RNHP-086-2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-205-rm', 'PTT-C  107W*130L KA125/CA105*3/KA125 BCF 1:90 MODEL 782B/782D (SVR-RNHP-087-2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-209-rm', 'BOX 942W*1760L KA230/CA125/KA230  CF  SCREEN 100A (PU) PALLET SET MODEL 100A PU', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-211-rm', 'PTT-A  110W*504L KA185/CA125/KA185 CF 1:192 MODEL 008A VENT SIDE RH มัดยาง 25 PCS.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-212-rm', 'PTT-D  296W*584L KA185/CA125/KA185 CF 1:256 MODEL 008A VENT SIDE RH (มัดเชือก 50 PCS.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-214-rm', 'SLEEVE-B1 930W*1741L KA230/CA125*3/KA230 BCF 1:2 L42P (W74"L68"9/16 ผ่า 2 ) ทับรอย 300*1141*300', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-215-1CANCELL-rm', 'BOX 680W*929L KL250/CA125/KL250 CF 1:2 (18PCS/SET) L42P', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-215-2CANCELLED-rm', 'BOX 680W*929L KL250/CA125/KL250 CF 1:2 (18PCS/SET) L42P ***UN CODE 4G/Y12.9/S/20***', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-215-3-rm', 'BOX 680W*929L KL250/CA125/KL250 CF 1:2 (18PCS/SET) L42P ***UN CODE 4G/Y12.9/S/21***', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-215CANCELL-rm', 'BOX 680W*929L KL250/CA125/KL250 CF 1:2 (18PCS/SET) L42P', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-216-rm', 'PAD 363W*519L KL250/CA125/KL250 CF 1:72 L42P (W58"L20"7/16 ผ่า 4 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-218-rm', 'WOODEN PALLET 1115W*1165L*120H (HEAT) 1:1 L42P', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-219 CANCEL-rm', 'BOX 741W*2264L KA125/CA125/KA125 CF 1:32 OUTLET ASSY CTR (RH)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-219-1-rm', 'BOX 741W*2264L KA125/CA125/KA125 CF 1:32 OUTLET ASSY CTR (RH) ADD PRINT SCREEN', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-220-rm', 'PAD 486W*606L KA125/CA125/KA125 CF 1:64 OUTLET ASSY CTR (RH) (W40"L23" 7/8  ผ่า 2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-221-rm', 'WOODEN PALLET 1120W*1120L*130H (HEAT) 1:1  OUTLET CTR RH', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-222 CANCEL-rm', 'BOX 738W*2264L KA125/CA125/KA125 CF 1:44 OUTLET ASSY AS/DR (RH)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-222-1-rm', 'BOX 738W*2264L KA125/CA125/KA125 CF 1:44 OUTLET ASSY AS/DR (RH) PRINT SCREEN', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-223-rm', 'PAD 546W*546L KA125/CA125/KA125 CF 1:264 OUTLET ASSY AS/DR (RH) (W44"L21"1/2 ผ่า 2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-224-rm', 'WOODEN PALLET 1120W*1120L*130H OUTLET ASSY AS/DR (RH)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-225-1-rm', 'CARTON BOX 683W*1245L KL205/CA185/KL205 CF M.L02B/B02A PACK 6 (NT4579-1) COMMON BS-NT2813 มัดละ 10 ชิ้น***Change to joint Stitching***', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-225CANNCELL-rm', 'CARTON BOX 683W*1245L KL205/CA185/KL205 CF M.L02B/B02A PACK 6 (NT4579-1) COMMON BS-NT2813 มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-226-rm', 'PAD 1000W*1128L KA125/CA125/KA125 CF 1:1 PANAL PAD AS MID (W40"L44"7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-226-1-rm', 'PAD 1000W*1128L KA125/CS110/KA125 CF 1:1 PANAL PAD AS MID', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-227-1-rm', 'PTT-B2 111W*486L KA125/CA125/KA125 CF 1:384 MODEL:NT4613 OUTLET CTR (มัดเชือก 50 PCS.) แก้ไขสลับลอนกระดาษ', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-227CANCELL-rm', 'PTT-B2 486W*111L KA125/CA125/KA125 CF 1:384 MODEL:NT4613 OUTLET CTR (มัดเชือก 50 PCS.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-228-rm', 'PTT-B1 163W*546L KA125/CA125/KA125 CF 1:264 MODEL:NT4612 OUTLET AS/DR (มัดเชือก 50 PCS.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-229-rm', 'PTT-D1 144W*519L KL250/CA125/KL250 CF 1:108 MODEL:L42P', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-230-rm', 'PTT-D2 270W*363L KL250/CA125/KL250 CF 1:72 MODEL:L42P', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-231-rm', 'PTT-D3 290W*363L KL250/CA125/KL250 CF 1:72 MODEL:L42P', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-232-rm', 'PTT-D4 130W*363L KL250/CA125/KL250 CF 1:72 MODEL:L42P', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-233-1-rm', 'TRAY ASSY-A 725W*2100L KA230/CA125/KA230 CF 1:15 MODEL:XC2A(099A) ทับรอย 61*603*61 (เน้นค่า +/- ไม่เกิน 1 mm.) (W58"*L82" 11/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-233CANCELLED-rm', 'TRAY ASSY-A 727W*2100L KA230/CA125/KA230 CF 1:15 MODEL:XC2A(099A) ทับรอย 62 (เน้นค่า +/- ไม่เกิน 1 mm.) *603*62 (เน้นค่า +/- ไม่เกิน 1 mm.) (W58"*L82" 11/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-234-rm', 'WOODEN PALLET 1000W*1180L*120H (HEAT) 1:1  PKG.FOR XC2A (099A) AS Ref.BS-NT4486', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-237-rm', 'SLEEVE 875W*1656L KA230/CA125*3/KA230 BCF 1:2 MODEL:L02B/B02A DR (PACK 6) NT4579-1 ทับรอย 300*1056*300 (W36"*L65" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-238-rm', 'PAD 1420W*1060L KA230/CA125*3/KA230 BCF 1:2  MODEL:L02B/B02A DR (PACK 6) NT4579-1 (W58"*L41" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-239-rm', 'SLEEVE 842W*1456L KA230/CA125*3/KA230 BCF 1:0.5 MODEL:L02B/B02A STRG WEEL ทับรอย 300*856*300 (W68"*L57" 3/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-240-rm', 'CARTON BOX  837W*2136L KA230/CA125/KA230 CF 1:1 MODEL:L02B/B02A STRG WEEL มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-241-rm', 'PTT-D2  40W*40T*622L EVA SUPPORT BLACK COLOR (H/N 30-40)  1:32 MODEL:L02B/B02A STRG WEEL', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-242-rm', 'PAD 1292W*860L KA230/CA125*3/KA230 BCF  MODEL:L02B/B02A STRG WEEL  (W52"*L33" 7/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-245-rm', 'TRAY ASSY-A 771W*2100L KA230/CA125/KA230 CF ทับรอย 84*603*84 M.XC2B (W62''''*L82'''' 11/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-246-rm', 'S/B 806W*2100L KA185/CA125/KA185 CF ทับรอย 103*600*103 (W64"*L82" 11/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-247-rm', 'T/B CAP 921W*2486L KA185/CA125*3/KA185 BCF 1:2 PKG FOR P33A', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-248-rm', 'SLEEVE-A 940W*2080L KA230/CA185*3/KA230  BCF 1:2  (W38"L81" 15/16) PKG FOR P33A', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-249-1-rm', 'TRAY ASSY-A 725W*2180L KA230/CA125/KA230 CF 1:15 PKG FOR P33A  ทับรอย 61*603*61 (เน้นค่า +/- ไม่เกิน 1 mm.)(W58"L85" 7/8 ผ่า 2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-249CANCELLED-rm', 'TRAY ASSY-A 727W*2180L KA230/CA125/KA230 CF 1:15  (W58"L85" 7/8 ผ่า 2 ) PKG FOR P33A  ทับรอย 62 (เน้นค่า +/- ไม่เกิน 1 mm.) *603*62 (เน้นค่า +/- ไม่เกิน 1 mm.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-250-rm', 'SLEEVE-L1 1025W*1138L KA230/CA125*3/KA230 BCF 1:1  PKG FOR OUTLET DR 2GN (W42"*L44" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-251-rm', 'SLEEVE-L2 1025W*1138L KA230/CA125*3/KA230 BCF 1:1  PKG FOR OUTLET DR 2GN ทับรอย 513*512  (W42"*L44" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-252-rm', 'SLEEVE-W 1025W*1143L KA230/CA125*3/KA230 BCF 1:1  PKG FOR OUTLET DR 2GN (W42"*L45")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-253-rm', 'PLATE 1142W*1065L KA230/CA185*3/KA230 BCF 1:1  PKG FOR OUTLET DR 2GN (W46"*L41" 15/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-254-rm', 'SLEEVE-A 600W*2375L KA185/CA125*3/KA185 BCF 1:1 (งานเย็บเป็น Set แล้ว)  PKG FOR OUTLET AS 2GN มัดละ 5 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-255-rm', 'PLATE 1078W*1263L KA230/CA185*3/KA230 BCF 1:1  PKG FOR OUTLET AS 2GN (W44"*L49" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-256-rm', 'PTT-C1 541W*1055L KA125/CA125/KA125 CF  MODEL:2GN NT4930-02 OUTLET AS 1:6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-256 HELP-rm', 'PTT-C1 SIZE SHOT 541W*1055L KA125/CA125/KA125 CF  MODEL:2GN NT4930-02 OUTLET AS 1:1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-257-rm', 'PTT-C2 200W*1055L KA125/CA125/KA125 CF  MODEL:2GN NT4930-02 OUTLET AS 1:12', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-257 HELP-rm', 'PTT-C2 SIZE SHOT 800W*1055L KA125/CA125/KA125 CF  MODEL:2GN NT4930-02 OUTLET AS 1:4', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-258-rm', 'PTT-C3 200W*1240L KA125/CA125/KA125 CF  MODEL:2GN NT4930-02 OUTLET AS 1:21', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-258 HELP-rm', 'PTT-C3 SIZE SHOT 800W*1240L KA125/CA125/KA125 CF  MODEL:2GN NT4930-02 OUTLET AS 1:4', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-259-rm', 'PTT-C1 201W*1041L KA125/CA125/KA125 CF  MODEL:2GN NT4930-01 OUTLET DR 1:25', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-259 HELP-rm', 'PTT-C1 SIZE SHOT 804W*1041L KA125/CA125/KA125 CF  MODEL:2GN NT4930-01 OUTLET DR 1:4', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-260-rm', 'PTT-C2 595W*1118L KA125/CA125/KA125 CF  MODEL:2GN NT4930-01 OUTLET DR 1:10', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-260 HELP-rm', 'PTT-C2 SIZE SHOT 595W*1118L KA125/CA125/KA125 CF  MODEL:2GN NT4930-01 OUTLET DR 1:1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-261-rm', 'PTT-C3 346W*1041L KA125/CA125/KA125 CF  MODEL:2GN NT4930-01 OUTLET DR 1:20', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-261 HELP-rm', 'PTT-C3 SIZE SHOT 692W*1041L KA125/CA125/KA125 CF  MODEL:2GN NT4930-01 OUTLET DR 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-262-rm', 'WOODEN PALLET 830W*1246L*120H MODEL X81C (259A) STRG', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-263-rm', 'WOODEN PALLET 862W*1294L*120H MODEL  BOX 100A PU EXPORT : KYUSHU', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-264-rm', 'BOX 930W*1736L KA230/CA125*3/KA230 BCF 1:18 MODEL 100A PU EXPORT KYUSHU', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-265-H-rm', 'TRAY ASSY-C 1338W*75L  KA230/CA125/KA230 CF 1:10 MODEL P33A NHP-1805004-00-02 HELP', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-266-H-rm', 'TRAY ASSY-C 1273W-75L  KA230/CA125/KA230 CF 1:10 MODEL XC2B NHP-1906013-00-02 HELP', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-267-rm', 'SLEEVE-W1 905W*1112L KA185/CA125*3/KA185  BCF 1:1  PKG FOR VENT ASSY J32V CTR. (W38"*L43" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-268-rm', 'SLEEVE-W2 905W*1112L KA185/CA125*3/KA185  BCF 1:1  PKG FOR VENT ASSY J32V CTR. (W38"*L43" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-269-rm', 'SLEEVE-L 905W*1066L KA185/CA125*3/KA185  BCF 1:1  PKG FOR VENT ASSY J32V CTR. (W38"*L41" 16/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-270-rm', 'PLATE  1116W*988L KA230/CA185*3/KA230  BCF 1:1  PKG FOR VENT ASSY J32V CTR. (W46"*L38" 15/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-271-rm', 'TRAY-ASSY B 596W*135L KA125/CA125/KA125 CF 1:60   MODEL (XC2A (099A & P33A) (มัดยาง 25 Pcs.ตามจุดที่ NK กำหนด)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-272-rm', 'TRAY-ASSY C 1338W*75L KA230/CA125/KA230 CF 1:60   MODEL (XC2A (099A & P33A) (มัดยาง 25 Pcs.ตามจุดที่ NK กำหนด)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-273-rm', 'TRAY-ASSY B 597W*135L KA230/CA125/KA230 CF 1:55   MODEL XC2B (มัดยาง 25 Pcs.ตามจุดที่ NK กำหนด)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-274-rm', 'TRAY-ASSY C 1273W*75L KA230/CA125/KA230 CF 1:55   MODEL XC2B (มัดยาง 25 Pcs.ตามจุดที่ NK กำหนด)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-STICKER-1-rm', 'STICKER PVC SIZE: 8.8*8.8 CM. (PRINT 2 COLOR RED/BLACK) L42P CLASS 2.1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-STICKER-2-rm', 'STICKER PVC SIZE: 8.8*8.8 CM. (PRINT 2 COLOR ORANGE/BLACK) L42P CLASS 1.4', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-STICKER-3-rm', 'STICKER PVC SIZE: 8.8*8.8 CM. (PRINT 2 COLOR GREEN/BLACK) L42P CLASS 2.2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHP-STICKER-4-rm', 'STICKER PVC SIZE: 8.8*8.8 CM. (PRINT 1 COLOR BLACK/WHITE) L42P CLASS 9', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHS-011-rm', 'TOP CAP 1249W*1099L KA230/CA185*3/KA230 BCF 1:1 MODEL FIXED SCROLL(4PT00048-1A/3PCO6516-1B)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHS-012-rm', 'BOTTOM  CAP 1249W*1099L KA230/CA185*3/KA230 BCF 1:1 MODEL FIXED SCROLL(4PT00048-1A/3PCO6516-1B)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHS-018 CANCELL-rm', 'WOODEN PALLET 1040*883*135H FUMIGATION 1:1 MODEL FIXED SCROLL(4PT00048-1A/3PCO6516-1B) CANCELLED', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHS-018-1 CANCEL-rm', 'WOODEN PALLET 1040*883*120H FUMIGATION 1:1 MODEL FIXED SCROLL(4PT00048-1A/3PCO6516-1B)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHS-018-2-rm', 'WOODEN PALLET 1040*883*111H(12T) FUMIGATION 1:1 MODEL FIXED SCROLL(4PT00048-1A/3PCO6516-1B)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHS-019 CANCEL-rm', 'TOP CAP 1249W*1099L KA230/CA185*3/KA230 BCF 1:1 MODEL ORBITING SCROLL (2PT00023-1A)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHS-025-rm', 'BOTTOM CAP 1249W*1099L KA230/CA185*3/KA230 BCF 1:1 MODEL ORBITING SCROLL (2PT00023-1A)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHS-026 CANCELL-rm', 'WOODEN PALLET 1040*883*135H  FUMIGATION 1:1 MODEL ORBITING SCROLL (2PT00023-1A) CANCELLED', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHS-026/1 CANCEL-rm', 'WOODEN PALLET 1040*883*120H  FUMIGATION 1:1 MODEL ORBITING SCROLL (2PT00023-1A)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHS-026-2-rm', 'WOODEN PALLET 1040*883*111H(12T)  FUMIGATION 1:1 MODEL ORBITING SCROLL (2PT00023-1A)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHS-028-rm', 'TRAY 1059W*902L  KA230/CA125*3/KA230 BCF 1:1 MODEL 1B', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHS-029-rm', 'PTT-B 52W*832L KA230/CA125*3/KA230 BCF 1:55 MODEL FIXED SCROLL(4PT00048-1A/3PCO6516-1B)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHS-030-rm', 'PTT-C 52W*989L KA230/CA125*3/KA230 BCF 1:52 MODEL FIXED SCROLL(4PT00048-1A/3PCO6516-1B)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHS-031-1-rm', 'TOP PAD 864W*1010L KA185/CA125*3/KA185 BCF 1:1 MODEL ORBITING SCROLL common FIXED SCROLL (W36"xL39" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHS-032-rm', 'TRAY 1067W*923L  KA230/CA125*3/KA230 BCF 1:12 MODEL 1A', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHS-033-rm', 'PTT-B 65W*832L KA230/CA125*3/KA230 BCF 1:72 MODEL FIXED SCROLL(4PT00048-1A/3PCO6516-1A)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNHS-034-rm', 'PTT-C 65W*989L KA230/CA125*3/KA230 BCF 1:60 MODEL FIXED SCROLL(4PT00048-1A/3PCO6516-1A)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSA-001-rm', 'WOODEN PALLET  690W*1170L*120H  MM. (HEAT TRETMENT)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSA-002-rm', 'WOODEN PALLET 690W*1170L*120H   (HEAT TRETMENT) ( 4 WAY)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSA-003-rm', 'WOODEN PALLET 1110W*1138L*120H   (HEAT TRETMENT) MODEL:PSB-MB-B', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSA-004-rm', 'WOODEN PALLET 1016W*1110L*120H   (HEAT TRETMENT) MODEL:PSB-NSB-B/MB-A', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSA-006-rm', 'WOODEN PALLET 689W*1164L*120H   (HEAT TRETMENT) MODEL:WOODEN PALLET OD 689W*1164L*669H', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSA-007-rm', 'SLEEVE 540W*1880L  BI-WALL 40AA ไม่เย็บ', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSA-008-rm', 'WOODEN PALLET 674W*1164L*120H   (HEAT TRETMENT) MODEL:WOODEN PALLET OD 685W*1164L*674H DV', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSA-009-rm', 'SLEEVE ID:626Wx1126Lx540H   OD:650Wx1146Lx540H  BI-WALL 40AA  เย็บเป็น Set แล้ว TD-NSA-1906014-DV-08', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSA-010-rm', 'SLEEVE ID:1135Wx635Lx540H   OD:1155Wx655Lx540H  BI-WALL 40AA  เย็บเป็น Set แล้ว TD-NSA-2012018-DV-00', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSA-011-rm', 'WOODEN PALLET 683W*1173L*120H   (HEAT TRETMENT) MODEL:WOODEN PALLET OD 694W*1173L*674H TD-NSA-2012018-DV-00', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSA-012-rm', 'WOODEN PALLET 1255W*1443L*120H   (HEAT TRETMENT) : PKG. FOR MODEL BC-487_TD-NSA-2111029-00-01', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-002-rm', 'WOODEN PALLET 1150*1010*140 MM. (FUMI)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-003-rm', 'WOODEN PALLET 1149*1161*110H MM. (FUMI) (MODEL T6, X61B)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-007-rm', 'TOP  CAP  1247W*1396L    KA230/CA125*3/KA230   BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-008-rm', 'PARTITION-A  SIZE  631W*1146L KA230/CA125/KA230 C/F 1:21 (T-6) (มัดเชือก 20 PCS.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-009-rm', 'PARTITION-B  SIZE  639W*1146L KA230/CA125/KA230  C/F 1:21 (T-6) (มัดเชือก 20 PCS.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-010-rm', 'T/B CASE SIZE 1374W*1383L   KA230/CA185*3/KA230  BC/F 1:2 (T-6)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-011-rm', 'SLEEVE COVER  SIZE 980W*1539L  KA 230/CA185*3/KA230  BC/F 1:2 (T-6)  (W40"*L60" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-011-1-rm', 'SLEEVE COVER  SIZE 1054W*1539L  KA 230/CA185*3/KA230  BC/F 1:2 (T-6)  (W42"*L60" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-012-rm', 'SLEEVE  ASSY  SIZE  980W*1539L    KA230/CA185*3/KA230  BC/F  1:2 (T-6) (วางสลับ 10 Pcs.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-014-rm', 'T/B CASE 1385W*1405L KA230/CA185*3/KA230 BC/F 1:2 (X61B) , Y4L (EXPORT) PACK 12 มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-015-rm', 'SLEEVE COVER 980W*1548L KA230/CA185*3/KA230 BC/F 1:2 (X61B) ทับรอย 212*1124*212', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-016-rm', 'SLEEVE ASSY 980W*1548L KA230/CA185*3/KA230 BC/F 1:2 (X61B)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-036-rm', 'PARITION-A 3A 1305W*1305L KA185/CA125*3/KA185 BCF 1:9', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-037-rm', 'PARITION-B 3B 104W*1195L KA185/CA125*3/KA185 BCF 1:18', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-038-rm', 'PARITION-C 3C 104W*1195L KA185/CA125*3/KA185 BCF 1:18', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-042-rm', 'WOODEN PALLET  1120W*1150L*110H  MM. (HEAR TREATMENT) SHOE COMP REAR  BRAKE', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-043-rm', 'PTT-A 35W*258L KA125/CA125KA125 C/F  SHOE COMP REAR  BRAKE', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-044-rm', 'PTT-B 35W*444L KA125/CA125KA125 C/F  SHOE COMP REAR  BRAKE', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-045-rm', 'BOX 504W*1301L KA185/CA125/KA185 C/F  SHOE COMP REAR  BRAKE มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-045-H-rm', 'BOX 504W*1301L KA185/CA125/KA185 C/F  SHOE COMP REAR  BRAKE มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-046-rm', 'S/B PAD 255W*359L CA125/CA125/CA125 C/F  MODEL:SHOE COMP REAR  BRAKE', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-046-1-rm', 'S/B PAD 255W*718L CA125/CA125/CA125 C/F  MODEL:SHOE COMP REAR  BRAKE (W42"*L28" 5/16 ผ่า 4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-050-rm', 'TRAY AS-A 537W*1070L KA185/CA125*3/KA185 BCF 1:3 MODEL NISSAN LT27', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-050/1-rm', 'TRAY AS-A 537W*1055L KA185/CA125*3/KA185 BCF 1:12 MODEL NISSAN LT27', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-051-rm', 'TRAY AS-B 546W*1120L KA185/CA125*3/KA185 BCF 1:3 MODEL NISSAN LT27', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-052-rm', 'TOP PAD 1070W*1120L KA230/CA125/KA230 CF 1:1 MODEL NISSAN LT27 (W44"*L44" 1/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-052-1CANCELL-rm', 'TOP PAD 1070W*1120L KA230/CS110/KA230 CF 1:1 MODEL NISSAN LT27', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-052-2-rm', 'TOP PAD 1070W*1120L KI150/CA125/KI150 CF 1:1 MODEL NISSAN LT27 (W44"*L44" 1/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-053-rm', 'WOODEN PALLET  880W*1180L*105H  MM. (HEAT TRETMENT)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-054-rm', 'WOODEN PALLET  750W*750L*125H  MM. (HEAT TRETMENT)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-055-rm', 'PTT-A 1281W*1281L KA185/CA125*3/KA185 BC/F MODEL:DRBA H60A LT-30 (มัดเชือก 10 PCS.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-056-rm', 'PTT-B 92W*1195L KA185/CA125*3/KA185 BC/F MODEL:DRBA H60A LT-30 (มัดเชือก 50 วางสองแถวๆละ 25 PCS)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-057-rm', 'PTT-C 92W*1195L KA185/CA125*3/KA185 BC/F MODEL:DRBA H60A LT-30 (มัดเชือก 50 วางสองแถวๆละ 25 PCS)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSB-059-rm', 'WOODEN PALLET 775W*1045L*114H   (HEAT TRETMENT)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RNSK-001-rm', 'CARTON BOX (OD)350W*700L*225H KA230/CA125*3/KA230 BC/F 1:2 (COL ASSY-STRG,UPR,M20)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RPRV-001/1-rm', 'COVER 540W*540L KA230/CA125*3/KA230 BCF 1:2 MODEL PAPER ROLL NEW DESIGN', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RPRV-002/2-rm', 'ROLL 1060W*410L KA230/CA125*3/KA230 BCF 1:1 MODEL PAPER ROLL NEW DESIGN', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RPRV-005-rm', 'ROLL 645W*645L KL205/CA125*3/KL205 BC/F 1:2 MODEL DIP TUBE', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RPRV-006-rm', 'SUPPORT 155W*1355L KL205/CA125*3/KL205 BCF 1:1 /MODEL DIP TUBE', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RPTR-002-1-rm', 'PAPER TUBE REUSED OD 100 = ID76.2*12T(15T)*120L MM.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RPTR-002-1/AMT-rm', 'PAPER TUBE REUSED OD 100 = ID76.2*15T*120L MM.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RPTR-003-1-rm', 'PAPER TUBE REUSED OD 100 = ID76.2*15T(12T)*90L MM.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RPTR-003-1/AMT-rm', 'PAPER TUBE REUSED OD 100 = ID76.2*15T(12T)*90L MM.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RPTR-004-rm', 'PAPER TUBE REUSED OD 100 = ID76.2*12T(15T)*30L MM.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RPTR-004/AMT-rm', 'PAPER TUBE REUSED OD 100 = ID76.2*12T(15T)*30L MM.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RPTR-015-rm', 'PAPER TUBE REUSED OD 100 = ID76.2*12T*70L MM.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RPTR-016-rm', 'PAPER TUBE REUSED OD 100 = ID76.2*12T*75L MM.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSAN-003-rm', 'PTT-C2  600W*1072L KA185/CA125*3/KA185 BC/F 1:3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSAN-007-rm', 'PTT-F2 600W*1072L KA185/CA125*3/KA185 BC/F 1:8', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSAN-009-rm', 'PTT-F5 816W*1072L KA185/CA125*3/KA185 BC/F 1:6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSAN-010-rm', 'PTT-F6 856W*1072L KA185/CA125*3/KA185 BC/F 1:6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSAN-012-rm', 'PTT-G1 504W*1072L KA185/CA125*3/KA185 BC/F 1:3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSAN-013-rm', 'PAD F4 1072W*1072L  KA185/CA125*3/KA185 BC/F 1:4', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSAN-015-rm', 'BOX SIZE 434W*1023L (DO:214W*294L*227H) KA125/CA125*3/KA125 BC/F PRINT COLOR:BLACK MODEL 872 มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSAN-015-H-rm', 'BOX SIZE 434W*1023L (DO:214W*294L*227H) KA125/CA125*3/KA125 BC/F PRINT COLOR:BLACK MODEL 872 มัดละ 10 ชิ้น NK SUPPORT SB', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSAN-016-rm', 'PARTITION-1A SIZE 184W*200L KA125/CA125*3/KA125 BC/F  MODEL:872', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSAN-017-rm', 'PARTITION-1B SIZE 184W*200L KA125/CA125*3/KA125 BC/F  MODEL:872', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSAN-018-rm', 'PARTITION-1C SIZE 200W*280L KA125/CA125*3/KA125 BC/F  MODEL:872', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-006/AMT-rm', 'SHEET BOARD 1600W*2500L KA230/CA185*3/KA230 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-006/ES1-rm', 'SHEET BOARD 1600W*2500L KA230/CA185*3/KA230 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-006/ES2-rm', 'SHEET BOARD 1600W*2500L KA230/CA185*3/KA230 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-007/AMT-rm', 'SHEET BOARD 1500W*1500L KA185/CA125*3/KA185 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-007/ES1-rm', 'SHEET BOARD 1500W*1500L KA185/CA125*3/KA185 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-007/ES2-rm', 'SHEET BOARD 1500W*1500L KA185/CA125*3/KA185 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-007-2/AMT-rm', 'SHEET BOARD 1400W*1500L KA185/CA125*3/KA185 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-014 DES/AMT-rm', 'SHEET BOARD  1500W*2400L MM  KA230/CA125*3/KA230 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-014 DES/ES1-rm', 'SHEET BOARD  1500W*2400L MM  KA230/CA125*3/KA230 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-014 DES/ES2-rm', 'SHEET BOARD  1500W*2400L MM  KA230/CA125*3/KA230 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-014/AMT-rm', 'SHEET BOARD  1500W*2400L MM  KA230/CA125*3/KA230 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-017 DES-rm', 'SHEET BOARD 1400W*2000L KI150/3M/KI150 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-028 DES/AMT-rm', 'SHEET BOARD  SIZE  1800W*1800L  KA230/CA125/KA230  C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-028 DES/ES1-rm', 'SHEET BOARD  SIZE  1800W*1800L  KA230/CA125/KA230  C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-028 DES/ES2-rm', 'SHEET BOARD  SIZE  1800W*1800L  KA230/CA125/KA230  C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-028/AMT-rm', 'SHEET BOARD  SIZE  1800W*1800L  KA230/CA125/KA230  C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-029 DES-rm', 'FUTURE BOARD SIZE 1300W*1150L*5T', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-030 DES-rm', 'FUTURE BOARD SIZE 1200W*2400L*5T', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-034 DES-rm', 'FUTURE BOARD 1300W*2450L*5T', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-035 DES-rm', 'EVA 1150W*1150L*10T', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-036 DES-rm', 'EVA 1300W*2400L*10T', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-036 DES-1-rm', 'EVA 1000W*1100L*15T  BLACK COLLOR  H/N 60-65 SUPPORT DIE CUT', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-043 DES-rm', 'EVA 1300W*2400L* 5T', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-095-rm', 'PLY WOOD 700W*1300L*15T SUPPORT S/B REEL', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-101-rm', 'SHEET BOARD 1130W*1090L KA125/CA125*3/KA125 BC', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-101-1-rm', 'SHEET BOARD 1130W*1090L KA125/CS110*3/KA125 BC', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-101-AMT-rm', 'SHEET BOARD 1130W*1090L KA125/CA125*3/KA125 BC', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-102-rm', 'SHEET BOARD 1317W*1060L KA230/CA185*3/KA230 BC 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-104-rm', 'SHEET BOARD 1378W*1096L KA125/CA125*3/KA125 BC 1:1 (W56"*L43" 3/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-104-1-rm', 'SHEET BOARD 1378W*1096L KA125/CS110*3/KA125 BC 1:1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-104-2-rm', 'SHEET BOARD 1410W*1096L KA125/CA125*3/KA125 BC 1:1 (W56"*L43" 3/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-105-rm', 'S/B 1500W*1800L KA230/CA125*3/KA230 BCF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-107-rm', 'SHEET BOARD 1380W*823L  KA185/CA125*3/KA185 BC/F (W56"*L32" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-107-1-rm', 'SHEET BOARD 1359W*823L  KA185/CA125*3/KA185 BC/F (W54"*L32" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-114-rm', 'BI-WALL 1260W*1260L 60AA', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-115/AMT-rm', 'SHEET BOARD 1600W*2400L KA230/CA185*3/KA230 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-115/ES1-rm', 'SHEET BOARD 1600W*2400L KA230/CA185*3/KA230 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-115/ES2-rm', 'SHEET BOARD 1600W*2400L KA230/CA185*3/KA230 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-116/AMT-rm', 'SHEET BOARD 1400W*1500L KA185/CA125*3/KA185 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-116/ES1-rm', 'SHEET BOARD 1400W*1500L KA185/CA125*3/KA185 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-116/ES2-rm', 'SHEET BOARD 1400W*1500L KA185/CA125*3/KA185 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-117/AMT-rm', 'SHEET BOARD  1400W*2350L MM  KA230/CA125*3/KA230 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-117/ES1-rm', 'SHEET BOARD  1400W*2350L MM  KA230/CA125*3/KA230 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-117/ES2-rm', 'SHEET BOARD  1400W*2350L MM  KA230/CA125*3/KA230 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-118/AMT-rm', 'SHEET BOARD  SIZE  1600W*1600L  KA230/CA125/KA230  C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-118/ES1-rm', 'SHEET BOARD  SIZE  1600W*1600L  KA230/CA125/KA230  C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-118/ES2-rm', 'SHEET BOARD  SIZE  1600W*1600L  KA230/CA125/KA230  C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-119/AMT-rm', 'SHEET BOARD 1613W*2400L KA230/CA185*3/KA230 BC/F (W64"*L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-119/ES1-rm', 'SHEET BOARD 1613W*2400L KA230/CA185*3/KA230 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-119/ES2-rm', 'SHEET BOARD 1613W*2400L KA230/CA185*3/KA230 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-120/AMT-rm', 'SHEET BOARD 1410W*1500L KA185/CA125*3/KA185 BC/F (W56"*L59" 1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-120/ES1-rm', 'SHEET BOARD 1410W*1500L KA185/CA125*3/KA185 BC/F (W56"*L59" 1/16 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-120/ES2-rm', 'SHEET BOARD 1410W*1500L KA185/CA125*3/KA185 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-120-1/AMT-rm', 'SHEET BOARD 1410W*1500L KA185/CS110*3/KA185 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-121/AMT-rm', 'SHEET BOARD  1410W*2350L MM  KA230/CA125*3/KA230 BC/F (W56"*L92" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-121/ES1-rm', 'SHEET BOARD  1410W*2350L MM  KA230/CA125*3/KA230 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-121/ES2-rm', 'SHEET BOARD  1410W*2350L MM  KA230/CA125*3/KA230 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-122/AMT-rm', 'SHEET BOARD  SIZE  1613W*1600L  KA230/CA125/KA230  C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-122/ES1-rm', 'SHEET BOARD  SIZE  1613W*1600L  KA230/CA125/KA230  C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-122/ES2-rm', 'SHEET BOARD  SIZE  1613W*1600L  KA230/CA125/KA230  C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-123/AMT-rm', 'SHEET BOARD  SIZE  1511W*2400L  KA230/CA125*3/KA230  BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-123/ES1-rm', 'SHEET BOARD  SIZE  1511W*2400L  KA230/CA125*3/KA230  BC/F (W60''''*L94'''' 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-123/ES2-rm', 'SHEET BOARD  SIZE  1511W*2400L  KA230/CA125*3/KA230  BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-123-1/AMT-rm', 'SHEET BOARD  SIZE  1511W*2400L  KA230/CS110*3/KA230  BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-124/AMT-rm', 'SHEET BOARD 1613W*2500L KA230/CA185*3/KA230 BC/F (W64"*L98" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-124/ES1-rm', 'SHEET BOARD 1613W*2500L KA230/CA185*3/KA230 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-124/ES2-rm', 'SHEET BOARD 1613W*2500L KA230/CA185*3/KA230 BC/F (W64"*L98" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-125/ES2-rm', 'SHEET BOARD 1410W*1800L KI150/CA125*3/KI150 BC/F (W56"*L70" 7/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-126/AMT-rm', 'S/B  SIZE 1613W*2500L  KA125/CA125/KA125  C/F (W64"*L98" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-126/ES1-rm', 'S/B  SIZE 1613W*2500L  KA125/CA125/KA125  C/F (W64"*L98" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-126/ES2-rm', 'S/B  SIZE 1613W*2500L  KA125/CA125/KA125  C/F (W64"*L98" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-127/AMT-rm', 'S/B  SIZE 1829W*2500L  KA185/CA125/KA185  C/F (W74"*L98" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-127/ES1-rm', 'S/B  SIZE 1829W*2500L  KA185/CA125/KA185  C/F (W74"*L98" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-127/ES2-rm', 'S/B  SIZE 1829W*2500L  KA185/CA125/KA185  C/F (W74"*L98" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-128/AMT-rm', 'S/B  SIZE 1816W*1800L  KA230/CA125/KA230  C/F (W72"*L70" 7/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-128/ES1-rm', 'S/B  SIZE 1816W*1800L  KA230/CA125/KA230  C/F (W72"*L70" 7/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-128/ES2-rm', 'S/B  SIZE 1816W*1800L  KA230/CA125/KA230  C/F (W72"*L70" 7/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-129/AMT-rm', 'S/B  SIZE 1664W*2500L  KA125/CA125*3/KA125  BC/F (W66"*L98" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-129/ES1-rm', 'S/B  SIZE 1664W*2500L  KA125/CA125*3/KA125  BC/F (W66"*L98" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-129/ES2-rm', 'S/B  SIZE 1664W*2500L  KA125/CA125*3/KA125  BC/F (W66"*L98" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-130/AMT-rm', 'S/B  SIZE 1410W*2600L  KA150/CA125*3/KA150  BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-130/ES1-rm', 'S/B  SIZE 1410W*2600L  KA150/CA125*3/KA150  BC/F (W56"*L102" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-130/ES2-rm', 'S/B  SIZE 1410W*2600L  KA150/CA125*3/KA150  BC/F (W56"*L102" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-131/AMT-rm', 'S/B  SIZE 2258W*2600L  KA185/CA125*3/KA185  BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-131/ES1-rm', 'S/B  SIZE 2258W*2600L  KA185/CA125*3/KA185  BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-132/AMT-rm', 'S/B  SIZE 2258W*2600L  KA230/CA125*3/KA230  BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-132/ES1-rm', 'S/B  SIZE 2258W*2600L  KA230/CA125*3/KA230  BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-133/AMT-rm', 'S/B  SIZE 2258W*3000L  KA230/CA125*3/KA230  BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-133/ES1-rm', 'S/B  SIZE 2258W*3000L  KA230/CA125*3/KA230  BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-134/AMT-rm', 'S/B  SIZE 1613W*2600L  KI150/CA125*3/KI150  BC/F (W64"*L102" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-134/ES1-rm', 'S/B  SIZE 1613W*2600L  KI150/CA125*3/KI150  BC/F (W64"*L102" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-135/AMT-rm', 'S/B  SIZE 1816W*2600L  KA230/CA125/KA230  C/F (W72"*L102" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-135/ES1-rm', 'S/B  SIZE 1816W*2600L  KA230/CA125/KA230  C/F (W72"*L102" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-136/AMT-rm', 'S/B  SIZE 2258W*2600L  KI125/CS110/KI125  C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-136/ES1-rm', 'S/B  SIZE 2258W*2600L  KI125/CS110/KI125 C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-137/AMT-rm', 'S/B  SIZE 1816W*2200L  KA150/CA125/KA150  C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-137/ES1-rm', 'S/B  SIZE 1816W*2200L  KA150/CA125/KA150  C/F (W72"*L86" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-138/ES1-rm', 'S/B  SIZE 1156W*2200L  CA125/CA125/CA125  C/F (W46"*L86" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-139/AMT-rm', 'S/B  SIZE 1613W*2100L  CA125/CA125/CA125  C/F (W64"*L82" 11/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-139/ES1-rm', 'S/B  SIZE 1613W*2100L  CA125/CA125/CA125  C/F (W64"*L82" 11/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-140/AMT CANCELL-rm', 'S/B  SIZE 2120W*3000L  KA125/CA125*3/KA125  BC/F (W84"*L118" 1/8) (ผลิตงาน HAYASHI  HYS-014-1, HYS-015-1, HYS-016-1)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-140/ES1-rm', 'S/B  SIZE 1816W*2600L  CA125/CA125*3/CA125  BC/F (W72"*L102" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-142/ES1-rm', 'S/B  SIZE 2070W*2000L  KL250/CA125/KL250  C/F (W82"*L78" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-143/ES1-rm', 'S/B  SIZE 2070W*2400L  KL205/CA125/KL205  C/F (W82"*L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-144/ES1-rm', 'S/B  SIZE 1816W*2400L  KL250/CA125*3/KL250  BC/F (W72"*L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-145/AMT-rm', 'S/B  SIZE 1816W*2400L  KL205/CA125*3/KL205 BC/F (W72"*L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-145/ES1-rm', 'S/B  SIZE 1816W*2400L  KL205/CA125*3/KL205 BC/F (W72"*L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-145/ES2-rm', 'S/B  SIZE 1816W*2400L  KL205/CA125*3/KL205 BC/F (W72"*L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-146/ES1-rm', 'S/B  SIZE 1918W*2200L  KI150/CA125/CA125 C/F (W76"*L86" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-147/AMT-rm', 'S/B  SIZE 2258W*2600L  KI150/CS110/KI150 C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-147/ES1-rm', 'S/B  SIZE 2258W*2600L  KI150/CS110/KI150 C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-148/AMT-rm', 'S/B  SIZE 2258W*3100L  KA125/CS110*3/KA125 BCF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-148/ES1-rm', 'S/B  SIZE 2258W*3100L  KA125/CS110*3/KA125 BCF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-149/AMT-rm', 'CAP ASSY-A 2258W*2300L KA230/CSP150*3/KA230 BCF 2:1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-150/ES1-rm', 'S/B  SIZE 2000W*2700L  KL175/CA125/KL175 CF (W80"*L106" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-151/ES1-rm', 'S/B  SIZE 1968W*2800L KL125/CA125*3/KL125 BC/F (W78"* L110" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-152/AMT-rm', 'S/B  SIZE 1664W*2400L  KA125/CA125*3/KA125  BC/F (W66"*L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-153/AMT-rm', 'SHEET BOARD 1613W*2400L KA230/CA185*3/KA230 BC/F (W64"*L94" 1/2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-153/ES1-rm', 'SHEET BOARD 1613W*2400L KA230/CA185*3/KA230 BC/F (W64"*L94" 1/2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-154/AMT-rm', 'S/B  SIZE 1613W*2400L  KA125/CA125/KA125  C/F (W64"*L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-154/ES1-rm', 'S/B  SIZE 1613W*2400L  KA125/CA125/KA125  C/F (W64"*L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-155/AMT-rm', 'S/B  SIZE 1613W*2400L  KI150/CA125*3/KI150  BC/F (W64"*L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-155/ES1-rm', 'SHEET BOARD 1613W*2400L KI150/CA125*3/KI150 BC/F (W64''''*L94''''* 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-156/AMT-rm', 'SHEET BOARD 1613W*2400L KA185/CA125*3/KA185 BC/F (W64"*L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-156/ES1-rm', 'SHEET BOARD 1613W*2400L KA185/CA125*3/KA185 BC/F (W64"*L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-157/AMT-rm', 'SHEET BOARD  SIZE  1613W*2400L  KA230/CA125*3/KA230  BC/F (W64''''*L94'''' 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-157/ES1-rm', 'SHEET BOARD  SIZE  1613W*2400L  KA230/CA125*3/KA230  BC/F (W64''''*L94'''' 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-158/AMT-rm', 'S/B  SIZE 1613W*2400L  CS110/CS110/CS110 C/F (W64"*L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-158/ES1-rm', 'S/B  SIZE 1613W*2400L  CS110/CS110/CS110  C/F (W64"*L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-159/AMT-rm', 'S/B  SIZE 2258W*2400L  KI125/CS110/KI125  C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-159/ES1-rm', 'S/B  SIZE 2258W*2400L  KI125/CS110/KI125  C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-160/AMT-rm', 'S/B  SIZE 1613W*2400L  KL205/CA125/KL205  C/F (W64"*L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-160/ES1-rm', 'S/B  SIZE 1613W*2400L  KL205/CA125/KL205  C/F (W64"*L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-161/AMT-rm', 'S/B  SIZE 2258W*3000L  KA185/CS110*3/KA185  BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-161/ES1-rm', 'S/B  SIZE 2258W*3000L  KA185/CA125*3/KA185  BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-162/AMT-rm', 'S/B  SIZE 1613W*2400L  KA230/CA125/KA230  C/F (W64"* L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-162/ES1-rm', 'S/B  SIZE 1613W*2400L  KA230/CA125/KA230  C/F (W64"* L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-163/AMT-rm', 'S/B  SIZE 1613W*2400L  KA150/CA125/KA150  C/F (W64"* L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-163/ES1-rm', 'S/B  SIZE 1613W*2400L  KA150/CA125/KA150  C/F (W64"* L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-164/AMT-rm', 'S/B  SIZE 1613W*2400L  KI150/CA125/KI150 C/F  (W64"*L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-164/ES1-rm', 'S/B  SIZE 1613W*2400L  KI150/CA125/KI150 C/F  (W64"*L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-165/AMT-rm', 'S/B  SIZE 1613W*2400L  KA125/CA125*3/KA125 BC/F  (W64"*L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-165/ES1-rm', 'S/B  SIZE 1613W*2400L  KA125/CA125*3/KA125 BC/F  (W64"*L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-166/AMT-rm', 'S/B  SIZE 1613W*2400L  KA150/CA125*3/KA150 BCF (W64"*L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-166/ES1-rm', 'S/B  SIZE 1613W*2400L  KA150/CA125*3/KA150 BC/F (W64"*L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-167/AMT-rm', 'S/B  SIZE 1613W*2400L  KA185/CA125/KA185 C/F  (W64"*L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-167/ES1-rm', 'S/B  SIZE 1613W*2400L  KA185/CA125/KA185 C/F  (W64"*L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-168/ES1-rm', 'S/B  SIZE 2070W*2400L  KL205/CA185/KL205  C/F (W82"*L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-169/ES1-rm', 'S/B  SIZE 2070W*2400L  KL250/CA125/KL250  C/F (W82"*L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-170/AMT-rm', 'SHEET BOARD 1613W*2800L KA230/CA185*3/KA230 BC/F (W64"*L110" 1/4 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-170/ES1-rm', 'SHEET BOARD 1613W*2800L KA230/CSP150*3/KA230 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-172/ES1-rm', 'S/B  SIZE 1778W*2400L  KL250/CA125/KL250  C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-174/AMT-rm', 'S/B  SIZE 2121W*2800L  KI150/CA125/KI150 C/F  (W84"*L110" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-175/AMT-rm', 'S/B  SIZE 2000W*2000L  KA125/CA125/KA125 C/F  (W80"*L78" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-177/AMT-rm', 'S/B  SIZE 2000W*2600L  KL175/CA125*3/KL175 BC/F  (W80"*L102" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-178/AMT-rm', 'S/B  SIZE 1400W*2800L  KI185/CS110/KI185 C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-179/ES1-rm', 'S/B  SIZE 1715W*2200L  KL125/CA125/KL125 C/F  (W68"*L86" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-180/ES1-rm', 'S/B  SIZE 1206W*2400L  KL150/CA125/KL150 C/F  (W48"*L94" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-181/AMT-rm', 'S/B  SIZE 1715W*1900L  KA125/CA125/KA125 C/F  (W68"*L74" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-224-0005-28-rm', 'S/B 1003W*1108L KA230/CA125/KA230  CF 1:2  M.DRUM BRAKE (W40"*L43" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-224-0005-28-1-rm', 'S/B 1003W*1108L KA230/CS110/KA230  CF 1:2  M.DRUM BRAKE', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-224-0005-28-2-rm', 'S/B 1016W*1108L KA230/CA125/KA230  CF 1:2  M.DRUM BRAKE (W42"xL43"5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-2312040045-1-rm', 'S/B  1410W*1323L KA150/CA125/KA150 CF 3:1 (W56"xL52" 1/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-2312080048-1-rm', 'S/B  1308W*2008L KI185/CA125/KI185 CF 1:3 (W52"*L79" 1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-2314010084-rm', 'S/B 1306W/1268L KL175/CA125/KL175 CF (W52"L49" 15/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-28500-1-rm', 'S/B  902W*684L  KI185/CA125/KI185 CF 1:1 (W36"*L26" 15/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-38812-E-rm', 'S/B 1105W*1167L KA125/CA125*3/KA125  BCF 1:2  M.38812-E (W44"*L46")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-49190-EB700-rm', 'SHEET BOARD 1410W*1748L KA185/CA125/KA185 CF 1 :3 (W56"*L68" 7/8) BOX-01 M.H61B 49180-EB700NO (W56"*L68" 7/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AAA-003-rm', 'S/B 255W*848L KA150/CA125/KA150  C/F 1:2  (PAD AAA-003-1)  (W42"*L33" 7/16 ผ่า4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AAA-005-rm', 'S/B 1810W*1346L KA185/CA105*3/KA185  BCF 1:6 BOX AAA-005  (W72"*L53")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AAA-006-rm', 'S/B 562W*1686L KA185/CA125/KA185  CF 1:1 BOX AAA-006  (W46"*L66" 7/16 ผ่า2) ทับรอย 188*186*188', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AAA-007-rm', 'S/B 716W*1106L KA185/CA125/KA185  CF 1:12  PTT AAA-007  (W58"*L43" 9/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AAA-010-rm', 'S/B 383W*1129L KA125/CA125*3/KA125  BC/F 1:1 ทับรอย 110*163*110  BOX  AAA-010  (W46"*L44" 1/2 ผ่า3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AAM-001-rm', 'S/B 1562W*1105L KA185/CA125*3/KA185 BCF  T/B CASE 1:2 M.FRONT GM1700 (W62"*L43" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AAM-002-rm', 'S/B 1562W*1758L KA185/CA125*3/KA185 BCF  SLEEVE-2 1:10, SLEEVE-3 1:15 M.FRONT GM1700 (W62"*L69" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AAM-003-rm', 'S/B 1320W*880L KA185/CA125*3/KA185 BCF  (PTT-4, 5  1:4) M.FRONT GM1700 (W54"*L34" 11/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AAM-004-rm', 'S/B 1320W*1080L KA185/CA125*3/KA185 BCF  (PTT-6, 7, 8 1:8) LEG 1:20  M.FRONT GM1700 (W54"*L42" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AAM-008-rm', 'S/B 1156W*1294L KA230/CA125/KA230 CF 1:3 BOX  M.SPARE PART B  AAM-008 (W46"*L51")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AAM-012-1-rm', 'S/B 1816W*1900L KA230/CA125/KA230 CF 1:12  BOX AAM-012-1  (W72"*74" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AAM-012CANCELL-rm', '877W*950L KA230/CA125/KA230 CF 1:3 (W36"L37" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AAM-021-rm', '877W*950L KA230/CA125/KA230 CF 1:3 (W36"L37" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AAM-027-rm', '902W*1511L KA230/CA125*3/KA230 BCF 1:1 (W36"*L59" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AAM-028-rm', '1003W*705L KA230/CA125*3/KA230 BCF 1:10 (W40"*L27" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AAM-028-1-rm', '1054W*711L KA230/CA125*3/KA230 BCF 1:10 (W42"*L28")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AAM-029-rm', '1003W*600L KA230/CA125*3/KA230 BCF 1:10 (W40"*L23" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AAM-029-1-rm', '1054W*604L KA230/CA125*3/KA230 BCF 1:10 (W42"*L23" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AAM-030-rm', '1511W*702L KA230/CA125*3/KA230 BCF 1:8 (W60"*L27" 11/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AAM-030-1-rm', '1511W*706L KA230/CA125*3/KA230 BCF 1:8 (W60"*L27" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AAM-16-rm', 'S/B 1094W*1761L  KA230/CA125*3/KA230 BCF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AHB-001-rm', 'S/B 1003W*720L  CA125/CA125/CA125 CF  1:6  PAD JAZZ  (W40"*L28" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AHB-002-rm', 'S/B 704W*1166L  KA230/CA125/KA230 CF  1:1 MODEL P703 (W56"*L45" 15/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AHB-003-rm', 'S/B 730W*1166L  KA230/CA125/KA230 CF  1:1 MODEL P703 (W58"*L45" 15/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AHB-004-rm', 'SB SIZE 1054W*1559L  KA 230/CA185*3/KA230  BC/F 1:1 (P703) (W42"*L61" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AHT-001-rm', 'S/B 1191W*1256L  KA125/CA125*3/KA125  BC/F  1:1  TOP CAP/ TRAY  COMMON 4 MODEL Z92, Z94, A3E, AP3 (W48"*L49" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AHT-003-rm', 'S/B 956W*1026L  KA185/CA125/KA185  C/F  1:1  PAD COMMON 4 MODEL Z92, Z94, A3E, AP3 (W40"*L40" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AHT-004-rm', 'S/B 840W*2010L  KA125/CA125*3/KA125  BC/F  1:1  SLEEVE COMMON 4 MODEL Z92, Z94, A3E, AP3 (W68"*L79" 3/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AIR-001-1-rm', 'SHEET BOARD 1525W*1454L KA125/CS110*3/KA125 BC/F (AIR SYSTEM)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AIR-001-2-rm', 'SHEET BOARD 1525W*1454L KA125/CA110*3/KA125 BC/F (AIR SYSTEM)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AIR-001-2/AMT-rm', 'SHEET BOARD 1525W*1454L KA125/CS110*3/KA125 BC/F (AIR SYSTEM)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AIR-003-rm', 'SB 902W*1504L KA125/CA125/KA125 CF 1:1 (AST-051) (W36"*L59"1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AIR-004-rm', 'SB 820W*556L KA125/CA125*3/KA125 BCF 1:4 (AST-052) (W66"*L21"15/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AIR-005-rm', 'SB 820W*996L KA125/CA125*3/KA125 BCF 1:4 (AST-052) (W66"*L39"1/4 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AIR-006-rm', 'SB 810W*1032L KA125/CA125/KA125 CF 1:2 (AST-051) (W66"*L40"5/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AKE-001-rm', 'S/B 1380W*974L KA230/C110*3/KA230 BCF 1:4', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AKE-002-rm', 'S/B 1190W*962L KA185/CA125*3/KA185 BCF 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AKE-002-1-rm', 'S/B 595W*962L KA185/CA125*3/KA185 BCF 1:1 (W48"*L37" 7/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AKE-002-2-rm', 'S/B 603W*962L KA185/CA125*3/KA185 BCF 1:1 (W48"*L37" 7/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AKE-003-rm', 'S/B 1000W*1056L KA185/CA125*3/KA185 BCF 1:6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AKE-003-1-rm', 'S/B 500W*1056L KA185/CA125*3/KA185 BCF 1:3 (W40"*L41" 9/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AKE-003-2-rm', 'S/B 501W*1056L KA185/CA125*3/KA185 BCF 1:3 (W40"*L41" 9/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AKE-004-rm', 'S/B 855W*978L KA230/CA185*3/KA230 BCF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AKE-004-1-rm', 'S/B 857W*978L KA230/CA185*3/KA230 BCF (W68"*L38" 9/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AKE-005 CANCELL-rm', 'S/B 890W*1036LL KA125/CA125/KA125 CF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AKE-005-1-rm', 'S/B 902W*1036L KA125/CA125/KA125 CF 1:5 (W36"*L40" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AKE-006-rm', 'S/B 855W*962L KA185/CA125*3/KA185 BCF PTT-3F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AKE-006-1-rm', 'S/B 857W*962L KA185/CA125*3/KA185 BCF PTT-3F (W68"*L37" 7/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AKE-007-rm', 'S/B 908W*1041L KA230/CA125*3/KA230 BCF  (LEG AKE-017)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AKE-007-1-rm', 'S/B 953W*1041L KA230/CA125*3/KA230 BCF  (LEG AKE-017) (W38"*L41")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AKE-007-2-rm', 'S/B 953W*1041L KA230/CS110*3/KA230 BCF  (LEG AKE-017)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AKE-014-rm', 'S/B  1306W*1312L  KA150/CA125*3/KA150  BCF ทับรอย 108*1090*108  (W52"*L51" 11/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AKE-COM-01-rm', 'S/B 1714W*1056L KA185/CA125*3/KA185 BCF M.E2XX PACK 100 AKE-019 (W68"*L41" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-ART-005/1-rm', 'S/B 1042W*1397L KA230/CA125/KA230 CF (W42"*L55")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AST-020-rm', 'SHEET BOARD 1285W*1275L KA150/CA125/KA150 C/F (W52"*L50" 3/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AST-046-rm', 'S/B 832W*602L KA125/CA125*3/KA125 BCF 1:2 BS-AST-046 (W66"*L23" 3/4 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AST-046/2-rm', 'S/B 1257W*990L KA125/CA125*3/KA125 BCF 1:2 BS-AST-046/2 (W50"*L38" 16/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AUT-006-rm', 'S/B  1032W*1830L  KA185/CA125/KA185  CF  1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AUT-006-1-rm', 'S/B  1054W*1830L  KA185/CA125/KA185  CF  1:2 (W42"*L72" 1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AUT-007-rm', 'S/B  872W*1830L  KA185/CA125/KA185  CF  1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AUT-007-1-rm', 'S/B  902W*1830L  KA185/CA125/KA185  CF  1:2 (W36"*L72" 1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AUT-008-rm', 'SB 731W*1275L KA185/CA125*3/KA185 BC/F 1:2 (BOX) ทับรอย 273*185*273 MODEL PKG.FOR SEAT RAIL PART W60"L50"1/4 ผ่า2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AUT-009-rm', 'S/B  1063W*2170L  KA185/CA125/KA185  CF  1:3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AUT-009-1-rm', 'S/B  1054W*2170L  KA185/CA125/KA185  CF  1:3 (W42"*L85" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AUT-010-rm', 'SB 679W*705L KA185/CA125*3/KA185 BC/F 1:4 (PTT-B1) MODEL PKG.FOR SEAT RAIL PART W54"L27"13/16 ผ่า2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AUT-011-rm', 'SB 679W*548L KA185/CA125*3/KA185 BC/F 1:4 (PTT-B2) MODEL PKG.FOR SEAT RAIL PART W54"L21"5/8 ผ่า2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AUT-011-1-rm', 'SB 679W*1098L KA185/CS110*3/KA185 BC/F 1:4 (PTT-B2) MODEL PKG.FOR SEAT RAIL PART', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AUT-012-rm', 'SB 1345W*950L KA185/CS110*3/KA185 BC/F 1:1 (BOTTOM CAP) MODEL PKG.FOR SEAT RAIL PART', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-AUT-013-rm', 'SB 1135W*530L KA230/CA125*3/KA230 BC/F 1:2 W46"xL20" 7/8  (PALLET ASSY-B) MODEL PKG.FOR SEAT RAIL PART', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BEISHIN-013-PTT-A-rm', 'S/B 400W*1146L  CA125/CA125/CA125 CF 1:4 (W48"*L45" 1/8 ผ่า 3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BEISHIN-013-PTT-B-rm', 'S/B 400W*1026L  CA125/CA125/CA125 CF 1:4 (W48"*L40" 7/16 ผ่า 3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BEISHIN-017-rm', 'S/B 1062W*1120L CA125/CA125/CA125 CF  1:12', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BEISHIN-020-rm', 'SHEET BOARD  923W*1254L MM  KA125/CA125*3/KA125 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BEISHIN-024-rm', 'SHEET BOARD 741W*1123L KA125/CA125/KA125 C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BEISHIN-025-rm', 'SHEET BOARD 1062W*1120L CA125/CA125/CA125 C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BEISHIN-026-rm', 'SHEET BOARD 1106W*1062L CA125/CA125/CA125 C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BEN-001-rm', 'S/B 1359W*1796L KA230/CA125*3/KA230 BCF 1:4 MODEL BEN-002 PTT-A (W54"*L70" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BEN-002-rm', 'S/B 1359W*1193L KA230/CA125*3/KA230 BCF 1:2 MODEL BEN-002 PTT-B (W54"*L47")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BEN-003-rm', 'S/B 1163W*1453L KA230/CA185*3/KA230 BCF 1:1 MODEL BEN-002  TOP CAP (W48"*L57" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BEN-004-rm', 'S/B 1308W*2159L KA230/CA185*3/KA230 BCF 1:1 MODEL BEN-002  SLEEVE-B1 (W52"*L85")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BEN-005-rm', 'S/B 1308W*1780L KA230/CA185*3/KA230 BCF 1:1 MODEL BEN-002  SLEEVE-B2 (W52"*L70" 1/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BEN-006-rm', 'S/B 1308W*1133L KA230/CA185*3/KA230 BCF 1:1 MODEL BEN-002  SLEEVE-B3 (W52"*L44" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BEN-007-rm', 'S/B 1163W*1453L KA230/CA185*3/KA230 BCF 1:1 MODEL BEN-002  BOTTOM CAP (W48"*L57" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BEN-008-rm', 'S/B 1144W*1382L KA230/CA185*3/KA230   BC/F  (W46"*L54" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BOX PACKAGE FOR 811-rm', 'S/B 1596W*1539L KA230/CA125*3/KA230 BCF  1:1 (W64"*L60" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BOXPUMP-rm', 'SHEET BOARD 1252W*1114L KA125/CA125*3/KA125  BCF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BOXPUMP-1-rm', 'SHEET BOARD 830W*1114L KA125/CS110*3/KA125  BCF : BOX PUMP M&M  W66"xL43" 7/8 ผ่า2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BS-14PC0081-rm', 'S/B 250W*682L CA125/CA125/CA125 C/F 1:2  PAD BS-14PC0081  (W40"*L26" 7/8 ผ่า 4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BS-14PC0081-1-rm', 'S/B 504W*682L CS110/CS110/CS110 C/F 1:4  PAD BS-14PC0081', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BS-2312080060CANCEL-rm', 'S/B 426W*1986L  KI185/CA125/KI185 CF 1:4 (W68"*L78" 3/16 ผ่า 4) ทับรอย 150*126*150  (BS-2312080060 M.PBB-04477-E0180)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BS-2313030003-CANCEL-rm', 'S/B 1257W*1472L KA150/CA125*3/KA150   BCF (W50"*L57" 16/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BS-AKE-006-1-rm', 'S/B 1562W*1440L CA125/CA125/CA125 CF (W62''''*L56'''' 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BS-AKE-006-2-rm', 'S/B 1613W*1062L KI150/CA125/KI150 CF 1:4  BOX (W64"L41" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BS-AKE-006CANCELL-rm', 'S/B 1613W*1092L KI150/CA125/KI150 CF W64"L42" 16/16', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BSA-SBSM-012-rm', 'S/B 290W*340L  KA125/CA125/KA125 CF 1:3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BSA-SBSM-012/1-rm', 'S/B 290W*264L  KA125/CA125/KA125 CF 1:3 (W48"*L10" 3/8 ผ่า 4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BSA-SBSM-012/1-1-rm', 'S/B 302W*264L  KA125/CA125/KA125 CF 1:3 (W48"L10" 3/8)  ผ่า 4', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BSA-SBSM-012/1-2-rm', 'S/B 288W*264L  KA125/CA125/KA125 CF 1:3 (W46"L10" 3/8)  ผ่า 4', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BSA-SBSM-012/1-3-rm', 'S/B 288W*528L  KA125/CA125/KA125 CF 1:6 (W46"L20" 13/16)  ผ่า 4', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BSA-SBSM-012/1-4-rm', 'S/B 1160W*1054L  KA125/CS110/KA125 CF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BSA-SBSM-012/1-5-rm', 'S/B 560W*1020L KA125/CS110/KA125 CF 1:12 (W46"xL40" 3/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BSA-SBSM-012-1-rm', 'S/B 302W*340L  KA125/CA125/KA125 CF 1:3 (W48"L13" 3/8)  ผ่า 4', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BSA-SBSM-012-2-rm', 'S/B 288W*340L  KA125/CA125/KA125 CF 1:3 (W46"L13" 3/8)  ผ่า 4', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BSA-SBSM-012-3-rm', 'S/B 288W*680L  KA125/CA125/KA125 CF 1:6 (W46"L26" 13/16)  ผ่า 4', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BSA-SBSM-012-4-rm', 'S/B 1160W*680L  KA125/CS110/KA125 CF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BSA-SBSM-012-5-rm', 'S/B 560W*660L KA125/CS110/KA125 CF 1:12  (W46"xL25" 16/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BS-FJA-006-rm', 'S/B 832W*1652L  KA125/CA125*3/KA125 BCF 1:2 (W66"*L65" 1/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BS-FJA-006/1-rm', 'S/B 1145W*920L  KA125/CA125/KA125 CF 1:4 (W46"*L36" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BS-FJA-008-rm', 'S/B 280W*702L CA125/CA125/CA125 C/F 1:2  PAD BS-FJA-008 (W46"*L27" 11/16 ผ่า 4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BS-FJA-009-rm', 'S/B 1308W*1252L  KA185/CA125*3/KA185 BCF 1:3 (W52"*L49" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BS-FJA-020-1-rm', 'S/B 1308W*1130L CA125/CA125/CA125 C/F 1:12  PAD BS-FJA-020-1  (W52"*L44" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BS-HOP-045-rm', 'S/B 788W*1174L KA150/CA125*3/KA150 BCF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BS-HPS-002-rm', 'S/B  714W*793L  KA185/CA125/KA185 CF 1:1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BS-JT012-rm', 'S/B 1070W*1080L KA230/CA125*3/KA230 BCF  1:1 (W44"*L42" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BS-JTK-016-rm', 'S/B 1359W*1150L KA230/CA125*3/KA230  BCF 1:3 (W54"*L45" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BS-JTK-017-rm', 'S/B 1308W*1150L KA230/CA125*3/KA230  BCF 1:6 (W52"*L45" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BS-KTF-066-rm', 'S/B 1260W*1120L  KI150/CA125/KI150  CF 1:2  PAD BS-KTF-066', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BS-KTF-093-rm', 'S/B 2258W*2350L  KI125/CA125/KI125 CF  1:3 PAPER PAD-A2 MODEL 2ZJ', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BS-KTF-094-rm', 'S/B 2258W*1770L  KI125/CA125/KI125 CF  1:3 PAPER PAD-A3 MODEL 2ZJ', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BS-NT2759-rm', 'S/B 781W*712L  KL205/CA185/KL205  C/F 1:2 PTT-A L12F (DR) (W62"*L28" 1/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BS-NT2760-rm', 'S/B 501W*528L  KL205/CA185/KL205  C/F 1:3 PTT-B L12F (DR) (W40"*L20" 13/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BS-NT2844-rm', 'S/B 603W*716L  KL205/CA185/KL205  C/F 1:3 PTT-A L12F (AS) (W48"*L28" 1/4 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BS-NT2845-rm', 'S/B 628W*716L  KL205/CA185/KL205  C/F 1:3 PTT-B L12F (AS) (W50"*L28" 1/4 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BS-NT2846-rm', 'S/B 654W*532L  KL205/CA185/KL205  C/F 1:4 PTT-C L12F (AS) (W52"*L21" ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BS-P-B01-004/CASE-rm', 'S/B 725W*995L  KA125/CA125/KA125 CF 1:1 (W58"*L39" 3/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-BS-SUN-003-rm', 'S/B 431W*1236L KA185/CA125/KA185 C/F 1:1 (W36"xL48"11/16 ผ่า2) ทับรอยด้าน W 129*173*129', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CB0240240180H-rm', 'S/B 1405W*1042L KA125/CA125*3/KA125 BCF  1:3 (BOX S)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CB0240240180H-1-rm', 'S/B 1410W*1032L KA125/CA125*3/KA125 BCF  1:3 (BOX S) (W56"*L40" 11/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CB0260500300H-rm', 'S/B 1190W*1592L KA125/CA125*3/KA125 BCF  1:2 (BOX L) (W48"*L62" 11/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CB0260500300H-1-rm', 'S/B 1207W*1592L KA125/CA125*3/KA125 BCF  1:2 (BOX L) (W48"*L62" 11/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CB0260500300H-2-rm', 'S/B 1207W*1592L KA125/CS110*3/KA125 BCF  1:2 (BOX L)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CB0260500300H-3-rm', 'S/B 590W*1592L KA125/CS110*3/KA125 BCF  1:1 (BOX L) W48:xL62" 11/16 ผ่า2 ทับรอยด้าน W 138*314*138 mm.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CB0365270160-rm', 'S/B 1282W*1289L  KA230/CA125*3/KA230  BCF 1:3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CB0365270160-1-rm', 'S/B 1273W*1289L  KA230/CA125*3/KA230  BCF 1:3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CB0365270160-2-rm', 'S/B 1308W*1286L  KA230/CA125*3/KA230  BCF 1:3 (W52"*L50" 11/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CB0365540160-rm', 'S/B 1046W*1829L KA230/CA125*3/KA230 BCF 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CB0365540160-1-rm', 'S/B 1038W*1829L KA230/CA125*3/KA230 BCF 1:2 (W42"*L72" 1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CB0365540160-2-rm', 'S/B 1054W*1826L KA230/CA125*3/KA230 BCF 1:2 (W42"*L71" 15/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CB0365540320-1-rm', 'S/B 1358W*1829L KA230/CA125*3/KA230 BCF 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CB0365540320-2-rm', 'S/B 1358W*1826L KA230/CA125*3/KA230 BCF 1:2 (W54"*L71" 15/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CB-TYD001-rm', 'SHEET BOARD 1006W*1871L KA185/CA125*3/KA185 BCF( W40"xL73" 11/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CB-TYD001-1CANCELLED-rm', 'SHEET BOARD 498W*1871L KA185/CA125*3/KA185 BCF ( W40"xL73" 11/16 ผ่า2) ทับรอยด้าน W 188.5*121*188.5', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CB-TYD001-2-rm', 'SHEET BOARD 499W*1871L KA185/CA125*3/KA185 BCF ( W40"xL73" 11/16 ผ่า2) ทับรอย189*121*189', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CC0002800A-rm', 'S/B 1258W*1402L  KI150/CA125*3/KI150 BCF 6:1 (W50"*L55" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CC0002800A-1-rm', 'S/B 624W*930L  KI150/CA125*3/KI150 BCF 6:1 (W50"*L36 5/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CC0002860A-rm', 'S/B 1116W*1452L  KA150/CA125/KA150 CF 1:9 (W46"*L57" 3/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CC0002860A-1-rm', 'S/B 372W*484L  KA150/CA125/KA150 CF 1:1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CC0002861A-rm', 'S/B 628W*760L  KA150/CA125/KA150 CF 1:8 (W50"*L29" 15/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CC0002862A-rm', 'S/B 1136W*1140L  KA150/CA125/KA150 CF 1:24 (W46"*L44" 15/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CC0002937A-rm', 'S/B 902W*1260L  KA230/CA125/KA230 CF 1:2 (W36"*L49" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CC0002937A-1-rm', 'S/B 902W*630L  KA230/CA125/KA230 CF 1:1 (W36"*L24" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CC0002938A-1-rm', 'S/B 1054W*972L KA230/CA125/KA230  CF 1:8 (W42"*L38" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CC0002938ACANCELL-rm', 'S/B 1052W*972L KA230/CA125/KA230  CF 1:8 (W42"*L38" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CC0002940A-rm', 'S/B 1054W*972L  KA230/CA125/KA230 CF 1:4 (W42"*L38" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-COMMON-001-rm', 'S/B 1054W*423L  KA150/CA125/KA150 CF 1:4 (COMMON AST-020, SRI-003, FTR-002, AAA-003, BEP-002, SCR-005)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-COMMON-SCR-001-rm', 'S/B 1308W*640L  KA185/CA125*3/KA185 BCF USE RSCR-001, RSCR-003, RSCR-005  (W52"*L25" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-COM-NHP-019/020-rm', 'S/B 1105W*1148L  KA125/CA125/KA125 CF   (W44"*L45" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-COM-NHP-019/020-1-rm', 'S/B 1105W*1148L  KA125/CS110/KA125 CF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CYC-007-rm', 'S/B 1205W*1200L KA230/CA185*3/KA230 BCF 1:1 ทับรอย 2 ด้าน 4 เส้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-CYC-017-1-rm', 'S/B 459W*1965L KA230/CA185*3/KA230 BCF 1:1 ทับรอย 50*953*962 (W38"*L77" 3/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-D-007-rm', 'S/B 1410W*2067L  KA230/CA125*3/KA230 BCF 1:2 MODEL: BOX D-007 (W56"*L81" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DAI-001/002-1-rm', 'S/B  1257W*960L CA105/CA105/CA105 CF 1:36  (W50"L37" 13/16 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DAI-001/002CANCELL-rm', 'S/B  1257W*480L CA105/CA105/CA105 CF 1:8  (W50"L18" 15/16 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DAN-001-rm', 'S/B 670W*1086L KA230/CA125*3/KA230 BC/F 1:1 Common PTT  M.PKG.AL X60A Pack 28 / Pack 36 (W54"*L42" 3/4 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DAN-001-1-rm', 'S/B 670W*1086L KA150/CA125*3/KA150 BC/F 1:1 Common PTT  M.PKG.AL X60A Pack 28 / Pack 36 / P32R P.45 (W54"*L42" 3/4 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DAN-002-rm', 'S/B 679W*840L KA230/CA125*3/KA230 BC/F  1:4  PTT-A   M.PKG. FOR AXEL RR M220 CVJ (PACK 1) (W54"*L33" 1/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DAN-003-rm', 'S/B 679W*840L KA230/CA125*3/KA230 BC/F  1:8  PTT-B   M.PKG. FOR AXEL RR M220 CVJ (PACK 1) (W54"*L33" 1/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DAN-004-rm', 'S/B 953W*1103L KA230/CA125*3/KA230 BC/F  1:1  BOX  DRUM BRAKE ASSY (PACK 1) (W38"*L43" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DAN-005-rm', 'S/B 1156W*1114L KA150/CA125*3/KA150 BC/F  1:1  PAD-A+B M.T6 DIFF CASE EDL M300(PACK 48) (W46"*L43" 7/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DAN-006-rm', 'S/B 720W*1440L KA230/CA185*3/KA230 BC/F  1:8 PTT-02,PTT-03 MODEL:DV.CARRIER-T6(PACK1) DAN-0904008-00-06', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DAN-006-1-rm', 'S/B 720W*720L KA230/CA185*3/KA230 BC/F (W58"xL28"3/8 ผ่า 2) 1:4 PTT-02,PTT-03 MODEL:DV.CARRIER-T6(PACK1) DAN-0904008-00-06', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DAN-007-rm', 'S/B 745W*2230L KA230/CA185*3/KA230 BC/F    PKG. FOR AXEL RR M220 CVJ (PACK 1) (W60"*L87" 13/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DAN-008-rm', 'S/B 654W*1114L KA185/CA125*3/KA185 BC/F  1:3  PTT-A M.T6 DIFF CASE EDL M300(PACK 48) (W52"*L43" 7/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DAN-009-rm', 'S/B 1375W*1370L KA185/CA125*3/KA185 BC/F  1:1  M.T6 DIFF CASE EDL M300(PACK 48) (W56"*L53" 15/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DAN-010-rm', 'S/B 1094W*1094L KA230/CA125*3/KA230 BC/F  1:1  M.T6 DIFF CASE EDL M300(PACK 48) (W44"*L43" 1/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DAN-011-rm', 'S/B 953W*1103L KA230/CA125*3/KA230 BC/F  1:1  M.BOX DRUM BRAKE (DAN-RY-011) (W38"*L43" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DAN-012-rm', 'S/B 832W*500L KA230/CA185*3/KA230 BC/F  1:4 (BOTTOM PLATE) (DAN-RY-006) (W66"*L19" 11/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DAN-013-rm', 'S/B 840W*854L KA230/CA185*3/KA230 BC/F  1:2 (BOX-A MODEL:DV.CARRIER T-6 PACK 1) (W68"*L33" 5/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DAN-014-rm', 'S/B 840W*740L KA230/CA185*3/KA230 BC/F  1:2 (BOX-B MODEL:DV.CARRIER T-6 PACK 1) (W68"*L29" 3/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DAN-015-rm', 'SHEET BOARD 857W*1025L KA150/CA125*3/KA150 BC/F (W68"*L40" 3/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DAP-001-rm', 'S/B 1439W*1744L KA230/CA185*3/KA230 BCF (W58" * L68" 11/16) ทับรอย 2 ด้าน 4 เส้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DAP-002-rm', 'S/B 1000W*1157L KA230/CA185*3/KA230 BCF (W40" * L45" 1/2) SLEEVE-2A', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DAP-003-rm', 'S/B 1000W*1039L KA230/CA185*3/KA230 BCF (W40" * L40" 15/16) SLEEVE-2B', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DAP-004-rm', 'S/B 1000W*1467L KA230/CA185*3/KA230 BCF (W40" * L57" 3/4) SLEEVE-2C', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DAP-005-rm', 'S/B 1000W*1349L KA230/CA185*3/KA230 BCF (W40" * L53" 1/8) SLEEVE-2D', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DAP-006-rm', 'S/B 1114W*1424L KA230/CA185*3/KA230 BCF (W46" * L56" 1/16) PLATE', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DAP-007-rm', 'S/B 1359W*1424L KA185/CA125*3/KA185 BCF (W54" * L56" 1/8) LEG', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DIC-001-rm', 'S/B 705W*676L  KA230/CA125*3/KA230 BC/F 1:2 COVER-C1 16KB (W56"*L26" 5/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DIC-002-rm', 'S/B 781W*676L  KA230/CA125*3/KA230 BC/F 1:2 COVER-C2 16KB (W62"*L26" 5/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DIC-003-rm', 'S/B 902W*876L  KA230/CA125*3/KA230 BC/F 1:6 COVER-C3 16KB (W36"*L34" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DIC-004-rm', 'S/B 1140W*1258L KA185/CA125*3/KA185 BC/F 1:6 COVER M.YC DV (W46"*L49" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DIC-COM-01-rm', 'S/B 1410W*2200L KA230/CA125*3/KA230 BCF (W56"*L86" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DIC-COM-02-rm', 'S/B 1410W*2200L KA185/CA125*3/KA185 BCF (W56"*L86" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DID-001-rm', 'S/B 1090W*1210L KA230/CA125/KA230  C:F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DIT-001-rm', 'SB SIZE 1105W*954L  KA185/CA125*3/KA185  BCF 1:1 SUPPORT WDES-DIT-1075W-924L(TRAY)  MODEL PACK150 DIT-001 (W44"xL37" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DIT-002-rm', 'SB SIZE 1105W*1069L  KA185/CA125*3/KA185  BCF 1:1 SUPPORT WDES-DIT-1039W-1039L(TRAY)  MODEL PACK900 DIT-002 (W44"xL42" 1/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DTR-001-rm', 'S/B 1120W*2201L KA230/CA125*3/KA230  BCF 1:0.5   M.BOX DTR-001  J36T REAR  ทับรอย 385*350*385 (W40"*L65" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DTR-002-rm', 'S/B 977W*1660L KA185/CA125*3/KA185  BCF TOP CAP DTR-002 1:2 (W40"*L65" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-DTR-003-rm', 'S/B 1077W*1422L KA185/CA125*3/KA185  BCF SLEEVE-B1 DTR-003 1:1 (W44"*L56")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-E012-rm', 'S/B 953W*1440L KA230/CA125/KA230 CF 1:2 MODEL:BOX RF-TEN (W38"*L56" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-001-rm', 'S/B 580W*1752L KA230/CA125*3/KA230 BCF 1:1 MODEL CONV & PIP ASY EXH(PACK 18 ) PTT-3A', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-002-rm', 'S/B 580W*1752L KA230/CA125*3/KA230 BCF 1:1 MODEL CONV & PIP ASY EXH(PACK 18 ) PTT-3B', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-003-rm', 'S/B 580W*1752L KA230/CA125*3/KA230 BCF 1:1 MODEL CONV & PIP ASY EXH(PACK 18 ) PTT-3C', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-004-rm', 'S/B 1381W*1065L KA230/CA125*3/KA230 BCF 1:1 MODEL CONV & PIP ASY EXH(PACK 18 ) PTT-3D (W56"*L41" 15/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-005-rm', 'S/B 860W*1065L KA230/CA125*3/KA230 BCF 1:1 MODEL CONV & PIP ASY EXH(PACK 18 ) PTT-3E', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-006-rm', 'S/B 1320W-2002L KA230/CA125*3/KA230 BCF 1:1 MODEL CONV & PIP ASY EXH(PACK 18 ) TOP CAP ทับรอย 2 ด้าน 4 เส้น(W54"*L78" 7/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-007-rm', 'S/B 1320W-2002L KA230/CA125*3/KA230 BCF 1:1 MODEL CONV & PIP ASY EXH(PACK 18 ) BOTTOM CAP ทับรอย 2 ด้าน 4 เส้น (W54"*L78 7/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-008-rm', 'S/B 941W*758L KA185/CA125*3/KA185 BCF 1:1 MODEL PKG. FOR GM52094720 (FAE-015) (W38"*L29" 7/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-009-rm', 'S/B 590W*1415L KA185/CA125*3/KA185 BCF 1:2 MODEL PKG. FOR GM52094720 (FAE-015) (W48"*L55" 3/4 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-010-rm', 'S/B 590W*1415L KA185/CA125*3/KA185 BCF 1:2 MODEL PKG. FOR GM52094720 (FAE-015) (W48"*L55" 3/4 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-011-rm', 'S/B 1024W*1415L KA185/CA125*3/KA185 BCF 1:1 MODEL PKG. FOR GM52094720 (FAE-015) (W42"*L55" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-012-rm', 'S/B 1024W*1415L KA185/CA125*3/KA185 BCF 1:1 MODEL PKG. FOR GM52094720 (FAE-015) (W42"*L55" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-013-rm', 'S/B 590W*752L KA185/CA125*3/KA185 BCF 1:6 MODEL PKG. FOR GM52094720 (FAE-015)(W48"*L29" 5/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-014-rm', 'S/B 728W*1395L KA185/CA125*3/KA185 BCF 1:6 MODEL PKG. FOR GM52094720 (FAE-015)(W58"*L54" 15/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-015-rm', 'S/B 887W*1117L KA185/CA125*3/KA185 BCF 1:0.5 MODEL PKG. PIPE FAE-026', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-016-rm', 'S/B 761W*470L KA230/CA125/KA230 CF 1:1 MODEL PKG. PIPE FAE-028 (W62" L18" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-017-rm', 'S/B 1082W*1728L KA185/CA125*3/KA185 BCF 1:0.5 MODEL PKG. PIPE FAE-025', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-018-rm', 'S/B 887W*1143L KA185/CA125*3/KA185 BCF 1:0.5 MODEL PKG. PIPE 1587220X (W36"*L45")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-019-rm', 'S/B 1336W*2020L KA185/CA125*3/KA185 BCF 1:1 MODEL EB3G 5230 DA,CC,BB (PACK 9)  (W54"*L79"9/16) ทับรอย 2 ด้าน 4 เส้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-020-rm', 'S/B 1004W*1342L KA185/CA125*3/KA185 BCF 1:4 MODEL EB3G 5230 DA,CC,BB (PACK 9)  (W40"*L52"7/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-021-rm', 'S/B 1156W*1102L KA185/CA125*3/KA185 BCF 1:1 MODEL EB3G 5230 DA,CC,BB (PACK 9)  (W46"*L43"7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-022-rm', 'S/B 1336W*2020L KA185/CA125*3/KA185 BCF 1:1 MODEL EB3G 5230 DA,CC,BB (PACK 9)  (W54"*L79"9/16) ทับรอย 2 ด้าน 4 เส้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-023-rm', 'S/B 1054W*1630L KA230/CA125*3/KA230 BCF 1:1 MODEL FAE-003 PACK75 (W42"*L64" 3/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-024-rm', 'S/B 902W*700L KA125/CA125/KA125 CF 1:8 MODEL FAE-003 PACK75 (W36"*L27" 11/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-025-rm', 'S/B 1562W*1630L KA230/CA125*3/KA230 BCF  MODEL FAE-003 PACK75 (W62"*L64" 3/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-026-rm', 'S/B 1341W*2516L KA230/CA125*3/KA230 BCF 1:1 ทับรอย 110*1121*110 MODEL PKG. REDBACK JB3G5K214H (V.2) (W54"*L99" 1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-027-rm', 'S/B 629W*1100L KA185/CA125*3/KA185 BCF 1:1 PTT-C1 MODEL PKG. REDBACK JB3G5K214H (V.2) (W50"*L43" 5/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-028-rm', 'S/B 806W*1100L KA185/CA125*3/KA185 BCF 1:1 PTT-C2 MODEL PKG. REDBACK JB3G5K214H (V.2) (W64"*L43" 5/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-029-rm', 'S/B 629W*1100L KA185/CA125*3/KA185 BCF 1:1 PTT-C3 MODEL PKG. REDBACK JB3G5K214H (V.2) (W50"*L43" 5/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-030-rm', 'S/B 705W*717L KA185/CA125*3/KA185 BCF PTT-C4,C5 MODEL PKG. REDBACK JB3G5K214H (V.2) (W56"*L28" 1/4 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-031-rm', 'S/B 953W*1106L KA185/CA125*3/KA185 BCF 1:2 PTT-C6 MODEL PKG. REDBACK JB3G5K214H (V.2) (W38"*L43" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-032-rm', 'S/B 1080W*654L KA230/CA185*3/KA230 BCF 1:6 STOPPER (1080*107)MODEL PKG. REDBACK JB3G5K214H (V.2) (W44"*L25" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-033-rm', 'S/B 1080W*882L KA230/CA185*3/KA230 BCF 1:3 STOPPER (1080*292)MODEL PKG. REDBACK JB3G5K214H (V.2) (W44"*L34" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-034-rm', 'S/B 1341W*2196L KA230/CA125*3/KA230 BCF 1:1 ทับรอย 110*1121*110 MODEL PKG. REDBACK JB3G5K214K(PACK18)(W54"*L86" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-035-rm', 'S/B 1105W*1100L KA230/CA125*3/KA230 BCF 1:1 PTT-C1 MODEL PKG. REDBACK JB3G5K214K(PACK18)(W44"*L43" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-036-rm', 'S/B 705W*980L KA230/CA125*3/KA230 BCF 1:1 PTT-C2 MODEL PKG. REDBACK JB3G5K214K(PACK18)(W56"*L38" 5/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-037-rm', 'S/B 953W*1020L KA125/CA105*3/KA125 BCF GUIDE-A,B MODEL PKG. REDBACK JB3G5K214K(PACK18)(W38"*L40" 3/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-038-rm', 'S/B 832W*1093L KA230/CA125/KA230 CF 1:2 PTT-A MODEL PKG. PROTON REAR (W66"*L43" 1/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-039-rm', 'S/B 832W*1020L KA230/CA125/KA230 CF 1:2 PTT-B MODEL PKG. PROTON REAR (W66"*L40" 3/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-040-rm', 'S/B 1170W*1329L KA230/CA125*3/KA230 BCF 1:1 T/B CAP  MODEL PKG. PROTON REAR (W48"*L52" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-041-rm', 'S/B 810W*2065L KA230/CA125*3/KA230 BCF 1:1 SLEEVE  MODEL PKG. PROTON REAR (W66"*L81" 5/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-042-rm', 'S/B 1236W*1359L KA230/CA125*3/KA230 BCF 1:1 T/B CAP  MODEL PKG. PROTON FRONT (W50"*L53" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-043-rm', 'S/B 900W*2158L KA230/CA125*3/KA230 BCF 1:1 SLEEVE  MODEL PKG. PROTON FRONT (W36"*L85")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-044-rm', 'S/B 603W*984L KA230/CA125*3/KA230 BCF 1:2  PTT-A  MODEL PKG. PROTON FRONT (W48"*L38" 3/4 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-044-1-rm', 'S/B 603W*994L KA230/CA125*3/KA230 BCF 1:2  PTT-A  MODEL PKG. PROTON FRONT (W48"*L39" 3/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-045-rm', 'S/B 603W*1113L KA230/CA125*3/KA230 BCF 1:2  PTT-B  MODEL PKG. PROTON FRONT (W48"*L43" 7/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FAE-045-1-rm', 'S/B 603W*1123L KA230/CA125*3/KA230 BCF 1:2  PTT-B  MODEL PKG. PROTON FRONT (W48"*L44" 1/4 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FJA-001-rm', 'S/B 902W*1652L  KA125/CA125*3/KA125 BCF 1:2  M.H60A FJA-006 DV (W36"*L65" 1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FJA-007-rm', 'S/B 448W*1356L  KA125/CA125*3/KA125 BCF 1:1 ทับรอย 150*148*150 (W36"*L53" 7/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FJA-007-1-rm', 'S/B 902W*1356L  KA125/CA125*3/KA125 BCF 1:1 (W36"*L53" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FTT-003-rm', 'S/B 1003W*1879L KA185/CA125*3/KA185 BCF 1:2 (W40"*L74") FTC-B255FS MAIN BODY', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FTT-004-rm', 'S/B 902W*934L KA185/CA125*3/KA185 BCF 1:10 (W36"L36" 13/16) FTC-B255FS MAIN BODY', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FTT-005-rm', 'S/B  953W*710L KA230/CA125*3/KA230 BCF (W38"L27" 16/16) MODEL FTT-007,008', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FTT-006-rm', 'S/B 1765W*1583L KA230/CA125*3/KA230 BCF 1:3 (W70"L62" 3/8)  MODEL FTT-007,008', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FTT-007-rm', 'S/B 1308W*654L KA230/CA125*3/KA230 BCF (W52"L25" 7/8)  MODEL FTT-007,008 (COMMON 2A,2E)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FTT-008-rm', 'S/B 1054W*654L KA230/CA125*3/KA230 BCF (W42"L25" 7/8)  MODEL FTT-007,008 (COMMON 2A,2E)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FTT-009-rm', 'S/B 1054W*680L KA230/CA125*3/KA230 BCF (W42"L26" 3/4)  MODEL FTT-007,008 (COMMON 2A,2E)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-FTT-010-rm', 'S/B 1054W*635L KA230/CA125*3/KA230 BCF (W42"L25")  MODEL FTT-007,008 (COMMON 2A,2E)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-HAM-001-rm', 'S/B 1308W*620L KA230/CA125*3/KA230 BCF MODEL SWA-036  3A0A (W52"*L24" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-HAM-002-rm', 'S/B 628W*1101L  KA230/CA125*3/KA230 BCF MODEL SWA-036  3A0A (W50"*L43" 3/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-HAM-003-rm', 'S/B 1340W*1516L T/B CAP  KA230/CA125*3/KA230 BCF MODEL SWA-036  3A0A (W54"*L59" 11/16) ทับรอบ 110*1120*110', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-HAM-004-rm', 'S/B 1120W*1143L  KA230/CA185*3/KA230 BCF MODEL SWA-036  3A0A (W46"*L45)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-HAM-005-rm', 'S/B 1120W*1324L  KA230/CA185*3/KA230 BCF MODEL SWA-036  3A0A (W46"*L52" 3/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-HER-001-rm', 'S/B 1003W*960L  KA185/CA125*3/KA185  BC/F  1 : 2 MODEL:PAPER PIPE 670L (W40"*L37"13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-HIT-001-1-rm', 'SHEET BOARD 1102W*1462L KA125/CS110*3/KA125 BC/F (HITACHI TOCHIKI)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-HIT-001-2-rm', 'SHEET BOARD 1102W*1462L KA125/CA110*3/KA125 BC/F (HITACHI TOCHIKI)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-HIT-001-3-rm', 'SHEET BOARD 1102W*1462L KA125/CA105*3/KA125 BC/F (HITACHI TOCHIKI)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-HIT-001-4-rm', 'SHEET BOARD 1105W*1462L KA125/CA105*3/KA125 BC/F (HITACHI TOCHIKI) (W44"*L57" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-HIT-001-5-rm', 'SHEET BOARD 1105W*731L KA125/CA105*3/KA125 BC/F (HITACHI TOCHIKI) (W44"*L28" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-HIT-001-6-rm', 'SHEET BOARD 1105W*630L KA125/CA105*3/KA125 BC/F (HITACHI TOCHIKI) (W44"*L24" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-HIT-001-7-rm', 'SHEET BOARD 1105W*730L KA125/CA125*3/KA125 BC/F (HITACHI TOCHIKI) (W44"*L28" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-HIT-008-rm', 'SHEET BOARD 520W*958L KA185/CA125*3/KA185 BC (W42"xL37" 3/4 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-HIT-009-rm', 'SHEET BOARD 520W*1244L KA185/CA125*3/KA185 BC (W42"xL49" ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-HIT-010-rm', 'S/B  SIZE 1143W*1238L KA185/CA125*3/KA185 BC (W46"xL48" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-HOD-002/003-rm', 'S/B 730W*500L KL205/CA125*3/KL205 BCF 1:4 UNS005  (W58"*L19" 11/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-HOW-001-rm', 'S/B 986W*1950L KA230/CA125*3/KA230 BCF 1:1 MODEL L42P SR IPO PACK 1 (W40"*L76" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-HOW-002-rm', 'S/B 986W*1370L KA230/CA125*3/KA230 BCF 1:1 MODEL L42P SR IPO PACK 1 (W40"*L53"15/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-HPT-COM-01-rm', 'Sheet Board 602W*2010L KA125/CA125*3/KA125 BC 1:1 BOX Common M. 9387714012,9383728013,9387714029 (W48"xL79" 3/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-HPT-COM-02-rm', 'Sheet Board 1257W*720L KA185/CA125/KA185 CF (W50"xL25" 1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-HPT-COM-03-rm', 'Sheet Board 1257W*802L KA185/CA125/KA185 CF (W50"xL31" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-HPT-COM-04-rm', 'Sheet Board 1105W*1008L KA185/CA125/KA185 CF (W44"xL36" 11/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-HPT-COM-05-rm', 'SB 660W*720L KA125/CA125*3/KA125 BC/F (W54"xL28" 3/8 ผ่า 2) FOR USE PTT-A,B,C MODEL 2P668148E Pack 5 Small', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-HPT-COM-06-rm', 'SB 660W*645L KA125/CA125*3/KA125 BC/F (W54"xL25" 7/16 ผ่า 2) FOR USE PTT-D,E MODEL 2P668148E Pack 5 Small', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-HYS-001-rm', 'S/B  2112W*2976L KA125/CA125*3/KA125  BCF ทับรอย 298*1516*298  CAP M.T6 ALL D-CAB(HYS-014-1) (W84"*L117" 3/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-HYS-002-rm', 'S/B  2092W*2945L KA125/CA125*3/KA125  BCF ทับรอย 298*1496*298  TRAY  M.T6 ALL D-CAB(HYS-014-1) (W84"*L116")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-003-1-rm', 'S/B 720W*720L  KA185/CA125/KA185 CF 1:1 (W58"*L28" 3/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-003-2-rm', 'S/B 730W*720L  KA185/CA125/KA185 CF 1:1 (W58"*L28" 3/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-004-1-rm', 'S/B 920W*920L  KA185/CA125/KA185 CF 1:1 (W38"*L36" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-004-2-rm', 'S/B 952W*920L  KA185/CA125/KA185 CF 1:1 (W38"*L36" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-005-1-rm', 'S/B 940W*940L  KA185/CA125/KA185 CF 1:1 (W38"*L37")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-005-2-rm', 'S/B 952W*940L  KA185/CA125/KA185 CF 1:1 (W38"*L37" 1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-006-1-rm', 'S/B 984W*960L  KA185/CA125/KA185 CF 1:1 (W78"*L37" 13/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-007-1-rm', 'S/B 980W*980L  KA185/CA125/KA185 CF 1:1 (W78"*L38" 5/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-008-1-rm', 'S/B 1540W*1020L  KA150/CA125/KA150 CF (W62"*L40" 3/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-009-1-rm', 'S/B 831W*820L  KA185/CA125/KA185 CF 1:1 (W66"*L32" 5/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-010-1-rm', 'S/B 857W*840L  KA185/CA125/KA185 CF 1:1 (W68"*L33" 1/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-011-1-rm', 'S/B 900W*900L  KA185/CA125/KA185 CF 1:1 (W36"*L35" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-011-2-rm', 'S/B 901W*900L  KA185/CA125/KA185 CF 1:1 (W36"*L35" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-012-1-rm', 'S/B 700W*700L  KA185/CA125/KA185 CF 1:1 (W56"*L27" 9/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-012-2-rm', 'S/B 704W*700L  KA185/CA125/KA185 CF 1:1 (W56"*L27" 9/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-013-1-rm', 'S/B 755W*740L  KA185/CA125/KA185 CF 1:1 (W60"*L29" 3/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-014-1-rm', 'S/B 760W*760L  KA185/CA125/KA185 CF 1:1 (W62"*L29" 15/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-014-2-rm', 'S/B 781W*760L  KA185/CA125/KA185 CF 1:1 (W62"*L29" 15/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-015-1-rm', 'S/B 1540W*1680L  KA150/CA125/KA150 CF 1:40 (W62"*L66" 3/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-016-1-rm', 'S/B 1540W*1320L  KA150/CA125/KA150 CF 1:40 (W62"*L52")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-016-2-rm', 'S/B 756W*640L  KA150/CA125/KA150 CF 1:10 (W60"*L25" 1/4 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-017-1-rm', 'S/B 880W*880L  KA185/CA125/KA185 CF 1:1 (W70"*L34" 11/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-017-2-rm', 'S/B 882W*880L  KA185/CA125/KA185 CF 1:1 (W70"*L34" 11/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-022-rm', 'S/B 1003W*1000L  KA185/CA125/KA185 CF 1:1 (W40"*L39" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-023-rm', 'S/B 1040W*1040L  KA185/CA125/KA185 CF 1:1 (W42"*L41")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-024-rm', 'S/B 1080W*540L  KA185/CA125/KA185 CF 1:1 (W44"*L21" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-028-1-rm', 'S/B 781W*780L  KA185/CA125/KA185 CF 1:1 (W62"*L30" 3/4 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-029-rm', 'SHEET BOARD 770W*620L KA150/CA125/KA150 CF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-029-1-rm', 'SHEET BOARD 756W*600L KA150/CA125/KA150 CF (W60"*L23" 5/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-030-1-rm', 'S/B 806W*800L  KA185/CA125/KA185 CF 1:1 (W64"*L31" 1/2 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-031-rm', 'S/B 860W*860L  KA185/CA125/KA185 CF 1:1 (W70"*L33" 7/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-032-rm', 'SHEET BOARD 770W*710L KA150/CA125/KA150 CF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-032-1-rm', 'SHEET BOARD 756W*690L KA150/CA125/KA150 CF (W60"*L27" 3/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-033-rm', 'SHEET BOARD 756W*620L KA150/CA125/KA150 CF (W60"*L24" 7/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-034-rm', 'SHEET BOARD 756W*670L KA150/CA125/KA150 CF (W60"*L26" 7/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-035-rm', 'S/B 755W*740L  KS170/CA125/CA125 CF 1:1 (W60"*L29" 3/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-036-rm', 'S/B 781W*760L  KS170/CA125/CA125 CF 1:1 (W62"*L29" 15/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-037-rm', 'S/B 781W*780L  KS170/CA125/CA125 CF 1:1 (W62"*L30" 3/4 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-038-rm', 'S/B 679W*660L(W54"L25" 16/16) KA185/CA125/KA185 C/F ผ่า 2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-039-rm', 'S/B 679W*680L KA185/CA125/KA185 C/F (W54"L26" 13/16)  ผ่า 2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-040-rm', 'SHEET BOARD 756W*1050L KA150/CA125/KA150 CF (W60"*L41" 3/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-041-rm', 'S/B 1020W*1020L KA185/CA125/KA185 C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-042-rm', 'S/B 1040W*1040L KA185/CA125/KA185 C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-044-rm', 'S/B 1054W*1040L  KS170/CA125/CA125 CF 1:4 (W42"*L41")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-045-rm', 'S/B 1105W*1080L  KS170/CA125/CA125 CF 1:4 (W44"*L42" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-046-rm', 'S/B 1156W*1120L  KS170/CA125/CA125 CF 1:4 (W46"*L44" 1/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-047-rm', 'S/B 1461W*720L  KS170/CA125/CA125 CF 1:2 (W58"*L28" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-048CANCELL-rm', 'S/B 603W*580L  KS170/CA125/CA125 CF 1:1 (W48"*L22" 7/8 ผ่า2)  แก้ไขไปเป็น Code RSB-JNC-049 Ref. ตาม Code ขาย', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JNC-COM-01-rm', 'S/B 1460W*760L KA185/CA125/KA185 C/F (W58"L29" 15/16)  COMMON JNC-039, JNC-014-2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JT029-1-rm', 'S/B 360W*1068L KA230/CA125*3/KA230 BCF 2:1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JT030-rm', 'S/B 1248W*1068 KA230/CA125*3/KA230 BCF 3:1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JT030-1-rm', 'S/B 416W*1068L KA230/CA125*3/KA230 BCF 1:1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JT031-1-rm', 'S/B 416W*1032L KA230/CA125*3/KA230 BCF 1:1 (W66"*L40" 11/16 ผ่า 4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JT032-1-rm', 'S/B 360W*1032L KA230/CA125*3/KA230 BCF 2:1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JT042-rm', 'S/B 1207W*1329L KA230/CA125/KA230  CF (W48" x 52"3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JT047-1-rm', 'S/B 1207W*1329L KA230/CA125/KA230  CF (W48" x 52"3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTB-001-rm', 'S/B 1003W*1115L KA185/CA125*3/KA185 BCF 1:4 PTT-B3 M.L02D/747D (W40"*L43" 15/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTB-003-1-rm', 'S/B 705W*1115L KA185/CA125*3/KA185 BCF 1:6 PLATE AS-3 (W56"*L43" 15/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTB-003CANCEL-rm', 'S/B 1105W*1115L KA185/CA125*3/KA185 BCF 1:6 PLATE AS-3 (W44"*L43" 15/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTB-004-rm', 'S/B 953W*1115L KA185/CA125*3/KA185 BCF 1:2 PLATE AS-4 (W38"*L43" 15/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTB-005-rm', 'S/B 629W*868L KA185/CA125*3/KA185 BCF  PLATE AS-5 1:36 , AS-6 1:12 (W50"*L34" 3/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTB-006-rm', 'S/B 603W*820L KA185/CA125*3/KA185 BCF  PLATE AS-5 1:36  JTB-004  (W48"*L32" 5/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTB-007-rm', 'S/B 1410W*1115L KA185/CA125*3/KA185 BCF  PLATE AS-3 1:36  JTB-004  (W56"*L43" 15/16 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-001-rm', 'S/B 1329W*1182L KA230/CA125*3/KA230 BCF  ทับรอย 105*1119*105  (54"L46" 9/16 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-002-rm', 'S/B 1329W*1182L KA230/CA125*3/KA230 BCF (54"L46" 9/16 ) ทับรอย 2 ด้าน 4 เส้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-003-rm', 'S/B PTT-A 902W*922L KA230/CA125/KA230 CF (W36"L36" 5/16) YL1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-004-rm', 'S/B PTT-B 902W*942L KA185/CA125*3/KA185  BCF (W36"L37" 1/8) YL1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-005-rm', 'S/B PTT-C 902W*942L KA185/CA125*3/KA185 BCF (W36"L37" 1/8) YL1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-006-rm', 'S/B PTT-D 1003W*780L KA185/CA125*3/KA185  BCF (W40"L30" 3/4) YL1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-007-rm', 'S/B PTT-D 1003W*942L KA185/CA125*3/KA185  BCF (W40"L37" 1/8) YL1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-008-rm', 'S/B 902W*1062L KA230/CA125*3/KA230  BCF 1:2 (PTT-3A) (W36"L41" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-009-rm', 'S/B 902W*1026L KA230/CA125*3/KA230  BCF 1:2 (PTT-3B) (W36"L40" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-010-rm', 'S/B 1613W*2302L KA185/CA125*3/KA185  BCF 1:2 (SLEEVE JTK-040) (W64"L90" 11/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-011-rm', 'S/B 705W*1055L KA230/CA125*3/KA230  BCF 1:1  PTT-3A M.20M HONDA (W56"*L41" 9/16 ผ่า2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-012-rm', 'S/B 552W*1055L KA230/CA125*3/KA230  BCF 1:1  PTT-3B M.20M HONDA (W44"*L41" 9/16 ผ่า2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-013-rm', 'S/B 705W*1062L KA230/CA125*3/KA230  BCF 1:1  PTT-3A M.KMP(DV.)  (W56"*L41" 13/16 ผ่า2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-014-rm', 'S/B 501W*1062L KA230/CA125*3/KA230  BCF 1:1  PTT-3C M.KMP(DV.)  (W40"*L41" 13/16 ผ่า2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-033-rm', 'SHEET BOARD 990W*970L CA125/CA125/CA125 CF  1 :8', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-033-1-rm', 'SHEET BOARD 490W*724L CA125/CA125/CA125 CF 1 :3 (W40"*L28" 9/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-034-rm', 'SHEET BOARD 711W*1020L KA125/CA125*3/KA125 BCF  1 :2 CENTER BEARING', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-035-rm', 'S/B 1511W*1132L KA230/CA125/KA230 CF (W60"*L44" 5/8) MODEL:L12F-KD(R8T) (S/B COMMON SIDE PLATE&PLATE)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-036-rm', 'S/B 792W*1132L KA230/CA125*3/KA230 BCF (W64"*L44" 5/8) ผ่า 2  SLEEVE-2A 1:1  MODEL:20M HONDA', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-036-1-rm', 'S/B 792W*1132L KA125/CA125*3/KA125 BCF ( CLEAR SB MISTAK)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-040-rm', 'S/B 1054W*1450L KA185/CA125*3/KA185 BCF (W42"*L57" 1/8)  1:8  PTT-A  MODEL: SERVICE PART TOYOTA(LR)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-041-rm', 'S/B 1054W*1450L KA185/CA125*3/KA185 BCF (W42"*L57" 1/8)  1:8  PTT-B  MODEL: SERVICE PART TOYOTA(LR)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-042-rm', 'S/B 902W*1450L KA185/CA125*3/KA185 BCF (W36"*L57" 1/8)  1:3  PTT-C MODEL: SERVICE PART TOYOTA(LR)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-043-rm', 'S/B 1054W*720L KA185/CA125*3/KA185 BCF (W42"*L28" 3/8)  1:8  GUIDE PTT MODEL: SERVICE PART TOYOTA(LR)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-044-rm', 'S/B 1156W*1450L KA185/CA125*3/KA185 BCF (W46"*L57" 1/8)  1:1  PAD  MODEL: SERVICE PART TOYOTA(LR)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-COM-01-rm', 'S/B 552W*1020L KA230/CA125*3/KA230  BCF 1:1  COMMON PTT-3C, 3D, 3E M.20M HONDA (W44"*L40" 3/16 ผ่า2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-COM-PTTN6/GJ-rm', 'S/B 1867W*768L KA185/CA125*3/KA185 BCF (W74"L30" 1/4) COMMON PTT-N6/GJ', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-COM-R8T-1-rm', 'S/B 1511W*1132L (W60"L44" 5/8) KA230/CA125/KA230 CF  PLATE/SIDE PLATE', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-COM-R8T-1/1-rm', 'S/B 1918W*1132L KA230/CA125/KA230 CF  PLATE/SIDE PLATE (W76"xL44" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-COM-R8T-2-rm', 'S/B 1308W*1090L (W52"L42" 15/16 ) KA230/CA125*3/KA230 BCF PTT-1A,2A,2E', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-COM-R8T-3-rm', 'S/B 1308W*886L (W52"L34" 15/16 ) KA230/CA125*3/KA230 BCF PTT-1B,1C,1D,2D', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTK-COM-R8T-4-rm', 'S/B 1613W*886L (W64"L34" 15/16) KA230/CA125*3/KA230 BCF PTT-2B,1E,2C', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTKSEMI-01-rm', 'S/B 1188W*1062L KA230/CA125*3/KA230 BCF 1:2 (W48"xL41" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-JTKSEMI-02-rm', 'S/B 876W*1026L KA230/CA125*3/KA230 BCF 1:2 (W36"xL40" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KBL-003 CANCEL-rm', 'S/B  1359W*1840L KA125/CA125/KA125 C:F  1:2 M.PAPER BOX OD 370x540x300H (W54"*L72" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KBL-003-1-rm', 'S/B 666W*1840L  KA125/CA125/KA125  CF ทับรอยด้าน W 185*296*185 (W54"*L72" 1/2 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KEL-001-rm', 'SHEET BOARD 1064W*1822L KA125/CS110*3/KA125 BCF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KEL-001-1-rm', 'S/B 1105W*630L KA125/CA105*3/KA125 BC/F  (W44"*L24" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-002-rm', 'SHEET BOARD 684W*1072L KA230/CA125*3/KA230 BCF  (PTT-3B M07) (W82"*L42" 1/4 ผ่า3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-003-rm', 'S/B 577W*1129L  KA230/CA125/KA230 CF 1:1 (W46"L44" 1/2 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-003-1-rm', 'S/B 1105W*1129L  KA230/CA125/KA230 CF 1:1 (W44"L44" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-004-rm', 'S/B 603W*1131L  KA230/CA125/KA230 CF 1:1 (W48"L44" 9/16 ผ่า 2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-005-rm', 'S/B  490W*1060L KA230/CA125/KA230 CF (W40"L41" 3/4 ผ่า 2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-005-1-rm', 'S/B  490W*1060L KI125/CA125/KI125 CF (W40"L41" 3/4 ผ่า 2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-006-rm', 'S/B 490W*1005L KA230/CA125/KA230 CF (W40"L39" 5/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-006-1-rm', 'S/B 490W*1005L KI125/CA125/KI125 CF (W40"L39" 5/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-007-rm', 'S/B 1320W*1336L KA185/CA125*3/KA185 BCF 1:1 MODEL :SERVICE PART INDIA (W54"*L52" 5/8) ทับรอย 2 ด้าน 4 เส้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-008-rm', 'S/B 1054W*1034L KA185/CA125*3/KA185 BCF 1:1 MODEL :SERVICE PART INDIA (W42"*L40" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-009-rm', 'S/B 1054W*657L KA230/CA125/KA230 CF 1:1 MODEL :SERVICE PART INDIA (W42"*L25" 7/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-010-rm', 'S/B 953W*1129L KA230/CA125/KA230 CF 1:2 MODEL :PKG H60A LCP DISC FRONT(W38"*L44" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-011-rm', 'S/B 902W*1119L KA230/CA125/KA230 CF 1:2 MODEL :PKG H60A LCP DISC FRONT(W36"*L44" 1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-012-rm', 'S/B 502W*1130L  KA185/CA125*3/KA185 BCF 1:1  PTT-A  MODEL :H60A LCP(224-0005-37) (W40"*L44" 1/2 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-013-rm', 'S/B 476W*1130L  KA185/CA125*3/KA185 BCF 1:1  PTT-B  MODEL :H60A LCP(224-0005-37) (W38"*L44" 1/2 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-014-rm', 'S/B 553W*520L  KA185/CA125*3/KA185 BCF 1:8  PTT-C  MODEL :H60A LCP(224-0005-37) (W44"*L20" 1/2 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-015-rm', 'S/B 502W*580L  KA185/CA125*3/KA185 BCF 1:8  PTT-D  MODEL :H60A LCP(224-0005-37) (W40"*L22" 7/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-016-rm', 'S/B 1105W*1130L  KA185/CA125*3/KA185 BCF 1:1  BOTTOM PAD  MODEL :H60A LCP(224-0005-37) (W44"*L44" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-017-rm', 'TOP/BOTTOM CAP 1334W*1326L KA230/CA125*3/KA230 BCF SERVICE PART INDIA BOX  W54"*L52" 1/4 ทับรอย 110*1114*110', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-018-rm', 'SLEEVE B1 480W*2230L KA230/CA185*3/KA230 BCF  MODEL SERVICE PART INDIA BOX  1:2  W40"*L87" 13/16 ผ่า2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-019-rm', 'SLEEVE B2 480W*2102L KA230/CA185*3/KA230 BCF  MODEL SERVICE PART INDIA BOX  1:2  W40"*L82" 13/16 ผ่า2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-020-rm', 'SLEEVE ASSY-A 578W*2071L KA230/CA185*3/KA230 BCF  MODEL MB3C-3K171-A1  1:1  (W46"*L81" 9/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-021-rm', 'SLEEVE ASSY-B 578W*1943L  KA230/CA185*3/KA230 BCF  MODEL MB3C-3K171-A1  1:1 (W46"*L76" 1/2 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-022-rm', 'S/B 629W*1086L  KA230/CA125*3/KA230 BCF  MODEL MB3C-3K171-A1  1:1 (W50"*L42" 13/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-023-rm', 'S/B 501W*1086L  KA230/CA125*3/KA230 BCF  MODEL MB3C-3K171-A1  1:1 (W40"*L42" 13/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-024-rm', 'S/B 806W*1030L  KA230/CA125*3/KA230 BCF  MODEL MB3C-3K171-A1  1:1 (W64"*L40" 9/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-025-rm', 'S/B 756W*749L  KA230/CA125*3/KA230 BCF  MODEL MB3C-3K171-A1  1:1 (W60"*L29" 1/2 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-027-rm', 'S/B 552W*1086L  KA230/CA125/KA230 C/F  MODEL PKG.FOR MODEL JB3C-2A315-A  (W44"*L42" 3/4 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-028-rm', 'S/B 552W*915L  KA230/CA125/KA230 C/F  MODEL PKG.FOR MODEL JB3C-2A315-A  (W44"*L36" 1/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-029-rm', 'S/B 527W*1139L  KA230/CA125/KA230 C/F  MODEL PKG.FOR MODEL MB3C-1125-D  (W42"*L44" 7/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-030-rm', 'S/B 501W*915L  KA230/CA125/KA230 C/F  MODEL PKG.FOR MODEL MB3C-1125-D   (W40"*L36" 1/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-031-rm', 'SLEEVE ASSY-A 642W*2071LL KA230/CA185*3/KA230 BCF  MODEL PKG.FOR MODEL JB3C-2A315-A  (W52"*L81" 9/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-032-rm', 'SLEEVE ASSY-B 642W*1943L KA230/CA185*3/KA230 BCF MODEL JB3C-2A315-A  (W52"*L76" 1/2 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-033-rm', 'SLEEVE ASSY-A 425W*2071LL KA230/CA185*3/KA230 BCF  PKG.FOR MODEL MB3C-1125-D (W52"*L81" 9/16 ผ่า3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-034-rm', 'SLEEVE ASSY-B 425W*1943L KA230/CA185*3/KA230 BCF MODEL MODEL MB3C-1125-D (W52"*L76" 1/2 ผ่า3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KIR-COM-rm', 'S/B 1206W*2300L KA230/CA125/KA230 C/F  1:4 MODEL MB3C  (W48"*L90" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KTF-001-rm', 'S/B 1900W*1100L  KI185/CA125*3/KI185 BCF 1:1 M.PAPER PALET 1100x1900x60 MM. (W76"*L43" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KTF-002-rm', 'S/B 953W*648L  KI185/CA125/KI185 CF 1:12 M.PAPER PALET 1100x1900x60 MM. (W38"*L25" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KTF-002-1-rm', 'S/B 1917W*2200L  KI185/CA125/KI185 CF 1:80  M.PAPER PALET 1100x1900x60 MM. (W76"*L86" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KTF-006-1-rm', 'SHEET BOARD 1014W*1429L KA125/CA125*3/KA125 BCF 1:2 M.BOX 655W*750L*365H (W42"*L56" 5/16) ทับรอย 328*358*328', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KTF-011-rm', 'S/B SIZE 1550Wx2185L KA125/CA125/KA125 C/F (W62"*L86 1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KTF-013-rm', 'S/B 1595W*1286L KI150/CA125*3/KI150 BCF (W64"*L50 11/16) ทับรอย 2 ด้าน 4 เส้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KTF-015-rm', 'S/B 1564W*1266L KI150/CA125*3/KI150 BCF (W64"*L49 7/8) ทับรอย 2 ด้าน 4 เส้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KTF-018-rm', 'SHEET BOARD 993W*1324L KA125/CA125*3/KA125 BCF 1:2 M.BOX 650W*650L*350H (W40"*L52" 3/16) ทับรอย 325*343*325', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KTF-018-1-rm', 'SHEET BOARD 993W*1324L KA125/CS110*3/KA125 BCF 1:2 M.BOX 650W*650L*350H ทับรอย 325*343*325', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KTF-024-rm', 'S/B 1064W*1827L  KI150/CA125*3/KI150 BCF 1:1 (Model BOX ID 440x1335x595H KTF-024)   ทับรอย 227*610*227 (W44"*L71" 15/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KTF-067-rm', 'S/B 806W*525L CA125/CA125/CA125 CF 1:3 M.KTF-067 (W64"*L20" 11/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KTF-083-rm', 'S/B 1715W*2500L  CA125/CA125/CA125 CF  1:10 (W68"*L98" 7/16)  COVER M.B02A(IDEA NK)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KTF-COM-01-rm', 'S/B 1900W*2200L  KI185/CA125*3/KI185 BCF  (W76"*L86" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KTF-COM-02-rm', 'S/B 1461W*1686L  KI150/CA125/KI150 CF  (W58"*L66" 7/16) PTT 1:1, TOP PAD 1:3 M.KTF-070, 071', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KTF-COM-03-rm', 'S/B 1105W*884L  KI125/CA125/KI125 CF  (W44"*L34" 13/16) PTT-A 1:1, PTT-B 1:1  M.B02A(IDEA NK)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-KYB-002-rm', 'S/B  1044W*1747L KA230/CA125/KA230 C:F  1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-LHC-001-rm', 'Sheet Board  COVER-C  578W*1117L KA185/CA125*3/KA185   BCF   (W46"*L43" 16/16  ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-MSE-001-rm', 'S/B 552W*672L KA185/CA125*3/KA185 1:4  BCF (W44"*L26" 1/2  ผ่า2) MODEL :B221 (PTT+COVER)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-MSE-002-rm', 'S/B 1003W*790L KA125/CA125/KA125 1:60  CF (W40"*L31" 1/8) MODEL:D040', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-MSE-009-rm', 'S/B 559W*1432L KA230/CA125*3/KA230 1:1  BCF (W46"*L56" 7/16 ผ่า 2)  BOX MODEL :D2801', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NAGANO-001-rm', 'S/B  1926W*846L KA125/CA125/KA125 CF (W78"L33" 5/16 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NAGANO-003-rm', 'S/B 1270W*1507L KA230/CA125/KA230 CF 1:3 (W52"*L59" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NAGANO-006-rm', 'S/B 1010W*1110L CA125/CA125/CA125 CF 1:20 (W42"*L43" 11/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NDE-001-rm', 'S/B 1562W*710L KL205/CA125/KL205 CF (W62"*L27" 16/16)  1:1  MODEL: ABS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NDE-002-rm', 'S/B 1664W*770L KI125/CA125*3/KI125 BCF (W66"*L30" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NDE-016-rm', 'S/B  CARTONBOX  528W*1467L KI125/CA125*3/KI125 BCF 1:1  (W44"*L57" 9/16  ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NGN-006-rm', 'SHEET BOARD1006W*1108L CA125/CA125/CA125 C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-002-rm', 'SHEET BOARD 1204W*1208L KA185/CA125/KA185 CF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-003-rm', 'SHEET BOARD 1204W*1208L KA185/CA125/KA185 CF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-004-rm', 'SHEET BOARD 1374W*1048L KA185/CA125/KA185 CF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-005-rm', 'SHEET BOARD 1288W*1048L KA185/CA125/KA185 CF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-006-rm', 'SHEET BOARD 1288W*1048L KA185/CA125/KA185 CF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-011-rm', 'TOP CAP 1381W*1325L KA230/CA125*3/KA230 BCF 1:1 L42P  ทับรอย 110*1161*110 (W56"L52"3/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-012-rm', 'BOTTOM CAP 1381W*1325L KA230/CA125*3/KA230 BCF 1:1 L42P (W56"L52"3/16) ทับรอย 2 ด้าน 4 เส้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-013-rm', 'PTT-B1 908W*626L KA125/CA125/KA125 CF OUTLET ASSY CTR (RH) (W36" L24" 11/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-014-rm', 'PTT-B2 1003W*686L KA125/CA125/KA125 CF OUTLET ASSY CTR (RH) (W40"L27" 1/8  ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-015-rm', 'PTT-B1 679W*566L KA125/CA125/KA125 CF OUTLET ASSY AS/DR (RH) (W54"L22"5/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-016-rm', 'S/B 654W*702L KL205/CA185/KL205 CF 1:4 M.L02B/L02A PACK 6 (NT4579-1) (W52"*L27" 11/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-017-rm', 'S/B 628W*526L KL205/CA185/KL205 CF 1:6  M.L02B/L02A PACK 6 (NT4579-1) (W50"*L20" 3/4 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-018-rm', 'S/B 501W*800L KL205/CA185/KL205 CF 1:12 M.L02B/L02A PACK 6 (NT4579-1) (W40"*L31" 1/2 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-019-rm', 'PTT-C1 527W*1148L KA125/CA125/KA125 CF PANEL AS MID(W42" L45" 1/4 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-020-rm', 'PTT-C2 552W*1148L KA125/CA125/KA125 CF PANEL AS MID(W44" L45" 1/4 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-021-1-rm', 'PTT-C3 628W*812L KA125/CA125/KA125 CF PANEL AS MID(W50"*L32" ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-021CANCELLED-rm', 'PTT-C3 628W*406L KA125/CA125/KA125 CF PANEL AS MID(W50"*L16" ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-022-rm', 'PTT-C4 628W*406L KA125/CA125/KA125 CF PANEL AS MID(W50"*L16" ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-023-rm', 'PTT-C5 1003W*1128L KA125/CA125*3/KA125 BCF PANEL AS MID(W40"*L44" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-024-rm', 'PTT-C6 1003W*1128L KA125/CA125/KA125 CF PANEL AS MID(W40"*L44" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-025-rm', 'PTT-C1 628W*391L KA125/CA125/KA125 CF PANEL DR MID(W50"*L15" 7/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-025/026-rm', 'S/B  1696W*762L KA125/CA125/KA125 CF (W68"L30")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-026-rm', 'PTT-C2 1104W*762L KA125/CA125/KA125 CF PANEL DR MID(W44"*L30")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-027-rm', 'PTT-C3 1054W*614L KA125/CA125/KA125 CF PANEL DR MID(W42"*L24" 3/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-028-rm', 'PTT-C4 1054W*1080L KA125/CA125/KA125 CF PANEL DR MID(W42"*L42" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-029-rm', 'S/B  1105W*1295L KA230/CA125/KA230 CF (W44"L51")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-030-rm', 'S/B  953W*1330L KA230/CA125/KA230 CF (W38"L52"3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-031-rm', 'S/B  1156W*714L KA230/CA125/KA230 CF (W46"L28"1/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-032-rm', 'S/B  1054W*928L KA230/CA125/KA230 CF (W42"L36"9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-033-rm', 'S/B  806W*2100L KA185/CA125/KA185 CF (W64"L82"11/16ผ่า2) (NT261448)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-034-rm', 'S/B 1308W*770L KA230/CA125/KA230 CF 1:10 (W52"*L30" 3/8) TRAY ASSY-C M.XC2B', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-035-rm', 'S/B 781W*680L KA230/CA125/KA230 CF 1:4 (W62"*L26" 13/16 ผ่า 2) TRAY ASSY-E M.XC2B', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-035-1-rm', 'S/B 781W*1360L KA230/CA125/KA230 CF 1:8 TRAY ASSY-E M.XC2B', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-036-rm', 'TOP CAP 1379W*1297L KA230/CA125*3/KA230 BCF  1:1 OUTLET DR 2GN NT4930-01 ทับรอย 110*1159*110 (W56"*L51" 1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-037-rm', 'S/B 832W*1061L KA125/CA125/KA125 CF 1:4 FOR OUTLET DR 2GN (W66"*L41" 13/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-038-rm', 'S/B 629W*1138L KA125/CA125/KA125 CF 1:1 FOR OUTLET DR 2GN (W50"*L44" 13/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-039-rm', 'S/B 730W*1061L KA125/CA125/KA125 CF 1:2 FOR OUTLET DR 2GN (W58"*L41" 13/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-040-rm', 'TOP CAP 1316W*1496L  KA185/CA125*3/KA185 BCF OUTLET AS 2GN NT4930-02 ทับรอย 110*1096*110 (W54"*L58" 15/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-041-rm', 'S/B 577W*1075L KA125/CA125/KA125 CF 1:1 FOR OUTLET AS 2GN (W46"*L42" 3/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-042-rm', 'S/B 832W*1075L KA125/CA125/KA125 CF 1:4 FOR OUTLET AS 2GN (W66"*L42" 3/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-043-rm', 'S/B 832W*1260L KA125/CA125/KA125 CF 1:4 FOR OUTLET AS 2GN (W66"*L49" 5/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-044-1-rm', 'S/B  629W*830L  KA125/CA125/KA125  CF  (TRAY ASSY B MODEL:XC2A (099A))(W50"L32" 11/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-044-2-rm', 'S/B  616W*830L  KA125/CA125/KA125  CF  (TRAY ASSY B MODEL:XC2A (099A))(W50"L32" 11/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-044CANCELLED-rm', 'S/B  629W*830L  KA150/CA125/KA150  CF  (TRAY ASSY B MODEL:XC2A (099A))(W50"L32" 11/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-045-rm', 'S/B 930W*1736L  KA230/CA125*3/KA230  BCF  BOX 100A PU EXPORT : KYUSHU (W38"*L68" 3/8 ทับรอย 215*500*215)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-046-rm', 'S/B 1225W*1348L KA185/CA125*3/KA185 BCF  TOP CAP 1:1 MODEL VENT ASSY J32V CTR.(W50"*L53" 1/8) ทับรอย 110*1005*110', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-047-rm', 'S/B 368*1112  KA185/CA125*3/KA185 BCF  PTT-A 1:2 MODEL VENT ASSY J32V CTR. (W44"*L43" 13/16 ผ่า 3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-048-rm', 'S/B 806W*984L  KA185/CA125/KA185 CF  PTT-B 1:2 MODEL VENT ASSY J32V CTR. (W64"*L38" 3/4 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-049-rm', 'S/B 600W*2375L  KA185/CA125*3/KA185 BC/F SLEEVE 1:2 MODEL OUTLET AS RHD/LHD 2GN  (W48"*L93" 9/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-050-rm', 'S/B 289W*1112L  KA185/CA125*3/KA185 BC/F PTT-C MODEL VENT ASSY J32V CTR (W46"*L43" 13/16 ผ่า 4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-051-rm', 'S/B 1000W*1672L  KA125/CA125*3/KA125 BC/F BOX  MODEL E-CANTER & X81C & C53L W40'''' *L65'''' 7/8', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-052-rm', 'S/B 832W*1216L KA230/CA125/KA230 CF (W66"*L47" 7/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-219-rm', 'S/B 741W*2264L KA125/CA125/KA125 CF 1:1 M.OUTLET ASSY CTR(RH)NT4613  (W60"*L89" 3/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-222-rm', 'S/B 741W*2264L KA125/CA125/KA125 CF 1:1 M.OUTLET ASSY AS,DR(RH) NT4612  (W60"*L89" 3/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-COM-01-rm', 'S/B 1640W*1640L KA185/CA105/KA185 CF 1:16  (W66"*L64" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-COM-01-1-rm', 'S/B 832W*820L KA185/CA105/KA185 CF 1:4  (W66"*L32" 5/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-COM-02-rm', 'S/B 1680W*1640L KA125/CA105*3/KA125 BCF 1:64  (W68"*L64" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-COM-02-1-rm', 'S/B 419W*820L KA125/CA105*3/KA125 BCF 1:8  (W50"*L32" 5/16 ผ่า 3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-COM-03-rm', 'S/B PTT-C 1359W*770L KA230/CA125/KA230 CF (W54"L30"  3/8 ) PKG FOR P33A', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-COM-04-rm', 'S/B PTT-D   680W*680L KA230/CA125/KA230 CF (W54"L26" 13/16  ผ่า 2 ) PKG FOR P33A', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-COM-05-rm', 'S/B 629W*560L KA150/CA125/KA150  CF 1:4 (W50"*L22"  1/16  ผ่า 2 ) PKG FOR P33A', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-COMMON-rm', 'S/B 1715W*1218L KA125/CA125/KA125 CF  (SPECIAL SUPPORT RSB-NHP-019,020,021)  (W68"*L48")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-TESTUN-rm', 'S/B 1715W*1400L KL205/CA185/KL205  CF  TEST UN CODE (W68"*L55" 1/8 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-TESTUN-205-rm', 'S/B 1715W*2800L KL205/CA185/KL205  CF  TEST UN CODE', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHP-TESTUN-250-rm', 'S/B 1410W*2000L KL250/CA185/KL250  CF  TEST UN CODE', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHS-028-rm', 'S/B 1079W*922L KA185/CA125*3/KA185  BCF 1:1 (W44"*L36" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHS-029-rm', 'S/B 451W*852L KA185/CA125*3/KA185  BCF 1:8 (W36"*L33" 9/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHS-030-rm', 'S/B 451W*1009L KA185/CA125*3/KA185  BCF 1:8 (W36"*L39" 3/4 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHS-032-rm', 'S/B 1087W*943L KA185/CA125*3/KA185  BCF 1:1 (W44"*L37" 3/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHS-033-rm', 'S/B 276W*852L KA185/CA125*3/KA185  BCF 1:4 (W44"*L33" 9/16 ผ่า4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHS-034-rm', 'S/B 276W*1009L KA185/CA125*3/KA185  BCF 1:4 (W44"*L39" 3/4 ผ่า4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHS-COM-01-rm', 'S/B 1765W*1024L KA185/CA125*3/KA185  BCF 1:1 (W70"*L40" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHS-COM-02-rm', 'S/B 1156W*1009L KA185/CA125*3/KA185  BCF 1:1 (W46"*L39" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NHS-COM-03-rm', 'S/B 1715W*1943L KA230/CA185*3/KA230  BCF 1:1 (W68"*L76" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NSA-COM-011-rm', 'S/B 1207W*1330L  KA125/CA125/KA125 C/F  (W48"*L52" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NSA-COM-013-rm', 'S/B 1156W*1378L  KI185/CA125/KI185 C/F  (W46"*L54" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NSA-COM-016-rm', 'S/B 1308W*1381L  KI185/CA125/KI185 C/F  (W52"*L54" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NSA-COM-017-rm', 'S/B 1613W*1338L  KA185/CA125/KA185 C/F  (W64"*L52" 11/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NSA-COM-018-rm', 'S/B 1562W*1142L  KI185/CA125/KI185 C/F  (W62"*L45")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NSA-COM-019-rm', 'S/B 902W*1313L  KA150/CA125/KA150 C/F  (W36"*L51" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NSA-COM-020-rm', 'S/B 1207W*1318L  KA185/CA125/KA185 C/F  (W48"*L51" 11/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NSA-COM-021-rm', 'S/B 1207W*1398L  KI185/CA125/KI185 C/F  (W48"*L55" 1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NSA-COM-08-rm', 'S/B 1003W*1270L  KA125/CA125/KA125 C/F  (W40"*L50" )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NSK-023-rm', 'S/B 1066W*1521L  KA125/CA125*3/KA125 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NSK-023-1-rm', 'S/B 1105W*1521L  KA125/CA125*3/KA125 BC/F M.BOX NSK-023-1 (W44"*L59" 15/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NT4349-1-rm', 'S/B 1563W*720L KA185/CA125/KA185 CF 1:10 (W62"*L28" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-NT4349CANCELL-rm', 'S/B 1553W*720L KA185/CA125/KA185 CF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-PTT-06-rm', 'S/B 1207W*1205L  KA230/CA125*3/KA230 BCF 1:3  M.SNF-1102017-C2-03 PTT-06 (W48"*L47" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-PTT-06-1-rm', 'S/B 1156W*1205L  KA230/CA125*3/KA230 BCF 1:3  M.SNF-1102017-C2-03 PTT-06 (W46"*L47" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-PTT-07-rm', 'S/B 902W*1020L  KA230/CA125*3/KA230 BCF 1:8  M.SNF-1102017-C2-03 PTT-07 (W36"*L40" 3/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-PTTA1-B02A/1-rm', 'S/B 351W*1034L KI150/CA125*3/KI150 BCF 1:2 (W42"L40"3/4 ผ่า 3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-PTTA2-B02A/1-rm', 'S/B 476W*526L KI150/CA125*3/KI150 BCF 1:2 (W38"L20"3/4 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-PTTA3-B02A/1-rm', 'S/B 351W*526L KI150/CA125*3/KI150 BCF 1:2 (W42"L20"3/4 ผ่า 3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-PTTA4-B02A/1-rm', 'S/B 476W*569L KI150/CA125*3/KI150 BCF 1:2 (W38"L22"7/16  ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-PTTA5-B02A/1-rm', 'S/B 1054W*520L KA230/CA125*3/KA230 BC (W42"*L20" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-PTTA6-B02A/1-rm', 'S/B 890W*506L KA185/CA125*3/KA185 BC (W36"*L19" 15/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-PTT-JTEKT-1-rm', 'S/B 958W*1032L  KA230/CA125/KA230 CF 1:4 M.SC (W76"*L40" 11/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RAHB-001-rm', 'S/B 1385W*1405L KA230/CA185*3/KA230 BCF 1:1 ทับรอย 125*1135*125 (W56"*L55" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RAHB-005-rm', 'S/B 476W*1218L KA230/CA125*3/KA230 BCF 1:6 PTT-A MODEL Y4L (W38"*L44" 16/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RAHB-006-rm', 'S/B 476W*1218L KA230/CA125*3/KA230 BCF 1:6 PTT-B MODEL Y4L (W38"*L44" 16/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RAHB-008-1-rm', 'S/B  456W*1492L KA150/CA125*3/KA150  BCF  1:1 ทับรอย 133*190*133 (W38"*L58" 3/4 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RAIR-001-rm', 'S/B 1003W*743L KA230/CA125/KA230 CF (PTT-B1 MODEL  AST-067-1 TO 068) (W40"*L29" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RAIR-002-rm', 'S/B 1207W*683L KA230/CA125/KA230 CF (PTT-B2 MODEL  AST-067-1 TO 068) (W48"*L26" 15/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RAIR-003-rm', 'S/B 1003W*803L KA230/CA125/KA230 CF (PTT-B4 MODEL  AST-067-1 TO 068) (W40"*L31" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RAIR-004-rm', 'S/B 1207W*743L KA230/CA125/KA230 CF (PTT-B6 MODEL  AST-067-1 TO 068) (W48"*L29" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RAIR-005-rm', 'S/B 1562W*1024L KA230/CA125/KA230 CF (PTT-B7 MODEL  AST-067-1 TO 068) (W62"*L40" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RAIR-006-rm', 'S/B 1207W*1012L KA230/CA125/KA230 CF (PAD MODEL  AST-067-1 TO 068) (W48"*L39" 7/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RAIR-051-rm', 'S/B 1257W*640L KA185/CA125*3/KA185 BCF (PTT-1A MODEL  AST-035) (W50"*L25" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RAIR-056-rm', 'S/B 980W*1150L KA185/CA125*3/KA185 BCF 1:1 (W40"*L45" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RAIR-056/AMT-rm', 'S/B 980W*1150L KA185/CA125*3/KA185 BCF 1:1 (W40"*L45" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RAIR-COMMON-1-rm', 'S/B 1105W*626L KA185/CA125*3/KA185 BCF (COMMON PTT-1B&1C MODEL  AST-035 &MODEL SCR-012)  (W44"*L24" 11/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RAIR-COMMON-2-rm', 'S/B 1105W*1005L KA185/CA125*3/KA185 BCF (COMMON PTT-1D&1E MODEL  AST-035 &MODEL SCR-012) (W44"*L39" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RAKE-001-rm', 'S/B 1062W*1212L KA230/CA185*3/KA230  BCF  (W44"*L47" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RAKE-004-rm', 'S/B  577W*962L  KA230/CA125*3/KA230  BCF (W46"*L37" 7/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RAKE-004/005-1-rm', 'S/B  902W*962L  KA230/CA125*3/KA230  BCF (W36"*L37" 7/8) M.MY17 PTT-A =1, PTT-B=2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RAKE-005-1-rm', 'S/B  327W*807L  KA230/CA125*3/KA230  BCF (W52"*L31" 13/16 ผ่า4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RAKE-007-rm', 'S/B 1062W*1212L KA230/CA185*3/KA230  BCF ทับรอย 2 ด้าน', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RAKE-017-rm', 'S/B  1213W*1316L  KA230/CA185*3/KA230  BCF ทับรอย 110*993*110 (W50"*L51" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RAKE-023-rm', 'S/B  1213W*1316L  KA230/CA185*3/KA230  BCF  ทับรอย 2 ด้าน', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RAKE-048-rm', 'S/B 679W*657L  KA185/CA125*3/KA185  BCF  (W54"*L25" 7/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RAKE-048-1-rm', 'S/B 654W*652L  KA185/CA125*3/KA185  BCF  (W52"*L25" 11/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RAKE-049-1-rm', 'S/B  1152W*1220L  KA125/CA125/KA125  CF M.650A&EFC(AKE-016, 017)  (W46"*L48" 1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RAKE-050-rm', 'S/B  1105W*1041L KA230/CA125*3/KA230 BC   (W44"*L40" 16/16) model AKE-017', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RART-001-rm', 'S/B 1003W*1504L KA125/CA125/KA125 C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RART-011-rm', 'S/B 1285W*1252L KA230/CA125*3/KA230 BCF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RART-015-rm', 'SHEET BOARD 1210W*1273L  KA230/CA125/KA230  C/F  1 : 3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RART-015/1-rm', 'SHEET BOARD 1156W*1273L KA125/CA125/KA125 CF (W46"L50" 1/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RART-015-1-rm', 'SHEET BOARD 1511W*1273L  KA230/CA125/KA230  C/F  1 : 4', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RART-016/1-rm', 'SHEET BOARD 578W*500L KA125/CA125/KA125 CF (W46"L19" 11/16 ผ่า 2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RART-017/1-rm', 'SHEET BOARD 578W*720L KA125/CA125/KA125 CF (W46"L28" 3/8  ผ่า 2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RART-018/1-rm', 'SHEET BOARD 1207W*350L  KA125/CA105/KA125 CF (W48"L13" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RART-018/2-rm', 'SHEET BOARD 1207W*702L  KA125/CA105/KA125 CF (W48"L27" 11/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RART-COM-01-rm', 'S/B 1156W*500L KA125/CA125/KA125 CF PTT-W SAMLL BOX ( J08E) (W46"L19" 11/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RART-COM-02-rm', 'S/B 1156W*1444L KA125/CA125/KA125 CF PTT-L SAMLL BOX ( J08E) (W46"L56" 7/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RAUT-001-1-rm', 'S/B 1229W*1326L KA185/CS110*3/KA185 BC/F 1:1 ทับรอย 90*1049*90', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RBOX-FUJI-10-rm', 'S/B 942W*1352L KA230/CA125/KA230  CF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RBOX-FUJI-10-1-rm', 'S/B 953W*1352L KA230/CA125/KA230  CF M.FUJIKOKI 04210  (W38"*L53"1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RBOXFUJI-20-rm', 'S/B 1297W*1332L KA230/CA125/KA230 CF  1:3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RBOX-FUJI-20-rm', 'S/B 872W*1332L KA230/CA125/KA230  CF (W36"*L52" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RCF-001-rm', 'S/B 845W*845L CA125/CA125/CA125 C/F 1:1 MODEL:PAPER PAD SIZE 825 MM. (W68"*L33" 5/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RCYC-001-rm', 'S/B 1714W*1702L KA230/CA185*3/KA230 BCF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RCYC-002-rm', 'S/B 925W*993L KA230/CA125*3/KA230 BCF 1:3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RCYC-011-rm', 'S/B 1003W*776L KA230/CA125/KA230 CF 1:3 (W40"*L30" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RCYC-012-rm', 'S/B 1156W*656L KA230/CA125/KA230 CF 1:24 (W46"*L25" 7/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RCYC-013-rm', 'S/B 1156W*548L KA230/CA125/KA230 CF 1:24 (W46"*L21" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RCYC-014-rm', 'S/B 902W*528L KA185/CA125/KA185 BF 1:25 (W36"*L20" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-015-rm', 'S/B 810W*2210L KA230/CSP150*3/KA230 BC/F  ( SLEEVE) 1:1 MODEL T6 PACK25', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-018-rm', 'S/B 820W*1610L KA230/CS110*3/KA230 BC/F  ( END PANAL-A) 1:1 MODEL T6 PACK25', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-020-rm', 'S/B 900W*948L KA230/CA185*3/KA230 BC 1:1 (W36"*L37" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-037-rm', 'Sheet Board  1359W*1544L  KA230/CS110*3/KA230  BCF 1:1 CARTON BOX AXLE PACK 1 PC(AXLE SHAFT) DV. (W54"xL60" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-037-2-rm', 'SB SIZE 1241W*768L  KA185/CA125*3/KA185  BCF 1:2 CARTON BOX AXLE PACK 1 PC(AXLE SHAFT) (W50"xL30" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-072-1-rm', 'S/B  1562W*1325L KA230/CA185*3/KA230 BCF 1:2 (W62"L52" 3/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-074-1-rm', 'S/B 1206W*1324L KA230/CA125/KA230 CF 1:20 (W48"L52" 3/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-076-rm', 'S/B 1238W*1086L KA230/CA125*3/KA230 BCF 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-076-1-rm', 'S/B 619W*1086L KA230/CS110*3/KA230 BCF 1:1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-076-2-rm', 'S/B 619W*1086L KA230/CA125*3/KA230 BCF 1:1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-077-rm', 'S/B 1238W*1086L KA230/CA125*3/KA230 BCF 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-077-1-rm', 'S/B 619W*1086L KA230/CS110*3/KA230 BCF 1:1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-077-2-rm', 'S/B 619W*1086L KA230/CA125*3/KA230 BCF 1:1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-099-rm', 'S/B 1306W*2276L KA230/CA125*3/KA230 BCF 1:2 (W52"L89" 5/8 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-100-rm', 'S/B  1105W*2290L KA230/CA125*3/KA230 BCF 1:2 (W44"L90" 3/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-108-2-rm', 'S/B 810W*952L KA150/CA125*3/KA150 BCF 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-109-2-rm', 'S/B 810W*834L KA150/CA125*3/KA150 BCF 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-111-rm', 'S/B 820W*948L KA185/CA125*3/KA185 BC/F RDAN-111', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-111-1-rm', 'S/B 820W*948L KA185/CA110*3/KA185 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-111-2-rm', 'S/B 820W*948L KA185/CS110*3/KA185 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-112-rm', 'S/B 900W*948L KA185/CA125*3/KA185 BC/F RDAN-112', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-112-1-rm', 'S/B 900W*948L KA185/CA110*3/KA185 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-112-1/113-1-rm', 'S/B 900W*948L KA185/CA110*3/KA185 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-113-rm', 'S/B 900W*948L KA185/CA125*3/KA185 BC/F RDAN-113', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-114-2-rm', 'S/B 810W*621L KA150/CA125*3/KA150 BCF 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-124-rm', 'S/B 1311W*1306L KA185/CA125*3/KA185   BC/F ทับรอย 2 ด้าน 4 เส้น (W54"*L51" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-124-1-rm', 'S/B 1311W*1306L KA185/CS110*3/KA185   BC/F ทับรอย 2 ด้าน 4 เส้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-125-rm', 'S/B 640W*1050L  KA185/CA125*3/KA185 BCF (W52"*L41" 3/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-125-1 CANCEL-rm', 'S/B 1280W*1050L  KA185/CS110*3/KA185 BCF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-126-rm', 'S/B  1050W*1050L  KA150/CA125*3/KA150  BCF (W42"*L41" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-126-1-rm', 'S/B  1050W*1050L  KA150/CS110*3/KA150  BCF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-128-rm', 'S/B 1311W*1306L KA185/CA125*3/KA185   BC/F ทับรอย 2 ด้าน 4 เส้น(W54"*L51 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-141-rm', 'S/B 1228W*1116L KA230/CA125*3/KA230 BCF 1:1 MODEL P32R PACK 77', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-141-1-rm', 'S/B 1228W*1116L KA230/CS110*3/KA230 BCF 1:1 MODEL P32R PACK 77', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-142-rm', 'S/B 1228W*1116L KA230/CA125*3/KA230 BCF 1:1 MODEL P32R PACK 77', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-142-1-rm', 'S/B 1228W*1116L KA230/CS110*3/KA230 BCF 1:1 MODEL P32R PACK 77', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-161-rm', 'S/B  954W*670L  KA230/CA125/KA230  CF (W38"*L26" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-161-1CANCELL-rm', 'S/B  954W*670L  KA185/CA150/KA185  CF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-161-2-rm', 'S/B  953W*670L  KA230/CA125/KA230  CF (W38"*L26" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-165-rm', 'PTT-A  670W*1086L KA230/CA125*3/KA230 BCF P32R PACK 45 R5T STEEL', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-165-1-rm', 'PTT-A  670W*1086L KA230/CS110*3/KA230 BCF P32R PACK 45 R5T STEEL', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-166-1CANCELLED-rm', 'PTT-B  670W*1086L KA230/CS110*3/KA230 BCF P32R PACK 45 R5T STEEL', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-166-2-rm', 'SB 728W*768L KA230/CSP150*3/KA230 BCF P32R PACK 54 (SIDE SL-B)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-166CANCELLED-rm', 'PTT-B  670W*1086L KA230/CA125*3/KA230 BCF P32R PACK 45 R5T STEEL', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-167-rm', 'SB 728W*840L KA230/CSP150*3/KA230 BCF P32R PACK 54 (SIDE SL-C)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-168-rm', 'SB 728W*720L KA230/CSP150*3/KA230 BCF P32R PACK 54 (SIDE SL-D)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-169-rm', 'SB 728W*1010L KA230/CSP150*3/KA230 BCF P32R PACK 54 (GUIDE PTT-E)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-172-rm', 'S/B 885W*1116L KA230/CA125*3/KA230 BCF 1:1 MODEL P32R PACK 54', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-172-1-rm', 'S/B 885W*1116L KA230/CS110*3/KA230 BCF 1:1 MODEL P32R PACK 54', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-173-rm', 'S/B 885W*1116L KA230/CA125*3/KA230 BCF 1:1 MODEL P32R PACK 54', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-173-1-rm', 'S/B 885W*1116L KA230/CS110*3/KA230 BCF 1:1 MODEL P32R PACK 54', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-174-rm', 'S/B 720W*1100L KA230/CA185*3/KA230 BCF 1:1 MODEL H60A (R5T)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-175-rm', 'S/B 800W*1100L KA230/CA185*3/KA230 BCF 1:1 MODEL H60A (R5T)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-176-rm', 'S/B 1280W*1100L KA230/CA185*3/KA230 BCF 1:1 MODEL H60A (R5T)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-177 (CANCELLED)-rm', 'S/B 1240W*940L KA230/CA185*3/KA230 BCF 1:1 MODEL H60A (R5T)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-177-1-rm', 'S/B 1240W*980L KA230/CA185*3/KA230 BCF 1:1 MODEL H60A (R5T)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-178 (CANCELLED)-rm', 'S/B 1030W*725L KA230/CA185*3/KA230 BCF 1:1 MODEL H60A (R5T)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-178-1-rm', 'S/B 1030W*725L KA185/CA185*3/KA185 BCF 1:1 MODEL H60A (R5T)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-179 (CANCELLED)-rm', 'S/B 1030W*725L KA230/CA185*3/KA230 BCF 1:1 MODEL H60A (R5T)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-180 (CANCELLED)-rm', 'S/B 610W*655L KA230/CA185*3/KA230 BCF 1:1 MODEL H60A (R5T)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-180-1-rm', 'S/B 610W*655L KA185/CA185*3/KA185 BCF 1:1 MODEL H60A (R5T)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-181 (CANCELLED)-rm', 'S/B 610W*655L KA230/CA185*3/KA230 BCF 1:1 MODEL H60A (R5T)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-181-1-rm', 'S/B 610W*655L KA185/CA185*3/KA185 BCF 1:1 MODEL H60A (R5T)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-182-rm', 'S/B 735W*1086L KA230/CA125*3/KA230 BCF 1:1 MODEL D222 PACK 70 R5E (W60"*L42 13/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-186-rm', 'S/B 953W*710L KA230/CA125/KA230 C/F (W38"*L28")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-189-rm', 'S/B 495W*506L KA230/CA185*3/KA230 BC (W40"xL19" 15/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-190-rm', 'S/B 1159W*1914L KA230/CA125*3/KA230 BC (W48"xL75" 3/8) ทับรอย 138*304*275*304*138', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-191-rm', 'S/B 1071W*2246L KA230/CSP150*3/KA230 BC/F  (SIDE SL-A) MODEL P32R PACK77', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-192-rm', 'S/B 1071W*1120L KA230/CSP150*3/KA230 BC/F  (SIDE SL-B,C,D) MODEL P32R PACK77', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-193-rm', 'S/B 1071W*1010L KA230/CSP150*3/KA230 BC/F  (PTT-E) MODEL P32R PACK77', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-194-rm', 'S/B 1071W*1520L KA230/CSP150*3/KA230 BC/F  (END SL-A) MODEL P32R PACK77', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-195-rm', 'S/B 1562W*2125L KA185/CA125*3/KA185 BC/F  1:6 SUPPORT PALLET ASSY-1 MODEL: T-6 PACK 1-2 (W62"xL83" 11/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-195-1-rm', 'S/B 1003W*2125L KA185/CA125*3/KA185 BC/F  1:4 SUPPORT PALLET ASSY-1 MODEL: T-6 PACK 1-3 (W40"xL83" 11/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-196-rm', 'S/B 806W*1200L KA125/CA125*3/KA125 BC/F  1:30 SUPPORT PTT-A4 MODEL: T-6 PACK 1-2 (W64"xL47" 1/4 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-196-1-rm', 'S/B 953W*696L KA125/CA125*3/KA125 BC/F  1:24 SUPPORT PTT-A4 MODEL: T-6 PACK 1-2 (W38"xL27" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-197-rm', 'S/B 883W*2140L KA230/CA185*3/KA230 BC/F  ( SLEEVE RDAN-197) 1:1 MODEL EDL PACK64 W36"*L84" 5/16', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-214-1-rm', 'S/B 650W*2200L KA230/CSP150*3/KA230 BC/F  ( SLEEVE) 1:1 MODEL T6 PACK24', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-214CANCELL-rm', 'S/B 670W*2220L KA230/CSP150*3/KA230 BC/F  ( SLEEVE) 1:1 MODEL T6 PACK24', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-215-1-rm', 'S/B 650W*1775L KA230/CS110*3/KA230 BC/F  ( END PANAL-A) 1:1 MODEL T6 PACK24', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-215CANCELL-rm', 'S/B 670W*1795L KA230/CS110*3/KA230 BC/F  ( END PANAL-A) 1:1 MODEL T6 PACK24', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-216-rm', 'S/B 660W*1123L KA150/CS110*3/KA150 BC/F  (PTT 77) 1:1 MODEL T6 PACK24', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-217-rm', 'S/B 740W*1123L KA150/CS110*3/KA150 BC/F  (PTT LOCK-A,B) 1:1 MODEL T6 PACK24', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-218-rm', 'S/B 1062W*745L KA185/CA125*3/KA185 BC/F  1:3 SUPPORT PALLETASSY-2 MODEL: T-6 PACK 1-2 (W44"xL29" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-218-1-rm', 'S/B 1062W*741L KA185/CA125*3/KA185 BC/F  1:3 SUPPORT PALLETASSY-2 MODEL: T-6 PACK 1-3 (W44"xL29" 3/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDAN-219-rm', 'S/B 1003W*624L KA125/CA125*3/KA125 BC/F  1:48 SUPPORT PTT-A4 MODEL: T-6 PACK 1-3  (W40"xL24" 9/16 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDEN-004-rm', 'S/B 766W*1429L KL205/CA125/KL205 CF M.BOX DENSO INDO (W62"*L56" 5/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDIC-008-rm', 'S/B 501W*867L KA185/CA125*3/KA185 BCF COVER YC DV1:6  (W40"*L34" 3/16 ผ่า2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDIC-011/1-rm', 'S/B 1140W*1278L KA185/CA125*3/KA185 BCF  (W46"*L50" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDIC-013-rm', 'S/B 888W*1289L KA230/CA185*3/KA230 BCF 1:1 (W36"L50" 3/4 ) ทับรอย 2 เส้น 150*588*150', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDIC-015-rm', 'S/B 654W*600L KA230/CA125*3/KA230 BCF RDIC-015 PKG.SCROLL 1:2  (W52"L23" 5/8 ผ่า2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDIC-016-rm', 'S/B 654W*600L KA230/CA125*3/KA230 BCF RDIC-016 PKG.SCROLL 1:2  (W52"L23" 5/8 ผ่า2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDIC-017-rm', 'S/B 654W*600L KA230/CA125*3/KA230 BCF RDIC-017 PKG.SCROLL 1:4  (W52"L23" 5/8 ผ่า2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDIC-021-rm', 'S/B 1562W*656L KA230/CA125*3/KA230 BCF (COMMON COVER-A 1:2 + COVER-C 1:2) (W62"L25" 7/8 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDIC-022-rm', 'S/B 1715W*856L KA230/CA125*3/KA230 BCF COVER-B 1:12 (W68"L33" 3/4 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDIC-026-rm', 'S/B 705W*639L KA185/CA125*3/KA185 BCF COVER M2YC40NXD 1:2 (W56"*L25" 3/16 ผ่า2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RECA-002/003-rm', 'S/B 1511W*1040L KL150/CA125/KL150 CF (W60"L40"  16/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RECA-002/003-1-rm', 'S/B 1511W*520L KL150/CA125/KL150 CF (W60"L20"  1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RFAE-001-rm', 'S/B 1012W*1790L KA230/CA125*3/KA230 BCF 1:4', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RFAE-007-rm', 'S/B 746W*857L KA230/CA185*3/KA230 BCF 1:2 FAE-002 (W60"*L33" 3/4 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RFAE-029-rm', 'S/B  1665W*1900L KA230/CA125*3/KA230 BCF 1:1 ทับรอย 2 ด้าน 4 เส้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RFAE-030-rm', 'S/B  1665W*1900L KA230/CA125*3/KA230 BCF 1:1 (W66" L74" 13/16 )ทับรอย 2 ด้าน 4 เส้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RFAE-036-rm', 'S/B  1336W*2020L KA230/CA125*3/KA230 BCF 1:1 ทับรอย 2 ด้าน 4 เส้น (W54"*L79" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RFAE-041-rm', 'S/B  1336W*2020L KA230/CA125*3/KA230 BCF 1:1 ทับรอย 2 ด้าน 4 เส้น(W54"*L79" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RFAE-049-rm', 'S/B  1664W*1286L KA185/CA125*3/KA185 BCF 1:4 M.T6 PANTHER (W66"*L50" 11/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RFJA-001-rm', 'S/B 902W*1190L  KA125/CA125*3/KA125 BCF 1:5  (W36"L46" 7/8  MODEL:PARTITION FOR VOLVO', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RFJA-002-rm', 'S/B 1105W*790L  KA125/CA125*3/KA125 BCF 1:2  (W44"L31" 1/8  MODEL:PARTITION FOR VOLVO', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RFJA-005-rm', 'S/B 1105W*790L  KA125/CA125*3/KA125 BCF 1:2  (W44"L31" 1/8  MODEL:PARTITION FOR VOLVO', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RFJA-006-rm', 'S/B 1511W*790L  KA125/CA125/KA125 CF 1:1  (W60"L31"  1/8 MODEL:PARTITION FOR VOLVO', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RHIT-001-rm', 'S/B 1334W*1328L KA185/CA125*3/KA185 BCF ทับรอย 2 ด้าน(W54"*L52" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RHIT-001-1-rm', 'S/B 1264W*1270L KA185/CA125*3/KA185 BCF 1:1 CAP ทับรอย 2 ด้าน(W52"*L50" )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RHIT-001-2-rm', 'Sheete Board 1270W*1264L KA185/CA125*3/KA185 BC/F (W52"*L49" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RHIT-003 C01-rm', 'SHEET BOARD 1146W*1130L KA185/CA125/KA185 BF (W46"*L44" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RHIT-003-1-rm', 'S/B 578W*1130L KA150/CA125/KA150 BF 1:1 BEAM (W46"*L44" 1/2 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RHIT-003CANCELL-rm', 'S/B 568W*1130L KA185/CA125/KA185 B/F(W46"*L44" 1/2 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RHOW-001-rm', 'S/B 1695W*2270L KA230/CA125*3/KA230 BCF 1:1 ทับรอย 170*1355*170 (W68"*L89" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RHOW-010-rm', 'S/B 351W*1326L KA230/CA125*3/KA230 BCF 1:2 (W42"*L52" 1/4 ผ่า3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RHOW-024-rm', 'S/B 1092W*1950L KA230/CA125*3/KA230 BCF 1:1 ทับรอย 668-424 M.ASSY-ROOF TRIM BOXIPO-L12F(PACK 6)  (W44"*L76" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RHOW-025-rm', 'S/B 1092W*1370L KA230/CA125*3/KA230 BCF 1:1 ทับรอย 668-424 M.ASSY-ROOF TRIM BOXIPO-L12F(PACK 6) (W44"*L53" 15/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RHOW-026-rm', 'S/B 1308W*695L KA230/CA125*3/KA230 BCF 1:15  M.ASSY-ROOF TRIM BOXIPO-L12F(PACK 6) (W52"*L27" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RHYS-002-rm', 'S/B  1154W*1336L KA125/CS110*3/KA125  BCF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RHYS-002-1-rm', 'S/B  1154W*1336L KA125/CA125*3/KA125  BCF (W46"*L52 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RHYS-004-rm', 'S/B  476W*558L KA185/CA125*3/KA185  BCF 1:4 PTT MODEL ZZB0103 (W38"*L21 16/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RHYS-008-rm', 'S/B  1257W*538L KA125/CA125*3/KA125  BCF (W50"*L21" 3/16) (COVER ZZB0101 TO 0104)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RHYS-009-rm', 'S/B 2097W*2940L KA125/CA125*3/KA125 BC/F ทับรอย 298*1501*298 (W84"*L115" 3/4) (TRAY ZZB0302)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RHYS-010-rm', 'S/B 2097W*2170L KA125/CA125*3/KA125 BC/F ทับรอย 298*1501*298 (W84"*L85" 7/16) (TRAY ZZB0303)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RHYS-011-rm', 'S/B 2097W*2710L KA125/CA125*3/KA125 BC/F ทับรอย 298*1501*298 (W84"*L106" 3/4) (TRAY ZZB0304)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJCH-004-rm', 'S/B  SIZE 710W*1022L KA185/CA125/KA185 CF (W58"xL40" 1/4 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJCH-005-rm', 'S/B  SIZE 710W*922L KA185/CA125/KA185 CF (W58"xL36" 5/6 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJCH-006-1-rm', 'S/B  SIZE 620W*1022L KA185/CA125/KA185 CF (W50"xL40" 1/4 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJCH-007-rm', 'S/B  SIZE 620W*922L KA185/CA125/KA185 CF (W50"xL36" 5/6 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTB-005-rm', 'S/B 936W*1118L KA185/CA125*3/KA185 BCF  PLATE AS-5 1:36 , AS-6 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTB-007-rm', 'S/B 635W*878L KA185/CA125*3/KA185 BCF  PLATE AS-5 1:36 , AS-6 1:12', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-018-rm', 'S/B  1289W*1161L KA185/CA125*3/KA185 BCF 1:1 ทับรอย 2 ด้าน 4 เส้น ( W52"*L46" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-020-rm', 'S/B  892W*1975L KA185/CA125*3/KA185 BCF 1:1 ทับรอย 55*894*1026 (W36"x L77" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-021-rm', 'S/B  1289W*1161L KA185/CA125*3/KA185 BCF 1:1 ทับรอย120*1049*120 ( W52"*L45" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-022-1-rm', 'S/B 1307W*1266L KA230/CA185*3/KA230 BCF 1:2 ทับรอย105*1097*105 (W52"*L49" 7/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-022-2-rm', 'S/B 1307W*1266L KA230/CA125*3/KA230 BCF 1:2 ทับรอย105*1097*105 (W52"*L49" 7/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-029-rm', 'S/B  590W*2306L KA185/CA125*3/KA185 BCF 1:2 (W48"*L90" 13/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-033-rm', 'S/B 340W*1576L KA230/CA125/KA230 CF 1:1 ทับรอย 112*116*112 MODEL:PINION VALVE  ( W42"*L62" 1/16 ผ่า3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-033-1-rm', 'S/B 1054W*1576L KA230/CA125/KA230 CF 1:3  MODEL:PINION VALVE  ( W42"*L62" 1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-038-1-rm', 'S/B 578W*563L KA185/CA125/KA185CF 1:1 MODEL:PINION VALVE  ( W46"*L22" 3/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-038-2-rm', 'S/B 578W*1128L KA185/CS110/KA185CF 1:2 MODEL:PINION VALVE', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-038CANCELL-rm', 'S/B 578W*563L KA230/CA125/KA230 CF 1:1 MODEL:PINION VALVE  ( W46"*L22" 3/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-044-rm', 'S/B 898W*1350L KA230/CA125/KA230 CF 1:2  MODEL:RING CAM  ( W36"*L53" 3/16 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-046/1-rm', 'S/B 466W*292L  KA185/CA125*3/KA185  BCF m.SLODING SHAFT (SS)&SLEEVE YOKE(N6) (W74"*L11" 1/2 ผ่า 4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-046/2-rm', 'S/B 467W*584L  KA185/CA125*3/KA185  BCF m.SLODING SHAFT (SS)&SLEEVE YOKE(N6) (W74"*L23" ผ่า 4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-047/1-rm', 'S/B 622W*384L  KA185/CA125*3/KA185  BCF m.SLODING SHAFT (SS)&SLEEVE YOKE(N6) (W74"*L15" 1/8 ผ่า 3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-047/2-rm', 'S/B 622W*768L  KA185/CA125*3/KA185  BCF m.SLODING SHAFT (SS)&SLEEVE YOKE(N6) (W74"*L30" 1/4 ผ่า 3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-048/1-rm', 'S/B 622W*384L  KA185/CA125*3/KA185  BCF m.SLODING SHAFT (SS)&SLEEVE YOKE(N6) (W74"*L15" 1/8 ผ่า 3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-048/2-rm', 'S/B 622W*768L  KA185/CA125*3/KA185  BCF m.SLODING SHAFT (SS)&SLEEVE YOKE(N6) (W74"*L30" 1/4 ผ่า 3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-049-rm', '  S/B 380W*735L  W46"L28" 15/16  ผ่า 3  KA230/CA125/KA230 CF  1:12  PKG M. RING CAM (AMERICA JTK-044', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-050-rm', '  S/B 380W*620L  W46"L24" 7/16 ผ่า 3  KA230/CA125/KA230 CF  1:12  PKG M. RING CAM (AMERICA JTK-044', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-057-rm', 'S/B  975W*1035L  KA230/CA185*3/KA230 BC (W40"xL40" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-059-rm', 'S/B  346W*800L  KA230/CA125/KA230 CF (W42"xL31" 1/2 ผ่า3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-060-rm', 'S/B  250W*735L  KA230/CA185*3/KA230 BC (W40"xL28" 15/16 ผ่า4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-061-rm', 'S/B  572W*735L  KA230/CA185*3/KA230 BC (W46"xL28" 15/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-070 CANCEL-rm', 'S/B  920W*982L    KA185/CA125*3/KA185  BCF (W38"*L38" 11/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-070-1 CANCEL-rm', 'S/B  920W*982L    KA185/CS110*3/KA185  BCF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-070-2-rm', 'S/B  476W*982L    KA185/CA125*3/KA185  BCF (W38"*L38" 11/16) ผ่า 2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-070-3-rm', 'S/B  1438W*982L    KA185/CS110*3/KA185  BCF 1:6 YLA  W58"xL38" 11/16', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-071 CANCEL-rm', 'S/B  920W*1111L    KA185/CA125*3/KA185  BCF (W38"*L43" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-071-1 CANCEL-rm', 'S/B  920W*1111L    KA185/CS110*3/KA185  BCF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-071-2-rm', 'S/B  476W*1111L    KA185/CA125*3/KA185  BCF (W38"*L43" 3/4) ผ่า 2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-072 CANCEL-rm', 'S/B  920W*1111L    KA185/CA125*3/KA185  BCF (W38"*L43" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-072-1 CANCEL-rm', 'S/B  920W*1111L    KA185/CS110*3/KA185  BCF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-072-2-rm', 'S/B  476W*1111L    KA185/CA125*3/KA185  BCF (W38"*L43" 3/4) ผ่า 2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-073 CANCEL-rm', 'S/B  920W*756L    KA185/CA125*3/KA185  BCF (W38"*L29" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-073-1 CANCEL-rm', 'S/B  920W*756L    KA185/CS110*3/KA185  BCF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-073-2CANCELL-rm', 'S/B  920W*756L    KA185/CA125*3/KA185  BCF (W38"*L29" 13/16) ผ่า 2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-073-3-rm', 'S/B  476W*756L    KA185/CA125*3/KA185  BCF (W38"*L29" 13/16) ผ่า 2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-073-4-rm', 'S/B  1438W*756L    KA185/CS110*3/KA185  BCF 1:6 YLA W58"xL29" 13/16', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-074 CANCEL-rm', 'S/B  1111W*680L    KA185/CS125*3/KA185  BCF (W46"*L26" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-074-1 CANCEL-rm', 'S/B  1111W*680L    KA185/CS110*3/KA185  BCF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-074-2-rm', 'S/B  1156W*680L    KA185/CA125*3/KA185  BCF (W46"*L26" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-075-rm', 'S/B  1329W*1345L    KA230/CA125*3/KA230  BC/F ทับรอย 2 ด้าน 4 เส้น (W54"*L53")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-081-rm', 'S/B  1329W*1345L    KA230/CA125*3/KA230  BC/F ทับรอย 105*1119*105 (W54"*L53")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-083-rm', 'S/B  1389W*1372L KA185/CA125*3/KA185  BC/F ทับรอยด้าน W 110*1169*110 (W56"*L54 "1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-084-rm', '  S/B 1281W*1342L   W52"L52" 7/8  KA230/CA125*3/KA230 BCF  1:1  PKG M.104D JAMY', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-084-1-rm', '  S/B 1281W*1342L   W52"L52" 7/8  KA230/CA185*3/KA230 BCF  1:1  PKG M.104D JAMY', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-086-rm', '  S/B 876W*1092L  KA230/CA125*3/KA230 BCF  1:2  PKG M.104D JAMY W70"L42" 16/16 ผ่า 2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-087-rm', '  S/B 876W*1092L  W70"L42" 16/16 ผ่า 2  KA230/CA125*3/KA230 BCF  1:2  PKG M.104D JAMY', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-088-rm', '  S/B 876W*1026L  W70"L40" 7/16  ผ่า 2  KA230/CA125*3/KA230 BCF  1:2  PKG M.104D JAMY', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-089-rm', '  S/B 856W*2191L KA230/CA125*3/KA230 BCF  1:2  PKG M.104D JAMY   (W68"L86" 5/16 ผ่า 2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-090-rm', '  S/B 856W*2062L KA230/CA125*3/KA230 BCF  1:1  PKG M.104D JAMY  (W68"L81"  3/16 ผ่า 2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-092-rm', 'S/B 1308W*1004L (W52"L39" 9/16 ) KA230/CA125*3/KA230 BCF PTT-2E', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-093-rm', 'S/B 692W*1092L KA230/CA125/KA230 CF1:4 PTT-C4 PKG M.104D JAMY (W56"*L42" 16/16 ผ่า2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-COM-071,072-rm', 'S/B  1438W*1111L    KA185/CS110*3/KA185  BCF 1:3 YLA W58"xL43" 3/4', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RJTK-COMMON-rm', 'S/B 1867W*768L KA185/CA125*3/KA185 BCF COMMON MODEL GJ /N6  (W74"*L30" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKBN-001-1-rm', 'SHEET BOARD 1040W*610L KA185/CA125*3/KA185 BCF RKBN-001 (W42"*L24" 1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKBN-001CANCELLED-rm', 'SHEET BOARD 1040W*1252L KA185/CA125*3/KA185 BCF RKBN-001 (W42"*L49" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKEL-001-rm', 'S/B 1246W*1442L KI125/CA125*3/KI125 BCF ทับรอย 105*1036*105  (W50"*L56" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKEL-004-rm', 'S/B 1087W*1042L KI185/CS110*3/KI185 BCF (W44"*L41" 1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKEL-004-1-rm', 'S/B 1087W*1042L KI150/CA125*3/KI150 BCF (W44"*L41" 1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKIR-066-rm', 'S/B 736W*1092L  KA230/CA125*3/KA230 BCF 1:4', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKIR-067-rm', 'S/B 736W*1092L  KA230/CA125*3/KA230 BCF 1:4', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKIR-071-rm', 'S/B 1310W*1316L KA230/CA185*3/KA230 BC', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKIR-072-rm', 'S/B 476W*1056L  KA230/CA125/KA230 CF 1:1 (W38"*L41" 5/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKIR-073-rm', 'S/B 476W*1043L  KA230/CA125/KA230 CF 1:1 (W38"*L41" 11/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKIR-081-rm', 'S/B 467W*1056L  KA230/CA125/KA230 CF 1:1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKIR-082-rm', 'S/B 459W*1043L  KA230/CA125/KA230 CF 1:1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKIR-086-rm', 'S/B 1126W*2071L  KA230/CA185*3/KA230 BCF 2:1 (W46"*L81 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKIR-088-rm', 'S/B 527W*1086L  KA230/CA125/KA230 CF 1:1 (W42"*L42"13/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKIR-089-rm', 'S/B 527W*915L  KA230/CA125/KA230 CF 1:1 (W42"*L36"1/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKIR-093-rm', 'S/B 980W*2071L KA230/CA185*3/KA230 BCF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKIR-095-rm', 'S/B 1180W*1346 KA230/CA185*3/KA230 BCF ทับรอย 110*960*110 (W48"*L53")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKIR-099-rm', 'S/B 559W*1129L  KA230/CA125/KA230 CF 1:1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKIR-100-rm', 'S/B 584W*1131L  KA230/CA125/KA230 CF 1:1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKIR-101-rm', 'S/B 628W*1092L  KA230/CA125*3/KA230 BCF  M07 (W50"*L43" ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKIR-102-rm', 'S/B 552W*1092L  KA230/CA125*3/KA230 BCF  M07 (W44"*L43" ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKIR-103-rm', 'S/B 781W*680L  KA230/CA125*3/KA230 BCF  M07 (W62"*L26" 13/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKIR-104-rm', 'S/B 552W*740L  KA230/CA125*3/KA230 BCF  M07 (W44"*L29" 3/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKT-COM-01-rm', 'Sheet Board 1105W*1582L KA185/CA125/KA185  CF PKG.FOR MULTI PLATE (W44"*L62" 5/16 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKTW-013-rm', 'S/B 1170W*1348L KA230/CA185*3/KA230 BCF 1:1 ทับรอย 2 ด้าน 4 เส้น (W48"*L53" 1/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKTW-013-1-rm', 'S/B 1170W*1348L KA230/CA185*3/KA230 BCF 1:1 ทับรอย 125*920*125', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKTW-015-rm', 'S/B 1234W*1307L KA185/CA125/KA185 C/F 1:1 TRAY PTT  OIL PUMP COVER (W50"*L51" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKTW-018-rm', 'S/B 1299W*1361L KA230/CA125*3/KA230 BC/F 1:1 (W52"*l53" 5/8) CAP/BOTTOM COMMON DV.OIL PUMP/PKG FOR RET ASSY BRG)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKTW-022-rm', 'SB 1144W*1217L KA185/CA125/KA185 C/F  (TRAY PTT)1:1 (PKG FOR RET ASSY BRG)  W46"xL47" 15/16', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKTW-024-rm', 'SB 1003W*1028L KA185/CA125*3/KA185 BC/F  1:18 (PTT-E3)(PKG FOR RET ASSY BRG) W40"*L40" 1/2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKTW-028-rm', 'S/B 1356W*1326L KA230/CA125*3/KA230 BC/F 1:1 (W54"*L52" 1/4) CAP/BOTTOM M.PKG.FOR RET ASST BRG', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKTW-029-1-rm', 'S/B 880W*1411L  KA230/CA185*3/KA230 BCF 1:1 SLEEVE-C1 (W36"*L55" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKTW-030-rm', 'S/B 880W*1482L  KA230/CA185*3/KA230 BCF 1:1 SLEEVE-B1,C1 MODEL : PKG FOR RET ASSY BRG (PUMP-014 TO 016) (W36"*L58" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKTW-032-rm', 'S/B 880W*1411L KA230/CA125*3/KA230 BC/F 1:9 (W36"*L55" 9/16) SUPPORT M.PKG.FOR RET ASST BRG', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKTW-COM-rm', 'SB 902W*1107L KA185/CA125/KA185 C/F  (E2,E4)1:1 (PKG FOR RET ASSY BRG) W36"*L43"5/8', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKYB-003-rm', 'S/B 1409W*1382L KA185/CA125*3/KA185 BC/F 1:3 MODEL:BOX CP (56"*L54" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKYB-003-1-rm', 'S/B 1359W*1361L KA125/CA125/KA125 C/F 1:3 MODEL:BOX CP (54"*L53" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKYB-004-rm', 'S/B 629W*570L KA185/CA125*3/KA185 BC/F 1:8 MODEL:BOX CP (50"*L22" 1/2 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKYB-004-1-rm', 'S/B 629W*1140L KA185/CA125*3/KA185 BC/F 1:16 MODEL:BOX CP (50"*L44" 15/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKYB-005-rm', 'S/B 629W*780L KA185/CA125*3/KA185 BC/F 1:8 MODEL:BOX CP (50"*L30" 3/4 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKYB-006-rm', 'S/B 1105W*380L KA125/CA125/KA125 C/F 1:4 MODEL:BOX CP (44"*L15")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RKYB-006-1-rm', 'S/B 1410W*764L CA105/CA105/CA105 C/F 1:10 MODEL:BOX CP (56"*L30" 1/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RMSE-002 CANCEL-rm', 'S/B 781W*954L KA185/CA125*3/KA185  BCF 1:1 MODEL:PACKAGE FOR CONTROL PANEL B401 (W62"*L23" 7/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RMSE-002-1-rm', 'S/B 781W*594L KA185/CA125*3/KA185  BCF 1:1 MODEL:PACKAGE FOR CONTROL PANEL B401 (W62"*L23" 7/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RMSE-003-rm', 'S/B 902W*718L KA185/CA125*3/KA185  BCF 1:1 MODEL:PACKAGE FOR CONTROL PANEL B401  (W36"*L28" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RMSE-014-rm', 'S/B 1108W*1108L KA230/CA125*3/KA230  BCF ทับรอย 2 ด้าน', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RMSE-014-1-rm', 'S/B 1106W*1106L KA230/CA125*3/KA230  BCF ทับรอย 2 ด้าน(W44"*L43" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RMSE-023-rm', 'S/B 902W*722L KA185/CA125*3/KA185  BCF (W36"L28" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RMSE-044-rm', 'S/B SIZE 1131W*1856L KA230/CA125*3/KA230 BCF  1:1  (W46"*L73" 1/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RMSE-061-rm', 'S/B SIZE 1105W*1170L KA230/CA125*3/KA230 BCF PTT-C2   1:2  M.BD4002 (W44"*L46" 1/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNDK-004-rm', 'S/B 986W*1152L KA185/CA125/KA185 C 1:18 (W40"*L45" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNDK-004-1-rm', 'S/B 1003W*1152L KA185/CA125/KA185 C 1:18 (W40"*L45" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNDK-006-rm', 'S/B 1156W*1293L KA150/CA125/KA150 C 1:3 MODEL:MEXICO SMA2104(14PC0146-150) (W46"*L50" 15/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNDK-007-rm', 'S/B 1003W*365L KA150/CA125/KA150 C 1:4 MODEL:MEXICO SMA2104(14PC0146-150) (W40"*L14" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNDK-008-rm', 'S/B 1285W*1461L KA230/CA125*3/KA230 BC 1:1 MODEL:319213VXOB (W52"*L57" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNDK-009-rm', 'S/B 953W*2287L KA230/CA185*3/KA230 BC 1:4 MODEL:319213VXOB (W38"*L90" 1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNDK-010-rm', 'S/B 1285W*1386L KA230/CA125*3/KA230 BC 1:1 MODEL:3192104XOA (W52"*L54" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNDK-011-rm', 'S/B 1003W*2212L KA230/CA185*3/KA230 BC 1:4 MODEL:3192104XOA (W40"*L87"1/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNDK-012-rm', 'S/B 902W*610L KA125/CA105/KA125 C 1:12 MODEL:BOX JAPAN (W36"*L24"1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNGN-001-rm', 'S/B 1003W*1575L KA230/CA125/KA230 CF 1:3 (W40"L62" 1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNGN-002-rm', 'S/B 1105W*1074L KA185/CA125/KA185 CF 1:36 (W44"L42" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNGN-003-rm', 'S/B 1105W*988L KA185/CA125/KA185 CF 1:72 (W44"L38" 15/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNGN-004-rm', 'S/B 1054W*711L KA125/CA125/KA125 CF 1:6 (W42"L27" 16/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-001 C01-rm', 'S/B  1460W*1372L  KA230/CA185*3/KA230  BCF ทับรอย 138*1184*138 (W58"*L54" 1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-002-rm', 'S/B  1204W*1208L  KA185/CA125/KA185  CF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-003-rm', 'S/B  1300W*1364L  KA230/CA185*3/KA230 BCF  (W52"L53" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-004-rm', 'S/B  1374W*1048L  KA185/CA125/KA185  CF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-005-rm', 'S/B  1288W*1048L  KA185/CA125/KA185  CF (W52"L41" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-006-rm', 'S/B  1288W*1048L  KA185/CA125/KA185  CF (W52"L41" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-007-rm', 'S/B  629W*830L  KA230/CA125/KA230  CF  (TRAY ASSY B MODEL:XC2A (099A))(W50"L32" 11/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-007-1-rm', 'S/B  629W*830L  KA150/CA125/KA150  CF  (TRAY ASSY B MODEL:XC2A (099A))(W50"L32" 11/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-008-rm', 'S/B  1359W*470L  KA230/CA125/KA230  CF  (TRAY ASSY C MODEL:XC2A (099A))(W54"L18" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-008-1-rm', 'S/B  1359W*940L  KA230/CA125/KA230  CF  (TRAY ASSY C MODEL:XC2A (099A))(W54"L37" 1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-057-rm', 'S/B 921W*2406L KA185/CA125*3/KA185  BC/F 1:2 ทับรอย 135*651*135 (TOA/TRO) (W38"*L94" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-072-rm', 'S/B 854W*1484L  KA185/CA125/KA185  CF (W68"*L58" 7/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-101-rm', 'S/B 949Wx1656L  KA185/CA105/KA185 C/F ทับรอย 204*541*204 (W38"*L65" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-102-rm', 'S/B 1640W*1640L  KA185/CA105/KA185  CF (W66"*L64" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-102-IN-rm', 'S/B W66" * L64" 5/8 ) KA185/CA105/KA185  CF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-103-rm', 'S/B 1640W*1640L  KA185/CA105/KA185  CF (W66"*L64" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-106-1-rm', 'S/B 1680W*1640L KA125/CA105*3/KA125 BCF RNHP-106 (W68"*L64" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-110-rm', 'S/B  1405W*1256L  KA230/CA125*3/KA230  BCF ทับรอย 110*1185*110 (W56"*L49" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-111-1-rm', 'S/B 646W*2221L KA230/CA125*3/KA230 BC/F 1:1  (W52"*L87" 1/2 ผ่า2) MODEL:AS MID/DR MID', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-164-rm', 'SHEET BOARD 935W-1494L KA230/CA125/KA230  C/F  1 : 2 (W38"*L58" 7/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-164-1-rm', 'SHEET BOARD 935W-747L KA230/CA125/KA230  C/F  1 : 1 (W38"*L29" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-165-rm', 'SHEET BOARD 1116W*1494L  KA230/CA125/KA230  C/F  1 : 2 (W46"*L58" 7/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-165-1-rm', 'SHEET BOARD 1116W*747L  KA230/CA125/KA230  C/F  1 : 1 (W46"*L29" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-166-rm', 'SHEET BOARD 1314W*1040L  KA230/CA125/KA230  C/F  1 : 10 (W54"*L41")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-166-1-rm', 'SHEET BOARD 1314W*520L  KA230/CA125/KA230  C/F  1 : 5 (W54"*L20" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-166-2-rm', 'SHEET BOARD 1314W*1040L  KA230/CS110/KA230  C/F  1 : 10 (W54"*L41)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-167-rm', 'SHEET BOARD 914W*1040L  KA230/CA125/KA230  C/F  1 : 10 (W38"*L41")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-167-1-rm', 'SHEET BOARD 914W*520L  KA230/CA125/KA230  C/F  1 : 5 (W38"*L20 1/2")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-167-2-rm', 'SHEET BOARD 935W*1040L  KA230/CS110/KA230  C/F  1 : 5 (W38"*L41")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-168-rm', 'SHEET BOARD 1014W*1040L  KA230/CA125/KA230  C/F  1 : 10 (W42"*L41")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-168-1-rm', 'SHEET BOARD 1014W*520L  KA230/CA125/KA230  C/F  1 : 5 (W42"*L20" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-169-1-rm', 'SHEET BOARD 1314W*640L  KA230/CA125/KA230  C/F  1 : 10 (W54"*25" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-178-rm', 'S/B 1040W*968L KA185/CA125/KA185 CF 1:20  M.YWO (PACK32) (W42"*L38" 1/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-179-rm', 'S/B 816W*968L KA185/CA125/KA185 CF 1:16  M.YWO (PACK32) (W66"*L38" 1/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-180-rm', 'S/B 840W*1176L KA185/CA125/KA185 CF 1:16  M.YWO (PACK32) (W68"*L46" 5/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-183-rm', 'S/B 892W*872L KA185/CA125/KA185 CF 72" * 34" 3/8 ผ่า 2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-183-1-rm', 'S/B 446W*872L KA185/CA125/KA185 C 1:2 MODEL 100A PU (W36"*L34" 3/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-183-2-rm', 'S/B 451W*872L KA185/CA125/KA185 C 1:2 MODEL 100A PU (W36"*L34" 3/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-184-1-rm', 'S/B 456W*434L KA230/CA125*3/KA230 BCF 1:6 MODEL 100A PU (W38"*L17" 1/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-184-2-rm', 'S/B 456W*434L KA230/CA125*3/KA230 BCF 1:6 MODEL 100A PU (W38"*L17" 1/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-184-3-rm', 'S/B 456W*868L KA230/CA125*3/KA230 BCF 1:12 MODEL 100A PU (W38"*L34" 3/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-185-1-rm', 'S/B 510W*458L KA230/CA125*3/KA230 BCF 1:15 MODEL 100A PU (W42"*L18" 1/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-185-2-rm', 'S/B 527W*458L KA230/CA125*3/KA230 BCF 1:15 MODEL 100A PU (W42"*L18" 1/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-185-3-rm', 'S/B 527W*916L KA230/CA125*3/KA230 BCF 1:30 MODEL 100A PU (W42"*L36" 1/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-186-1-rm', 'S/B 515W*410L KA230/CA125*3/KA230 BCF 1:15 MODEL 100A PU (W42"*L16" 3/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-186-2-rm', 'S/B 527W*410L KA230/CA125*3/KA230 BCF 1:15 MODEL 100A PU (W42"*L16" 3/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-186-3-rm', 'S/B 527W*820L KA230/CA125*3/KA230 BCF 1:30 MODEL 100A PU (W42"*L32" 5/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-187-1-rm', 'S/B 446W*872L KA185/CA125/KA185 C 1:2 MODEL 100A PU (W36"*L34" 3/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-187-2-rm', 'S/B 451W*872L KA185/CA125/KA185 C 1:2 MODEL 100A PU (W36"*L34" 3/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-188-rm', 'S/B 840*820L KA125/CA125*3/KA125 BC 68" * 32" 5/16 ผ่า 2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-188-1-rm', 'S/B 420W*820L KA125/CA125*3/KA125 BC 1:8 MODEL 100A PU (W68"*L32" 5/16 ผ่า4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-188-2-rm', 'S/B 429W*820L KA125/CA125*3/KA125 BC 1:8 MODEL 100A PU (W68"*L32" 5/16 ผ่า4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-189-rm', 'S/B 741W*2259L KA125/CA125/KA125 C 1:1 MODEL OUTLET ASSY AS/DR (RH) (W60"*L88" 15/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-199-rm', 'S/B 654W*604L KA185/CA125/KA185 CF 1:7 FOR VENT NT4545 (W52"*L23" 13/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-203-rm', 'S/B 527W*710L KA125/CA105*3/KA125 BC 1:10 MODEL 782B,782D (W42"*L28" ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-204/205-rm', 'S/B 552W*572L KA125/CA105*3/KA125 BC 1:10 MODEL 782B,782D (W44"*L22" 9/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-205CANCELL-rm', 'S/B 1101W*1528L KA230/CA125*3/KA230 BCF 1:1 MODEL:L02B/B02A STRG WEEL  (W44"*L60" 3/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-206CANCELL-rm', 'S/B 832W*642L KA230/CA125/KA230 CF 1:1 MODEL:L02B/B02A STRG WEEL (W66"*L25" 5/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-207-rm', 'S/B 1301W*1655L  KA230/CA125*3/KA230 BCF 1:1 M.L02B/B02A PACK 6 (NT4579-1) (W52"*L65" 3/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-208-rm', 'S/B 527W*479L  KA185/CA125/KA185 CF 1:5  DV MODEL XC2A (099A)  AS (W42"*L18" 7/8 ผ่า 2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-208-1-rm', 'S/B 527W*958L  KA185/CA125/KA185 CF 1:10  DV MODEL XC2A (099A)  AS W42"*L37" 3/4 ผ่า2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-208-2-rm', 'S/B 1022W*958L  KA185/CA125/KA185 CF 1:20  DV MODEL XC2A (099A)  AS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-209-rm', 'S/B 654W*591L  KA185/CA125/KA185 CF 1:2  DV MODEL XC2A (099A)  AS (W52"*L23" 5/16 ผ่า 2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-209-1-rm', 'S/B 654W*600L  KA185/CA125/KA185 CF 1:2  DV MODEL XC2A (099A)  AS W52"*L23" 5/8 ผ่า2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-209-2-rm', 'S/B 654W*1190L  KA185/CA125/KA185 CF 1:4  DV MODEL XC2A (099A)  AS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-211-rm', 'S/B 680W*524L KA185/CA125/KA185 CF 1:6 FOR VENT NT4547 (W54"*L20" 11/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-212-rm', 'S/B 953W*604L KA185/CA125/KA185 CF 1:3 FOR VENT NT4547 (W38"*L23" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-212-1-rm', 'S/B 629W*604L KA185/CA125/KA185 CF 1:2 FOR VENT NT4547 (W50"*L23" 13/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-227-rm', 'SB 705W*506L KA125/CA125/KA125 CF MODEL OUTLET ASSY CTR (RH) 1:6 W56''''*L19'''' 15/16 ผ่า 2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-228-rm', 'SB 679W*566L KA125/CA125/KA125 CF MODEL OUTLET ASSY AS/DR 1:4 W54''''*L22'''' 5/16 ผ่า 2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-229-rm', 'S/B 603W*539L  KL250/CA125/KL250 CF 1:4  PTT-D1  MODEL:L42P (W48"*L21" 1/4 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-230-rm', 'S/B 577W*746L  KL250/CA125/KL250 CF 1:4  PTT-D2  MODEL:L42P (W46"*L29" 3/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-231-rm', 'S/B 603W*746L  KL250/CA125/KL250 CF 1:4  PTT-D3  MODEL:L42P (W48"*L29" 3/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHP-232-rm', 'S/B 540W*746L  KL250/CA125/KL250 CF 1:4  PTT-D4  MODEL:L42P (W44"*L29" 3/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHS-019-1-rm', 'S/B 1249W*1099L KA185/CA125*3/KA185 BCF 1:1 MODEL ORBITING SCROLL ทับรอย 110*1029*110  (W50"*L43" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHS-028-rm', 'S/B 1105W*922L KA185/CA125*3/KA185  BCF 1:1 (W44"*L36" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHS-029 CANCEL-rm', 'S/B 902W*852L KA185/CA125*3/KA185  BCF 1:8 (W36"*L33" 9/16 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHS-029-1-rm', 'S/B 953W*852L KA185/CA125*3/KA185  BCF 1:16 (W38"xL33" 9/16 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHS-030 CANCEL-rm', 'S/B 902W*1009L KA185/CA125*3/KA185  BCF 1:8 (W36"*L39" 3/4 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHS-030-1-rm', 'S/B 953W*1009L KA185/CA125*3/KA185  BCF 1:16 (W38"*L39" 3/4 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHS-032-rm', 'S/B 1105W*943L KA185/CA125*3/KA185  BCF 1:1 (W44"*L37" 1/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHS-033-1-rm', 'S/B 1156W*852L KA185/CA125*3/KA185  BCF 1:16 (W46"*L33" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHS-034 CANCEL-rm', 'S/B 276W*1009L KA185/CA125*3/KA185  BCF 1:4 (W44"*L39" 3/4 ผ่า4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNHS-034-1-rm', 'S/B 1156W*1009L KA185/CA125*3/KA185  BCF 1:16 (W46"*L39" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNSB-007-rm', 'S/B 1247W*1396L KA230/CA125*3/KA230 BC 1:1 ทับรอย 2 ด้าน 4 เส้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNSB-010-1-rm', 'S/B 1344W*1353L KA230/CA185*3/KA230 BCF 1:1 ทับรอย 110*1124*110 (W54"*L53" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNSB-010CANCELL-rm', 'S/B 1374W*1383L KA230/CA185*3/KA230 BCF 1:1 ทับรอย 125*1124*125 (W56"*L54" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNSB-012-rm', 'S/B SIZE  1003W*1559L    KA230/CA185*3/KA230  BC/F  1:1 (T-6) (W40"*L61" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNSB-037-rm', 'S/B 1288W*1215L KA185/CA125*3/KA185 BCF 1:12 (W52"*L47" 7/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNSB-038-rm', 'S/B 1288W*1215L KA185/CA125*3/KA185 BCF 1:12 (W52"*L47" 7/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNSB-039-rm', 'S/B 1330W*1362L KA230/CA185*3/KA230 BCF 1:1 ทับรอย 110*1110*110  (W54"*L53" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNSB-043-rm', 'S/B 1110W*834L KA125/CA125/KA125 CF  1:90', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNSB-043-1-rm', 'S/B 385W*278L KA125/CA125/KA125 CF  1:10 (W46"*L11"  ผ่า 3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNSB-044-rm', 'S/B 1110W*928L KA125/CA125/KA125 CF  1:60', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNSB-044-1 CANCEL-rm', 'S/B 370W*464L KA125/CA125/KA125 CF  1:10 (W46"*L18" 1/4 ผ่า 3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNSB-044-2-rm', 'S/B 385W*464L KA125/CA125/KA125 CF  1:10 (W46"*L18" 1/4 ผ่า 3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNSB-044-3-rm', 'S/B 385W*928L KA125/CA125/KA125 CF  1:10 (W46"*L36" 9/16 ผ่า 3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNSB-047-rm', 'S/B 1192W*928L KA185/CA125/KA185 CF 1:2 (W48"*L36" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNSB-048-rm', 'S/B 578W*1112L KA230/CA125/KA230 CF (W46"*L43" 13/16 ผ่า 2) Model :YP5', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNSB-049-rm', 'S/B 491W*722L KA230/CA125/KA230 CF (W40"*L28" 7/16 ผ่า 2) Model :YP5', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNSB-050-1CANCELL-rm', 'S/B 557W*1075L KA185/CA125*3/KA185 BCF RNSB-050 (W46"*L42" 3/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNSB-050-2-rm', 'S/B 553W*1075L KA185/CA125*3/KA185 BCF RNSB-050 (W44"*L42" 3/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNSB-050CANCELL-rm', 'S/B 1114W*1090L KA185/CA125*3/KA185 BCF RNSB-050', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNSB-051-1CANCELL-rm', 'S/B 566W*1140L KA185/CA125*3/KA185 BCF RNSB-051 (W46"*L44" 15/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNSB-051-2-rm', 'S/B 553W*1140L KA185/CA125*3/KA185 BCF RNSB-051-2 (W44"*L44" 15/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNSB-051CANCELL-rm', 'S/B 1132W*1140L KA185/CA125*3/KA185 BCF RNSB-051', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNSB-056-rm', 'S/B 577W*1215L KA185/CA125*3/KA185 BCF 1:6 PTT-B MODEL LT30 (W46"*L47 7/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RNSB-057-rm', 'S/B 577W*1215L KA185/CA125*3/KA185 BCF 1:6 PTT-C MODEL LT30 (W46"*L47 7/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RPRV-001/1-rm', 'S/B 560W*560L KA230/CA125*3/KA230 BCF (W46"*L22" 1/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RPRV-002/2CANCELLED-rm', 'S/B 1080W*430L KA230/CA125*3/KA230 BCF (W44"*L16" 15/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RPRV-002/3-rm', 'S/B 1080W*860L KA230/CA125*3/KA230 BCF 1:2 (W44"*L33" 7/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RPSO-008703-rm', 'S/B  SIZE 476W*1622L  KL175/CA125/KL175 CF (W38"xL63" 7/8 ผ่า2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RPSO-008704-rm', 'S/B  SIZE 1003W*620L KA230/CA125/KA230 CF (W40"xL24" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RPT-01-rm', 'SHEET BOARD 643W*1200L KA125/CA125*3/KA125 BCF (W52"*L47" 1/4 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RPT-01-1-rm', 'SHEET BOARD 643W*1200L KA125/CS110*3/KA125 BCF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSCR-002-rm', 'S/B 552W*508L  KA185/CA125*3/KA185 BCF 1:2 (W44"*L20" 1/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSCR-004-rm', 'S/B 552W*1005L  KA185/CA125*3/KA185 BCF 1:2 (W44"*L39" 5/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSCR-006-rm', 'S/B 546W*626L  KA185/CA125*3/KA185 BCF 1:2 (W44"*L24" 11/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSCR-006-1-rm', 'S/B 552W*626L  KA185/CA125*3/KA185 BCF 1:2 (W44"*L24" 11/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSCR-007-rm', 'S/B 552W*626L  KA185/CA125*3/KA185 BCF 1:2 (W44"*L24" 11/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSCR-008-rm', 'S/B 546W*1005L  KA185/CA125*3/KA185 BCF 1:2 (W44"*L39" 9/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSCR-008-1-rm', 'S/B 552W*1005L  KA185/CA125*3/KA185 BCF 1:2 (W44"*L39" 5/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSCR-009-rm', 'S/B 552W*1005L  KA185/CA125*3/KA185 BCF 1:2 (W44"*L39" 5/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSEW-001-rm', 'S/B 577W*830L KL205/CA185/KL205 CF 1:6 (W46"*L32" 11/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSEW-001-1-rm', 'S/B 577W*840L KL205/CA185/KL205 CF 1:6 (W46"*L33" 1/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSEW-001-2-rm', 'S/B 577W*840L KH200/CA185/KH200 C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSEW-002-rm', 'S/B 577W*830L KL205/CA185/KL205 CF 1:6 (W46"*L32" 11/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSEW-002-1-rm', 'S/B 577W*840L KL205/CA185/KL205 CF 1:6 (W46"*L33" 1/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSEW-002-2-rm', 'S/B 577W*840L KH200/CA185/KH200 C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSEW-003-rm', 'S/B 577W*830L KL205/CA185/KL205 CF 1:6 (W46"*L32" 11/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSEW-004-rm', 'S/B 630W*1240L KL205/CA185/KL205 CF 1:2 (W76"*L48" 7/8 ผ่า 3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSEW-004-1-rm', 'S/B 630W*1240L KL250/CA185/KL175 CF 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSEW-004-2-rm', 'S/B 630W*1240L KL250/CA185/KL205 CF 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSEW-004-3-rm', 'S/B 630W*1240L KL205/CA185/KL175 CF 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSEW-004-4-rm', 'S/B 639W*1240L KL205/CA185/KL205 CF 1:2 (W76"*L48" 7/8 ผ่า 3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSEW-004-5-rm', 'S/B 630W*1410L KL205/CA185/KL205 CF 1:2 (W76"*L55" 9/16 ผ่า 3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSEW-006-rm', 'S/B 948W*716L CA125/CA125/CA125 CF 1:12', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSEW-006-1-rm', 'S/B 963W*726L CA125/CA125/CA125 CF 1:12', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSEW-006-2-rm', 'S/B 963W*726L CA125/CS110/CA125 CF 1:12', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSEW-006-3-rm', 'S/B 963W*726L CA105/CA105/CA105 CF 1:12 (W40"*L28" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSEW-006-4-rm', 'S/B 1003W*726L CA105/CA105/CA105 CF 1:12 (W40"*L28" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSEW-015-rm', 'S/B 577W*830L KL205/CA185/KL205 CF 1:6 (W46"*L32" 11/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSEW-015-1-rm', 'S/B 577W*840L KL205/CA185/KL205 CF 1:6 (W46"*L33" 1/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSEW-015-2-rm', 'S/B 577W*840L KH200/CA185/KH200 C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSEW-016-rm', 'S/B 1185W*1282L CA125/CA125*3/CA125 BCF  1 : 0.5 SUPPORT:BOX REEL 24,34,156 ทับรอย 315*555*315 (W48"*L50" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSGB-001-rm', 'SHEET BOARD 1000W*940L  KA125/CA125*3/KA125  BC/F  1 : 0.5', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSGB-001-1-rm', 'SHEET BOARD 1000W*940L  KA125/CA125/KA125  C/F  1 : 0.5', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSGB-026-2-rm', 'S/B 857W*520L  KA125/CA125/KA125  C/F 1:1 (W68"*L20" 1/2 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSGB-033-2-rm', 'S/B 857W*520L  KA125/CA125/KA125  C/F 1:1 (W68"*L20" 1/2 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSGB-035-1-rm', 'S/B 730W*880L  KA125/CA125/KA125  C/F 1:1 (W58"*L34"11/16ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSGB-043-1-rm', 'S/B 730W*880L  KA125/CA125/KA125  C/F 1:1 (W58"*L34"11/16ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSGB-085-rm', 'S/B 1243W*1286L KL205/CA125*3/KL205 BCF 1:1 (W50"*L50" 11/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSGB-087/1-rm', 'S/B 1003W*2117L KL205/CA125*3/KL205 BCF 1:2 (W40"*L83" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSGB-112-rm', 'S/B 1465W*1186L  KL205/CA125*3/KL205  BC/F  1:1 (W60"*L46" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSGB-119-rm', 'S/B 1300W*1200L  KL205/CA125*3/KL205  BC/F  1:1 (W52"L47" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSGB-120-rm', 'S/B 1300W*1200L  KL205/CA125*3/KL205  BC/F  1:1 (W52"L47" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSMT-016-rm', 'S/B  SIZE 340W*525L  KA125/CA125/KA125  C/F  W54"xL20" 11/16 ผ่า4 (Support PTT-B3 Model BOX B6)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSMT-COMMON-rm', 'S/B  SIZE 660W*1181L  KA125/CA125/KA125  C/F  W54"xL46" 1/2 ผ่า2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSMT-COMMON-01-rm', 'S/B  SIZE 525W*525L  KA125/CA125*3/KA125  BC  W42"xL20" 3/4 ผ่า2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSNC-001/1-rm', 'S/B 1170W*2178L  KA150/CA125*3/KA150 BC 1:2  (W48"L85" 3/4 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSNC-005/1-rm', 'S/B 1332W*1264L  KA150/CA125*3/KA150 BC 1:1  (W54"*L49" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSNC-015/1-rm', 'S/B 1170W*748L  KA150/CA125*3/KA150 BC 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSNH-006-rm', 'SHEET BOARD 830W*1151L  KA230/CA125/KA230  C/F  1 : 1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSNH-007-rm', 'SHEET BOARD 1580W*1440L  KA125/CA125*3/KA125  BC/F  1 : 8 MODEL:COIL V3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSNH-008-rm', 'SHEET BOARD 910W*1140L  KA125/CA125*3/KA125  BC/F  1 : 2 MODEL:COIL V3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSNH-009-rm', 'SHEET BOARD 910W*1186L  KA125/CA125*3/KA125  BC/F  1 : 2 MODEL:COIL V3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSNH-010-rm', 'SHEET BOARD 930W*900L  KA125/CA125*3/KA125  BC/F  1 : 64 MODEL:COIL V3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSNH-011-rm', 'SHEET BOARD 910W*1344L  KA125/CA125*3/KA125  BC/F  1 : 4 MODEL:COIL V3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSNH-012-rm', 'S/B 1402W*1351L KA125/CA125*3/KA125 BCF 1:1 ทับรอย 110*1182*110 (W56"*L53 3/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSNH-012-1-rm', 'S/B 1402W*1351L KA125/CA125*3/KA125 BCF 1:1 ทับรอย 110*1182*110', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSNH-012CANCELLED-rm', 'SHEET BOARD 930W*900L  KA125/CA125*3/KA125  BC/F  1 : 64 MODEL:COIL V3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSNH-013-rm', 'SHEET BOARD 930W*900L  KA125/CA125*3/KA125  BC/F  1 : 64 MODEL:COIL V3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSNH-018/019-rm', 'SHEET BOARD 820W*706L  KA125/CS110*3/KA125  BC/F  1 : 4 MODEL: V3,V4 PTT-A2 / A3 (400W*334L)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSNH-020-rm', 'SHEET BOARD 806W*740L  KA125/CS110/KA125  C/F  1 : 2 MODEL:COIL V3,V4 COVER-A', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSNH-021-rm', 'SHEET BOARD 518W*1100L  KA125/CS110/KA125  C/F  1 : 2 MODEL:COIL V3,V4 COVER-B', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSNH-022-rm', 'SHEET BOARD 910W*1140L  KA125/CS110*3/KA125  BC/F  1 : 2 MODEL:COIL V3,V4 PTT-C1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSNH-022-1-rm', 'SHEET BOARD 860W*1140L  KA125/CA125*3/KA125  BC/F  1 : 2 MODEL:COIL V3,V4 PTT-C1 (W36"*L44" 7/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSNH-023-rm', 'SHEET BOARD 910W*1186L  KA125/CS110*3/KA125  BC/F  1 : 2 MODEL:COIL V3,V4 PTT-C2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSNH-023-1-rm', 'SHEET BOARD 860W*1186L  KA125/CA125*3/KA125  BC/F  1 : 2 MODEL:COIL V3,V4 PTT-C2 (W36"*L46" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSNH-024-rm', 'SHEET BOARD 910W*1344L  KA125/CS110*3/KA125  BC/F  1 : 4 MODEL:COIL V3,V4 CORNER-A', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSNH-025-rm', 'SHEET BOARD 416W*840L  KA125/CA125*3/KA125  BC/F  1 : 32 MODEL:COIL V3,V4 STOPPER (W66''''*L33'''' 1/16 ผ่า4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSSL-001-rm', 'S/B 806W*800L KA185/CA125*3/KA185 BC/F 1:1 PAPER SUPPORT (W64"*L31" 1/2 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSWA-001-rm', 'S/B 1377W*1406L KA230/CA125*3/KA230 BCF 1:1 ทับรอย 130*1117*130 (W56"*L55"3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSWA-004-1-rm', 'S/B 1132W*960L KA230/CS110*3/KA230 BCF 1: 10', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSWA-004-2-rm', 'S/B 1155W*960L KA230/CA125*3/KA230 BCF 1: 10 PTT-3A M.14M FIT (W46"*L37" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSWA-004CANCELL-rm', 'S/B 1155W*480L KA230/CA125*3/KA230 BCF 1: 10 (W46"L18" 15/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSWA-005-rm', 'S/B 628W*1098L KA230/CA125*3/KA230 BCF 1: 3 (W50"L43"1/4 ผ่า2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSWA-006-rm', 'S/B 501W*1098L KA230/CA125*3/KA230 BCF 1: 10 (W40"L43"1/4 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSWA-007-rm', 'S/B 1155W*620L KA230/CA125*3/KA230 BCF 1: 10 (W46"L24"7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSWA-007-1-rm', 'S/B 1132W*620L KA230/CS110*3/KA230 BCF 1:3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSWA-008-rm', 'S/B 857W*1098L KA230/CA125*3/KA230 BCF 1:2 (W68"L43" 1/4 ผ่า 2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSWA-008-1-rm', 'S/B 842W*1098L KA230/CS110*3/KA230 BCF 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSWA-009-rm', 'S/B 628W*1098L KA230/CA125*3/KA230 BCF 1:3 (W50"L43"1/4 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSWA-009-1-rm', 'S/B 620W*1098L KA230/CS110*3/KA230 BCF 1:3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSWA-010-rm', 'S/B 1377W*1406L KA230/CA125*3/KA230 BCF 1:1 ทับรอย 2 ด้าน 4 เส้น(W56"*L55" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSWA-016-rm', 'S/B 936W*1231L KL205/CA125*3/KL205 BCF 1:1 ทับรอย 110*716*110 (W38"*L48" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSWA-017-rm', 'S/B 936W*1231L KL205/CA125*3/KL205 BCF 1:1 ทับรอย 2 ด้าน 4 เส้น(W38"*L48" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSWA-019-rm', 'S/B 902W*989L KI150/CA125*3/KI150 BCF 1:1 (W36"*L38" 15/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSWA-020-rm', 'S/B 902W*689L KI150/CA125*3/KI150 BCF 1:1 (W36"*L27" 1/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSWA-021CANCELL-rm', 'S/B 1248W*1107L KA230/CA125*3/KA230 BCF 1:1 M.FRONT FOLK ASSY SET 80 (HK841)  ทับรอย 270*978  (W50"*L43" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSWA-022CANCELL-rm', 'S/B 1308W*1127L KA230/CA125*3/KA230 BCF 1:1 M.FRONT FOLK ASSY SET 80 (HK841)  (W52"*L44" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSWA-023CANCELL-rm', 'S/B 1054W*527L KA230/CA125*3/KA230 BCF 1:1 M.FRONT FOLK ASSY SET 80 (HK841)  (W42"*L20" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSWA-024CANCELL-rm', 'S/B 1105W*535L KA230/CA125*3/KA230 BCF 1:1 M.FRONT FOLK ASSY SET 80 (HK841)  (W44"*L21" 1/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSWA-025CANCELL-rm', 'S/B 552W*525L KI150/CA125*3/KI150  BCF 1:1 M.FRONT FOLK ASSY SET 80 (HK841)  (W44"*L20" 11/16 ผ่า 2) Common PTT-B4, B5, B6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSWA-026CANCELL-rm', 'S/B 832W*540L KA230/CA125/KA230  CF 1:1 M.FRONT FOLK ASSY SET 80 (HK841)  (W66"*L21" 5/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSWA-027CANCELL-rm', 'S/B 1308W*530L KA230/CA125*3/KA230  BCF 1:1 M.FRONT FOLK ASSY SET 80 (HK841)  (W52"*L20" 7/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RSWA-028CANCELL-rm', 'S/B 1105W*530L KA230/CA125*3/KA230  BCF 1:2 M.FRONT FOLK ASSY SET 80 (HK841)  (W44"*L20" 7/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RTBM-001-rm', 'S/B 980W*1325L  KL205/CA125*3/KL205 BC/F  ทับรอย 100*780*100 (W40"*L52" 3/16 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RTCM-011-rm', 'S/B  SIZE 940W*1556L KL205/CA185/KL205  C/F FOR MODEL TCM-001-2 (W38"*L61" 1/4) ทับรอย 172*596*172', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RTHS-003-rm', 'S/B 1505W*1501L KA230/CA125*3/KA230 BCF 1:1  ทับรอย 204*1097*204', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RTSH-035-rm', 'S/B SIZE 1461W*2087L  KA230/CA125*3/KA230  BC/F  1:2 (W58"*L82" 3/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RTSL-001-rm', 'T/B CAP 1274W*1330L  KA185/CA125*3/KA185 BCF 1:1 (W52"*L52" 3/8) G031 ทับรอย 95*1084*95', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RTSL-002-rm', 'S/B 1282W*1040L  KA230/CA125/KA230 CF 1:2 (W52"*L41") G031', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RTSL-003-1-rm', 'S/B 1308W*1137L  KA230/CA125/KA230 CF 1:2 (W52"*L44" 13/16) G031', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RTSL-003CANCEL-rm', 'S/B 1314W*1137L  KA230/CA125/KA230 CF 1:2 (W52"*L44" 13/16) G031', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RTSL-006-rm', 'S/B 1126W*1060L  KA230/CA125/KA230 CF 1:21 (W46"*L41" 3/4) G031', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RTSL-019-rm', 'S/B 730W*1421L KA185/CA125/KA185 CF 1:1  MODEL G029 (RTSL-019)  (W58"*L55" 1616 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RTTR-001-rm', 'S/B SIZE 710W*801L  KA230/CA125/KA230 CF (W58"L31" 9/16) ผ่า 2 ทับรอย150*410*150', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RTTR-002-rm', 'S/B SIZE 687W*772L  KA230/CA125/KA230 CF (W56"L30" 7/16) ผ่า 2 ทับรอย130*427*130', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RTTR-003-rm', 'S/B SIZE 527W*810L  KA185/CA125*3/KA185 BCF (W42"*L31" 15/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RTTR-004-rm', 'S/B SIZE 527W*810L  KA185/CA125*3/KA185 BCF (W42"*L31" 15/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RTYD-001-rm', 'S/B 1369W*1352L KA185/CA125*3/KA185 BC/F ทับรอย 100*1169*100 (W56"*L53" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RTYD-005-rm', 'S/B 527W*558L  KA185/CA125/KA185 BF 1:2 SIDE HOLDER M.VALVE BPC3590538 (W42"*L22" ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RTYD-005-1-rm', 'S/B 527W*1118L  KA185/CS110/KA185 BF 1:4 SIDE HOLDER M.VALVE BPC3590538', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RTYD-006-rm', 'S/B 501W*558L  KA185/CA125*3/KA185 BCF 1:2 CENTER HOLDER M.VALVE BPC3590538 (W40"*L22" ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RTYD-006-1-rm', 'S/B 501W*1118L  KA185/CS110*3/KA185 BCF 1:4 CENTER HOLDER M.VALVE BPC3590538', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RYRZ-003-rm', 'S/B 1207W*1100L KA125/CA125*3/KA125 BCF  TOP 1:8  W48"L43" 5/16', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RYRZ-004-rm', 'S/B 1054W*1100L KA125/CA125*3/KA125 BCF 1:3 C-F1  W42"L43" 5/16', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RYRZ-005-rm', 'S/B 953W*1100L KA125/CA125*3/KA125 BCF   W38"L43" 5/16', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SBSM-010-rm', 'S/B 755*265L KA125/CA125/KA125  CF 1:1 (W60"*L10" 7/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SBSM-010-1-rm', 'S/B 755*510L KA125/CA125/KA125  CF 1:2 (W60"*L20" 1/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SBSM-010-2-rm', 'S/B 755*1026L KA125/CA125/KA125  CF (W60"xL40" 7/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SBSM-013-rm', 'S/B 1461W*1315L KI150/CA125/KI150 CF M.SBSM-013 (W58"*L51" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SBSM-016-rm', 'S/B 603*556L KA150/CA125/KA150  CF 1:1 (W48"*L21" 15/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SCR-COMMON-1-rm', 'S/B 1664W*1016L KA185/CA125*3/KA185 BCF (COMMON PTT MODEL  SCR-011 )  (W66"*L40")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SE-002-rm', 'S/B 1146W*1104L KA150/CA125/KA150 C/F 1:4', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SE-003-rm', 'S/B 1290W*1010L KA125/CA125/KA125 C/F 1:20', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SE-003-1-rm', 'S/B 1290W*1010L KA125/CS110/KA125 C/F 1:20', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SEN-001-rm', 'S/B SIZE 490W*1028L KA150/CA125*3/KA150  BCF 1:80  PTT-C3  MODEL JTB-004  ( W40"*L40 1/2 ผ่า2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SEN-002-rm', 'S/B SIZE 490W*1085L KA150/CA125*3/KA150  BCF 1:36  PTT-C4  MODEL JTB-004  ( W40"*L42 3/4 ผ่า2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SEW-001-rm', 'S/B 1185W*1282L CA105/CA105*3/CA105 BCF 1:2 SUPPORT:BOX REEL 24,34,156 ทับรอย315*555*315  (W48"*L50" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SGB-001-rm', 'S/B 603W*746L  KA125/CA125/KA125  C/F  1 : 1  TRAY MODEL:BOX VN24 RQ SUV-R,L   RG83R / RG84L  (W48"*L29" 3/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SGB-001-1-rm', 'S/B 603W*746L  KA125/CS110/KA125  C/F  1 : 1  TRAY MODEL:BOX VN24 RQ SUV-R,L   RG83R / RG84L', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SGB-001-2-rm', 'S/B 603W*1492L  KA125/CA125/KA125  C/F  1 : 2  TRAY MODEL:BOX VN24 RQ SUV-R,L   RG83R / RG84L', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SGB-003-rm', 'S/B 629W*786L  KA125/CA125/KA125  C/F  1 : 1  TRAY MODEL:BOX VN24 RQ SDN-R,L   RG85R / RG86L  (W50"*L31" ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SGB-005-rm', 'S/B 1161W*1178L KA185/CA125*2/KA185  BC/F  MODEL : PKG.FOR MITSUBISHI 4P45 S1 (PACK 24) W48'''' *L46'''' 7/16 ทับรอย 61*1039*61', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SGB-COM-01-rm', 'S/B 1511W*1300L  KL205/CA125*3/KL205  BC/F  MODEL:RG52  (W60"*L51" 3/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SIAM-009-rm', 'S/B 763W*763L KL205/CA125*3/KL205 BCF ( 369 )  (W62"*L30" 1/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SIAM-009-H-rm', 'S/B 763W*763L KL205/CA125*3/KL205 BCF ( 369 )  PRINT MOQ = 260 PCS(1040 PCS)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SIAM-010-rm', 'S/B 829W*829L KL205/CA125*3/KL205 BCF ( 402 ) (W66"*L32" 11/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SIAM-010-H-rm', 'S/B 829W*829L KL205/CA125*3/KL205 BCF ( 402 )  PRINT', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SIAM-010-P-rm', 'S/B 829W*829L KL205/CA125*3/KL205 BCF ( 402 )  PRINT', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SIAM-011-rm', 'S/B 947W*947L KL205/CA125*3/KL205 BCF ( 461 ) PRINT MOQ = 320 PCS(2,540 PCS)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SIAM-011-1-rm', 'S/B 953W*947L KL205/CA125*3/KL205 BCF ( 461 ) PRINT (W38"xL37" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SIAM-011-P-rm', 'S/B 947W*947L KL205/CA125*3/KL205 BCF ( 461 ) PRINT', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SIAM-012-rm', 'S/B 1051W*533L KL205/CA125*3/KL205 BCF ( 513 ) (W42"*L21")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SIAM-012-H-rm', 'S/B 1051W*533L KL205/CA125*3/KL205 BCF ( 513 ) PRINT (S/B NK)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SIAM-012-P-rm', 'S/B 1051W*533L KL205/CA125*3/KL205 BCF ( 513 ) PRINT MOQ = 570 PCS(1,520 PCS)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SIAM-020-rm', 'S/B 756W*758L  KL205/CA125/KL205 CF  (W60"*L29" 7/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SIAM-020-1-rm', 'S/B 781W*763L  KL205/CA125/KL205 CF  (W62"*L30" 1/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SIAM-021-rm', 'S/B 832W*824L  KL205/CA125/KL205 CF  (W66"*L32" 1/2 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SIAM-022-rm', 'S/B 953W*942L  KL205/CA125/KL205 CF  (W38"*L37" 1/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SIAM-022-1-rm', 'S/B 953W*947L  KL205/CA125/KL205 CF  (W38"*L37" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SIAM-023-rm', 'S/B 1054W*533L  KL205/CA125/KL205 CF  (W42"*L21")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SIAM-025-rm', 'S/B 859W*859L KL205/CA125*3/KL205 BCF ( 417 ) (W68"*L33" 7/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SIAM-028-rm', 'S/B 859W*859L KL205/CA125/KL205 CF ( 417 ) (W68"*L33" 7/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SIAM-028-1-rm', 'S/B 902W*859L KL205/CA125/KL205 CF ( 417 ) (W36"*L33" 7/8 ผ่า)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SIAM-033-rm', 'S/B 902W*897L  KL205/CA125/KL205 CF  (W36"*L35" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SIAM-034-rm', 'S/B 897W*897L KL205/CA125*3/KL205 BCF ( 436 ) (W36"*L35" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SIAM-034-H-rm', 'S/B 897W*897L KL205/CA125*3/KL205 BCF ( 436 ) PRINT', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SIAM-035-rm', 'S/B 1156W*583L KL205/CA125*3/KL205 BCF ( 563 ) (W46"*L23")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SIAM-036-rm', 'S/B 1156W*583L KL205/CA125/KL205 CF ( 563 ) (W46"*L23")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SIAM-040-rm', 'S/B 902W*895L KL205/CA125*3/KL205 BCF ( 430 ) (W36"*L35" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SIAM-041-rm', 'S/B 902W*895L KL205/CA125/KL205 CF ( 430 ) (W36"*L35" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SIAM-COM-01-rm', 'S/B 1156W*895L KL205/CA125*3/KL205 BCF ( 563, 417,430 ) (W46"*L35" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SIAM-COM-02-rm', 'S/B 1156W*895L KL205/CA125/KL205 CF ( 563, 417,430 ) (W46"*L35" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SKS-001-rm', 'S/B 1187W*1481L  KA185/CA125/KA185 CF 1:0.5 ทับรอย 360*467*360 (W48"*L58" 5/16) M.BOX OD 721*732*471H', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SLEEVE D54T-rm', 'S/B 880W*2141L KA185/CA125*3/KA185 BCF M.PKG FOR D41N AND 54T (W70"*L84" 5/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SLEEVE-TOYODA-rm', 'S/B 1358W*2307L  KA185/CA125*3/KA185 BCF 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNC-001-rm', 'S/B 857W*1353L KA125/CA125/KA125 1:2 C/F (BOX) MODEL:SUZUKI YL1 (W68"*L53" 5/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNC-002-rm', 'S/B 781W*1200L KA125/CA125/KA125 C/F 1:8 (PTT 2A) MODEL:SUZUKI YL1 (W62"*L47" 1/4 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNC-003-rm', 'S/B 1266W*1559L KA185/CA125*3/KA185 1:1 BC/F  (W52"*L61" 7/16 ) MODEL :SNC-030', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNC-004-rm', 'S/B 700W*2396L KA230/CA125*3/KA230 1:1 BC/F  (W56"*L94" 3/8 ผ่า2 ) MODEL :SNC-030', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNC-005-rm', 'S/B 1327W*1029L KA185/CA125*3/KA185 1:1 BC/F  (W54"*L40" 9/16) MODEL :SNC-030', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNC-006-rm', 'S/B 1519W*1832L KA185/CA125*3/KA185 1:1 BC/F  (W62"*L72" 3/16) T/B CAP MODEL :SNC-049', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNC-007-rm', 'S/B 1765W*1278L KA185/CA125/KA185 1:4 C/F  (W70"*L50" 3/8) PTT-A MODEL :SNC-049', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNC-008-rm', 'S/B 1298W*1602L KA185/CA125*3/KA185 1:1 BC/F  (W52"*L63" 1/8) PAD MODEL :SNC-049', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-007-rm', 'SHEET BOARD 1580W*1440L  KA125/CA125*3/KA125  BC/F  1 : 8 MODEL:COIL V3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-008-rm', 'SHEET BOARD 910W*1140L  KA125/CA125*3/KA125  BC/F  1 : 2 MODEL:COIL V3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-009-rm', 'SHEET BOARD 910W*1186L  KA125/CA125*3/KA125  BC/F  1 : 2 MODEL:COIL V3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-010-rm', 'SHEET BOARD 930W*900L  KA125/CA125*3/KA125  BC/F  1 : 64 MODEL:COIL V3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-011-rm', 'SHEET BOARD 910W*1344L  KA125/CA125*3/KA125  BC/F  1 : 4 MODEL:COIL V3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-012-rm', 'SHEET BOARD 930W*900L  KA125/CA125*3/KA125  BC/F  1 : 64 MODEL:COIL V3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-013-rm', 'SHEET BOARD 930W*900L  KA125/CA125*3/KA125  BC/F  1 : 64 MODEL:COIL V3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-014-rm', 'SHEET BOARD 887W*590L  KA125/CA125*3/KA125  BC/F  1 : 1 MODEL:COIL V4', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-015-rm', 'SHEET BOARD 887W*706L  KA125/CA125*3/KA125  BC/F  1 : 4 MODEL:COIL V4', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-016-rm', 'SHEET BOARD 887W*706L  KA125/CA125*3/KA125  BC/F  1 : 4 MODEL:COIL V4', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-017-rm', 'SHEET BOARD 806W*740L  KA125/CA125/KA125  C/F  1 : 2 MODEL:COIL V4', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-021-rm', 'SHEET BOARD 820W*706L  KA125/CA125*3/KA125  BC/F  1 : 4 MODEL: V3,V4 PTT-A2 / A3 (400W*334L) (W66"*L27" 13/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-021-1-rm', 'SHEET BOARD 820W*706L  KA125/CS110*3/KA125  BC/F  1 : 4 MODEL: V3,V4 PTT-A2 / A3 (400W*334L)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-022-rm', 'SHEET BOARD 820W*706L  KA125/CA125*3/KA125  BC/F  1 : 4 MODEL:COIL V3,V4 (W66"*L27" 13/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-023-rm', 'SHEET BOARD 840W*828L  KA125/CA125*3/KA125  BC/F  1 : 297 MODEL:COIL V3,V4 (W68"*L32" 5/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-024-rm', 'SHEET BOARD 840W*930L  KA125/CA125*3/KA125  BC/F  1 : 210 MODEL:COIL V3,V4 PTT-C (W68"*L36" 5/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-024-1-rm', 'SHEET BOARD 840W*930L  KA125/CS110*3/KA125  BC/F  1 : 210 MODEL:COIL V3,V4 PTT-C', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-024-2-rm', 'SHEET BOARD 820W*930L  KA125/CA125*3/KA125  BC/F  1 : 210 MODEL:COIL V3,V4 (W66''''*L36'''' 5/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-025-rm', 'SHEET BOARD 806W*740L  KA125/CA125/KA125  C/F  1 : 2 MODEL:COIL V3,V4 COVER-A (W64"*L29" 3/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-025-1-rm', 'SHEET BOARD 806W*740L  KA125/CS110/KA125  C/F  1 : 2 MODEL:COIL V3,V4 COVER-A', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-026-1 CANCELL-rm', 'SHEET BOARD 518W*1100L  KA230/CA125/KA230  C/F  1 : 12 MODEL:COIL V3,V4 COVER-B (W42"*L43" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-026-2-rm', 'SHEET BOARD 518W*1100L  KA125/CA125/KA125  C/F  1 : 12 MODEL:COIL V3,V4 COVER-B (W42"*L43" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-026-3-rm', 'SHEET BOARD 518W*1100L  KA125/CS110/KA125  C/F  1 : 12 MODEL:COIL V3,V4 COVER-B', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-026CANCELL-rm', 'SHEET BOARD 548W*1100L  KA230/CA125/KA230  C/F  1 : 12 MODEL:COIL V3,V4 COVER-B 88W*530L', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-027-rm', 'SHEET BOARD 910W*1140L  KA125/CA125*3/KA125  BC/F  1 : 2 MODEL:COIL V3,V4 PTT-C1 (W38"*L44" 15/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-027-1-rm', 'SHEET BOARD 910W*1140L  KA125/CS110*3/KA125  BC/F  1 : 2 MODEL:COIL V3,V4 PTT-C1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-028-rm', 'SHEET BOARD 910W*1186L  KA125/CA125*3/KA125  BC/F  1 : 2 MODEL:COIL V3,V4 PTT-C2 (W38"*L46" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-028-1-rm', 'SHEET BOARD 910W*1186L  KA125/CS110*3/KA125  BC/F  1 : 2 MODEL:COIL V3,V4 PTT-C2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-029-1CANCELLED-rm', 'SHEET BOARD 420W*420L  KA125/CA125*3/KA125  BC/F  1 : 64 MODEL:COIL V3,V4 STOPPER (W68"*L16" 9/16 ผ่า 4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-029-2CANCELLED-rm', 'SHEET BOARD 416W*420L  KA125/CA125*3/KA125  BC/F  1 : 64 MODEL:COIL V3,V4 STOPPER (W66"*L16" 9/16 ผ่า 4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-029-3-rm', 'SHEET BOARD 416W*840L  KA125/CA125*3/KA125  BC/F  1 : 32 MODEL:COIL V3,V4 STOPPER (W66"*L33" 1/16 ผ่า 4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-029-4-rm', 'SHEET BOARD 416W*840L  KA125/CS110*3/KA125  BC/F  1 : 32 MODEL:COIL V3,V4 STOPPER', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-029CANCELLED-rm', 'SHEET BOARD 840W*840L  KA125/CA125*3/KA125  BC/F  1 : 64 MODEL:COIL V3,V4 STOPPER 100W*100L', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-030-rm', 'SHEET BOARD 910W*1344L  KA125/CA125*3/KA125  BC/F  1 : 4 MODEL:COIL V3,V4 CORNER-A (W38"*L52" 15/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-030-1-rm', 'SHEET BOARD 910W*1344L  KA125/CS110*3/KA125  BC/F  1 : 4 MODEL:COIL V3,V4 CORNER-A', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-031-rm', 'S/B 858W*1144L  KA230/CA125/KA230  C/F  1:1 MODEL:PKG.FOR KRONOTERM (SNH-006)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-032-rm', 'S/B 953W*1050L  KA125/CS110*3/KA125  BC/F  1:2  PTT-A MODEL:PKG.FOR AEX INV 2, 3 LAYER (SNH-009, 010)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-033-rm', 'S/B 953W*1162L  KA125/CS110*3/KA125  BC/F  1:1  PTT-B1  MODEL:PKG.FOR AEX INV 2, 3 LAYER (SNH-009, 010)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-034-rm', 'S/B 705W*1124L  KA125/CA125*3/KA125  BC/F  1:2  PTT-A1  MODEL:WALL HP 2 LAYER (IDEA2) (W56"*L44" 5/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-035-rm', 'S/B 705W*672L  KA125/CA125*3/KA125  BC/F  1:2  CORNER-A  MODEL:WALL HP 2 LAYER (IDEA2) (W56"*L26" 1/2 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-036-rm', 'S/B 1345W*1408L  KA125/CA125*3/KA125  BC/F  1:1  T/B CAP  MODEL:WALL HP 2 LAYER (IDEA2) ทับรอย 110*1125*110 (W54"*L55" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-037-1-rm', 'S/B 654W*831L  KA125/CA125*3/KA125  BC/F  1:6  PAD MODEL:WALL HP 2 LAYER (IDEA2) (W52"*L32" 3/4 ผ่า2 ทับรอย 273*108*273)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-037CANCELL-rm', 'S/B 1156W*831L  CA125/CA125/CA125  C/F  1:6  PAD MODEL:WALL HP 2 LAYER (IDEA2)  (W46"*L32" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-038-rm', 'S/B 902W*1034L KA125/CA125*3/KA125  BC/F  1:2  PAD MODEL:AEX INV (W36"*L40" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-039-rm', 'S/B 1283W*1346L KA125/CA125*3/KA125 BCF MODEL AEX INV ทับรอย 110*1063*110 (W52"*L53)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-040-rm', 'S/B 1054W*940L CA125/CA125/CA125 CF 1:4 PTT-D MODEL AEX INV (W42"*L37" 1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-041-rm', 'S/B 902W*840L KA125/CA125*3/KA125 BCF 1:24  PTT-E MODEL AEX INV (W36"*L33" 1/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-042-rm', 'S/B 883W*1063L KA125/CA125*3/KA125 BCF 1:2 PTT-B1 MODEL AEX INV (W70"*L41" 7/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-043-rm', 'S/B 883W*1120L KA125/CA125*3/KA125 BCF 1:2 PTT-B2 MODEL AEX INV (W70"*L44" 1/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-044-rm', 'S/B 883W*672L KA125/CA125*3/KA125 BCF 1:2 CORNER-A MODEL AEX INV (W70"*L26" 1/2 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-045-rm', 'S/B 756W*1192L KA125/CA125*3/KA125 BCF 1:1 PTT-A2 MODEL WALL HP (W60"*L46" 15/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-046-rm', 'S/B 781W*680L KA125/CA125*3/KA125 BCF 1:1 PTT-A3 MODEL WALL HP (W62"*L26" 13/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-047-rm', 'S/B 1003W*984L KA125/CA125*3/KA125 BCF 1:32 PTT-B, PTT-F MODEL AEX INV (W40"*L38" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-048-rm', 'S/B 1207W*570L KA125/CA125*3/KA125 BCF 1:18 BASE-1 MODEL  CASS-A (48"*L22" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-049-1-rm', 'S/B 806W*980L KA125/CA125*3/KA125 BCF 1:18 BASE-2 MODEL  CASS-A (64"*L38" 5/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-050-1-rm', 'S/B 806W*1040L KA125/CA125*3/KA125 BCF 1:18 BASE-3 MODEL  CASS-A (64"*L40" 16/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-051-rm', 'S/B 654W*516L KA125/CA125/KA125 CF 1:18 COVER-1 MODEL CASS-A (W52"*L20" 3/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-051-1CANCEL-rm', 'S/B 654W*1012L KA125/CA125/KA125 CF 1:18 COVER-1 MODEL CASS-A (W52"*L39" 7/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-051-2-rm', 'S/B 654W*1032L KA125/CA125/KA125 CF 1:18 COVER-1 MODEL CASS-A (W52"*L40" 11/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-052-rm', 'S/B 654W*548L KA125/CA125/KA125 CF 1:18 COVER-2 MODEL CASS-A (W52"*L21" 5/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-052-1-rm', 'S/B 654W*1096L KA125/CA125/KA125 CF 1:18 COVER-2 MODEL CASS-A (W52"*L43" 3/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-053-rm', 'S/B 730W*1144L KA125/CA125*3/KA125 BCF 1:3 PTT-A MODEL  CASS-A (58"*L45" 1/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-054-rm', 'S/B 730W*1186L KA125/CA125*3/KA125 BCF 1:6 PTT-B MODEL  CASS-A (58"*L46" 3/4 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-055-rm', 'S/B 730W*672L KA125/CA125*3/KA125 BCF 1:12 CORNER-A MODEL  CASS-A (58"*L26" 1/2 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-056-rm', 'S/B 1207W*590L KA125/CA125*3/KA125 BCF 1:18 BASE-1 MODEL  CASS-A (48"*L23" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-056-1-rm', 'S/B 1207W*1180L KA125/CA125*3/KA125 BCF 1:18 BASE-1 MODEL  CASS-A (48"*L46" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-057-rm', 'S/B 654W*1000L KA125/CA125*3/KA125 BCF 1:16 BASE-4 MODEL  CASS-A (W52"*L39" 3/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-058-rm', 'S/B 477W*648L KA125/CA125*3/KA125 BCF 1:4 BASE-5 MODEL  CASS-A (W38"*L25" 9/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-059-rm', 'S/B 552W*700L KA125/CA125*3/KA125 BCF 1:4 BASE-6 MODEL  CASS-A W44"*L27" 9/16 ผ่า2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-064-rm', 'SB1402W*1351L  KA185/CA125*3/KA185 BC/F 1:1  MODEL:PKG.FOR KRONOTERN COIL PACK48 (W56"*L53" 3/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-064-1-rm', 'SB 1371W*1351L  KA185/CA125*3/KA185 BC/F 1:1  MODEL:PKG.FOR KRONOTERN COIL PACK48 (W56"*L53" 3/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-065-rm', 'SB 831W*1151L KA230/CA125/KA230 C/F 1:1  MODEL:PKG.FOR KRONOTERN COIL PACK48 (W66"*L45" 3/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-065-1-rm', 'SB 831W*1120L KA230/CA125/KA230 C/F 1:1  MODEL:PKG.FOR KRONOTERN COIL PACK48 (W66"*L44" 1/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-066-rm', 'SB 755W*920L KA230/CA125/KA230 C/F 1:1  MODEL:PKG.FOR KRONOTERN COIL PACK48 (W60"*L36" 1/4 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SNH-067-rm', 'SB 730W*1105L KA125/CA125*3/KA125 BC/F 1:1  MODEL:PKG.FOR KRONOTERN COIL PACK48 (W58"*L43" 9/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SOM-001-rm', 'TOP CAP 1257W*1252L KA230/CA185*3/KA230 BCF EXCEL SHAFT(P375)FOR FORD SOM-001 ทับรอย 110*1037*110 (W50"L49"5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SOM-003-rm', 'BOTTOM CAP 1257W*1252L KA230/CA185*3/KA230 BCF (W50"L49"5/16)  EXCEL SHAFT(P375)FOR FORD SOM-001 ทับรอย 2 ด้าน 4 เสัน', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SOM-005-rm', 'TOP/BOTTOM CAP 1257W*1252L KL205/CA125*3/KL205 BCF (W50"L49"5/16) SOM-033 ทับรอย 110*1037*110', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SOM-005 CANCEL-rm', 'PTT 953W*890L KA230/CA185*3/KA230 BCF  (W38"L35"1/16) EXCEL SHAFT(P375)FOR FORD SOM-001', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SOM-005-1-rm', 'PTT 487W*890L KA230/CA185*3/KA230 BCF  (W58"L35"1/16 ผ่า 3 ) EXCEL SHAFT(P375)FOR FORD SOM-001', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SOM-005-2-rm', 'S/B T/B CAP 1257W*1252L KH200/CA125*3/KH200 BCF MODEL SOM-033 ทับรอย 110*1037*110', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SOM-006-rm', 'STOPPER-3 755W*890L KA230/CA125*3/KA230 BCF 1:18  (W60"L35"1/16 ผ่า 2) EXCEL SHAFT(P375)FOR FORD SOM-001', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SOM-006-1-rm', 'STOPPER-3 730W*890L KA230/CA125*3/KA230 BCF 1:20 (W58"L35"1/16 ผ่า 2) EXCEL SHAFT(P375)FOR FORD SOM-001', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SOM-007-rm', 'SHEET BOARD  1500W*1900L  KA230/CA1125*3/KA230 BC/F  SOM-033-1 ,SOM-038-1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SOM-007-1-rm', 'S/B 1003W*860L KA230/CA125*3/KA230 BCF (W40"*L33" 7/8) Support:STOPPER&BOTTOM GUIDE EXCEL SHAFT(P375)FOR FORD SOM-001-1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SOM-007-2-rm', 'S/B 1003W*860L KA125/CA125*3/KA125 BCF (W40"*L33" 7/8) Support:STOPPER&BOTTOM GUIDE EXCEL SHAFT(P375)FOR FORD SOM-033-1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SOM-007-3-rm', 'S/B 1003W*572L KA125/CA125*3/KA125 BCF (W40"*L22" 9/16) Support:STOPPER&BOTTOM GUIDE EXCEL SHAFT(P375)FOR FORD SOM-033-1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SOM-007CANCELL-rm', 'S/B 1003W*860L KA230/CA185*3/KA230 BCF (W40"*L33" 7/8) Support:STOPPER&BOTTOM GUIDE EXCEL SHAFT(P375)FOR FORD SOM-001', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SOM-008-rm', 'S/B 1207W*946L KA230/CA185*3/KA230 BCF 1:3 PTT-D1 MODEL SOM-022 (W48"*L37" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SOM-009-rm', 'S/B 1297W*1292L KL205/CA125*3/KL205 BCF MODEL SOM-038 (W52"L50" 7/8) ทับรอย 110*1077*110', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SOM-009-1-rm', 'S/B 1297W*1292L KH200/CA125*3/KH200 BCF MODEL SOM-038  ทับรอย 110*1077*110', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SOM-010-rm', 'S/B 501W*930L KA125/CA125*3/KA125 BCF (W40"*L36" 5/8 ผ่า2) PTT 1: 77 SOM-038', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SOM-011-rm', 'S/B 484W*890L KA230/CA125*3/KA230 BCF (W40"*L35" 1/8 ผ่า2)  MODEL:SOM-033-1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SOM-014-rm', 'S/B 1207W*1894LL KA230/CA125*3/KA230 BCF MODEL SOM-056  (W48"*L74" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SOM-015-rm', 'S/B 1330W*1326L KH200/CA125*3/KH200 BCF MODEL PKG.FOR MODEL P703 P.80 ทับรอย 110*1110*110  (W54"L52" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SOM-016-rm', 'S/B 527W*964L (PTT) KA230/CA125*3/KA230 BCF MODEL PKG.FOR MODEL P703 P.80 (W42"L37" 16/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-STD-006/1-1-rm', 'S/B 1038W*1875L KA230/CA125/KA230 CF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-STD-008-rm', 'SHEET BOARD 968W*1070L KA125/CA125/KA125  CF 1:4  (W40"*L42" 3/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-STD-012-rm', 'SHEET BOARD 749W*724L KA125/CA125/KA125  CF 1:3 (W60"*L28" 9/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-STD-013-rm', 'SHEET BOARD 694W*562L KA125/CA125/KA125  CF 1:24', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-STD-013-1-rm', 'SHEET BOARD 1054W*336L KA125/CA125/KA125  CF 1:21 (W42"*L13" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-STD-013-2-rm', 'SHEET BOARD 705W*960L KA125/CA125/KA125  CF 1:20  STOPPER (W56"*L37" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-STD-017-rm', 'SHEET BOARD 1105W*720L KA125/CA125/KA125  CF 1:2  PARTITION TOP (W44"*L28" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SUN-004-rm', 'S/B 1003W*337L  KA125/CA125/KA125 CF 1:4 M.TG446251-7180(SUN-003,004) (W40"*L13" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SUN-006-rm', 'S/B 1054W*427L  KA125/CA125/KA125 CF 1:4 M.BOX 265x435x175H(OD)SUN-005,006 (W42"*L16" 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SWA-001-rm', 'S/B 1248W*1107L KA230/CA125*3/KA230 BCF 1:1 M.FRONT FOLK ASSY SET 80 (HK841)  ทับรอย 270*978  (W50"*L43" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SWA-002-rm', 'S/B 1308W*1127L KA230/CA125*3/KA230 BCF 1:1 M.FRONT FOLK ASSY SET 80 (HK841)  (W52"*L44" 3/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SWA-004-rm', 'S/B 1105W*535L KA230/CA125*3/KA230 BCF 1:1 M.FRONT FOLK ASSY SET 80 (HK841)  (W44"*L21" 1/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SWA-005-rm', 'S/B 552W*525L KI150/CA125*3/KI150  BCF 1:1 M.FRONT FOLK ASSY SET 80 (HK841)  (W44"*L20" 11/16 ผ่า 2) Common PTT-B4, B5, B6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SWA-009-rm', 'S/B 1297W*2024L KA185/CA125*3/KA185 BCF 1:0.5 (W52"L79" 11/16)   SWA-026', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SWA-010-rm', 'S/B 756W*1166L KI150/CA125*3/KI150 BCF 1:4  (W60"L45" 15/16) ผ่า 2   SWA-026', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SWA-011-rm', 'S/B 1054W*746L KA230/CA125*3/KA230 BCF 1:2 PTT-SIDE (W42"L29" 3/8)   SWA-026', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SWA-012-rm', 'S/B 730W*1166L KA230/CA125*3/KA230 BCF 1:2 COVER (W58"L45" 15/16 ผ่า 2)   SWA-026', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SWA-013-rm', 'S/B 1156W*1166L KA230/CA125*3/KA230 BCF 1:2 SIDE-D2 (W46"L45" 15/16 )   SWA-026', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SWA-014-rm', 'S/B 756W*1166L KA230/CA125*3/KA230 BCF 1:4 SUP-D2 (W60"L45" 15/16 ผ่า 2)   SWA-026', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SWA-015-rm', 'S/B 832W*1166L KA230/CA125/KA230 CF 1:2 SIDE-D1 (W66"L45" 15/16 ผ่า 2)   SWA-026', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SWA-016-rm', 'S/B 1351W*1346L KA185/CA125*3/KA185 BCF 1:1 T/B CAP (W54"*L53") ทับรอย 110*1131*110  Model DPA SWA-023', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SWA-021-rm', 'S/B 1410W*1314L KA230/CA105*3/KA230 BCF M.BOX OD 240x1050x110H SWA-021 (W56"*L51" 3/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-SWA-030-rm', 'S/B 1054W*645L KA125/CA125/KA125 CF (W42" L 25" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TCM-001-rm', 'SHEET BOARD  SIZE  605W*1240L  KH250/CA185/KH250  C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TCM-001-1-rm', 'SHEET BOARD  SIZE  1212W*1240L  KH250/CA185/KH250  C/F (Screen)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TCM-002-rm', 'SHEET BOARD  SIZE  605W*1240L  KH250/CA150/KH250  C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TCM-003-rm', 'SHEET BOARD  SIZE  630W*1255L  KL250/CA185/KL250  C/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TCM-004-rm', 'S/B  1257W*1370L KL205/CA125*3/KL205 BCF (W50"L53" 15/16 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TCM-005-H-rm', 'SHEET BOARD  SIZE  605W*1370L  KL205/CA125*3/KL205  BC/F (Screen) Reel P/N 1-912118-0', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TCM-006-H-rm', 'SHEET BOARD  SIZE  605W*1370L  KL205/CA125*3/KL205  BC/F (Screen) Reel P/N 912118-8', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TCM-007-H-rm', 'SHEET BOARD  SIZE  630W*1270L  KA185/CA125*3/KA185  BC/F (Screen) Reel P/N 936991-3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TCM-009-rm', 'S/B  SIZE  527W*665L  KL250/CA125/KL250  C/F PTT PN:2237764-1(PROJECT 32P) TCM-010 (W42"*L26" 3/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TCM-010-rm', 'S/B  SIZE 990W*1396L  KL250/CA125*3/KL250  BC/F FOR MODEL TCM-012-TCM-014 (W40"*L54" 16/16) ทับรอย 100*790*100', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TFT-001-rm', 'S/B 1207W*1578L  KA150/CA125/KA150 CF (W48"*L62" 3/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-001-rm', 'S/B 1405W*1400L KA150/CA125*3/KA150 BCF (W56"L55"1/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-004-rm', 'S/B 953W*1768L KA150/CA125*3/KA150 BCF (W38"*L69" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-005-rm', 'HD-WALL SIZE 760Wx1170L KA230/CA125*3/KA230 BCF M.TYPE A INNER SLEEVE SET  (W62"*L46" 1/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-006-rm', 'CAP PAD SIZE 760Wx1170L KA230/CA125/KA230 CF M.TYPE A INNER SLEEVE SET  (W62"*L46" 1/8 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-008-rm', 'S/B SIZE 1461Wx1916L KA230/CA125/KA230 CF 1:2 (W58"*L75" 7/16) MODEL :BOX J59C(DESIGN NK)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-008-1-rm', 'S/B SIZE 1511Wx1916L KA230/CA125/KA230 CF 1:2 (W60"*L75" 7/16) MODEL :BOX J59C(DESIGN NK)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-008-2-rm', 'S/B SIZE 902Wx1916L KA230/CA125/KA230 CF 1:2 (W36"*L75" 7/16) MODEL :BOX J59C(DESIGN NK)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-008-3-rm', 'S/B SIZE 737Wx1916L KA230/CA125/KA230 CF ทับรอย229*279*229 1:1 (W60"*L75" 7/16 ผ่า2) MODEL :BOX J59C(DESIGN NK)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-009-rm', 'S/B SIZE 902Wx475L KA125/CA125/KA125 CF 1:2 (W36"*L18" 3/4) MODEL :BOX J59C(DESIGN NK)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-010-1-rm', 'S/B SIZE 629Wx990L KA150/CA125*3/KA150 BCF 1:2 (W50"*L39" ผ่า2) MODEL :BOX J59C(DESIGN NK)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-010CANCELL-rm', 'S/B SIZE 629Wx495L KA150/CA125*3/KA150 BCF 1:1 (W50"*L19" 1/2 ผ่า2) MODEL :BOX J59C(DESIGN NK)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-011-1-rm', 'S/B SIZE 552Wx930L KA150/CA125/KA150 CF 1:8 (W44"*L36" 5/8 ผ่า2) MODEL :BOX J59C(DESIGN NK)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-011CANCELL-rm', 'S/B SIZE 552Wx465L KA150/CA125/KA150 CF 1:4 (W44"*L18" 5/16 ผ่า2) MODEL :BOX J59C(DESIGN NK)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-012-rm', 'S/B SIZE 1157Wx1212L KA150/CA125*3/KA150 BCF 1:1 (W48"*L47" 3/4) MODEL PALLET FOR J59C', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-013-rm', 'S/B SIZE 629Wx1090L KA185/CA125/KA185 CF 1:8    M.PKG.FOR EGR(DAIHATSU)  (W50"*L42" 15/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-013/014-1-rm', 'S/B SIZE 655Wx1090L KA185/CA125/KA185 CF 1:8    M.PKG.FOR EGR(DAIHATSU)  (W52"*L42" 15/16 ผ่า2 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-013/014CANCELL-rm', 'S/B SIZE 1310Wx1090L KA185/CA125/KA185 CF 1:8    M.PKG.FOR EGR(DAIHATSU)  (W52"*L42" 15/16 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-014-rm', 'S/B SIZE 679Wx1090L KA185/CA125/KA185 CF 1:6   M.PKG FOR EGR (SUZUKI) (W54"*L42" 15/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-015-rm', 'S/B SIZE 1331Wx1326L KA150/CA125*3/KA150 BCF 1:1  TOP CAP  M.PKG FOR EGR (SUZUKI) (W54"*L52" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-016-rm', 'S/B SIZE 890Wx2220L KA150/CA125*3/KA150 BCF 1:1   SLEEVE B-1 M.PKG FOR EGR (SUZUKI) (W36"*L87" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-017-rm', 'S/B SIZE 534Wx1104L KA125/CA125*3/KA125 BCF 1:1   LEG SUPPORT M.DV.PKG.FOR EGR(DAIHATSU)  (W44"*L43" 1/2 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-018-rm', 'S/B SIZE 788Wx1090L KA125/CA125*3/KA125 BCF 1:8  PTT-A  EGR COOLER SUBARU', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-019-rm', 'S/B SIZE 520Wx1090L KA150/CA125/KA150 CF 1:1  PTT-B  EGR COOLER SUBARU (W42"xL42" 15/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-020-rm', 'S/B SIZE 629Wx1090L KA125/CA125*3/KA125 BCF 1:132  PTT-A  MODEL DAIHATSU (W50''''*L42''''* 15/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-021-1-rm', 'S/B SIZE 806Wx1090L KA150/CA125/KA150 CF 1:44  PTT-B  MODEL DAIHATSU (W64''''*L42''''* 15/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-021CANCELLED-rm', 'S/B SIZE 728Wx1090L KA150/CA125/KA150 CF 1:44  PTT-B  MODEL DAIHATSU (W64''''*L42''''* 15/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-022-rm', 'S/B SIZE 876Wx1090L KA125/CA125*3/KA125 BCF  (W70''''*L42''''* 15/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-023-rm', 'S/B SIZE 932Wx1090L KA150/CA125/KA150 CF  (W38''''*L42''''* 15/16 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-024-rm', 'S/B SIZE 1094Wx1094L KA150/CA125*3/KA150 BC/F 1:1  PLATE  MODEL DAIHATSU/SABARU (W44''''L43''''1/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-039-rm', 'S/B SIZE 704W*2317L KA185/CA125*3/KA185 BCF (W56"L91: 1/4) ผ่า 2 (CONVERTER RF29,RT88(TKR-039 TO 041)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-040/041-rm', 'S/B SIZE  1664W*800L KL250/CA125*3/KL250 BCF (W66"L31" 1/2) CONVERTER RF29,RT88(TKR-039 TO 041)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-051-rm', 'S/B SIZE 560W*2188L  KA185/CA125*3/KA185 BCF (W46"L86" 3/16) ผ่า 2 ทับรอย170*220*170', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-052/053-1-rm', 'S/B SIZE 730W*660L KA185/CA125*3/KA185 BCF (W58"L25" 16/16) ผ่า 2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TKR-054-rm', 'S/B SIZE 781W*1090L KA125/CA125*3/KA125 BCF (W62"L42" 15/16) ผ่า 2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TSH-004-rm', 'SHEET BOARD  SIZE  842W*1044L  CS110/CS110/CS110 CF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TSL-COM-1-rm', 'S/B 2121W*2070L KA230/CA125*3/KA230 BCF  M.TC422-4211-4  COMMON BOX + BOTTOM PLATE (W84"*L81" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-TWS-001-rm', 'PAPER PAD 1120W*1220L CA125/CA125*3/CA125 BC/F  (W46"*L48" 1/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-UC3C-38811-D-rm', 'S/B 1562W*1767L KA125/CA125*3/KA125  BCF 1:2  M.UC3C-38811-D (W62"*L69" 5/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-UNS003-1-rm', 'S/B  806W*1241L  KL205/CA125/KL205  1:1 CF  (W64"*L48" 7/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-UNS003CANCELL-rm', 'S/B  797W*1241L  KL205/CA125/KL205  1:1 CF  (W64"*L48" 7/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-UNS003-Common-rm', 'S/B  1613W*1470L  KL205/CA125/KL205  CF (Common UNS010 PTT-A, PTT-B, UNS003 BOX, UNS004 BOX) (W64"*L57" 7/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-UNS007-rm', 'S/B  1320W*1106L  KL205/CA125*3/KL205  BCF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-UNS007-1-rm', 'S/B  1308W*1106L  KL205/CA125*3/KL205  BCF (W52"*L43" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-UNS010-PTT-B-rm', 'S/B  1410W*1320L  KL205/CA125/KL205  CF (W56"*L52")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-VIK-001-rm', 'S/B 705W*1205L KA185/CA125*3/KA185 BCF 1:1 (W56"*L47" 1/2 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-VIK-002-rm', 'S/B 705W*1205L KA230/CA125/KA230 CF 1:1 (W56"*L47" 1/2 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-YMH-001-rm', 'S/B 1281W*1520L KA230/CA125*3/KA230 BC/F 1:1 MODEL P4-6EK (W52"*L59" 7/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-YMH-002-rm', 'S/B 1277W*1047L KA230/CA185*3/KA230 BC/F 1:1 MODEL P4-6EK (W52"*L41" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-YRZ-001-rm', 'S/B 1003W*950L KA230/CA125*3/KA230 BCF 1:4 (PTT-A) MODEL:AV59-5019-B-VOJKA-FLH-0299(FORD) (W40"*L37" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-YRZ-007-rm', 'S/B 1114W*1478L KA230/CA125/KA230 CF', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-YRZ-007-1-rm', 'S/B 1105W*1478L KA230/CA125/KA230 CF (W44"*L58" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-YRZ-008-rm', 'S/B 1379W*1142L KA185/CA125*3/KA185  BCF 1:1 (W56"*L45" )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-YRZ-009-rm', 'S/B 1379W*1142L KA185/CA125*3/KA185  BCF 1:1 (W56"*L45")', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSCR-001-rm', 'PTT-1A 150W*488L KA185/CA125*3/KA185 BC/F 1:1 M.TG446270-34009B', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSCR-002-rm', 'PTT-1B 263W*488L KA185/CA125*3/KA185 BC/F 1:1 M.TG446270-34009B', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSCR-003-rm', 'PTT-1C 150W*488L KA185/CA125*3/KA185 BC/F 1:1 M.TG446270-34009B', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSCR-004-rm', 'PTT-1D 263W*985L KA185/CA125*3/KA185 BC/F 1:2 M.TG446270-34009B', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSCR-005-rm', 'PTT-1A 606W*150L KA185/CA125*3/KA185 BC/F  M.TG446290-19730T&PH446270-10229C', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSCR-006-rm', 'PTT-1B 263W*606L KA185/CA125*3/KA185 BC/F 1:1 M.TG446290-19730T&PH446270-10229C', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSCR-007-rm', 'PTT-1C 263W*606L KA185/CA125*3/KA185 BC/F 1:1 M.TG446290-19730T&PH446270-10229C', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSCR-008-rm', 'PTT-1D 263W*985L KA185/CA125*3/KA185 BC/F 1:1 M.TG446290-19730T&PH446270-10229C', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSCR-009-rm', 'PTT-1E 263W*985L KA185/CA125*3/KA185 BC/F 1:1 M.TG446290-19730T&PH446270-10229C', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEN-001-rm', 'TOP CAP (ID)598W*800L*94H KA270/CA185/KA540/CA185/KA270 AA 1:1 MODEL:SLEEVE BOX (31353-X260A) (SE-006)  SEN-2206041-00-00', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEN-002-rm', 'SLEEVE (ID)562W*770L*491H KA270/CA185/KA540/CA185/KA270 AA 1:1 MODEL:SLEEVE BOX (31353-X260A) (SE-006)  SEN-2206041-00-00', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEN-003-rm', 'BOTTOM CAP+PAPER PALLET (ID)598W*800L*94H KA270/CA185/KA540/CA185/KA270 AA 1:1 MODEL:SLEEVE BOX (31353-X260A) (SE-006)  SEN-2206041-00-00', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEN-004-rm', 'LDPE BAG 1600W*1450L*0.05T MM (E1C-105-160-145) MODEL:SLEEVE BOX (31353-X260A) (SE-006)  SEN-2206041-00-00', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEN-004-1-rm', 'LDPE BAG 1500W*1800L*0.05T MM (E1C-105-150-180) MODEL:SLEEVE BOX (31353-X260A) (SE-006)  SEN-2206041-00-00', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEN-005-rm', 'TOP CAP (ID)546W*1107L*94H KA270/CA185/KA540/CA185/KA540/CA185/KA270  AAA 1:1 MODEL:SLEEVE BOX 576W*1137L*637H TD-SEN-2301025-00-04', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEN-006-rm', 'SLEEVE (ID)510W*1071L*491H KA270/CA185/KA540/CA185/KA540/CA185/KA270  AAA 1:1 MODEL:SLEEVE BOX 576W*1137L*637H TD-SEN-2301025-00-04', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEN-006-1-rm', 'SLEEVE (ID)510W*1071L*491H KA270/CA185/KA540/CA185/KA270  AA 1:1 MODEL:SLEEVE BOX 556W*1117L*511H TD-SEN-2301025-00-05', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEN-007-rm', 'BOTTOM CAP&PAPER PALLET (ID)546W*1107L*225H KA270/CA185/KA540/CA185/KA540/CA185/KA270  AAA +PAD KL205 BC/F 1:1 MODEL:SLEEVE BOX 576W*1137L*637H TD-SEN-2301025-00-04', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEN-008-rm', 'TOP CAP/BOTTOM CAP  (ID)1096W*1096L*94H KA270/CA185/KA540/CA185/KA540/CA185/KA270  AAA 1:2 MODEL:SLEEVE SET SIZE (OD)1090W*1090L*800H TD-SEN-2303014-00-03', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEN-009-rm', 'SLEEVE (ID)1060W*1060L*800H KA270/CA185/KA540/CA185/KA540/CA185/KA270  AAA 1:2 MODEL:SLEEVE SET SIZE (OD)1090W*1090L*800H TD-SEN-2303014-00-03', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEN-010-rm', 'TOP CAP/BOTTOM CAP  (ID)536W*1097L*94H KA270/CA185/KA540/CA185/KA270  AA 1:2 MODEL:SLEEVE BOX 556W*1117L*511H MM TD-SEN-2301025-00-05', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-001-rm', 'COVER-01 270W*270L KL205/CA185/KL205 B/F (PACKAGE FOR PAPER REEL 156) 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-001-H-rm', 'COVER-1A 270W*270L KL205/CA185/KL205 B/F (PACKAGE FOR PAPER REEL 156) 1:6 HELP SEW-1302001-02-03', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-002-rm', 'COVER-02 270W*270L KL205/CA185/KL205 B/F (PACKAGE FOR PAPER REEL 156) 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-002-H-rm', 'COVER-02 270W*270L KL205/CA185/KL205 B/F (PACKAGE FOR PAPER REEL 156) 1:6 HELP SEW-1302001-02-03', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-003-1-rm', 'CORE DAI (OD) 129/6T*162L PAPER TUBE GB (PACKAGE FOR PAPER REEL 156) 1:1 1) Thickness +-0.2mm  2)L+-0.5mm  3)ID+-0.1mm  4)OD+-0.5mm', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-003CANCELL-rm', 'CORE DAI (OD) 129/6T*162L PAPER TUBE (PACKAGE FOR PAPER REEL 156) 1:1 1) Thickness +-0.2mm  2)L+-0.5mm  3)ID+-0.1mm  4)OD+-0.5mm', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-004-rm', 'COVER 610W*610L KL205/CA185/KL205 C/F (PACKAGE FOR PAPER REEL 34) 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-004-1-rm', 'COVER 610W*610L KL205/CA185/KL205 C/F (PACKAGE FOR PAPER REEL 34) 1:2 NEW DESIGN', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-004-A/C-rm', 'COVER-A 610W*610L KL205/CA185/KL205 C/F (PACKAGE FOR PAPER REEL 34, 24) 1:1 กล่องละ 130 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-004-A/N-1-rm', 'COVER-A 610W*610L KL205/CA185/KL205 C/F (PACKAGE FOR PAPER REEL 34, 24) 1:1 กล่องละ 130 ชิ้น (แก้ไขดีไซด์ เหลือ 1 รู)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-004-A/NCANCELLED-rm', 'COVER-A 610W*610L KL205/CA185/KL205 C/F (PACKAGE FOR PAPER REEL 34, 24) 1:1 NEW DESIGN กล่องละ 130 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-004-A-1-rm', 'COVER-A 610W*610L KL205/CA185/KL205 C/F (PACKAGE FOR PAPER REEL 34, 24) 1:1 กล่องละ 130 ชิ้น (แก้ไขดีไซด์ เหลือ 1 รู)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-004-ACANCELLED-rm', 'COVER-A 610W*610L KL205/CA185/KL205 C/F (PACKAGE FOR PAPER REEL 34, 24) 1:1 NEW DESIGN กล่องละ 130 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-004-B/C-rm', 'COVER-B 610W*610L KL205/CA185/KL205 C/F (PACKAGE FOR PAPER REEL 34, 24) 1:1 กล่องละ 130 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-004-B/N-1-rm', 'COVER-B 610W*610L KL205/CA185/KL205 C/F (PACKAGE FOR PAPER REEL 34, 24) 1:1 กล่องละ 130 ชิ้น (แก้ไขดีไซด์ ไม่มีรู)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-004-B/NCANCELED-rm', 'COVER-B 610W*610L KL205/CA185/KL205 C/F (PACKAGE FOR PAPER REEL 34, 24) 1:1 NEW DESIGN กล่องละ 130 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-004-B-1-rm', 'COVER-B 610W*610L KL205/CA185/KL205 C/F (PACKAGE FOR PAPER REEL 34, 24) 1:1 กล่องละ 130 ชิ้น (แก้ไขดีไซด์ ไม่มีรู)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-004-BCANCELLED-rm', 'COVER-B 610W*610L KL205/CA185/KL205 C/F (PACKAGE FOR PAPER REEL 34, 24) 1:1 NEW DESIGN กล่องละ 130 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-005-1-rm', 'CORE DAI (OD) 250/8T*34L PAPER TUBE GB (PACKAGE FOR PAPER REEL 34) 1:1  1) Thickness +- 0.2 mm  2) L +- 0.5 mm  3) ID +- 0.1 mm  4) OD +- 0.5 mm', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-005CANCELL-rm', 'CORE DAI (OD) 250/8T*34L PAPER TUBE (PACKAGE FOR PAPER REEL 34) 1:1  1) Thickness +- 0.2 mm  2) L +- 0.5 mm  3) ID +- 0.1 mm  4) OD +- 0.5 mm', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-006-1-rm', 'CENTER GUIDE 232W*232L CA125*3 C/F (PACKAGE FOR PAPER REEL 34) 1:2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-006-3-rm', 'CENTER GUIDE 232W*232L KL205/CA185/KL205  C/F (PACKAGE FOR PAPER REEL 34,24 ) 1:2 NEW DESIGN กล่องละ 650 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-007-rm', 'BOX 1147W*1177L KA125/CA125/KA125 C/F 1:1 (PACKAGE FOR PAPER REEL 156)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-008-1-rm', 'BOX 1073W*1279L KA150/CA125/KA150 C/F 1:1 (PACKAGE FOR PAPER REEL 34) ประกอบเป็นกล่องแล้ว', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-009-rm', 'GLUE P-3240', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-010-rm', 'CORE DAI (OD) 250/8T*24L PAPER TUBE (PACKAGE FOR PAPER REEL 24) 1:1  1) Thickness +- 0.2 mm  2) L +- 0.5 mm  3) ID +- 0.1 mm  4) OD +- 0.5 mm', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-011-rm', 'BOX 952W*1269L KA150/CA125/KA150 C/F 1:1 (PACKAGE FOR PAPER REEL 24) ประกอบเป็นกล่องแล้ว', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-012-1-rm', 'CORE DAI (OD) 250/8T*25L PAPER TUBE GB(PACKAGE FOR PAPER REEL 24) 1:1  1) Thickness +- 0.2 mm  2) L +- 0.5 mm  3) ID +- 0.1 mm  4) OD +- 0.5 mm', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-012CANCELL-rm', 'CORE DAI (OD) 250/8T*25L PAPER TUBE (PACKAGE FOR PAPER REEL 24) 1:1  1) Thickness +- 0.2 mm  2) L +- 0.5 mm  3) ID +- 0.1 mm  4) OD +- 0.5 mm', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-013CANCELLED-rm', 'BOX 640W*625L*545H FUTURE BOARD 5MM 1:1  OUTER BOX REEL 24/34/156 ถ้าซื้อใหม่ให้ตั้งเป็นหมวดวัสดุโรงงาน', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-014-rm', 'PTT-156 605W*500L FUTURE BOARD 5MM 1:6  OUTER BOX REEL 24/34/156', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-015-rm', 'COVER-1B 270W*270L KL205/CA125/KL205  BF PAPER REEL 156', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-015-H-rm', 'COVER-1B 270W*270L KL205/CA185/KL205 B/F (PACKAGE FOR PAPER REEL 156) 1:6 HELP SEW-1302001-02-03', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-016-rm', 'BOX 1185W*1282L KO125/CA125*3/KO125 BCF SUPPORT:BOX REEL 24,34,156', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-017-rm', 'หมึกเติมตรายางในตัวสีน้ำเงิน Shiny / Ink Stamping Refill', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSEW-018-rm', 'GLUE C-3558  100 Kgs./ Drum', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-025 CANCEL-rm', 'BOX 1029W*964L KA185/CA125*3/KA185 BC/F 2:1+ตาไก่ 4:1 MODEL:RG71LH SCREEN COLOR BLAK(เย็บตาไก่)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-025-1CANCELLED-rm', 'BOX 1029W*964L KA185/CA125*3/KA185 BC/F 2:1  MODEL:RG71LH SCREEN COLOR BLAK', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-025-2-rm', 'BOX 1029W*1896L KA185/CA125*3/KA185 BC/F 2:1  MODEL:RG71LH SCREEN COLOR BLACK', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-026-1-rm', 'TRAY-A2 820W*500L KA125/CA125/KA125 C/F MODEL:RG71LH', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-027-rm', 'PAD 345W*552L KA125/CA125/KA125 C/F MODEL:RG71LH,RG71RH (W42"*L21" 3/4 ผ่า 3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-028-rm', 'EVA-2B 35W*15T*50L MODEL:RG71LH,RG71RH', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-029-rm', 'EVA-2C 25W*30T*40L MODEL:RG71LH,RG71RH', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-030-rm', 'FOAM SUPPORT 70W*15T*70L MODEL:RG71LH,RG71RH', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-031-rm', 'EVA-2D 25W*30T*60L MODEL:RG71LH,RG71RH', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-032 CANCEL-rm', 'BOX 1029W*964 KA185/CA125*3/KA185 BC/F MODEL:RG71RH SCREEN COLOR BLAK(เย็บตาไก่)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-032-1CANCELLED-rm', 'BOX 1029W*964 KA185/CA125*3/KA185 BC/F MODEL:RG71RH SCREEN COLOR BLAK', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-032-2-rm', 'BOX 1029W*1896L KA185/CA125*3/KA185 BC/F MODEL:RG71RH SCREEN COLOR BLACK', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-033-1-rm', 'TRAY 820W*500L KA125/CA125/KA125 C/F MODEL:RG71RH', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-034 CANCEL-rm', 'BOX 1029W*1289L KA185/CA125*3/KA185 BC/F MODEL:RG72LH SCREEN COLOR BLAK(เย็บตาไก่)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-034-1-rm', 'BOX 1029W*1289L KA185/CA125*3/KA185 BC/F MODEL:RG72LH SCREEN COLOR BLAK', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-035-rm', 'TRAY 698W*860L KA125/CA125/KA125 C/F MODEL:RG72LH', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-036-rm', 'EVA-2B 25W*30T*65L MODEL:RG72LH,RG72RH', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-037-rm', 'EVA-2C 25W*30T*50L MODEL:RG72LH,RG72RH', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-038-rm', 'EVA-2D 25W*30T*40L MODEL:RG72LH,RG72RH', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-039-rm', 'EVA-2E 25W*30T*30L MODEL:RG72LH,RG72RH', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-040-rm', 'FOAM SUPPORT 80W*10T*80l MODEL:RG72LH,RG72LRH', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-041-rm', 'TOP PAD 498W*733L KA125/CA125/KA125 C/F MODEL:RG72LH,RG72RH', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-042 CANCEL-rm', 'BOX 1029W*1289L KA185/CA125*3/KA185 MODEL:RG72RH SCREEN COLOR BLAK(เย็บตาไก่)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-042-1-rm', 'BOX 1029W*1289L KA185/CA125*3/KA185 MODEL:RG72RH SCREEN COLOR BLAK', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-043-rm', 'TRAY-2A 698W*860L KA125/CA125/KA125 C/F MODEL:RG72RH', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-051-rm', 'BOX 700W*1565L KA230/CA125*3/KA230L BC/F MODEL:RG37 SCREEK COLOR BLACK', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-052-rm', 'PTT-2A 330W*415L EPE1.5T/KA230/CA125/KA230 C/F/EPE 1.5T MODEL:RG37', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-053-rm', 'PTT-2B 330W*330L EPE1.5T/KA230/CA125/KA230 (C/F) /EPE 1.5T MODEL:RG37', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-054-rm', 'EVA SUPPORT-2C 30W*15T*330L MODEL:RG37', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-058-3-rm', 'เชื่อกปอ Extreme  8MM*15.25M. MODEL:RG71RH,RG71LH,RG72RH,RG72LH', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-058-4-rm', 'เชื่อกปอ Extreme  8MM*20M. MODEL:RG71RH,RG71LH,RG72RH,RG72LH', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-058-5-rm', 'เชื่อกปอ Extreme  8MM*30.5M. MODEL:RG71RH,RG71LH,RG72RH,RG72LH', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-058-6-rm', 'เชื่อกปอ 6MM (2500 M./ม้วน) MODEL:RG71RH,RG71LH,RG72RH,RG72LH', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-061-rm', 'FOAM SUPPORT 80W*30T*80l MODEL:RG72LH,RG72LRH', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-064-rm', 'STOPPER EVA 30W*30T*990L RG50 PACK 60 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-065-rm', 'SIDE PTT-3B EVA 50W*40T*996L RG50 PACK 60 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-066-rm', 'BOTTOM PTT-3C  EVA 45W*50T*996L RG50 PACK 60 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-067-rm', 'SIDE PTT-3E  EVA 40W*30T*996L RG50 PACK 60 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-071-rm', 'PTT-3B 50W*30T*944L EVA RG36(PACK 17 PCS)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-074-rm', 'BOTTOM PTT-C 55W*30T*944L EVA 1:2 RG36(PACK 17 PCS)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-075-rm', 'TOP CAP 1281W*1260L BI-WALL 400 1:1 RG35 (PACK 28 PCS)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-076-rm', 'STOPPER 30W*30T*1010L EVA 1:2 RG35 (PACK 28 PCS)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-078-rm', 'SUPPORT 50W*3T*1023L EVA STICKER 1:4 RG35 (PACK 28 PCS)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-079-rm', 'SLEEVE 575W*4239L BI-WALL 850 1:1 RG35 (PACK 28 PCS)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-081-rm', 'SIDE PTT 55W*30T*1023L EVA 1:2  RG35 (PACK 28 PCS)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-082-rm', 'BOTTOM PTT 30W*30T*1023L EVA 1:4 RG35 (PACK 28 PCS)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-083-rm', 'BOTTOM CAP 1281W*1260L BI-WALL 1:1 RG35 (PACK 28 PCS)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-084-rm', 'STOPPER 30W*30T*934L EVA RG36(PACK 17 PCS)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-085-rm', 'TOP CAP 1243W*1286L KL205/CA125*3/KL205 BCF 1:1 SCREEN RG51 PACK34 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-086-rm', 'PTT-1B 50W*30T*1004L EVA HN 60-65 1:1 RG51 PACK34 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-087/1-rm', 'SLEEVE 500W*2117L KL205/CA125*3/KL205 BCF 1:1 SCREEN เย็บเป็นกล่องแล้ว RG51 PACK34 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-088-rm', 'PTT-3C 50W*40T*1004L EVA HN 60-65 1:1 RG51 PACK34 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-089-rm', 'STOPPER 100W*10T*1004L EVA HN 60-65 1:1 RG51 PACK34 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-090-rm', 'BOTTOM CAP 1243W*1286L KL205/CA125*3/KL205 BCF 1:1 SCREEN RG51 PACK34 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-091-rm', 'TOP CAP 1337W*1221L KL205/CA125*3/KL205 BCF 1:1 SCREEN RG50 PACK41 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-092-rm', 'STOPPER-1B 45W*30T*1082L EVA HN 60-65 1:2 RG50 PACK41 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-093-rm', 'STOPPER-1C 45W*30T*200L EVA HN 60-65 1:2 RG50 PACK41 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-094-rm', 'SLEEVE 500W*2147L KL205/CA125*3/KL205 BCF 1:1 SCREEN เย็บเป็นกล่องแล้ว RG50 PACK41 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-096-rm', 'PTT-B 50W*40T*1098L EVA HN 60-65 1:2 RG50 PACK41 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-097-rm', 'PTT-C 30W*30T*1098L EVA HN  60-65 1:1 RG50 PACK41 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-098-rm', 'PTT-D 50W*40T*208L EVA HN 60-65 1:2 RG50 PACK41 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-099-rm', 'PTT-4C 30W*30T*1098L EVA HN 60-65 1:1 RG50 PACK41 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-100-rm', 'PTT-4D 50W*40T*208L EVA HN 60-65 1:2 RG50 PACK41 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-101-rm', 'BOTTOM CAP 1337W*1221L KL205/CA125*3/KL205 BCF 1:1 SCREEN RG50 PACK41 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-102-rm', 'BOTTOM PTT-4B 50W*40T*1004L EVA HN 60-65 1:2 RG51 PACK34 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-103-rm', 'SUPPORT 390W*5T*1004L EVA HN 60-65 1:1 RG51 PACK34 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-104-rm', 'TOP CAP 1302W*1182L KL205/CA125*3/KL205 BCF 1:1 RG51 OLD DESIGN', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-105-rm', 'EVA PTT-1C 40W*40T*1050L 1:1  RG51 OLD DESIGN', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-106-rm', 'SLEEVE 620W*2077L KL205/CA125*3/KL205 BCF 1:1 SCREEN RG51 OLD DESIGN เย็บเป็นกล่องแล้ว', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-107-rm', 'BOTTOM CAP 1302W*1182L KL205/CA125*3/KL205 BCF 1:1 SCREEN ข้างใน RG51 OLD DESIGN', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-108-rm', 'EVA PTT-4B 50W*40T*1050L 1:2  RG51 OLD DESIGN', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-109-rm', 'EVA PTT-4C 35W*50T*1050L 1:1  RG51 OLD DESIGN', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-110-rm', 'EVA PTT-4D 50W*15T*1050L 1:1  RG51 OLD DESIGN', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-111-rm', 'EVA PTT-4E 30W*30T*1050L 1:1  RG51 OLD DESIGN', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-112-rm', 'TOP CAP 1465W*1186L KL205/CA125*3/KL205 BCF 1:1 MODEL RG52 SIAZE 1252*977*882', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-113-rm', 'SIDE SLEEVE 870W*1472L  BI-WALL AA850  1:1 MODEL RG52 SIAZE 1252*977*882', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-114-rm', 'SIDE SLEEVE 870W*3137L  BI-WALL AA850  1:1 MODEL RG52 SIAZE 1252*977*882', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-115-rm', 'EVA 100W*5T*715L 1:1 MODEL RG52 SIAZE 1252*977*882', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-116-rm', 'PAD 945W*1234L KL205/CA125*3/KL205 BCF 1:1 MODEL RG52 SIAZE 1252*977*882', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-117-rm', 'PTT-5B 936W*55L KA125/CA125*3/KA125 BCF 1:14 MODEL RG52 SIAZE 1252*977*882 มัดละ 50 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-118-rm', 'BOTTOM CAP 1465W*1186L KL205/CA125*3/KL205 BCF 1:1 MODEL RG52 SIAZE 1252*977*882', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-119-rm', 'TOP CAP 1300W*1200L KL205/CA125*3/KL205 BCF 1:1 MODEL RG69 SIZE 994*1100*509MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-120-rm', 'BOTTOM CAP 1300W*1200L KL205/CA125*3/KL205 BCF 1:1 MODEL RG69 SIZE 994*1100*509MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-121-rm', 'SLEEVE 495W*4125L BI-WALL AA850  1:1 MODEL RG69 SIZE ID 955*1055*495H เย็บนอก', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-122-rm', 'PTT-4A  50W*25T*945L  EVA 1:4 MODEL RG69 SIZE 994*1100*509MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-123-rm', 'PTT-4B  50W*50T*945L  EVA 1:2 MODEL RG69 SIZE 994*1100*509MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-124-rm', 'PTT-4C  80W*30T*945L  EVA 1:2 MODEL RG69 SIZE 994*1100*509MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-125-rm', 'PAD 1379W*945L KL205/CA125*3/KL205 BCF 1:2 MODEL RG69 SIZE 994*1100*509MM ทับรอย 455*520*404', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-126-rm', 'BOX 650W*2016L KA185/CA125*3/KA185 BC/F MODEL:VN24 RQ SUV-R   RG83R  SCREEN COLOR BLACK มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-127-rm', 'SUPPORT-A  EVA 40W*10T*40L  MODEL:COMMON RG83R, RG84L, RG85R, RG86L', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-128-rm', 'SUPPORT-B  EVA 30W*20T*50L  MODEL:COMMON RG83R, RG84L', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-129-rm', 'SUPPORT-C  EVA 40W*10T*50L  MODEL:COMMON RG83R, RG84L, RG85R, RG86L', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-130-rm', 'BOX 650W*2016L KA185/CA125*3/KA185 BC/F MODEL:VN24 RQ SUV-L   RG84L  SCREEN COLOR BLACK มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-131-rm', 'BOX 690W*2096L KA185/CA125*3/KA185 BC/F MODEL:VN24 RQ SDN-R   RG85R  SCREEN COLOR BLACK มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-132-rm', 'SUPPORT-C  EVA 20W*10T*50L  MODEL:COMMON RG85R, RG86L', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-133-rm', 'BOX 690W*2096L KA185/CA125*3/KA185 BC/F MODEL:VN24 RQ SDN-L   RG86L  SCREEN COLOR BLACK มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-134-rm', 'PAD SIZE 380W*580L  KA125/CA125/KA125  C/F  1 : 1  MODEL:BOX VN24 RQ SUV-R,L   RG83R / RG84L  (W46"*L22" 7/8 ผ่า3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-135-rm', 'PAD SIZE 420W*580L  KA125/CA125/KA125  C/F  1 : 1  MODEL:BOX VN24 RQ SDN-R,L   RG85R / RG86L  (W68"*L22" 7/8 ผ่า4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-135-1-rm', 'PAD SIZE 420W*1160L  KA125/CA125/KA125  C/F  1 : 2  MODEL:BOX VN24 RQ SDN-R,L   RG85R / RG86L', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-136 CANCEL-rm', 'TRAY 602W*766L KA125/CA125/KA125 CF 1:5 MODEL SGB-1905016-02-00(BOX VN24 RQ SDN-L)SGB-018', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-136-1-rm', 'TRAY 602W*766L KA125/CA125/KA125 CF 1:5 MODEL SGB-1905016-02-00(BOX VN24 RQ SDN-L)SGB-018 (Change Design)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-137 CANCEL-rm', 'TRAY 602W*766L KA125/CA125/KA125 CF 1:5 MODEL SGB-1901011-02-00(BOX VN24 RQ SDN-R)SGB-017', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-137-1-rm', 'TRAY 602W*766L KA125/CA125/KA125 CF 1:5 MODEL SGB-1901011-02-00(BOX VN24 RQ SDN-R)SGB-017 (Change Design)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-138 CANCEL-rm', 'TRAY 562W*726L KA125/CA125/KA125 CF 1:5 MODEL SGB-1901011-03-00(BOX VN24 RQ SUV-L)SGB-016', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-138-1-rm', 'TRAY 562W*726L KA125/CA125/KA125 CF 1:5 MODEL SGB-1901011-03-00(BOX VN24 RQ SUV-L)SGB-016 (Change Design)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-139 CANCEL-rm', 'TRAY 562W*726L KA125/CA125/KA125 CF 1:5 MODEL SGB-1905016-01-00(BOX VN24 RQ SUV-R)SGB-015', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-139-1-rm', 'TRAY 562W*726L KA125/CA125/KA125 CF 1:5 MODEL SGB-1905016-01-00(BOX VN24 RQ SUV-R)SGB-015 (Change Design)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-140-rm', 'FOAM SUPPORT 80W*5T*80l 1:10 MODEL:RG83_S/R SUV RH RG84_S/L SUV LH', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-141-rm', 'BOX 650W*2016L KA185/CA125*3/KA185 BC/F MODEL: BOX RG 83_S,R SUV RH(SGB-015-1 SCREEN COLOR BLACK มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-142-rm', 'BOX 650W*2016L KA185/CA125*3/KA185 BC/F MODEL: BOX RG 84_S/L SUV LH(SGB-016-1 SCREEN COLOR BLACK มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-143-rm', 'BOX 690W*2096L KA185/CA125*3/KA185 BC/F MODEL:BOX RG 85_S,R SDN RH(SGB-017-1 SCREEN COLOR BLACK มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-144-rm', 'BOX 690W*2096L KA185/CA125*3/KA185 BC/F MODEL: BOX RG 86_S,L SDN LH(SGB-018-1) SCREEN COLOR BLACK มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-145-rm', 'SUPPORT-A  EVA FOAM 40W*25T*40L (H/N 40-44) MODEL:PKG.FOR MITSUBISHI 4P45 S1 (PACK 24)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSGB-146-rm', 'SUPPORT-C  EVA FOAM 56W*50T*50L (H/N 40-44) MODEL:PKG.FOR MITSUBISHI 4P45 S1 (PACK 24)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSKS-001-rm', 'BOX-ROTARY 1187W*1481L  KA185/CA125/KA185 CF 1:1  M.BOX OD 721*732*471H (CONCEPT 2) ROTARY Joint กาว เป็น Set  มัดละ 6 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-001-1 CANCELL-rm', 'BOX B7  719W*2093L  KA185/CA125/KA185  CF 1:1 MODEL B7 เย็บเป็นกล่องแล้ว', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-001-2-rm', 'BOX B7  711W*2093L  KA185/CA125/KA185  CF 1:1 MODEL B7 (DEVELOP) เย็บเป็นกล่องแล้ว', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-002-1-rm', 'BLOCK  203W*127L  PAPER LINER  KA  1:1 MODEL B7,B6 มัดละ 100 ชิ้น ใช้หนังยางวงใหญ่', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-002CANCELLED-rm', 'BLOCK  206W*145L  PAPER LINER  KA  1:1 MODEL B7,B6 มัดละ 100 ชิ้น ใช้หนังยางวงใหญ่', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-003-rm', 'TOP PAD 505W*505L  KA125/CA125*3/KA125 BCF 1:1 MODEL B7,B6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-004-rm', 'BOTTOM PAD-A 505W*505L  KA125/CA125*3/KA125 BCF 1:1 MODEL B7,B6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-005-rm', 'BOTTOM PAD-B 505W*505L  KA125/CA125*3/KA125 BCF 1:2 MODEL B7,B6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-006-rm', 'PTT-B1 170W*425L KA125/CA125/KA125 CF 1:4 MODEL B7', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-007-rm', 'PTT-B2 170W*505L KA125/CA125/KA125 CF 1:2 MODEL B7', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-008-rm', 'PTT-B3 170W*505L KA125/CA125/KA125 CF 1:4 MODEL B7', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-009-rm', 'PTT-B4 170W*510L KA125/CA125/KA125 CF 1:6 MODEL B7', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-010-1 CANCELL-rm', 'BOX B6  719W*2093L  KA185/CA125/KA185 CF 1:1 MODEL B6 เย็บเป็นกล่องแล้ว Screen Color Blue (WF 06429 BLUE)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-010-2-rm', 'BOX B6  711W*2093L  KA185/CA125/KA185 CF 1:1 MODEL B6 (DEVELOP) เย็บเป็นกล่องแล้ว Screen Color Blue (WF 06429 BLUE)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-014-rm', 'PTT-B1 160W*426L KA125/CA125/KA125 CF 1:6 MODEL B6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-015-rm', 'PTT-B2 160W*505L KA125/CA125/KA125 CF 1:2 MODEL B6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-016-rm', 'PTT-B3 160W*505L KA125/CA125/KA125 CF 1:3 MODEL B6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-017-rm', 'PTT-B4 160W*510L KA125/CA125/KA125 CF 1:3 MODEL B6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-018-rm', 'PTT-B5 160W*104L KA125/CA125/KA125 CF 1:2 MODEL B6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-024-rm', 'BOX  711W*2093L KA185/CA125/KA185 CF 1:1 MODEL BOX B6 ( PACK 20 ) มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-025-rm', 'PTT-B1 160W*910L KA125/CA125/KA125  CF  1:4  MODEL BOX B6 ( PACK 20 ) มัดละ 50 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-026-rm', 'PTT-B2 160W*505L KA125/CA125/KA125  CF  1:2  MODEL BOX B6 ( PACK 20 ) มัดละ 50 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-028-rm', 'PTT-B4 160W*568L KA125/CA125/KA125  CF  1:1  MODEL BOX B6 ( PACK 20 ) มัดละ 50 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSMT-029-rm', 'PTT-B5 160W*165L KA125/CA125/KA125  CF  1:2  MODEL BOX B6 ( PACK 20 ) มัดละ 50 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNC-001/1-rm', 'SLEEVE 580W*2178L KA150/CA125*3/KA150 BC/F 1:2 (เย็บ) ( COMMON J3A,J1A,J4A)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNC-005/1-rm', 'TOP CAP 1332W*1264L KA150/CA125*3/KA150 BC/F 1:1 (COMMON J3A,J1A,J4A)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNC-006/1-rm', 'PLATE 1045W*1120L KA150/CA125*3/KA150 BC/F 1:1 (COMMON J3A,J1A,J4A) (W42"*L44" 1/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNC-007/1-rm', 'BOTTOM CAP 1332W*1264L KA150/CA125*3/KA150 BC/F 1:1 (COMMON J3A,J1A,J4A)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNC-013/1-rm', 'PARTITION-1  332W*300L KA150/CA125*3/KA150 BC/F 1:2 (678101HJ4A)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNC-014/1-rm', 'PARTITION-2  420W*130L KA150/CA125*3/KA150 BC/F 1:2 (678101HJ4A)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNC-015/1-rm', 'PARTITION-3  580W*748L KA150/CA125*3/KA150 BC/F 1:1 (678101HJ4A)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-005-rm', 'WOODEN PALLET1130W*1160L*125H FUMIGATION', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-009-rm', 'WOODEN PALLET1135*1190*120H HEAT TRETMENT', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-009-1-rm', 'WOODEN PALLET1135*1190*120H HEAT TRETMENT (เปลี่ยนแบบ)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-010-rm', 'PTT-A 915W*570L KA125/CA125*3/KA125 BCF 1:12 MODEL CV3 PACKING', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-011-rm', 'PTT-B 95W*343L KA125/CA125*3/KA125 BCF 1:192 MODEL CV3 PACKING', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-012-rm', 'TRAY 1402W*1351L KA125/CA125*3/KA125 BCF 1:2 MODEL CV3 PACKING', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-013 CANCELLED-rm', 'PLATE 1135W*1192L KA125/CA125*3/KA125 BCF 1:4 MODEL CV3 PACKING', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-013/1 CANCELL-rm', 'PLATE 1192W*1130L KA125/CA125*3/KA125 BCF 1:4 MODEL CV3 PACKING (W48"*L44" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-013/2-rm', 'PLATE 1188W*1130L KA125/CA125*3/KA125 BCF 1:4 MODEL CV3 PACKING (W48"*L44" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-013/3-rm', 'PLATE 1188W*1130L KA125/CS110*3/KA125 BCF 1:4 MODEL CV3 PACKING', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-013/4-rm', 'PLATE 1186W*1130L KA125/CA125*3/KA125 BCF 1:4 MODEL CV3 PACKING (W48"*L44" 1/2) เน้นค่า +/- ไม่เกิน 2 mm.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-015-rm', 'WOODEN PALLET1135W*1190L*140H HEAT TRETMENT MODEL:COIL V3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-015-1-rm', 'WOODEN PALLET  1135W*1190L*135H HEAT TRETMENT MODEL:COIL V4.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-016-rm', 'PTT-A1 867W*570L KA125/CA125*3/KA125 BCF 1:12 MODEL V4 PACKING', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-016-1-rm', 'PTT-A1 867W*570L  KAC125/M125*3/KAC125 BC/F 1:12 MODEL V4,V3 PACKING  มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-017-rm', 'WOODEN PALLET  1135W*1160L*135H HEAT TRETMENT MODEL:PKG KRONOTERM COIL''S', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-018-rm', 'PTT-A2 400W*343L KAC125/M125*3/KAC125 BCF 1:24 MODEL V4,V3 PACKING มัดละ 25 ชิ้น (ใช้กระดาษศานติ)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-018-C-rm', 'PTT-A2 400W*343L KAC125/M125*3/KAC125 BCF 1:24 MODEL V4,V3 PACKING มัดละ 25 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-018-HELP-rm', 'PTT-A2 400W*343L KA125/CA125*3/KA125 BCF 1:24 MODEL V4,V3 PACKING มัดละ 25 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-019-rm', 'PTT-A3 400W*343L KAC125/M125*3/KAC125 BCF 1:24 MODEL V4,V3 PACKING มัดละ 25 ชิ้น (ใช้กระดาษศานติ)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-019-C-rm', 'PTT-A3 400W*343L KAC125/M125*3/KAC125 BCF 1:24 MODEL V4,V3 PACKING มัดละ 25 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-019-HELP-rm', 'PTT-A3 400W*343L KA125/CA125*3/KA125 BCF 1:24 MODEL V4,V3 PACKING มัดละ 25 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-020-rm', 'COVER-A 786W*360L KAC125/M125/KAC125 CF 1:12 MODEL V4,V3 PACKING มัดละ 20 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-020-HELP-rm', 'COVER-A 786W*360L KA125/CA125/KA125 CF 1:12 MODEL V4,V3 PACKING มัดละ 25 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-021-1-rm', 'COVER-B 58W*530L  KAC125/M125/KAC125 CF 1:12 MODEL V4,V3 PACKING (มัดละ 20 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-021CANCELLED-rm', 'COVER-B 83W*530L  KAC125/M125/KAC125 CF 1:12 MODEL V4,V3 PACKING (มัดละ 20 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-022-1-rm', 'PTT-C1 420W*1120L  KAC125/M125*3/KAC125 BC/F 1:2 MODEL V4,V3 PACKING (มัดละ 10 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-022CANCELLED-rm', 'PTT-C1 445W*1120L  KAC125/M125/KAC125 BCF 1:2 MODEL V4,V3 PACKING (มัดละ 10 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-023-1-rm', 'PTT-C2 420W*1166L  KAC125/M125*3/KAC125 BC/F 1:4 MODEL V4,V3 PACKING (มัดละ 10 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-023CANCELLED-rm', 'PTT-C2 445W*1166L  KAC125/M125/KAC125 BCF 1:4 MODEL V4,V3 PACKING (มัดละ 10 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-023-HELP-rm', 'PTT-C2 445W*1166L KA125/CA125*3/KA125 BCF 1:4 MODEL V4,V3 PACKING (มัดละ 25 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-024-1-rm', 'CORNER-A 420W*652L KAC125/M125*3/KAC125  BC/F 1:8 MODEL V4,V3 PACKING (มัดละ 25 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-024CANCELLED-rm', 'CORNER-A 445W*652L KAC125/M125/KAC125  BCF 1:8 MODEL V4,V3 PACKING (มัดละ 25 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-025-rm', 'DIECUT STOPER SIZE 400W*400L 1:16 (ACTUAL 100W*100L)  KA125/CA125*3/KA125 BCF 1:48 MODEL V4,V3 PACKING (มัดละ 25 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-026-rm', 'WOODEN PALLET 1135W*1190L*140H (HEAT TREATMENT) ไม้หนา 20T STAMP  A  COLOR BLACK ฝั่งขวามือ 2 ด้าน Model AEX INV 2 Layer, 3 Layer', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-026-1-rm', 'WOODEN PALLET 1073W*1130L*140H (HEAT TREATMENT) ไม้หนา 20T STAMP  A  COLOR BLACK ฝั่งขวามือ 2 ด้าน Model AEX INV 2 Layer, 3 Layer', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-027-rm', 'PLATE 1067W*1125L KA125/CA125*3/KA125 BCF 1:4 MODEL AEX  เน้นค่า +/- ไม่เกิน 2 mm. (W44''''*L44 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-028-rm', 'TRAY 1402W*1351L KAC125/M125*3/KAC125 BC/F 1:1 MODEL COIL V.4 PACKING', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-029-rm', 'BOTTOM CAP 1402W*1351L KAC125/M125*3/KAC125 BC/F 1:1 MODEL COIL V.4 PACKING', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-030-rm', 'BASE-1  1139W*570L KA125/CA125*3/KA125 BC/F 1:18  MODEL CASS-A (มัดละ 20 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-031-rm', 'BASE-2  390W*235L KA125/CA125*3/KA125 BC/F 1:18  MODEL CASS-A (มัดละ 20 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-032-rm', 'BASE-3  390W*250L KA125/CA125*3/KA125 BC/F 1:18  MODEL CASS-A (มัดละ 20 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-033-rm', 'BASE-4  310W*115L KA125/CA125*3/KA125 BC/F 1:18  MODEL CASS-A (มัดละ 20 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-034-rm', 'BASE-5  227W*314L KA125/CA125*3/KA125 BC/F 1:36  MODEL CASS-A (มัดละ 20 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-035-rm', 'BASE-6  270W*340L KA125/CA125*3/KA125 BC/F 1:18  MODEL CASS-A (มัดละ 20 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-036-rm', 'COVER-1  622W*496L KA125/CA125/KA125 C/F 1:18  MODEL CASS-A (มัดละ 20 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-037-rm', 'COVER-2  310W*528L KA125/CA125/KA125 C/F 1:18  MODEL CASS-A (มัดละ 20 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-038-rm', 'PTT-A  350W*1120L KA125/CA125*3/KA125 BC/F 1:3  MODEL CASS-A (มัดละ 20 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-039-rm', 'PTT-B  350W*1166L KA125/CA125*3/KA125 BC/F 1:6  MODEL CASS-A (มัดละ 20 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-040-rm', 'CORNER-A  350W*652L KA125/CA125*3/KA125 BC/F 1:12  MODEL CASS-A (มัดละ 20 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-041-rm', 'WOODEN PALLET 1100W*1100L*135H HEAT TRETMENT MODEL:COIL KRONOTERM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-043-rm', 'WOODEN PALLET 1126W*1650L*140H HEAT TRETMENT MODEL:CV5', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-043-1-rm', 'WOODEN PALLET 1064W*1635L*130H HEAT TRETMENT MODEL:CV5', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-044-rm', 'WOODEN PALLET 1135W*1161L*135H  HEAT TRETMENT MODEL KRONOTERN PKG.48', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSNH-045-rm', 'WOODEN PALLET 1142W*1285L*130H  HEAT TRETMENT MODEL CV5-VM (SHOT)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-012 CANCEL-rm', 'SLEEVE TRI-WALL1300G (AAA) OD:1016W*1016L*980H ID:986W*986L*980H', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-012/1CANCELL-rm', 'SLEEVE TRI-WALL1300G (AAA) OD:1016W*1016L*970H ID:986W*986L*970H', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-012/2-rm', 'SLEEVE TRI-WALL 100 (AAA) OD:1016W*1016L*970H ID:986W*986L*970H', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-013-rm', 'WOODEN PALLET 1036W*1047L*125H MM. (HEAT TRETMENT)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-014-rm', 'SLEEVE TRI-WALL1300G (AAA) OD:1016W*1016L*290H ID:986W*986L*290H', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-015-1CANCELL-rm', 'PE SHEET 1700W*1700L*0.05T 1:20 EXCEL SHAFT(P375)FOR FORD SOM-001', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-015-2-rm', 'PE SHEET 1700W*1700L*0.04T 1:20 EXCEL SHAFT(P375)FOR FORD SOM-001-1 (แพ็คใหญ่ = 300 ชิ้น & แพ็คเล็ก = 100 ชิ้น  & แพ็คย้อย = 10 ชิ้น)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-015CANCELL-rm', 'PE SHEET 1700W*1700L*0.06T 1:20 EXCEL SHAFT(P375)FOR FORD SOM-001', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-016-rm', 'ZERUST BAG-L 1200W*1200L*1600H*0.07T 1:1  EXCEL SHAFT(P375)FOR FORD SOM-001', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-016-1-rm', 'ZERUST BAG-L 1150W*1150L*1650H*0.07T 1:1  EXCEL SHAFT(P375)FOR FORD SOM-001', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-017-rm', 'CONTAINER DRY ( AQUASORBIT 150PCS/BOX) 100G 1:2  EXCEL SHAFT(P375)FOR FORD SOM-001', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-017-DESIKHAN-rm', 'DESIKHAN P2  100G  (200 PCS/BOX) 1:2  EXCEL SHAFT(P375)FOR FORD SOM-001', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-018-1-rm', 'BOTTOM PLATE 1022W*1022L KA230/CA125/KA230 CF 1:1 (W42"L40"1/4) EXCEL SHAFT(P375)FOR FORD SOM-001', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-019 CANCEL-rm', 'PTT-D1 464W*870L KA230/CA185*3/KA230 BC/F 1:77 (SOM-001) มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-019-1-rm', 'PTT-D1 464W*870L KA230/CA125*3/KA230 BC/F 1:77 (SOM-001) มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-019-2 LAMINATE-7P-rm', 'PTT-D1  LAMINATE-7P SIZE 464W*870L KA230/CA125*3/KA230 BC/F 1:11 (SOM-001)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-020-rm', 'D-3 STOPPER-3 115W*870L KA230/CA125*3/KA230 BC/F 1:20 (SOM-001) มัดละ 50 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-021-rm', 'WOODEN PALLET 1182W*1193L*125H MM. (HEAT TRETMENT) M.PKG.SHAFTFLANGED AXLE 10148871-B, 10148878-B', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-022-rm', 'SLEEVE TRI-WALL 100 (AAA) OD:1156W*1156L*564H M.PKG.SHAFTFLANGED AXLE 10148878-B', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-023-rm', 'SLEEVE TRI-WALL 100 (AAA) OD:1156W*1156L*670H M.PKG.SHAFTFLANGED AXLE 10148871-B', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-024-rm', 'SLEEVE-40 BI-WALL 850 AA OD:1060W*1060L*560H M.PKG.EXLE SHAFT U275 NO.10148871-B P.40***เย็บแล้ว***', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-032-rm', 'SLEEVE-100  TRI-WALL 80 (AAA) OD:1056W*1056L*970H M.PKG.U725 NO.1010132 (BRONCO) SCREEN COL0R BLACK', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-033-rm', 'SLEEVE-100  TRI-WALL 80 (AAA) OD:1016W*1016L*970H M.PKG U725 (BRONCO&RG06) SCREEN COLOR BLACK', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-034-rm', 'WOODEN PALLET 1076W*1087L*125H   MM. (HEAT TRETMENT) M.PKG.U725 PART NO.10101320 (BRONCO)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-035-rm', 'PTT-D1 464W*870L KA125/CA125*3/KA125  BC/F 1:77 PKG U725 (BRONCO &RG06)  มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-035-1-rm', 'PTT-D1 464W*870L KA125/CA125*3/KA125  BC/F 1:77 PKG U725 (BRONCO &RG06)  มัดละ 20 ชิ้น NEW PLATE ระยะ 43 mm. (ใช้กระดาษศานติ)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-035-2-rm', 'PTT-D1 464W*870L KA230/CA125*3/KA230  BC/F 1:77 PKG U725 (BRONCO &RG06)  มัดละ 20 ชิ้น ระยะ 43 (ใช้กระดาษศานติ) เน้น LON ตรง SPEC.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-035-4-rm', 'PTT-D1 464W*870L KL125/CA125*3/KL125  BC/F 1:77 PKG U725 (BRONCO &RG06) ระยะ 43  มัดละ 20 ชิ้น (ใช้กระดาษศานติ)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-035-5-rm', 'PTT-D1 464W*870L KA230/CA125*3/KA230  BC/F 1:77 PKG U725 (BRONCO &RG06)  มัดละ 20 ชิ้น ระยะ 40 (ใช้กระดาษศานติ) เน้น LON ตรง SPEC.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-040-rm', 'BOTTOM PLATE 1062W*1062L KA150/CA125/KA150 CF 1:1  PKG U725  PART NO.10101320 (BRONCO) (929) (W44''''L41'''' 13/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-041-rm', 'PTT-D1  464W*910L KA125/CA125*3/KA125 BCF 1:77 PKG U725  PART NO.10101320 (BRONCO) (929)  มัดละ 20 ชิ้น (ใช้กระดาษศานติ)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-041-1-rm', 'PTT-D1  464W*910L KA125/CA125*3/KA125 BCF 1:77 PKG U725  PART NO.10101320 (BRONCO) (929)  มัดละ 20 ชิ้น ระยะ 43 mm. (ใช้กระดาษศานติ)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-041-2-rm', 'PTT-D1  464W*910L KA230/CA125*3/KA230 BCF 1:77 PKG U725  PART NO.10101320 (BRONCO) (929)  มัดละ 20 ชิ้น ระยะ 43 (ใช้กระดาษศานติ) เน้น LON ตรง SPEC.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-041-3 LAMINATE-7P-rm', 'PTT-D1  LAMINATE-7P SIZE 464W*910L KA230/CA125*3/KA230 BC/F 1:11 (SOM-038) ควบคุมความหนาที่ 42 mm.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-041-4-rm', 'PTT-D1  464W*910L KL125/CA125*3/KL125 BCF 1:77 PKG U725  PART NO.10101320 (BRONCO) (929)  มัดละ 20 ชิ้น ระยะ 43 mm.(ใช้กระดาษศานติ)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-041-5-rm', 'PTT-D1  464W*910L KA230/CA125*3/KA230 BCF 1:77 PKG U725  PART NO.10101320 (BRONCO) (929)  มัดละ 20 ชิ้น ระยะ 40 (ใช้กระดาษศานติ) เน้น LON ตรง SPEC.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-042-rm', 'STOPPER  115W*910L KA230/CA125*3/KA230 BCF 1:20  PKG U725  PART NO.10101320 (BRONCO) (929)  มัดละ 25 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-042-1-rm', 'STOPPER  115W*910L KA230/CA125*3/KA230 BCF 1:20  PKG U725  PART NO.10101320 (BRONCO) (929) มัดละ 25 ชิ้น NEW PLATE แก้ไขระยะจาก 49 mm.>>43 mm.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-042-2-rm', 'STOPPER  115W*910L KA230/CA125*3/KA230 BCF 1:20  PKG U725  PART NO.10101320 (BRONCO) (929) มัดละ 50 ชิ้น NEW PLATE แก้ไขระยะจาก 43 mm.>>38 mm.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-048-rm', 'BOTTOM PLATE 1022W*1022L KA150/CA125/KA150 CF 1:1 (W42"L40"1/4) EXCEL SHAFT(P375)FOR FORD SOM-033', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-049-rm', 'TOP/BOTTOM CAP 1257W*1252L KL205/CA125*3/KL205 BCF SOM-033-038', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-050-rm', 'TOP CAP 1257W*1252L KA230/CA185*3/KA230 BCF EXCEL SHAFT(P375)FOR FORD SOM-001', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-051-rm', 'D-3 STOPPER-3 115W*870L KA230/CA125*3/KA230 BC/F 1:20 (SOM-033) มัดละ 50 ชิ้น NEW PLATE แก้ไขระยะจาก 49 mm.>>43 mm.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-051-1-rm', 'D-3 STOPPER-3 115W*870L KA230/CA125*3/KA230 BC/F 1:20 (SOM-033-1) มัดละ 50 ชิ้น NEW PLATE ระยะ 38', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-052-rm', 'SLEEVE TRI-WALL 80 (AAA) OD:1080W*1080L*894H MODEL.PKG. FOR P703 PACK 80 SCREEN COLOR BLACK', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-053-rm', 'BOTTOM PLATE 1095W*1095L KA150/CA125/KA150 CF MODEL PKG.FOR MODEL P703 P.80 (W44''''* L43''''  1/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSOM-054-rm', 'WOODEN PALLET 1110W*1120L*125H MM. (HEAT TRETMENT) MODEL PKG. FOR P703 (P.80)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSSL-001-rm', 'TOP PLATE 780W*780L KA185/CA125*3/KA185 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-001-rm', 'TOP CAP 1377W*1406L KA230/CA125*3/KA230 BC', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-004-rm', 'PTT-3A 1112W*92L KA230/CA125*3/KA230 BC', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-005-rm', 'PTT-3B 195W*1078L KA230/CA125*3/KA230 BC', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-006-rm', 'PTT-3C 92W*1078L KA230/CA125*3/KA230 BC', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-007-rm', 'PTT-4A 1112W*200L KA230/CA125*3/KA230 BC', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-008-rm', 'PTT-4B 400W*1078L KA230/CA125*3/KA230 BC', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-009-rm', 'PTT-4C 200W*1078L KA230/CA125*3/KA230 BC', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-010-rm', 'BOTTOM CAP 1377W*1406L KA230/CA125*3/KA230 BC', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-011-rm', 'PALLET 1130W*1150L*110H HEAT TRETMENT MODEL: 14M FIT', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-013-1-1-rm', 'S/B 1092W*2261L KA230/CA185*3/KA230 BCF  SLEEVE-A', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-013-1CANCEL-rm', 'S/B 1092W*1222L KA230/CA185*3/KA230 BC  (W44"*L48" 1/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-013-2-rm', 'S/B 1092W*1096L KA230/CA185*3/KA230 BC (W44"*L43" 3/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-015-rm', 'WOOD PALLET 1130W*1190L*110H HEAT TRETMENT MODEL: CRV17M', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-016-rm', 'TOP CAP  936W*1231L KL205/CA125*3/KL205 BC/F  MODEL: K1910-GW', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-017-rm', 'TRAY  936W*1231L KL205/CA125*3/KL205 BC/F  MODEL: K1910-GW', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-018-rm', 'SLEEVE 870W*1729L (ID 675W*975L*870H) BI-WALL 850 1:1 MODEL K1910-GW (เย็บแล้ว)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-019-rm', 'PARTITON-A 842W*969L KI150/CA125*3/KI150 BC/F 1:3  MODEL K191-195', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-020-rm', 'PARTITON-B 842W*669L KI150/CA125*3/KI150 BC/F 1:11 MODEL K191-195', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-021-rm', 'S/B PAD 669W*969L KI150/CA125*3/KI150 BC/F  MODEL K1910-GW (54"*L38" 3/16 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-022-rm', 'WOODEN PALLET 726W*1015L*120H HEAT TRETMENT MODEL: K1910-GW', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-036-rm', 'WOOD PALLET 1280W*1130L*110H HEAT TRETMENT MODEL:19M CIVIC', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-039-rm', 'PALLET PLASTIC 1100W*1100L*120H MODEL FORNT FOLK ASSY SET 80 (HK841) Run Number', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-040-rm', 'EPE FOAM 600W*600L*2T(mm)  MODEL FORNT FOLK ASSY SET 80 (HK841)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-042-rm', 'CARTON BOX  1541W*2230L KA230/CA125*3/KA230  BCF  M.FRONT FOLK ASSY SET 80 (HK841) เย็บแล้ว', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-044-rm', 'SCREW /สกรูเกลียวเหล็ก P 10*1 8859991417210 (1 BOX=1000 PCS.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-045-rm', 'PLAIN WASHERS/แหวนเหล็ก 5/16" ชุบขาว 8859993303115', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-046-rm', 'PALLET PLASTIC 800W*1200L*140H MODEL BMW072 Run Number', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-046-1-rm', 'WOODEN PALLET  800W*1200L*145H MODEL BMW072 (DV) Stamp Fumigate ตรงกลาง 4 ด้าน', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-046-2-rm', 'WOODEN PALLET  800W*1200L*145H MODEL BMW072 (DV) Stamp Fumigate ตรงกลาง 4 ด้าน +เว้า 2 ด้าน', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-047-rm', 'BOX A+BOX B 1076W*990L KA230/CA125*3/KA230 BCF  1:4  MODEL BMW072 SWA-026', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-048-rm', 'OUTTER BOX  1297W*2024L KA185/CA125*3/KA185 BCF 1:1  MODEL BMW072 SWA-026 มัดละ 5 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-049-rm', 'PALLET PLASTIC 1100W*1300L*120H MODEL PKG.FOR 3AOA น้ำหนักพาเลท = 11 กก. รับน้ำหนัก Static = 2 Tons ,Dynamic = 1 Ton.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSWA-050-rm', 'PALLET PLASTIC 1100W*1300L*150H MODEL PKG.FOR 3AOA น้ำหนักพาเลท = 13 กก. รับน้ำหนัก Static = 3 Tons ,Dynamic = 2 Ton.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCG-001-rm', 'TOP P ATE 970W*1100L*10T PLY WOOD 1:1 ( PACKAGE FOR DA330A2T-20M) Grade A (เน้นคุณภาพ ห้ามแตก ห้ามร่อน)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCG-005-rm', 'SCREW 2 INCHES', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCG-006-rm', 'PLAIN WASHERS แหวนมิลขาว', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCG-007-rm', 'EVA (BLACK) SIZE 1100W*985L*10T (H/N 60-65)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCG-011-rm', 'EVA (BLACK) SIZE 1100W*1115L*10T (H/N 60-65)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCG-019-1-rm', 'TOP PLATE 970W*1100L*10T  PLY WOOD 1:1  ( SF/SG (PAPER) (เน้นคุณภาพ ห้ามแตก ห้ามร่อน)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCG-019CANCELL-rm', 'TOP PLATE 970W*1100L*20T  PLY WOOD 1:1  ( SF/SG (PAPER)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCG-020-rm', 'FUTURE BOARD (สีม่วง) SIZE 1010W*1140L*5T  B. PLATE - A+B ( PACKAGE FOR A3 (20ZA)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCG-021-rm', 'FUTURE BOARD (สีเหลือง) SIZE 1010W*1140L*5T  B. PLATE - A+B ( PACKAGE FOR A3 (20ZA)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCG-022-rm', 'FUTURE BOARD (สีน้ำเงิน) SIZE 1010W*1140L*5T  B. PLATE - A+B ( PACKAGE FOR A3 (20ZA)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCG-023-rm', 'FUTURE BOARD COLOR GRAY (สีเทา) SIZE 1200W*1170L*5T  B. PLATE - A+B ( PACKAGE FOR TCFG A1TD)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCG-024-rm', 'FUTURE BOARD COLOR GRAY (สีเทา) SIZE 1200W*1230L*5T  B. PLATE - A+B ( PACKAGE FOR TCFG A1TD)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCG-025-rm', 'EVA (BLACK) SIZE 595W*1115L*10T (H/N 60-65)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCG-026-rm', 'EVA (BLACK) SIZE 710W*990L*10T (H/N 60-65)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCG-027-rm', 'FUTURE BOARD (สีเขียว) SIZE 1010W*1140L*5T  B. PLATE - A+B ( TCFG-007)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCG-028-rm', 'EVA (BLACK) SIZE 1300W*800L*10T (H/N 40-45) 1:4 M.NA772A3TB-21M', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCG-029-rm', 'B.PLATE-A  970W*1100L PLASTIC BOARD BLUE(สีน้ำเงิน) 5 MM.MODEL:TCFG-002', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCG-030-rm', 'B.PLATE-A  964W*1100L PLASTIC BOARD GRAY(สีเทา) 5 MM.MODEL:TCFG-006-2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-001-rm', 'COVER + CENTER GUIDE  SIZE  605W*1240L  KL250/CA185/KL250  C/F M.PKG.REEL PN 912116-6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-001-1-rm', 'COVER-A  585W*585L  1:1 KL250/CA185/KL250  C/F M.PKG.REEL PN 912116-6 (125 ชิ้น/กล่อง)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-001-2-rm', 'COVER-B  585W*585L  1:1  KL250/CA185/KL250  C/F M.PKG.REEL PN 912116-6 (125 ชิ้น/กล่อง)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-001-3-rm', 'CENTER GUIDE  149W*149L 1:2  KL250/CA185/KL250  C/F M.PKG.REEL PN 912116-6 (2,080 ชิ้น/กล่อง)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-002-1-rm', 'CORE DAI OD 160*5T*25.5L (Size 150mm*5mm*25mm) Thickness +-0.2mm  2)L+-0.5mm  3)ID+-0.1mm  4)OD+-0.5mm (FOR TEST SAMPLE TE)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-002-2-rm', 'CORE DAI OD 160*5T*26L (Size 150mm*5mm*25mm) Thickness +-0.2mm  2)L+-0.5mm  3)ID+-0.1mm  4)OD+-0.5mm (FOR TEST SAMPLE TE)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-002-3-rm', 'CORE DAI OD 160*5T*26.5L (Size 150mm*5mm*25mm) Thickness +-0.2mm  2)L+-0.5mm  3)ID+-0.1mm  4)OD+-0.5mm (FOR TEST SAMPLE TE)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-002-4-rm', 'CORE DAI OD 160*5T*25L (Size 150mm*5mm*25mm) Thickness +-0.2mm  2)L+-0.5mm  3)ID+-0.1mm  4)OD+-0.5mm ***Change Spec***', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-002CANCELL-rm', 'CORE DAI OD 160*5T*25L (Size 150mm*5mm*25mm) Thickness +-0.2mm  2)L+-0.5mm  3)ID+-0.1mm  4)OD+-0.5mm', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-003-rm', 'BOX 3912012-8  Size 940W*1556L OD594W*175L*600L KH200/CA185/KH200 C 1:1 MODEL:PKG.REEL P/N:912116-6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-004-rm', 'Pad 3912012-8  Size 215W*163L KH200/CA185/KH200 C 1:4 MODEL:PKG.REEL P/N:912116-6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-005-rm', 'OPP TAPE (INTER 320 CLEAR  TAPE)  3" * 100 หลา สีใส (24 ม้วน / ลัง)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-006-rm', 'GLUE P-4140 M2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-007-rm', 'CORE DAI  226*5T*45L MM. (OD 236 MM) Thickness +-0.2mm  2)L+-0.5mm  3)ID+-0.1mm  4)OD+-0.5mm (TE-97442-1)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-008-rm', 'COVER SIZE  780W*780L  KL205/CA125*3/KL205  BC/F M.PKG.REEL P/N 97442-1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-009-1-rm', 'CORE DAI  OD 160*8.5T*31L MM.(ID=143) (Stamp 31 ด้านนอก)Thickness +-0.2mm  2)L+-0.5mm  3)ID+-0.1mm  4)OD+-0.5mm Model:Carton Box P/N.973051-3 For Reel P/N.3-973053-5', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-009CANCELL-rm', 'CORE DAI  160*8.5T*30L MM.Thickness +-0.2mm  2)L+-0.5mm  3)ID+-0.1mm  4)OD+-0.5mm Model:Carton Box P/N.973051-3 For Reel P/N.3-973053-5', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-010-1CANCELL-rm', 'CORE DAI  160*8.5T*27L MM. (Stamp 27 ด้านนอก) Thickness +-0.2mm  2)L+-0.5mm  3)ID+-0.1mm  4)OD+-0.5mm Model:PKG. REEL P/N.4-973053-6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-010-2CANCELL-rm', 'CORE DAI  160*8.5T*28L MM. (Stamp 27 ด้านนอก) Thickness +-0.2mm  2)L+-0.5mm  3)ID+-0.1mm  4)OD+-0.5mm Model:PKG. REEL P/N.4-973053-6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-010-3-rm', 'CORE DAI  160*8.5T*28L MM. (Stamp 27 ด้านนอก) Thickness +-0.2mm  2)L+-0.5mm  3)ID+-0.1mm  4)OD+-0.5mm Model:PKG. REEL P/N.4-973053-6***Change Spec***', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-010-3 Resize-rm', 'CORE DAI  160*8.5T*28L MM. ( Resize 31L เป็น 28L, 33L เป็น 28L )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-010CANCELL-rm', 'CORE DAI  160*8.5T*27L MM.Thickness +-0.2mm  2)L+-0.5mm  3)ID+-0.1mm  4)OD+-0.5mm Model:PKG. REEL P/N.4-973053-6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-011-rm', 'BOX+Pad 3912012  Size 172W*590L*596H  KH200/CA185/KH200 C  MODEL:PKG.REEL P/N:912116-6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-011-1-rm', 'BOX+PAD 3912012  Size 172W*590L*596H  KL205/CA185/KL205 CF  MODEL:PKG.REEL P/N:912116-6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-011-1-H-rm', 'BOX+PAD 3912012  Size 172W*590L*596H  KL205/CA185/KL205 CF  MODEL:PKG.REEL P/N:912116-6', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-012-1CANCELLED-rm', 'COVER SIZE  588W*588L  KL205/CA125*3/KL205  BC/F M.PKG. REEL P/N 4-973053-6 TD-TCM-1805012-01-04, TD-TCM-1803010-01-08  (Cover 75 ชิ้น/กล่อง) ***เปลี่ยนวันที่ใน Block Screen ทุกปี ปี 2021=21/01', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-012-2-rm', 'COVER SIZE  588W*588L  KL205/CA125*3/KL205  BC/F M.PKG. REEL P/N 4-973053-6 TD-TCM-1805012-01-04, TD-TCM-1803010-01-08  (Cover 75 ชิ้น/กล่อง) ***เปลี่ยนวันที่ใน Block Screen ทุกปี ปี 2022=22/01', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-012-3-rm', 'COVER SIZE  588W*588L  KL205/CA125*3/KL205  BC/F M.PKG. REEL P/N 2237775-3 (Ref.4-973053-6) TCM-1803010-01-03 (Cover 75 ชิ้น/กล่อง) ***เปลี่ยนวันที่ใน Block Screen ทุกปี ปี 2023=23/01', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-012CANCELLED-rm', 'COVER SIZE  588W*588L  KL205/CA125*3/KL205  BC/F M.PKG. REEL P/N 4-973053-6 TD-TCM-1805012-01-04, TD-TCM-1803010-01-08  (Cover 75 ชิ้น/กล่อง) ***เปลี่ยนวันที่ใน Block Screen ทุกปี เช่น ปี 2019=19/01, 2020=20/01, 2021=21/01***', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-013-1CANCELLED-rm', 'CARTON BOX  894W*1526L  KL205/CA125/KL205  C/F M.CARTON BOX P/N.973501-3 FOR REEL P/N 4-973053-6 TD-TCM-1803010-01-08 ***เปลี่ยนวันที่ใน Block Screen ทุกปี ปี  2021=21/01', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-013-2-rm', 'CARTON BOX  894W*1526L  KL205/CA125/KL205  C/F M.CARTON BOX P/N.973501-3 FOR REEL P/N 4-973053-6 TD-TCM-1803010-01-08 ***เปลี่ยนวันที่ใน Block Screen ทุกปี ปี  2022=22/01', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-013-3-rm', 'CARTON BOX  894W*1526L  KL205/CA125/KL205  C/F M.CARTON BOX P/N.2237775-3 (Ref.973501-3 FOR REEL P/N 4-973053-6 ) TCM-1803010-01-03 ***เปลี่ยนวันที่ใน Block Screen ทุกปี ปี  2023=23/01', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-013CANCELLED-rm', 'CARTON BOX  894W*1526L  KL205/CA125/KL205  C/F M.CARTON BOX P/N.973501-3 FOR REEL P/N 4-973053-6 TD-TCM-1803010-01-08 ***เปลี่ยนวันที่ใน Block Screen ทุกปี เช่น ปี 2019=19/01, 2020=20/01, 2021=21/01***', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-014-rm', 'CARTON BOX  894W*1526L  KL205/CA125/KL205  C/F M.CARTON BOX P/N.973501-3 FOR REEL P/N 3-973053-5 TD-TCM-1805012-01-04 ***เปลี่ยนวันที่ใน Block Screen ทุกปี เช่น ปี 2019=19/01, 2020=20/01, 2021=21/01***', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-015-rm', 'CENTER GUIDE  SIZE  142W*142L  KL205/CA125*3/KL205  BC/F M.PKG. REEL P/N 2237775-3 (Ref.4-973053-6) TCM-1803010-01-03  (1,600 ชิ้น/กล่อง)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-016-H-rm', 'COVER-A SIZE  585W*585L  KA230/CA125*3/KA230  BC/F 1:1  M.PKG. REEL P/N 1-912118-0 Perforate line 1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-017-H-rm', 'COVER-B SIZE  585W*585L  KA230/CA125*3/KA230  BC/F 1:1  M.PKG. REEL P/N 1-912118-0 Perforate line 1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-018-H-rm', 'CENTER GUIDE  SIZE  199W*199L  KA230/CA125*3/KA230  BC/F 1:2 M.PKG. REEL P/N 1-912118-0', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-020-H-rm', 'COVER-A SIZE  585W*585L  KA230/CA125*3/KA230  BC/F 1:1  M.PKG. REEL P/N 912118-8 Perforate line 1', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-021-H-rm', 'COVER-B SIZE  585W*585L  KA230/CA125*3/KA230  BC/F 1:1 M.PKG. REEL P/N 912118-8 Perforate line 2', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-022-H-rm', 'CENTER GUIDE  SIZE  199W*199L  KA230/CA125*3/KA230  BC/F 1:2 M.PKG. REEL P/N 912118-8', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-024-H-rm', 'COVER-A  SIZE  585W*585L  KA185/CA125*3/KA185  BC/F 1:2 M.PKG. REEL P/N 936991-3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-025-H-rm', 'CENTER GUIDE  SIZE 151W*151L  KA185/CA125*3/KA185  BC/F 1:2 M.PKG. REEL P/N 936991-3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-027-H-rm', 'CARTON BOX SIZE  950W*1601L  KL175/CA125*3/KL175  BC/F 1:1 M.PKG. REEL P/N 936991-3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTCM-028CANCELL-rm', 'CORE DAI  OD 160*8.5T*33L MM.(ID=143) Thickness +-0.2mm  2)L+-0.5mm  3)ID+-0.1mm  4)OD+-0.5mm Model:Carton Box P/N.973051-3 For Reel P/N.3-973053-5', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTE-003-rm', 'CORE DAI Size 150mm*5mm*25mm (OD 156 mm.)Thickness +-0.2mm  2)L+-0.5mm  3)ID+-0.1mm  4)OD+-0.5mm', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTHS-001-rm', 'SLEEVE SHEET-1   1000W*2111L KA230/CA125*3/KA230 BC/F   (W40"*L83"1/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTHS-002-rm', 'SLEEVE SHEET-2   1000W*2139L KA230/CA125*3/KA230 BC/F (W40"*L84" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTHS-003-rm', 'CAP  1505W*1501L KA230/CA125*3/KA230 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTKR-001-rm', 'PLATE  1194W*1194L KA150/CA125*3/KA150  BCF 1:1 MODEL PAPER PALLET', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTKR-003-rm', 'PLATE  916W*976L KA150/CA125*3/KA150 BCF PALLET FOR J59C (W38"*L38" 7/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTKR-004-rm', 'PAD 1070W*1070L KA185/CA125/KA185 CF 1:11 PKG FOR EGR (DAIHATSU)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTKR-006-rm', 'PAD 1104W*1104L  KA125/CA125*3/KA125 BCF 1:1  PKG FOR EGR (DAIHATSU)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSH-003-rm', 'SIDE PANEL-B 669W*1096L KA230/CA125*3/KA230 BC/F (1:2) W54"*L43" 3/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSH-004-rm', 'PTT 420W*520L CA125/CA125/CA125 C/F (1:24) (+ - 3)  W52"*L20" 1/2 ผ่า 3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSH-004-2-rm', 'PTT 420W*520L CA125/CA125/CA125 C/F (1:24) (+ - 3)  W50"*L20" 1/2 ผ่า 3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSH-007-rm', 'SIDE PANEL-A 669W*916L KA230/CA125*3/KA230 BC/F (1:3) (W54"*L36" 1/16 ผ่า2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSH-009-rm', 'PE FOAM SHEET 500W*630L*0.5T MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSH-014-rm', 'SHEET BOARD  1128W*917L B/W AA 850G', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSH-021-rm', 'WOODEN PALLET 980W*1140L*123H (FUMIGATE) COMMON MODEL:811,812,813', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSH-035-rm', 'BOX 713W*2087L KA230/CA125*3/KA230 BCF 1:16 MODEL: 812', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSH-038-rm', 'BOX 1433W*2104L KA230/CA125*3/KA230 BCF 1:1 MODEL: PKG.JB3C-5F085-AA', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSL-001-rm', 'TOP CAP 1274W*1330L KA185/CA125*3/KA185  BC/F 1:1 ( M.G031)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSL-002-rm', 'TOP COVER 636W*1040L KA230/CA125/KA230  C/F 1:1 ( M.G031)  ทับรอย 346*290', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSL-003-rm', 'INNER PARTITION  652W*1137L KA230/CA125/KA230  C/F 1:2 ( M.G031) ทับรอย 50*1037*50', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSL-004-rm', 'BOTTOM CAP 1274W*1330L KA185/CA125*3/KA185  BC/F 1:1 ( M.G031)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSL-005-rm', 'BOTTOM PLATE 1128W*1069L KA185/CA125*3/KA185  BC/F 1:1 ( M.G031) (W46"*L42" 1/8)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSL-005-1-rm', 'BOTTOM PLATE 1128W*1069L KA185/CS110*3/KA185  BC/F 1:1 ( M.G031)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSL-006-rm', 'LEG BEAM  372W*150L KA230/CA125/KA230  B/F 1:9 ( M.G031)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSL-007-rm', 'PARTITION TOP 128W*1031L KA230/CA125*3/KA230  BC/F 1:2 ( M.G031)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSL-008-rm', 'SLEEVE 1040W*2207L KA230/CA125*3/KA230  BC/F 2 Pcs/Set ( M.G031) เย็บแล้ว  มัดละ 5 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSL-008-H-rm', 'SLEEVE 1040W*2207L KA230/CA125*3/KA230  BC/F 2 Pcs/Set ( M.G031) เย็บแล้ว  มัดละ 5 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSL-009-rm', 'PARTITION BOTTOM 256W*1040L KA230/CA125/KA230  C/F 1:2 ( M.G031)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSL-012-rm', 'PARTITION-B1  174W*810L KA185/CA125*3/KA185  BC/F 1:12 ( M.GM31UX:G032)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSL-013-rm', 'PARTITION-B2  563W*543L KA230/CA125/KA230  C/F 1:20 ( M.GM31UX:G032)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSL-019-rm', 'CARTON BOX 349W*1401L KA185/CA125/KA185 C/F 1:1 ( M.G030) 10 Pcs/Pack', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSL-021-rm', 'COVER 464W*434L KA185/CA125/KA185 B/F 1:1 ( M.G030) 45 Pcs/Pack', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSM-004-rm', 'CASE 1996W* 995L  KA230/CA125/KA230  C/F 1:1 (Bumper) ***SUPPORT URGENT BY ORDER', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSM-005-rm', 'SIDE CASE  1580W*592L  KA230/CA125/KA230  C/F 1:2 (Bumper) ***SUPPORT URGENT BY ORDER', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSM-006-rm', 'PARTITION 866W*844L  KA230/CA125/KA230  C/F 1:2 (M.Bumper) ***SUPPORT URGENT BY ORDER', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSM-010-rm', 'CASE 1106W*1660L  KA230/CA125/KA230  C/F 2:1 (4 DOOR)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSM-011-rm', 'SIDE CASE 937W*1102L  KA230/CA125/KA230  C/F 2:1 (4 DOOR)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSM-012-1-rm', 'B/T PLATE 1102W*800L  KA230/CS110/KA230  C/F 1:1 (4 DOOR)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTSM-013-rm', 'COVER 872W*816L  KA230/CA125/KA230  C/F 2:1 (4 DOOR)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTTP-001-rm', 'CASE  746W*1200L KA230/CA125/KA230 C/F 2:1 (M.650*1970*730H)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTTP-003-1-rm', 'PARTITION-L 987W*475L KA230/CA125/KA230 C/F 2:1 (M.650*1970*730H)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTTP-004-1-rm', 'PARTITION-R 987W*475L KA230/CA125/KA230 C/F 2:1 (M.650*1970*730H)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTTP-005-rm', 'SIDE CASE 953W*733L KA230/CA125/KA230 C/F 2:1 (M.650*1970*730H)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTTP-006-rm', 'COVER 813W*733L KA230/CA125/KA230 C/F 2:1 (M.650*1970*730H)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTTP-007-rm', 'CASE 976W*1390L KA230/CA125/KA230 C/F 2:1 (M.800*2060*1025H)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTTP-008-rm', 'PLATE 800W*1390L KA230/CA125/KA230 C/F 1:1 (M.800*2060*1025H)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTTP-008-1-rm', 'PLATE 800W*1390L KA230/CS110/KA230 C/F 1:1 (M.800*2060*1025H)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTTP-009-1-rm', 'PARITION-L 1158W*455L KA230/CA125/KA230 C/F 1:2 (M.800*2060*1025H)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTTP-010-1-rm', 'PARITION-R 1158W*455L KA230/CA125/KA230 C/F 1:2 (M.800*2060*1025H)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTTP-011-rm', 'SIDE CASE 1185W*888L KA230/CA125/KA230 C/F 1:2 (M.800*2060*1025H)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTTP-012-rm', 'COVER 914W*888L KA230/CA125/KA230 C/F 1:2 (M.800*2060*1025H)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTTR-003-rm', 'PAD ASSY-A 395W*490L KA230/CA125/KA230 CF 1:9 MODEL COMMON 218312 / NRVALVE / 218305 / 218315', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTTR-003-1-rm', 'PAD ASSY-A 395W*982L KA230/CA125/KA230 CF 1:2 MODEL COMMON 218312 / NRVALVE / 218305 / 218315 (W48"*L38" 11/16 ผ่า 3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTTR-005-1-rm', 'PAD ASSY-A 395W*982L KA230/CA125/KA230 CF 1:2 MODEL COMMON 218312 / NRVALVE / 218305 / 218315 (W48"*L38" 11/16 ผ่า 3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTYD-001-rm', 'CAP 1369W*1352L KA185/CA125*3/KA185 BC/F', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTYD-002-1-rm', 'TOP PLATE 1134W*1149L KA185/CA125*3/KA185 BC/F1:2  (PALLET 4 WAY) (W46"*L45" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTYD-002CANCELLED-rm', 'TOP PLATE 1132W*1149L KA185/CA125*3/KA185 BC/F1:2  (PALLET 4 WAY) (W46"*L45" 1/4)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RTYD-004-rm', 'PLATE 359W*538L KA185/CA125*3/KA185 BC/F 1:1 (VALVE) (W44"*L21" 3/16 ผ่า3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RUCT-001-rm', 'WOODEN PALLET 1060W*1060L*120H (FUMIGATION) 1:1 MODEL TP-94034X, 94035X', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYMH-002-rm', 'CARTON BOX  SIZE  348Wx696L KA230/CA125/KA230 CF 1:40 (CAM SHAFT)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYMS-001-rm', 'WOODEN PALLET 986W*1075L*120H   MM. (HEAT TRETMENT) MODEL PKG. FOR BOX : 255W*460L*145H MM.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYRZ-001-rm', 'FRONT 1485W*875L KA230/CA125*3/KA230 BCF  1:1 MODEL L12F (PACK 15) (W60"*L34" 1/2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYRZ-002-rm', 'BOTTOM 1485W*1080L KA230/CA125*3/KA230 BCF  1:1 MODEL L12F (PACK 15) (W60"*L42" 9/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYRZ-003-rm', 'TOP 140W*1080L KA125/CA125*3/KA125 1:22 MODEL L12F CURRENT DESIGN CUS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYRZ-004-rm', 'C-F1 340W*1080L KA125/CA125*3/KA125   MODEL L12F CURRENT DESIGN CUS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYRZ-004-H-rm', 'C-F1 340W*1080L KA125/CA125*3/KA125   MODEL L12F CURRENT DESIGN CUS YRZ-1602020-00-02 HELP', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYRZ-005-rm', 'D-F2 445W*1080L KA125/CA125*3/KA125 1:22 MODEL L12F CURRENT DESIGN CUS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYRZ-006-rm', 'BACK 1485W*875L KA230/CA125*3/KA230 BCF  1:1 MODEL L12F (PACK 15)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYRZ-007-rm', 'PAD 1100W*1300L FUTURE BOARD 3 MM (BLUE) 1:1 MODEL H60', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYRZ-008-rm', 'BOTTOM PAD 1080W*1110L FUTURE BOARD 3 MM (BLUE) 1:1 MODEL H60', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYRZ-009-rm', 'SIDE PAD 380W*2160L KA150/CA125/KA150 CF 1:2 MODEL  H60 (W46"*L85 1/16 ผ่า3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYRZ-038-rm', 'TRAY 1499W*2152L KA230/CS110*3/KA230 BCF 1:5 PACK 20 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYRZ-038-1-rm', 'TRAY 1499W*2152L KA230/CA125*3/KA230 BCF 1:5 PACK 20 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYRZ-039-rm', 'PTT-A 210W*668L KA230/CS110*3/KA230 BCF 1:40 PACK 20 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYRZ-040-rm', 'PTT-B 210W*1665L KA230/CS110*3/KA230 BCF 1:25 PACK 20 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYRZ-041-rm', 'PTT-C 130W*550L KA230/CS110*3/KA230 BCF 1:40 PACK 20 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYRZ-042-rm', 'PTT-D 210W*1071L  KA230/CS110*3/KA230 BCF 1:50 PACK 20 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYRZ-043-rm', 'PTT-E 130W*425L KA230/CS110*3/KA230 BCF 1:40 PACK 20 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYRZ-044-rm', 'PTT-F 210W*1420L KA230/CS110*3/KA230 BCF 1:25 PACK 20 PCS', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYRZ-045-rm', 'BOX 1453W*2104L KA230/CA185*3/KA230 BCF 1:2 SCREEN JOINT BY STITCHING เย็บเป็นกล่องแล้ว MODEL  AV59-5019-B-VOJKA-FLH-B299(FORD)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYRZ-046-rm', 'TRAY 1404W*1100L KA185/CA125/KA185 CF 1:2 ทับรอย 233*938*233  MODEL  AV59-5019-B-VOJKA-FLH-B299(FROD) (W56"*L43" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYRZ-047-rm', 'TOP PAD 940W*1100L M/M/M CF 1:1  MODEL  AV59-5019-B-VOJKA-FLH-B299(FROD) (W38"*L43" 5/16)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYRZ-048-rm', 'WOODEN PALLET 914W*1064L*120H  (HEAT TRETMENT) PKG.NOZZLE (PACK 12)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYRZ-049-rm', 'WOODEN PALLET 693W*1162L*120H  (HEAT TRETMENT) PKG.FOR D200 (PACK 40)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RYRZ-050-rm', 'WOODEN PALLET 1071W*1754L*115H  RR-BEAM  (P13C)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RZB-001-rm', 'ZERUST FERROUS  COVER  BAG  1200*1200*1600*0.06 MM (COMMON)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RZB-001/AMT-rm', 'ZERUST FERROUS  COVER  BAG  1200*1200*1600*0.06 MM (COMMON)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SAMPLE-AKE-PALLET-rm', 'PALLET PALLET OD 1136Wx1146x225H  BI-WALL KA540 AA/F (BW 850G AA)  TD-AKE-2103029-00-00', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SAMPLE-AKE-SLEEVE-rm', 'SLEEVE  ID:1080W*1090L*395H  TRI-WALL 1300AAA/F  (OD:1110W*1120L*395H)  TD-AKE-2103029-00-00', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SAMPLE-AKE-TOPCAP-rm', 'TOP CAP ID 1116Wx1126x110H  BI-WALL KA540 AA/F (BW 850G AA)  TD-AKE-2103029-00-00', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SAMPLE-TCM-rm', 'SLEEVE  STITCHING  1010W*1976L TRI-WALL 100AAA/F  TD-TCM-2205055-00-00 (เย็บแล้ว)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SHEET ROLL-SAMPLE-rm', 'HDPE SHEET ROLL  80"*360M*0.025 MM.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-009-P/D-rm', 'Cardboard  A  KL205/CA125*3/KL205  BC/F  PRINTING+D/C    DIA  368 (369) MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-009-P/D-H-rm', 'Cardboard  A  KL205/CA125*3/KL205  BC/F  PRINTING+D/C    DIA  368 (369) MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-010-P/D-rm', 'Cardboard  A  KL205/CA125*3/KL205  BC/F  PRINTING+D/C    DIA  402 MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-010-P/D-H-rm', 'Cardboard  A  KL205/CA125*3/KL205  BC/F  PRINTING+D/C    DIA  402 MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-011-P/D-rm', 'Cardboard  A  KL205/CA125*3/KL205  BC/F  PRINTING+D/C    DIA  460 (461) MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-011-P/D-H-rm', 'Cardboard  A  KL205/CA125*3/KL205  BC/F  PRINTING+D/C    DIA  460 MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-012-P/D-rm', 'Cardboard  A  KL205/CA125*3/KL205  BC/F  PRINTING+D/C    DIA  513 MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-012-P/D-H-rm', 'Cardboard  A  KL205/CA125*3/KL205  BC/F  PRINTING+D/C    DIA  513 MM (NK Support Sheet Bord)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-020-D-rm', 'Cardboard  B  KL205/CA125/KL205  C/F  D/C    DIA  368 (369) MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-020-D-H-rm', 'Cardboard  B  KL205/CA125/KL205  C/F  D/C    DIA  368 (369) MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-021-D-rm', 'Cardboard  B  KL205/CA125/KL205  C/F  D/C    DIA  402 MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-021-D-H-rm', 'Cardboard  B  KL205/CA125/KL205  C/F  D/C    DIA  402 MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-022-D-rm', 'Cardboard  B  KL205/CA125/KL205  C/F  D/C    DIA  460 (461) MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-022-D-H-rm', 'Cardboard  B  KL205/CA125/KL205  C/F  D/C    DIA  460 (461) MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-023-D-rm', 'Cardboard  B  KL205/CA125/KL205  C/F  D/C    DIA  513 MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-023-D-H-rm', 'Cardboard  B  KL205/CA125/KL205  C/F  D/C    DIA  513 MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-025-P/D-rm', 'Cardboard  A  KL205/CA125*3/KL205  BC/F  PRINTING+D/C    DIA  417 MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-025-P/D-H-rm', 'Cardboard  A  KL205/CA125*3/KL205  BC/F  PRINTING+D/C    DIA  417 MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-028-D-rm', 'Cardboard  B  KL205/CA125/KL205  C/F  D/C    DIA  417 MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-028-D-H-rm', 'Cardboard  B  KL205/CA125/KL205  C/F  D/C    DIA  417 MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-033-D-rm', 'Cardboard  B  KL205/CA125/KL205  C/F  D/C    DIA  436 MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-033-D-H-rm', 'Cardboard  B  KL205/CA125/KL205  C/F  D/C    DIA  436 MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-034-P/D-rm', 'Cardboard  A  KL205/CA125*3/KL205  BC/F  PRINTING+D/C    DIA  436 MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-034-P/D-H-rm', 'Cardboard  A  KL205/CA125*3/KL205  BC/F  PRINTING+D/C    DIA  436 MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-035-P/D-rm', 'Cardboard  A  KL205/CA125*3/KL205  BC/F  PRINTING+D/C    DIA  563 MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-035-P/D-H-rm', 'Cardboard  A  KL205/CA125*3/KL205  BC/F  PRINTING+D/C    DIA  563 MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-036-D-rm', 'Cardboard  B  KL205/CA125/KL205  C/F  D/C    DIA  563 MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-036-D-H-rm', 'Cardboard  B  KL205/CA125/KL205  C/F  D/C    DIA  563 MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-040-P/D-rm', 'Cardboard  A  KL205/CA125*3/KL205  BC/F  PRINTING+D/C    DIA  430 MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-040-P/D-H-rm', 'Cardboard  A  KL205/CA125*3/KL205  BC/F  PRINTING+D/C    DIA  430 MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-041-D-rm', 'Cardboard  B  KL205/CA125/KL205  C/F  D/C    DIA  430 MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'SIAM-041-D-H-rm', 'Cardboard  B  KL205/CA125/KL205  C/F  D/C    DIA  430 MM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'STA-0072-4-rm', 'เทปกาวหนังไก่ 2นิ้ว', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'STAMP ตรายาง 145D 2-rm', 'ตรายางด้ามไม้ หน้า2.5 นิ้ว (6.35ซม.) ขนาดงาน 7*6.2 ซม.145D 2 TD-NHP-2103037-00-01', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'STAMP ตรายาง 145D 3-rm', 'ตรายางด้ามไม้ หน้า2.5 นิ้ว (6.35ซม.) ขนาดงาน 7*6.2 ซม.145D 3 TD-NHP-2103038-00-04', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'STAMP ตรายาง 3-rm', 'ตรายางด้ามอะครีลิค  ขนาดงาน 1.4*3 ซม.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'STAMP ตรายาง J32V-rm', 'ตรายางด้ามไม้ ขนาดงาน 2.6*7.8 ซม.J32V TD-NHP-2006007-00-10', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TCFG-015-rm', 'กรอบไม้ใหม่ขนาด 205*205 มม. ขึงผ้า PY120/45 ถ่ายลาย TCG-1309013-A2-01 Model : A2 (NO.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TCFG-016-rm', 'ถ่ายลาย TCG-1309013-A2-01 Model : A2 (NO.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TCFG-017-rm', 'กรอบไม้ใหม่ขนาด 152*342 มม. ขึงผ้า PY120/45 ถ่ายลาย TCG-1309013-A2-01 Model : A3 (TCFG A3)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TCFG-018-rm', 'เขียนแบบ+ถ่ายลาย TCFG 641 A3 Model : A3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TCFG-019-rm', 'กรอบไม้ใหม่ขนาด 152*355 มม. ขึงผ้า PY120/45 ถ่ายลาย 56789', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TCFG-020-rm', 'เขียนแบบ+ถ่ายลาย 56789', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TCFG-021-rm', 'เหล็กฉากรู 11/2*11/2 เทา V', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-001-1CANCELL-rm', 'ถุงขยะสีดำ / BAG 30"*40"', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-002-rm', 'ลวดเย็บกล่อง 2.2 MM/ Staples spec 0.85 แบบแข็ง', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-002/1-rm', 'ลวดเย็บกล่อง 1.9 MM/ Staples spec 0.85 แบบแข็ง', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-002/AMT-rm', 'ลวดเย็บกล่อง 2.2 MM/ Staples SPEC 0.65 แบบนิ่ม', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-003/1-rm', 'OPP TAPE 2"*45Y BROWN ( LION แกนเขียว ) 72 Rool/Box', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-004-rm', 'WOOD PALLTE 1100*1100*120 H', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-004/AMT-rm', 'WOOD PALLTE 1100*1100*120 H', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-004/ES1-rm', 'WOOD PALLTE 1100*1100*120 H', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-004/ES2-rm', 'WOOD PALLTE 1100*1100*120 H', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-006-rm', 'ลวดยิงเบอร์ 832T(10,000 PCS/BOX ) / Staples', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-006/AMT-rm', 'ลวดยิงเบอร์ 832T(10,000 PCS/BOX ) / Staples', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-006-1-rm', 'ลวดยิงเบอร์ 2225T(10,000 PCS/BOX ) / Staples', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-006-1/AMT-rm', 'ลวดยิงเบอร์ 2225T(10,000 PCS/BOX ) / Staples', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-006-4-rm', 'TSN ลวดยิงเบอร์ 3419(2,000 PCS/BOX ) / Staples (ลูกแม็กซ์สีทอง)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-008-rm', 'KRAFT TAPE 2"*30Y (KOLA) 36 Roll/BOX', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-009/1-rm', 'PP BARND สายรัดกล่อง 15 มม*1200 เมตร  สีดำ (8 KGS/ROLL)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-010-rm', 'CLIP STEEL LOCK PP BRAND /คลิบล๊อกสายรัด', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-010/1-rm', 'CLIP PLASTIC LOCK PP BRAND /คลิบล๊อกสายรัด', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-011/1-rm', 'เทปเยื้อกาว 2 หน้า 2" * 50 M PENN TAPE C60', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-014-rm', 'เชือกฟาง BENDING/MC', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-014/AMT-rm', 'เชือกฟาง BENDING/MC', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-021/AMT-rm', 'STRETCH FILM 15MIC*50CM*200M', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-021/AMT-1-rm', 'STRETCH FILM 9MIC*50CM*200M  (9 ม้วน/ลัง)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-021/ES1-rm', 'STRETCH FILM 15MIC*50CM*200M', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-021/ES1-1-rm', 'STRETCH FILM 9MIC*50CM*200M', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-021/ES2-rm', 'STRETCH FILM 15MIC*50CM*200M', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-021/ES3-rm', 'STRETCH FILM 15MIC*50CM*200M', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-021-1/AMT-rm', 'STRETCH FILM 9MIC*50CM*200M', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-021-1/ES1-rm', 'STRETCH FILM 9MIC*50CM*200M', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-022/AMT-rm', 'WOOD PALLTE 1300*2300*120 H SUPPORT DANA LKB', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-022/ES3-rm', 'WOOD PALLTE 1300*2300*120 H SUPPORT SHEET BOARD ES-3', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-022-1/AMT-rm', 'WOOD PALLTE 1200*2400*112 H SUPPORT DANA LKB/MITSU', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-022-2/AMT-rm', 'WOOD PALLTE 1115*2275*112 H SUPPORT DANA LKB/MITSU', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-022-3/AMT-rm', 'WOOD PALLTE 1100*2280*120H แบบคาน SUPPORT DANA LKB/MITSU', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-030-rm', 'CLEAR TAPE 2"*45Y  ( LION แกนเขียว ) 360 Roll/Box  เทปใส', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-043-rm', 'CLOTH TAPE / TAPE ผ้า  1"*8Y (CLT INTER)   72 ROLL / BOX   สีน้ำเงิน', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-044-rm', 'WOOD PALLTE  1300W*1300L*125H (PLY WOOD 10MM)   SEWS-CT SCREEN  NK==>REEL', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-045-rm', 'WOOD SIZE 75W*1400L*12T MM.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-045-1-rm', 'WOOD SIZE 75W*1200L*12T MM.', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-047-rm', 'เทปกาวหนังไก่ 2นิ้ว', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-048-rm', 'เทปกาวหนังไก่ 1นิ้ว', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-049-rm', 'สติ๊กเกอร์สะท้อนแสง สี', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'WAS-S-050-rm', 'PROOF PAPER SIZE 31"*43" (50g) กระดาษปรุ๊ฟ 500 PCS./PACK', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ตาไก่อลูมิเนียม NO.25-rm', 'ตาไก่อลูมิเนียม NO.25 SUPPORT SGB-RG71,72 (1 PACK=1440 PCS.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'ยางสามเหลี่ยม-rm', 'ยางสามเหลี่ยม', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'BOX-DENSO-rm', 'CORRUGATED BOX T5 MM  OD. 492*291*310 MM (BLUE)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MOLECULAR XH-7S-rm', 'MOLECULAR Sieve XH-7S', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MOLECULAR-CHINA-rm', 'MOLECULAR SIEVE AH-7', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MOLECULAR-JAPAN-rm', 'MOLECULAR SIEVE XH-7S', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RBOX-FUJI-10-rm', 'CARTON BOX FUJI ID240*410*210H MM. (466W*1352L) KA230/CA125/KA230 C/F  07030-04210', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RBOX-FUJI-20-rm', 'CARTON BOX FUJI ID240W*400L*175H  MM. (431WW*1332L) KA230/CA125/KA230 C/F 07030-04220', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RBOX-FUJI-40-rm', 'CARTON BOX FUJI ID240W*410L*185H  MM. (441W*1352L) KA230/CA125/KA230 C/F 07-030-04240', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RBOX-FUJI-50-rm', 'CARTON BOX FUJI 516W*1391L KA230/CA125/KA230 C/F 07-030-04250', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDEN-004-rm', 'BOX 363W*1409L KL205/CA125/KL205 C/F มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDEN-005-rm', 'SLIP SHEET SIZE:1035W*1078L SLIP SHEET 0.045 inch', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDEN-006-rm', 'BOX 329W*959L KL205/CA125/KL205 C/F Model: Dryer Export To Malaysia มัดละ 10 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDEN-008-rm', 'BOX-D1  271W*673L OD 70*255*75H KL205/CA125/KL205 C/F MODEL DRYER 45G PACK 5 (COLOR MF RR 2795 BLUE P.288C)  มัดละ 20 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDEN-008-1-rm', 'BOX-D1  271W*673L OD 70*255*75H KL205/CA125/KL205 C/F MODEL DRYER 45G PACK 1 (COLOR MF RR 2795 BLUE P.288C)  มัดละ 20 ชิ้น', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDEN-009-rm', 'WOOD PALLET  SIZE  940W*1088L*111H mm   MODEL DRYER 45 G. PACK 5   (Heat Treatment)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDEN-STICKER-01-rm', 'STICKER UPO COOL GEAR DI445910-1600 Size 6*4 cm. พิมพ์ 2 สี (PANTONE COLOR SPEC M:100, Y:80) MODEL DRYER 45 G. PACK 5', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RDEN-STICKER-01-1-rm', 'STICKER UPO COOL GEAR DI445910-1600 Size 6*4 cm. พิมพ์ 2 สี (PANTONE COLOR SPEC M:100, Y:80) MODEL DRYER 45 G. PACK 5', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFELT-002-rm', 'TGF445910-0320  FELT 75MM*285M*0.7TMM', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFELT-FUJI001-rm', 'FELT SIZE 76W*205L MM ( FUJIKOKI 04210 ) TAG สีฟ้า', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFELT-FUJI003-rm', 'FELT SIZE 76W*165L MM ( FUJIKOKI 04220 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFELT-FUJI004-rm', 'FELT SIZE 76W*178L MM ( FUJIKOKI 04240 )', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFELT-FUJI005-rm', 'FELT SIZE 80MM*253MML MM ( FUJIKOKI 04250)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFELT-SANDEN001-rm', 'FELT SIZE 72W*191L MM ( S16-00071 ) SANDEN', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFELT-SANDEN002-rm', 'FELT SIZE 72W*289L MM ( S16-00071 ) SANDEN', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFUJISTICKER-001-rm', 'STICKER TTR Size 5.0cm.x2.0cm.(1Roll/2000PCS) แบบบาง สีเขียว', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFUJISTICKER-003-rm', 'STICKER TTR Size 5.0cm.x2.0cm.(1Roll/2000PCS) แบบบาง สีเหลือง', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RFUJISTICKER-004-rm', 'STICKER TTR Size 5.0cm.x2.0cm.(1Roll/2000PCS) แบบบาง สีฟ้า', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RPETBAG-001-rm', 'PETBAG  SPEC OPP20/MPET12/LL65 SIZE 280*330 MM (V-CUT)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RPETBAG-001-1-rm', 'PETBAG  SPEC OPP20/MPET12/LL65 SIZE 280*320 MM (V-CUT)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RPETBAG-002-rm', 'PETBAG  SPEC OPP20/MPET12/LL65 SIZE 280*380 MM (V-CUT)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RPETBAG-003-rm', 'PETBAG  SPEC OPP20/MPET12/LL65 SIZE 260*320 MM*0.98  (V-CUT) SAMPLE', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RPETBAG-004-rm', 'PETBAG  SPEC PET12/MPET12/LLDPE78 Non ESD,V-cut (x2) 3 side seal 10 mm./Seal  SIZE 4mil*42mm*275mm', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RPETBAG-005-rm', 'PETBAG  SPEC OPP20/MPET12/LLDPE65 Non ESD,V-cut (x2) 3 side seal 10 mm./Seal  SIZE ID 4mil*42mm*275mm', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'RSB-RDEN-001-rm', 'SHEET BOARD  530W*1983L  KA185/CA125*3/KA185  BCF 1:2  (W44"*L78" 1/8 ผ่า 2)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TG445910-0081-rm', 'DRYER ( 45 G.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TG445910-0081H-rm', 'DRYER ( 45 G.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TG445910-0320-rm', 'DRYER  TG445910-0320  ( 60 G.)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'TGF445910-rm', 'TGF 445910 (FELT 75MM*230MM)', 0, now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO products (id, part_no, part_name, minimum_stock, "createdAt", "updatedAt", "type") VALUES(uuid_generate_v4(), 'MOLECULAR RD-7-rm', 'MOLECULAR SIEVE RD-7', 0, now(), now(), 'RM');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM TABLE "products" where type='RM'`);
  }
}
