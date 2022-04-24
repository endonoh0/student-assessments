import React from 'react';
import { AccordionDetails, Typography } from '@mui/material';

const StudentDetails = (props) => {
	return (
		<AccordionDetails>
			{props.data.map(el => {
				const label = Object.keys(el)[0];
				const value = Object.values(el)[0];
				return (
					<Typography>
						{label} {value}
					</Typography>
				)
			})}
		</AccordionDetails>
	)
}

export default StudentDetails;
