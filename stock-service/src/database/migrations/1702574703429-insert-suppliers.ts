import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertSuppliers1702574703429 implements MigrationInterface {
  name = 'InsertSuppliers1702574703429';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'NK-ES-F1' , 'PD-F1-ASSY', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'NK-ES-F2' , 'PD-F2', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'NK-ES-F3' , 'PD-F3-ASSY', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'NK-AMT' , 'PD-AMT', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'NK-ASSY' , 'MC.LAMINATE', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'NK-SHC' , 'MC.CUTTING', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'NK-DC' , 'MC.DIE CUT', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'NK-HAP' , 'MC.HAP', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'NK-SLIT' , 'MC.SLIT', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'NK-SLOT' , 'MC.SLOT', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'NK-HAC' , 'MC.HAC', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'NK-DS' , 'DESIGN', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'A0001' , 'Asian Identity Co.,Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'A0004' , 'A.P.RECYCLE INDUSTRIAL CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'A0007' , 'บริษัท แอมโก้ อินโนเวชั่น จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'A0011' , 'ASA CORRUGATED CONTAINER CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'A0013' , 'แอดวานซ์ เพาเวอร์-เทค เซ็นเตอร์ จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'A0014' , 'AXIS VERSATILE SDN.BHD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'A0021' , 'บริษัท ASCG Invention(1991) Co.,Ltd', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'A0025' , 'ASCG INTERPRO ( ASIA) CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'A0029' , 'บริษัท เอแอลเอส แลบอราทอรี กรุ๊ป (ประเทศไทย) จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'A0030' , 'บริษัท แอพพลิแคด จำกัด (มหาชน)', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'A0031' , 'AK PALET & SUPPLY COMPANY LIMITED', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'A0033' , 'บริษัท เอเอชพี เซฟตี้ เซอร์วิส จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'A0034' , 'บริษัท อุตสาหกรรมไทยบรรจุภัณฑ์ จำกัด (มหาชน)', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'A0035' , 'บริษัท เอพีพี เซฟตี้ จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'A0036' , 'ANUSORN BESTSAFE CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'A0037' , 'บริษัท AICA BANGKOK CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'A0040' , 'บริษัท อัลลิคอร์น จำกัด  (สาขา 1 )', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'A0041' , 'บริษัท ATXEL INDUSTRIAL CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'A0042' , 'บริษัท อัลลิคอร์น จำกัด  (สาขา 1)', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'A0043' , 'บริษัท แอร์ เฟิร์ส เซอร์ วิส จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'A0044' , 'ANAN PACKING WOOD CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'A0045' , 'นายอนุชิต สมุดความ', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'A0046' , 'ADVANCE POWER-TECH CENTER CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'A0048' , 'ATLAS K CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'B0002' , 'BANGKOK INTER MERCHANDISE CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'B0006' , 'บริษัท บีเอ็ม เซฟตี้ แอนด์ อิควิพเมินท์ จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'B0008' , 'บริษัท บรูพา ซายน์ จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'B0013' , 'บริษัท บูรพา ซายน์ จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'B0015' , 'บริษัท บางพระ เมดิคอล เซนเตอร์ จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'B0017' , 'ห้างหุ้นส่วนจำกัด บราเธอร์ ไอที', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'B0021' , 'บริษัท บี.ไอ.ที.โลจิสติกส์ แอนด์ เซอร์วิส จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'B0022' , 'บริษัท บางบอนฟอร์คลิฟท์ จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'B0024' , 'บริษัท บางพลีซัพพลาย แอนด์ สเตชั่นเนอรี่ จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'B0025' , 'บริษัท เบ็นเทคไล้ท์ติ้งโซลูชั่นส์', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'b0026' , 'บริษัท บีเอ็ม เซฟตี้ แอนด์ อิควิพเมินท์ จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'B0031' , 'B&F TRADING AND SERVICE LIMITED PARTNERSHIP', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'C0001' , 'C.B.TACT (THAILAND) CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'C0002' , 'CHOSIRI INTERCLEAN LTD.PART', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'C0004' , 'CHS PACKAGING CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'C0007' , 'บริษัท ซีเอส ล็อกซอินโฟ จำกัด (มหาชน)  (สาขาที่ 00007)', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'C0009' , 'ห้างหุ้นส่วนจำกัด ฉะเชิงเทราทรายทองบริการ', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'C0031' , 'CHONBURI CARTON INDUTRY LTD.,PART', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'C0032' , 'CLC Packaging & Carton Machinery (Thailand) Co.,Ltd', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'C0034' , 'บริษัท CPPC Public Company Limited (สาขา 00001)', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'C0035' , 'บริษัท Chor.Siri and Solife Co.,Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'C0037' , 'CONCENTRATE PRINTING CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'C0038' , 'บริษัท คลิกเน็กซ์ เทคโนโลยี จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'C0039' , 'คุณ จำเริญ อ่องชิงชัย', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'D0001' , 'บริษัท ดีพรเจริญ จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'D0009' , 'D.K.DIE-CUT CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'D0012' , 'บริษัท ดีเอสแอล เอ๊กซ์เพรส อินเตอร์เนชั่นแนล (ประเทศไทย)  จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'D0016' , 'DALIAN HAIXIN CHEMICAL INDUSTRIAL CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'D0017' , 'DEECHAI PAPER INDUSTRIAL CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'D0019' , 'บริษัท ดูโฮม จำกัด (มหาชน)', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'E0001' , 'บริษัท อีสเทิร์นซีบอร์ดอินดัสเตรียลเอสเตท (ระยอง) จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'E0002' , 'EK-IN CHONBURI (2006) CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'E0005' , 'บริษัท อีสเทิร์น ซีบอร์ด เอนไวรอนเมนทอล คอมเพล็กซ์ จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'F0004' , 'FORWARD INCORPORATION (THAILAND ) CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'F0006' , 'FLEXO GRAPHIC CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'F0007' , 'บริษัท ฟิวเจอร์ บิสซิเนส โซลูชั่น จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'F0012' , 'FLEXI-PACK LIMITED', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'F0014' , 'บริษัท FAGERDALA (THAILAND) LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'F0015' , 'PERMA-FLEX CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'F0016' , 'First Shop Garment Co.,Ltd', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'G0001' , 'GRAPHPACK CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'G0007' , 'GOODBOX PACKAGING CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'G0008' , 'บริษัท รักษาความปลอดภัย จี4เอส เซอร์วิสเซส (ประเทศไทย)', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'G0009' , 'บริษัท เจนเนอรัล เทคโนโลยี พาร์ท', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'G0010' , 'GENERAL VACUUM & FLOW CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'G0011' , 'GREENPOINT SERVICE SOLUTION CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'H0005' , 'HOMEANDFAC COMPANY LIMITED.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'H0009' , 'บริษัท ฮาร์ดแวร์เฮ้าส์ แอนด์ โฮมโปรดักส์ จำกัด (สาขาบ่อวิน)', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'H0011' , 'HI-TRON PACKAGING CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'H0012' , 'บริษัท ฮาร์ดแวร์เฮ้าส์ แอนด์ โฮมโปรดักส์ จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'H0013' , 'บริษัท ฮาร์ดแวร์เฮาส์ คอร์ปอเรชั่น จำกัด (สาขาบ่อวิน)', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'I0005' , 'บริษัท อินโนเวชั่น ดิจิทัล พริ้นติ้ง กรุ๊ป', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'I0007' , 'ID GLOBAL CORPORATION CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'I0008' , 'อินโทร (อีสเทิร์น) จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'J0004' , 'J.C.P.INDUSTRIAL CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'J0010' , 'ห้างหุ้นส่วนจำกัด เจิดเซอร์วิส', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'J0011' , 'บริษัท เจเอ็ม เซ็นเตอร์ จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'J0012' , 'JSV INTERPRODUCTS COMPANY LIMITED', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'J0013' , 'บริษัท เจเอสวี แอนด์ ซัพพลาย จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'K0007' , 'KPC CARTON CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'K0008' , 'KP ULTRASONIC LIMITED PARTNERSHIP', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'K0010' , 'KPK Q PLUS COMPANY LIMITED.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'K0011' , 'K.M.PROGRESS CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'K0014' , 'K.TIP 999 CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'K0015' , 'บริษัท K.K.P. Intergroup Co.,Ltd', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'L0006' , 'บริษัท แอลพีพี อนันตทรัพย์ จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'L0009' , 'บริษัท แหลมฉบังอินเตอร์ออโต้ไทร์ จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'L0010' , 'บริษัท ริชเวฟ คอมมูนิเคชั่น จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'L0011' , 'LEE FIBREBOARD CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'L0013' , 'บริษัท LOUIS ADHESIVE TAPES CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'L0014' , 'LOG GLOBAL CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'M0001' , 'บริษัท เอ็ม แอนด์ เอ แอดไวเซอร์รี่ จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'M0003' , 'MAXPRO PACK CORP CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'M0007' , 'บริษัท เอ็ม แอนด์ เอ การบัญชีและภาษีอากร จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'M0010' , 'เมริท เคมีคอล จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'M0012' , 'บริษัท เอ็ม เจ เอ็ม ซัพพลาย จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'M0016' , 'บริษัท มิตซุย บุซซัน ออโตโมทีฟ (ประเทศไทย) จำกัด สาขา00005', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'M0017' , 'บริษัท มาสเตอร์ คาร์เร้นเทิล จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'M0020' , 'บริษัท แม่พิมพ์ จำกัด  (สาขา 00001)', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'M0022' , 'MSP MACHINETOOL .,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'M0025' , 'บริษัท มิตซุย บุซซัน ออโตโมทีฟ (ประเทศไทย) จำกัด สาขา 00007', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'M0026' , 'บริษัท แมททีเรียล เวิลด์ จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'M0027' , 'ห้างหุ้นส่วนจำกัด MONSTER PRINT LIMITED PARTNERSHIP', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'M0028' , 'MORI ASSOCIATION CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'M0032' , 'บริษัท มิสเตอร์ สตีลเลอร์ จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'M0033' , 'บริษัท แม่พิมพ์ จำกัด (สำนักงานใหญ่)', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'M0034' , 'MISUMI  (THAILAND) CO.,  LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'M0035' , 'ห้างหุ้นส่วนจำกัด มณีกิจ อาร์ต 2008', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'M0036' , 'บริษัท เอ็ม แอนด์ ที อินเตอร์ โปรดักส์ จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'M0037' , 'บริษัท ไม้สนอบ', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'M0038' , 'บริษัท มี อินดัสเทรียล ซัพพลาย จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'M0039' , 'MPK PAPER CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'M0040' , 'ห้างหุ้นส่วนจำกัด มายด์ คลาสสิค', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'N0001' , 'NUMWATTANA (WORLDWIDE) CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'N0002' , 'บริษัท เอ็นเค-แอ๊คซิส (ประเทศไทย) จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'N0003' , 'N.B.T. SUPPLY COMPANY LIMITED', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'N0005' , 'NIPPON KAKO-KIZAI CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'N0007' , 'Nippon Express Logistics (Thailand) Co.,Ltd. (Branch 00011)', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'N0010' , 'NICHIYU ASIA (THAILAND) CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'N0017' , 'บริษัท น้ำดื่มศรีทอง จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'N0018' , 'บริษัท นิว แอนด์ ไฮด์', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'N0021' , 'NIPPON EXPRESS (THAILAND) CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'N0024' , 'NUMWATTANA PACK&PRINT CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'N0025' , 'NC PART SUPPLY CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'N0026' , 'NPC SIAM CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'N0027' , 'บริษัท NORMAN ADHESIVE CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'N0028' , 'บริษัท เอ็นเค- แอ๊กซิส ฟิวเจอร์เทค จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'N0029' , 'บริษัท NPP PRODUCTION SUPPLY CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'N0032' , 'NNA (THAILAND) CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'N0034' , 'บริษัท NAFF STATIONERY CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'N0035' , 'บริษัท นิปปอน เอ็กซ์เพรส โลจิสติกส์ (ประเทศไทย) จำกัด(Branch 00003)', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'NK-0019' , 'คุณ สุณัฐญาณ์ แดงมา', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'O0001' , 'บริษัท โอ.ซี.เอส.ไทยแลนด์ จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'O0002' , 'บริษัท ออนไลน์ซอฟท์ คอมเทค จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'P0001' , 'บริษัท โปรซอฟท์ คอมเทค จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'P0004' , 'บริษัท พริ้นติ้ง 108 จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'P0006' , 'PLUS FOAM PACKAGING CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'P0007' , 'บริษัท PRO-CARE PACKAGING LIMITED.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'P0009' , 'POWER DRY CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'P0012' , 'การไฟฟ้าส่วนภูมิภาค', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'P0023' , 'บริษัท โปรเฟสชั่นแนล เวสต์ เทคโนโลยี (1999) จำกัด (มหาชน)', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'P0025' , 'บริษัท โรงพยาบาลศรีราชานคร จำกัด (มหาชน)', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'P0034' , 'บริษัท เพอร์รี่  จอห์นสัน รีจิสตราร์ อิงค์', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'P0037' , 'บริษัท พีเอ็นพี เคมีเทค จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'P0039' , 'บริษัท พรเทพ อินเตอร์กรุ๊ป จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'P0042' , 'บริษัท พารากอน คาร์ เรนทัล จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'P0049' , 'PIN M PALLET CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'P0050' , 'บริษัท PRUEKSA GARMENT CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'P0053' , 'Premiums Lineage Bloom. Co.,Ltd', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'P0055' , 'บริษัท พีเอชเอ ออโตเมชั่น จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'Q0002' , 'ห้างหุ้นส่วนจำกัด คิว สปีด ไลน์', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'Q0003' , 'QUALITY RENT - A - CAR CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'Q0004' , 'บริษัท ควอลิวูด จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'Q0005' , 'บริษัท คิว-แมท คอนสตรัคชั่น', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'R0002' , 'บริษัท ริโก้ (ประเทศไทย) จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'R0003' , 'บริษัท ริโก้ เซอร์วิสเซส (ประเทศไทย) จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'R0005' , 'บริษัท ริชเวฟ คอมมูนิเคชั่น จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'R0012' , 'RENT (THAILAND) CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'R0014' , 'RATCHANEEAIR&SERVICE CO,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'R0017' , '168 RACHANOT-BOWIN CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0008' , 'SINOPAC CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S00100' , 'บริษัท เอส.ที.ดับบลิว เทรด แอนด์ เซอร์วิส', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0023' , 'บริษัท ศรีอุดม อิมเมจ จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0025' , 'SMC (THAILAND) LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0027' , 'SGS (THAILAND) LIMITED', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0028' , 'ห้างหุ้นส่วนจำกัด เอส.พี. แอร์เอ็นจิเนียริ่ง แอนด์ เซอร์วิส', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0042' , 'บริษัท ซีกัลล์ ลอจิสติกส์ (ไทยแลนด์) จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0043' , 'SANGSIRI GROUP CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0044' , 'SAFETY MASTER & ENGINIEERING CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0045' , 'บริษัท เสียงทอง อีเล็คทริค จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0052' , 'สาธรจักรกล', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0054' , 'บริษัท ซิลิคอน เทคโนโลยี แอนด์ เซอร์วิส จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0059' , 'บริษัท เอส พี เอ็ม พิมพ์ดี', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0061' , 'SHINTECH PRODUCT PRODUCT LIMITED PARTNERSHIP', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0069' , 'SONOCO (THAILAND) LIMITED.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0070' , 'SATHAPORN PAD PRINT LTD.,PART.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0071' , 'บริษัท เอสเอ็มอี แฟคทอรี่  จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0072' , 'SIAM KRAFT', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0079' , 'บริษัท รักษาความปลอดภัย ปลวกแดง กรุ๊ป จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0084' , 'SENMON PACKAGING CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0085' , 'SIAM SUCCESS CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0086' , 'ห้างหุ้นส่วนจำกัด ทรายทองบ่อวิน', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0087' , 'SANKYUTHAI CO.,LTD. (BRANCH 00018)', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0088' , 'SUDA INTERPACK CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0091' , 'บริษัท แสงจันทร์ โลจิสติคส์ แอนด์ เซอร์วิส จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0092' , 'Seven North Stars Enterprise Co.,Ltd', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0093' , 'SPWIN ENGINEERING CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0095' , 'บริษัท SHINWA (THAILAND) CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0099' , 'บริษัท เซฟตี้ แล็บ จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0100' , 'STAR BOND (THAILAND) CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0101' , 'SIAM PACKING CENTER CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0102' , 'บริษัท ศิลารีเสิร์ช จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'S0103' , 'SAFETY SIGN CORPORATION CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'T0026' , 'TW PACKAGING LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'T0034' , 'TOKIWA A.P. (THAILAND)., LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'T0040' , 'บริษัท ไทยอีสเทิร์น ก๊อปปี้ จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'T0048' , 'ห้างหุ้นส่วนจำกัด ทู บี วอเตอร์ 2002', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'T0049' , 'ห้างหุ้นส่วนจำกัด โททอล เมดิ กรุ๊ป', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'T0050' , 'บริษัท คุ้มภัยโตเกียวมารีนประกันภัย(ประเทศไทย) จำกัด (มหาชน)', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'T0052' , 'TTS Cool International Service Company Limited', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'T0053' , 'TONKAR USAHAKOM CO.,TH', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'T0056' , 'TECHNO-PACK CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'T0057' , 'TNC PRODUCT ENGINEERING.CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'T0058' , 'บริษัท รักษาความปลอดภัย ไทยซีคอม จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'T0064' , 'บริษัท TSAIFENG ENTERPRISE CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'T0065' , 'บริษัท T.S.T.INTER PRODUCTS Co.,Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'T0066' , 'Thong Ming Co.,Ltd.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'T0067' , 'THAIRUNGRUEANG FOAM CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'T0070' , 'TOMOE TRADING (THAILAND) CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'T0071' , 'TTS Cool International Service Company Limited', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'T0075' , 'บริษัท ไทยฮาท แคลิเบรชั่น จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'T0077' , 'บริษัท ที แอนด์ ดี แอร์เซอร์วิส จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'T0078' , 'บริษัท ไทยเหรียญฟอคลิฟท์ จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'T0079' , 'บริษัท โต-พลาสติก จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'T0082' , 'TRIPLE E TRADING CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'T0083' , 'T.S PAPER SUPPLY LIMITED PARTNERSHIP', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'U0004' , 'บริษัท ยูซีซี อูเอะชิม่า คอฟฟี่  ( ประเทศไทย ) จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'U0006' , 'ยูไนเต็ด ครีเอชั่น แพ็คเกจจิ้ง โซลูชั่น (ประเทศไทย)จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'U0007' , 'บริษัท ยูนิเทค  อิสเทอร์น จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'U0008' , 'บริษัท ยูซีซี เคทู จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'V0001' , 'VIRUL PACKAGING CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'V0002' , 'ห้างหุ้นส่วนจำกัด วิไลกิจรุ่งโรจน์ (2003)', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'V0007' , 'บริษัท วี อาร์ โปร จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'V0009' , 'V-FRIEND LOGISTICS CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'W0001' , 'WANG DEANG INDUSTRIAL SUPPLIERAS CO.,LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'W0004' , 'บริษัท เวิร์ลดแพล็นนิวเซอร์วิส แอนด์ โลจิสติกส์ จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'W0007' , 'บริษัท ดับบลิวเอชเอ ยูทิลิตี้ส์ แอนด์ พาวเวอร์ จำกัด (มหาชน)', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'W0008' , 'บริษัท ดับบลิวเอชเอ อินดัสเตรียล บิวดิ้ง จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'W0009' , 'W&P PACKING CO.,LTD', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'W0010' , 'บริษัท เวสท์ แมเนจเม้นท์ สยาม จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'W0011' , 'บริษัท ดับเบิลยู อี 9 ดีเวลลอปเม้นท์ จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'W0013' , 'บริษัท วินเนอร์ เปเปอร์ จำกัด', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'Z0001' , 'ZERUST SPECIALTY  TECH  CO., LTD.', now(), now(), '');`,
    );
    await queryRunner.query(
      `INSERT INTO suppliers (id, supplier_no, supplier_name, created_at, updated_at , note) VALUES(uuid_generate_v4(),'Z0002' , 'ZINNIA SUNTECH CO.,LTD.', now(), now(), '');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM TABLE "suppliers"`);
  }
}
