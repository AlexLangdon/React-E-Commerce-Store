import { Button, FormGroup, TextField } from "@material-ui/core";
import React from "react";

interface SignUpState {
	email: string;
	password: string;
}

export class SignUp extends React.Component<{}, SignUpState> {
	private initialState = {
		name: "",
		email: "",
		password: "",
		password_confirm: ""
	} as const;

	state = this.initialState;

	private handleSubmit = (event: any): void => {
		event.preventDefault();
		this.setState(this.initialState);
	}

	private handleChange = (event: any): void => {
		const { value, name } = event.target;
		this.setState({ [name]: value } as Pick<SignUpState, keyof SignUpState>);
	}

	render() {
		return (
			<div className="sign-in">
				<h2>I don't have an account</h2>
				<h5>Sign up with your email and password</h5>
				<form onSubmit={this.handleSubmit}>
					<FormGroup>
						<TextField label="Display Name" type="text" id="sign-up-display-name"
							name="name" value={this.state.name} onChange={this.handleChange}
							inputProps={{ "aria-label": "sign-up-display-name" }} required />
						<TextField label="Email" type="email" id="sign-up-email"
							name="email" value={this.state.email} onChange={this.handleChange}
							inputProps={{ "aria-label": "sign-up-email" }} required />
						<TextField label="Password" type="password" id="sign-up-password"
							name="password" value={this.state.password} onChange={this.handleChange}
							inputProps={{ "aria-label": "sign-up-password" }} required />
						<TextField label="Confirm Password" type="password" id="sign-up-password-confirm"
							name="password_confirm" value={this.state.password_confirm}
							onChange={this.handleChange}
							inputProps={{ "aria-label": "sign-up-password-confirm" }} required />
					</FormGroup>
					<Button type="submit" variant="contained" color="primary" className="mr-3 mt-3">
						Sign Up
					</Button>
				</form>
			</div>
		)
	}
}