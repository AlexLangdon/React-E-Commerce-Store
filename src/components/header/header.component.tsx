import PersonIcon from "@material-ui/icons/Person";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/n-logo.svg";
import { authService } from "../../firebase/firebase.utils";
import { RootState } from "../../redux/root-reducer";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";
import "./header.component.scss";

export default function Header() {
	const { currentUser } = useSelector(
		(state: RootState) => state.user
	)

	const [isCartShown, setIsCartShown] = useState(false);

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
			{
				currentUser ?
					<>
						<button className="option m-4" onClick={() => authService.signOut()}>
							SIGN OUT
						</button>
						<div className="user-label option m-4">
							<PersonIcon className="person-icon" />
							<span>{currentUser.displayName}</span>
						</div>
					</>
					:
					<Link className="option m-4" to="/signin">
						SIGN IN
					</Link>
			}
			<div className="option m-4">
				<span onClick={() => setIsCartShown(!isCartShown)}><CartIcon /></span>
				<CartDropdown isShown={isCartShown} setIsShown={setIsCartShown} />
			</div>
		</div>
	</div>
}