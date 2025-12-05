import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1700152781687 implements MigrationInterface {
    name = 'Migrations1700152781687'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "raw_material" DROP CONSTRAINT "FK_29db09d96881eb713fd94d6a449"`);
        await queryRunner.query(`ALTER TABLE "raw_material" DROP COLUMN "customer_id"`);
        await queryRunner.query(`ALTER TABLE "raw_material_item" ADD "customer_id" uuid`);
        await queryRunner.query(`ALTER TABLE "raw_material_item" ADD CONSTRAINT "FK_afbd62a962b3c010de059a118a5" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "raw_material_item" DROP CONSTRAINT "FK_afbd62a962b3c010de059a118a5"`);
        await queryRunner.query(`ALTER TABLE "raw_material_item" DROP COLUMN "customer_id"`);
        await queryRunner.query(`ALTER TABLE "raw_material" ADD "customer_id" uuid`);
        await queryRunner.query(`ALTER TABLE "raw_material" ADD CONSTRAINT "FK_29db09d96881eb713fd94d6a449" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
