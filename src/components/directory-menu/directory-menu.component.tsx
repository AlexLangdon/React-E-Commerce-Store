import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import MenuItem from "../menu-item/menu-item.component";
import "./directory-menu.component.scss";

export default function DirectoryMenu() {
	const menuItems = useSelector((state: RootState) => state.directory);

	return (
		<div className="directory-menu">
			{menuItems.map((item, i) => <MenuItem key={i} {...item} />)}
		</div>
	)
}