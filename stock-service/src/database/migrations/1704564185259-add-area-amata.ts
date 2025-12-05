import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddAreaAmata1704564185259 implements MigrationInterface {
  name = 'AddAreaAmata1704564185259';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'RM-AREA-RM', 'RM-AREA', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'RM-AREA-WIP', 'RM-AREA', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'SB-AREA-RM', 'SB-AREA', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'SB-AREA-WIP', 'SB-AREA', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'FG/BS-AREA-RM', 'FG/BS-AREA', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'FG/BS-AREA-WIP', 'FG/BS-AREA', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'FG/BS-AREA-BS', 'FG/BS-AREA', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'FG/BS-AREA-FG', 'FG/BS-AREA', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'PD-AREA-RM', 'PD-AREA', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'PD-AREA-WIP', 'PD-AREA', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'PD-AREA-BS', 'PD-AREA', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'PD-AREA-FG', 'PD-AREA', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'INCOMING-AREA-RM', 'INCOMING-AREA', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'INCOMING-AREA-WIP', 'INCOMING-AREA', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'INCOMING-AREA-BS', 'INCOMING-AREA', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'INCOMING-AREA-FG', 'INCOMING-AREA', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'NG/HOLD-AREA-RM', 'NG/HOLD-AREA', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'NG/HOLD-AREA-WIP', 'NG/HOLD-AREA', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'NG/HOLD-AREA-BS', 'NG/HOLD-AREA', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'NG/HOLD-AREA-FG', 'NG/HOLD-AREA', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DEADSTOCK-AREA-RM', 'DEAD STOCK-AREA', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DEADSTOCK-AREA-WIP', 'DEAD STOCK-AREA', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DEADSTOCK-AREA-BS', 'DEAD STOCK-AREA', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DEADSTOCK-AREA-FG', 'DEAD STOCK-AREA', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A3-1-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A3-1-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A3-2-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A3-2-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A3-3-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A3-3-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A4-1-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A4-1-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A4-2-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A4-2-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A4-3-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A4-3-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A5-1-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A5-1-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A5-2-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A5-2-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A5-3-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A5-3-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A6-1-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A6-1-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A6-2-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A6-2-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A6-3-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A6-3-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A7-1-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A7-1-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A7-2-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A7-2-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A7-3-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A7-3-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A8-1-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A8-1-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A8-2-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A8-2-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A8-3-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A8-3-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A9-1-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A9-1-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A9-2-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A9-2-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A9-3-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A9-3-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A10-1-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A10-1-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A10-2-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A10-2-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A10-3-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A10-3-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A11-1-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A11-1-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A11-2-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A11-2-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A11-3-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A11-3-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A12-1-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A12-1-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A12-2-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A12-2-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A12-3-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A12-3-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A13-1-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A13-1-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A13-2-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A13-2-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A13-3-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A13-3-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A14-1-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A14-1-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A14-2-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A14-2-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A14-3-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A14-3-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A15-1-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A15-1-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A15-2-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A15-2-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A15-3-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A15-3-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A16-1-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A16-1-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A16-2-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A16-2-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A16-3-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A16-3-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A17-1-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A17-1-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A17-2-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A17-2-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A17-3-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A17-3-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A18-1-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A18-1-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A18-2-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A18-2-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A18-3-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A18-3-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A19-1-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A19-1-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A19-2-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A19-2-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A19-3-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A19-3-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A20-1-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A20-1-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A20-2-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A20-2-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A20-3-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A20-3-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A21-1-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A21-1-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A21-2-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A21-2-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A21-3-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A21-3-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A22-1-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A22-1-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A22-2-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A22-2-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A22-3-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A22-3-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A23-1-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A23-1-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A23-2-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A23-2-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A23-3-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A23-3-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A24-1-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A24-1-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A24-2-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A24-2-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A24-3-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A24-3-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A25-1-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A25-1-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A25-2-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A25-2-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A25-3-RM', 'RACK A', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A25-3-WIP', 'RACK A', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B1-1-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B1-1-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B1-2-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B1-2-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B1-3-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B1-3-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B2-1-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B2-1-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B2-2-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B2-2-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B2-3-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B2-3-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B3-1-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B3-1-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B3-2-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B3-2-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B3-3-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B3-3-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B4-1-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B4-1-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B4-2-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B4-2-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B4-3-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B4-3-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B5-1-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B5-1-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B5-2-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B5-2-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B5-3-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B5-3-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B6-1-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B6-1-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B6-2-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B6-2-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B6-3-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B6-3-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B7-1-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B7-1-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B7-2-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B7-2-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B7-3-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B7-3-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B8-1-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B8-1-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B8-2-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B8-2-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B8-3-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B8-3-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B9-1-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B9-1-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B9-2-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B9-2-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B9-3-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B9-3-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B10-1-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B10-1-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B10-2-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B10-2-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B10-3-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B10-3-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B11-1-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B11-1-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B11-2-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B11-2-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B11-3-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B11-3-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B12-1-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B12-1-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B12-2-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B12-2-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B12-3-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B12-3-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B13-1-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B13-1-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B13-2-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B13-2-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B13-3-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B13-3-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B14-1-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B14-1-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B14-2-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B14-2-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B14-3-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B14-3-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B15-1-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B15-1-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B15-2-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B15-2-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B15-3-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B15-3-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B16-1-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B16-1-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B16-2-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B16-2-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B16-3-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B16-3-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B17-1-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B17-1-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B17-2-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B17-2-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B17-3-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B17-3-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B18-1-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B18-1-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B18-2-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B18-2-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B18-3-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B18-3-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B19-1-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B19-1-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B19-2-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B19-2-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B19-3-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B19-3-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B20-1-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B20-1-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B20-2-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B20-2-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B20-3-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B20-3-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B21-1-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B21-1-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B21-2-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B21-2-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B21-3-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B21-3-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B22-1-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B22-1-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B22-2-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B22-2-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B22-3-RM', 'RACK B', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B22-3-WIP', 'RACK B', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C1-1-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C1-1-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C1-2-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C1-2-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C1-3-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C1-3-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C2-1-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C2-1-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C2-2-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C2-2-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C2-3-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C2-3-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C3-1-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C3-1-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C3-2-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C3-2-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C3-3-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C3-3-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C4-1-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C4-1-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C4-2-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C4-2-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C4-3-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C4-3-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C5-1-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C5-1-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C5-2-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C5-2-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C5-3-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C5-3-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C6-1-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C6-1-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C6-2-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C6-2-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C6-3-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C6-3-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C7-1-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C7-1-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C7-2-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C7-2-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C7-3-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C7-3-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C8-1-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C8-1-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C8-2-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C8-2-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C8-3-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C8-3-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C9-1-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C9-1-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C9-2-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C9-2-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C9-3-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C9-3-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C10-1-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C10-1-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C10-2-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C10-2-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C10-3-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C10-3-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C11-1-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C11-1-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C11-2-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C11-2-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C11-3-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C11-3-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C12-1-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C12-1-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C12-2-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C12-2-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C12-3-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C12-3-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C13-1-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C13-1-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C13-2-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C13-2-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C13-3-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C13-3-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C14-1-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C14-1-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C14-2-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C14-2-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C14-3-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C14-3-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C15-1-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C15-1-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C15-2-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C15-2-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C15-3-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C15-3-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C16-1-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C16-1-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C16-2-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C16-2-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C16-3-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C16-3-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C17-1-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C17-1-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C17-2-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C17-2-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C17-3-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C17-3-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C18-1-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C18-1-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C18-2-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C18-2-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C18-3-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C18-3-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C19-1-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C19-1-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C19-2-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C19-2-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C19-3-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C19-3-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C20-1-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C20-1-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C20-2-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C20-2-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C20-3-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C20-3-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C21-1-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C21-1-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C21-2-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C21-2-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C21-3-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C21-3-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C22-1-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C22-1-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C22-2-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C22-2-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C22-3-FG', 'RACK C', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C22-3-BS', 'RACK C', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D1-1-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D1-1-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D1-2-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D1-2-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D1-3-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D1-3-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D2-1-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D2-1-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D2-2-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D2-2-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D2-3-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D2-3-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D3-1-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D3-1-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D3-2-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D3-2-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D3-3-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D3-3-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D4-1-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D4-1-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D4-2-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D4-2-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D4-3-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D4-3-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D5-1-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D5-1-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D5-2-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D5-2-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D5-3-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D5-3-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D6-1-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D6-1-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D6-2-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D6-2-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D6-3-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D6-3-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D7-1-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D7-1-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D7-2-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D7-2-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D7-3-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D7-3-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D8-1-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D8-1-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D8-2-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D8-2-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D8-3-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D8-3-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D9-1-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D9-1-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D9-2-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D9-2-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D9-3-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D9-3-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D10-1-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D10-1-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D10-2-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D10-2-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D10-3-FG', 'RACK D', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D10-3-BS', 'RACK D', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E1-1-RM', 'RACK E', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E1-1-WIP', 'RACK E', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E1-2-RM', 'RACK E', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E1-2-WIP', 'RACK E', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E1-3-RM', 'RACK E', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E1-3-WIP', 'RACK E', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E2-1-RM', 'RACK E', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E2-1-WIP', 'RACK E', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E2-2-RM', 'RACK E', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E2-2-WIP', 'RACK E', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E2-3-RM', 'RACK E', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E2-3-WIP', 'RACK E', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E3-1-RM', 'RACK E', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E3-1-WIP', 'RACK E', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E3-2-RM', 'RACK E', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E3-2-WIP', 'RACK E', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E3-3-RM', 'RACK E', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E3-3-WIP', 'RACK E', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E4-55-WIP', 'TEST', now(), now(), 'WIP');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`SELECT * from areas;`);
  }
}
