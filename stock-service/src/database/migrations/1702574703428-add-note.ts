import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNote1702574703428 implements MigrationInterface {
    name = 'AddNote1702574703428'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "raw_material" ADD "note" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "raw_material" DROP COLUMN "note"`);
    }

}
