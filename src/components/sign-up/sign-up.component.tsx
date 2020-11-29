import { Button, FormGroup, TextField } from "@material-ui/core";
import React from "react";
import { authService, createUserProfileDbDocument } from "../../firebase/firebase.utils";

interface SignUpState {
	displayName: string;
	email: string;
	password: string;
	confirmPassword: string;
	passwordError: string;
}

export class SignUp extends React.Component<{}, SignUpState> {
	private initialState = {
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
		passwordError: ""
	} as const;

	state = this.initialState;

	private handleSubmit = async (event: any): Promise<void> => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			this.setState({
				passwordError: "Passwords must match"
			});
			return;
		}

		try {
			const { user } = await authService.createUserWithEmailAndPassword(email, password);
			await createUserProfileDbDocument(user, { displayName });
			this.setState(this.initialState);
		} catch (error) {
			console.error(error);
		}
	};

	private handleChange = (event: any): void => {
		const { value, name } = event.target;
		this.setState({ [name]: value } as Pick<SignUpState, keyof SignUpState>);
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I don&apos;t have an account</h2>
				<h5>Sign up with your email and password</h5>
				<form onSubmit={this.handleSubmit}>
					<FormGroup>
						<TextField label="Display Name" type="text" id="sign-up-display-name"
							name="displayName" value={this.state.displayName} onChange={this.handleChange}
							inputProps={{ "aria-label": "sign-up-display-name" }} required />
						<TextField label="Email" type="email" id="sign-up-email"
							name="email" value={this.state.email} onChange={this.handleChange}
							inputProps={{ "aria-label": "sign-up-email" }} required />
						<TextField label="Password" type="password" id="sign-up-password"
							name="password" value={this.state.password} onChange={this.handleChange}
							inputProps={{ "aria-label": "sign-up-password" }} required />
						<TextField label="Confirm Password" type="password" id="sign-up-confirm-password"
							name="confirmPassword" value={this.state.confirmPassword}
							onChange={this.handleChange} error={this.state.passwordError.length > 0}
							helperText={this.state.passwordError}
							inputProps={{ "aria-label": "sign-up-password-confirm" }} required />
					</FormGroup>
					<Button type="submit" variant="contained" color="primary" className="mr-3 mt-3">
						Sign Up
					</Button>
				</form>
			</div>
		);
	}
}