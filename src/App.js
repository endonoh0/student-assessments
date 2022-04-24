import React from 'react';
import { Box, Grid, styled } from '@mui/material';
import useAppData from './hooks/useAppData';
import Student from './comps/Student';
import SearchTextInput from './comps/SearchTextInput';

const StyledGridContainer = styled(Grid)((props) => ({
	margin: '0.5rem',
	padding: '1rem',
	alignContent: 'center',
}));

const StyledBox = styled(Box)((props) => ({
	[props.theme.breakpoints.up("xs")]: {
		width: '350px',
  },
  [props.theme.breakpoints.up("xl")]: {
		width: '900px',
  },
	margin: '0.5rem',
}));

function App() {
	const { state, setStudentSearch, studentNames } = useAppData();
	const { students, studentSearch } = state;

  return (
    <StyledGridContainer container direction='column'>
			<StyledBox>
				{students.length > 0 &&
					<SearchTextInput
						names={studentNames}
						students={students}
						setStudentSearch={setStudentSearch}
					/>
				}
				{studentSearch.length > 0 && studentSearch.map((item, i) => <Student student={item} key={i} />)}
				{studentSearch.length <= 0 && students.map((item, i) => <Student student={item} key={i} />)}
			</StyledBox>
    </StyledGridContainer>
  );
}

export default App;
