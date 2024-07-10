import { User } from 'src/users/entities/user.entity';
import { DataSource } from 'typeorm';
import { Auth } from './src/auth/entities/auth.entity';
import { Post } from './src/posts/entities/posts.entity';

// ConfigModule.forRoot({
//   isGlobal: true,
//   envFilePath: './.env',
// });

export const dataSource = new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'wlsrud123!',
  database: 'weird_sector_db',
  entities: [Auth, Post, User],
  synchronize: false,
  bigNumberStrings: false,
  // migrations: ['./src/migrations/*.ts'],
  // migrationsTableName: 'typeorm_migrations',
});
