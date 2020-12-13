import StoreItem from "./StoreItem";

export default interface ItemCollection {
	id: string;
	title: string;
	routeName: string;
	items: Array<StoreItem>;
}