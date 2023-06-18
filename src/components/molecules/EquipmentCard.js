import PropTypes from 'prop-types';
import Grid from '@mui/material/Unstable_Grid2';
import Label from '../atoms/Label';
import EquipmentStateSelect from '../atoms/EquipmentStateSelect';
import EquipmentStateIndicator from '../atoms/EquipmentStateIndicator';

const EquipmentCard = ({ id, states, ordersHistory, index, isAuthorizedToUpdateEquipmentState }) => {
	const currentState = states[0].state;
	return (
		<Grid container spacing={2} width="100%">
			<Grid xs={2}>
				<Label text={id} bold />
			</Grid>
			<Grid xs={2}>
				<EquipmentStateIndicator state={currentState} />
			</Grid>
			{isAuthorizedToUpdateEquipmentState && (
				<Grid xs={3}>
					<EquipmentStateSelect currentState={currentState} equipmentIndex={index} />
				</Grid>
			)}
			<Grid xs={5}>
				<Label text={ordersHistory[0].order} bold />
			</Grid>
		</Grid>
	);
};

EquipmentCard.propTypes = {
	id: PropTypes.string,
	isAuthorizedToUpdateEquipmentState: PropTypes.bool,
	states: PropTypes.array,
	ordersHistory: PropTypes.array,
	index: PropTypes.number,
};

export default EquipmentCard;
