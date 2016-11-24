const product = (state, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                id: action.id,
                name: action.name,
                price: action.price,
                quantity: 10
            }
        case 'ADD_TO_CART':
            if (state.id !== action.id) {
                return state
            }
            return {
                ...state,
                quantity: state.quantity - 1
            }
    }
}

const products = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [
                ...state,
                product(undefined, action)
            ]
        case 'ADD_TO_CART':
            return state.map(p =>
                product(p, action)              
            )
        default:
            return state
    }
}

export default products