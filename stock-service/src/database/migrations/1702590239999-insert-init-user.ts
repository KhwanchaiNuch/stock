import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertInitUsers1702590239999 implements MigrationInterface {
  name = 'InsertInitUsers1702590239999';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Mr.Isao', 'Tonomura', '59023', 'mock_temp', 'VIEWER'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Mr.Shingo', 'Momota', '66004', 'mock_temp', 'VIEWER'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Mrs.Pongnapa', 'Wannasin', 'AD-52002', 'mock_temp', 'VIEWER'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms.Sawitree', 'Sukcharoen', 'MK-52002', 'mock_temp', 'VIEWER'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms.Duangkamol', 'Weerachaisantikul', 'QC-52001', 'mock_temp', 'VIEWER'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms.Kanokon', 'Oonwong', '64016', 'mock_temp', 'ADMIN'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms.Ruschanipa', 'Pidto', '59019', 'mock_temp', 'VIEWER'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms.Apaporn', 'Piantham', '64007', 'mock_temp', 'VIEWER'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms.Nongphanga', 'Duangathit', '60021', 'mock_temp', 'VIEWER'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms.Chanyanuch', 'Kamsopha', '60017', 'mock_temp', 'VIEWER'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms.Amonthira', 'Surbpeng', 'IV-55021', 'mock_temp', 'VIEWER'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms.Kannika', 'Duangbut', '6609-TEM', 'mock_temp', 'VIEWER'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms.Naium', 'Duangkulsa', 'FC-54051', 'mock_temp', 'ADMIN'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Mrs.Aunyuree', 'Samantit', 'FC-52004', 'mock_temp', 'ADMIN'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms.Pranee', 'Charoensri', '62007', 'mock_temp', 'VIEWER'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms.Jiraporn', 'Arsa', '64032', 'mock_temp', 'VIEWER'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms.Sirigamol', 'Sawanhan', '62015', 'mock_temp', 'VIEWER'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms.Waraporn', 'Chompookrua', '63005', 'mock_temp', 'ADMIN'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms.Anna', 'Komganya', '64011', 'mock_temp', 'VIEWER'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Mr.Tawan', 'Chaiput', 'FC-56013', 'mock_temp', 'OPERATOR'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Mr.Pipat', 'Niwasram', 'IV-55022', 'mock_temp', 'OPERATOR'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Mr.Wasun', 'Siriwi', 'FC-55066', 'mock_temp', 'OPERATOR'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Mr.Chakkrit', 'Chaemcheng', '64012', 'mock_temp', 'OPERATOR'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Mr.Sawat', 'Yuthasinsewee', '59002', 'mock_temp', 'OPERATOR'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Mr.Phanuwat', 'Thongchamrun', '64017', 'mock_temp', 'OPERATOR'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Mr.Keng', 'Panburi', '55398', 'mock_temp', 'OPERATOR'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms.Chotirod', 'Pusomkao', 'FC-55062', 'mock_temp', 'OPERATOR'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Mr.Nattapon', 'Peakkuntod', '64010', 'mock_temp', 'OPERATOR'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms.Jantip', 'Praichat', '65003', 'mock_temp', 'OPERATOR'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms.Waranya', 'khusita', 'FC-57026', 'mock_temp', 'OPERATOR'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms.Chamaiporn', 'Thumayo', 'FC-56004', 'mock_temp', 'VIEWER'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Mr.Teeradet', 'Jitniyom', '54392', 'mock_temp', 'VIEWER'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms.Phutsarat', 'Phumjan', 'FC-56012', 'mock_temp', 'VIEWER'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms.Kanchana', 'Namwong', '64018', 'mock_temp', 'VIEWER'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Mrs.Alisa', 'Jutaban', '60027', 'mock_temp', 'VIEWER'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms.A-reeya', 'Thongmul', '59037', 'mock_temp', 'OPERATOR'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms.Rangsiya', 'Niwongsa', 'ONE-001-ES', 'mock_temp', 'OPERATOR'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms.Supatra', 'hongpoom', '66007', 'mock_temp', 'OPERATOR'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms.Suphuen', 'Noisue', '55396', 'mock_temp', 'VIEWER'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms.Suwan', 'Sangsing', '55400', 'mock_temp', 'VIEWER'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms.Aranya', 'Chachumwong', '58036', 'mock_temp', 'ADMIN'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms.Tidarat', 'Sestrew', 'AMT-58024', 'mock_temp', 'ADMIN'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Mr.Anon', 'SongnaKha', '60016', 'mock_temp', 'OPERATOR'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Mr.Suphachai', 'Phongwan', 'AMT-58037', 'mock_temp', 'OPERATOR'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms..Rarai', 'Pasomsri', '60025', 'mock_temp', 'OPERATOR'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Ms.Phanita', 'Silachai', '60024', 'mock_temp', 'VIEWER'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Mr.Pipat', 'Sichum', '59010', 'mock_temp', 'OPERATOR'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Mr.Kidsana', 'Klingklom', '60036', 'mock_temp', 'OPERATOR'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Mr..Samran', 'Panruang', '64027', 'mock_temp', 'OPERATOR'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Miss.Porntiwa', 'Pamanang', 'ONE-001-AMT', 'mock_temp', 'OPERATOR'::users_role_enum, now(), now());`,
    );
    await queryRunner.query(
      `INSERT INTO users (id, first_name, last_name, username, "password", "role", created_at, updated_at) VALUES(uuid_generate_v4(), 'Miss.Vimon', 'Srihata', 'ONE-002-AMT', 'mock_temp', 'VIEWER'::users_role_enum, now(), now());`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM TABLE "users"`);
  }
}
