
import { Container, MuiThemeProvider } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import { authService, createUserProfileDbDocument } from "./firebase/firebase.utils";
import User from "./models/User";
import HomePage from "./pages/home-page/home-page.component";
import { ShopPage } from "./pages/shop-page/shop-page.component";
import SignInAndSignUpPage from "./pages/sign-in-page/sign-in-sign-up-page.component";
import { setCurrentUser } from "./redux/user/user.reducer";
import { appTheme } from "./theme";

export default function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		// Sign in via Firebase auth service and return function for unsubscribing from Firebase
		const unsubFromAuth = authService.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userDocument = await createUserProfileDbDocument(userAuth, null);
				userDocument?.onSnapshot(snapShot => {
					const newUser = {
						id: snapShot.id,
						...snapShot.data()
					} as User;
					dispatch(setCurrentUser(newUser));
				})
			} else {
				dispatch(setCurrentUser(null));
			}
		});
		return () => unsubFromAuth();
	})

	return <Router>
		<MuiThemeProvider theme={appTheme}>
			<Container>
				<Header />
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={SignInAndSignUpPage} />
				</Switch>
				<div>
					Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a>
				</div>
			</Container>
		</MuiThemeProvider>
	</Router>
}