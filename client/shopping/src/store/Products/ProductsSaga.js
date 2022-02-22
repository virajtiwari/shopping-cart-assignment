import { call, put } from "redux-saga/effects";
import { getDataRequest } from "../API/CallAPIS";

import { getRequestSuccess } from "./ProductsAction";
import { takeLatest } from "redux-saga/effects";
import { GET_PRODUCTS_REQUEST } from "./ProductsTypes";

export function* getCategories(action) {
  try {
    const response = yield call(getDataRequest, "/products");
    yield put(getRequestSuccess({ products: response }));
  } catch (err) {
    console.log(err);
  }
}

export function* ProductsSaga() {
  yield takeLatest(GET_PRODUCTS_REQUEST, getCategories);
}
