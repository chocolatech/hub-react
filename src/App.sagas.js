import { takeLatest, call, put } from 'redux-saga/effects';

import { getAPIDataLoaded, getAPIDataError } from './App.actions';

import {
  GET_API_DATA,
} from './App.consts';

/*
  Data downloading using pure JS fetch
  @type: JS object
  { result: resultObj, error: errorObj }
*/
const fetchData = (url, options) => {
  const fetchRequest = new Request(url, options);

  return fetch(fetchRequest)
    .then((response) => (
      response.json().then((result) => ({ result }))
    ))
    .catch((error) => ({ error }));
};

function* getApiData(action) {
  const BASE_URL = 'https://api.github.com';
  const { result, error } = yield call(fetchData, `${BASE_URL}/users/${action.username}/repos`, { method: 'get' });

  if (error) {
    yield put(getAPIDataError(error));
  }

  yield put(getAPIDataLoaded(result));
}

function* apiData() {
  yield takeLatest(GET_API_DATA, getApiData);
}

export default apiData;