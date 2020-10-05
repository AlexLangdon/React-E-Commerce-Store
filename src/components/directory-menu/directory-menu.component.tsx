import { Container } from "@material-ui/core";
import React, { Component } from "react";
import MenuItem, { MenuItemProps } from "../menu-item/menu-item.component";
import "./directory-menu.component.scss";

export default class DirectoryMenu extends Component {
	rows: Array<MenuItemProps> = [
		{
			title: "HATS",
			imageUrl: "directory-menu/hats.jpg"
		},
		{
			title: "JACKETS",
			imageUrl: "directory-menu/jackets.jpg"
		},
		{
			title: "SHOES",
			imageUrl: "directory-menu/shoes.jpg"
		},
		{
			title: "WOMENS",
			imageUrl: "directory-menu/womens.jpg"
		},
		{
			title: "MENS",
			imageUrl: "directory-menu/mens.jpg"
		}
	]

	render() {
		return <Container className="directory-menu">
			{
				this.rows.map((item, i) => <MenuItem key={i} {...item} />)
			}
		</Container>
	}
}