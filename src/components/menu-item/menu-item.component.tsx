import { Card, CardMedia } from "@material-ui/core";
import React from "react";
import "./menu-item.component.scss";

export class MenuItemProps {
	title = "";
	imageUrl = "";
}

export default function MenuItem(item: MenuItemProps) {
	return <Card className="menu-item" elevation={4}>
		<CardMedia className="item-media" image={item.imageUrl} />
		<div className="item-title">
			{item.title}
		</div>
	</Card>
}