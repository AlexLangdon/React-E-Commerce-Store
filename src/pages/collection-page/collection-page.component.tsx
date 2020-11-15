import React from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import Collection from "../../models/Collection";
import { RootState } from "../../redux/root-reducer";

export default function CollectionPage(props: RouteComponentProps<{ collectionPath: string }>) {
	const { collectionPath } = props.match.params;

	const collection = useSelector((state: RootState) => {
		return state.storeItems.find((collection: Collection) => collection.routeName === collectionPath)
	});

	return <>
		{collection ? <CollectionPreview {...collection} /> : <h2>Collection Not Found</h2>}
	</>
}