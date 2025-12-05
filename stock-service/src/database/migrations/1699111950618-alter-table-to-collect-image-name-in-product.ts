import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableToCollectImageNameInProduct1699111950618
  implements MigrationInterface
{
  name = 'AlterTableToCollectImageNameInProduct1699111950618';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "products" ADD "image_name" character varying`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."areas_type_of_stock_enum" AS ENUM('FG', 'RM')`,
    );
    await queryRunner.query(
      `ALTER TABLE "areas" ADD "type_of_stock" "public"."areas_type_of_stock_enum"`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."areas_support_type_enum" AS ENUM('INBOUND', 'OUTBOUND')`,
    );
    await queryRunner.query(
      `ALTER TABLE "areas" ADD "support_type" "public"."areas_support_type_enum"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "areas" DROP COLUMN "support_type"`);
    await queryRunner.query(`DROP TYPE "public"."areas_support_type_enum"`);
    await queryRunner.query(`ALTER TABLE "areas" DROP COLUMN "type_of_stock"`);
    await queryRunner.query(`DROP TYPE "public"."areas_type_of_stock_enum"`);
    await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "image_name"`);
  }
}
