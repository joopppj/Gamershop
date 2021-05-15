export const addItemToCart = (cartItems, itemToAdd) => {
    const existAlready = cartItems.find(item => item.id === itemToAdd.id);

    if (existAlready) {
        return cartItems.map(item => item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item)
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }];
}

export const decreaseItem = (cartItems, itemToDecrease) => {
    //return cartItems.map(item => item.id === itemToDecrease.id ? { ...item, quantity: item.quantity - 1 } : item)

    const existAlready = cartItems.find(item => item.id === itemToDecrease.id);
    if (existAlready.quantity === 1) {
        return cartItems.filter(item => item.id !== itemToDecrease.id)
    }

    return cartItems.map(item => item.id === itemToDecrease.id ? { ...item, quantity: item.quantity - 1 } : item)
}