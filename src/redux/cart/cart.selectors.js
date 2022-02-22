//add code to be used in more than one place

import {createSelector} from 'reselect';


const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const slectCartItemsCount = createSelector(
   [selectCartItems] ,
   cartItems =>
    cartItems.reduce(
        (accumalatedQuantity, cartItems) =>
            accumalatedQuantity + cartItems.quantity,
        0
    )
)