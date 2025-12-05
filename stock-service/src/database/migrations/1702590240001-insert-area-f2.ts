import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertAreaF11702590240001 implements MigrationInterface {
  name = 'InsertAreaF11702590240001';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-1-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-1-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-1-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-1-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-10-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-10-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-10-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-10-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-2-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-2-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-2-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-2-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-3-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-3-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-3-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-3-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-4-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-4-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-4-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-4-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-5-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-5-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-5-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-5-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-6-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-6-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-6-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-6-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-7-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-7-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-7-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-7-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-8-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-8-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-8-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-8-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-9-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-9-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-9-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'DeadSTOCK-9-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A1-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A1-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A1-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A10-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A10-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A10-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A11-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A11-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A11-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A12-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A12-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A12-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A13-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A13-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A13-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A14-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A14-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A14-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A15-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A15-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A15-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A16-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A16-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A16-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A17-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A17-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A17-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A18-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A18-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A18-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A19-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A19-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A19-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A2-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A2-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A2-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A20-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A20-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A20-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A21-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A21-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A21-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A22-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A22-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A22-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A23-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A23-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A23-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A24-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A24-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A24-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A25-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A25-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A25-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A26-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A26-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A26-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A27-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A27-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A27-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A28-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A28-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A28-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A29-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A29-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A29-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A3-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A3-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A3-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A30-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A30-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A30-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A31-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A31-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A31-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A32-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A32-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A32-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A33-BS-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A33-BS-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A33-BS-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A34-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A34-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A34-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A35-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A35-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A35-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A36-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A36-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A36-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A4-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A4-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A4-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A5-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A5-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A5-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A6-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A6-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A6-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A7-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A7-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A7-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A8-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A8-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A8-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A9-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A9-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-A9-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B1-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B1-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B1-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B10-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B10-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B10-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B11-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B11-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B11-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B12-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B12-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B12-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B13-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B13-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B13-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B14-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B14-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B14-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B15-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B15-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B15-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B16-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B16-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B16-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B17-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B17-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B17-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B18-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B18-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B18-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B19-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B19-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B19-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B2-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B2-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B2-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B20-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B20-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B20-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B21-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B21-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B21-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B22-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B22-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B22-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B23-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B23-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B23-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B24-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B24-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B24-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B25-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B25-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B25-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B26-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B26-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B26-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B27-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B27-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B27-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B28-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B28-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B28-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B29-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B29-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B29-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B3-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B3-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B3-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B30-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B30-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B30-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B31-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B31-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B31-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B32-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B32-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B32-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B33-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B33-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B33-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B34-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B34-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B34-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B35-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B35-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B35-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B36-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B36-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B36-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B4-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B4-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B4-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B5-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B5-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B5-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B6-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B6-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B6-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B7-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B7-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B7-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B8-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B8-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B8-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B9-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B9-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-B9-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C1-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C1-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C1-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C10-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C10-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C10-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C11-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C11-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C11-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C12-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C12-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C12-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C13-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C13-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C13-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C14-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C14-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C14-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C15-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C15-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C15-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C16-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C16-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C16-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C17-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C17-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C17-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C18-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C18-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C18-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C19-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C19-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C19-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C2-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C2-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C2-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C20-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C20-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C20-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C21-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C21-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C21-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C22-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C22-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C22-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C23-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C23-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C23-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C24-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C24-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C24-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C25-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C25-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C25-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C26-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C26-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C26-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C27-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C27-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C27-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C28-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C28-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C28-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C29-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C29-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C29-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C3-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C3-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C3-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C30-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C30-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C30-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C31-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C31-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C31-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C32-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C32-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C32-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C33-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C33-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C33-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C34-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C34-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C34-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C35-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C35-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C35-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C36-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C36-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C36-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C4-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C4-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C4-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C5-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C5-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C5-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C6-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C6-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C6-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C7-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C7-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C7-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C8-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C8-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C8-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C9-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C9-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-C9-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D1-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D1-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D10-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D10-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D11-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D11-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D12-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D12-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D13-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D13-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D14-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D14-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D15-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D15-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D16-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D16-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D17-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D17-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D18-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D18-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D19-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D19-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D2-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D2-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D20-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D20-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D21-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D21-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D22-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D22-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D23-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D23-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D24-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D24-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D25-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D25-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D26-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D26-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D27-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D27-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D28-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D28-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D29-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D29-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D3-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D3-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D30-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D30-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D31-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D31-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D32-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D32-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D33-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D33-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D34-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D34-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D35-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D35-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D36-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D36-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D37-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D37-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D38-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D38-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D39-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D39-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D4-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D4-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D40-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D40-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D41-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D41-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D42-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D42-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D43-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D43-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D44-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D44-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D45-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D45-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D46-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D46-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D47-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D47-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D48-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D48-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D5-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D5-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D6-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D6-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D7-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D7-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D8-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D8-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D9-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-D9-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E1-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E1-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E10-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E10-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E11-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E11-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E12-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E12-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E13-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E13-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E14-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E14-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E15-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E15-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E16-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E16-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E17-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E17-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E18-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E18-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E19-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E19-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E2-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E2-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E20-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E20-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E21-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E21-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E22-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E22-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E23-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E23-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E24-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E24-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E25-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E25-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E26-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E26-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E27-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E27-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E28-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E28-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E29-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E29-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E3-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E3-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E30-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E30-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E31-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E31-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E32-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E32-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E33-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E33-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E34-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E34-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E35-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E35-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E36-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E36-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E37-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E37-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E38-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E38-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E39-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E39-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E4-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E4-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E40-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E40-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E41-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E41-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E42-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E42-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E43-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E43-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E44-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E44-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E45-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E45-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E46-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E46-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E47-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E47-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E5-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E5-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E6-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E6-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E7-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E7-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E8-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E8-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E9-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-E9-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F1-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F1-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F10-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F10-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F11-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F11-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F12-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F12-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F13-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F13-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F14-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F14-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F15-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F15-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F16-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F16-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F17-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F17-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F18-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F18-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F19-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F19-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F2-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F2-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F20-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F20-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F21-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F21-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F22-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F22-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F23-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F23-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F24-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F24-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F25-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F25-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F26-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F26-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F27-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F27-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F28-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F28-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F29-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F29-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F3-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F3-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F30-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F30-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F31-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F31-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F32-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F32-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F33-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F33-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F34-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F34-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F35-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F35-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F36-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F36-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F4-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F4-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F5-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F5-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F6-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F6-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F7-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F7-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F8-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F8-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F9-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-F9-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-FG-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G1-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G1-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G10-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G10-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G11-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G11-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G12-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G12-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G13-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G13-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G14-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G14-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G15-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G15-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G16-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G16-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G17-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G17-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G18-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G18-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G19-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G19-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G2-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G2-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G20-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G20-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G21-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G21-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G22-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G22-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G23-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G23-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G24-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G24-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G25-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G25-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G26-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G26-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G27-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G27-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G28-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G28-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G29-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G29-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G3-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G3-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G30-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G30-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G31-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G31-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G32-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G32-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G33-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G33-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G34-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G34-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G35-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G35-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G36-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G36-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G37-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G37-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G38-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G38-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G39-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G39-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G4-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G4-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G40-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G40-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G41-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G41-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G42-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G42-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G43-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G43-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G5-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G5-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G6-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G6-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G7-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G7-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G8-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G8-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G9-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-G9-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H1-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H1-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H10-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H10-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H11-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H11-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H12-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H12-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H13-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H13-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H14-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H14-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H15-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H15-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H16-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H16-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H17-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H17-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H18-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H18-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H19-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H19-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H2-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H2-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H20-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H20-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H21-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H21-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H22-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H22-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H23-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H23-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H24-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H24-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H25-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H25-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H26-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H26-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H27-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H27-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H28-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H28-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H29-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H29-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H3-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H3-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H30-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H30-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H31-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H31-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H32-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H32-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H33-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H33-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H34-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H34-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H35-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H35-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H36-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H36-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H37-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H37-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H38-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H38-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H39-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H39-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H4-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H4-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H40-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H40-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H41-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H41-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H42-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H42-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H43-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H43-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H44-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H44-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H45-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H45-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H46-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H46-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H47-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H47-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H48-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H48-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H5-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H5-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H6-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H6-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H7-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H7-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H8-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H8-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H9-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-H9-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I1-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I1-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I10-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I10-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I11-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I11-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I12-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I12-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I13-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I13-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I14-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I14-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I15-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I15-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I16-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I16-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I17-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I17-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I18-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I18-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I19-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I19-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I2-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I2-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I20-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I20-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I21-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I21-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I22-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I22-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I23-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I23-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I24-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I24-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I25-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I25-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I26-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I26-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I27-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I27-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I28-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I28-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I29-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I29-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I3-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I3-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I30-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I30-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I31-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I31-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I32-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I32-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I33-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I33-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I34-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I34-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I35-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I35-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I36-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I36-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I37-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I37-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I38-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I38-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I39-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I39-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I4-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I4-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I40-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I40-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I41-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I41-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I42-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I42-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I43-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I43-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I5-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I5-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I6-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I6-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I7-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I7-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I8-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I8-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I9-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-I9-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J1-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J1-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J10-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J10-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J11-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J11-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J12-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J12-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J13-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J13-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J14-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J14-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J15-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J15-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J16-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J16-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J17-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J17-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J18-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J18-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J19-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J19-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J2-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J2-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J20-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J20-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J21-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J21-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J22-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J22-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J23-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J23-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J24-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J24-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J25-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J25-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J26-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J26-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J27-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J27-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J28-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J28-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J29-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J29-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J3-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J3-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J30-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J30-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J31-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J31-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J32-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J32-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J33-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J33-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J34-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J34-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J35-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J35-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J36-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J36-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J37-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J37-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J38-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J38-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J39-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J39-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J4-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J4-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J40-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J40-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J41-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J41-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J42-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J42-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J43-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J43-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J44-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J44-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J45-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J45-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J46-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J46-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J5-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J5-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J6-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J6-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J7-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J7-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J8-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J8-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J9-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-J9-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K1-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K1-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K10-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K10-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K11-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K11-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K12-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K12-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K13-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K13-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K14-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K14-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K15-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K15-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K16-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K16-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K17-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K17-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K18-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K18-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K19-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K19-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K2-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K2-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K20-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K20-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K21-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K21-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K22-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K22-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K23-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K23-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K24-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K24-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K25-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K25-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K26-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K26-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K27-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K27-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K28-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K28-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K29-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K29-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K3-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K3-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K30-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K30-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K31-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K31-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K32-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K32-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K33-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K33-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K34-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K34-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K35-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K35-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K36-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K36-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K37-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K37-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K38-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K38-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K39-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K39-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K4-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K4-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K40-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K40-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K41-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K41-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K42-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K42-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K43-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K43-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K5-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K5-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K6-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K6-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K7-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K7-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K8-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K8-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K9-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-K9-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L1-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L1-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L10-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L10-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L11-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L11-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L12-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L12-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L13-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L13-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L14-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L14-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L15-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L15-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L16-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L16-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L17-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L17-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L18-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L18-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L19-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L19-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L2-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L2-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L20-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L20-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L21-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L21-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L22-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L22-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L23-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L23-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L24-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L24-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L25-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L25-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L26-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L26-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L27-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L27-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L28-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L28-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L29-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L29-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L3-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L3-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L30-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L30-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L31-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L31-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L32-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L32-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L33-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L33-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L34-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L34-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L35-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L35-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L36-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L36-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L37-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L37-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L38-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L38-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L39-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L39-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L4-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L4-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L5-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L5-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L6-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L6-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L7-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L7-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L8-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L8-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L9-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F2-L9-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G-H-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G-H-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'K-L-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'K-L-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'Rack-Reel-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'Space-E-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'Space-E-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'SpaceI-J-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'SpaceI-J-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'SpacewaittingKeep1-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'SpacewaittingKeep1-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'SpacewaittingKeep2-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'SpacewaittingKeep2-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'IRONCASE-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'IRONCASE-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'IRONCASE-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'REAR-A-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'REAR-A-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'REAR-A-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'REAR-B-C-BS', 'AREA ES F2', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'REAR-B-C-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'REAR-B-C-FG', 'AREA ES F2', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'REAR-D-E-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'REAR-D-E-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'REAR-F-G-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'REAR-F-G-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'REAR-H-I-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'REAR-H-I-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'REAR-J-K-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'REAR-J-K-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'REAR-L-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'REAR-L-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'HEAD-D-E-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'HEAD-D-E-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'HEAD-F-G-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'HEAD-F-G-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'HEAD-H-I-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'HEAD-H-I-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'HEAD-J-K-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'HEAD-J-K-RM', 'AREA ES F2', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'HEAD-L-WIP', 'AREA ES F2', now(), now(), 'WIP');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM TABLE "areas"`);
  }
}
