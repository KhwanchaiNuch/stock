import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationAddStockType1700386298822 implements MigrationInterface {
    name = 'MigrationAddStockType1700386298822'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."history_type_enum" AS ENUM('Inbound', 'Outbound')`);
        await queryRunner.query(`CREATE TABLE "history" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" "public"."history_type_enum" NOT NULL, "amount" integer NOT NULL, "stock" integer NOT NULL, "note" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "operator_id" uuid, "product_id" uuid, "area_id" uuid, CONSTRAINT "PK_9384942edf4804b38ca0ee51416" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "finish_good_item" ADD "price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "transaction" ADD "price" integer NOT NULL`);
        await queryRunner.query(`CREATE TYPE "public"."raw_material_stock_type_enum" AS ENUM('FG', 'WIP', 'RM')`);
        await queryRunner.query(`ALTER TABLE "raw_material" ADD "stock_type" "public"."raw_material_stock_type_enum" NOT NULL`);
        await queryRunner.query(`CREATE TYPE "public"."raw_material_item_stock_type_enum" AS ENUM('FG', 'WIP', 'RM')`);
        await queryRunner.query(`ALTER TABLE "raw_material_item" ADD "stock_type" "public"."raw_material_item_stock_type_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "raw_material_item" ADD "supplier_id" uuid`);
        await queryRunner.query(`ALTER TABLE "transaction" ALTER COLUMN "lotNo" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "transaction" ALTER COLUMN "item_id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "history" ADD CONSTRAINT "FK_84f2c9c5a1a5e8d8f7646932bc3" FOREIGN KEY ("operator_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "history" ADD CONSTRAINT "FK_bf8107a6917140d6af358acead1" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "history" ADD CONSTRAINT "FK_f0ae623bdaf66c7ee59597a8f52" FOREIGN KEY ("area_id") REFERENCES "areas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "raw_material_item" ADD CONSTRAINT "FK_8d3b942def182e8c8962a160307" FOREIGN KEY ("supplier_id") REFERENCES "suppliers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "raw_material_item" DROP CONSTRAINT "FK_8d3b942def182e8c8962a160307"`);
        await queryRunner.query(`ALTER TABLE "history" DROP CONSTRAINT "FK_f0ae623bdaf66c7ee59597a8f52"`);
        await queryRunner.query(`ALTER TABLE "history" DROP CONSTRAINT "FK_bf8107a6917140d6af358acead1"`);
        await queryRunner.query(`ALTER TABLE "history" DROP CONSTRAINT "FK_84f2c9c5a1a5e8d8f7646932bc3"`);
        await queryRunner.query(`ALTER TABLE "transaction" ALTER COLUMN "item_id" SET DEFAULT 'test'`);
        await queryRunner.query(`ALTER TABLE "transaction" ALTER COLUMN "lotNo" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "raw_material_item" DROP COLUMN "supplier_id"`);
        await queryRunner.query(`ALTER TABLE "raw_material_item" DROP COLUMN "stock_type"`);
        await queryRunner.query(`DROP TYPE "public"."raw_material_item_stock_type_enum"`);
        await queryRunner.query(`ALTER TABLE "raw_material" DROP COLUMN "stock_type"`);
        await queryRunner.query(`DROP TYPE "public"."raw_material_stock_type_enum"`);
        await queryRunner.query(`ALTER TABLE "transaction" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "finish_good_item" DROP COLUMN "price"`);
        await queryRunner.query(`DROP TABLE "history"`);
        await queryRunner.query(`DROP TYPE "public"."history_type_enum"`);
    }

}
