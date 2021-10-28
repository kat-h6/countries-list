import { Country } from './country'

export const SET_DISABLED_TRUE = 'SET_DISABLED_TRUE'
export const SET_DISABLED_FALSE = 'SET_DISABLED_FALSE'

export type SetDisabledTrue = {
  type: typeof SET_DISABLED_TRUE
  payload: {
    country: Country
  }
}

export type SetDisabledFalse = {
  type: typeof SET_DISABLED_FALSE
  payload: {
    country: Country
  }
}

export type ButtonActions = SetDisabledFalse | SetDisabledTrue

export type ButtonState = {
  disabled: boolean
}
