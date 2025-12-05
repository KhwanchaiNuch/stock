import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableToCreateColumnNote1693318357535
  implements MigrationInterface
{
  name = 'AlterTableToCreateColumnNote1693318357535';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "areas" ADD "note" character varying`);
    await queryRunner.query(
      `ALTER TABLE "customers" ADD "note" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "suppliers" ADD "note" character varying`,
    );
    await queryRunner.query(`ALTER TABLE "users" ADD "note" character varying`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "note"`);
    await queryRunner.query(`ALTER TABLE "suppliers" DROP COLUMN "note"`);
    await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "note"`);
    await queryRunner.query(`ALTER TABLE "areas" DROP COLUMN "note"`);
  }
}
