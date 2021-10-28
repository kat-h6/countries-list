import { all } from 'redux-saga/effects'

import shoppingSagas from './shopping'

export default function* rootSaga() {
  yield all([...shoppingSagas])
}
