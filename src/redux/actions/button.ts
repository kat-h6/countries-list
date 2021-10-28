import {
  SetDisabledFalse,
  SetDisabledTrue,
  SET_DISABLED_FALSE,
  SET_DISABLED_TRUE,
} from '../../types/button'
import { Country } from '../../types/country'

export function setDisabledTrue(country: Country): SetDisabledTrue {
  return {
    type: SET_DISABLED_TRUE,
    payload: {
      country,
    },
  }
}

export function setDisabledFalse(country: Country): SetDisabledFalse {
  return {
    type: SET_DISABLED_FALSE,
    payload: {
      country,
    },
  }
}
