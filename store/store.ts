import { useMemo } from 'react'
import { createStore, applyMiddleware, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import appReducers from './app-reducers'
import { AppState } from './types'

let store: Store | undefined

function initStore(initialState: AppState) {
  return createStore(
    appReducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}

export const initializeStore = (preloadedState: AppState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state index.ts the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once index.ts the client
  if (!store) store = _store

  return _store
}

export const useStore = (initialState: AppState) =>
  useMemo(() => initializeStore(initialState), [initialState])
