import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddHide1704564185258 implements MigrationInterface {
  name = 'AddHide1704564185258';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "raw_material" ADD "is_hide" boolean`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "raw_material" DROP COLUMN "is_hide"`);
  }
}
