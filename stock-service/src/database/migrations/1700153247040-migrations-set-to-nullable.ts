import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1700153247040 implements MigrationInterface {
    name = 'Migrations1700153247040'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "raw_material_item" ALTER COLUMN "price" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "raw_material_item" ALTER COLUMN "invoice_no" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "raw_material_item" ALTER COLUMN "lot_number" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "raw_material_item" ALTER COLUMN "lot_number" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "raw_material_item" ALTER COLUMN "invoice_no" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "raw_material_item" ALTER COLUMN "price" SET NOT NULL`);
    }

}
