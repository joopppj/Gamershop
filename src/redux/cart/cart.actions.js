export const toggleCartHidden = () => ({
    type: 'TOGGLE_CART_HIDDEN'

})

export const addItem = item => ({
    type: 'ADD_CART_ITEM',
    payload: item
})

export const deleteItemFromCart = item => ({
    type: 'DELETE_CART_ITEM',
    payload: item

})

export const decreaseItem = item => ({
    type: 'DECREASE_CART_ITEM',
    payload: item
})