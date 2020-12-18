import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionsPageContainer from "../collection-page/collection-page.container";

export default function ShopPage({ match }: RouteComponentProps): JSX.Element {
	return <>
		<Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
		<Route path={`${match.path}/:collectionPath`} component={CollectionsPageContainer} />
	</>;
}