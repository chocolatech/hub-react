import { fromJS } from 'immutable';

import {
  GET_API_DATA,
  GET_API_DATA_LOADED,
  GET_API_DATA_ERROR,
  SET_USERNAME,
} from './App.consts';

const initialState = fromJS({
  apiData: [],
  username: '',
  apiDataLoading: null,
  apiDataLoaded: null,
  apiDataError: null,
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API_DATA:
      return state
        .set('apiDataLoading', true)
        .set('apiDataError', null)
        .set('username', action.username);
    case GET_API_DATA_LOADED:
      return state
        .set('apiData', action.data)
        .set('apiDataLoading', false)
        .set('apiDataLoaded', true)
        .set('apiDataError', null);
    case GET_API_DATA_ERROR:
      return state
        .set('apiDataLoading', false)
        .set('apiDataLoaded', false)
        .set('apiDataError', action.error);
    case SET_USERNAME:
      return state
        .set('username', action.username);
    default:
      return state;
  }
};

export default appReducer;