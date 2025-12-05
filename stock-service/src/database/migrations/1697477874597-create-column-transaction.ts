import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateColumnTransaction1697477874597
  implements MigrationInterface
{
  name = 'CreateColumnTransaction1697477874597';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."transaction_status_enum" AS ENUM('IN_BOUND', 'OUT_BOUND', 'DRAFT', 'CREATED')`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."transaction_type_enum" AS ENUM('RM', 'FG')`,
    );
    await queryRunner.query(
      `CREATE TABLE "transaction" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "receipt_no" character varying NOT NULL, "status" "public"."transaction_status_enum" NOT NULL DEFAULT 'IN_BOUND', "quantity" integer NOT NULL, "lotNo" character varying NOT NULL, "type" "public"."transaction_type_enum" NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "areaId" uuid, "scan_by" uuid, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "transaction" ADD CONSTRAINT "FK_40fbbde3be10e8b64a4514c37f6" FOREIGN KEY ("areaId") REFERENCES "areas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "transaction" ADD CONSTRAINT "FK_83819f9359a2effdd20a52c58d3" FOREIGN KEY ("scan_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "transaction" DROP CONSTRAINT "FK_83819f9359a2effdd20a52c58d3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "transaction" DROP CONSTRAINT "FK_40fbbde3be10e8b64a4514c37f6"`,
    );
    await queryRunner.query(`DROP TABLE "transaction"`);
    await queryRunner.query(`DROP TYPE "public"."transaction_type_enum"`);
    await queryRunner.query(`DROP TYPE "public"."transaction_status_enum"`);
  }
}
