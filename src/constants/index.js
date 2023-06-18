import { PRIMARY_YELLOW, RED, GREEN } from '../features/mui/theme';

export const roles = {
	WORKER: 'Worker',
	SUPERVISOR: 'Supervisor',
};

export const equipmentStates = {
	STANDING_STILL: 1, // Red
	STARTING_UP_WINDING_DOWN: 2, // Yellow
	PRODUCING_NORMALLY: 3, // Green
};

export const equipmentStateColors = {
	[equipmentStates.STANDING_STILL]: RED,
	[equipmentStates.STARTING_UP_WINDING_DOWN]: PRIMARY_YELLOW,
	[equipmentStates.PRODUCING_NORMALLY]: GREEN,
};

export const equipmentStateLabels = {
	[equipmentStates.STANDING_STILL]: 'Standing still',
	[equipmentStates.STARTING_UP_WINDING_DOWN]: 'Starting up/winding down',
	[equipmentStates.PRODUCING_NORMALLY]: 'Producing normally',
};
