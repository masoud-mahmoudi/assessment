import * as axios from 'axios';
var Axios = axios.create({
  baseURL : 'https://api.nytimes.com/',
  timeout : 20000
});
export default Axios;
