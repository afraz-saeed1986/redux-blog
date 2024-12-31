import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
    reducerPath: "api", //state.api
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:9000"}),
    tagTypes: ["BLOG"],
    endpoints: builder => ({
        getBlogs: builder.query({
            query : () => "/blogs",
            providesTags: ["BLOG"]
        }),
        getBlog: builder.query({
            query: (initialBlogId) => `/blogs/${initialBlogId}`,
        }),
        addNewBlog: builder.mutation({
            query: initialBlog => ({
                url: "/blogs",
                method: "POST",
                body: initialBlog,
            }),
            invalidatesTags: ["BLOG"]
        }),
        editBlog: builder.mutation({
            query: blog => ({
                url:`/blogs/${blog.id}`,
                method: "PUT",
                body: blog,
            })
        })
    }),
});


export const {useGetBlogsQuery,useGetBlogQuery, useAddNewBlogMutation, useEditBlogMutation} = apiSlice;