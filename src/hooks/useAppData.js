import { useEffect, useReducer } from 'react';
import { get_students } from '../lib/api';

/** Reducer accepts an action type and returns the current state, dispatch pair. */

/** Action types */
const SET_STUDENTS= 'SET_STUDENTS';
const SET_STUDENT_SEARCH = 'SET_STUDENT_SEARCH';

/** Reducer switch statements */
const reducer = (state, action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return { ...state, students: action.value };
    case SET_STUDENT_SEARCH:
      return { ...state, studentSearch: action.value };
    default:
      throw new Error(`App::reducer::error - Invalid action type: ${action.type}`);
  }
};

/** Return App initial state */
const initApp = () => {
  return {
		students: [],
		studentSearch: [],
  };
};

const useAppData = () => {
  const [state, dispatch] = useReducer(reducer, initApp());

  // Set methods for each state
  const setStudents = (students) => dispatch({ type: SET_STUDENTS, value: students });
  const setStudentSearch = (studentSearch) => dispatch({ type: SET_STUDENT_SEARCH, value: studentSearch });

	const studentNames = state.students.map(el => `${el.firstName} ${el.lastName}`);

	useEffect(() => {
		get_students()
			.then(data => setStudents(data))
			.catch(err => console.log('get_students::error - ', err));
	}, []);

  return {
    state,
		setStudentSearch,
		studentNames,
  }
};

export default useAppData;
