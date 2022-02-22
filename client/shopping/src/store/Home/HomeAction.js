import {
  GET_CATEGORIES_REQUEST,
  GET_BANNERS_REQUEST,
  GET_DATA_REQUEST_SUCCESS,
} from "./HomeTypes";

export const getCategoriesRequest = () => ({
  type: GET_CATEGORIES_REQUEST,
});

export const getBannersRequest = () => ({
  type: GET_BANNERS_REQUEST,
});

export const getRequestSuccess = (payload) => ({
  type: GET_DATA_REQUEST_SUCCESS,
  payload,
});
