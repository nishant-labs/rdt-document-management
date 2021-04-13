import React from 'react';
import { shallow } from 'enzyme';
import { GridTableContainer } from './grid-table';

const setupTest = (setupProps = {}) => {
  const wrapper = shallow(<GridTableContainer />);
  return {
    wrapper,
  };
};

describe('components/statistics-table/grid-table', () => {
  test('should render', () => {
    const { wrapper } = setupTest();
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
