import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Server} from "typescript-rest";

// TODO 외부 모듈을 가져오는 방법
const morgan = require('morgan');
const compress = require('compression');

// TODO index.ts 파일이 제일 중요
createConnection().then(async connection => {

	// create express app
	const app = express();

	// TODO 환경설정과 포트를 어떤 식으로 활용하는지 확인

	// 필요한 미들웨어 붙이기 (TODO 자주 사용되는 미들웨어 조사)
	app.use(bodyParser.json());
	app.use((req, res, next) => {
		console.log('middleware1: 인증작업...');
		next();
	});
	app.use((req, res, next) => {
		console.log('middleware2: 로깅작업...');
		next();
	});

	// 환경별로 미들웨어 사용
	if(process.env.NODE_ENV === 'development') {
		// 로거
		app.use(morgan('dev'));
	} else if (process.env.NODE_ENV === 'production') {
		// 응답 압축 지원
		app.use(compress());
	}

	// TODO buildServices와 loadServices 차이
	// Server.buildServices()
	Server.loadServices(app, ['src/controller/*']);

	Server.swagger(app, {
		endpoint: 'api-docs',
		filePath: './swagger/swagger.yaml',
		host: 'localhost:3000',
		schemes: ['http']
	});

	// setup express app here
	// ...

	// start express server
	app.listen(3000);

	console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));
