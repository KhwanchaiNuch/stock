import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableRmFgTransactionToCollectScanby1696181743045 implements MigrationInterface {
    name = 'AlterTableRmFgTransactionToCollectScanby1696181743045'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "fg_transaction" ADD "scan_by" uuid`);
        await queryRunner.query(`ALTER TABLE "rm-transaction" ADD "scan_by" uuid`);
        await queryRunner.query(`ALTER TABLE "fg_transaction" ADD CONSTRAINT "FK_ad507969bc6dff10d24f29dec4a" FOREIGN KEY ("scan_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rm-transaction" ADD CONSTRAINT "FK_ff764ec9ac681a64443fe5e9c92" FOREIGN KEY ("scan_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rm-transaction" DROP CONSTRAINT "FK_ff764ec9ac681a64443fe5e9c92"`);
        await queryRunner.query(`ALTER TABLE "fg_transaction" DROP CONSTRAINT "FK_ad507969bc6dff10d24f29dec4a"`);
        await queryRunner.query(`ALTER TABLE "rm-transaction" DROP COLUMN "scan_by"`);
        await queryRunner.query(`ALTER TABLE "fg_transaction" DROP COLUMN "scan_by"`);
    }

}
