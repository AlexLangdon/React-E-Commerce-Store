import React from "react";
import { SignIn } from "../../components/sign-in/sign-in.component";
import { SignUp } from "../../components/sign-up/sign-up.component";

export default function SignInAndSignUpPage() {
	return <div className="row">
		<div className="col-md-6 mt-4">
			<SignIn />
		</div>
		<div className="col-md-6 mt-4">
			<SignUp />
		</div>
	</div>
}