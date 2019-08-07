import {Comment} from "../entity/Comment";

export class CommentService {

	async getComments(): Promise<Comment[]> {
		console.log('commentService');
		return await Comment.find();
	}
}
