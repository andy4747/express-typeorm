import {BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity("users")
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    user_id !: number

    @Column( {
        type    :   "text"
    })
    email !: string

    @CreateDateColumn()
    created_at !: Date

    @UpdateDateColumn()
    updated_at !: Date
}