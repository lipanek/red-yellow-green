import { createTheme } from '@mui/material/styles';

export const PRIMARY_YELLOW = '#FFCF00';
const DEFAULT_WHITE = '#FFF';
export const DEFAULT_BLACK = '#000000';
export const RED = '#D22B2B'
export const GREEN = '#27b827'

// A custom theme for this app
const theme = createTheme({
	palette: {
		background: {
			default: DEFAULT_WHITE,
			primary: PRIMARY_YELLOW,
		},
		typography: {
			default: DEFAULT_BLACK,
			primary: PRIMARY_YELLOW,
			white: DEFAULT_WHITE,
		},
		color: {
			primary: PRIMARY_YELLOW,
		},
	},
});

export default theme;
