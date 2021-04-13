export const currencyFormatter = (amount) =>
	new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(amount);

export const numberFormatter = (number) =>
	new Intl.NumberFormat('en-US').format(number);
