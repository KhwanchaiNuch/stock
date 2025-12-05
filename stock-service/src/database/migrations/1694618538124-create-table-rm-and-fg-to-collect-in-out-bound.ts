import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableRmAndFgToCollectInOutBound1694618538124
  implements MigrationInterface
{
  name = 'CreateTableRmAndFgToCollectInOutBound1694618538124';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."fg_transaction_status_enum" AS ENUM('IN_BOUND', 'OUT_BOUND')`,
    );
    await queryRunner.query(
      `CREATE TABLE "fg_transaction" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" "public"."fg_transaction_status_enum" NOT NULL DEFAULT 'IN_BOUND', "quantity" integer NOT NULL, "lotNo" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "receipt_no" uuid, "areaId" uuid, CONSTRAINT "PK_564a8b0cecd0eb8f74241c5330f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."rm-transaction_status_enum" AS ENUM('IN_BOUND', 'OUT_BOUND')`,
    );
    await queryRunner.query(
      `CREATE TABLE "rm-transaction" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" "public"."rm-transaction_status_enum" NOT NULL DEFAULT 'IN_BOUND', "quantity" integer NOT NULL, "lotNo" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "receipt_no" uuid, "areaId" uuid, CONSTRAINT "PK_f8cf03760d757d0863f1eb07ea5" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good" ADD "receipt_no" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material" ADD "receipt_no" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "fg_transaction" ADD CONSTRAINT "FK_9f81c26b232f6816f107ce0f000" FOREIGN KEY ("receipt_no") REFERENCES "finish_good"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "fg_transaction" ADD CONSTRAINT "FK_aaf548e753c4a2059acb60231ec" FOREIGN KEY ("areaId") REFERENCES "areas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "rm-transaction" ADD CONSTRAINT "FK_a8d922167595e37527c393a4d4b" FOREIGN KEY ("receipt_no") REFERENCES "raw_material"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "rm-transaction" ADD CONSTRAINT "FK_a40b3fbc93feb132e01bd01b0cf" FOREIGN KEY ("areaId") REFERENCES "areas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "rm-transaction" DROP CONSTRAINT "FK_a40b3fbc93feb132e01bd01b0cf"`,
    );
    await queryRunner.query(
      `ALTER TABLE "rm-transaction" DROP CONSTRAINT "FK_a8d922167595e37527c393a4d4b"`,
    );
    await queryRunner.query(
      `ALTER TABLE "fg_transaction" DROP CONSTRAINT "FK_aaf548e753c4a2059acb60231ec"`,
    );
    await queryRunner.query(
      `ALTER TABLE "fg_transaction" DROP CONSTRAINT "FK_9f81c26b232f6816f107ce0f000"`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material" DROP COLUMN "receipt_no"`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good" DROP COLUMN "receipt_no"`,
    );
    await queryRunner.query(`DROP TABLE "rm-transaction"`);
    await queryRunner.query(`DROP TYPE "public"."rm-transaction_status_enum"`);
    await queryRunner.query(`DROP TABLE "fg_transaction"`);
    await queryRunner.query(`DROP TYPE "public"."fg_transaction_status_enum"`);
  }
}
