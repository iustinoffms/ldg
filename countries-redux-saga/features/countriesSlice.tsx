import _ from "lodash";
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
      state.countries = [];
      state.answers = [];
      state.counter = 0;
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

    getRegionCountriesRequest: (state, { payload }) => {
      state.region = payload;
      state.isLoading = true;
      state.error = "";
      state.countries = [];
      state.answers = [];
      state.counter = 0;
    },
    getRegionCountriesSuccess: (state, { payload }) => {
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

    setVersion: (state, { payload }) => {
      state.version = payload;
    },

    getOceaniaCountriesRequest: (state) => {
      state.isLoading = true;
      state.error = "";
      state.countries = [];
      state.answers = [];
      state.counter = 0;
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

    addAnswer: () => {},
    answerRequest: () => {},
    answerSucess: (state, { payload }) => {
      if (state.counter < state.countries.length - 1) {
        state.counter++;
      }
      state.answers.push(payload);
    },
    answerFailed: (state) => {
      if (state.counter < state.countries.length - 1) {
        state.counter++;
      }
      state.answers.push("Not answered");
    },
  },
});

export const {
  getRegionCountriesRequest,
  getRegionCountriesSuccess,
  getRegionCountriesFailure,
  getOceaniaCountriesRequest,
  getOceaniaCountriesSuccess,
  getOceaniaCountriesFailure,
  getCountriesRequest,
  getCountriesSuccess,
  getCountriesFailure,
  setRegionCountries,
  setVersion,
  addAnswer,
  answerRequest,
  answerSucess,
  answerFailed,
} = countriesSlice.actions;

export const selectCountries = (state: any) => state.countries.countries;

export const selectVersion = (state: any) => state.countries.version;

export const selectAnswers = (state: any) => state.countries.answers;

export const selectFlagScreenData = (state: any) => ({
  counter: state.countries.counter,
  options: _.shuffle([
    state.countries.countries[state.countries.counter],
    state.countries.optionOneCountries[state.countries.counter],
    state.countries.optionTwoCountries[state.countries.counter],
  ]),
  currentCountry: state.countries.countries[state.countries.counter],
});

export const selectRequestStatus = (state: any) => ({
  isLoading: state.countries.isLoading,
  error: state.countries.error,
});

export default countriesSlice.reducer;
