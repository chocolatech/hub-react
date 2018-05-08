import { fork, all } from 'redux-saga/effects';
// import App from './App';
import app_saga from './App.sagas';


const sagas = [
    app_saga,
    // NOTE: put other app sagas here
];

function* globalSagas() {
    const globalSagasForks = sagas.map((saga) => fork(saga));

    yield all([...globalSagasForks]);
}

export default globalSagas;
