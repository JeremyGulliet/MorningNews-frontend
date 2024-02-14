import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

export const hiddenArticlesSlice = createSlice({
    name: 'hiddenArticles',
    initialState,
    reducers: {
        hiddenArticlesToStore: (state, action) => {
            state.value.push(action.payload);
        },

        showArticles: (state) => {
            state.value = [];
        },
    },
});

export const { hiddenArticlesToStore, showArticles } = hiddenArticlesSlice.actions;
export default hiddenArticlesSlice.reducer;