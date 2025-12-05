import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialDatabaseStructure1692203302790
  implements MigrationInterface
{
  name = 'InitialDatabaseStructure1692203302790';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "part_no" character varying NOT NULL, "part_name" character varying NOT NULL, "minimum_stock" character varying NOT NULL, "note" character varying, "spec" character varying, "model" character varying, "size" character varying, "quantity" integer, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "suppliers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "supplier_no" character varying NOT NULL, "supplier_name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_b70ac51766a9e3144f778cfe81e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user_token" ("id" SERIAL NOT NULL, "refresh_token" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "user_id" uuid, CONSTRAINT "REL_79ac751931054ef450a2ee4777" UNIQUE ("user_id"), CONSTRAINT "PK_48cb6b5c20faa63157b3c1baf7f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."users_role_enum" AS ENUM('ADMIN', 'OPERATOR')`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "role" "public"."users_role_enum" DEFAULT 'OPERATOR', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."finish_good_status_enum" AS ENUM('IN_BOUND', 'OUT_BOUND')`,
    );
    await queryRunner.query(
      `CREATE TABLE "finish_good" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" "public"."finish_good_status_enum" NOT NULL DEFAULT 'IN_BOUND', "quantity" integer NOT NULL, "invoice_no" character varying NOT NULL, "lot_number" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "supplier_id" uuid, "product_id" uuid, "received_by" uuid, CONSTRAINT "PK_d4f930a699e0d7755b896ea0bf2" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "areas" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "area_no" character varying NOT NULL, "area_name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_5110493f6342f34c978c084d0d6" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."raw_material_status_enum" AS ENUM('IN_BOUND', 'OUT_BOUND')`,
    );
    await queryRunner.query(
      `CREATE TABLE "raw_material" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" "public"."raw_material_status_enum" NOT NULL DEFAULT 'IN_BOUND', "quantity" integer NOT NULL, "invoice_no" character varying NOT NULL, "lot_number" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "supplier_id" uuid, "product_id" uuid, "received_by" uuid, CONSTRAINT "PK_78620c6a699438f30545519c86b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "customers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "customer_no" character varying NOT NULL, "customer_name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_token" ADD CONSTRAINT "FK_79ac751931054ef450a2ee47778" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good" ADD CONSTRAINT "FK_f5468a8d680d7f79d8cb47cc8b3" FOREIGN KEY ("supplier_id") REFERENCES "suppliers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good" ADD CONSTRAINT "FK_3b176fe20f86eb6e4a605850b88" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good" ADD CONSTRAINT "FK_08c734c24c80e5140d3da142b98" FOREIGN KEY ("received_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material" ADD CONSTRAINT "FK_d09d2b599b60cb7b290e78d96b6" FOREIGN KEY ("supplier_id") REFERENCES "suppliers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material" ADD CONSTRAINT "FK_3d2980c3ec73a01593394874e35" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material" ADD CONSTRAINT "FK_f1720f66d24bdddd6a521aa4995" FOREIGN KEY ("received_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "raw_material" DROP CONSTRAINT "FK_f1720f66d24bdddd6a521aa4995"`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material" DROP CONSTRAINT "FK_3d2980c3ec73a01593394874e35"`,
    );
    await queryRunner.query(
      `ALTER TABLE "raw_material" DROP CONSTRAINT "FK_d09d2b599b60cb7b290e78d96b6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good" DROP CONSTRAINT "FK_08c734c24c80e5140d3da142b98"`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good" DROP CONSTRAINT "FK_3b176fe20f86eb6e4a605850b88"`,
    );
    await queryRunner.query(
      `ALTER TABLE "finish_good" DROP CONSTRAINT "FK_f5468a8d680d7f79d8cb47cc8b3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_token" DROP CONSTRAINT "FK_79ac751931054ef450a2ee47778"`,
    );
    await queryRunner.query(`DROP TABLE "customers"`);
    await queryRunner.query(`DROP TABLE "raw_material"`);
    await queryRunner.query(`DROP TYPE "public"."raw_material_status_enum"`);
    await queryRunner.query(`DROP TABLE "areas"`);
    await queryRunner.query(`DROP TABLE "finish_good"`);
    await queryRunner.query(`DROP TYPE "public"."finish_good_status_enum"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
    await queryRunner.query(`DROP TABLE "user_token"`);
    await queryRunner.query(`DROP TABLE "suppliers"`);
    await queryRunner.query(`DROP TABLE "products"`);
  }
}
