import { combineReducers } from "redux";
import cart from "./cart/cart.slice";
import user from "./user/user.slice";

const rootReducer = combineReducers({
	user,
	cart
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;