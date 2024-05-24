import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const key = "88c794aa";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.omdbapi.com",
  }),
  endpoints: (builder) => ({
    getMovieName: builder.query({
      query: (title) => ({
        url: `/?s=${title}&apikey=${key}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMovieNameQuery } = movieApi;
