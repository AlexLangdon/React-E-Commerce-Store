
import { Container, MuiThemeProvider } from "@material-ui/core";
import {User as FirebaseUser, firestore} from "firebase/app";
import React, { lazy, Suspense, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import PageSpinner from "./components/page-spinner/page-spinner.component";
import { authService, convertCollectionsSnapshotToMap, createUserProfileDbDocument } from "./firebase/firebase.utils";
import User from "./models/User";
import NotFoundPageComponent from "./pages/not-found-page/not-found-page.component";
import { fetchItemCollectionsComplete, fetchItemCollectionsStart } from "./redux/store-items/store-items.slice";
import { setCurrentUser, userSelector } from "./redux/user/user.slice";
import { appTheme } from "./theme";

const HomePage = lazy(() => import("./pages/home-page/home-page.component"));
const ShopPage = lazy(() => import("./pages/shop-page/shop-page.component"));
const SignInAndSignUpPage = lazy(() => import("./pages/sign-in-page/sign-in-sign-up-page.component"));
const CheckoutPage = lazy(() => import("./pages/checkout-page/checkout-page.component"));

export default function App(): JSX.Element {
	const dispatch = useDispatch();
	const stableDispatch = useCallback(dispatch, []);
	const currentUser = useSelector(userSelector);

	// Fire effect only on component mount and unmount
	useEffect(() => {
		// Load store item collections from firebase
		const collectionRef = firestore().collection("collections");
		// Show loading spinner
		stableDispatch(fetchItemCollectionsStart());
		collectionRef.get().then(snapshot => {
			// Store results
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			stableDispatch(fetchItemCollectionsComplete(collectionsMap));
		}).catch(() => {
			// If error loading then show no results
			stableDispatch(fetchItemCollectionsComplete([]));
		});

		// Sign in via Firebase auth service and return function for unsubscribing from Firebase
		const unsubFromAuth = authService.onAuthStateChanged(async (userAuth: FirebaseUser | null) => {
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

		// Unsubscribe from firebase on unmount
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
				<main>
					<Switch>
						<Suspense fallback={<PageSpinner />}>
							<Route path="/" exact component={HomePage} />
							<Route path="/shop" component={ShopPage} />
							<Route path="/signin" render={redirectSignInPage} />
							<Route path="/checkout" component={CheckoutPage} />
						</Suspense>
						<Route path="/" component={NotFoundPageComponent} />
					</Switch>
				</main>
			</Container>
		</MuiThemeProvider>
	</Router>;
}