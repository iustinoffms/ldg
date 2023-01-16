import { createSlice } from "@reduxjs/toolkit";

interface initialStateProps {
  countries: any[];
  isLoading: boolean;
}
type selectCountries = (state: initialStateProps) => void;

const initialState = {
  countries: [],
  isLoading: false,
  shortListCountries: [],
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
    getShortListCountries: (state) => {
      state.isLoading = true;
    },
    setShortListCountries: (state, { payload }) => {
      state.shortListCountries = payload;
    },
  },
});
// export const selectPosts = (state) => state.posts

export const {
  setCountries,
  getCountries,
  getShortListCountries,
  setShortListCountries,
} = countriesSlice.actions;
export const selectCountries = (state: any) => state.countries.countries;
export const selectLoadingState = (state: any) => state.contries?.isLoading;
export const selectShortListCountries = (state: any) =>
  state.countries.shortListCountries;

export default countriesSlice.reducer;
