import { selectFormattedPopulation } from './selectors';

const validPopulationResponse = {
  population: [
    {
      page: 1,
      pages: 1,
      per_page: 50,
      total: 1,
      sourceid: '2',
      sourcename: 'World Development Indicators',
      lastupdated: '2021-03-19',
    },
    [
      {
        indicator: { id: 'SP.POP.TOTL', value: 'Population, total' },
        country: { id: 'BR', value: 'Brazil' },
        countryiso3code: 'BRA',
        date: '2019',
        value: 211049527,
        unit: '',
        obs_status: '',
        decimal: 0,
      },
    ],
  ],
};

const expectedPopulationData = {
  BRA: {
    countryName: 'Brazil',
    population: 211049527,
  },
};

const emptyResponse = {
  population: [
    {
      page: 0,
      pages: 0,
      per_page: 0,
      total: 0,
      sourceid: null,
      sourcename: null,
      lastupdated: null,
    },
    null,
  ],
};

describe('context/population-context/selectors', () => {
  test('should format population data for a valid response', () => {
    const formattedPopulationData = selectFormattedPopulation(
      validPopulationResponse
    );
    expect(formattedPopulationData).toEqual(expectedPopulationData);
  });

  test('should format population data for empty response', () => {
    const formattedPopulationData = selectFormattedPopulation(emptyResponse);
    expect(formattedPopulationData).toEqual({});
  });
});
