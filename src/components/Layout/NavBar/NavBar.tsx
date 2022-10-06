import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { routeMap } from 'router';
import styles from './NavBar.styles';

const navItems = ['Mis datos', 'Mis Mascotas', 'Reportar mascota'];

const NavBar: React.FC = () => (
	<AppBar component="nav">
		<Box sx={styles.toolbar}>
			<Box>
				<Button
					component={Link}
					to={routeMap.HOME.getURL()}
					key="logo"
					sx={{ color: '#fff' }}
				>
					<IconButton> Logo </IconButton>
				</Button>
			</Box>
			<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
				{navItems.map((item) => (
					<Button key={item} sx={{ color: '#fff' }}>
						{item}
					</Button>
				))}
			</Box>
		</Box>
	</AppBar>
);

export default NavBar;
