import React from 'react'
import { connect } from 'react-redux'
import ProductList from '../components/ProductList'
import { addToCart } from '../actions/actions'

const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = ({
    onAddToCart: addToCart
})

const ProductContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList)

export default ProductContainer