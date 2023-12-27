import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config({ path: '.env.development' });

const configService = new ConfigService();

export default new DataSource({
    type: 'postgres',
    host: configService.get('DB_HOST'),
    port: +configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    entities: [`dist/**/*.entity{.ts,.js}`],
    migrations: ['./migrations/*'],
});
