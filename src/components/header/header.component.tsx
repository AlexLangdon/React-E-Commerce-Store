import PersonIcon from "@material-ui/icons/Person";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/n-logo.svg";
import { authUtil } from "../../firebase/firebase.utils";
import "./header.component.scss";

interface HeaderProps {
	currentUser: firebase.User | null;
}

export default function Header({ currentUser }: HeaderProps) {
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
						<button className="option m-4" onClick={() => authUtil.signOut()}>
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
		</div>
	</div>
}