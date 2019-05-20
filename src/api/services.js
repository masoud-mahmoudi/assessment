import Axios from './axios';
import { getNewsRequest, getNewsSuccess, getNewsFailed} from '../actions/news';
//quentin.marquet@gmail.com/D889Q
const ApiService = {
  getNewsList() {
    return (dispatch,state) =>{
        dispatch(getNewsRequest());
        return Axios.get('svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=qG808Xn6G5zAb6Wm0e6hS52JQjS6L2Er').then((response) => {
          const data = response.data.results;
            dispatch(getNewsSuccess(data));
        }, (err) => {
            dispatch(getNewsFailed('There was a problem connecting to server.Please try again later'));
        });
    };
  }
}
export default ApiService;
