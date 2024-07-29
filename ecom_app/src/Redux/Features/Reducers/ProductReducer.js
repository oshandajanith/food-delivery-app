// features/productSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { foodData } from '../../global/Data'; // Adjust path as needed

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
    },
    reducers: {
        setProducts(state, action) {
            state.products = action.payload;
        },
    },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
