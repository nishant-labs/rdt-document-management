import { useCallback, useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { GdpContext } from '../../context/gdp-context';
import { PopulationContext } from '../../context/population-context';

export const SearchBoxView = () => {
	const { fetchGdp } = useContext(GdpContext);
	const { fetchPopulation } = useContext(PopulationContext);
	const [hasError, setHasError] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const [isTouched, setIsTouched] = useState(false);

	const handleBlur = useCallback(() => {
		setIsTouched(true);
	}, []);

	const handleChange = useCallback(({ target: { value } }) => {
		const isInValid = value.length < 4 || isNaN(value, 10);
		setHasError(isInValid);
		setSearchValue(value);
	}, []);

	const handleSearchClick = useCallback(() => {
		fetchGdp(searchValue);
		fetchPopulation(searchValue);
	}, [fetchGdp, fetchPopulation, searchValue]);

	const showError = hasError && isTouched;
	const isButtonDisabled = hasError || !(isTouched && !!searchValue);
	return (
		<Box display="flex" flexDirection="row" justifyContent="center" p={1} m={1}>
			<Box p={1}>
				<TextField
					error={showError}
					value={searchValue}
					onBlur={handleBlur}
					onChange={handleChange}
					variant="outlined"
					label="Enter Year"
					helperText={showError && 'Enter 4 digit full year, e.g. 2019, 1997 etc...'}
					fullWidth
					required
				/>
			</Box>
			<Box p={2}>
				<Button variant="contained" color="primary" disabled={isButtonDisabled} onClick={handleSearchClick}>
					Get statistics
				</Button>
			</Box>
		</Box>
	);
};
