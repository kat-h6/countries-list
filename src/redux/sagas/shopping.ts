import { takeLatest, select } from 'redux-saga/effects'
import { AddCountry } from '../../types/shopping'

function* saveToLocalStorage(action: AddCountry): any {
  const state = yield select()
  yield localStorage.setItem('state', JSON.stringify(state))
}

export default [takeLatest(ADD_COUNTRY, saveToLocalStorage)]
