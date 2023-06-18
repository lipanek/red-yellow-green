import { useContext, useCallback } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { equipmentStateLabels, equipmentStates } from '../../constants';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import EquipmentContext from '../../features/context/EquipmentContext';

const { STANDING_STILL, STARTING_UP_WINDING_DOWN, PRODUCING_NORMALLY } = equipmentStates;

const EquipmentStateSelect = ({ equipmentIndex, currentState }) => {
	const { setEquipmentItems } = useContext(EquipmentContext);
	const handleChangeEquipmentState = useCallback(
		(event) =>
			setEquipmentItems((prevEquipmentItems) => {
				const prevEquipment = prevEquipmentItems[equipmentIndex];
				const updatedEquipmentStates = [
					{ dateTime: new Date().toISOString(), state: event.target.value },
					...prevEquipment.states,
				];
				const updatedEquipment = { ...prevEquipment, states: updatedEquipmentStates };
				return prevEquipmentItems.toSpliced(equipmentIndex, 1, updatedEquipment);
			}),
		[equipmentIndex, setEquipmentItems],
	);
	return (
		<Box sx={{ width: '100%', display: 'inline-block' }}>
			<FormControl fullWidth>
				<InputLabel id="equipment-state-select-label">{'Select Equipment State'}</InputLabel>
				<Select
					labelId="equipment-state-select-label"
					id="equipment-state-select"
					value={currentState || ''}
					label="Select Equipment State"
					onChange={handleChangeEquipmentState}>
					{[STANDING_STILL, STARTING_UP_WINDING_DOWN, PRODUCING_NORMALLY].map((option) => (
						<MenuItem key={option} value={option}>
							{equipmentStateLabels[option]}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
};

export default EquipmentStateSelect;
