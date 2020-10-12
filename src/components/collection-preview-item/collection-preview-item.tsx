import { Card, CardContent, CardMedia } from "@material-ui/core";
import React from "react";
import CollectionItem from "../../models/CollectionItem";
import "./collection-preview-item.scss";

export default function CollectionPreviewItem(props: CollectionItem) {
	return <Card className="collection-item">
		<CardMedia className="item-media" image={props.imageUrl} />
		<CardContent className="item-name d-flex justify-content-between">
			<span>{props.name}</span> <span className="ml-2">£{props.price}</span>
		</CardContent>
	</Card>
}