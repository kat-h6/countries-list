import { combineReducers } from 'redux'

import countries from './country'
import shopping from './shopping'

const createRootReducer = () =>
  combineReducers({
    countries,
    shopping,
  })

export default createRootReducer
