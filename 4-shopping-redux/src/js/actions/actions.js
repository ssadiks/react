let nextTodoId = 0;

export const addProduct = (name, price) => ({
    type: 'ADD_PRODUCT',
    name,
    price,
    id: nextTodoId++
})

export const addToCart = (id) => ({
    type : 'ADD_TO_CART',
    id
})
