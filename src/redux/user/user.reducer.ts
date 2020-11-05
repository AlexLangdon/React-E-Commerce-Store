import { createAction, createReducer } from "@reduxjs/toolkit";
import User from "../../models/User";

interface UserState {
	currentUser: User | null
}

const initialState: UserState = {
	currentUser: null
} as const;

export const setCurrentUser = createAction<User | null>("user/set");

const userReducer = createReducer(initialState, builder => {
	builder
		.addCase(setCurrentUser, (state, action) => {
			state.currentUser = action.payload
		});
})

export default userReducer;