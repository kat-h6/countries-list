import { Country } from '../../types/country'
import {
  AddCountry,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  RemoveCountry,
} from '../../types/shopping'

export function addCountry(country: Country): AddCountry {
  return {
    type: ADD_COUNTRY,
    payload: {
      country,
    },
  }
}

export function removeCountry(country: Country): RemoveCountry {
  return {
    type: REMOVE_COUNTRY,
    payload: {
      country,
    },
  }
}
