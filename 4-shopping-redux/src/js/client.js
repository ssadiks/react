import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import todoApp from './reducers'
import reduxThunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore) 

render(
  <Provider store={createStoreWithMiddleware(todoApp)}>
    <App />
  </Provider>,
  document.getElementById('root')
)

import { addProduct, addToCart, fetchPosts } from './actions/actions'

// Log the initial state
//console.log(store.getState())
//
//// Every time the state changes, log it
//// Note that subscribe() returns a function for unregistering the listener
//let unsubscribe = store.subscribe(() =>
//  console.log(store.getState())
//)
//
//var object ={"cart":0,"products":[{"id":1,"name":"iPad 4 Mini","price":500.01,"quantity":2},{"id":2,"name":"H&M T-Shirt White","price":10.99,"quantity":10},{"id":3,"name":"Charli XCX - Sucker CD","price":19.99,"quantity":5}]};
//
//// Dispatch some actions
//store.dispatch(fetchPosts(object.products))
//
//store.dispatch(addProduct('Nike', 120))
//store.dispatch(addProduct('Adidas', 140))
//store.dispatch(addProduct('Puma', 100))
//store.dispatch(addToCart(0))
//store.dispatch(addToCart(1))
////store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
//
//// Stop listening to state updates
//unsubscribe()