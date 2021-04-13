import template from 'lodash/template';
import { GET_INDICATOR_ENDPOINT, STATS_TYPE } from '../constants/endpoints';

const fetchApiData = async (url, options) => {
	const response = await fetch(url, options);

	if (response.ok) {
		const payload =
			response.headers.get('Content-Type').indexOf('application/json') !== -1
				? await response.json()
				: await response.text();
		return { payload };
	}
	const message = await response.json();
	return {
		error: {
			status: response.status,
			message,
		},
	};
};

const endpointTemplate = template(GET_INDICATOR_ENDPOINT, {
	interpolate: /{([\s\S]+?)}/g,
});

export const fetchPopulationFromWorldBank = async (baseUrl, fullYear) => {
	const populationEndpoint = endpointTemplate({
		baseUrl,
		countryId: 'all',
		statsType: STATS_TYPE.POPULATION,
		fullYear,
	});

	return await fetchApiData(populationEndpoint);
};

export const fetchGDPFromWorldBank = async (baseUrl, fullYear) => {
	const populationEndpoint = endpointTemplate({
		baseUrl,
		countryId: 'all',
		statsType: STATS_TYPE.GDP,
		fullYear,
	});

	return await fetchApiData(populationEndpoint);
};

export const fetchEnvConfig = async () =>
	await fetchApiData('configuration.json');
