
import { Container, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import { authService, createUserProfileDbDocument } from "./firebase/firebase.utils";
import User from "./models/User";
import HomePage from "./pages/home-page/home-page.component";
import { ShopPage } from "./pages/shop-page/shop-page.component";
import SignInAndSignUpPage from "./pages/sign-in-page/sign-in-sign-up-page.component";
import { appTheme } from "./theme";

interface AppState {
	currentUser: User | null;
}

export default class App extends React.Component<{}, AppState> {
	private unsubFromAuth!: firebase.Unsubscribe;

	state: AppState = {
		currentUser: null
	}

	componentDidMount(): void {
		this.unsubFromAuth = authService.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userDocument = await createUserProfileDbDocument(userAuth, null);

				userDocument?.onSnapshot(snapShot => {
					const newUser = {
						id: snapShot.id,
						...snapShot.data()
					} as User;

					this.setState({
						currentUser: newUser
					})
				})
			} else {
				this.setState({
					currentUser: null
				});
			}
		});
	}

	componentWillUnmount(): void {
		this.unsubFromAuth();
	}

	render() {
		return <Router>
			<MuiThemeProvider theme={appTheme}>
				<Container>
					<Header currentUser={this.state.currentUser} />
					<Switch>
						<Route path="/" exact component={HomePage} />
						<Route path="/shop" component={ShopPage} />
						<Route path="/signin" component={SignInAndSignUpPage} />
					</Switch>
					<div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a></div>
				</Container>
			</MuiThemeProvider>
		</Router>
	}
}
