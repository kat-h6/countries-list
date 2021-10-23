import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import addCounter from '../redux/actions/counter'
import { AppState } from '../types'

export default function Counter() {
  const count = useSelector((state: AppState) => state.counter.count)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(addCounter())
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}
