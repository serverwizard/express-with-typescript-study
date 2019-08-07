import {User} from "../entity/User";
import {UserDto} from "../dto/UserDto";

export class UserService {

	async getUser(userId: string): Promise<User | undefined> {
		console.log('path param2: ' + userId);
		return User.findOne(userId);
	}

	async getUsers(): Promise<User[]> {
		return User.find();
	}

	async saveUser(userDto: UserDto) {
		return User.save(User.from(userDto));
	}

	async removeUser(userId: number) {
		console.log('path param: ' + userId);
		let userToRemove = await User.findOne(userId);
		return User.remove(userToRemove);
	}
}