import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
/*
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
*/
const navItems = ['Mis datos', 'Mis Mascotas', 'Reportar mascota'];

const toolbar = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	color: 'white',
	backgroundColor: 'DodgerBlue',
	padding: '10px',
	fontFamily: 'Arial',
};

const LayoutMain: React.FC = () => (
	<>
		<AppBar component="nav">
			<div style={toolbar}>
				<Box>
					<Button component={Link} to="/" key="logo" sx={{ color: '#fff' }}>
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
			</div>
		</AppBar>
		<h1>Contenido</h1>
		<Box>
			<Outlet />
		</Box>
		{/*
				<List>
					{navItems.map((item) => (
						<ListItem key={item} disablePadding>
							<ListItemButton sx={{ textAlign: 'center' }}>
								<ListItemText primary={item} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			*/}
	</>
);

export default LayoutMain;
