import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import app from './reducer/reducer';

const configureStore = () => {
    return createStore(app, applyMiddleware(thunk));
};

export default configureStore;