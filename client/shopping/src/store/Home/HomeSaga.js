import { call, put } from "redux-saga/effects";
import { getDataRequest } from "../API/CallAPIS";

import { getRequestSuccess } from "./HomeAction";
import { takeLatest } from "redux-saga/effects";
import { GET_CATEGORIES_REQUEST, GET_BANNERS_REQUEST } from "./HomeTypes";

export function* getCategories(action) {
  try {
    const response = yield call(getDataRequest, "/categories");
    yield put(getRequestSuccess({ categories: response }));
  } catch (err) {
    console.log(err);
  }
}

export function* getBanners(action) {
  try {
    const response = yield call(getDataRequest, "/banners");
    yield put(getRequestSuccess({ banners: response }));
  } catch (err) {
    console.log(err);
  }
}

export function* HomeSaga() {
  yield takeLatest(GET_CATEGORIES_REQUEST, getCategories);
  yield takeLatest(GET_BANNERS_REQUEST, getBanners);
}
