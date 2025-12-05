import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1699878238205 implements MigrationInterface {
    name = 'Migrations1699878238205'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "areas" DROP COLUMN "support_type"`);
        await queryRunner.query(`DROP TYPE "public"."areas_support_type_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."areas_type_of_stock_enum" RENAME TO "areas_type_of_stock_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."areas_type_of_stock_enum" AS ENUM('FG', 'WIP', 'RM')`);
        await queryRunner.query(`ALTER TABLE "areas" ALTER COLUMN "type_of_stock" TYPE "public"."areas_type_of_stock_enum" USING "type_of_stock"::"text"::"public"."areas_type_of_stock_enum"`);
        await queryRunner.query(`DROP TYPE "public"."areas_type_of_stock_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."areas_type_of_stock_enum_old" AS ENUM('FG', 'RM')`);
        await queryRunner.query(`ALTER TABLE "areas" ALTER COLUMN "type_of_stock" TYPE "public"."areas_type_of_stock_enum_old" USING "type_of_stock"::"text"::"public"."areas_type_of_stock_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."areas_type_of_stock_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."areas_type_of_stock_enum_old" RENAME TO "areas_type_of_stock_enum"`);
        await queryRunner.query(`CREATE TYPE "public"."areas_support_type_enum" AS ENUM('INBOUND', 'OUTBOUND')`);
        await queryRunner.query(`ALTER TABLE "areas" ADD "support_type" "public"."areas_support_type_enum"`);
    }

}
