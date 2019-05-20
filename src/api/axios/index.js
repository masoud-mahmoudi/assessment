import * as axios from 'axios';


var instance = axios.create();
instance.defaults.baseURL = 'https://api.nytimes.com/';
instance.defaults.timeout = 20000;

export { instance as default };
