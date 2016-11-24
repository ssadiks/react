import React from 'react'

const ProductItem = ({name, price, quantity, onClick}) => (
  
    <div
    style={{
        border: '1px solid red',
        padding: '1rem'
    }}
    >
        <span>name: { name }</span>
        <button onClick={onClick}
        disabled={quantity<=0}
        >Add</button>
        <span>Quantity : { quantity }</span>
        <span> | Price : {price}</span>
    </div>
    
)

export default ProductItem