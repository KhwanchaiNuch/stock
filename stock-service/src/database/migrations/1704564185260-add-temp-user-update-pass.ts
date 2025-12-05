import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTempUserUpdatePass1704564185260 implements MigrationInterface {
  name = 'AddTempUserUpdatePass1704564185260';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO users
      (id, first_name, last_name, username, "password", "role", created_at, updated_at, deleted_at, note)
  VALUES
      ('d2eb1300-96f9-45ba-9293-3ea41a3016e1'::uuid, 'NK', '', 'NK', '$2b$10$7itLMm7BPGwvr9oYHScC.Oyqtwc7dJ5MTWhipKtkoO.DISenwmTGq', 'OPERATOR'::public."users_role_enum", '2023-11-27 01:32:06.374', '2023-11-27 01:32:06.374', NULL, NULL)
  ON CONFLICT (id)
  DO UPDATE SET
      first_name = EXCLUDED.first_name,
      last_name = EXCLUDED.last_name,
      username = EXCLUDED.username,
      "password" = EXCLUDED."password",
      "role" = EXCLUDED."role",
      created_at = EXCLUDED.created_at,
      updated_at = EXCLUDED.updated_at,
      deleted_at = EXCLUDED.deleted_at,
      note = EXCLUDED.note;
  `,
    );
    await queryRunner.query(
      `UPDATE users SET "password"='$2b$10$HYiALFLOq6s32UWzI2kaSeHL1GcmY8C6phgnq3u.JA4lSg/zZaKFy', updated_at=now();`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`SELECT * from areas;`);
  }
}
