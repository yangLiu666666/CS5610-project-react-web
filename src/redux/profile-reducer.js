import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profile",
    initialState: {},
    reducers: {
        editProfile(state, action) {
            Object.assign(state, action.payload)
        },
    }
});
export const { editProfile } = profileSlice.actions;
export default profileSlice.reducer;