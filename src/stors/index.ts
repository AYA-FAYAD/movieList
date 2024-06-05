import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { movieApi } from "./api/movieApi";
import userApi from "./api/usersApi";
import {
  movieReducer,
  displayInputShearch,
  displaySelectMovie,
} from "./slice/movieSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    [movieApi.reducerPath]: movieApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefultMiddleware) => {
    return getDefultMiddleware()
      .concat(movieApi.middleware)
      .concat(userApi.middleware);
  },
});

setupListeners(store.dispatch);
export { displayInputShearch, displaySelectMovie } from "./slice/movieSlice";
export { useGetUserQuery, useAddUserMutation } from "./api/usersApi";

export { useGetMovieNameQuery } from "./api/movieApi";
