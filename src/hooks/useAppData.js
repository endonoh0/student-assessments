import { useEffect, useReducer } from 'react';
import { get_students } from '../lib/api';

/** Reducer accepts an action type and returns the current state, dispatch pair. */

/** Action types */
const SET_STUDENTS= 'SET_STUDENT_ASSESSMENTS';

/** Reducer switch statements */
const reducer = (state, action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return { ...state, students: action.value };
    default:
      throw new Error(`App::reducer::error - Invalid action type: ${action.type}`);
  }
};

/** Return App initial state */
const initApp = () => {
  return {
		students: [],
  };
};

const useAppData = () => {
  const [state, dispatch] = useReducer(reducer, initApp());

  // Set methods for each state
  const setStudents = (students) => dispatch({ type: SET_STUDENTS, value: students });

	useEffect(() => {
		get_students()
			.then(data => {
				console.log('data', data);
				setStudents(data);
		})
			.catch(err => console.log('get_students::error - ', err));
	}, []);

  return {
    state,
  }
};

export default useAppData;
