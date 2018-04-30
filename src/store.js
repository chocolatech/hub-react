import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import createGlobalReducer from './global-reducer';
import globalSagas from './global-sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
];

const store = createStore(
  createGlobalReducer(),
  applyMiddleware(...middlewares),
);

sagaMiddleware.run(globalSagas);

export default store;