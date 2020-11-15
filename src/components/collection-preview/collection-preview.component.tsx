import React from "react";
import Collection from "../../models/Collection";
import CollectionPreviewItem from "../collection-preview-item/collection-preview-item.component";

export default function CollectionPreview(props: Collection) {
	return <div className="collection-preview">
		<h1 className="title">{props.title}</h1>
		<div className="preview d-flex flex-wrap justify-content-around">
			{
				props.items.map(item => <CollectionPreviewItem key={item.id} {...item} />)
			}
		</div>
	</div>
}