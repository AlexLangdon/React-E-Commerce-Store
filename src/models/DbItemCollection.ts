import StoreItem from "./StoreItem";

export default interface DbItemCollection {
	title: string;
	items: Array<StoreItem>;
}