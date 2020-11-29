import { Button } from "@material-ui/core";
import PaymentIcon from "@material-ui/icons/Payment";
import React from "react";
import StripeCheckout, { Token } from "react-stripe-checkout";

export default function StripeCheckoutButton(props: { price: number; }): JSX.Element {
	const priceForStripe = props.price * 100;
	const publishableKey = "pk_test_51HoJ7TGUCEgQsZQhoUYOUim6d1OOuOC4G8RVTetyf3M6iCoQEPbsAWnpU1Tg8etWMDpKq7i288OPFxbVrQH6sHs000xyUI0I8b";

	const onToken = (token: Token) => {
		console.log(token);
		alert("Payment Success");
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="Neo Apparel Ltd."
			billingAddress
			shippingAddress
			description={`Your total is £${props.price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			locale="auto"
			currency="GBP"
			stripeKey={publishableKey}
		>
			<Button type="submit" variant="contained" color="primary"
				aria-label="pay-now" size="medium" endIcon={<PaymentIcon />}>
				Pay Now
			</Button>
		</StripeCheckout >
	);
}