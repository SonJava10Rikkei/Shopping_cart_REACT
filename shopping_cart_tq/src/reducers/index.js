import { combineReducers } from 'redux';
import listCart from "./listCart";
import listProduct from "./listProduct";
import notify from "./notify";
//combineReducers({listCart:listCart,listProduct:listProduct,notify:notify})
export const reducer = combineReducers({ listCart, listProduct, notify });