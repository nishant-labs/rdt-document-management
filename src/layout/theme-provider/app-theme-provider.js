import {
	ThemeProvider,
	createMuiTheme,
	makeStyles,
} from '@material-ui/core/styles';

const theme = createMuiTheme({
	overrides: {
		MuiTypography: {
			h1: {
				fontSize: [22, '!important'],
				fontWeight: "bold",
			},
		},
	},
});

const useStyles = makeStyles({
	root: {
		width: '100%',
		height: '100%',
	},
});

export const AppThemeProvider = ({ children }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</div>
	);
};
