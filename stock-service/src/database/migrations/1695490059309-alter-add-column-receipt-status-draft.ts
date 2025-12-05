import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterAddColumnReceiptStatusDraft1695490059309 implements MigrationInterface {
    name = 'AlterAddColumnReceiptStatusDraft1695490059309'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."finish_good_status_enum" RENAME TO "finish_good_status_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."finish_good_status_enum" AS ENUM('COMPLETE', 'NOT_COMPLETE', 'DRAFT')`);
        await queryRunner.query(`ALTER TABLE "finish_good" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "finish_good" ALTER COLUMN "status" TYPE "public"."finish_good_status_enum" USING "status"::"text"::"public"."finish_good_status_enum"`);
        await queryRunner.query(`ALTER TABLE "finish_good" ALTER COLUMN "status" SET DEFAULT 'NOT_COMPLETE'`);
        await queryRunner.query(`DROP TYPE "public"."finish_good_status_enum_old"`);
        await queryRunner.query(`ALTER TYPE "public"."raw_material_status_enum" RENAME TO "raw_material_status_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."raw_material_status_enum" AS ENUM('COMPLETE', 'NOT_COMPLETE', 'DRAFT')`);
        await queryRunner.query(`ALTER TABLE "raw_material" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "raw_material" ALTER COLUMN "status" TYPE "public"."raw_material_status_enum" USING "status"::"text"::"public"."raw_material_status_enum"`);
        await queryRunner.query(`ALTER TABLE "raw_material" ALTER COLUMN "status" SET DEFAULT 'NOT_COMPLETE'`);
        await queryRunner.query(`DROP TYPE "public"."raw_material_status_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."raw_material_status_enum_old" AS ENUM('COMPLETE', 'NOT_COMPLETE')`);
        await queryRunner.query(`ALTER TABLE "raw_material" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "raw_material" ALTER COLUMN "status" TYPE "public"."raw_material_status_enum_old" USING "status"::"text"::"public"."raw_material_status_enum_old"`);
        await queryRunner.query(`ALTER TABLE "raw_material" ALTER COLUMN "status" SET DEFAULT 'NOT_COMPLETE'`);
        await queryRunner.query(`DROP TYPE "public"."raw_material_status_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."raw_material_status_enum_old" RENAME TO "raw_material_status_enum"`);
        await queryRunner.query(`CREATE TYPE "public"."finish_good_status_enum_old" AS ENUM('COMPLETE', 'NOT_COMPLETE')`);
        await queryRunner.query(`ALTER TABLE "finish_good" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "finish_good" ALTER COLUMN "status" TYPE "public"."finish_good_status_enum_old" USING "status"::"text"::"public"."finish_good_status_enum_old"`);
        await queryRunner.query(`ALTER TABLE "finish_good" ALTER COLUMN "status" SET DEFAULT 'NOT_COMPLETE'`);
        await queryRunner.query(`DROP TYPE "public"."finish_good_status_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."finish_good_status_enum_old" RENAME TO "finish_good_status_enum"`);
    }

}
