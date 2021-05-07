export const removeItemFromCart = (cartItems, itemToRemove) => (
    cartItems.filter(cartItem => {
        if (cartItem.id === itemToRemove.id) {
            if (cartItem.color == itemToRemove.color && cartItem.size == itemToRemove.size ) {
                return false
            }
        }
        return true
    })
)

export const addItemToCart = (cartItems, itemToAdd) => {
    const itemExists = cartItems.find(cartItem => cartItem.id === itemToAdd.id && cartItem.color === itemToAdd.color && cartItem.size === itemToAdd.size)
    
    if (itemExists) {

        return cartItems.map(cartItem => {

            if (cartItem.id === itemToAdd.id && cartItem.color === itemToAdd.color && cartItem.size === itemToAdd.size) {
                return {...cartItem, qty: cartItem.qty + 1, color: itemToAdd.color, size: itemToAdd.size}

            } else {
                return {...cartItem}
            }

        })

    } else {
        return [...cartItems, itemToAdd]
    }
}

export const increaseItemQuantity = (cartItems, itemToIncrease) => (
    cartItems.map(cartItem => (
        cartItem.id === itemToIncrease.id && cartItem.color === itemToIncrease.color && cartItem.size === itemToIncrease.size ? {...cartItem, qty: cartItem.qty + 1} : cartItem
    ))
)

export const decreaseItemQuantity = (cartItems, itemToDecrease) => (
    cartItems.map(cartItem => (
        cartItem.id === itemToDecrease.id && cartItem.color === itemToDecrease.color && cartItem.size === itemToDecrease.size ? {...cartItem, qty: cartItem.qty - 1} : cartItem
    ))
)
