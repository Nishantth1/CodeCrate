// problemActions.js
import axios from 'axios';
export const ADD_PROBLEM = 'ADD_PROBLEM';
export const DELETE_PROBLEM = 'DELETE_PROBLEM';
export const UPDATE_PROBLEM = 'UPDATE_PROBLEM';
export const FETCH_PROBLEMS = 'FETCH_PROBLEMS';

export const addProblem = (newProblem) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:8000/problems', newProblem);
      dispatch({
        type: ADD_PROBLEM,
        payload: response.data, 
      });
    } catch (error) {
      console.error('Error adding problem:', error);
    }
  };
};

export const deleteProblem = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8000/problems/${id}`);
      dispatch({
        type: DELETE_PROBLEM,
        payload: id,
      });  
      dispatch(fetchProblems());
    } catch (error) {
      console.error('Error deleting problem:', error);
    }
  };
};

export const updateProblem = (id, updatedProblem) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`http://localhost:8000/problems/${id}`, updatedProblem);
      dispatch({
        type: UPDATE_PROBLEM,
        payload: response.data,
      });
      dispatch(fetchProblems());
    } catch (error) {
      console.error('Error updating problem:', error);
    }
  };
};

export const fetchProblems = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:8000/problems');
      dispatch({
        type: FETCH_PROBLEMS,
        payload: response.data, 
      });
    } catch (error) {
      console.error('Error fetching problems:', error);
    }
  };
};
