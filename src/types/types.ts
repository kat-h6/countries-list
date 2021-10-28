import { CountryState } from './country'
import { CountryCartState } from './shopping'
// Action types

export type AppState = {
  countries: CountryState
  shopping: CountryCartState
}
