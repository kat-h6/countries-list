import { Dispatch } from 'react'
import {
  Country,
  FetchCountriesRequest,
  FETCH_COUNTRIES_REQUEST,
  FetchCountriesSuccess,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  FetchCountriesFailure,
  FilterCountries,
  FILTER_COUNTRIES,
} from '../../types/country'

export function fetchCountriesRequest(): FetchCountriesRequest {
  return {
    type: FETCH_COUNTRIES_REQUEST,
  }
}

export function fetchCountriesSuccess(
  countries: Country[]
): FetchCountriesSuccess {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload: {
      countries,
    },
  }
}

export function fetchCountriesFailure(error: unknown): FetchCountriesFailure {
  return {
    type: FETCH_COUNTRIES_FAILURE,
    payload: {
      error,
    },
  }
}

export function filterCountries(keyword: string): FilterCountries {
  return {
    type: FILTER_COUNTRIES,
    payload: {
      keyword,
    },
  }
}

export function fetchData() {
  return (dispatch: Dispatch<any>) => {
    dispatch(fetchCountriesRequest)
    fetch('https://restcountries.com/v2/all')
      .then((res) => res.json())
      .then((countries) => {
        dispatch(fetchCountriesSuccess(countries))
      })
      .catch((error) => {
        dispatch(fetchCountriesFailure(error))
      })
  }
}
