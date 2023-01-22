import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
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
  timer: number;
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
  timer: 10,
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
      state.countries = [];
      state.answers = [];
      state.counter = 0;
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
    addAnswer: (state, { payload }) => {},
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

    setScore: (state, { payload }) => {
      state.score = payload;
    },
    startTimer: (state) => {
      state.timer = 10;
    },
    stopTimer: (state, { payload }) => {
      state.timer = payload;
    },

    answerRequest: (state) => {},
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
  setScore,
  startTimer,
  stopTimer,
  answerRequest,
  answerFailed,
  answerSucess,
} = countriesSlice.actions;

export const selectCountries = (state: any) => state.countries.countries;
export const selectOptionOneCountries = (state: any) =>
  state.countries.optionOneCountries;
export const selectOptionTwoCountries = (state: any) =>
  state.countries.optionTwoCountries;
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
export const selectTimer = (state: any) => {
  state.countries.timer;
};

export default countriesSlice.reducer;
