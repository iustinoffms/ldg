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
    addAnswer: (state, { payload }) => {
      state.answers.push(payload);
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

    setScore: (state, { payload }) => {
      state.score = payload;
    },
    startTimer: (state) => {
      state.timer = 10;
    },
    stopTimer: (state, { payload }) => {
      state.timer = payload;
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
export const selectTimer = (state: any) => {
  state.countries.timer;
};

export default countriesSlice.reducer;
