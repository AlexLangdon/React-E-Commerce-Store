import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { SHOP_DATA } from "./shop-data";

export class ShopPage extends Component {
	state = {
		collections: SHOP_DATA
	}

	render() {
		return SHOP_DATA.map((collection, i) => {
			return <CollectionPreview key={i} {...collection}></CollectionPreview>
		})
	}
}