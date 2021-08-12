import { Request, Response } from 'express';
import { UserRepository } from '../repositories';
import { IUserPayload } from '../types';

// initializing the user repository

// UserController class contains controllers methods for user CRUD operations
export class UserController {
	public async getUsers(req: Request, res: Response) {
		const userRepo = new UserRepository();
		try {
			const users = await userRepo.getUsers();
			res.status(200).json(users);
		} catch (error) {
			res.status(500);
		}
	}
	public async getUser(req: Request, res: Response) {
		const userRepo = new UserRepository();
		const { id } = req.params;
		try {
			const user = await userRepo.getUser(Number(id));
			if (!user) {
				res.status(404).json({});
				return;
			}
			res.status(200).json(user);
		} catch (error) {
			res.status(500);
		}
	}
	public async createUser(req: Request, res: Response) {
		const userRepo = new UserRepository();
		try {
			const { first_name, last_name, email, username, password } = req.body;
			const payload: IUserPayload = {
				firstName: first_name,
				lastName: last_name,
				email: email,
				username: username,
				password: password,
			};
			const user = await userRepo.createUser(payload);
			res.status(200).json(user);
		} catch (error) {
			console.error(error);
			if (error.code === '23505') {
				res.status(400).json({ error: 'username or email is already taken' });
				return;
			}
			res.status(500);
		}
	}

	public async updateUser(req: Request, res: Response) {
		const userRepo = new UserRepository();
		try {
			const { id } = req.params;
			const payload = req.body;
			const user = await userRepo.updateUser(Number(id), payload);
			if (!user.affected || user.affected <= 0) {
				res.status(404).json({ error: `user of id ${id} not found` });
				return;
			}
			res.status(200).json(user.raw[0]);
		} catch (error) {
			console.log(error);
			res.status(500).json(error);
		}
	}

	public async deleteUser(req: Request, res: Response) {
		const userRepo = new UserRepository();
		try {
			const { id } = req.params;
			const user = await userRepo.deleteUser(Number(id));
			if (!user.affected && user.affected === 0) {
				res.status(404).json({ error: `user of id ${id} not found` });
				return;
			}
			res.status(200).json(user.raw[0]);
		} catch (error) {
			console.error(error);
			res.status(500);
		}
	}
}
