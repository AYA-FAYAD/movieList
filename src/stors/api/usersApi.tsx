import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/trpc/",
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: ({ username, password }) => ({
        url: `getUser`,
        method: "GET",
      }),
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: "createUser",
        method: "POST",
        body: {
          username: user.username,
          password: user.password,
        },
      }),
    }),
  }),
});

export const { useGetUserQuery, useAddUserMutation } = userApi;
export default userApi;
