import { SET_WORKER_CATEGORY } from '../actions/types';

const initialState = {
  workerCategory:{
  }
};

const workerCategoryReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_WORKER_CATEGORY:
      return {
        ...state,
        workerCategory:action.payload
      };
    default:
      return state;
  }
}

export default workerCategoryReducer;
