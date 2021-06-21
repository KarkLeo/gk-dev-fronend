import { Action, combineReducers } from 'redux'
import * as types from './types'

// COUNTER REDUCER
export const counterReducer = (state = 0, { type }: Action) => {
  switch (type) {
    case types.INCREMENT:
      return state + 1
    case types.DECREMENT:
      return state - 1
    case types.RESET:
      return 0
    default:
      return state
  }
}

// INITIAL TIMER STATE
const initialTimerState = {
  lastUpdate: 0,
  light: false,
}

interface MyAction extends Action {
  payload: { light: boolean; ts: number }
}

// TIMER REDUCER
export const timerReducer = (
  state = initialTimerState,
  { type, payload }: MyAction
) => {
  switch (type) {
    case types.TICK:
      return {
        lastUpdate: payload.ts,
        light: Boolean(payload.light),
      }
    default:
      return state
  }
}

// COMBINED REDUCERS
const reducers = combineReducers({
  counter: counterReducer,
  timer: timerReducer,
})

export type AppState = ReturnType<typeof reducers>

export default reducers
