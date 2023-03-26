import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Features/LoginSlice";

import SignupSlice from "./Features/SignupSlice";
import TaskSlice from "./Features/TaskSlice";

export const store = configureStore({
  reducer: {
    SignupSlice: SignupSlice,
    LoginSlice: LoginSlice,
    TaskSlice: TaskSlice,
  },
});
