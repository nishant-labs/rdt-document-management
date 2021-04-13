import React from 'react';
import { shallow } from 'enzyme';
import { SearchBoxView } from './search-box-view';
import { PopulationContext } from '../../context/population-context';
import { GdpContext } from '../../context/gdp-context';
import { EnvConfigContext } from '../../context/env-config-context';

const mockGdpContext = {
  fetchGdp: jest.fn(),
  resetGdpData: jest.fn(),
};

const mockPopulationContext = {
  fetchGdp: jest.fn(),
  resetGdpData: jest.fn(),
};

const mockEnvContext = {
  envConfigData: { baseUrl: 'http://example.com' },
  error: null,
};

const setupTest = (setupProps = {}) => {
  const wrapper = shallow(
    <EnvConfigContext.Provider value={mockEnvContext}>
      <PopulationContext.Provider value={mockGdpContext}>
        <GdpContext.Provider value={mockPopulationContext}>
          <SearchBoxView />
        </GdpContext.Provider>
      </PopulationContext.Provider>
    </EnvConfigContext.Provider>
  );
  return {
    wrapper,
    wrapperComponent: wrapper.find(SearchBoxView),
  };
};

describe('components/search-box/search-box-view', () => {
  test('should render', () => {
    const { wrapper } = setupTest();
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
