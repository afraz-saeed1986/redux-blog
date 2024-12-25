import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { getAllUsers } from "../services/blogsServices";


export const fetchUsers = createAsyncThunk('/users/fetchUsers', async () => {
    const response = await getAllUsers();
    return response.data;
});

const usersSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {}
});

export default usersSlice.reducer;