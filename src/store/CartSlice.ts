import { createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
    id: number,
    quantity: number
}[]

const initialState: InitialStateType = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const preExistInCartIndex = state.findIndex((item) => item.id === action.payload.id);
        if (preExistInCartIndex === -1) {
            state.push({...action.payload, quantity: 1})
        }
    },
    removeFromCart: (state, action) => {
    //   state.cartItems = state.cartItems.filter(
    //     (item) => item.id !== action.payload.id
    //   );
        state = state.filter((item) => item.id !== action.payload.id);
    },
    increaseQuantity: (state, action) => {
    //   const itemIndex = state.cartItems.findIndex(
    //     (item) => item.id === action.payload.id
    //   );
    //   if (itemIndex >= 0) {
    //     state.cartItems[itemIndex].quantity += 1;
    //   }
        const itemIndex = state.findIndex((item) => item.id === action.payload.id);
        if (itemIndex >= 0) {
            state[itemIndex].quantity += 1;
        }
    },
    decreaseQuantity: (state, action) => {
    //   const itemIndex = state.cartItems.findIndex(
    //     (item) => item.id === action.payload.id
    //   );
    //   if (itemIndex >= 0 && state.cartItems[itemIndex].quantity > 1) {
    //     state.cartItems[itemIndex].quantity -= 1;
    //   } else if (itemIndex >= 0 && state.cartItems[itemIndex].quantity === 1) {
    //     state.cartItems = state.cartItems.filter(
    //       (item) => item.id !== action.payload.id
    //     );
    //   }
        const itemIndex = state.findIndex((item) => item.id === action.payload.id);
        if (itemIndex >= 0 && state[itemIndex].quantity > 1) {
            state[itemIndex].quantity -= 1;
        }       
    },
    clearCart: (state) => {
      state = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
