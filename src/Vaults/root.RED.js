import { combineReducers } from 'redux';

import products from './Products/products.RED';
import roles from './Roles/roles.RED';
import ratings from './Ratings/ratings.RED';

export default combineReducers({
   products,
   ratings,
   roles,
})