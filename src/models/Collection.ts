import StoreItem from "./StoreItem";

export default interface Collection {
	id: number;
	title: string;
	routeName: string;
	items: Array<StoreItem>;
};