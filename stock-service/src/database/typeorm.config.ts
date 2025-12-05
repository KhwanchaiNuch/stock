import { DataSource, DataSourceOptions } from 'typeorm';

export const typeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'P@ssw0rd',
  database: process.env.DB_NAME || 'stock',
  entities: ['dist/**/entities/*.entity.{ts,js}'],
  synchronize: false,
  migrations: ['dist/database/migrations/*.js'],
  migrationsRun: false,
   logging: false
};

const dataSource = new DataSource(typeOrmConfig);
export default dataSource;
