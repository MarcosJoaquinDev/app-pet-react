import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Button, IconButton, AppBar } from '@mui/material';
import { routeMap } from 'router';
import styles from '../NavBar/NavBar.styles';
const WelcomeLayout: React.FC = () => (
	<>
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
					<Button variant="contained">Registrarme</Button>
					<Button
						variant="outlined"
						style={{
							border: '1px solid white',
							color: 'white',
							marginLeft: '10px',
						}}
					>
						Ingresar
					</Button>
				</Box>
			</Box>
		</AppBar>
		<Box sx={{ pt: 6 }}>
			<Outlet />
		</Box>
	</>
);

export default WelcomeLayout;
