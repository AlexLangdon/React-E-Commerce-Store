import { Container } from "@material-ui/core";
import React from "react";

interface PreviewItem {
	id: number;
	name: string;
	imageUrl: string;
	price: number
}

export interface CollectionPreviewProps {
	title: string;
	routeName: string;
	items: Array<PreviewItem>;
};

export default function CollectionPreview(props: CollectionPreviewProps): JSX.Element {
	return <Container className="collection-preview">
		<h1 className="title">{props.title}</h1>
		<div className="preview">
			{
				props.items.map(item => (
					<div key={item.id}>{item.name}</div>
				))
			}
		</div>
	</Container>
}