import {
  ADD_COUNTRY,
  CountryCartActions,
  CountryCartState,
  REMOVE_COUNTRY,
} from '../../types/shopping'

//prettier-ignore
export default function shopping(
  state: CountryCartState = {
    inCart: [],
  },
  action: CountryCartActions
): CountryCartState {
  switch (action.type) {
  case ADD_COUNTRY: {
    const { country } = action.payload
    if (state.inCart.find((p) => p.name === country.name)) {
      return state
    }
    return { ...state, inCart: [...state.inCart, country] }
  }

  case REMOVE_COUNTRY: {
    const { country } = action.payload
    const index = state.inCart.findIndex((p) => p.name === country.name)
    if (index >= 0) {
      state.inCart.splice(index, 1)
      return { ...state, inCart: [...state.inCart] }
    }
    return state
  }

  default:
    return state
  }
}
