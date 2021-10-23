import { Dispatch } from 'react'
import { Country, FetchCountriesAction, FETCH_COUNTRIES } from '../../types'

export default function fetchCountries(
  countries: Country[]
): FetchCountriesAction {
  return {
    type: FETCH_COUNTRIES,
    payload: {
      countries,
    },
  }
}

export function fetchData() {
  return (dispatch: Dispatch) => {
    fetch('https://restcountries.com/v2/all')
      .then((res) => res.json())
      .then((countries) => {
        dispatch(fetchCountries(countries))
      })
  }
}
