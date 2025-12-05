import { MigrationInterface, QueryRunner } from "typeorm";

export class AddingCascadeIntoFgRmReceiptItem1697550624216 implements MigrationInterface {
    name = 'AddingCascadeIntoFgRmReceiptItem1697550624216'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "finish_good_item" DROP CONSTRAINT "FK_59c218ec625df7b789e0504f90f"`);
        await queryRunner.query(`ALTER TABLE "raw_material_item" DROP CONSTRAINT "FK_cc04c948683bf54e2f165b2ab55"`);
        await queryRunner.query(`ALTER TABLE "finish_good_item" ADD CONSTRAINT "FK_59c218ec625df7b789e0504f90f" FOREIGN KEY ("receipt_no") REFERENCES "finish_good"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "raw_material_item" ADD CONSTRAINT "FK_cc04c948683bf54e2f165b2ab55" FOREIGN KEY ("receipt_no") REFERENCES "raw_material"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "raw_material_item" DROP CONSTRAINT "FK_cc04c948683bf54e2f165b2ab55"`);
        await queryRunner.query(`ALTER TABLE "finish_good_item" DROP CONSTRAINT "FK_59c218ec625df7b789e0504f90f"`);
        await queryRunner.query(`ALTER TABLE "raw_material_item" ADD CONSTRAINT "FK_cc04c948683bf54e2f165b2ab55" FOREIGN KEY ("receipt_no") REFERENCES "raw_material"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "finish_good_item" ADD CONSTRAINT "FK_59c218ec625df7b789e0504f90f" FOREIGN KEY ("receipt_no") REFERENCES "finish_good"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
