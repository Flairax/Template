import { combineReducers } from 'redux';

import products from './Products/products.RED';
import roles from './Roles/roles.RED';

export default combineReducers({
   products,
   roles,
})