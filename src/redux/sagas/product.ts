import { takeLatest } from 'redux-saga/effects'

import { ADD_PRODUCT, AddProductAction } from '../../types/types'

function* doSomethingWhenAddingProduct(action: AddProductAction) {
  yield console.log(action)
}

const latest = [takeLatest(ADD_PRODUCT, doSomethingWhenAddingProduct)]
export default latest
