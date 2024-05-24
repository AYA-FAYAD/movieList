import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { movieApi } from "./api/movieApi";
import {
  movieReducer,
  displayInputShearch,
  displaySelectMovie,
} from "./slice/movieSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefultMiddleware) => {
    return getDefultMiddleware().concat(movieApi.middleware);
  },
});

setupListeners(store.dispatch);
export { displayInputShearch, displaySelectMovie } from "./slice/movieSlice";

export { useGetMovieNameQuery } from "./api/movieApi";
