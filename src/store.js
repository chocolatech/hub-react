import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import createGlobalReducer from './global-reducer';
import globalSagas from './global-sagas';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

const sagaMiddleware = createSagaMiddleware();
export const history = createHistory(); 

const middlewares = [
  sagaMiddleware,
  routerMiddleware(history),
];

export const store = createStore(
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  createGlobalReducer(),composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(globalSagas);
