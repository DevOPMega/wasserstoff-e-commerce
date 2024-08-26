// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice';
import CartReducer from './CartSlice';

export const store = configureStore({
    reducer: {
        data: dataReducer,
        cart: CartReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;