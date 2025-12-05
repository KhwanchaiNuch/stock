import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1699734946270 implements MigrationInterface {
    name = 'Migrations1699734946270'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."products_type_enum" RENAME TO "products_type_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."products_type_enum" AS ENUM('RM', 'WIP', 'FG')`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "type" TYPE "public"."products_type_enum" USING "type"::"text"::"public"."products_type_enum"`);
        await queryRunner.query(`DROP TYPE "public"."products_type_enum_old"`);
        await queryRunner.query(`ALTER TYPE "public"."transaction_type_enum" RENAME TO "transaction_type_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."transaction_type_enum" AS ENUM('RM', 'WIP', 'FG')`);
        await queryRunner.query(`ALTER TABLE "transaction" ALTER COLUMN "type" TYPE "public"."transaction_type_enum" USING "type"::"text"::"public"."transaction_type_enum"`);
        await queryRunner.query(`DROP TYPE "public"."transaction_type_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."transaction_type_enum_old" AS ENUM('RM', 'FG')`);
        await queryRunner.query(`ALTER TABLE "transaction" ALTER COLUMN "type" TYPE "public"."transaction_type_enum_old" USING "type"::"text"::"public"."transaction_type_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."transaction_type_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."transaction_type_enum_old" RENAME TO "transaction_type_enum"`);
        await queryRunner.query(`CREATE TYPE "public"."products_type_enum_old" AS ENUM('RM', 'FG')`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "type" TYPE "public"."products_type_enum_old" USING "type"::"text"::"public"."products_type_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."products_type_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."products_type_enum_old" RENAME TO "products_type_enum"`);
    }

}
