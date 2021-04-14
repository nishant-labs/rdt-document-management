import { selectTableData } from './selectors';

const formattedData = {
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

const expectedTableData = [
  {
    countryCode: 'BRA',
    countryName: 'Brazil',
    gdp: 1839758040765.62,
    population: 211049527,
  },
];

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

describe('context/shared/selectors', () => {
  test('should format table data for a valid response', () => {
    const tableData = selectTableData(formattedData);
    expect(tableData).toEqual(expectedTableData);
  });

  test('should format table data for empty response', () => {
    const tableData = selectTableData(emptyResponse);
    expect(tableData).toEqual([]);
  });
});
