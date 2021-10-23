import { CountryState } from './country'
// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const ADD_COUNTER = 'ADD_COUNTER'

// counter
export type AddCounterAction = {
  type: typeof ADD_COUNTER
}

export type CounterState = {
  count: number
}

// A product
export type Product = {
  id: string
  name: string
  price: number
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type ProductState = {
  inCart: Product[]
}

export type AppState = {
  product: ProductState
  counter: CounterState
  countries: CountryState
}
