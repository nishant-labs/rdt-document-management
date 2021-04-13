import {
	fetchPopulationFromWorldBank,
	fetchEnvConfig,
	fetchGDPFromWorldBank,
} from './http';

const errorData = JSON.stringify({ status: 500, body: { message: 'error' } });

const gdpResponse = JSON.stringify([
	{
		page: 1,
		pages: 6,
		per_page: 50,
		total: 264,
		sourceid: '2',
		sourcename: 'World Development Indicators',
		lastupdated: '2021-03-19',
	},
	[
		{
			indicator: { id: 'NY.GDP.MKTP.CD', value: 'GDP (current US$)' },
			country: { id: '1A', value: 'Arab World' },
			countryiso3code: 'ARB',
			date: '2019',
			value: 2817414584665.11,
			unit: '',
			obs_status: '',
			decimal: 0,
		},
	],
]);

describe('utils/http', () => {
	describe('fetchEnvConfig', () => {
		beforeEach(() => {
			fetch.resetMocks();
		});

		test('should give config on fetchEnvConfig call', async () => {
			const configData = JSON.stringify({ baseUrl: 'https://example.com' });
			fetch.mockResponseOnce(configData);

			const config = await fetchEnvConfig();

			expect(fetch).toHaveBeenCalledWith('configuration.json', undefined);
			expect(config.payload).toEqual(configData);
		});

		test('should give error data', () => {
			fetch.mockRejectOnce(errorData);
			return fetchEnvConfig().catch((error) => {
				expect(error).toEqual(errorData);
			});
		});
	});

	describe('fetchGDPFromWorldBank', () => {
		beforeEach(() => {
			fetch.resetMocks();
		});

		test('should give gdp data on fetchGDPFromWorldBank call', async () => {
			fetch.mockResponseOnce(gdpResponse);

			const config = await fetchGDPFromWorldBank('https://example.com', '2019');

			expect(fetch).toHaveBeenCalledWith(
				'https://example.com/country/all/indicator/NY.GDP.MKTP.CD?format=json&date=2019',
				undefined
			);
			expect(config.payload).toEqual(gdpResponse);
		});

		test('should give error data', () => {
			fetch.mockRejectOnce(errorData);

			return fetchGDPFromWorldBank('https://example.com', '2019').catch(
				(error) => {
					expect(error).toEqual(errorData);
				}
			);
		});
	});

	describe('fetchPopulationFromWorldBank', () => {
		beforeEach(() => {
			fetch.resetMocks();
		});

		test('should give gdp data on fetchPopulationFromWorldBank call', async () => {
			fetch.mockResponseOnce(gdpResponse);

			const config = await fetchPopulationFromWorldBank(
				'https://example.com',
				'2019'
			);

			expect(fetch).toHaveBeenCalledWith(
				'https://example.com/country/all/indicator/SP.POP.TOTL?format=json&date=2019',
				undefined
			);
			expect(config.payload).toEqual(gdpResponse);
		});

		test('should give error data', () => {
			fetch.mockRejectOnce(errorData);

			return fetchPopulationFromWorldBank('https://example.com', '2019').catch(
				(error) => {
					expect(error).toEqual(errorData);
				}
			);
		});
	});
});
