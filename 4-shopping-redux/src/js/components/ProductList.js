import React from 'react'
import { connect } from 'react-redux'
import ProductItem from './ProductItem'

let ProductList = ({ products, children, onAddToCart }) => {
    return (
    <div>
        {products.map(product => (
            <ProductItem key={product.id} {...product} onClick={() => onAddToCart(product.id)} />        
        ))}
    </div>
    )
}



export default ProductList