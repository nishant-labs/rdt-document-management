import React, { useEffect, useState } from 'react';
import { fetchEnvConfig } from '../../utils/http';

export const EnvConfigContext = React.createContext();

export const EnvConfigContextProvider = ({ children }) => {
	const [envConfigData, setEnvConfigData] = useState();
	const [error, setError] = useState();

	useEffect(() => {
		fetchEnvConfig().then(({ error, payload }) => {
			setEnvConfigData(payload);
			setError(error);
		});
	}, []);

	return (
		<EnvConfigContext.Provider value={{ envConfigData, error }}>
			{envConfigData ? children : <div>Loading app...</div>}
			{error && <div>Something gone wrong while fetching config</div>}
		</EnvConfigContext.Provider>
	);
};
