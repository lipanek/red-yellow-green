import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import ContextProvider from './features/context/ContextProvider';
import ScrollToTop from './features/navigation/ScrollToTop';
import App from './App';
import theme from './features/mui/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ScrollToTop>
				<ThemeProvider theme={theme}>
					<ContextProvider>
						<App />
					</ContextProvider>
				</ThemeProvider>
			</ScrollToTop>
		</BrowserRouter>
	</React.StrictMode>,
);
