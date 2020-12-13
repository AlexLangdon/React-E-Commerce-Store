import { createSelector, createSlice, OutputSelector, PayloadAction } from "@reduxjs/toolkit";
import ItemCollection from "../../models/ItemCollection";
import { RootState } from "../root-reducer";

const initialState: Array<ItemCollection> = [];

const storeItemsSlice = createSlice({
	name: "storeItems",
	initialState,
	reducers: {
		setItemCollections(state: Array<ItemCollection>, action: PayloadAction<Array<ItemCollection>>): Array<ItemCollection> {
			return action.payload;
		}
	}
});

export const collectionsSelector = createSelector(
	(state: RootState) => state.storeItems,
	(collections: Array<ItemCollection>) => collections
);

export const collectionWithRouteSelectorFactory = (targetRouteName: string):
	OutputSelector<RootState, ItemCollection | undefined, (res: ItemCollection[]) => ItemCollection | undefined> =>
	createSelector(
		collectionsSelector,
		(collections: Array<ItemCollection>) => collections.find(
			(collection: ItemCollection) => collection.routeName === targetRouteName
		)
	);

export const { setItemCollections } = storeItemsSlice.actions;
export default storeItemsSlice.reducer;