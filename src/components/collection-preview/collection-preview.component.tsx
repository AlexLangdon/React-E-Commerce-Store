import { Container } from "@material-ui/core";
import React from "react";
import Collection from "../../models/Collection";
import CollectionPreviewItem from "../collection-preview-item/collection-preview-item";

export default function CollectionPreview(props: Collection): JSX.Element {
	return <Container className="collection-preview">
		<h1 className="title">{props.title}</h1>
		<div className="preview d-flex flex-wrap justify-content-md-between justify-content-around">
			{
				props.items.map(item => (
					<CollectionPreviewItem key={item.id} {...item} />
				))
			}
		</div>
	</Container>
}