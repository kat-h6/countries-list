import { combineReducers } from 'redux'

import product from './product'
import countries from './country'
import search from './search'
import shopping from './shopping'

const createRootReducer = () =>
  combineReducers({
    product,
    countries,
    search,
    shopping,
  })

export default createRootReducer
