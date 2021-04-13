import React from 'react';
import { GdpContextConsumer } from '../context/gdp-context';
import { PopulationContextConsumer } from '../context/population-context';

export const withConsumers = (WrappedComponent) =>
  class App extends React.Component {
    render() {
      return (
        <GdpContextConsumer>
          {(gdpProps) => (
            <PopulationContextConsumer>
              {(populationProps) => (
                <WrappedComponent
                  {...this.props}
                  {...populationProps}
                  {...gdpProps}
                />
              )}
            </PopulationContextConsumer>
          )}
        </GdpContextConsumer>
      );
    }
  };
