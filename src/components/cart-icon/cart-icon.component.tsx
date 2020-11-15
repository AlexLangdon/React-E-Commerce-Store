import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartShown } from "../../redux/cart/cart.slice";
import { RootState } from "../../redux/root-reducer";
import "./cart-icon.component.scss";

export default function CartIcon() {
	const dispatch = useDispatch();
	const cartItemCount = useSelector((state: RootState) => state.cart.cartItems).reduce(
		(runningTotal, item) => runningTotal + item.quantity, 0
	)

	return (
		<div className="cart-icon" onClick={() => dispatch(toggleCartShown())}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{cartItemCount}</span>
		</div>
	)
}