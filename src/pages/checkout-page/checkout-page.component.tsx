import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import AlertTitle from "@material-ui/lab/AlertTitle";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutTableRow from "../../components/checkout-table-row/checkout-table-row.component";
import StripeCheckoutButton from "../../components/stripe-checkout-button/stripe-checkout-button";
import CartEntryProps from "../../models/CartEntryProps";
import { cartEntriesSelector, cartTotalCostSelector } from "../../redux/cart/cart.slice";

export default function CheckoutPage(): JSX.Element {
	const entries = useSelector(cartEntriesSelector);
	const totalCost = useSelector(cartTotalCostSelector);

	return (
		<div className="container">
			<TableContainer className="row">
				<Table className="col-8 mx-auto">
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
						{
							entries.map((entry: CartEntryProps) => (
								<CheckoutTableRow key={entry.item.id} {...entry} />
							))
						}
						<TableRow>
							<TableCell colSpan={4} />
							<TableCell align="center"><b>TOTAL: £{totalCost}</b></TableCell>
						</TableRow>
						<TableRow>
							<TableCell colSpan={4}>
								<Alert severity="warning">
									<AlertTitle>
										Please use the following credit card details for testing:
									</AlertTitle>
									Card number: 4242 4242 4242 4242 - Exp: 01/50 - CVV: 123
								</Alert>
							</TableCell>
							<TableCell align="center">
								<StripeCheckoutButton price={totalCost} />
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}