let all = {
	env: process.env.PROFILE,
	port: process.env.PORT || 9090,
};

// TODO 환경설정파일을 별도로 관리한다면 어떤식으로 관리하는지 확인할 것
const HOST: string = {
	dev: "http://api.dev.woowa.in",
	beta: "http://api.dev.woowa.in",
	stage: "http://api.stage.woowa.in",
	prod: "http://api..woowa.in"
}[process.env.PROFILE || 'prod'];

// TODO https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html