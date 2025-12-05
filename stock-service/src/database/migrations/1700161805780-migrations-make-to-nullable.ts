import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1700161805780 implements MigrationInterface {
    name = 'Migrations1700161805780'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transaction" ALTER COLUMN "lotNo" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transaction" ALTER COLUMN "lotNo" SET NOT NULL`);
    }

}
