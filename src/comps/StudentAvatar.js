import React from 'react';
import { Avatar, styled } from '@mui/material';

const StyledAvatar = styled(Avatar)((props) => ({
	[props.theme.breakpoints.up("xs")]: {
		margin: '0.25rem',
		height: '5vw',
		width: '5vw',
  },
  [props.theme.breakpoints.up("lg")]: {
		margin: '1rem',
		height: '7vw',
		width: '7vw',
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
