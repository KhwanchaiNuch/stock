import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeToHaveDecimal1703517192716 implements MigrationInterface {
  name = 'ChangeToHaveDecimal1703517192716';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Step 1: Add the new column
    await queryRunner.query(
      `ALTER TABLE "history" ADD "new_amount" numeric(10,2) NOT NULL DEFAULT '0'`,
    );
    // Step 2: Update the new column with the old values
    await queryRunner.query(`UPDATE "history" SET "new_amount" = "amount"`);
    // Step 3: Drop the old column
    await queryRunner.query(`ALTER TABLE "history" DROP COLUMN "amount"`);
    // Step 4: Rename the new column to the original column name
    await queryRunner.query(
      `ALTER TABLE "history" RENAME COLUMN "new_amount" TO "amount"`,
    );

    await queryRunner.query(
      `ALTER TABLE "history" ADD "new_stock" numeric(10,2) NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(`UPDATE "history" SET "new_stock" = "stock"`);
    await queryRunner.query(`ALTER TABLE "history" DROP COLUMN "stock"`);
    await queryRunner.query(
      `ALTER TABLE "history" RENAME COLUMN "new_stock" TO "stock"`,
    );

    await queryRunner.query(
      `ALTER TABLE "raw_material_item" ADD "new_quantity" numeric(10,2) NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `UPDATE "raw_material_item" SET "new_quantity" = "quantity"`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" DROP COLUMN "quantity"`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" RENAME COLUMN "new_quantity" TO "quantity"`,
    );

    await queryRunner.query(
      `ALTER TABLE "raw_material_item" ADD "new_price" numeric(10,2) DEFAULT '0'`,
    );
    await queryRunner.query(
      `UPDATE "raw_material_item" SET "new_price" = "price"`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" DROP COLUMN "price"`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" RENAME COLUMN "new_price" TO "price"`,
    );

    await queryRunner.query(
      `ALTER TABLE "transaction" ADD "new_quantity" numeric(10,2) NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `UPDATE "transaction" SET "new_quantity" = "quantity"`,
    );
    await queryRunner.query(`ALTER TABLE "transaction" DROP COLUMN "quantity"`);
    await queryRunner.query(
      `ALTER TABLE "transaction" RENAME COLUMN "new_quantity" TO "quantity"`,
    );

    await queryRunner.query(
      `ALTER TABLE "transaction" ADD "new_price" numeric(10,2) NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(`UPDATE "transaction" SET "new_price" = "price"`);
    await queryRunner.query(`ALTER TABLE "transaction" DROP COLUMN "price"`);
    await queryRunner.query(
      `ALTER TABLE "transaction" RENAME COLUMN "new_price" TO "price"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "transaction" DROP COLUMN "price"`);
    await queryRunner.query(
      `ALTER TABLE "transaction" ADD "price" integer NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(`ALTER TABLE "transaction" DROP COLUMN "quantity"`);
    await queryRunner.query(
      `ALTER TABLE "transaction" ADD "quantity" integer NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" DROP COLUMN "price"`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" ADD "price" integer`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" DROP COLUMN "quantity"`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" ADD "quantity" integer NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(`ALTER TABLE "history" DROP COLUMN "stock"`);
    await queryRunner.query(
      `ALTER TABLE "history" ADD "stock" integer NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(`ALTER TABLE "history" DROP COLUMN "amount"`);
    await queryRunner.query(
      `ALTER TABLE "history" ADD "amount" integer NOT NULL DEFAULT '0'`,
    );
  }
}
