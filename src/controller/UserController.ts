import {User} from "../entity/User";
import {DELETE, GET, Path, PathParam, POST} from "typescript-rest";
import {UserService} from "../service/UserService";
import {UserDto} from "../dto/UserDto";
import {Inject} from 'typescript-ioc';

// const validator = require('../validator/RequestValidator');

/**
 * TODO
 * 1. 스웨거 설정 확인
 * 2. RequestParam 확인
 */
@Path("/users")
export class UserController {

	@Inject
	private userService: UserService;

	// TODO 한번 요청했는데 여러번 로그가 찍힘
	@Path("/:userId")
	@GET
	// @PreProcessor(validator)
	async getUser(@PathParam('userId') userId: string): Promise<User | undefined> {
		console.log('path param: ' + userId);
		return this.userService.getUser(userId);
	}

	@GET
	async getUsers(): Promise<User[]> {
		console.log('모든 사용자 조회');
		return this.userService.getUsers();
	}

	@POST
	async saveUser(userDto: UserDto) {
		console.log('firstName: ' + userDto.firstName);
		console.log('lastName: ' + userDto.lastName);
		console.log('age: ' + userDto.age);
		return this.userService.saveUser(userDto);
	}

	@Path("/:userId")
	@DELETE
	async removeUser(@PathParam('userId') userId: number) {
		return this.userService.removeUser(userId);
	}
}