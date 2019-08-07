import {Errors} from "typescript-rest";
import {Request} from "express";

// TODO 바깥쪽에서 사용하려면
module.exports = function validator(req: Request): Request {
	console.log('validator 들어옴...');
	console.log('request param: ' + req.params.userId);
	if (!req.params.userId) {
		throw new Errors.BadRequestError("userId not present");
	}
	console.log('validator 나감...');
	return req;
};

