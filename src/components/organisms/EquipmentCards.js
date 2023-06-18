import { useState, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import EquipmentCard from '../molecules/EquipmentCard';
import Label from '../atoms/Label';
import EquipmentDetail from '../molecules/EquipmentDetail';
import EquipmentContext from '../../features/context/EquipmentContext';
import RoleContext from '../../features/context/RoleContext';
import { roles } from '../../constants';

const StyledAccordion = styled(Accordion)(({ theme }) => {
	return {
		boxShadow: 'none', // this styles directly apply to accordion
		'.MuiAccordionDetails-root': {},
		'.MuiAccordionSummary-root': {}, // this apply to Summary
	};
});

const EquipmentCards = () => {
	const { equipmentItems } = useContext(EquipmentContext);
	const { role } = useContext(RoleContext);

	const [expanded, setExpanded] = useState('');

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : '');
	};

	const isAuthorizedToUpdateEquipmentState = useMemo(() => role === roles.WORKER, [role]);
	const isAuthorizedToOverviewEquipmentState = useMemo(() => role === roles.SUPERVISOR, [role]);

	return (
		<Box>
			<Grid container spacing={2} sx={{ width: '100%', marginY: '16px' }}>
				<Grid xs={2}>
					<Label text={'Equipment ID'} />
				</Grid>
				<Grid xs={2}>
					<Label text={'Equipment State'} />
				</Grid>
				{isAuthorizedToUpdateEquipmentState && (
					<Grid xs={3}>
						<Label text={'Set Equipment State'} />
					</Grid>
				)}
				<Grid xs={5}>
					<Label text={'Current Order'} />
				</Grid>
			</Grid>
			{equipmentItems.map((itemProps, index) => {
				const panelId = `panel_${index + 1}`;
				return (
					<StyledAccordion key={panelId} expanded={expanded === panelId} onChange={handleChange(panelId)}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon sx={{ color: 'color.primary' }} />}
							aria-controls={`${panelId}bh-content`}
							id={`${panelId}bh-header`}
							sx={{ paddingY: '16px' }}>
							<EquipmentCard
								index={index}
								isAuthorizedToUpdateEquipmentState={isAuthorizedToUpdateEquipmentState}
								{...itemProps}
							/>
						</AccordionSummary>
						<AccordionDetails>
							<EquipmentDetail
								isAuthorizedToOverviewEquipmentState={isAuthorizedToOverviewEquipmentState}
								{...itemProps}
							/>
						</AccordionDetails>
					</StyledAccordion>
				);
			})}
		</Box>
	);
};

EquipmentCards.propTypes = {
	equipmentItems: PropTypes.array,
};

export default EquipmentCards;
