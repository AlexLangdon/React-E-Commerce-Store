import React from "react";
import CartEntryProps from "../../models/CartEntryProps";
import CartItemQuantity from "../cart-item-quantity/cart-item-quantity.component";
import "./cart-entry.component.scss";

export default function CartEntry(props: CartEntryProps): JSX.Element {
	return (
		<div className="cart-entry">
			<img src={props.item.imageUrl} alt={props.item.name} />
			<div className="entry-details">
				<span className="name">{props.item.name}</span>
				<span className="price">£{props.item.price}</span>
			</div>
			<CartItemQuantity {...props} />
		</div>
	);
}