import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableRmFgCreateColumnDate1694450865242
  implements MigrationInterface
{
  name = 'AlterTableRmFgCreateColumnDate1694450865242';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "finish_good" ADD "date" TIMESTAMP`);
    await queryRunner.query(`ALTER TABLE "raw_material" ADD "date" TIMESTAMP`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "raw_material" DROP COLUMN "date"`);
    await queryRunner.query(`ALTER TABLE "finish_good" DROP COLUMN "date"`);
  }
}
