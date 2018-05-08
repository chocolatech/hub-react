import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import createGlobalReducer from './global-reducer';
import globalSagas from './global-sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
];

const store = createStore(
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  createGlobalReducer(),composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(globalSagas);

export default store;