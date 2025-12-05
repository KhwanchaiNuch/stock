import { MigrationInterface, QueryRunner } from "typeorm";

export class FixEnumName1700400456202 implements MigrationInterface {
    name = 'FixEnaumName1700400456202'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."finish_good_type_enum" RENAME TO "finish_good_type_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."finish_good_type_enum" AS ENUM('INBOUND', 'OUTBOUND')`);
        await queryRunner.query(`ALTER TABLE "finish_good" ALTER COLUMN "type" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "finish_good" ALTER COLUMN "type" TYPE "public"."finish_good_type_enum" USING "type"::"text"::"public"."finish_good_type_enum"`);
        await queryRunner.query(`ALTER TABLE "finish_good" ALTER COLUMN "type" SET DEFAULT 'INBOUND'`);
        await queryRunner.query(`DROP TYPE "public"."finish_good_type_enum_old"`);
        await queryRunner.query(`ALTER TYPE "public"."raw_material_type_enum" RENAME TO "raw_material_type_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."raw_material_type_enum" AS ENUM('INBOUND', 'OUTBOUND')`);
        await queryRunner.query(`ALTER TABLE "raw_material" ALTER COLUMN "type" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "raw_material" ALTER COLUMN "type" TYPE "public"."raw_material_type_enum" USING "type"::"text"::"public"."raw_material_type_enum"`);
        await queryRunner.query(`ALTER TABLE "raw_material" ALTER COLUMN "type" SET DEFAULT 'INBOUND'`);
        await queryRunner.query(`DROP TYPE "public"."raw_material_type_enum_old"`);
        await queryRunner.query(`ALTER TYPE "public"."transaction_status_enum" RENAME TO "transaction_status_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."transaction_status_enum" AS ENUM('INBOUND', 'OUTBOUND', 'DRAFT', 'CREATED')`);
        await queryRunner.query(`ALTER TABLE "transaction" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "transaction" ALTER COLUMN "status" TYPE "public"."transaction_status_enum" USING "status"::"text"::"public"."transaction_status_enum"`);
        await queryRunner.query(`ALTER TABLE "transaction" ALTER COLUMN "status" SET DEFAULT 'INBOUND'`);
        await queryRunner.query(`DROP TYPE "public"."transaction_status_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."transaction_status_enum_old" AS ENUM('IN_BOUND', 'OUT_BOUND', 'DRAFT', 'CREATED')`);
        await queryRunner.query(`ALTER TABLE "transaction" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "transaction" ALTER COLUMN "status" TYPE "public"."transaction_status_enum_old" USING "status"::"text"::"public"."transaction_status_enum_old"`);
        await queryRunner.query(`ALTER TABLE "transaction" ALTER COLUMN "status" SET DEFAULT 'IN_BOUND'`);
        await queryRunner.query(`DROP TYPE "public"."transaction_status_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."transaction_status_enum_old" RENAME TO "transaction_status_enum"`);
        await queryRunner.query(`CREATE TYPE "public"."raw_material_type_enum_old" AS ENUM('IN_BOUND', 'OUT_BOUND')`);
        await queryRunner.query(`ALTER TABLE "raw_material" ALTER COLUMN "type" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "raw_material" ALTER COLUMN "type" TYPE "public"."raw_material_type_enum_old" USING "type"::"text"::"public"."raw_material_type_enum_old"`);
        await queryRunner.query(`ALTER TABLE "raw_material" ALTER COLUMN "type" SET DEFAULT 'IN_BOUND'`);
        await queryRunner.query(`DROP TYPE "public"."raw_material_type_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."raw_material_type_enum_old" RENAME TO "raw_material_type_enum"`);
        await queryRunner.query(`CREATE TYPE "public"."finish_good_type_enum_old" AS ENUM('IN_BOUND', 'OUT_BOUND')`);
        await queryRunner.query(`ALTER TABLE "finish_good" ALTER COLUMN "type" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "finish_good" ALTER COLUMN "type" TYPE "public"."finish_good_type_enum_old" USING "type"::"text"::"public"."finish_good_type_enum_old"`);
        await queryRunner.query(`ALTER TABLE "finish_good" ALTER COLUMN "type" SET DEFAULT 'IN_BOUND'`);
        await queryRunner.query(`DROP TYPE "public"."finish_good_type_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."finish_good_type_enum_old" RENAME TO "finish_good_type_enum"`);
    }

}
