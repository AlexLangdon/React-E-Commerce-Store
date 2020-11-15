import React from "react";
import Collection from "../../models/Collection";
import StoreItem from "../../models/StoreItem";
import StoreItemCard from "../store-item-card/store-item-card.component";

export default function CollectionView(props: Collection) {
	return <div className="collection-preview">
		<h1 className="title">{props.title}</h1>
		<div className="preview d-flex flex-wrap justify-content-around">
			{
				props.items.map((item: StoreItem) => <StoreItemCard key={item.id} {...item} />)
			}
		</div>
	</div>
}