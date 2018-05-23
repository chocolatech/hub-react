import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Search } from './search-bar/search.component';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux';
import { store, history } from './store';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/account/:username" component={App} />
            </Switch>
        </ConnectedRouter>

    </Provider>, document.getElementById('root'));
registerServiceWorker();
