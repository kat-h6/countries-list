import { CountryState } from './country'
import { CountryCartState } from './shopping'

export type AppState = {
  countries: CountryState
  shopping: CountryCartState
}
