import { Card, CardMedia } from "@material-ui/core";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import "./menu-item.component.scss";

export class MenuItemProps {
	title = "";
	imageUrl = "";
	linkUrl = "";
}

function MenuItem(props: MenuItemProps & RouteComponentProps) {
	return <Card className="menu-item" elevation={4}
		onClick={() => props.history.push(props.linkUrl)}>
		<CardMedia className="item-media" image={props.imageUrl} />
		<div className="item-title">
			{props.title}
		</div>
	</Card>
}

export default withRouter(MenuItem);