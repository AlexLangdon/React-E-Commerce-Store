import { Container } from "@material-ui/core";
import React, { Component } from "react";
import MenuItem, { MenuItemProps } from "../menu-item/menu-item.component";
import "./directory-menu.component.scss";

export default class DirectoryMenu extends Component {
	rows: Array<MenuItemProps> = [
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
	]

	render() {
		return <Container className="directory-menu">
			{
				this.rows.map((item, i) => <MenuItem key={i} {...item} />)
			}
		</Container>
	}
}