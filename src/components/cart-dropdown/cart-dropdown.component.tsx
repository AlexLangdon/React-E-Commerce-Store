import { Button, IconButton } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { setCartShown, toggleCartShown } from "../../redux/cart/cart.slice";
import { RootState } from "../../redux/root-reducer";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.component.scss";

export default function CartDropdown() {
	const dispatch = useDispatch();
	const cartItems = useSelector((state: RootState) => state.cart.cartItems);
	const isShown = useSelector((state: RootState) => state.cart.isShown);
	const history = useHistory();
	const location = useLocation();

	useEffect(() => {
		dispatch(setCartShown(false));
	}, [location]);

	const cartItemElements = cartItems.length
		? (cartItems.map(cartItem => <CartItem key={cartItem.item.id} {...cartItem} />))
		: (<span className="empty-message">Your cart is empty</span>);

	return isShown ? (
		<div className="cart-dropdown" >
			<IconButton aria-label="close-cart" size="medium" className="close-button" color="primary"
				onClick={() => dispatch(toggleCartShown())}>
				<CloseIcon fontSize="default" />
			</IconButton>
			<div className="cart-items">
				{cartItemElements}
			</div>
			<Button type="submit" variant="contained" color="primary"
				onClick={() => history.push("/checkout")}>
				CHECKOUT
			</Button>
		</div>
	) : null;
}