import React from "react";
import { useSelector } from "react-redux";
import ItemCollection from "../../models/ItemCollection";
import { collectionsSelector } from "../../redux/store-items/store-items.slice";
import CollectionView from "../collection-view/collection-view.component";

export default function CollectionsOverview(): JSX.Element {
	const collections = useSelector(collectionsSelector);

	return <>
		{
			collections.length > 0 ? collections.map((collection: ItemCollection) => (
				<CollectionView key={collection.id} {...collection} />
			)) : <h2>Error - Collections Not Found</h2>
		}
	</>;
}