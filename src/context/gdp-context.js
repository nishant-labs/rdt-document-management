import React, { useCallback, useContext, useState } from 'react';
import { fetchGDPFromWorldBank } from '../utils/http';
import { EnvConfigContext } from './env-config-context';

export const GdpContext = React.createContext();

export const GdpContextProvider = ({ children }) => {
	const { envConfigData } = useContext(EnvConfigContext);
	const [gdpData, setGdpData] = useState();
	const [gdpApiError, setError] = useState();

	const fetchGdp = useCallback(
		async (fullYear) => {
			const { error, payload } = await fetchGDPFromWorldBank(
				envConfigData.baseUrl,
				fullYear
			);
			setGdpData(payload);
			setError(error);
		},
		[envConfigData]
	);

	return (
		<GdpContext.Provider value={{ gdpData, gdpApiError, fetchGdp }}>
			{children}
		</GdpContext.Provider>
	);
};
