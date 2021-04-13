import get from 'lodash/get';
import { createSelector } from 'reselect';
const selectIndicators = (state) => get(state, 'population.[1]')  || [];

export const selectFormattedPopulation = createSelector(
	selectIndicators,
	(indicators) =>
		indicators.reduce(
			(result, indicator) => ({
				...result,
				[indicator.countryiso3code]: {
					countryName: indicator.country.value,
					population: indicator.value || 'Not available',
				},
			}),
			{}
		)
);
