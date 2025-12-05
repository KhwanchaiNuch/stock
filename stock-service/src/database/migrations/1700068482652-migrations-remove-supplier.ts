import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1700068482652 implements MigrationInterface {
    name = 'Migrations1700068482652'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "finish_good_item" DROP CONSTRAINT "FK_e46cb2f072cb3a0c68d1709cc35"`);
        await queryRunner.query(`ALTER TABLE "raw_material_item" DROP CONSTRAINT "FK_8d3b942def182e8c8962a160307"`);
        await queryRunner.query(`ALTER TABLE "finish_good_item" DROP COLUMN "supplier_id"`);
        await queryRunner.query(`ALTER TABLE "raw_material_item" DROP COLUMN "supplier_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "raw_material_item" ADD "supplier_id" uuid`);
        await queryRunner.query(`ALTER TABLE "finish_good_item" ADD "supplier_id" uuid`);
        await queryRunner.query(`ALTER TABLE "raw_material_item" ADD CONSTRAINT "FK_8d3b942def182e8c8962a160307" FOREIGN KEY ("supplier_id") REFERENCES "suppliers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "finish_good_item" ADD CONSTRAINT "FK_e46cb2f072cb3a0c68d1709cc35" FOREIGN KEY ("supplier_id") REFERENCES "suppliers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
