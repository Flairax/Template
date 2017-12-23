import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Vaults/root.RED';

import logger from 'redux-logger'
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;