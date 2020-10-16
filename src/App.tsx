
import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/home-page/home-page.component";
import { ShopPage } from "./pages/shop-page/shop-page.component";

function App() {
	return (
		<Router>
			<Container>
				<Header />
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/shop" component={ShopPage} />
				</Switch>
				<div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a></div>
			</Container>
		</Router>
	);
}

export default App;
