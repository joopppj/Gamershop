export const addItemToCart = (cartItems, itemToAdd) => {
    const existAlready = cartItems.find(item => item.id === itemToAdd.id);

    if (existAlready) {
        return cartItems.map(item => item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item)
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }];
}