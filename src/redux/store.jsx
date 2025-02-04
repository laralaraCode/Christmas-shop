import { configureStore } from '@reduxjs/toolkit';
import toys from './toysSlice';
import cart from './cartSlice';

export const store = configureStore({
    reducer: {
        toys : toys,
        cart : cart
    },
})