type Routes = 'WELCOME' | 'HOME' | 'SIGN_UP' | 'SIGN_IN' | 'PROFILE' | 'MY_PETS' | 'REPORT';

type Route = {
	path: string; 
	getURL: (...args: string[]) => string;
	children: Route[];
};

type RouteMap = Record<Routes, Route>;

const routeMap: RouteMap = {
	WELCOME: {
		path: '/',
		getURL: () => '/',
		children: []
	},
	HOME: {
		path: '/home',
		getURL: () => '/home',
		children: []
	},
	SIGN_UP: {
		path: '/sign-up',
		getURL: () => '/sign-up',
		children: []
	},
	SIGN_IN: {
		path: '/sign-in',
		getURL: () => '/sign-in',
		children: []
	},
	PROFILE: {
		path: 'profile',
		getURL: () => 'profile',
		children: []
	},
	MY_PETS: {
		path: 'my-pets',
		getURL: () => 'my-pets',
		children: []
	},
	REPORT: {
		path: 'report',
		getURL: () => 'report',
		children: []
	}
};

export default routeMap;
