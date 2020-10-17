
import { Container, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/home-page/home-page.component";
import { ShopPage } from "./pages/shop-page/shop-page.component";
import SignInAndSignUpPage from "./pages/sign-in-page/sign-in-sign-up-page.component";
import { appTheme } from "./theme";

export default function App() {
	return (
		<Router>
			<MuiThemeProvider theme={appTheme}>
				<Container>
					<Header />
					<Switch>
						<Route path="/" exact component={HomePage} />
						<Route path="/shop" component={ShopPage} />
						<Route path="/signin" component={SignInAndSignUpPage} />
					</Switch>
					<div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a></div>
				</Container>
			</MuiThemeProvider>
		</Router>
	);
}
