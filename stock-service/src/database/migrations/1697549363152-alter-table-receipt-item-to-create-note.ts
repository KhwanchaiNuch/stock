import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableReceiptItemToCreateNote1697549363152
  implements MigrationInterface
{
  name = 'AlterTableReceiptItemToCreateNote1697549363152';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "finish_good_item" ADD "note" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" ADD "note" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" DROP COLUMN "note"`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good_item" DROP COLUMN "note"`,
    );
  }
}
