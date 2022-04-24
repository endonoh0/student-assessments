import React from 'react';
import { AccordionSummary, AccordionDetails, Grid, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StudentAvatar from './StudentAvatar';


const StudentSummary = (props) => {
	const { src, name, data } = props;

	const content = (
		[
		<React.Fragment>
			<StudentAvatar src={src} />
			<Grid container>

				<Grid container direction='column'>
					{name &&
						<Typography
							sx={{
								fontSize: {
									xs: '18px',
									lg: '36px',
								},
								margin: '0 10px 0 0',
								fontWeight: '700',
							}}
						>
							<b>{name.toUpperCase()}</b>
						</Typography>
					}

					{name && Object.keys(data).map((label, i) => {
						return (
							<Typography key={i} sx={{ marginLeft: '1.25rem' }}>
								{label}: {data[label]}
							</Typography>
						)
					})}
					{!name && data.map((el, i) => {
						const label = Object.keys(el)[0];
						const value = Object.values(el)[0];
						return (
							<Typography key={i} sx={{ marginLeft: '1.25rem' }}>
								{label}: {value}
							</Typography>
						)
					})}
				</Grid>
			</Grid>
		</React.Fragment>
		]
	)

	if (src && name) {
		return (
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1bh-content"
				id="panel1bh-header"
			>
				{content}
			</AccordionSummary>
		)
	}

	return (
		<AccordionDetails
			sx={{
				display: 'flex',
			}}
		>
			{content}
		</AccordionDetails>
	)
}

export default StudentSummary;
