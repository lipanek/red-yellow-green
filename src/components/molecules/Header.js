import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import HeaderLogo from '../atoms/HeaderLogo';

const Header = () => (
	<Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', justifyContent: 'start', backgroundColor: 'red' }}>
		<AppBar position="static">
			<Toolbar variant="regular">
				<HeaderLogo />
				<Typography variant="h6" color="inherit" component="div" sx={{ marginX: '16px' }}>
					Red Yellow Green App
				</Typography>
			</Toolbar>
		</AppBar>
	</Box>
);

export default Header;
