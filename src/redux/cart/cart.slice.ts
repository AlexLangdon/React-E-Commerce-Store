import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CartItemProps from "../../models/CartItemProps";
import CollectionItem from "../../models/CollectionItem";

interface CartState {
	isShown: boolean,
	cartItems: Array<CartItemProps>
}

const initialState: CartState = {
	isShown: false,
	cartItems: []
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		toggleCartShown(state: CartState): CartState {
			return {
				...state,
				isShown: !state.isShown
			}
		},
		setCartShown(state: CartState, action: PayloadAction<boolean>): CartState {
			return {
				...state,
				isShown: action.payload
			}
		},
		addItemToCart(state: CartState, action: PayloadAction<CollectionItem>): CartState {
			const itemToAdd = action.payload;
			const itemCartIndex = state.cartItems.findIndex(entry => entry.item.id === itemToAdd.id);
			const newCartItems: Array<CartItemProps> = [...state.cartItems];

			if (itemCartIndex > -1) {
				const matchingEntry = newCartItems[itemCartIndex];
				newCartItems[itemCartIndex] = {
					...matchingEntry,
					quantity: matchingEntry.quantity + 1
				};
			} else {
				newCartItems.push({
					item: itemToAdd,
					quantity: 1
				})
			}

			return {
				...state,
				cartItems: newCartItems
			};
		},
		removeItemFromCart(state: CartState, action: PayloadAction<number>) {
			const newCartItems = state.cartItems.map(entry => 
				entry.item.id === action.payload 
				? { ...entry, quantity: entry.quantity - 1 } 
				: entry
			).filter(entry => entry.quantity > 0);

			return {
				...state,
				cartItems: newCartItems
			}
		},
		removeItemGroupFromCart(state: CartState, action: PayloadAction<number>): CartState {
			const newCartItems = state.cartItems.filter(entry => entry.item.id !== action.payload)
			
			return {
				...state,
				cartItems: newCartItems
			}
		}
	}
})

export const { 
	toggleCartShown,
	setCartShown,
	addItemToCart, 
	removeItemFromCart, 
	removeItemGroupFromCart 
} = cartSlice.actions;
export default cartSlice.reducer;