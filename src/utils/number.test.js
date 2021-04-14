import { currencyFormatter, numberFormatter } from './number';

describe('utils/number', () => {
  describe('currencyFormatter', () => {
    test('should give formatted currency on currencyFormatter call', () => {
      expect(currencyFormatter(1234)).toEqual('$1,234.00');
    });

    test('should give formatted currency for 0 amount on currencyFormatter call', () => {
      expect(currencyFormatter(0)).toEqual('$0.00');
    });
  });

  describe('numberFormatter', () => {
    test('should give formatted number on numberFormatter call', () => {
      expect(numberFormatter(12346)).toEqual('12,346');
    });

    test('should give formatted number 0 number/population on numberFormatter call', () => {
      expect(numberFormatter(0)).toEqual('0');
    });
  });
});
