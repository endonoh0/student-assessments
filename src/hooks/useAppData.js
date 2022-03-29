import { useEffect, useReducer } from 'react';
import { get_student_assessments } from '../lib/api';

/** Reducer accepts an action type and returns the current state, dispatch pair. */

/** Action types */
const SET_STUDENT_ASSESSMENTS = 'SET_STUDENT_ASSESSMENTS';

/** Reducer switch statements */
const reducer = (state, action) => {
  switch (action.type) {
    case SET_STUDENT_ASSESSMENTS:
      return { ...state, studentAssessments: action.value };
    default:
      throw new Error(`App::reducer::error - Invalid action type: ${action.type}`);
  }
};

/** Return App initial state */
const initApp = () => {
  return {
		studentAssessments: [],
  };
};

const useAppData = () => {
  const [state, dispatch] = useReducer(reducer, initApp());

  // Set methods for each state
  const setStudentAssessments = (studentAssessments) => dispatch({ type: SET_STUDENT_ASSESSMENTS, value: studentAssessments });

	useEffect(() => {
		get_student_assessments()
			.then(data => {
				console.log('data', data);
				setStudentAssessments(data);
		})
			.catch(err => console.log('get_student_asssessments::error - ', err));
	}, []);

  return {
    state,
  }
};

export default useAppData;
