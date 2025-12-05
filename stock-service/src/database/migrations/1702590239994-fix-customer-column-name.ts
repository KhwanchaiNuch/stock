import { MigrationInterface, QueryRunner } from 'typeorm';

export class FixCustomerColumnName1702590239994 implements MigrationInterface {
  name = 'FixCustomerColumnName1702590239994';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "createdAt"`);
    await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "updatedAt"`);
    await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "deletedAt"`);
    await queryRunner.query(
      `ALTER TABLE "customers" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "customers" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "customers" ADD "deleted_at" TIMESTAMP`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "deleted_at"`);
    await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "updated_at"`);
    await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "created_at"`);
    await queryRunner.query(
      `ALTER TABLE "customers" ADD "deletedAt" TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE "customers" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "customers" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
  }
}
