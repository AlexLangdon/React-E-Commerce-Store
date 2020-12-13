
import { Container, MuiThemeProvider } from "@material-ui/core";
import firebase from "firebase";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import { authService, convertCollectionsSnapshotToMap, createUserProfileDbDocument } from "./firebase/firebase.utils";
import User from "./models/User";
import CheckoutPage from "./pages/checkout-page/checkout-page.component";
import HomePage from "./pages/home-page/home-page.component";
import NotFoundPageComponent from "./pages/not-found-page/not-found-page.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import SignInAndSignUpPage from "./pages/sign-in-page/sign-in-sign-up-page.component";
import { setItemCollections } from "./redux/store-items/store-items.slice";
import { setCurrentUser, userSelector } from "./redux/user/user.slice";
import { appTheme } from "./theme";

export default function App(): JSX.Element {
	const dispatch = useDispatch();
	const stableDispatch = useCallback(dispatch, []);
	const currentUser = useSelector(userSelector);

	// Fire effect only on component mount and unmount
	useEffect(() => {
		// Load store item collections
		const collectionRef = firebase.firestore().collection("collections");
		collectionRef.get().then(snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			stableDispatch(setItemCollections(collectionsMap));
		});

		// Sign in via Firebase auth service and return function for unsubscribing from Firebase
		const unsubFromAuth = authService.onAuthStateChanged(async (userAuth: firebase.User | null) => {
			if (userAuth) {
				// Set local user state based on the received user account
				const userDocument = await createUserProfileDbDocument(userAuth, {});
				userDocument?.onSnapshot(snapShot => {
					const newUser = {
						id: snapShot.id,
						...snapShot.data()
					} as User;

					stableDispatch(setCurrentUser(newUser));
				});
			} else {
				// Else user is signed out
				stableDispatch(setCurrentUser(null));
			}
		});

		return () => {
			unsubFromAuth();
		};
	}, [stableDispatch]);

	const redirectSignInPage = () => {
		return currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />;
	};

	return <Router>
		<MuiThemeProvider theme={appTheme}>
			<Container>
				<Header />
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" render={redirectSignInPage} />
					<Route path="/checkout" component={CheckoutPage} />
					<Route path="/" component={NotFoundPageComponent} />
				</Switch>
			</Container>
		</MuiThemeProvider>
	</Router>;
}