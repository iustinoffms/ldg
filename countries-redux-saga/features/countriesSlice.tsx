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
  version: 10,
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    getCountries: (state) => {
      state.isLoading = true;
    },
    setCountries: (state, { payload }) => {
      state.countries = payload;
      state.isLoading = false;
    },
    getRegionCountries: (state, { payload }) => {
      state.isLoading = true;
      state.region = payload;
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
    getVersion: (state, { payload }) => {
      state.version = payload;
    },
  },
});

export const {
  setCountries,
  getCountries,
  setRegionCountries,
  getRegionCountries,
  increase,
  getVersion,
} = countriesSlice.actions;
export const selectCountries = (state: any) => state.countries.countries;
export const selectRegion = (state: any) => state.countries.region;
export const selectVersion = (state: any) => state.countries.version;

export default countriesSlice.reducer;
