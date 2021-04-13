import get from 'lodash/get';
import { createSelector } from 'reselect';
const selectIndicators = (state) => get(state, 'gdp.[1]') || [];

export const selectFormattedGdp = createSelector(
  selectIndicators,
  (indicators) =>
    indicators.reduce(
      (result, indicator) => ({
        ...result,
        [indicator.countryiso3code]: {
          countryName: indicator.country.value,
          gdp: indicator.value || 0,
        },
      }),
      {}
    )
);
