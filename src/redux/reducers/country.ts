import {
  CountryState,
  FetchCountriesRequest,
  FETCH_COUNTRIES_REQUEST,
  FetchCountriesSuccess,
  FETCH_COUNTRIES_SUCCESS,
  FetchCountriesFailure,
  FETCH_COUNTRIES_FAILURE,
} from '../../types/countryTypes'

const initialState: CountryState = { loading: false, countries: [], error: '' }
// prettier-ignore
export default function countries(
  state = initialState,
  action: FetchCountriesRequest | FetchCountriesFailure | FetchCountriesSuccess
) {
  switch (action.type) {
  case FETCH_COUNTRIES_REQUEST: 
    return {
      ...state,
      loading: true
    }
  case FETCH_COUNTRIES_FAILURE:
    return {
      loading: false,
      countries: [],
      error: action.payload
    }
  case FETCH_COUNTRIES_SUCCESS:
    return {
      loading: false,
      countries: action.payload,
      error: ''
    }
  default:
    return state
  }
}
