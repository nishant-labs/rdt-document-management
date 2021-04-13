import React, { useCallback, useContext, useState } from 'react';
import { fetchPopulationFromWorldBank } from '../../utils/http';
import { EnvConfigContext } from '../env-config-context';

export const PopulationContext = React.createContext();
export const PopulationContextConsumer = PopulationContext.Consumer;

export const PopulationContextProvider = ({ children }) => {
	const { envConfigData } = useContext(EnvConfigContext);
	const [populationData, setPopulationData] = useState();
	const [populationApiError, setPopulationApiError] = useState();

	const fetchPopulation = useCallback(
		async (fullYear) => {
			const { error, payload } = await fetchPopulationFromWorldBank(
				envConfigData.baseUrl,
				fullYear
			);
			setPopulationData(payload);
			setPopulationApiError(error);
		},
		[envConfigData]
	);

	const resetPopulationData = useCallback(() => {
		setPopulationData(undefined);
		setPopulationApiError(undefined);
	}, []);

	return (
		<PopulationContext.Provider
			value={{
				populationData,
				populationApiError,
				fetchPopulation,
				resetPopulationData,
			}}
		>
			{children}
		</PopulationContext.Provider>
	);
};
