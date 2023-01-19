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
  error: string;
}

const initialState: initialStateProps = {
  countries: [],
  isLoading: false,
  error: "",
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
    getCountriesRequest: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    getCountriesSuccess: (state, { payload }) => {
      state.countries = payload.countries;
      state.isLoading = false;
      state.error = "";
      state.optionOneCountries = payload.optionOneCountries;
      state.optionTwoCountries = payload.optionTwoCountries;
    },
    getCountriesFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    setOptionOneCountries: (state, { payload }) => {
      state.optionOneCountries = payload;
    },
    setOptionTwoCountries: (state, { payload }) => {
      state.optionTwoCountries = payload;
    },
    setRegion: (state, { payload }) => {
      state.region = payload;
    },
    getRegionCountries: (state, { payload }) => {
      state.isLoading = true;
    },
    setRegionCountries: (state, { payload }) => {
      state.countries = payload;
      state.isLoading = false;
    },
    getRegionCountriesError: (state, { payload }) => {
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
    getOceaniaCountries: (state) => {
      state.isLoading = true;
    },

    setOceaniaCountries: (state, { payload }) => {
      state.countries = payload;
      state.isLoading = false;
    },
  },
});

export const {
  getCountriesSuccess,
  getCountriesRequest,
  getCountriesFailure,
  setOptionOneCountries,
  setOptionTwoCountries,
  setRegion,
  getRegionCountriesError,
  setRegionCountries,
  getRegionCountries,
  increase,
  setVersion,
  addAnswer,
  getOceaniaCountries,
  setOceaniaCountries,
} = countriesSlice.actions;

export const selectCountries = (state: any) => state.countries.countries;
export const selectOptionOneCountries = (state: any) =>
  state.countries.optionOneCountries;
export const selectOptionTwoCountries = (state: any) =>
  state.countries.optionTwoCountries;
export const selectRegion = (state: any) => state.countries.region;
export const selectVersion = (state: any) => state.countries.version;
export const selectAnswers = (state: any) => state.countries.answers;

export const selectRequestStatus = (state: any) => ({
  isLoading: state.countries.isLoading,
  error: state.countries.error,
});

export default countriesSlice.reducer;
