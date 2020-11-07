import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../../models/User";

interface UserState {
	currentUser: User | null
}

const initialState: UserState = {
	currentUser: null
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setCurrentUser(state, action: PayloadAction<User | null>) {
			return {
				currentUser: action.payload
			}
		}
	}
})

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;