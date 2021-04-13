import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { SearchBox } from '../search-box';
import { AppLayout } from '../../layout/app-container';
import { ThemeProvider } from '../../layout/theme-provider';
import { StatisticsTable } from '../statistics-table';

export default class RDTAppManagement extends Component {
	render() {
		return (
			<ThemeProvider>
				<AppLayout>
					<Typography variant="h1" gutterBottom>
						RDT Document Management Communicate
					</Typography>
					<SearchBox />
					<Typography variant="body1" gutterBottom>
						RDT Document Management Communicate
					</Typography>
					<Box p={1}>
						<StatisticsTable />
					</Box>
				</AppLayout>
			</ThemeProvider>
		);
	}
}
