import { createSelector, createSlice, OutputSelector, PayloadAction } from "@reduxjs/toolkit";
import ItemCollection from "../../models/ItemCollection";
import { RootState } from "../root-reducer";

interface StoreItemsState {
	isFetching: boolean;
	collections: Array<ItemCollection>;
}

const initialState: StoreItemsState = {
	isFetching: false,
	collections: []
};

const storeItemsSlice = createSlice({
	name: "storeItems",
	initialState,
	reducers: {
		fetchItemCollectionsStart(state: StoreItemsState): StoreItemsState {
			return {
				...state,
				isFetching: true,
			};
		},
		fetchItemCollectionsComplete(
			state: StoreItemsState,
			action: PayloadAction<Array<ItemCollection>>
		): StoreItemsState {
			return {
				...state,
				isFetching: false,
				collections: action.payload
			};
		}
	}
});

export const collectionsSelector = createSelector(
	(state: RootState) => state.storeItems,
	(itemsState: StoreItemsState) => itemsState.collections
);

export const collectionWithRouteSelectorFactory = (targetRouteName: string): OutputSelector<
	RootState,
	ItemCollection | undefined,
	(res: ItemCollection[]) => ItemCollection | undefined
> => createSelector(
	collectionsSelector,
	(collections: Array<ItemCollection>) => collections.find(
		(collection: ItemCollection) => collection.routeName === targetRouteName
	)
);

export const isFetchingCollections = createSelector(
	(state: RootState) => state.storeItems,
	(itemsState: StoreItemsState) => itemsState.isFetching
);

export const { fetchItemCollectionsStart, fetchItemCollectionsComplete } = storeItemsSlice.actions;
export default storeItemsSlice.reducer;