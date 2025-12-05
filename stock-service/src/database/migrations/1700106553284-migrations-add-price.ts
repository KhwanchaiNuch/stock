import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1700106553284 implements MigrationInterface {
    name = 'Migrations1700106553284'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "raw_material_item" ADD "price" integer NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "raw_material_item" DROP COLUMN "price"`);
    }

}
