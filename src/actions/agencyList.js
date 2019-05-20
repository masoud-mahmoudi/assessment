
import { SET_AGENCY_LIST } from './types';
export const setAgencyList = agencyList => {
  return {
    type: SET_AGENCY_LIST,
    payload: agencyList
  }
};
