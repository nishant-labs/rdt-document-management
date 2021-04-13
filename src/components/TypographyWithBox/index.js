import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export const TypographyWithBox = ({ type, text }) => {
	return (
		<Box display="flex" flexDirection="row" justifyContent="center" p={1}>
			<Typography variant={type} gutterBottom>
				{text}
			</Typography>
		</Box>
	);
};
