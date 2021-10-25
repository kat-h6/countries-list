import {
  AddCountry,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  RemoveCountry,
} from '../../types/shopping'

export function addCountry(countryId: string): AddCountry {
  return {
    type: ADD_COUNTRY,
    payload: {
      countryId,
    },
  }
}

export function removeCountry(countryId: string): RemoveCountry {
  return {
    type: REMOVE_COUNTRY,
    payload: {
      countryId,
    },
  }
}
