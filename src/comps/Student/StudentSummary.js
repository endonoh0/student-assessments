import React from 'react';
import { AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StudentAvatar from './StudentAvatar';

const StudentSummary = (props) => {
	const { src, name, email, company, skill, average } = props;

	return (
		<AccordionSummary
			expandIcon={<ExpandMoreIcon />}
			aria-controls="panel1bh-content"
			id="panel1bh-header"
		>
			<StudentAvatar src={src} />
			<Typography
				sx={{
					fontSize: {
						xs: '18px',
						lg: '36px',
					},
					margin: '0 10px 0 10px',
					fontWeight: '700',
				}}
			>
				<b>{name}</b>
			</Typography>
		</AccordionSummary>
	)
}

export default StudentSummary;
