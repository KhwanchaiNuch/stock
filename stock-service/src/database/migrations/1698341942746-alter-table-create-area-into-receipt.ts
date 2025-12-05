import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableCreateAreaIntoReceipt1698341942746 implements MigrationInterface {
    name = 'AlterTableCreateAreaIntoReceipt1698341942746'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "finish_good" ADD "area_id" uuid`);
        await queryRunner.query(`ALTER TABLE "raw_material" ADD "area_id" uuid`);
        await queryRunner.query(`ALTER TABLE "finish_good" ADD CONSTRAINT "FK_1d226e71454f4fd48fe12fb076c" FOREIGN KEY ("area_id") REFERENCES "areas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "raw_material" ADD CONSTRAINT "FK_712de38ebf4b3a6a0b4f473d4b4" FOREIGN KEY ("area_id") REFERENCES "areas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "raw_material" DROP CONSTRAINT "FK_712de38ebf4b3a6a0b4f473d4b4"`);
        await queryRunner.query(`ALTER TABLE "finish_good" DROP CONSTRAINT "FK_1d226e71454f4fd48fe12fb076c"`);
        await queryRunner.query(`ALTER TABLE "raw_material" DROP COLUMN "area_id"`);
        await queryRunner.query(`ALTER TABLE "finish_good" DROP COLUMN "area_id"`);
    }

}
