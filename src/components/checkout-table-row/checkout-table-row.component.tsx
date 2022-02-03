import { Button, Card, CardContent, CardMedia } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import React from "react";
import { useDispatch } from "react-redux";
import CartEntryProps from "../../models/CartEntryProps";
import { removeAllCartItemsById } from "../../redux/cart/cart.slice";
import CartItemQuantity from "../cart-item-quantity/cart-item-quantity.component";
import "./checkout-table-row.component.scss";

export default function CheckoutTableRow(props: CartEntryProps): JSX.Element {
	const dispatch = useDispatch();

	return (
		<Card className="checkout-item">
			<CardMedia className="product-image col-3" image={props.item.imageUrl} title={props.item.name} />
			<CardContent className="content w-100">
				<div className="row">
					<h5>{props.item.name}</h5>
					<Button className="ml-2" onClick={() => dispatch(removeAllCartItemsById(props.item.id))} 
						color="primary" endIcon={<DeleteForeverIcon color="primary" />}>
						Remove
					</Button>
				</div>
				<div className="row align-items-center">
					<div className="d-inline-flex align-items-center">
						<div className="quantity-label">Quantity: </div><div className="quantity-selector"><CartItemQuantity {...props} /></div>
					</div>
					<div>Unit Price: £{props.item.price}</div>
				</div>
				<div className="row align-items-end mt-2">
					<div className="ml-sm-auto sub-total">Sub Total: £{props.item.price * props.quantity}</div>
				</div>
			</CardContent>
		</Card>
	)
}