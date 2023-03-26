import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const initialState = {
  userInfo: [],
  error: "",
  message: "",
};

export const loginPost = createAsyncThunk("user/loginPost", async (user) => {
  const response = await axios.post(
    "https://microtaskbidz.cyclic.app/user/signin",
    user
  );
  return response.data;
});

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginPost.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        localStorage.setItem("token", JSON.stringify(state.userInfo.token));
        state.message = "succesful";
      })
      .addCase(loginPost.rejected, (state, action) => {
        state.error = "something is wrong";
      });
  },
});

export default loginSlice.reducer;
