import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertAreaF11702590240002 implements MigrationInterface {
  name = 'InsertAreaF11702590240002';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A6-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A6-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A6-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A6-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A5-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A5-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A5-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A5-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A4-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A4-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A4-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A4-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B6-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B6-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B6-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B6-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B5-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B5-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B5-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B5-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B4-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B4-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B4-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B4-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C6-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C6-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C6-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C6-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C5-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C5-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C5-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C5-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C4-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C4-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C4-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C4-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D11-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D11-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D11-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D11-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D10-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D10-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D10-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D10-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D14-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D14-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D14-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D14-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D8-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D8-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D8-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D8-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E6-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E6-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E6-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E6-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E5-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E5-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E5-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E5-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E4-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E4-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E4-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E4-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F9-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F9-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F9-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F9-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F8-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F8-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F8-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F8-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F7-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F7-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F7-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F7-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G6-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G6-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G6-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G6-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G5-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G5-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G5-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G5-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G4-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G4-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G4-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G4-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I7-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I7-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I7-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I7-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I6-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I6-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I6-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I6-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I5-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I5-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I5-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I5-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I4-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I4-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I4-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I4-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H18-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H18-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H18-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H17-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H17-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H17-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H16-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H16-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H16-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H15-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H15-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H15-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H14-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H14-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H14-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H13-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H13-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H13-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H12-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H12-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H12-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H11-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H11-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H11-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H10-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H10-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H10-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A3-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A3-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A3-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A3-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A2-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A2-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A2-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A2-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A1-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A1-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A1-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A1-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B3-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B3-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B3-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B3-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B2-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B2-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B2-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B2-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B1-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B1-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B1-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B1-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C3-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C3-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C3-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C3-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C2-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C2-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C2-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C2-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C1-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C1-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C1-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C1-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D12-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D12-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D12-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D12-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E3-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E3-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E3-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E3-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E2-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E2-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E2-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E2-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E1-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E1-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E1-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E1-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F12-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F12-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F12-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F12-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F11-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F11-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F11-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F11-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F10-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F10-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F10-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F10-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G3-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G3-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G3-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G3-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G2-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G2-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G2-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G2-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G1-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G1-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G1-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G1-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I3-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I3-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I3-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I3-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I2-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I2-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I2-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I2-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I1-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I1-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I1-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I1-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H9-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H9-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H9-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H8-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H8-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H8-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H7-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H7-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H7-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H6-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H6-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H6-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H5-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H5-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H5-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H4-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H4-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H4-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H3-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H3-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H3-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H2-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H2-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H2-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H1-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H1-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H1-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'Space-INCOME-F1-R1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'Space-INCOME-F1-R1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'Space-INCOME-F1-R1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'Space-INCOME-F1-R1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'Space-INCOME-F1-R2-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'Space-INCOME-F1-R2-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'Space-INCOME-F1-R2-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'Space-INCOME-F1-R2-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A9-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A9-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A9-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A9-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A8-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A8-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A8-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A8-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A7-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A7-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A7-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A7-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B9-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B9-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B9-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B9-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B8-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B8-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B8-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B8-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B7-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B7-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B7-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'B7-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C9-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C9-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C9-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C9-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C8-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C8-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C8-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C8-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C7-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C7-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C7-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C7-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D7-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D7-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D7-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D7-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D6-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D6-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D6-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D6-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D13-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D13-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D13-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D13-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D4-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D4-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D4-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D4-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E9-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E9-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E9-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E9-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E8-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E8-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E8-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E8-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E7-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E7-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E7-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E7-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F6-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F6-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F6-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F6-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F5-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F5-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F5-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F5-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F4-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F4-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F4-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'F4-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G9-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G9-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G9-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G9-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G8-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G8-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G8-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G8-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G7-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G7-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G7-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'G7-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I11-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I11-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I11-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I11-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I10-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I10-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I10-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I10-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I9-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I9-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I9-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I9-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I8-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I8-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I8-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I8-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H27-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H27-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H27-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H26-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H26-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H26-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H25-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H25-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H25-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H24-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H24-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H24-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H23-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H23-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H23-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H22-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H22-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H22-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H21-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H21-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H21-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H20-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H20-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H20-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H19-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H19-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H19-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A12-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A12-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A12-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A12-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A11-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A11-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A11-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A11-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A10-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A10-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A10-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'A10-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C12-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C12-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C12-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C12-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C11-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C11-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C11-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C11-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C10-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C10-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C10-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'C10-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D3-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D3-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D3-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D3-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D2-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D2-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D2-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D2-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D1-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D1-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D1-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'D1-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E12-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E12-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E12-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E12-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E11-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E11-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E11-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E11-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E10-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E10-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E10-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'E10-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I17-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I17-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I17-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I17-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I16-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I16-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I16-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I16-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I15-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I15-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I15-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I15-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I14-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I14-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I14-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I14-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I13-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I13-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I13-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I13-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I12-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I12-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I12-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'I12-F1-BS', 'AREA ES F1', now(), now(), 'BS');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H36-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H36-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H36-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H35-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H35-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H35-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H34-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H34-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H34-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H33-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H33-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H33-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H32-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H32-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H32-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H31-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H31-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H31-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H30-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H30-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H30-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H29-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H29-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H29-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H28-F1-RM', 'AREA ES F1', now(), now(), 'RM');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H28-F1-WIP', 'AREA ES F1', now(), now(), 'WIP');`,
    );
    await queryRunner.query(
      `INSERT INTO areas (id, area_no, area_name, "createdAt", "updatedAt", type_of_stock) VALUES(uuid_generate_v4(), 'H28-F1-FG', 'AREA ES F1', now(), now(), 'FG');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM TABLE "areas"`);
  }
}
