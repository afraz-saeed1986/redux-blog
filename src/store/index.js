import {configureStore} from "@reduxjs/toolkit";
import blogsReducer from "../reducers/blogSlice";

import {apiSlice} from "../api/apiSlice";
import usersReducer, { fetchUsers } from "../reducers/userSlice";

export const store = configureStore({
    reducer: {
        blogs: blogsReducer,
        users: usersReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

  //Fetch all users from api
  store.dispatch(fetchUsers());