import React from "react";
import { useSelector } from "react-redux";
import Collection from "../../models/Collection";
import { RootState } from "../../redux/root-reducer";
import CollectionPreview from "../collection-preview/collection-preview.component";

export default function CollectionsOverview() {
	const collections = useSelector((state: RootState) => state.storeItems);

	return <>
		{
			collections.map((collection: Collection) => (
				<CollectionPreview key={collection.id} {...collection} />
			))
		}
	</>
}