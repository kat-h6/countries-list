import { combineReducers } from 'redux'

import product from './product'
import counter from './counter'
import countries from './country'
import search from './search'

const createRootReducer = () =>
  combineReducers({
    product,
    counter,
    countries,
    search,
  })

export default createRootReducer
