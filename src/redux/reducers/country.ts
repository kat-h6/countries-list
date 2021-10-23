import {
  CountryState,
  FetchCountriesAction,
  FETCH_COUNTRIES,
} from '../../types'

const initialState: CountryState = { countries: [] }
// prettier-ignore
export default function countries(
  state = initialState,
  action: FetchCountriesAction
) {
  switch (action.type) {
  case FETCH_COUNTRIES:
    return {
      ...state,
      countries: action.payload.countries,
    }
  default:
    return state
  }
}
