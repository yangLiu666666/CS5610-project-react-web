import {createAsyncThunk} from "@reduxjs/toolkit";
import {findMovieBySearchTerm} from "../../services/omdb-service";

export const findMovieBySearchTermThunk = createAsyncThunk(
    'findMovieBySearchTerm',
    (term) => findMovieBySearchTerm(term)
)