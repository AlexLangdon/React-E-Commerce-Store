import { combineReducers } from "redux";
import { PersistConfig } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import cart from "./cart/cart.slice";
import directory from "./directory/directory.slice";
import storeItems from "./store-items/store-items.slice";
import user from "./user/user.slice";

const persistConfig: PersistConfig<RootState> = {
	key: "root",
	storage,
	whitelist: ["cart"]
};

const rootReducer = combineReducers({
	user,
	cart,
	directory,
	storeItems
});

export type RootState = ReturnType<typeof rootReducer>;
export default persistReducer(persistConfig, rootReducer);