import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'antd/dist/antd.css';
import './Static/css/index.css';

import { Provider } from 'react-redux';
import storeConfig from './Store';
const store = storeConfig();

ReactDOM.render(
    <Provider store={ store }>
            <App/>
    </Provider>,
document.getElementById('root'));
