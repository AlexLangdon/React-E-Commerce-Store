import React from "react";
import { useSelector } from "react-redux";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { RootState } from "../../redux/root-reducer";

export default function ShopPage() {
	const storeItems = useSelector((state: RootState) => state.storeItems);

	return <>{
		storeItems.map((collection, i) => (
			<CollectionPreview key={i} {...collection}></CollectionPreview>
		))
	}</>
}