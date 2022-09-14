import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationState {
  value: string[];
}
const initialState: string[] = [];

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },
  },
});
export const { addReservation, removeReservation } = reservationsSlice.actions;

export default reservationsSlice.reducer;
