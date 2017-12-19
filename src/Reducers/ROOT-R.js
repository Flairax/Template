import { combineReducers } from 'redux';

import products from './Products/products-R';
import roles from './Roles/roles-R';

export default combineReducers({
   products,
   roles,
})