import React, { useState } from 'react';
import { styled } from '@mui/material';
import SearchBar from "material-ui-search-bar";

const StyledSearchBar = styled(SearchBar)((props) => ({
	'& .MuiButtonBase-root': {
		'&:hover': {
			backgroundColor: 'unset',
		}
	},
}));

const SearchTextInput = (props) => {
	const { names, students, setStudentSearch } = props;
	const [value, setValue] = useState('');

	const filterStudentsByName = (name) => {
		let re = new RegExp(name, "i");
		let result = names.filter(item => re.test(item));
		return result;
	}

	const handleSearchFieldsChange = (value) => {
		const result = filterStudentsByName(value);
		if (result.length) {
			const filterStudents = students.filter(el => {
				const name = el.firstName + ' ' + el.lastName;
				if (result.includes(name)) return el;
			});
			setStudentSearch(filterStudents);
		}
		setValue(value);
	}

	const onCancelSearch = () => {
		setValue('');
		setStudentSearch([]);
	}

	return (
		<StyledSearchBar
				value={value}
				onChange={(newValue) => handleSearchFieldsChange(newValue)}
				onCancelSearch={() => onCancelSearch()}
				cancelOnEscape={true}
				placeholder="Search Student"
			/>
	)
};

export default SearchTextInput;
