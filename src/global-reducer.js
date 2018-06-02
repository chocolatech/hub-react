import { combineReducers } from 'redux';
import appReducer from './App.reducer';

const containersReducer = {
    containers: combineReducers({
        appReducer,
    }),
};

const createGlobalReducer = () => (
    combineReducers({
        ...containersReducer,
    })
);

export default createGlobalReducer;