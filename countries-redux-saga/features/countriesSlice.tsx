import { createSlice } from "@reduxjs/toolkit";
import pickRandomCountries from "../utils/pickRandomCountries";

interface initialStateProps {
  countries: any[];
  isLoading: boolean;
}
type selectCountries = (state: initialStateProps) => void;

const initialState = {
  countries: [],
  isLoading: false,
  region: "",
  counter: 0,
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    getCountries: (state) => {
      state.isLoading = true;
      console.log("getCountiesReducer");
    },
    setCountries: (state, { payload }) => {
      state.countries = payload;
      state.isLoading = false;
    },
    getRegionCountries: (state, { payload }) => {
      state.isLoading = true;
      state.region = payload;
      console.log("getAsiaReducer");
    },
    setRegionCountries: (state, { payload }) => {
      state.countries = payload;
      state.isLoading = false;
    },

    increase: (state) => {
      if (state.counter < state.countries.length) {
        state.counter++;
      }
    },
  },
});
// export const selectPosts = (state) => state.posts

export const {
  setCountries,
  getCountries,
  setRegionCountries,
  getRegionCountries,
  increase,
} = countriesSlice.actions;
export const selectCountries = (state: any) => state.countries.countries;
export const selectRegion = (state: any) => state.countries.region;

export default countriesSlice.reducer;
