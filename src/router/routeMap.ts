type Routes = 'HOME' | 'SIGN_UP' | 'SIGN_IN' | 'PROFILE' | 'MY_PETS' | 'REPORT' | 'LAYOUT';
type Route = {
	path: string; 
	getURL: (...args: string[]) => string,
	children?:[]
};

type RouteMap = Record<Routes, Route>;

const routeMap: RouteMap = {
	LAYOUT: {
		path: '/',
		getURL: () => '/',
		children: [],
	},
	HOME:{
		path: 'home',
		getURL: () => '/home',
	},
	SIGN_UP: {
		path: 'sign-up',
		getURL: () => '/sign-up',
	},
	SIGN_IN: {
		path: 'sign-in',
		getURL: () => '/sign-in',
	},
	PROFILE: {
		path: 'profile',
		getURL: () => '/profile',
	},
	MY_PETS: {
		path: 'my-pets',
		getURL: () => '/my-pets',
	},
	REPORT: {
		path: 'report',
		getURL: () => '/report',
	}
};

export default routeMap;
