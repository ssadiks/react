import React from 'react'

const CartContent = ({ cart }) =>  (
    <div
        style={{
            border: '1px solid',
            padding: '1rem'
        }}
    >
        Count : { cart }
    </div>
)
    


export default CartContent