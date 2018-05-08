import {
    GET_API_DATA,
    GET_API_DATA_LOADED,
    GET_API_DATA_ERROR,
  } from './App.consts';
  
  export const getAPIData = (username) => ({
    type: GET_API_DATA,
    username
  });
  
  export const getAPIDataLoaded = (data) => ({
    type: GET_API_DATA_LOADED,
    data,
  });
  
  export const getAPIDataError = (error) => ({
    type: GET_API_DATA_ERROR,
    error,
  });