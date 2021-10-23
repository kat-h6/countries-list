export const FETCH_COUNTRIES_REQUEST = 'FETCH_COUNTRIES'
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS'
export const FETCH_COUNTRIES_FAILURE = 'FETCH_COUNTRIES_FAILURE'

export type Languages = {
  name: string
}

export type Country = {
  flag: string
  name: string
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

export type CountryState = {
  countries: Country[]
  loading: boolean
  error: unknown
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
  align?: 'right'
  format?: (value: any) => string | JSX.Element
}

export type CountryRowProps = {
  columns: Column[]
  country: Country
}
