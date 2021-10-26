import { all } from 'redux-saga/effects'

import productSagas from './product'
import shoppingSagas from './shopping'

export default function* rootSaga() {
  yield all([...productSagas, ...shoppingSagas])
}
