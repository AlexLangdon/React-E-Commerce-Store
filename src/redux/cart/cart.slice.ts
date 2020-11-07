import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CollectionItem from "../../models/CollectionItem";

interface CartEntry {
	item: CollectionItem;
	quantity: number;
}

const initialState: Array<CartEntry> = [];

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItemToCart(state, action: PayloadAction<CollectionItem>) {
			const itemToAdd = action.payload;
			const itemCartIndex = state.findIndex(entry => entry.item.id === itemToAdd.id);
			const newState = [...state];

			if (itemCartIndex > -1) {
				const matchingEntry = newState[itemCartIndex];
				newState[itemCartIndex] = {
					...matchingEntry,
					quantity: matchingEntry.quantity + 1
				};
			} else {
				newState.push({
					item: itemToAdd,
					quantity: 1
				})
			}

			return newState;
		},
		removeItemFromCart(state, action: PayloadAction<CollectionItem>) {
			return state.map(entry => 
				entry.item.id === action.payload.id 
				? { ...entry, quantity: entry.quantity - 1 } 
				: entry
			).filter(entry => entry.quantity > 0);
		}
	}
})

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;