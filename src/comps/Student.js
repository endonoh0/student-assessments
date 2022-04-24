import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography, styled } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import StudentAvatar from './StudentAvatar';

const StyledNameTypography = styled(Typography)((props) => ({
	[props.theme.breakpoints.up("xs")]: {
		fontSize: '18px',
  },
  [props.theme.breakpoints.up("lg")]: {
		fontSize: '36px',
  },
	margin: '0 1.25rem 0 1.25rem',
	fontWeight: '700',
}));

const StyledTypography = styled(Typography)((props) => ({
	marginLeft: '2.25rem',
}));

const StyledAccordionSummary = styled(AccordionSummary)((props) => ({
	'& .MuiAccordionSummary-expandIconWrapper': {
		marginBottom: '95px',
	},
}));

const Student = ({student}) => {
  const [expanded, setExpanded] = useState(false);

	const name = student.firstName + ' ' + student.lastName;
	const average = student.grades.reduce((a, b) => Number(a) + Number(b), 0) / student.grades.length || 0;

	const summaryDetails = {
		Email: student.email,
		Compnay: student.company,
		Skill: student.skill,
		Average: average + '%',
	};

	const testDetails = student.grades.map((grade, i) => {
		const label = `Test ${i + 1}`;
		const test = { [label]: grade };
		return test;
	});

  const handleChange = (event) => {
    setExpanded(!expanded);
  };

	function getSummaryDetails (dataset) {
		let details;
		let src = student.pic;

		if (Array.isArray(dataset)) {
			src = '';
			details = dataset.map((el, i) => {
				const label = Object.keys(el)[0];
				const value = Object.values(el)[0];
				return (
					<StyledTypography key={i}>
						{label}: &nbsp;&nbsp;&nbsp;&nbsp; {value}%
					</StyledTypography>
				)
			});
		} else {
			details = Object.keys(dataset).map((label, i) => {
				return (
					<StyledTypography key={i}>
						{label}: {dataset[label]}
					</StyledTypography>
				)
			});
		}

		return (
		<React.Fragment>
			 <StudentAvatar src={src} />
				<Grid container>
					<Grid container direction='column'>
						{!Array.isArray(dataset) && <StyledNameTypography>
								<b>{name.toUpperCase()}</b>
							</StyledNameTypography>}
						{details}
					</Grid>
				</Grid>
			</React.Fragment>
		);
	};

  return (
		<Accordion
			expanded={expanded}
			onChange={handleChange}
			disableGutters
		>
			<StyledAccordionSummary
				expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
				aria-controls="panel1bh-content"
				id="panel1bh-header"
			>
				{getSummaryDetails(summaryDetails)}
			</StyledAccordionSummary>
			<AccordionDetails
				sx={{
					display: 'flex',
				}}
			>
				{getSummaryDetails(testDetails)}
			</AccordionDetails>
		</Accordion>
  );
}

export default Student;
