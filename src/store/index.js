import {configureStore} from "@reduxjs/toolkit";
import blogsReducer from "../reducers/blogSlice";

import {apiSlice} from "../api/apiSlice";
import usersReducer, { extendedApiSlice } from "../reducers/userSlice";

export const store = configureStore({
    reducer: {
        blogs: blogsReducer,
        users: usersReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

  //Fetch all users from api
//   store.dispatch(fetchUsers());

// console.log(apiSlice.endpoints.getUsers);

store.dispatch(extendedApiSlice.endpoints.getUsers.initiate());