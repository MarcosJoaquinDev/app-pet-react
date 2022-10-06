import React from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import NavBar from 'components/Layout/NavBar';

const MainLayout: React.FC = () => (
	<>
		<NavBar />
		<Box sx={{ pt: 6 }}>
			<Outlet />
		</Box>
	</>
);

export default MainLayout;
