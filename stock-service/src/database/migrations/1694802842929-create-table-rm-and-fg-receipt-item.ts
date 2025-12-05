import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableRmAndFgReceiptItem1694802842929
  implements MigrationInterface
{
  name = 'CreateTableRmAndFgReceiptItem1694802842929';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "finish_good" DROP CONSTRAINT "FK_08c734c24c80e5140d3da142b98"`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good" DROP CONSTRAINT "FK_3b176fe20f86eb6e4a605850b88"`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good" DROP CONSTRAINT "FK_f5468a8d680d7f79d8cb47cc8b3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material" DROP CONSTRAINT "FK_d09d2b599b60cb7b290e78d96b6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material" DROP CONSTRAINT "FK_3d2980c3ec73a01593394874e35"`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material" DROP CONSTRAINT "FK_f1720f66d24bdddd6a521aa4995"`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."finish_good_item_status_enum" AS ENUM('WAITING', 'INBOUND', 'OUTBOUND')`,
    );
    await queryRunner.query(
      `CREATE TABLE "finish_good_item" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" integer NOT NULL, "invoice_no" character varying NOT NULL, "lot_number" character varying NOT NULL, "date" TIMESTAMP, "status" "public"."finish_good_item_status_enum" NOT NULL DEFAULT 'WAITING', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "receipt_no" uuid, "supplier_id" uuid, "product_id" uuid, "received_by" uuid, CONSTRAINT "PK_c13aca2a43f1daf31cb290e0769" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."raw_material_item_status_enum" AS ENUM('WAITING', 'INBOUND', 'OUTBOUND')`,
    );
    await queryRunner.query(
      `CREATE TABLE "raw_material_item" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" integer NOT NULL, "invoice_no" character varying NOT NULL, "lot_number" character varying NOT NULL, "date" TIMESTAMP, "status" "public"."raw_material_item_status_enum" NOT NULL DEFAULT 'WAITING', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "receipt_no" uuid, "supplier_id" uuid, "product_id" uuid, "received_by" uuid, CONSTRAINT "PK_f5e86bf7664f8c01c1915b2761f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`ALTER TABLE "finish_good" DROP COLUMN "date"`);
    await queryRunner.query(
      `ALTER TABLE "finish_good" DROP COLUMN "received_by"`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good" DROP COLUMN "product_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good" DROP COLUMN "supplier_id"`,
    );
    await queryRunner.query(`ALTER TABLE "finish_good" DROP COLUMN "quantity"`);
    await queryRunner.query(
      `ALTER TABLE "finish_good" DROP COLUMN "lot_number"`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good" DROP COLUMN "invoice_no"`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material" DROP COLUMN "quantity"`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material" DROP COLUMN "supplier_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material" DROP COLUMN "product_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material" DROP COLUMN "received_by"`,
    );
    await queryRunner.query(`ALTER TABLE "raw_material" DROP COLUMN "date"`);
    await queryRunner.query(
      `ALTER TABLE "raw_material" DROP COLUMN "invoice_no"`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material" DROP COLUMN "lot_number"`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good_item" ADD CONSTRAINT "FK_59c218ec625df7b789e0504f90f" FOREIGN KEY ("receipt_no") REFERENCES "finish_good"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good_item" ADD CONSTRAINT "FK_e46cb2f072cb3a0c68d1709cc35" FOREIGN KEY ("supplier_id") REFERENCES "suppliers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good_item" ADD CONSTRAINT "FK_c061458b3b84780613aae92965e" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good_item" ADD CONSTRAINT "FK_8912ae38cf598e6eb52d042b198" FOREIGN KEY ("received_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" ADD CONSTRAINT "FK_cc04c948683bf54e2f165b2ab55" FOREIGN KEY ("receipt_no") REFERENCES "raw_material"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" ADD CONSTRAINT "FK_8d3b942def182e8c8962a160307" FOREIGN KEY ("supplier_id") REFERENCES "suppliers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" ADD CONSTRAINT "FK_7c68792b19aef84db4c03d185ef" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" ADD CONSTRAINT "FK_6110fb9dd767a9292d33bb3dfc1" FOREIGN KEY ("received_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" DROP CONSTRAINT "FK_6110fb9dd767a9292d33bb3dfc1"`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" DROP CONSTRAINT "FK_7c68792b19aef84db4c03d185ef"`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" DROP CONSTRAINT "FK_8d3b942def182e8c8962a160307"`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" DROP CONSTRAINT "FK_cc04c948683bf54e2f165b2ab55"`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good_item" DROP CONSTRAINT "FK_8912ae38cf598e6eb52d042b198"`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good_item" DROP CONSTRAINT "FK_c061458b3b84780613aae92965e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good_item" DROP CONSTRAINT "FK_e46cb2f072cb3a0c68d1709cc35"`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good_item" DROP CONSTRAINT "FK_59c218ec625df7b789e0504f90f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material" ADD "lot_number" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material" ADD "invoice_no" character varying NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "raw_material" ADD "date" TIMESTAMP`);
    await queryRunner.query(
      `ALTER TABLE "raw_material" ADD "received_by" uuid`,
    );
    await queryRunner.query(`ALTER TABLE "raw_material" ADD "product_id" uuid`);
    await queryRunner.query(
      `ALTER TABLE "raw_material" ADD "supplier_id" uuid`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material" ADD "quantity" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good" ADD "invoice_no" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good" ADD "lot_number" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good" ADD "quantity" integer NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "finish_good" ADD "supplier_id" uuid`);
    await queryRunner.query(`ALTER TABLE "finish_good" ADD "product_id" uuid`);
    await queryRunner.query(`ALTER TABLE "finish_good" ADD "received_by" uuid`);
    await queryRunner.query(`ALTER TABLE "finish_good" ADD "date" TIMESTAMP`);
    await queryRunner.query(`DROP TABLE "raw_material_item"`);
    await queryRunner.query(
      `DROP TYPE "public"."raw_material_item_status_enum"`,
    );
    await queryRunner.query(`DROP TABLE "finish_good_item"`);
    await queryRunner.query(
      `DROP TYPE "public"."finish_good_item_status_enum"`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material" ADD CONSTRAINT "FK_f1720f66d24bdddd6a521aa4995" FOREIGN KEY ("received_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material" ADD CONSTRAINT "FK_3d2980c3ec73a01593394874e35" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material" ADD CONSTRAINT "FK_d09d2b599b60cb7b290e78d96b6" FOREIGN KEY ("supplier_id") REFERENCES "suppliers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good" ADD CONSTRAINT "FK_f5468a8d680d7f79d8cb47cc8b3" FOREIGN KEY ("supplier_id") REFERENCES "suppliers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good" ADD CONSTRAINT "FK_3b176fe20f86eb6e4a605850b88" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good" ADD CONSTRAINT "FK_08c734c24c80e5140d3da142b98" FOREIGN KEY ("received_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
