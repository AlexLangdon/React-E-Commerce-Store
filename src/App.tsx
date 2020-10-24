
import { Container, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import { authUtil } from "./firebase/firebase.utils";
import HomePage from "./pages/home-page/home-page.component";
import { ShopPage } from "./pages/shop-page/shop-page.component";
import SignInAndSignUpPage from "./pages/sign-in-page/sign-in-sign-up-page.component";
import { appTheme } from "./theme";

interface AppState {
	currentUser: firebase.User | null;
}

export default class App extends React.Component<{}, AppState> {
	private unsubFromAuth!: firebase.Unsubscribe;

	state: AppState = {
		currentUser: null
	}

	componentDidMount(): void {
		this.unsubFromAuth = authUtil.onAuthStateChanged(user => {
			this.setState({ currentUser: user });
			console.log(user);
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
