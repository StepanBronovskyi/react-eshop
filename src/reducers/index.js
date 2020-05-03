import { combineReducers } from 'redux';
import category from './category';
import product from './product';
import filter from './filter';

export default combineReducers({
    category,
    product,
    filter,
});
