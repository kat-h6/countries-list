import { takeLatest, select } from 'redux-saga/effects'

function* saveToLocalStorage(): any {
  const state = yield select()
  console.log(state)
  yield localStorage.setItem('state', JSON.stringify(state))
}

export default [takeLatest('*', saveToLocalStorage)]
