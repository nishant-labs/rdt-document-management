import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { RDTDocumentManagement } from './components/app-management';
import { PopulationContextProvider } from './context/population-context';
import { GdpContextProvider } from './context/gdp-context';
import { EnvConfigContextProvider } from './context/env-config-context';

ReactDOM.render(
  <React.StrictMode>
    <EnvConfigContextProvider>
      <PopulationContextProvider>
        <GdpContextProvider>
          <RDTDocumentManagement />
        </GdpContextProvider>
      </PopulationContextProvider>
    </EnvConfigContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
