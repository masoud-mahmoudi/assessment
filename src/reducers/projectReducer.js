import {
  GET_PROJECT_LIST_REQUEST, GET_PROJECT_LIST_SUCCESS, GET_PROJECT_LIST_FAILED
  ,ADD_NEW_WORKER
  ,SET_SELECTED_PROJECT
  ,SET_SELECTED_DATE } from '../actions/types';
import moment from 'moment';

const initialState = {
  isFetching:false,
  message:null,
  projectList:[],
  selectedProject:null,
  selectedDate: moment().format('YYYYMMDD')//'20190320'
};

const projectReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_PROJECT_LIST_SUCCESS:
      return {
        ...state,
        projectList:action.payload,
        isFetching:false
      };
    case GET_PROJECT_LIST_REQUEST:
      return {
        ...state,
        isFetching:true
      };
    case GET_PROJECT_LIST_FAILED:
      return {
        ...state,
        message:action.payload,
        isFetching:false
      };

    case ADD_NEW_WORKER :
      var key =action.payload.m_nID_Worker;
      var newObj = {};
      newObj[key]= action.payload;
      return {
        ...state,
        selectedProject:{
          ...state.selectedProject,
          m_taWorkersList : Object.assign(state.selectedProject.m_taWorkersList,newObj)
        }
      };


    case SET_SELECTED_PROJECT:
      return {
        ...state,
        selectedProject : action.payload
      };
    case SET_SELECTED_DATE:
      return {
        ...state,
        selectedDate : action.payload
      };
    default:
      return state;
  }
}

export default projectReducer;
