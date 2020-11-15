import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItemQuantity from "../../components/cart-item-quantity/cart-item-quantity.component";
import CartEntryProps from "../../models/CartEntryProps";
import { removeAllCartItemsById } from "../../redux/cart/cart.slice";
import { RootState } from "../../redux/root-reducer";
import "./checkout-page.component.scss";

export default function CheckoutPage() {
	const dispatch = useDispatch();
	const entries = useSelector((rootState: RootState) => rootState.cart.cartEntries);
	const totalCost = entries.reduce(
		(runningTotal, entry) => runningTotal + entry.quantity * entry.item.price, 0
	);

	const entryElements = entries.map((itemGroup: CartEntryProps) => {
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
					<IconButton onClick={() => dispatch(removeAllCartItemsById(itemGroup.item.id))}>
						<DeleteForeverIcon color="primary" />
					</IconButton>
				</TableCell>
			</TableRow>
		)
	})

	return (
		<div className="container">
			<TableContainer className="row">
				<Table>
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
						{entryElements}
						<TableRow>
							<TableCell colSpan={4} />
							<TableCell align="center"><b>TOTAL: £{totalCost}</b></TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	)
}