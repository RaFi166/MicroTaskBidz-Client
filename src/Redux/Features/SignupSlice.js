import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const initialState = {
  userInfo: [],
  error: "",
  message: "",
};

export const userPost = createAsyncThunk("user/userPost", async (user) => {
  const response = await axios.post(
    "https://microtaskbidz.cyclic.app/user",
    user
  );
  return response.data;
});

const signupSlice = createSlice({
  name: "signupSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(userPost.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.message = "succesful";
      })
      .addCase(userPost.rejected, (state, action) => {
        state.error = "something is wrong";
      });
  },
});

export default signupSlice.reducer;
