import { MigrationInterface, QueryRunner } from 'typeorm';

export class DropTableRmFgTransaction1697477875597
  implements MigrationInterface
{
  name = 'DropTableRmFgTransaction1697477875597';

  public async up(queryRunner: QueryRunner): Promise<void> {
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
    await queryRunner.query(`DROP TABLE "rm-transaction"`);
    await queryRunner.query(`DROP TYPE "public"."rm-transaction_status_enum"`);
    await queryRunner.query(`DROP TABLE "fg_transaction"`);
    await queryRunner.query(`DROP TYPE "public"."fg_transaction_status_enum"`);
  }

  public async down(): Promise<void> {
    return;
  }
}
