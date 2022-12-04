import {createAsyncThunk} from "@reduxjs/toolkit";
import {userLikesMovie} from "../../services/likes-service";

export const userLikesMovieThunk = createAsyncThunk(
    'userLikesMovie',
    async (like) => {
        return await userLikesMovie(like.uid, like.mid)
    }
)