import { fork, all } from 'redux-saga/effects';
import app_saga from './App.sagas';


const sagas = [
    app_saga,
];

function* globalSagas() {
    const globalSagasForks = sagas.map((saga) => fork(saga));

    yield all([...globalSagasForks]);
}

export default globalSagas;
