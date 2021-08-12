import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

type UserRole = 'admin' | 'mod' | 'general';

@Entity('users')
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar', length: 255, nullable: false, name: 'first_name' })
	firstName: string;

	@Column({ type: 'varchar', length: 255, nullable: false, name: 'last_name' })
	lastName: string;

	@Column({ type: 'varchar', length: 255, nullable: false, unique: true })
	username: string;

	@Column({ type: 'varchar', length: 320, nullable: false, unique: true })
	email: string;

	@Column({ type: 'varchar', length: 55, nullable: false })
	password: string;

	@Column({
		type: 'enum',
		default: 'general',
		enum: ['admin', 'mod', 'general'],
	})
	role: UserRole;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date;
}
