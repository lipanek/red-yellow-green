import { useState } from 'react';
import PropTypes from 'prop-types';
import RoleContext from './RoleContext';
import EquipmentContext from './EquipmentContext';
import mockDatabase from '../../constants/mockDatabase';

const ContextProvider = ({ children }) => {
	const [role, setRole] = useState(null);
	const [equipmentItems, setEquipmentItems] = useState(mockDatabase);

	return (
		<RoleContext.Provider value={{ role, setRole }}>
			<EquipmentContext.Provider value={{ equipmentItems, setEquipmentItems }}>{children}</EquipmentContext.Provider>
		</RoleContext.Provider>
	);
};

ContextProvider.propTypes = {
	children: PropTypes.node,
};

export default ContextProvider;
