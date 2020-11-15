import { Card, CardContent, CardMedia } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import CollectionItem from "../../models/CollectionItem";
import { addItemToCart } from "../../redux/cart/cart.slice";
import "./store-item-card.component.scss";

export default function StoreItemCard(props: CollectionItem) {
	const dispatch = useDispatch();

	return <Card className="collection-item">
		<CardMedia className="item-media" image={props.imageUrl}>
			<div className="add-to-cart-button" onClick={() => dispatch(addItemToCart(props))}>
				Add To Cart
			</div>
		</CardMedia>
		<CardContent className="item-name d-flex justify-content-between">
			<span>{props.name}</span> <span className="ml-2">£{props.price}</span>
		</CardContent>
	</Card>
}