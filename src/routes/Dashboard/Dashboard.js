import { useContext, useCallback } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Unstable_Grid2';
import AppTile from './AppTile';
import Page from '../../components/layouts/Page';
import RoleContext from '../../features/context/RoleContext';
import { roles } from '../../constants';
import { workerApps, supervisorApps } from './constants';

const { WORKER, SUPERVISOR } = roles;

const getAppsForRole = (role) => (role === WORKER ? workerApps : role === SUPERVISOR ? supervisorApps : []);

const Dashboard = () => {
	const { role, setRole } = useContext(RoleContext);
	const handleChangeRole = useCallback((event) => setRole(event.target.value), [setRole]);
	return (
		<Page>
			<h1>{'Dashboard'}</h1>
			<Box sx={{ width: 200 }}>
				<FormControl fullWidth>
					<InputLabel id="role-select-label">Select your role</InputLabel>
					<Select
						labelId="role-select-label"
						id="role-select"
						value={role || ''}
						label="Select your role"
						onChange={handleChangeRole}>
						<MenuItem value={WORKER}>{WORKER}</MenuItem>
						<MenuItem value={SUPERVISOR}>{SUPERVISOR}</MenuItem>
					</Select>
				</FormControl>
			</Box>
			{role && <h2>{'Your apps'}</h2>}
			<Grid container spacing={2}>
				{getAppsForRole(role).map(({ app, icon }) => (
					<AppTile key={app.label} app={app} icon={icon} />
				))}
			</Grid>
		</Page>
	);
};

export default Dashboard;
