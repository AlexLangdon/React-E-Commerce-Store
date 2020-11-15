import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import React from "react";
import { useDispatch } from "react-redux";
import CartEntryProps from "../../models/CartEntryProps";
import { addItemToCart, removeSingleCartItemById } from "../../redux/cart/cart.slice";
import "./cart-item-quantity.component.scss";

export default function CartItemQuantity(props: CartEntryProps) {
	const dispatch = useDispatch();

	return (
		<div>
			<IconButton color="primary" aria-label="add-item" size="small"
				onClick={() => dispatch(addItemToCart(props.item))}>
				<AddIcon />
			</IconButton>
			<span className="quantity">{props.quantity}</span>
			<IconButton color="primary" aria-label="remove-item" size="small"
				onClick={() => dispatch(removeSingleCartItemById(props.item.id))}>
				<RemoveIcon />
			</IconButton>
		</div>
	)
}