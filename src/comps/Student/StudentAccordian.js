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

  return (
		<Accordion
			expanded={expanded}
			onChange={handleChange}
			disableGutters
		>
			<StudentSummary
				src={student.pic}
				name={`${student.firstName} ${student.lastName}`}
				email={student.email}
				company={student.company}
				skill={student.skill}
				average={'0'}
			/>
			<StudentDetails />
		</Accordion>
  );
}

export default StudentAccordion;
