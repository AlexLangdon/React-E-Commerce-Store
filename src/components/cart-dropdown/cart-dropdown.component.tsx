import { Button, IconButton } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../redux/root-reducer";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.component.scss";

interface CartDropdownProps {
	isShown: boolean;
	setIsShown: (newIsShowwn: boolean) => void;
}

export default function CartDropdown({ isShown, setIsShown }: CartDropdownProps) {
	const cartItems = useSelector((state: RootState) => state.cart);
	const history = useHistory();

	const cartItemElements = cartItems.length
		? (cartItems.map(cartItem => <CartItem key={cartItem.item.id} {...cartItem} />))
		: (<span className="empty-message">Your cart is empty</span>);

	return isShown ? (
		<div className="cart-dropdown" >
			<IconButton aria-label="close-cart" size="medium" className="close-button" color="primary"
				onClick={() => setIsShown(!isShown)}>
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