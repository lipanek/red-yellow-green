import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const Label = ({ text, bold = false }) => (
	<Typography color="inherit" component="span" sx={{ fontWeight: bold ? 700 : 400 }}>
		{text}
	</Typography>
);

Label.propTypes = {
	bold: PropTypes.bool,
	text: PropTypes.string,
};

export default Label;
