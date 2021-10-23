// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const ADD_COUNTER = 'ADD_COUNTER'
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES'

// counter
export type AddCounterAction = {
  type: typeof ADD_COUNTER
}

export type CounterState = {
  count: number
}

// countries
export type Languages = {
  name: string
}

export type Country = {
  flag: string
  name: string
  languages: Languages[]
  population: number
  region: string
}

export type FetchCountriesAction = {
  type: typeof FETCH_COUNTRIES
  payload: {
    countries: Country[]
  }
}

export type CountryState = {
  countries: Country[]
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
