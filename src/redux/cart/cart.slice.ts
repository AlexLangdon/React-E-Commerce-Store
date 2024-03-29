import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import CartEntryProps from "../../models/CartEntryProps";
import StoreItem from "../../models/StoreItem";
import { RootState } from "../root-reducer";

interface CartState {
	isShown: boolean;
	cartEntries: Array<CartEntryProps>;
}

const initialState: CartState = {
	isShown: false,
	cartEntries: []
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		toggleCartShown(state: CartState): CartState {
			return {
				...state,
				isShown: !state.isShown
			};
		},
		setCartShown(state: CartState, action: PayloadAction<boolean>): CartState {
			return {
				...state,
				isShown: action.payload
			};
		},
		addItemToCart(state: CartState, action: PayloadAction<StoreItem>): CartState {
			const itemToAdd = action.payload;
			const itemCartIndex = state.cartEntries.findIndex(entry => entry.item.id === itemToAdd.id);
			const newCartEntries: Array<CartEntryProps> = [...state.cartEntries];

			if (itemCartIndex > -1) {
				const matchingEntry = newCartEntries[itemCartIndex];
				newCartEntries[itemCartIndex] = {
					...matchingEntry,
					quantity: matchingEntry.quantity + 1
				};
			} else {
				newCartEntries.push({
					item: itemToAdd,
					quantity: 1
				});
			}

			return {
				...state,
				cartEntries: newCartEntries
			};
		},
		removeSingleCartItemById(state: CartState, action: PayloadAction<number>): CartState {
			const newCartItems = state.cartEntries.map(entry =>
				entry.item.id === action.payload
					? { ...entry, quantity: entry.quantity - 1 }
					: entry
			).filter(entry => entry.quantity > 0);

			return {
				...state,
				cartEntries: newCartItems
			};
		},
		removeAllCartItemsById(state: CartState, action: PayloadAction<number>): CartState {
			const newCartItems = state.cartEntries.filter(entry => entry.item.id !== action.payload);

			return {
				...state,
				cartEntries: newCartItems
			};
		}
	}
});

const selectCart = (state: RootState) => state.cart;
export const cartIsShownSelector = createSelector(
	selectCart,
	(cartState: CartState) => cartState.isShown
);
export const cartEntriesSelector = createSelector(
	selectCart,
	(cartState: CartState) => cartState.cartEntries
);
export const cartItemsCountSelector = createSelector(
	cartEntriesSelector,
	(cartEntries: Array<CartEntryProps>) => cartEntries.reduce(
		(runningTotal: number, entry: CartEntryProps) => runningTotal + entry.quantity, 0
	)
);
export const cartTotalCostSelector = createSelector(
	cartEntriesSelector,
	(cartEntries: Array<CartEntryProps>) => cartEntries.reduce(
		(runningTotal, entry) => runningTotal + entry.quantity * entry.item.price, 0
	)
);

export const {
	toggleCartShown,
	setCartShown,
	addItemToCart,
	removeSingleCartItemById,
	removeAllCartItemsById
} = cartSlice.actions;
export default cartSlice.reducer;