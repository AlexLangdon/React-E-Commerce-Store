import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../../models/User";
import { RootState } from "../root-reducer";

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
		setCurrentUser(state: UserState, action: PayloadAction<User | null>): UserState {
			return {
				currentUser: action.payload
			}
		}
	}
})

const selectUser = (state: RootState) => state.user;
export const userSelector = createSelector(
	selectUser,
	(userState: UserState) => userState.currentUser
);

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;