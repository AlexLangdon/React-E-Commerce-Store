import React from "react";
import ItemCollection from "../../models/ItemCollection";
import StoreItem from "../../models/StoreItem";
import StoreItemCard from "../store-item-card/store-item-card.component";

export default function CollectionView(props: ItemCollection): JSX.Element {
	return <div className="collection-preview">
		<h1 className="title">{props.title}</h1>
		<div className="preview d-flex flex-wrap justify-content-around">
			{
				props.items.map((item: StoreItem) => <StoreItemCard key={item.id} {...item} />)
			}
		</div>
	</div>;
}