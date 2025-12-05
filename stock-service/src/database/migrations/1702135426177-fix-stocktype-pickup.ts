import { MigrationInterface, QueryRunner } from "typeorm";

export class FixStocktypePickup1702135426177 implements MigrationInterface {
    name = 'FixStocktypePickup1702135426177'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "raw_material" ALTER COLUMN "stock_type" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "raw_material" ALTER COLUMN "stock_type" SET NOT NULL`);
    }

}
