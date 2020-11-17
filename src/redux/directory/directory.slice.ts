import { createSelector, createSlice } from "@reduxjs/toolkit";
import { MenuItemProps } from "../../components/menu-item/menu-item.component";
import { RootState } from "../root-reducer";

const initialState: Array<MenuItemProps> = [
	{
		title: "HATS",
		imageUrl: "directory-menu/hats.jpg",
		linkUrl: "shop/hats"
	},
	{
		title: "JACKETS",
		imageUrl: "directory-menu/jackets.jpg",
		linkUrl: "shop/jackets"
	},
	{
		title: "SHOES",
		imageUrl: "directory-menu/shoes.jpg",
		linkUrl: "shop/shoes"
	},
	{
		title: "WOMENS",
		imageUrl: "directory-menu/womens.jpg",
		linkUrl: "shop/womens"
	},
	{
		title: "MENS",
		imageUrl: "directory-menu/mens.jpg",
		linkUrl: "shop/mens"
	}
];

const directorySlice = createSlice({
	name: "directory",
	initialState,
	reducers: {}
})

export const directorySelector = createSelector(
	(state: RootState) => state.directory,
	(directory: Array<MenuItemProps>) => directory
)

export default directorySlice.reducer;