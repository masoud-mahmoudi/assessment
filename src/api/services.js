import { getNewsRequest, getNewsSuccess, getNewsFailed} from '../actions/news';
import axios from 'axios';
/*axios.defaults.baseURL = 'https://api.nytimes.com/';
axios.defaults.timeout = 20000;
*/
const ApiService = {
  getNewsList() {
    return (dispatch,state) =>{
        dispatch(getNewsRequest());
        return axios.get('https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=qG808Xn6G5zAb6Wm0e6hS52JQjS6L2Er').then((response) => {
          if (response.data && response.data.results)
            dispatch(getNewsSuccess(response.data.results));
          else
            dispatch(getNewsFailed('API didn`t response proper response'));
        }).catch((err) => {
            dispatch(getNewsFailed('There was a problem connecting to server.Please try again later'));
        });
    };
  }
}
export default ApiService;
