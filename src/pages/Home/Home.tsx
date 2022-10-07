import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { main, container, card } from './Home.styles';

const Home: React.FC = () => (
	<>
		<Container sx={main}>
			<Container sx={container}>
				<Typography variant="h3">Mascotas perdidas cerca tuyo.</Typography>
				<Box sx={card}>
					<Typography variant="h6" style={{ textAlign: 'center' }}>
						Para ver las mascotas reportadas cerca tuyo necesitamos permiso para
						conocer tu ubicación.
					</Typography>
					<br />
					<Button
						variant="contained"
						color="success"
						size="large"
						style={{ width: '100%' }}
					>
						Dar mi ubicacion
					</Button>
				</Box>
			</Container>
		</Container>
	</>
);

export default Home;
