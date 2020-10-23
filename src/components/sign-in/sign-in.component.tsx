import { Button, FormGroup, TextField } from "@material-ui/core";
import React from "react";
import { signInWithGoogle } from "../../firebase/firebase.utils";

export class SignIn extends React.Component {
	private initialState = {
		email: "",
		password: "",
	} as const;

	state = this.initialState;

	handleSubmit = (event: any) => {
		event.preventDefault();

		this.setState(this.initialState);
	}

	handleChange = (event: any) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	}

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<h5>Sign in with your email and password</h5>
				<form onSubmit={this.handleSubmit}>
					<FormGroup>
						<TextField label="Email" type="email" id="sign-in-email"
							name="email" inputProps={{ "aria-label": "sign-in-email" }}
							value={this.state.email} onChange={this.handleChange} required />
						<TextField label="Password" type="password" id="sign-in-password"
							name="password" inputProps={{ "aria-label": "sign-in-password" }}
							value={this.state.password} onChange={this.handleChange} required />
					</FormGroup>
					<Button type="submit" variant="contained" color="primary" className="mr-3 mt-3">
						Sign In
					</Button>
					<Button variant="contained" color="secondary" className="mr-3 mt-3"
						onClick={signInWithGoogle}>
						Sign In With Google
					</Button>
				</form>
			</div>
		)
	}
}