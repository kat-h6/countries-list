import { SearchCountries, SEARCH_COUNTRIES } from '../../types/search'

export function searchCountries(keyword: string): SearchCountries {
  return {
    type: SEARCH_COUNTRIES,
    payload: {
      keyword,
    },
  }
}
