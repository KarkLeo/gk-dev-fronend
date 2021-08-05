import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import appReducers from './app-reducers'

export type AppState = ReturnType<typeof appReducers>

export type AppThunk<R = void> = ThunkAction<
  R | Promise<R>,
  AppState,
  undefined,
  Action
>
