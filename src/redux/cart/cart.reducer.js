import { addItemToCart, decreaseItem } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOGGLE_CART_HIDDEN':
            return {
                ...state,
                hidden: !state.hidden
            }

        case 'ADD_CART_ITEM':
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        case 'DELETE_CART_ITEM':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }

        case 'DECREASE_CART_ITEM':
            return {
                ...state,
                cartItems: decreaseItem(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;