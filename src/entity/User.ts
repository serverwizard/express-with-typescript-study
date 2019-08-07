import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {UserDto} from "../dto/UserDto";

@Entity({name: 'user'})
export class User extends BaseEntity {

	@PrimaryGeneratedColumn()
	id: number;

	@Column({nullable: true})
	firstName: string;

	@Column({nullable: true})
	lastName: string;

	@Column({nullable: true})
	age: number;

	constructor(firstName: string, lastName: string, age: number) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	static from(userDto: UserDto): User {
		return new User(userDto.firstName, userDto.lastName, userDto.age)
	}

	public toString(): string {
		return `${this.firstName}, ${this.lastName}, ${this.age}`;
	}
}
