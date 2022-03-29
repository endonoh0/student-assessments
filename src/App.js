import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import useAppData from './hooks/useAppData';

const useStyles = makeStyles(theme => ({
	root: {
		margin: '0.5rem',
		padding: '1rem',
		'&.MuiGrid-container': {
			justifyContent: 'center',
		},
	},
}));


function App() {
	const { state } = useAppData();
	const { studentAssessments } = state;
	const classes = useStyles();

  return (
    <Grid container direction='column' className={classes.root}>
    </Grid>
  );
}

export default App;
