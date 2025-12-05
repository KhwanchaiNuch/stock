import { MigrationInterface, QueryRunner } from "typeorm";

export class AddInventory1700868885858 implements MigrationInterface {
    name = 'AddInventory1700868885858'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "inventory" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "inventoryCount" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "receipt_item" uuid, "operator_id" uuid, CONSTRAINT "PK_82aa5da437c5bbfb80703b08309" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "inventory" ADD CONSTRAINT "FK_75356d10b77f7d012c1b17306f3" FOREIGN KEY ("receipt_item") REFERENCES "raw_material_item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "inventory" ADD CONSTRAINT "FK_0f3feffa22d1ac747c3973437d1" FOREIGN KEY ("operator_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inventory" DROP CONSTRAINT "FK_0f3feffa22d1ac747c3973437d1"`);
        await queryRunner.query(`ALTER TABLE "inventory" DROP CONSTRAINT "FK_75356d10b77f7d012c1b17306f3"`);
        await queryRunner.query(`DROP TABLE "inventory"`);
    }

}
