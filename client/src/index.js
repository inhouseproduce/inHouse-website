import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App/index';
import * as serviceWorker from './serviceWorker';

import config from './config';
import store from './store';

import { AuthProvider } from './Provider/Auth';

const app = (
    <Provider store={store()}>
        <BrowserRouter basename={config.basename}>
            <AuthProvider>
                <App />
            </AuthProvider>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
