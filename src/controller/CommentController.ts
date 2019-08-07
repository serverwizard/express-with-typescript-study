import {GET, Path} from "typescript-rest";
import {Inject} from "typescript-ioc";
import {Comment} from "../entity/Comment";
import {CommentService} from "../service/CommentService";

@Path("/comments")
export class CommentController {

	@Inject
	private commentService: CommentService;

	@GET
	async getComments(): Promise<Comment[]> {
		console.log('[CommentController] getComments()');
		console.log(HOST);
		return this.commentService.getComments();
	}
}