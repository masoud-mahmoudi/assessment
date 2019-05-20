

const initialState = {
  news:[],
  message:null,
  isFetching:false
};

const newsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_NEWS_SUCCESS':
      return {
        ...state,
        news:action.payload,
        isFetching:false
      };
    case 'GET_NEWS_REQUEST':
      return {
        ...state,
        isFetching:true
      };
    case 'GET_NEWS_FAILED':
      return {
        ...state,
        isFetching:false,
        message: action.payload
      };


    default:
      return state;
  }
}

export default newsReducer;
