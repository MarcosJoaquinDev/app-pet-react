import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { routeMap } from 'router';
import styles from './NavBar.styles';
const items = [
	{
		title: 'Mis datos',
		path: routeMap.PROFILE.path,
	},
	{
		title: 'Mis Mascotas',
		path: routeMap.MY_PETS.path,
	},
	{
		title: 'Reportar mascota',
		path: routeMap.REPORT.path,
	},
];

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
				{items.map((item) => (
					<Button
						key={item.title}
						component={Link}
						to={item.path}
						sx={{ color: '#fff' }}
					>
						{item.title}
					</Button>
				))}
			</Box>
		</Box>
	</AppBar>
);

export default NavBar;
