
import {
  GET_PROJECT_LIST_REQUEST,GET_PROJECT_LIST_SUCCESS, GET_PROJECT_LIST_FAILED
  ,ADD_NEW_WORKER
  ,SET_SELECTED_PROJECT
  ,SET_SELECTED_DATE
} from './types';

export const getProjectListRequest = () => {
  return {
    type: GET_PROJECT_LIST_REQUEST
  }
};
export const getProjectListSuccess = projectList => {
  return {
    type: GET_PROJECT_LIST_SUCCESS,
    payload: projectList
  }
};
export const getProjectListFailed= message => {
  return {
    type: GET_PROJECT_LIST_FAILED,
    payload: message
  }
};
/////
export const addNewWorker= worker => {
  return {
    type: ADD_NEW_WORKER,
    payload: worker
  }
};

export const setSelectedProject = project => {
  return {
    type: SET_SELECTED_PROJECT,
    payload: project
  }
};
export const setSelectedDate = date => {
 return {
   type: SET_SELECTED_DATE,
   payload: date
 }
};
