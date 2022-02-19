import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import userIdReducer from "../features/userIdSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    userId: userIdReducer,
  },
});
