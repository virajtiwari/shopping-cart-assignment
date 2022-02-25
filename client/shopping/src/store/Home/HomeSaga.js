import { call, put, select } from "redux-saga/effects";
import { getDataRequest, postDataRequest } from "../API/CallAPIS";

import { getRequestSuccess } from "./HomeAction";
import { takeLatest } from "redux-saga/effects";
import {
  GET_CATEGORIES_REQUEST,
  GET_BANNERS_REQUEST,
  ADD_REMOVE_TO_CART_REQUEST,
} from "./HomeTypes";

import {addRemoveCart} from '../../utils/AddRemoveCart/AddRemoveCart';

export function* getCategories() {
  try {
    const response = yield call(getDataRequest, "/categories");
    yield put(getRequestSuccess({ categories: response }));
  } catch (err) {
    console.log(err);
  }
}

export function* getBanners() {
  try {
    const response = yield call(getDataRequest, "/banners");
    yield put(getRequestSuccess({ banners: response }));
  } catch (err) {
    console.log(err);
  }
}

export function* addToCart(action) {
  try {
    const requestPayload = {...action?.payload?.item}
    const type = action?.payload?.type;
    const response = yield call(postDataRequest, "/addToCart", requestPayload);
    const cart = yield select((state) => state?.shopping?.cart);
    if(response)
      yield put(getRequestSuccess({ cart : addRemoveCart(cart, requestPayload, type) }));
    // alert(response?.responseMessage);
  } catch (err) {
    console.log(err);
  }
}

export function* HomeSaga() {
  yield takeLatest(GET_CATEGORIES_REQUEST, getCategories);
  yield takeLatest(GET_BANNERS_REQUEST, getBanners);
  yield takeLatest(ADD_REMOVE_TO_CART_REQUEST, addToCart);
}
