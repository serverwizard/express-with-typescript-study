import {Context, GET, Path} from "typescript-rest";

// TODO context 정보
@Path('/contexts')
export class ContextController {

	@GET
	async getContext(@Context context) {
		console.log(context);
		console.log(context.request);
	}
}