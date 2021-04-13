import { createSelector } from 'reselect';

import { selectFormattedGdp } from '../gdp-context';
import { selectFormattedPopulation } from '../population-context';

export const selectTableData = createSelector(
  selectFormattedGdp,
  selectFormattedPopulation,
  (gdpIndicators, populationIndicators) =>
    Object.keys(populationIndicators).map((countryCode) => {
      const populationData = populationIndicators[countryCode] || {};
      const gdpData = gdpIndicators[countryCode] || {};
      return {
        countryCode,
        ...gdpData,
        ...populationData,
      };
    })
);
