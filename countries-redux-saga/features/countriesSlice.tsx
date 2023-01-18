import { createSlice } from "@reduxjs/toolkit";

interface initialStateProps {
  countries: any[];
  isLoading: boolean;
  region: string | undefined;
  counter: number;
  version: number;
  score: number;
  optionOneCountries: any[];
  optionTwoCountries: any[];
  answers: string[];
}

const initialState: initialStateProps = {
  countries: [],
  isLoading: false,
  region: "",
  counter: 0,
  version: 10,
  score: 0,
  optionOneCountries: [],
  optionTwoCountries: [],
  answers: [],
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
    getCountriesError: (state, { payload }) => {
      state.isLoading = false;
      console.log("ERROR", payload);
    },
    setOptionOneCountries: (state, { payload }) => {
      state.optionOneCountries = payload;
    },
    setOptionTwoCountries: (state, { payload }) => {
      state.optionTwoCountries = payload;
    },
    setRegion: (state, { payload }) => {
      state.region = payload;
      console.log("trigger setRegion reducer and the region is:", state.region);
    },
    getRegionCountries: (state) => {
      state.isLoading = true;
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
    setVersion: (state, { payload }) => {
      state.version = payload;
    },
    addAnswer: (state, { payload }) => {
      state.answers.push(payload);
    },
  },
});

export const {
  setCountries,
  getCountries,
  getCountriesError,
  setOptionOneCountries,
  setOptionTwoCountries,
  setRegion,
  setRegionCountries,
  getRegionCountries,
  increase,
  setVersion,
  addAnswer,
} = countriesSlice.actions;
export const selectCountries = (state: any) => state.countries.countries;
export const selectOptionOneCountries = (state: any) =>
  state.countries.optionOneCountries;
export const selectOptionTwoCountries = (state: any) =>
  state.countries.optionTwoCountries;
export const selectRegion = (state: any) => state.countries.region;
export const selectVersion = (state: any) => state.countries.version;
export const selectAnswers = (state: any) => state.countries.answers;

export default countriesSlice.reducer;
