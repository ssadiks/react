import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import todoApp from './reducers'

let store = createStore(todoApp) 

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

import { addProduct, addToCart } from './actions/actions'

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
store.dispatch(addProduct('Nike', 120))
store.dispatch(addProduct('Adidas', 140))
store.dispatch(addProduct('Puma', 100))
store.dispatch(addToCart(0))
store.dispatch(addToCart(1))
//store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// Stop listening to state updates
unsubscribe()