import { equipmentStates } from './index';

const { STANDING_STILL, STARTING_UP_WINDING_DOWN, PRODUCING_NORMALLY } = equipmentStates;

const dateTime = new Date().toISOString();

const mockDatabase = [
	{
		id: 'E_1',
		states: [{ dateTime, state: STANDING_STILL }],
		ordersHistory: [
			{ dateTime, order: 'Pack LEGO bricks' },
			{ dateTime: new Date('2023-06-17').toISOString(), order: 'Sort LEGO boxes' },
		],
	},
	{
		id: 'E_2',
		states: [{ dateTime, state: STARTING_UP_WINDING_DOWN }],
		ordersHistory: [{ dateTime, order: 'Sort LEGO boxes' }],
	},
	{
		id: 'E_3',
		states: [{ dateTime, state: PRODUCING_NORMALLY }],
		ordersHistory: [{ dateTime, order: 'Create LEGO bricks' }],
	},
];

export default mockDatabase;
