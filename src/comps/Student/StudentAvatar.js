import { Avatar } from '@mui/material';
import React from 'react';

const StudentAvatar = (props) => {
  return (
    <Avatar
      variant="circular"
      src={props.src ? props.src : ''}
      alt='student-avatar'
			sx={{
				height: {
					xs: '5vw',
					lg: '7vw',
				},
				width: {
					xs: '5vw',
					lg: '7vw',
				},
				margin: {
					xs: '0.25rem',
					lg: '1rem',
				},
				visibility: props.src ? 'visible' : 'hidden',
				border: '#D3D3D3 1px solid',
				objectFit: 'cover'
			}}
    />
  );
}

export default StudentAvatar;
