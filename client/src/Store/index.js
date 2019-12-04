import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import app from './reducers/app';

const rootReducer = combineReducers({
    app
});

const configureStore = () => {
    return createStore( rootReducer,applyMiddleware( thunk ));
};

export default configureStore;