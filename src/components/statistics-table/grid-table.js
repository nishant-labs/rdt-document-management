import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { TypographyWithBox } from "../TypographyWithBox";
import { selectTableData } from '../../context/shared/selectors';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import './table-styles.scss';

const defaultColDef = {
	sortable: true,
	filter: true,
};

export const GridTableContainer = ({ population, gdp }) => {
	const rowData = selectTableData({ population, gdp });
	if (rowData.length === 0) {
		return <TypographyWithBox type="h6" text="Data not found at World Bank center" />
	}
	return (
		<div className="ag-theme-alpine" style={{ height: 400, width: 900 }}>
			<AgGridReact rowData={rowData} defaultColDef={defaultColDef}>
				<AgGridColumn field="countryName" width="400" sort="asc"></AgGridColumn>
				<AgGridColumn field="population" width="250"></AgGridColumn>
				<AgGridColumn field="gdp" width="250"></AgGridColumn>
			</AgGridReact>
		</div>
	);
};
