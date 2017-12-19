import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducers/ROOT-R';

import logger from 'redux-logger'
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
//const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;