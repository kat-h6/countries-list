import { AddCounterAction, ADD_COUNTER, CounterState } from '../../types/types'

const initialState: CounterState = { count: 0 }

// prettier-ignore
export default function counter(
  state = initialState,
  action: AddCounterAction
) {
  switch (action.type) {
  case ADD_COUNTER: {
    return {
      ...state,
      count: state.count + 1,
    }
  }
  default:
    return state
  }
}
