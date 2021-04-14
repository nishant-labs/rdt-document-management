import { selectFormattedGdp } from './selectors';

const validGdpResponse = {
  gdp: [
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
        indicator: { id: 'NY.GDP.MKTP.CD', value: 'GDP (current US$)' },
        country: { id: 'BR', value: 'Brazil' },
        countryiso3code: 'BRA',
        date: '2019',
        value: 1839758040765.62,
        unit: '',
        obs_status: '',
        decimal: 0,
      },
    ],
  ],
};

const expectedGdpData = {
  BRA: {
    countryName: 'Brazil',
    gdp: 1839758040765.62,
  },
};

const emptyResponse = {
  gdp: [
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

describe('context/gdp-context/selectors', () => {
  test('should format gdp data for a valid response', () => {
    const formattedGdpData = selectFormattedGdp(validGdpResponse);
    expect(formattedGdpData).toEqual(expectedGdpData);
  });

  test('should format gdp data for empty response', () => {
    const formattedGdpData = selectFormattedGdp(emptyResponse);
    expect(formattedGdpData).toEqual({});
  });
});
