import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1700170721178 implements MigrationInterface {
    name = 'Migrations1700170721178'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transaction" ADD "item_id" character varying NOT NULL DEFAULT 'test'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transaction" DROP COLUMN "item_id"`);
    }

}
