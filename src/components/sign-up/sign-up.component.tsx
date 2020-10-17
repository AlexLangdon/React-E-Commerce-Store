import { Button, FormGroup, TextField } from "@material-ui/core";
import React from "react";

export class SignUp extends React.Component {
	render() {
		return (
			<div className="sign-in">
				<h2>I don't have an account</h2>
				<h5>Sign up with your email and password</h5>
				<form>
					<FormGroup>
						<TextField label="Display Name" type="text" id="sign-up-display-name"
							inputProps={{ "aria-label": "sign-up-display-name" }} />
						<TextField label="Email" type="email" id="sign-up-email"
							inputProps={{ "aria-label": "sign-up-email" }} />
						<TextField label="Password" type="password" id="sign-up-password"
							inputProps={{ "aria-label": "sign-up-password" }} />
						<TextField label="Confirm Password" type="password" id="sign-up-password-confirm"
							inputProps={{ "aria-label": "sign-up-password" }} />
					</FormGroup>
					<Button variant="contained" color="primary" className="mr-3 mt-3">
						Sign Up
					</Button>
				</form>
			</div>
		)
	}
}