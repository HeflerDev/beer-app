import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap';

import store from './store/store';
import {Provider} from 'react-redux';

import App from './App';
import './App.scss';

const reactApp = document.createElement("div")
document.body.appendChild(reactApp)

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    reactApp,
);
