import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1700146502632 implements MigrationInterface {
    name = 'Migrations1700146502632'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."finish_good_type_enum" AS ENUM('IN_BOUND', 'OUT_BOUND')`);
        await queryRunner.query(`ALTER TABLE "finish_good" ADD "type" "public"."finish_good_type_enum" NOT NULL DEFAULT 'IN_BOUND'`);
        await queryRunner.query(`ALTER TABLE "finish_good" ADD "customer_id" uuid`);
        await queryRunner.query(`CREATE TYPE "public"."raw_material_type_enum" AS ENUM('IN_BOUND', 'OUT_BOUND')`);
        await queryRunner.query(`ALTER TABLE "raw_material" ADD "type" "public"."raw_material_type_enum" NOT NULL DEFAULT 'IN_BOUND'`);
        await queryRunner.query(`ALTER TABLE "raw_material" ADD "customer_id" uuid`);
        await queryRunner.query(`ALTER TABLE "raw_material_item" ALTER COLUMN "price" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "finish_good" ADD CONSTRAINT "FK_4864df1e9e1764cddd0bd522fae" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "raw_material" ADD CONSTRAINT "FK_29db09d96881eb713fd94d6a449" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "raw_material" DROP CONSTRAINT "FK_29db09d96881eb713fd94d6a449"`);
        await queryRunner.query(`ALTER TABLE "finish_good" DROP CONSTRAINT "FK_4864df1e9e1764cddd0bd522fae"`);
        await queryRunner.query(`ALTER TABLE "raw_material_item" ALTER COLUMN "price" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "raw_material" DROP COLUMN "customer_id"`);
        await queryRunner.query(`ALTER TABLE "raw_material" DROP COLUMN "type"`);
        await queryRunner.query(`DROP TYPE "public"."raw_material_type_enum"`);
        await queryRunner.query(`ALTER TABLE "finish_good" DROP COLUMN "customer_id"`);
        await queryRunner.query(`ALTER TABLE "finish_good" DROP COLUMN "type"`);
        await queryRunner.query(`DROP TYPE "public"."finish_good_type_enum"`);
    }

}
