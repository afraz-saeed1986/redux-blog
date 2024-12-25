import {createSlice, nanoid} from "@reduxjs/toolkit";
import {sub} from "date-fns-jalali";

const initialState = {
    blogs:[
    {
        id: nanoid(),
        date: sub(new Date(), {days: 2, minutes: 10}).toISOString(),
        title: "پست اول",
        content: "محتوای اولین پست",
        user: "1",
        reactions: {
            thumbsUp: 0,
            hooray: 0,
            heart: 0,
            rocket: 0,
            eyes: 0,
        }
    },
    {
        id: nanoid(),
        date: sub(new Date(), {minutes: 5}).toISOString(),
        title: "پست دوم",
        content: "محتوای دومین پست",
        user: "3",
        reactions: {
            thumbsUp: 0,
            hooray: 0,
            heart: 0,
            rocket: 0,
            eyes: 0,
        }
    },
 ],
};

const blogsSlice = createSlice({
    name: "blogs",
    initialState: initialState,
    reducers:{
        blogAdded: {
            reducer(state, action) {
                state.blogs.push(action.payload)
            },
            prepare(title, content, userId) {
                //Complex logic
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        title,
                        content,
                        user: userId
                },
            };
        },
    },
        blogUpdated: (state, action) => {
            const {id, title, content} = action.payload;
            const existingBlog = state.blogs.find(blog => blog.id === id);

            if(existingBlog){
                existingBlog.title = title;
                existingBlog.content = content;
            }
        },
        blogDeleted: (state, action) => {
            const {id} = action.payload;
            state.blogs = state.blogs.filter(blog => blog.id !== id);
        },
        reactionAdded: (state, action) => {
            const {blogId, reaction} = action.payload;
            const existingBlog = state.blogs.find(blog => blog.id === blogId);
            if(existingBlog){
                existingBlog.reactions[reaction]++;
            }
        }
 }
});

export const selectAllBlogs = state => state.blogs.blogs;

export const selectBlogById = (state, blogId) => state.blogs.blogs.find(blog => blog.id === blogId);

export const {blogAdded, blogUpdated, blogDeleted, reactionAdded} = blogsSlice.actions;

export default blogsSlice.reducer;