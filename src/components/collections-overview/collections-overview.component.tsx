import React from "react";
import { useSelector } from "react-redux";
import ItemCollection from "../../models/ItemCollection";
import { collectionsSelector } from "../../redux/store-items/store-items.slice";
import CollectionPreview from "../collection-view/collection-view.component";

export default function CollectionsOverview(): JSX.Element {
	const collections = useSelector(collectionsSelector);

	return <>
		{
			collections.map((collection: ItemCollection) => (
				<CollectionPreview key={collection.id} {...collection} />
			))
		}
	</>;
}