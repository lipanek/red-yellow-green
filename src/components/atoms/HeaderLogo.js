import Box from '@mui/material/Box';
import logo from '../../logo.png';
import { useHandleNavigate } from '../../features/navigation/hooks';
import { routes } from '../../features/navigation/constants';

const DEFAULT_HEIGHT = '44px';

const HeaderLogo = () => {
	const handleNavigate = useHandleNavigate();
	return (
		<Box sx={{ height: DEFAULT_HEIGHT, cursor: 'pointer' }}>
			<Box onClick={handleNavigate(routes.DASHBOARD.route)}>
				<img style={{ height: DEFAULT_HEIGHT }} src={logo} alt="logo" />
			</Box>
		</Box>
	);
};

export default HeaderLogo;
