import {
  CountryState,
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  FILTER_COUNTRIES,
  CountryActions,
} from '../../types/country'

const initialState: CountryState = {
  loading: false,
  countries: [],
  error: '',
  keyword: '',
  filteredCountries: [],
}
// prettier-ignore
export default function countries(
  state = initialState,
  action: CountryActions
) {
  switch (action.type) {
  case FETCH_COUNTRIES_REQUEST: 
    return {
      ...state,
      loading: true
    }
  case FETCH_COUNTRIES_FAILURE:
    return {
      ...state,
      loading: false,
      countries: [],
      error: action.payload.error
    }
  case FETCH_COUNTRIES_SUCCESS:
    return {
      ...state,
      loading: false,
      countries: action.payload.countries,
      error: ''
    }
  case FILTER_COUNTRIES:
    const keyword = action.payload.keyword
    const countries = state.countries.filter((country) =>
      country.name.toLowerCase().startsWith(keyword))
    return {
      ...state,
      filteredCountries: countries,
      keyword: keyword
    }
  default:
    return state
  }
}
