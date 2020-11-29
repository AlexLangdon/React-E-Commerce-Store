import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { cartItemsCountSelector, toggleCartShown } from "../../redux/cart/cart.slice";
import "./cart-icon.component.scss";

export default function CartIcon(): JSX.Element {
	const dispatch = useDispatch();
	const cartItemCount = useSelector(cartItemsCountSelector);

	return (
		<div className="cart-icon" onClick={() => dispatch(toggleCartShown())}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{cartItemCount}</span>
		</div>
	);
}