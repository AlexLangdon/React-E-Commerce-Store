import { createSlice } from "@reduxjs/toolkit";
import { MenuItemProps } from "../../components/menu-item/menu-item.component";

const initialState: Array<MenuItemProps> = [
	{
		title: "HATS",
		imageUrl: "directory-menu/hats.jpg",
		linkUrl: "hats"
	},
	{
		title: "JACKETS",
		imageUrl: "directory-menu/jackets.jpg",
		linkUrl: "jackets"
	},
	{
		title: "SHOES",
		imageUrl: "directory-menu/shoes.jpg",
		linkUrl: "shoes"
	},
	{
		title: "WOMENS",
		imageUrl: "directory-menu/womens.jpg",
		linkUrl: "womens"
	},
	{
		title: "MENS",
		imageUrl: "directory-menu/mens.jpg",
		linkUrl: "mens"
	}
];

const directorySlice = createSlice({
	name: "directory",
	initialState,
	reducers: {}
})

export default directorySlice.reducer;