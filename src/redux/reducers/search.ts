import {
  SearchCountries,
  SearchState,
  SEARCH_COUNTRIES,
} from '../../types/search'

const initialState: SearchState = { keyword: '' }

// prettier-ignore
export default function search(state = initialState, action: SearchCountries) {
  switch (action.type) {
  case SEARCH_COUNTRIES: {
    return {
      ...state,
      keyword: action.payload.keyword,
    }
  }
  default:
    return state
  }
}
