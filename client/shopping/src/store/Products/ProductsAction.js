import {
  GET_PRODUCTS_REQUEST,
  GET_DATA_REQUEST_PRODUCT,
} from "./ProductsTypes";

export const getProductsRequest = () => ({
  type: GET_PRODUCTS_REQUEST,
});

export const getRequestSuccess = (payload) => ({
  type: GET_DATA_REQUEST_PRODUCT,
  payload,
});
