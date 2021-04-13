import { currencyFormatter, numberFormatter } from './number';

describe('utils/number', () => {
	test('should give formatted currency on currencyFormatter call', () => {
		expect(currencyFormatter(1234)).toEqual('$1,234.00');
  });
  
  test('should give formatted number on numberFormatter call', () => {
		expect(numberFormatter(12346)).toEqual('12,346');
	});
});
