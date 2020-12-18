import React from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import CollectionView from "../../components/collection-view/collection-view.component";
import { collectionWithRouteSelectorFactory } from "../../redux/store-items/store-items.slice";

export default function CollectionPage(props: RouteComponentProps<{ collectionPath: string; }>): JSX.Element {
	const { collectionPath } = props.match.params;

	const collection = useSelector(collectionWithRouteSelectorFactory(collectionPath));

	return <>
		{collection ? <CollectionView {...collection} /> : <h2>Error - Collection Not Found</h2>}
	</>;
}