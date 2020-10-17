import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/n-logo.svg";
import "./header.component.scss";

export default function Header() {
	return <div className="header d-flex justify-content-between flex-wrap">
		<Link className="logo-container" to="/">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link className="option m-4" to="/shop">
				SHOP
			</Link>
			<Link className="option m-4" to="/shop">
				CONTACT
			</Link>
			<Link className="option m-4" to="/signin">
				SIGN IN
			</Link>
		</div>
	</div>
}