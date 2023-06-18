import { Route, Routes } from 'react-router-dom';
import { routes } from './features/navigation/constants';
import Dashboard from './routes/Dashboard';
import EquipmentControl from './routes/EquipmentControl/';
import EquipmentOverview from './routes/EquipmentOverview';

const App = () => (
	<Routes>
		<Route path={routes.DASHBOARD.route} element={<Dashboard />} />
		<Route path={routes.EQUIPMENT_CONTROL.route} element={<EquipmentControl />} />
		<Route path={routes.EQUIPMENT_OVERVIEW.route} element={<EquipmentOverview />} />
	</Routes>
);

export default App;
