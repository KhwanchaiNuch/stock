import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableProductAddColumnType1692808881286
  implements MigrationInterface
{
  name = 'AlterTableProductAddColumnType1692808881286';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."products_type_enum" AS ENUM('RM', 'FG')`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" ADD "type" "public"."products_type_enum" NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "type"`);
    await queryRunner.query(`DROP TYPE "public"."products_type_enum"`);
  }
}
