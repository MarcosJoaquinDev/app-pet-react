import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
const styles = {
	display: 'flex',
	justifyContent: 'space-between',
	height: '65px',
	backgroundColor: '#3d7cb9',
};
const AuthLayout: React.FC = () => (
	<>
		<Container style={styles}>
			<IconButton>Logo</IconButton>
			<Button variant="outlined">Salir</Button>
		</Container>
		<Box sx={{ pt: 6 }}>
			<Outlet />
		</Box>
	</>
);

export default AuthLayout;
