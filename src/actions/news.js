
import { GET_NEWS_REQUEST,GET_NEWS_SUCCESS,GET_NEWS_FAILED } from './types';
export const getNewsSuccess = news => {
  return {
    type: GET_NEWS_SUCCESS,
    payload: news
  }
};
export const getNewsRequest = () => {
  return {
    type: GET_NEWS_REQUEST
  }
};
export const getNewsFailed = message => {
  return {
    type: GET_NEWS_FAILED,
    payload: message
  }
};
