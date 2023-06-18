import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Header from '../../components/molecules/Header';
import Container from '@mui/material/Container';

const Page = ({ children }) => (
	<Box>
		<Header />
		<Container maxWidth="lg" sx={{ marginTop: '32px' }}>
			{children}
		</Container>
	</Box>
);

Page.propTypes = {
	children: PropTypes.node,
};

export default Page;
