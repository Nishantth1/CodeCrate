// problemReducer.js
import { ADD_PROBLEM, DELETE_PROBLEM, UPDATE_PROBLEM, FETCH_PROBLEMS } from '../actions/problemActions.js';

const initialState = {
  problems: [],
};

const problemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROBLEM:
      return {
        ...state,
        problems: [...state.problems, action.payload],
      };
    case DELETE_PROBLEM:
      return {
        ...state,
        problems: state.problems.filter(problem => problem.id !== action.payload),
      };
    case UPDATE_PROBLEM:
      return {
        ...state,
        problems: state.problems.map(problem =>
          problem.id === action.payload.id ? action.payload : problem
        ),
      };
    case FETCH_PROBLEMS:
      return {
        ...state,
        problems: action.payload,
      };
    default:
      return state;
  }
};

export default problemReducer;
