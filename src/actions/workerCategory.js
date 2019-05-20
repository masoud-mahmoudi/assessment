
import { SET_WORKER_CATEGORY } from './types';
export const setWorkerCategory = category => {
  return {
    type: SET_WORKER_CATEGORY,
    payload: category
  }
};
