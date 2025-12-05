import { MigrationInterface, QueryRunner } from "typeorm";

export class AddBS1700488357043 implements MigrationInterface {
    name = 'AddBS1700488357043'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."areas_type_of_stock_enum" RENAME TO "areas_type_of_stock_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."areas_type_of_stock_enum" AS ENUM('FG', 'WIP', 'RM', 'BS')`);
        await queryRunner.query(`ALTER TABLE "areas" ALTER COLUMN "type_of_stock" TYPE "public"."areas_type_of_stock_enum" USING "type_of_stock"::"text"::"public"."areas_type_of_stock_enum"`);
        await queryRunner.query(`DROP TYPE "public"."areas_type_of_stock_enum_old"`);
        await queryRunner.query(`ALTER TYPE "public"."products_type_enum" RENAME TO "products_type_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."products_type_enum" AS ENUM('FG', 'WIP', 'RM', 'BS')`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "type" TYPE "public"."products_type_enum" USING "type"::"text"::"public"."products_type_enum"`);
        await queryRunner.query(`DROP TYPE "public"."products_type_enum_old"`);
        await queryRunner.query(`ALTER TYPE "public"."raw_material_stock_type_enum" RENAME TO "raw_material_stock_type_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."raw_material_stock_type_enum" AS ENUM('FG', 'WIP', 'RM', 'BS')`);
        await queryRunner.query(`ALTER TABLE "raw_material" ALTER COLUMN "stock_type" TYPE "public"."raw_material_stock_type_enum" USING "stock_type"::"text"::"public"."raw_material_stock_type_enum"`);
        await queryRunner.query(`DROP TYPE "public"."raw_material_stock_type_enum_old"`);
        await queryRunner.query(`ALTER TYPE "public"."raw_material_item_stock_type_enum" RENAME TO "raw_material_item_stock_type_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."raw_material_item_stock_type_enum" AS ENUM('FG', 'WIP', 'RM', 'BS')`);
        await queryRunner.query(`ALTER TABLE "raw_material_item" ALTER COLUMN "stock_type" TYPE "public"."raw_material_item_stock_type_enum" USING "stock_type"::"text"::"public"."raw_material_item_stock_type_enum"`);
        await queryRunner.query(`DROP TYPE "public"."raw_material_item_stock_type_enum_old"`);
        await queryRunner.query(`ALTER TYPE "public"."transaction_type_enum" RENAME TO "transaction_type_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."transaction_type_enum" AS ENUM('FG', 'WIP', 'RM', 'BS')`);
        await queryRunner.query(`ALTER TABLE "transaction" ALTER COLUMN "type" TYPE "public"."transaction_type_enum" USING "type"::"text"::"public"."transaction_type_enum"`);
        await queryRunner.query(`DROP TYPE "public"."transaction_type_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."transaction_type_enum_old" AS ENUM('RM', 'WIP', 'FG')`);
        await queryRunner.query(`ALTER TABLE "transaction" ALTER COLUMN "type" TYPE "public"."transaction_type_enum_old" USING "type"::"text"::"public"."transaction_type_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."transaction_type_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."transaction_type_enum_old" RENAME TO "transaction_type_enum"`);
        await queryRunner.query(`CREATE TYPE "public"."raw_material_item_stock_type_enum_old" AS ENUM('FG', 'WIP', 'RM')`);
        await queryRunner.query(`ALTER TABLE "raw_material_item" ALTER COLUMN "stock_type" TYPE "public"."raw_material_item_stock_type_enum_old" USING "stock_type"::"text"::"public"."raw_material_item_stock_type_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."raw_material_item_stock_type_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."raw_material_item_stock_type_enum_old" RENAME TO "raw_material_item_stock_type_enum"`);
        await queryRunner.query(`CREATE TYPE "public"."raw_material_stock_type_enum_old" AS ENUM('FG', 'WIP', 'RM')`);
        await queryRunner.query(`ALTER TABLE "raw_material" ALTER COLUMN "stock_type" TYPE "public"."raw_material_stock_type_enum_old" USING "stock_type"::"text"::"public"."raw_material_stock_type_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."raw_material_stock_type_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."raw_material_stock_type_enum_old" RENAME TO "raw_material_stock_type_enum"`);
        await queryRunner.query(`CREATE TYPE "public"."products_type_enum_old" AS ENUM('RM', 'WIP', 'FG')`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "type" TYPE "public"."products_type_enum_old" USING "type"::"text"::"public"."products_type_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."products_type_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."products_type_enum_old" RENAME TO "products_type_enum"`);
        await queryRunner.query(`CREATE TYPE "public"."areas_type_of_stock_enum_old" AS ENUM('FG', 'WIP', 'RM')`);
        await queryRunner.query(`ALTER TABLE "areas" ALTER COLUMN "type_of_stock" TYPE "public"."areas_type_of_stock_enum_old" USING "type_of_stock"::"text"::"public"."areas_type_of_stock_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."areas_type_of_stock_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."areas_type_of_stock_enum_old" RENAME TO "areas_type_of_stock_enum"`);
    }

}
