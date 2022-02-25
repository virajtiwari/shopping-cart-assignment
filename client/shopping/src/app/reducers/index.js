import { combineReducers } from "redux";
import shopping from "../../store/Home/HomeSlice";
import allProduct from "../../store/Products/ProductsSlice";

// import loader from "../Loader/LoaderReducer";

export default combineReducers({
  shopping,
  allProduct
  // loader
});
