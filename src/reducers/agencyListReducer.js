import { SET_AGENCY_LIST } from '../actions/types';

const initialState = {
  agencyList:{
  }
};

const agencyListReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_AGENCY_LIST:
      return {
        ...state,
        agencyList:action.payload
      };
    default:
      return state;
  }
}

export default agencyListReducer;
