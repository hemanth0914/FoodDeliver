import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            const index = state.items.findIndex(item => item.card.info.id === action.payload);
            console.log("Found at index: ", index)
            if (index !== -1) {
              state.items.splice(index, 1); // remove one instance
            }
          },
        clearCart: (state) => {
            state.items = []
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;