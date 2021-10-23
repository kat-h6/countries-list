import { AddCounterAction, ADD_COUNTER } from '../../types'

export default function addCounter(): AddCounterAction {
  return {
    type: ADD_COUNTER,
  }
}
