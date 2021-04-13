import React, { useCallback, useContext, useState } from 'react';
import { fetchPopulationFromWorldBank } from '../utils/http';
import { EnvConfigContext } from './env-config-context';

export const PopulationContext = React.createContext();

export const PopulationContextProvider = ({ children }) => {
	const { envConfigData } = useContext(EnvConfigContext);
	const [populationData, setPopulationData] = useState();
	const [error, setError] = useState();

	const fetchPopulation = useCallback(
		async (fullYear) => {
			const { error, payload } = await fetchPopulationFromWorldBank(
				envConfigData.baseUrl,
				fullYear
			);
			setPopulationData(payload);
			setError(error);
		},
		[envConfigData]
	);

	return (
		<PopulationContext.Provider
			value={{ populationData, error, fetchPopulation }}
		>
			{children}
		</PopulationContext.Provider>
	);
};
