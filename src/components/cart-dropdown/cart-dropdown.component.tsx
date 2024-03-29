import { Button, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import CartEntryProps from "../../models/CartEntryProps";
import { cartEntriesSelector, cartIsShownSelector, setCartShown, toggleCartShown } from "../../redux/cart/cart.slice";
import CartEntry from "../cart-entry/cart-entry.component";
import "./cart-dropdown.component.scss";

export default function CartDropdown(): JSX.Element | null {
	const dispatch = useDispatch();
	const stableDispatch = useCallback(dispatch, []);
	const cartEntries = useSelector(cartEntriesSelector);
	const isShown = useSelector(cartIsShownSelector);
	const history = useHistory();
	const location = useLocation();

	useEffect(() => {
		stableDispatch(setCartShown(false));
	}, [location, stableDispatch]);

	const cartEntryElements = cartEntries.length
		? (cartEntries.map(
			(cartEntry: CartEntryProps) => <CartEntry key={cartEntry.item.id} {...cartEntry} />
		)) : (<span className="empty-message">Your cart is empty</span>);

	return isShown ? (
		<div className="cart-dropdown" >
			<IconButton aria-label="close-cart" size="medium" className="close-button" color="primary"
				onClick={() => dispatch(toggleCartShown())}>
				<CloseIcon fontSize="default" />
			</IconButton>
			<div className="cart-items">
				{cartEntryElements}
			</div>
			<Button type="submit" variant="contained" color="primary"
				onClick={() => history.push("/checkout")}>
				CHECKOUT
			</Button>
		</div>
	) : null;
}