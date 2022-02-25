import {
  GET_CATEGORIES_REQUEST,
  GET_BANNERS_REQUEST,
  GET_DATA_REQUEST_SUCCESS,
  ADD_REMOVE_TO_CART_REQUEST,
  ADD_SELECTED_KEY_REQUEST
} from "./HomeTypes";

export const getCategoriesRequest = () => ({
  type: GET_CATEGORIES_REQUEST,
});

export const getBannersRequest = () => ({
  type: GET_BANNERS_REQUEST,
});

export const getRequestSuccess = payload => ({
  type: GET_DATA_REQUEST_SUCCESS,
  payload,
});

export const addToCartRequest = payload => ({
  type: ADD_REMOVE_TO_CART_REQUEST,
  payload
});

export const addSlectedKey = payload => ({
  type: ADD_SELECTED_KEY_REQUEST,
  payload
})
