import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducers/rootReducer';

import logger from 'redux-logger'
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;