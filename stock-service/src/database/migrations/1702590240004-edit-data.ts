import { MigrationInterface, QueryRunner } from 'typeorm';

export class EditData011702590240004 implements MigrationInterface {
  name = 'EditData011702590240004';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE products SET part_name = REPLACE(part_name, ',', '') WHERE part_name LIKE '%,%';`,
    );
    await queryRunner.query(
      `UPDATE suppliers SET supplier_name = REPLACE(supplier_name, ',', '') WHERE supplier_name LIKE '%,%';`,
    );
    await queryRunner.query(
      `UPDATE customers SET customer_name = REPLACE(customer_name, ',', '') WHERE customer_name LIKE '%,%';`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(``);
  }
}
