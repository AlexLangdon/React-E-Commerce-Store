import React from "react";
import { useSelector } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { RootState } from "../../redux/root-reducer";
import "./cart-icon.component.scss";

export default function CartIcon() {
	const cartItemCount = useSelector((state: RootState) => state.cart).reduce(
		(runningTotal, item) => runningTotal + item.quantity, 0
	)

	return (
		<div className="cart-icon">
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{cartItemCount}</span>
		</div>
	)
}