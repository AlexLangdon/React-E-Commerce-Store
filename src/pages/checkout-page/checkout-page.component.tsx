import { Alert } from "@material-ui/lab";
import AlertTitle from "@material-ui/lab/AlertTitle";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutTableRow from "../../components/checkout-table-row/checkout-table-row.component";
import StripeCheckoutButton from "../../components/stripe-checkout-button/stripe-checkout-button";
import CartEntryProps from "../../models/CartEntryProps";
import { cartEntriesSelector, cartTotalCostSelector } from "../../redux/cart/cart.slice";
import "./checkout-page.component.scss";

export default function CheckoutPage(): JSX.Element {
	const entries = useSelector(cartEntriesSelector);
	const totalCost = useSelector(cartTotalCostSelector);

	return (
		<div className="container">
			{
				entries.map(
					(entry: CartEntryProps) => (
						<CheckoutTableRow key={entry.item.id} {...entry} />
					)
				)
			}
			<hr />
			<div className="total-sum">
				<span className="ml-auto mr-3">TOTAL: £{totalCost}</span>
			</div>
			<hr />
			<div className="row">
				<div className="col-sm-8 mb-3">
					<Alert severity="warning">
							<AlertTitle>
								Please use the following credit card details for testing:
							</AlertTitle>
							Card number: 4242 4242 4242 4242
							<br />
							Exp: 01/50 - CVV: 123
					</Alert>
				</div>
				<div className="col-sm-4 d-flex justify-content-center">
					<StripeCheckoutButton price={totalCost} />
				</div>
			</div>
		</div>
	);
}