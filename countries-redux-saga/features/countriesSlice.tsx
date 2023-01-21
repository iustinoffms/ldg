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
    getRegionCountriesRequest: (state, { payload }) => {
      state.region = payload;
      state.isLoading = true;
      state.error = "";
      console.log("getRegionCountriesRequest");
    },
    getRegionCountriesSuccess: (state, { payload }) => {
      console.log("getregionCountriesSUcess");
      state.countries = payload.countries;
      state.isLoading = false;
      state.error = "";
      state.optionOneCountries = payload.optionOneCountries;
      state.optionTwoCountries = payload.optionTwoCountries;
    },

    getRegionCountriesFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
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
    getOceaniaCountriesRequest: (state) => {
      state.isLoading = true;
      state.error = "";
    },

    getOceaniaCountriesSuccess: (state, { payload }) => {
      state.countries = payload.countries;
      state.optionOneCountries = payload.optionOneCountries;
      state.optionTwoCountries = payload.optionTwoCountries;
      state.isLoading = false;
      state.error = "";
    },
    getOceaniaCountriesFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const {
  getCountriesRequest,
  getCountriesSuccess,
  getCountriesFailure,
  setOptionOneCountries,
  setOptionTwoCountries,
  getRegionCountriesRequest,
  getRegionCountriesSuccess,
  getRegionCountriesFailure,
  setRegionCountries,
  increase,
  setVersion,
  addAnswer,
  getOceaniaCountriesRequest,
  getOceaniaCountriesSuccess,
  getOceaniaCountriesFailure,
} = countriesSlice.actions;

export const selectCountries = (state: any) => state.countries.countries;
export const selectOptionOneCountries = (state: any) =>
  state.countries.optionOneCountries;
export const selectOptionTwoCountries = (state: any) =>
  state.countries.optionTwoCountries;
export const selectVersion = (state: any) => state.countries.version;
export const selectAnswers = (state: any) => state.countries.answers;

export const selectRequestStatus = (state: any) => ({
  isLoading: state.countries.isLoading,
  error: state.countries.error,
});

export default countriesSlice.reducer;
