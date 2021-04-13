import React from 'react';
import { shallow } from 'enzyme';
import { TypographyWithBox } from './index';

const setupTest = (setupProps = {}) => {
	const baseProps = {
		type: 'h1',
		text: 'This is body of the text',
	};
	const props = { ...baseProps, ...setupProps };
	const wrapper = shallow(<TypographyWithBox {...props} />);
	return {
		wrapper,
	};
};

describe('components/TypographyWithBox', () => {
	test('should render', () => {
		const { wrapper } = setupTest();
		expect(wrapper.debug()).toMatchSnapshot();
	});
});
