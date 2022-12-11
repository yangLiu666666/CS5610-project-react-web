import { createSlice } from "@reduxjs/toolkit";
import profileInfo from "./profile.json";

const profileSlice = createSlice({
    name: "profile",
    initialState: profileInfo,
    reducers: {
        editProfile(state, action) {
            Object.assign(state, action.payload)
        },
    }
});
export const { editProfile } = profileSlice.actions;
export default profileSlice.reducer;