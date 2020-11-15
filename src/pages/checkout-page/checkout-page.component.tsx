import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItemQuantity from "../../components/cart-item-quantity/cart-item-quantity.component";
import CartItemProps from "../../models/CartItemProps";
import { removeItemGroupFromCart } from "../../redux/cart/cart.slice";
import { RootState } from "../../redux/root-reducer";
import "./checkout-page.component.scss";

export default function CheckoutPage() {
	const dispatch = useDispatch();
	const items = useSelector((rootState: RootState) => rootState.cart.cartItems);
	const totalCost = items.reduce(
		(runningTotal, itemGroup) => runningTotal + itemGroup.quantity * itemGroup.item.price, 0
	);

	const itemElements = items.map((itemGroup: CartItemProps) => {
		return (
			<TableRow key={itemGroup.item.id}>
				<TableCell align="center">
					<img className="product-image"
						src={itemGroup.item.imageUrl}
						alt={itemGroup.item.name} />
				</TableCell>
				<TableCell align="center">{itemGroup.item.name}</TableCell>
				<TableCell align="center">
					<CartItemQuantity {...itemGroup} />
				</TableCell>
				<TableCell align="center">£{itemGroup.item.price}</TableCell>
				<TableCell align="center">
					<IconButton onClick={() => dispatch(removeItemGroupFromCart(itemGroup.item.id))}>
						<DeleteForeverIcon color="primary" />
					</IconButton>
				</TableCell>
			</TableRow>
		)
	})

	return (
		<div className="container">
			<TableContainer className="row col-md-12">
				<Table className="col-md-12">
					<TableHead>
						<TableRow>
							<TableCell align="center">Product</TableCell>
							<TableCell align="center">Description</TableCell>
							<TableCell align="center">Quantity</TableCell>
							<TableCell align="center">Price</TableCell>
							<TableCell align="center">Remove</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{itemElements}
						<TableRow>
							<TableCell colSpan={4} />
							<TableCell align="center">TOTAL: £{totalCost}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	)
}