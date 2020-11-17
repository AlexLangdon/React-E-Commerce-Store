import React from "react";
import { useSelector } from "react-redux";
import { directorySelector } from "../../redux/directory/directory.slice";
import MenuItem from "../menu-item/menu-item.component";
import "./directory-menu.component.scss";

export default function DirectoryMenu() {
	const menuItems = useSelector(directorySelector);

	return (
		<div className="directory-menu">
			{menuItems.map((item, i) => <MenuItem key={i} {...item} />)}
		</div>
	)
}