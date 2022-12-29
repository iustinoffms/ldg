import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },

    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    incrementByTwo: (state) => {
      state.count += 2;
    },
  },
});

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const {
  increment,
  decrement,
  reset,
  incrementByAmount,
  incrementByTwo,
} = counterSlice.actions;
export const selectCounter = (state) => state.counter.count;
export default counterSlice.reducer;
