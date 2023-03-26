import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const initialState = {
  task: [],
  error: "",
  message: "",
};

export const taskPost = createAsyncThunk("user/taskPost", async (task) => {
  const response = await axios.post(
    "https://microtaskbidz.cyclic.app/task",
    task
  );
  return response.data;
});

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(taskPost.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.message = "succesful";
      })
      .addCase(taskPost.rejected, (state, action) => {
        state.error = "something is wrong";
      });
  },
});

export default taskSlice.reducer;
