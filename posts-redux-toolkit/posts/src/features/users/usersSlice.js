import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "iustin" },
  { id: "1", name: "razvan" },
  { id: "2", name: "ilie" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
