import dotenv from 'dotenv';
import express, { Router } from 'express';
import { createWriteStream } from 'fs';
import morgan from 'morgan';
import path from 'path';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Config } from './db';
import { userRouter } from './routes';

dotenv.config();
const app = express();
const port = process.env.APP_PORT;

app.use(express.json());
//setup logger in prod and dev env
if (process.env.NODE_ENV === 'production') {
	app.use(
		morgan('combined', {
			stream: createWriteStream(path.join(__dirname, '../log/access.log'), {
				flags: 'a',
			}),
		})
	);
} else {
	app.use(morgan('common'));
}

//setting up the main '/api' router
const router = Router();
app.use('/api', router);

//using /users route
router.use('/', userRouter);

createConnection(Config)
	.then(() => {
		app.listen(port, () => {
			console.log(`server started at https://localhost:${port}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
