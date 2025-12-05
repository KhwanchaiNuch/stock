import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddStatusIntoFgRm1695315243275 implements MigrationInterface {
  name = 'AddStatusIntoFgRm1695315243275';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "finish_good" ADD "user_id" uuid`);
    await queryRunner.query(`ALTER TABLE "finish_good" ADD "created_by" uuid`);
    await queryRunner.query(
      `ALTER TABLE "finish_good_item" ADD "created_by" uuid`,
    );
    await queryRunner.query(`ALTER TABLE "raw_material" ADD "user_id" uuid`);
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" ADD "created_by" uuid`,
    );
    await queryRunner.query(
      `ALTER TABLE "customers" ADD CONSTRAINT "UQ_ec77710c68d5f06efcd4c9a5661" UNIQUE ("customer_no")`,
    );
    await queryRunner.query(
      `ALTER TABLE "areas" ADD CONSTRAINT "UQ_051ddcc18f16c9506ac89fa35f4" UNIQUE ("area_no")`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" ADD CONSTRAINT "UQ_203dc09c7b2d57dabdb127d4cec" UNIQUE ("part_no")`,
    );
    await queryRunner.query(
      `ALTER TYPE "public"."finish_good_item_status_enum" RENAME TO "finish_good_item_status_enum_old"`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."finish_good_item_status_enum" AS ENUM('WAITING', 'INBOUND', 'OUTBOUND', 'DRAFT')`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good_item" ALTER COLUMN "status" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good_item" ALTER COLUMN "status" TYPE "public"."finish_good_item_status_enum" USING "status"::"text"::"public"."finish_good_item_status_enum"`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good_item" ALTER COLUMN "status" SET DEFAULT 'WAITING'`,
    );
    await queryRunner.query(
      `DROP TYPE "public"."finish_good_item_status_enum_old"`,
    );
    await queryRunner.query(
      `ALTER TYPE "public"."fg_transaction_status_enum" RENAME TO "fg_transaction_status_enum_old"`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."fg_transaction_status_enum" AS ENUM('IN_BOUND', 'OUT_BOUND', 'DRAFT', 'CREATED')`,
    );
    await queryRunner.query(
      `ALTER TABLE "fg_transaction" ALTER COLUMN "status" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "fg_transaction" ALTER COLUMN "status" TYPE "public"."fg_transaction_status_enum" USING "status"::"text"::"public"."fg_transaction_status_enum"`,
    );
    await queryRunner.query(
      `ALTER TABLE "fg_transaction" ALTER COLUMN "status" SET DEFAULT 'IN_BOUND'`,
    );
    await queryRunner.query(
      `DROP TYPE "public"."fg_transaction_status_enum_old"`,
    );
    await queryRunner.query(
      `ALTER TYPE "public"."raw_material_item_status_enum" RENAME TO "raw_material_item_status_enum_old"`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."raw_material_item_status_enum" AS ENUM('WAITING', 'INBOUND', 'OUTBOUND', 'DRAFT')`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" ALTER COLUMN "status" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" ALTER COLUMN "status" TYPE "public"."raw_material_item_status_enum" USING "status"::"text"::"public"."raw_material_item_status_enum"`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" ALTER COLUMN "status" SET DEFAULT 'WAITING'`,
    );
    await queryRunner.query(
      `DROP TYPE "public"."raw_material_item_status_enum_old"`,
    );
    await queryRunner.query(
      `ALTER TYPE "public"."rm-transaction_status_enum" RENAME TO "rm-transaction_status_enum_old"`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."rm-transaction_status_enum" AS ENUM('IN_BOUND', 'OUT_BOUND', 'DRAFT', 'CREATED')`,
    );
    await queryRunner.query(
      `ALTER TABLE "rm-transaction" ALTER COLUMN "status" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "rm-transaction" ALTER COLUMN "status" TYPE "public"."rm-transaction_status_enum" USING "status"::"text"::"public"."rm-transaction_status_enum"`,
    );
    await queryRunner.query(
      `ALTER TABLE "rm-transaction" ALTER COLUMN "status" SET DEFAULT 'IN_BOUND'`,
    );
    await queryRunner.query(
      `DROP TYPE "public"."rm-transaction_status_enum_old"`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good" ADD CONSTRAINT "FK_240f337b2f3400b43d837b28653" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good" ADD CONSTRAINT "FK_930b416f3f4612ac04337696bf5" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good_item" ADD CONSTRAINT "FK_6f74c0f9c64e6cbb0f12a008f3e" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material" ADD CONSTRAINT "FK_ce4741508f104a1ff9add34098e" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" ADD CONSTRAINT "FK_053faaf9175229a5b0c2343a0ee" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" DROP CONSTRAINT "FK_053faaf9175229a5b0c2343a0ee"`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material" DROP CONSTRAINT "FK_ce4741508f104a1ff9add34098e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good_item" DROP CONSTRAINT "FK_6f74c0f9c64e6cbb0f12a008f3e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good" DROP CONSTRAINT "FK_930b416f3f4612ac04337696bf5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good" DROP CONSTRAINT "FK_240f337b2f3400b43d837b28653"`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."rm-transaction_status_enum_old" AS ENUM('IN_BOUND', 'OUT_BOUND')`,
    );
    await queryRunner.query(
      `ALTER TABLE "rm-transaction" ALTER COLUMN "status" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "rm-transaction" ALTER COLUMN "status" TYPE "public"."rm-transaction_status_enum_old" USING "status"::"text"::"public"."rm-transaction_status_enum_old"`,
    );
    await queryRunner.query(
      `ALTER TABLE "rm-transaction" ALTER COLUMN "status" SET DEFAULT 'IN_BOUND'`,
    );
    await queryRunner.query(`DROP TYPE "public"."rm-transaction_status_enum"`);
    await queryRunner.query(
      `ALTER TYPE "public"."rm-transaction_status_enum_old" RENAME TO "rm-transaction_status_enum"`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."raw_material_item_status_enum_old" AS ENUM('WAITING', 'INBOUND', 'OUTBOUND')`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" ALTER COLUMN "status" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" ALTER COLUMN "status" TYPE "public"."raw_material_item_status_enum_old" USING "status"::"text"::"public"."raw_material_item_status_enum_old"`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" ALTER COLUMN "status" SET DEFAULT 'WAITING'`,
    );
    await queryRunner.query(
      `DROP TYPE "public"."raw_material_item_status_enum"`,
    );
    await queryRunner.query(
      `ALTER TYPE "public"."raw_material_item_status_enum_old" RENAME TO "raw_material_item_status_enum"`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."fg_transaction_status_enum_old" AS ENUM('IN_BOUND', 'OUT_BOUND')`,
    );
    await queryRunner.query(
      `ALTER TABLE "fg_transaction" ALTER COLUMN "status" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "fg_transaction" ALTER COLUMN "status" TYPE "public"."fg_transaction_status_enum_old" USING "status"::"text"::"public"."fg_transaction_status_enum_old"`,
    );
    await queryRunner.query(
      `ALTER TABLE "fg_transaction" ALTER COLUMN "status" SET DEFAULT 'IN_BOUND'`,
    );
    await queryRunner.query(`DROP TYPE "public"."fg_transaction_status_enum"`);
    await queryRunner.query(
      `ALTER TYPE "public"."fg_transaction_status_enum_old" RENAME TO "fg_transaction_status_enum"`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."finish_good_item_status_enum_old" AS ENUM('WAITING', 'INBOUND', 'OUTBOUND')`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good_item" ALTER COLUMN "status" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good_item" ALTER COLUMN "status" TYPE "public"."finish_good_item_status_enum_old" USING "status"::"text"::"public"."finish_good_item_status_enum_old"`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good_item" ALTER COLUMN "status" SET DEFAULT 'WAITING'`,
    );
    await queryRunner.query(
      `DROP TYPE "public"."finish_good_item_status_enum"`,
    );
    await queryRunner.query(
      `ALTER TYPE "public"."finish_good_item_status_enum_old" RENAME TO "finish_good_item_status_enum"`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" DROP CONSTRAINT "UQ_203dc09c7b2d57dabdb127d4cec"`,
    );
    await queryRunner.query(
      `ALTER TABLE "areas" DROP CONSTRAINT "UQ_051ddcc18f16c9506ac89fa35f4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "customers" DROP CONSTRAINT "UQ_ec77710c68d5f06efcd4c9a5661"`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" DROP COLUMN "created_by"`,
    );
    await queryRunner.query(`ALTER TABLE "raw_material" DROP COLUMN "user_id"`);
    await queryRunner.query(
      `ALTER TABLE "finish_good_item" DROP COLUMN "created_by"`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good" DROP COLUMN "created_by"`,
    );
    await queryRunner.query(`ALTER TABLE "finish_good" DROP COLUMN "user_id"`);
  }
}
