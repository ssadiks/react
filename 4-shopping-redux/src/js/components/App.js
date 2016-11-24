import React from 'react'
import CartContainer from '../containers/CartContainer'
import ProductContainer from '../containers/ProductContainer'
import AddProduct from '../containers/AddProduct'


const App = () => (
  <div>
    <AddProduct />
    <CartContainer />
    <ProductContainer />
  </div>
)

export default App