import PropTypes from 'prop-types';
import { resolveEquipmentStateColor } from '../../utils';

const EquipmentStateIndicator = ({ state }) => (
	<div style={{ backgroundColor: resolveEquipmentStateColor(state), height: 24, width: 24, borderRadius: 8 }}></div>
);

EquipmentStateIndicator.propTypes = {
	state: PropTypes.number,
};

export default EquipmentStateIndicator;
