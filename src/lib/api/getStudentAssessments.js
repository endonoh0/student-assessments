import axios from 'axios';

/**
 * Get student assessments data.
 *
 * @return {Promise<any>}
 */
const getStudentAssessments = () => {
	return new Promise((resolve, reject) => {
		axios.get('https://api.hatchways.io/assessment/students')
			.then(res => resolve(res.data.students))
			.catch(err => reject(JSON.stringify(err)));
	});
};

export default getStudentAssessments;
