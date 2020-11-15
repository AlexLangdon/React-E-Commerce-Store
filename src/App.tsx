
import { Container, MuiThemeProvider } from "@material-ui/core";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import { authService, createUserProfileDbDocument } from "./firebase/firebase.utils";
import User from "./models/User";
import CheckoutPage from "./pages/checkout-page/checkout-page.component";
import HomePage from "./pages/home-page/home-page.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import SignInAndSignUpPage from "./pages/sign-in-page/sign-in-sign-up-page.component";
import { RootState } from "./redux/root-reducer";
import { setCurrentUser } from "./redux/user/user.slice";
import { appTheme } from "./theme";

export default function App() {
	const dispatch = useDispatch();
	const stableDispatch = useCallback(dispatch, []);
	const { currentUser } = useSelector(
		(state: RootState) => state.user
	)

	// Fire effect only on component mount and unmount
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

					stableDispatch(setCurrentUser(newUser));
				})
			} else {
				stableDispatch(setCurrentUser(null));
			}
		});
		return () => {
			unsubFromAuth();
		}
	}, [stableDispatch])

	const redirectSignInPage = () => {
		return currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
	}

	return <Router>
		<MuiThemeProvider theme={appTheme}>
			<Container>
				<Header />
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" render={redirectSignInPage} />
					<Route path="/checkout" component={CheckoutPage} />
				</Switch>
				<div>
					Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a>
				</div>
			</Container>
		</MuiThemeProvider>
	</Router>
}