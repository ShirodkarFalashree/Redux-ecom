import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (exist) {
          exist.amount++;
          exist.totalPrice += productId.price;
        } else {
          state.cart.push({
            id: productId.id,
            price: productId.price,
            size: productId.size,
            amount: 1,
            img: productId.img,
            totalPrice: productId.price,
            name: productId.name,
            text: productId.text,
            color: productId.color,
          });
        }
        // Update totalAmount and totalPrice regardless of exist or not
        state.totalAmount++;
        state.totalPrice += productId.price;
      } catch (err) {
        console.error(err);
      }
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (exist) {
          if (exist.amount === 1) {
            state.cart = state.cart.filter(
              (product) =>
                product.id !== productId.id ||
                product.size !== productId.size ||
                product.color !== productId.color
            );
          } else {
            exist.amount--;
            exist.totalPrice -= productId.price;
          }
          // Update totalAmount and totalPrice regardless of amount === 1 or not
          state.totalAmount--;
          state.totalPrice -= productId.price;
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
