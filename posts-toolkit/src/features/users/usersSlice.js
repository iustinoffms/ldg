import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export const initialState = [];

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(USERS_URL);
  return response.data;
});
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      return payload;
    });
  },
});
export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
