export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES'

export type SearchCountries = {
  type: typeof SEARCH_COUNTRIES
  payload: {
    keyword: string
  }
}

export type SearchState = {
  keyword: string
}
