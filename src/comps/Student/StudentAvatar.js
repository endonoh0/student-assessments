import { Avatar } from '@mui/material';
import React from 'react';

const StudentAvatar = (props) => {
  return (
    <Avatar
      variant="circular"
      src={props.src}
      alt='student-avatar'
			sx={{
				height: {
					xs: '15vw',
					lg: '10vw',
				},
				width: {
					xs: '15vw',
					lg: '10vw',
				},
				margin: {
					xs: '0.25rem',
					lg: '1rem',
				},
				border: '#D3D3D3 1px solid',
				objectFit: 'cover'
			}}
    />
  );
}

export default StudentAvatar;
