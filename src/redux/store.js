import {configureStore} from "@reduxjs/toolkit";
import userSlice from "../components/Features/userSlice";
import postsSlice from "../components/Features/postsSlice";

export const store = configureStore({
    reducer:{
        user: userSlice,
        posts: postsSlice
    },
})
export default store;