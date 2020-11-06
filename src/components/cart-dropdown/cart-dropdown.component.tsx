import { Button } from "@material-ui/core";
import React from "react";
import "./cart-dropdown.component.scss";

export default function Cart() {
	return (
		<div className="cart-dropdown">
			<div className="cart-item" />
			<Button type="submit" variant="contained" color="primary" className="mr-3 mt-3">
				CHECKOUT
			</Button>
		</div>
	)
}