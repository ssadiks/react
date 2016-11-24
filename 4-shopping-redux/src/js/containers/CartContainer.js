import React from 'react'
import { connect } from 'react-redux'
import CartContent from '../components/CartContent'

const mapStateToProps = (state) => ({
    cart: state.cart
})

const CartContainer = connect(
    mapStateToProps
)(CartContent)

export default CartContainer