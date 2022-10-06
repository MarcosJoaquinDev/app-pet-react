import React from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

const AuthLayout: React.FC = () => (
	<>
		<AppBar component="nav" sx={{ backgroundColor: 'DodgerBlue' }} />
		<Box sx={{ pt: 6 }}>
			<Outlet />
		</Box>
	</>
);

export default AuthLayout;
