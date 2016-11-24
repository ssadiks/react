import React from 'react'
import {connect} from 'react-redux'
import {addProduct} from '../actions/actions'

let AddProduct = ({dispatch}) => {
    let inputName
    let inputPrice
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if(!inputName.value.trim() || !inputPrice.value.trim()) {
                    return
                }
                dispatch(addProduct(inputName.value, inputPrice.value))
            }}
        >
            
            <input type="text" placeholder="Name" ref={node => {
                inputName = node
            }}/>
            <input type="number" placeholder="Price" ref={node => {
                inputPrice = node
            }} />
            <button type="submit" >Add Product</button>
            </form>
        </div>
    )
}

AddProduct = connect()(AddProduct)

export default AddProduct