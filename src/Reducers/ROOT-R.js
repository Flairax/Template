import { combineReducers } from 'redux';

import products from './products-R';
import roles from './roles-R';

export default combineReducers({
   products,
   roles,
})