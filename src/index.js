import React from 'react';
import { createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/app';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
