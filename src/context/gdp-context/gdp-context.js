import React, { useCallback, useContext, useState } from 'react';
import { fetchGDPFromWorldBank } from '../../utils/http';
import { EnvConfigContext } from '../env-config-context';

export const GdpContext = React.createContext();
export const GdpContextConsumer = GdpContext.Consumer;

export const GdpContextProvider = ({ children }) => {
	const { envConfigData } = useContext(EnvConfigContext);
	const [gdpData, setGdpData] = useState();
	const [gdpApiError, setGdpApiError] = useState();

	const fetchGdp = useCallback(
		async (fullYear) => {
			const { error, payload } = await fetchGDPFromWorldBank(
				envConfigData.baseUrl,
				fullYear
			);
			setGdpData(payload);
			setGdpApiError(error);
		},
		[envConfigData]
	);

	const resetGdpData = useCallback(() => {
		setGdpData(undefined);
		setGdpApiError(undefined);
	}, []);

	return (
		<GdpContext.Provider
			value={{ gdpData, gdpApiError, fetchGdp, resetGdpData }}
		>
			{children}
		</GdpContext.Provider>
	);
};
