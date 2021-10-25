import { combineReducers } from 'redux'

import product from './product'
import countries from './country'
import shopping from './shopping'

const createRootReducer = () =>
  combineReducers({
    product,
    countries,
    shopping,
  })

export default createRootReducer
