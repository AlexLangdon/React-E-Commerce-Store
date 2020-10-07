import CollectionItem from "./CollectionItem";

export default interface Collection {
	title: string;
	routeName: string;
	items: Array<CollectionItem>;
};