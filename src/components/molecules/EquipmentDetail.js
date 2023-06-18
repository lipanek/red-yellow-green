import PropTypes from 'prop-types';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Label from '../atoms/Label';
import EquipmentStateIndicator from '../atoms/EquipmentStateIndicator';

const DetailItem = ({ label, dateTime, state }) => (
	<Card sx={{ marginTop: '8px', marginX: '16px', padding: '8px' }}>
		<Grid container spacing={2} width="100%">
			<Grid xs={4}>{state ? <EquipmentStateIndicator state={state} /> : <Label text={label} />}</Grid>
			<Grid xs={4}>
				<Label text={dateTime} />
			</Grid>
		</Grid>
	</Card>
);

const EquipmentDetail = ({ ordersHistory = [], states = [], isAuthorizedToOverviewEquipmentState }) => (
	<Card sx={{ padding: '8px' }}>
		<Box>
			<Label text={'Scheduled orders'} bold />
			{ordersHistory.map(({ order, dateTime }, index) => (
				<DetailItem key={index} label={order} dateTime={dateTime} />
			))}
		</Box>
		{isAuthorizedToOverviewEquipmentState && (
			<Box sx={{ marginTop: '16px' }}>
				<Label text={'Equipment State Overview'} bold />
				{states.map(({ state, dateTime }, index) => (
					<DetailItem key={index} state={state} dateTime={dateTime} />
				))}
			</Box>
		)}
	</Card>
);

EquipmentDetail.propTypes = {
	ordersHistory: PropTypes.array,
};

export default EquipmentDetail;
