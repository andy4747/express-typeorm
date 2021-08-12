import { getRepository } from 'typeorm';
import { IUserPayload } from '../types';
import { User } from './../models';

export class UserRepository {
	async getUsers(): Promise<Array<User>> {
		const userRepo = getRepository(User);
		return await userRepo.find();
	}

	async getUser(id: number): Promise<User | null> {
		const userRepo = getRepository(User);
		const user = await userRepo.findOne({ id: id });
		if (!user) return null;
		return user;
	}

	async createUser(payload: IUserPayload): Promise<User> {
		const userRepo = getRepository(User);
		const user = new User();
		return userRepo.save({ ...user, ...payload });
	}

	async updateUser(id: number, payload: IUserPayload) {
		const userRepo = getRepository(User);
		const user = await userRepo
			.createQueryBuilder()
			.update(User)
			.set({ ...new User(), ...payload })
			.where('id = :id', { id: id })
			.returning([
				'firstName',
				'lastName',
				'email',
				'username',
				'createdAt',
				'updatedAt',
			])
			.execute();
		console.log(user);
		return user;
	}

	async deleteUser(id: number) {
		const userRepo = getRepository(User);
		const user = await userRepo
			.createQueryBuilder()
			.delete()
			.from(User)
			.where('id = :id', { id: id })
			.returning([
				'firstName',
				'lastName',
				'email',
				'username',
				'createdAt',
				'updatedAt',
			])
			.execute();
		return user;
	}
}
