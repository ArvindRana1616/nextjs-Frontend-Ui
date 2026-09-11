

import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

const initialState: CartItem[] = [];
const cartSlice = createSlice({
    
    name: "cart",

    initialState,

     reducers: {
        addToCart: (state, action) => {
         const existingItem = state.find(
            (item) => item.id === action.payload.id
        );
         if (existingItem) {
            existingItem.quantity += 1;
        } else {
            state.push(action.payload);
        }
        },

         removeFromCart: (state, action) => {
            return state.filter(
            (item) => item.id !== action.payload
            );
        },
        
    decrementQuantity: (state, action) => {
        const existingItem = state.find(
            (item) => item.id === action.payload
        );

        if (existingItem && existingItem.quantity > 0) {
            existingItem.quantity -= 1;
        }
    },
     },
});


export const { addToCart,removeFromCart,decrementQuantity} = cartSlice.actions;
export default cartSlice.reducer;