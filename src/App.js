import React from 'react';
import { Box, Grid } from '@mui/material';
import useAppData from './hooks/useAppData';
import Student from './comps/Student';

function App() {
	const { state } = useAppData();
	const { students } = state;

  return (
    <Grid container
			direction='column'
			sx={{
				margin: '0.5rem',
				padding: '1rem',
				alignContent: 'center',
			}}
		>
			<Box
				sx={{
					width: {
						xs: '350px',
						xl: '900px',
					},
					margin: '0.5rem',
				}}
			>
				{students.map((student, i) => <Student student={student} key={i} />)}
			</Box>
    </Grid>
  );
}

export default App;
