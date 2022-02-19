import { createSlice } from "@reduxjs/toolkit";

export const userIdSlice = createSlice({
  name: "userId",
  initialState: {
    value: null,
  },
  reducers: {
    userId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { userId } = userIdSlice.actions;

export const selectUserId = (state) => state.userId.userId;

export default userIdSlice.reducer;
