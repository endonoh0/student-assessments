import React from 'react';
import { Box, Grid } from '@mui/material';
import useAppData from './hooks/useAppData';
import StudentAccordion from './comps/Student/StudentAccordian';

function App() {
	const { state } = useAppData();
	const { studentAssessments } = state;

  return (
    <Grid container direction='column' sx={{ margin: '0.5rem', padding: '1rem', alignContent: 'center' }}>
			<Box sx={{
				width: {
					xs: '350px',
					xl: '900px',
				},
				margin: '0.5rem',
			}}>
				{studentAssessments.map(student => <StudentAccordion student={student} />)}
			</Box>
    </Grid>
  );
}

export default App;
