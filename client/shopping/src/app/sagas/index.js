import { HomeSaga } from '../../store/Home/HomeSaga';
import { ProductsSaga } from '../../store/Products/ProductsSaga';

import { fork, all } from "redux-saga/effects";

export function* watchSagas() {
  yield all([fork(HomeSaga),fork(ProductsSaga)]);
}
