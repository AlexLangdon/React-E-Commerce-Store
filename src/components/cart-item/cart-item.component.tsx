import React from "react";
import CartItemProps from "../../models/CartItemProps";
import CartItemQuantity from "../cart-item-quantity/cart-item-quantity.component";
import "./cart-item.component.scss";

export default function CartItem(props: CartItemProps) {
	return (
		<div className="cart-item">
			<img src={props.item.imageUrl} alt={props.item.name} />
			<div className="item-details">
				<span className="name">{props.item.name}</span>
				<span className="price">£{props.item.price}</span>
			</div>
			<CartItemQuantity {...props} />
		</div>
	)
}