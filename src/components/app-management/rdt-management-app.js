import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { SearchBox } from '../search-box';
import { AppLayout } from '../../layout/app-container';
import { ThemeProvider } from '../../layout/theme-provider';
import { StatisticsTable } from '../statistics-table';
import { TypographyWithBox } from '../TypographyWithBox';
import { withConsumers } from '../../hoc/withConsumers';

export class RDTAppManagement extends Component {
	render() {
		const {
			populationData,
			gdpData,
			populationApiError,
			gdpApiError,
		} = this.props;
		const hasErrors = populationApiError || gdpApiError;
		const isDataNotAvailable = !hasErrors && (!populationData || !gdpData);
		return (
			<ThemeProvider>
				<AppLayout>
					<TypographyWithBox
						type="h1"
						text="RDT Document Management Communicate"
					/>
					<SearchBox />
					{hasErrors && (
						<TypographyWithBox
							type="body1"
							text="Something went wrong while fetching data"
						/>
					)}
					{isDataNotAvailable && (
						<TypographyWithBox
							type="body1"
							text="Use search box to get Population and GDP statistics from world bank for a specific year."
						/>
					)}
					{!isDataNotAvailable && !hasErrors && (
						<Box
							p={1}
							display="flex"
							flexDirection="row"
							justifyContent="center"
						>
							<StatisticsTable population={populationData} gdp={gdpData} />
						</Box>
					)}
				</AppLayout>
			</ThemeProvider>
		);
	}
}

export default withConsumers(RDTAppManagement);
