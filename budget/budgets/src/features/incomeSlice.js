import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

const initialState = data.income;
const incomeSlice = createSlice({
  name: "income",
  initialState,
  reducers: {},
});

export const getIncome = (state) => state.income.income;
export default incomeSlice.reducer;
