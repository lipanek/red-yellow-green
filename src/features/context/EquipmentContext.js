import { createContext } from 'react';

const EquipmentContext = createContext({
	equipmentItems: [],
	setEquipmentItems: () => {},
});

export default EquipmentContext;
