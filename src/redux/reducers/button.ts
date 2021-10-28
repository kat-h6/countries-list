import {
  ButtonActions,
  ButtonState,
  SET_DISABLED_FALSE,
  SET_DISABLED_TRUE,
} from '../../types/button'

// prettier-ignore
export default function disableBtn(
  state: ButtonState = {
    disabled: false,
  },
  action: ButtonActions
): ButtonState {
  switch (action.type) {
  case SET_DISABLED_FALSE: {
    return {
      ...state,
      disabled: false,
    }
  }
  case SET_DISABLED_TRUE: {
    return {
      ...state,
      disabled: true,
    }
  }
  default:
    return state
  }
}
