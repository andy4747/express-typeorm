import dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';

dotenv.config();

export const Config: ConnectionOptions = {
	type: 'postgres',
	host: process.env.PG_HOST,
	port: Number(process.env.PG_PORT),
	username: process.env.PG_USER,
	password: process.env.PG_PASS,
	database: process.env.PG_DB,
	synchronize: true,
	logging: true,
	entities: [__dirname + '/models/*.{ts,js}'],
};
