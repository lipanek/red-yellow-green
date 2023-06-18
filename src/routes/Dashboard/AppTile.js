import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import { useHandleNavigate } from '../../features/navigation/hooks';

const AppTile = ({ app, icon: Icon }) => {
	const handleNavigate = useHandleNavigate();
	return (
		<Grid xs={4}>
			<Card
				sx={{ paddingY: '16px', paddingX: '32px', cursor: 'pointer', backgroundColor: 'background.primary' }}
				onClick={handleNavigate(app.route)}>
				<Icon sx={{ fontSize: '92px' }} />
				<h3>{app.label}</h3>
			</Card>
		</Grid>
	);
};

export default AppTile;
