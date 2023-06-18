import { equipmentStates, equipmentStateColors } from '../constants';
import { DEFAULT_BLACK } from '../features/mui/theme';

const { STANDING_STILL, STARTING_UP_WINDING_DOWN, PRODUCING_NORMALLY } = equipmentStates;

export const resolveEquipmentStateColor = (state) => {
	switch (state) {
		case STANDING_STILL:
			return equipmentStateColors[STANDING_STILL];
		case STARTING_UP_WINDING_DOWN:
			return equipmentStateColors[STARTING_UP_WINDING_DOWN];
		case PRODUCING_NORMALLY:
			return equipmentStateColors[PRODUCING_NORMALLY];
		default:
			return DEFAULT_BLACK;
	}
};
