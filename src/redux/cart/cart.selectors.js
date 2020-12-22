import { createSelector } from 'reselect';
//the ir 2 types of selector... input and output

const selectCart = state => state.cart; //de todo el state, solo quiero el de cart (el del carro)

export const selectCartItems = createSelector(   //selectCartItems, es una propiedad del state cart
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);