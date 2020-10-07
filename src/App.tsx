
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home-page/home-page.component";
import { ShopPage } from "./pages/shop-page/shop-page.component";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/shop" component={ShopPage} />
			</Switch>
		</Router>
	);
}

export default App;
