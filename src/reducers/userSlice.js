import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        fullname: "یونس قربانی"
    },
    {
        id: "2",
        fullname: "سعید افراز"
    },
    {
        id: "3",
        fullname: "آرش افراز"
    },
];

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
});

export default usersSlice.reducer;