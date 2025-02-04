import { createSlice } from '@reduxjs/toolkit';

export const toysSlice = createSlice( {

    name: 'toys',
    initialState : {
        selectedCategory : 'all'
    }, 
    reducers : {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload
        },
    }
})


export const { filterCategory } = toysSlice.actions;
export const getSelectedCategory = state => state.toys.selectedCategory;
export default toysSlice.reducer;