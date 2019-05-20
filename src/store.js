// store.js

import { createStore, combineReducers, applyMiddleware } from 'redux';
import newsReducer from './reducers/newsReducer';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
  news: newsReducer
});

const configureStore = () => {
  let store = createStore(rootReducer,  applyMiddleware(thunk));
  return store;
}

export default configureStore;
