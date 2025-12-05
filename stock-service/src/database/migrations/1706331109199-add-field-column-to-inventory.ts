import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddFieldColumnToInventory1706331109199
  implements MigrationInterface
{
  name = 'AddFieldColumnToInventory1706331109199';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "inventory" DROP COLUMN "new_inventoryCount"`,
    );
    await queryRunner.query(
      `ALTER TABLE "inventory" ADD "stockCount" numeric(10,2) NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE "inventory" ADD "isDiff" boolean NOT NULL DEFAULT false`,
    );
    await queryRunner.query(
      `UPDATE inventory as i
        SET "isDiff" = (
        SELECT (stockIn - stockOut - i."inventoryCount") <> 0
        FROM (
            SELECT 
            (SELECT COALESCE(SUM(quantity), 0) 
            FROM "transaction" as t
            WHERE t."item_id"::uuid = i.receipt_item
                AND status = 'INBOUND') AS stockIn,
            (SELECT COALESCE(SUM(quantity), 0) 
            FROM "transaction" as t
            WHERE t."item_id"::uuid = i.receipt_item 
                AND status = 'OUTBOUND') AS stockOut
        ) AS subquery
        ), "stockCount" = (
        SELECT (stockIn - stockOut)
        FROM (
            SELECT 
            (SELECT COALESCE(SUM(quantity), 0) 
            FROM "transaction" as t
            WHERE t."item_id"::uuid = i.receipt_item
                AND status = 'INBOUND') AS stockIn,
            (SELECT COALESCE(SUM(quantity), 0) 
            FROM "transaction" as t
            WHERE t."item_id"::uuid = i.receipt_item 
                AND status = 'OUTBOUND') AS stockOut
        ) AS subquery
        )
        WHERE EXISTS (
        SELECT 1
        FROM "transaction" as t
        WHERE t."item_id"::uuid = i.receipt_item
        );`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "inventory" DROP COLUMN "isDiff"`);
    await queryRunner.query(`ALTER TABLE "inventory" DROP COLUMN "stockCount"`);
    await queryRunner.query(
      `ALTER TABLE "inventory" ADD "new_inventoryCount" numeric(10,2) NOT NULL DEFAULT '0'`,
    );
  }
}
