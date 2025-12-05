import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertCustomers1702590239995 implements MigrationInterface {
  name = 'InsertCustomers1702590239995';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'NK-ES-F1', 'PD-F1-ASSY', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'NK-ES-F2', 'PD-F2', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'NK-ES-F3', 'PD-F3-ASSY', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'NK-AMT', 'PD-AMT', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'NK-ASSY', 'MC.LAMINATE', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'NK-SHC', 'MC.CUTTING', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'NK-DC', 'MC.DIE CUT', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'NK-HAP', 'MC.HAP', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'NK-SLIT', 'MC.SLIT', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'NK-SLOT', 'MC.SLOT', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'NK-HAC', 'MC.HAC', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'NK-DS', 'DESIGN', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'A0003', 'Asian Honda Motor Co., Ltd', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'A0004', 'ARUNA PENCILS CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'A0005', 'AGC TECHNO GLASS (THAILAND) CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'A0007', 'AmericanAxle & Manufacturing (Thailand) Co., Ltd,', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'A0008', 'AIR  SYSTEMS  (THAILAND)  CO.,  LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'A0011', 'AUTRANS (THAILAND) CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'A0012', 'ASIAN  MARUICHI  (THAILAND)  CO.,  LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'A0013', 'ART-SERINA PISTON CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'A0014', 'AKEBONO BRAKE (THAILAND) CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'A0016', 'A.A.A. MANUFACTURING CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'A0017', 'Air International Thermal Systems (Thailand) Limited.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'A0018', 'AH BRAKE (THAILAND) CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'A0019', 'ASAHI TECH (THAILAND) CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'A0020', 'AIR  SYSTEMS  (THAILAND)  CO.,  LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'A0021', 'AGC MATEX (THAILAND) CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'A0022', 'ห้างหุ้นส่วนจำกัดแอทเทมท์', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'A0023', 'AH COMMERCIAL VEHICLE BRAKE CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'A0024', 'A-PACK ENGINEERING & SUPPLIES CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'A0025', 'ARUNA  CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'A0026', 'Alucon Public Company limited.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'A0027', 'AERO CRAFT ASIA CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'A0028', 'Advanex (Thailand) Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'B0003', 'Bolwell  Holdings   (Thailand)  Co.,  Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'B0008', 'BEISHIN THAI CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'B0010', 'Brose (Thailand) Co., Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'B0011', 'BOON ENGINEERING PARTS CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'B0012', 'BENDA (THAILAND) CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'B0013', 'บี.ไอ.ที โลจิสติกส์ แอนด์ เซอร์วิส จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'C0001', 'C.B  TACT  (THAILAND)  CO., LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'C0005', 'CCI  AUTOMOTIVE  PRODUCTS  CO.,  LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'C0006', 'CHIBA  METAL  (THAILAND)  CO.,  LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'C0009', 'CYC  METAL  CO., LTD. (สำนักงานใหญ่)', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'C0012', 'C.S.(THAILAND)CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'D0001', 'DENSO  (THAILAND) CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'D0002', 'DAIDO SITTIPOL CO., LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'D0003', 'D.I.D Asia Co., Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'D0004', 'DANA SPICER (THAILAND) LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'D0005', 'DANA SPICER (THAILAND) LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'D0007', 'Daikin Compressor Industries Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'D0009', 'DENSO  SALES  (THAILAND)  CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'D0010', 'DELTA THAIRUNG CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'D0013', 'DENSO(THAILAND) CO.,LTD. (SAMRONG PLANT)', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'D0014', 'DAISHIN ASIA PACIFIC CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'D0015', 'DAIDO STEEL (THAILAND) CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'D0016', 'DDK (THAILAND) LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'D0017', 'DENSO INTERNATIONAL ASIA PTE LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'D0018', 'DENSO  (THAILAND) CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'D0019', 'DAIKIN TRANDING (THAILAND) LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'E0003', 'Echo  Autoparts  (Thailand)  Co., Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'E0004', 'EXEDY Friction Material Co.,Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'E0005', 'EVER BRIGHT INDUSTRIAL CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'F0001', 'FUTURE-TECH (ASIA) CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'F0008', 'FUJIKOKI  (THAILAND) CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'F0010', 'Faurecia Emissions Control Technologies (Thailand)  Co., Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'F0011', 'FUJI AUTOTECH (THAILAND) CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'H0002', 'HAYAKAWA EASTERN RUBBER CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'H0003', 'HORI GLASS (THAILAND) CO., LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'H0004', 'HOPPY INDUSTRIAL (THAILAND) CO., LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'H0007', 'H-ONE  Parts  Sriracha  Co.,  Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'H0009', 'HOWA (THAILAND) CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'H0010', 'HAYASHI TELEMPU (THAILAND) CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'H0011', 'Hitachi Chemical Asia (Thailand) Co., Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'H0012', 'H-D Motorcycle (Thailand) Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'H0013', 'Hitachi Chemical Gateway Battery (Thailand) Co., Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'H0014', 'Hirotec Manufacturing (Thailand) Co.,Ltd', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'H0015', 'HONG YIP MOULD CO,,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'H0016', 'Hitachi Astemo Chonburi Auto Parts Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'H0017', 'HORI GLASS (THAILAND) CO., LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'I0006', 'ITOH SEIKO (THAILAND) CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'J0002', 'JTEKT AUTOMOTIVE (THAILAND) CO., LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'J0006', 'J.V  (THAILAND)  CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'J0007', 'JNC NONWOVENS (THAILAND) CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'J0009', 'Johnson Controls-Hitachi Components (Thailand) Co.,Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'J0010', 'JTEKT (Thailand) Co.,Ltd. (Vender code : 5422N)', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'J0011', 'JTEKT (Thailand) Co.,Ltd. (Vender code : 5422N)', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'J0012', 'J.V  (THAILAND)  CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'J0013', 'JFE Ferrite (Thailand) Co.,Ltd', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'J0014', 'JTEKT COLUMN SYSTEMS (THAILAND) CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'K0001', 'KIRIU (THAILAND)  CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'K0003', 'Kellogg (Thailand)  Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'K0004', 'K&K PACKAGE (THAILAND) CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'K0005', 'KITAGAWA (THAILAND) CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'K0008', 'KURIYAMA  (THAILAND)  CO., LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'K0011', 'KOTOBUKIYA FELTOL (THAILAND) CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'K0012', 'KYB Steering (Thailand) Co.,Ltd', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'K0014', 'KNSA CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'K0017', 'KAKIHARA MEIBAN (THAILAND) CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'K0018', 'Kyoshin Industrial Co.,Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'K0019', 'KPC CARTON CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'K0020', 'KORAT PACKAGE (THAILAND) CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'K0021', 'KOYO Marketing and Processing Asia Co.,Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'K0022', 'Kerry Logistic (Thailand) CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'L0004', 'Luvata Heating cooling Tecnologies (Thailand) Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'L0005', 'LOYAL HAILAING COPPER (THAILAND) CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'L0006', 'LOGICOM INTERNATIONAL (THAILAND) CO,.LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'M0001', 'MITSUBISHI ELEVATOR ASIA CO., LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'M0002', 'Max (Thailand) Co., Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'M0004', 'MELTEC PARTS&ENGINEERING CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'M0006', 'MORIROKU  TECHNOLOGY  (THAILAND) CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'M0010', 'MGC ELECTROTECHNO (THAILAND) CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'M0013', 'MORITA SEISAKUSHO (THAILAND)CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'M0014', 'MITSUBISHI CHEMICAL ADVANCED MATERIALS CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'M0015', 'Max (Thailand) Co., Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'M0016', 'MOLYMER MATEX (THAILAND) CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'N0001', 'NTN MANUFACTURING (THAILAND) CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'N0003', 'Nihon Plast (Thailand) Co., Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'N0004', 'Nisshinbo Somboon Automotive Co.,Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'N0005', 'บริษัท เอ็นเค-แอ๊กซิส (ประเทศไทย) จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'N0008', 'บริษัท นวโลหะไทย  จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'N0009', 'Nisshinbo  Mechatronics (Thailand)  Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'N0011', 'NTN MANUFACTURING (THAILAND) CO., LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'N0012', 'Nittsu Shoji  (THAILAND) CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'N0013', 'NIPPA  (THAILAND)  CO.,  LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'N0015', 'NIHON PARTS  (THAILAND)  CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'N0016', 'Nisshinbo  Somboon  Automotive Co.,Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'N0018', 'N.H. SOJA (THAILAND) CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'N0019', 'NAGANO ENGINEERING (THAILAND) CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'N0021', 'NTN Manufacturing (Thailand) Co., Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'N0022', 'Natural Gas Cylinder (Thailand)Co.,Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'N0023', 'บริษัท เอ็นเค-แอ๊กซิส ฟิวเจอร์เทค จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'N0024', 'NIDEC ELESYS (THAILAND) CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'N0025', 'Nippon Kakou-Kizai Co.,Ltd', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'N0026', 'NX SHOJI  (THAILAND) CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'N0027', 'NISSAN TRADING(THAILAND)CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'O0002', 'OMNOVA ENGINEERED SURFACES (THAILAND) CO., LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'O0003', 'OHKUMA  IND. (THAILAND) CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'P0006', 'Patterer   Technical  Parts  Company  Limited', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'P0007', 'PLASESS (THAILAND) CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'P0008', 'PRECISION VALVE (THAILAND) LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'P0009', 'Panda Paper Cartons Co.,Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'P0010', 'PIPER PLASTICS  (THAILAND)  CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'Q0001', 'QTC Energy Public CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'R0001', 'RPT ASIA LIMITED', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'R0002', 'ROBATHERM  CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'R0003', 'RPT DESIGN & MACHINE CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'R0004', 'REFORM PRODUCT CO.LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'R0005', 'RYOKO TRADING (THAILAND) CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'R0006', 'RC-FILM Co., Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'R0007', 'RST General Co., Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0001', 'SEKISUI S-LEC (THAILAND) CO., lTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0006', 'Siam Steri Services Co., Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0008', 'STJ PACKING (2002) CO., LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0009', 'SUNLIT (THAILAND) CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0010', 'SNC Atlantic Heat Pump Co., Ltd', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0018', 'SANDEN (THAILAND) CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0019', 'SIG COMBIBLOC CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0020', 'SANOH INDUSTRIES (THAILAND) CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0021', 'SNC SOUND PROOF  CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0025', 'Somboon  Advance Technology  Public  Co., Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0026', 'Hitachi  Automotive Systems  Chonburi  Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0027', 'S.P.K PLASTIC CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0028', 'Somboon  Somic  Manufacturing  Co.,  LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0029', 'SAN-EN  (Thailand)  Co., Ltd', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0030', 'Siam  NSK  Steering  Systems  Co.,  Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0031', 'SHOWA  AUTOPARTS  (THAILAND)  CO.,  LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0032', 'SIAM  NDK  CO.,  LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0036', 'SEWS - COMPONENTS (THAILAND) LIMITED', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0037', 'SAINT-GOBAIN SEKURIT (THAILAND) CO., LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0039', 'SIAM TOHCELLO  CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0040', 'SUMITOMO ELECTRIC WIRING SYSTEMS (THAILAND) LIMITED', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0041', 'SIAM TOYODENSAN CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0043', 'SUNCHIRIN INDUSTRY (THAILAND) LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0045', 'SNC CREATIVITY ANTHOLOGY CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0049', 'SANGSIRIS GROUP CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0050', 'Siam Steri Services Co.,Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0051', 'SRI CHAROEN CHAI METAL PRODUCTS CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0052', 'SUMITOMO ELECTRIC WIRING SYSTEMS (THAILAND) LIMITED', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0053', 'SUMITOMO ELECTRIC WIRING SYSTEMS (THAILAND) LIMITED', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0054', 'SUMITOMO ELECTRIC WIRING SYSTEMS (THAILAND) LIMITED', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0055', 'SOMNUEK SUBCONTRACT CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0056', 'SEKISUI PLASTICS (THAILAND) CO., LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0057', 'SEKISUI PLASTICS (THAILAND) CO., LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0058', 'SANKO (THAILAND)CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0059', 'Sumisho Global Logistics (Thailand) Co.,Ltd', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0060', 'SUDA INTERPACK CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0061', 'Somboon Forging Technology Co.,Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0062', 'SEWS - COMPONENTS (THAILAND) LIMITED', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0063', 'SEKISUI KASEI (THAILAND) CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0064', 'SYNERGY W PRECISION CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0065', 'Hitachi Astemo Chonburi Powertrain Ltd,', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0066', 'SURFACE TREATMENT TECHNOLOGY (THAILAND) CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0067', 'Somboon Forging technology co.,ltd. (Head office)', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'S0068', 'SNC ATLANTIC WATER HEATER ASIA CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'T0002', 'THAI SHOWA PAXXS CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'T0008', 'Thai  Kobashi Co., Ltd', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'T0012', 'Thai  Summit  Auto Press  Co., Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'T0013', 'TECHNO FAB (THAILAND) CO., LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'T0016', 'Thai Kobelco Construction Machinery Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'T0017', 'Thaisummit Plastech  Co., Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'T0020', 'THAI KITAHARA CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'T0023', 'Thai  VMI  Service  Co., Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'T0026', 'TCFG COMPRESSOR (THAILAND) CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'T0028', 'Thaisummit Plastech  Co., Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'T0033', 'ห้างหุ้นส่วนจำกัด ตั้งจิตรรวมช่างเซอร์วิส', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'T0034', 'TOYODA GOSEI (THAILAND) CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'T0036', 'Kobelco Construction Machinery Southeast Asia Co.,Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'T0037', 'Tokyo Roki (Thailand) Co.,Ltd', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'T0038', 'TE Connectivity Manufacturing (Thailand) Co.,Ltd', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'T0039', 'THAI ASAKAWA CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'T0040', 'TF.TECH AND SERVICES CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'T0041', 'ห้างหุ้นส่วนจำกัด ตั้งจิตรเทรดดิ้ง', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'T0042', 'TAI THAI RUBBER CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'T0043', 'Thai Energy Storage Technology Public Co.,Ltd', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'T0044', '289 SUPPLY CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'T0045', 'THAI KIKUWA INDUSTRIES CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'T0046', 'TSUBAKIMOTO AUTOMOTIVE (THAILAND)CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'T0047', 'TOMOE Trading (Thailand) Co.,Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'T0048', 'TECH ON DEVELOP CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'T0049', 'TONG HEER FASTENERS (THAILAND) CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'T0050', 'บริษัท  ที.ราด (ประเทศไทย) จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'T0051', 'TAWEESAP LOGISTICS (2018) CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'U0001', 'UACJ  (THAILAND) CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'U0004', 'UNITED THAI NATURAL ELEMENTS', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'U0005', 'Union Coating Company Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'V0001', 'Viking Life-Saving Equipment (Thailand) Co., Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'V0004', 'VIRUL  PACKAGING  CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'Y0002', 'Yamaha  Motor  Parts Manufacturing  (Thailand) CO., Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'Y0003', 'Yokohama  Rubber  (Thailand)  Co.,  Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'Y0004', 'YOSHITAKE  WORKS  (THAILAND) LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'Y0005', 'YOROZU (THAILAND) CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'Y0006', 'Yoowon Electronics Co.,Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'Y0007', 'YOROZU ENGINEERING SYSTEMS(THAILAND)CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'Y0008', 'YAHATA FASTENER THAI CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'Y0009', 'YAMASEI THAI CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO customers (id, customer_no, customer_name, created_at, updated_at, note) VALUES(uuid_generate_v4(), 'Z0001', 'ZERUST SPECIALTY TECH CO.,LTD', now(), now(), '');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM TABLE "customers"`);
  }
}
