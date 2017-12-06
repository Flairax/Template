import { combineReducers } from 'redux';

import todos from './todos-R';
import active from './activeTodo';

export default combineReducers({
    todos,
    active,
})