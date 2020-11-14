import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CartItemProps from "../../models/CartItemProps";
import CollectionItem from "../../models/CollectionItem";

const initialState: Array<CartItemProps> = [];

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItemToCart(state: Array<CartItemProps>, action: PayloadAction<CollectionItem>) {
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
		removeItemFromCart(state: Array<CartItemProps>, action: PayloadAction<number>) {
			return state.map(entry => 
				entry.item.id === action.payload 
				? { ...entry, quantity: entry.quantity - 1 } 
				: entry
			).filter(entry => entry.quantity > 0);
		},
		removeItemGroupFromCart(state: Array<CartItemProps>, action: PayloadAction<number>) {
			return state.filter(entry => entry.item.id !== action.payload)
		},
	}
})

export const { addItemToCart, removeItemFromCart, removeItemGroupFromCart } = cartSlice.actions;
export default cartSlice.reducer;