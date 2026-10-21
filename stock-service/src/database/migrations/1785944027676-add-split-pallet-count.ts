import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddSplitPalletCount1785944027676 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" ADD COLUMN IF NOT EXISTS "split_pallet_count" integer DEFAULT 0`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "raw_material_item" DROP COLUMN IF EXISTS "split_pallet_count"`,
    );
  }
}
