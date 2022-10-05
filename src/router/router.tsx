import { createBrowserRouter } from 'react-router-dom';
import routeMap from './routeMap';
import Home from 'pages/Home';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import MyPets from 'pages/MyPets';
import Report from 'pages/Report';
import Profile from 'pages/Profile';

const router = createBrowserRouter([
	{
		path: routeMap.HOME.path,
		element: <Home />,
	},
	{
		path: routeMap.SIGN_UP.path,
		element: <SignUp />,
	},
	{
		path: routeMap.SIGN_IN.path,
		element: <SignIn />,
	},
	{
		path: routeMap.MY_PETS.path,
		element: <MyPets />,
	},
	{
		path: routeMap.REPORT.path,
		element: <Report />,
	},
	{
		path: routeMap.PROFILE.path,
		element: <Profile />,
	},
]);

export default router;
