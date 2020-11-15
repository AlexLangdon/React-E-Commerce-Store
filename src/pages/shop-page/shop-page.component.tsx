import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection-page/collection-page.component";

export default function ShopPage({ match }: RouteComponentProps) {
	return <>
		<Route exact path={`${match.path}`} component={CollectionsOverview} />
		<Route path={`${match.path}/:collectionPath`} component={CollectionPage} />
	</>
}