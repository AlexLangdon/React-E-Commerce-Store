import { combineReducers } from "redux";
import cart from "./cart/cart.slice";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
	user: userReducer,
	cart
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;