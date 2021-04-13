import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

export const AppLayoutContainer = ({ children }) => {
	return (
		<>
			<CssBaseline />
			<Container maxWidth="md">
				<Box
					display="flex"
					flexDirection="column"
					bgcolor="background.paper"
					p={1}
					m={1}
					css={{ width: '100%', height: '100%' }}
				>
					{children}
				</Box>
			</Container>
		</>
	);
};
