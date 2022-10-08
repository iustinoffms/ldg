import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

const initialState = data;
const bugetsSlice = createSlice({
  name: "bugets",
  initialState,
  reducers: {},
});

export const getAllBugetCategories = (state) => state.bugets.bugets;
export default bugetsSlice.reducer;
