import { createSlice } from "@reduxjs/toolkit";

interface initialStateProps {
  countries: any[];
  isLoading: boolean;
}
const initialState: initialStateProps = {
  countries: [],
  isLoading: false,
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
    },
  },
});
// export const selectPosts = (state) => state.posts

export const { setCountries, getCountries } = countriesSlice.actions;
export const selectCountries = (state: any) => state.countries;
export default countriesSlice.reducer;
