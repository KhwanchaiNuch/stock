import { MigrationInterface, QueryRunner } from "typeorm";

export class AddHold2ToReceiptItemStatus1785944027675 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "raw_material_item_status_enum" ADD VALUE IF NOT EXISTS 'HOLD2'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // PostgreSQL ไม่รองรับการลบ enum value โดยตรง
    }

}
