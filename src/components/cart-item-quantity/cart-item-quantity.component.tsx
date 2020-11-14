import { IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import React from "react";
import { useDispatch } from "react-redux";
import CartItemProps from "../../models/CartItemProps";
import { addItemToCart, removeItemFromCart } from "../../redux/cart/cart.slice";

export default function CartItemQuantity(props: CartItemProps) {
	const dispatch = useDispatch();

	return (
		<div>
			<IconButton color="primary" aria-label="add-item" size="small"
				onClick={() => dispatch(addItemToCart(props.item))}>
				<AddIcon />
			</IconButton>
			<span className="quantity">{props.quantity}</span>
			<IconButton color="primary" aria-label="remove-item" size="small"
				onClick={() => dispatch(removeItemFromCart(props.item.id))}>
				<RemoveIcon />
			</IconButton>
		</div>
	)
}