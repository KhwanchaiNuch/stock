import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeToHaveDecimalInventory1703524864348
  implements MigrationInterface
{
  name = 'ChangeToHaveDecimalInventory1703524864348';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "inventory" ADD COLUMN "new_inventoryCount" numeric(10,2) NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `UPDATE "inventory" SET "new_inventoryCount" = "inventoryCount"`,
    );
    await queryRunner.query(
      `ALTER TABLE "inventory" DROP COLUMN "inventoryCount"`,
    );
    await queryRunner.query(
      `ALTER TABLE "inventory" ADD "inventoryCount" numeric(10,2) NOT NULL DEFAULT '0'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "inventory" DROP COLUMN "inventoryCount"`,
    );
    await queryRunner.query(
      `ALTER TABLE "inventory" ADD "inventoryCount" integer NOT NULL`,
    );
  }
}
