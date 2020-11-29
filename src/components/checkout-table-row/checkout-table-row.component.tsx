import { IconButton, TableCell, TableRow } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import React from "react";
import { useDispatch } from "react-redux";
import CartEntryProps from "../../models/CartEntryProps";
import { removeAllCartItemsById } from "../../redux/cart/cart.slice";
import CartItemQuantity from "../cart-item-quantity/cart-item-quantity.component";
import "./checkout-table-row.component.scss";

export default function CheckoutTableRow(props: CartEntryProps) {
	const dispatch = useDispatch();

	return <TableRow key={props.item.id}>
		<TableCell align="center">
			<img className="product-image" src={props.item.imageUrl} alt={props.item.name} />
		</TableCell>
		<TableCell align="center">{props.item.name}</TableCell>
		<TableCell align="center">
			<CartItemQuantity {...props} />
		</TableCell>
		<TableCell align="center">£{props.item.price}</TableCell>
		<TableCell align="center">
			<IconButton onClick={() => dispatch(removeAllCartItemsById(props.item.id))}>
				<DeleteForeverIcon color="primary" />
			</IconButton>
		</TableCell>
	</TableRow>;
}