import CollectionItem from "./CollectionItem";

export default interface Collection {
	id: number;
	title: string;
	routeName: string;
	items: Array<CollectionItem>;
};