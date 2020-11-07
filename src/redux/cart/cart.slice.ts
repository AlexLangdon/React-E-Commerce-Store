import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CollectionItem from "../../models/CollectionItem";

const initialState: Array<CollectionItem> = [];

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItemToCart(state, action: PayloadAction<CollectionItem>) {
			return [...state, action.payload];
		},
		removeItemFromCart(state, action: PayloadAction<CollectionItem>) {
			return state.filter(item => item.id !== action.payload.id);
		}
	}
})

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;