import React from 'react';
import { Avatar, styled } from '@mui/material';

const StyledAvatar = styled(Avatar)((props) => ({
	[props.theme.breakpoints.up("xs")]: {
			height: '5vw',
			width: '5vw',
  },
  [props.theme.breakpoints.up("lg")]: {
			height: '7vw',
			width: '7vw',
  },
	margin: {
		xs: '0.25rem',
		lg: '1rem',
	},
	visibility: props.src ? 'visible' : 'hidden',
	border: '#D3D3D3 1px solid',
	objectFit: 'cover',
}));

const StudentAvatar = (props) => {
  return (
		<StyledAvatar
			variant='circular'
			src={props.src ? props.src : ''}
			alt='student-avatar'
			{...props}
		/>
  );
}

export default StudentAvatar;
