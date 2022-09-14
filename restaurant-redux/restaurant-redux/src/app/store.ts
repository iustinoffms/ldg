import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../features/reservationsSlice";
import customersReducer from "../features/customersSlice";

export const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    customers: customersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
