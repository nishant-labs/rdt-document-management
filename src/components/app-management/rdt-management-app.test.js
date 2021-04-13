import { shallow } from 'enzyme';
import { RDTAppManagement } from './rdt-management-app';

const setupTest = (setupProps = {}) => {
	const baseProps = {
		populationData: {
			countryId: {
				countryName: 'countryName',
				population: 1234,
			},
		},
		gdpData: {
			countryId: {
				countryName: 'countryName',
				gdp: 12,
			},
		},
		populationApiError: null,
		gdpApiError: null,
	};
	const props = { ...baseProps, ...setupProps };
	const wrapper = shallow(<RDTAppManagement {...props} />);
	return {
		wrapper,
		props,
	};
};

describe('components/app-management/rdt-management-app', () => {
	test('should render with correct data', () => {
		const { wrapper } = setupTest();
		expect(wrapper.debug()).toMatchSnapshot();
	});

	test('should pass correct data to table', () => {
		const { wrapper, props } = setupTest();
		const tableWrapper =  wrapper.find('GridTableContainer');
		expect(tableWrapper.prop('population')).toEqual(props.populationData)
		expect(tableWrapper.prop('gdp')).toEqual(props.gdpData)
	});

	test('should render header', () => {
		const { wrapper } = setupTest();
		const header = wrapper.find('TypographyWithBox');
		expect(header.prop('type')).toEqual('h1');
		expect(header.prop('text')).toEqual('RDT Document Management Communicate');
	});

	test('should render no data message', () => {
		const { wrapper } = setupTest({ populationData: null, gdpData: null });
		const noMessageWrapper = wrapper.find('TypographyWithBox').at(1);
		expect(noMessageWrapper.prop('type')).toEqual('body1');
		expect(noMessageWrapper.prop('text')).toEqual('Use search box to get Population and GDP statistics from world bank for a specific year.');
	});

	test('should render error message', () => {
		const { wrapper } = setupTest({ populationData: null, gdpData: null, populationApiError: { message: 'error'} });
		const errorWrapper = wrapper.find('TypographyWithBox').at(1);
		expect(errorWrapper.prop('type')).toEqual('body1');
		expect(errorWrapper.prop('text')).toEqual('Something went wrong while fetching data');
	});
});
