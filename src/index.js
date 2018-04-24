import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

// REDUX
import { Provider } from 'react-redux';
import { createStore, applyMiddleware , } from 'redux';
import rootReducers from './redux/rootReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSagas from './redux/rootSagas';
import 'typeface-exo';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducers, {}, composeWithDevTools(applyMiddleware(sagaMiddleware)));

// run the saga
sagaMiddleware.run(rootSagas);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
