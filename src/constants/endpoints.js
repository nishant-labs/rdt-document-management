export const GET_INDICATOR_ENDPOINT =
  '{baseUrl}/country/{countryId}/indicator/{statsType}?format=json&date={fullYear}';

export const STATS_TYPE = {
  POPULATION: 'SP.POP.TOTL',
  GDP: 'NY.GDP.MKTP.CD',
};
