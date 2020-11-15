import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutTableRow from "../../components/checkout-table-row/checkout-table-row.component";
import CartEntryProps from "../../models/CartEntryProps";
import { RootState } from "../../redux/root-reducer";
import "./checkout-page.component.scss";

export default function CheckoutPage() {
	const entries = useSelector((rootState: RootState) => rootState.cart.cartEntries);
	const totalCost = entries.reduce(
		(runningTotal, entry) => runningTotal + entry.quantity * entry.item.price, 0
	);

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
						{entries.map((entry: CartEntryProps) => <CheckoutTableRow {...entry} />)}
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