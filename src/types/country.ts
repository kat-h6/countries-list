export const FETCH_COUNTRIES_REQUEST = 'FETCH_COUNTRIES'
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS'
export const FETCH_COUNTRIES_FAILURE = 'FETCH_COUNTRIES_FAILURE'
export const FILTER_COUNTRIES = 'FILTER_COUNTRIES'

export type Languages = {
  name: string
}

export type Country = {
  flag: string
  name: string
  capital?: string
  languages: Languages[]
  population: number
  region: string
}

// types for api request
export type FetchCountriesRequest = {
  type: typeof FETCH_COUNTRIES_REQUEST
}

export type FetchCountriesFailure = {
  type: typeof FETCH_COUNTRIES_FAILURE
  payload: {
    error: unknown
  }
}

export type FetchCountriesSuccess = {
  type: typeof FETCH_COUNTRIES_SUCCESS
  payload: {
    countries: Country[]
  }
}

export type FilterCountries = {
  type: typeof FILTER_COUNTRIES
  payload: {
    keyword: string
  }
}

export type CountryActions =
  | FilterCountries
  | FetchCountriesFailure
  | FetchCountriesSuccess
  | FetchCountriesRequest

export type CountryState = {
  countries: Country[]
  loading: boolean
  error: any
  keyword: string
  filteredCountries: Country[]
}

export type CountryTableProps = {
  countries: Country[]
  page: number
  rowsPerPage: number
  handleChangePage: (event: unknown, newPage: number) => void
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export type Column = {
  id: 'name' | 'flag' | 'population' | 'region' | 'languages'
  label: string
  minWidth?: number
  align?: 'right' | 'left'
  format?: (value: any) => string | JSX.Element
}

export type CountryRowProps = {
  columns: Column[]
  country: Country
}
