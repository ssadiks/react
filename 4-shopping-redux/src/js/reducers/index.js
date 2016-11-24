import { combineReducers } from 'redux'
import products from './products'
import cart from './cart'

const todoApp = combineReducers({
  products,
  cart
})

export default todoApp