import { combineReducers } from 'redux'

import product from './product'
import counter from './counter'
import countries from './country'

const createRootReducer = () =>
  combineReducers({
    product,
    counter,
    countries,
  })

export default createRootReducer
