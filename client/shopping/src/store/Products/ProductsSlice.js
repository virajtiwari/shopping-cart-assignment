import { GET_PRODUCTS_REQUEST, GET_DATA_REQUEST_PRODUCT } from "./ProductsTypes";

const INITIAL_STATE = {};

export default function ProductsSlice(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return state;
    case GET_DATA_REQUEST_PRODUCT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
