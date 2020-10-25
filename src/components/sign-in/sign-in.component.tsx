import { Button, FormGroup, TextField } from "@material-ui/core";
import React from "react";
import { authService, signInWithGoogle } from "../../firebase/firebase.utils";

interface SignInState {
	email: string;
	password: string;
}

export class SignIn extends React.Component<{}, SignInState> {
	private initialState = {
		email: "",
		password: "",
	} as const;

	state = this.initialState;

	private handleSubmit = async (event: any): Promise<void> => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			await authService.signInWithEmailAndPassword(email, password);
			this.setState(this.initialState);

		} catch (error) {
			console.error(error);
		}
	}

	private handleChange = (event: any): void => {
		const { value, name } = event.target;
		this.setState({ [name]: value } as Pick<SignInState, keyof SignInState>);
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