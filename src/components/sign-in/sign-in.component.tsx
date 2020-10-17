import { Button, FormControl, FormGroup, Input, InputLabel } from "@material-ui/core";
import React from "react";

export class SignIn extends React.Component {
	state = {
		email: "",
		password: ""
	}

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<h5>Sign in with your email and password</h5>
				<form>
					<FormGroup>
						<FormControl>
							<InputLabel htmlFor="component-simple">Email</InputLabel>
							<Input inputProps={{ "aria-label": "email" }} />
						</FormControl>
					</FormGroup>
					<FormGroup>
						<FormControl>
							<InputLabel htmlFor="component-simple">Password</InputLabel>
							<Input inputProps={{ "aria-label": "password" }} />
						</FormControl>
					</FormGroup>
					<Button variant="contained" color="primary" className="mr-3 mt-3">
						Sign In
					</Button>
					<Button variant="contained" color="secondary" className="mr-3 mt-3">
						Sign In With Google
					</Button>
				</form>
			</div>
		)
	}
}