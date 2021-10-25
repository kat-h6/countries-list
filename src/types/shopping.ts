import { Country } from './country'

export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'

export type AddCountry = {
  type: typeof ADD_COUNTRY
  payload: {
    countryId: string
  }
}

export type RemoveCountry = {
  type: typeof REMOVE_COUNTRY
  payload: {
    countryId: string
  }
}

export type CountryCartState = {
  inCart: Country[]
}
