import { configureStore } from "@reduxjs/toolkit";
import bugetsReducer from "../features/bugetsSlice";
import incomeReducer from "../features/incomeSlice";

export const store = configureStore({
  reducer: { bugets: bugetsReducer, income: incomeReducer },
});
