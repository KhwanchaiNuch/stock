import { MigrationInterface, QueryRunner } from "typeorm";

export class AddMove1700681177297 implements MigrationInterface {
    name = 'AddMove1700681177297'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."history_type_enum" RENAME TO "history_type_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."history_type_enum" AS ENUM('Inbound', 'Outbound', 'Move', 'Inventory')`);
        await queryRunner.query(`ALTER TABLE "history" ALTER COLUMN "type" TYPE "public"."history_type_enum" USING "type"::"text"::"public"."history_type_enum"`);
        await queryRunner.query(`DROP TYPE "public"."history_type_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."history_type_enum_old" AS ENUM('Inbound', 'Outbound')`);
        await queryRunner.query(`ALTER TABLE "history" ALTER COLUMN "type" TYPE "public"."history_type_enum_old" USING "type"::"text"::"public"."history_type_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."history_type_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."history_type_enum_old" RENAME TO "history_type_enum"`);
    }

}
