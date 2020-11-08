import { IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import React from "react";
import { useDispatch } from "react-redux";
import CartItemProps from "../../models/CartItemProps";
import { addItemToCart, removeItemFromCart } from "../../redux/cart/cart.slice";
import "./cart-item.component.scss";

export default function CartItem(props: CartItemProps) {
	const dispatch = useDispatch();

	return (
		<div className="cart-item">
			<img src={props.item.imageUrl} alt={props.item.name} />
			<div className="item-details">
				<span className="name">{props.item.name}</span>
				<span className="price">${props.item.price}</span>
			</div>
			<div>
				<IconButton color="primary" aria-label="add-item" size="small"
					onClick={() => dispatch(addItemToCart(props.item))}>
					<AddIcon />
				</IconButton>
				<span className="quantity">{props.quantity}</span>
				<IconButton color="primary" aria-label="remove-item" size="small"
					onClick={() => dispatch(removeItemFromCart(props.item))}>
					<RemoveIcon />
				</IconButton>
			</div>
		</div>
	)
}