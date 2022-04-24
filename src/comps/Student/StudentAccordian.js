import { Accordion } from '@mui/material';
import React, { useState } from 'react';
import StudentDetails from './StudentDetails';
import StudentSummary from './StudentSummary';

const StudentAccordion = (props) => {
  const [expanded, setExpanded] = useState(false);
	const { student } = props;

  const handleChange = (event) => {
    setExpanded(!expanded);
  };

	const average = student.grades.reduce((a, b) => Number(a) + Number(b), 0) / student.grades.length || 0;
	const summary = {
		Email: student.email,
		Compnay: student.company,
		Skill: student.skill,
		Average: average,
	};
	const tests = student.grades.map((grade, i) => {
		const label = `Test ${i + 1}`;
		const test = { [label]: grade };
		return test;
	})

  return (
		<Accordion
			expanded={expanded}
			onChange={handleChange}
			disableGutters
		>
			<StudentSummary
				src={student.pic}
				name={`${student.firstName} ${student.lastName}`}
				data={summary}
			/>
			<StudentSummary
				data={tests}
			/>
			{/* <StudentDetails
				data={tests}
			/> */}
		</Accordion>
  );
}

export default StudentAccordion;
