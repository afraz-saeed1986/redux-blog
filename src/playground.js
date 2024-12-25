const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {},
});

const exampleThunkFunction = (dispatch, getState) => {
    const stateBefore = getState();
    console.log(`Counter before: ${stateBefore.counter}`);

    dispatch(increment());

    const stateAfter = getState();
    console.log(`Counter after: ${stateAfter.counter}`);
};

store.dispatch(exampleThunkFunction);

//Dispatch Plain action
dispatch(increment());

//Thunk Action Creator
const logAndAdd = (amount) => {
    return async (dispatch, getState) => {
        const stateBefore = getState();
        console.log(`Counter before: ${stateBefore.counter}`);

        dispatch(incrementByAmount(amount));

        const stateAfter = getState();
        console.log(`Counter After: ${stateAfter.counter}`);
    };
};

//CreateAsyncThunk
export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
    const response = await client.get("url");
    return response.data;
});
//returns start/success/failure action

dispatch(fetchBlogs); //returns 'blogs/fetchBlogs/pending' action
//if promise is resolved return 'blogs/fetchBlogs/fulfilled' action
//if promise is rejected return 'blogs/fetchBlogs/rejected' action