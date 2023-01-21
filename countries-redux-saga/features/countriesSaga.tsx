import {
  call,
  CallEffect,
  put,
  PutEffect,
  SelectEffect,
  takeLatest,
  select,
  delay,
} from "redux-saga/effects";
import axios from "axios";
import {
  getCountriesRequest,
  getCountriesSuccess,
  getCountriesFailure,
  getRegionCountriesRequest,
  getRegionCountriesSuccess,
  getRegionCountriesFailure,
  getOceaniaCountriesRequest,
  getOceaniaCountriesSuccess,
  getOceaniaCountriesFailure,
} from "./countriesSlice";
import pickRandomCountries from "../utils/pickRandomCountries";
import { selectVersion } from "./countriesSlice";
import { Regions } from "../components/PlayGame/PlayGame";

function fetchCountriesApi() {
  return axios
    .get("https://restcountries.com/v2/all")
    .then(({ data }) => ({ countries: data }));
}

function* fetchCountries(): Generator<
  CallEffect | PutEffect | SelectEffect,
  void,
  any
> {
  const version = yield select(selectVersion);

  try {
    yield delay(1000);
    const { countries } = yield call(fetchCountriesApi);

    const versionRandomCountries = yield call(
      pickRandomCountries,
      countries,
      version + 20
    );

    yield put(
      getCountriesSuccess({
        countries: versionRandomCountries.slice(0, 10),
        optionOneCountries: versionRandomCountries.slice(10, 20),
        optionTwoCountries: versionRandomCountries.slice(20, 30),
      })
    );
  } catch (error: any) {
    yield put(getCountriesFailure(error.message));
  }
}

function fetchRegionCountriesApi(region: string) {
  console.log(region);
  console.log("in the fetch countries");
  return axios
    .get(`https://restcountries.com/v2/region/${region}`)
    .then(({ data }) => ({ regionCountries: data }));
}

function* fetchRegionCountries({
  payload,
}: any): Generator<CallEffect | PutEffect | SelectEffect, void, any> {
  const version = yield select(selectVersion);

  if (payload === Regions.OCEANIA || payload === Regions.ALL_COUNTRIES) {
    return;
  }

  try {
    yield delay(2000);
    const { regionCountries } = yield call(fetchRegionCountriesApi, payload);

    const versionRandomCountries = yield call(
      pickRandomCountries,
      regionCountries,
      version + 20
    );

    yield put(
      getRegionCountriesSuccess({
        countries: versionRandomCountries.slice(0, 10),
        optionOneCountries: versionRandomCountries.slice(10, 20),
        optionTwoCountries: versionRandomCountries.slice(20, 30),
      })
    );
  } catch (err: any) {
    yield put(getRegionCountriesFailure(err.message));
  }
}

function fetchOceaniaCountriesApi() {
  return axios
    .get(`https://restcountries.com/v2/region/Oceania`)
    .then(({ data }) => ({ oceaniaCountries: data }));
}
function fetchAmericasCountriesApi() {
  return axios
    .get(`https://restcountries.com/v2/region/Americas`)
    .then(({ data }) => ({ americasCountries: data }));
}

function* fetchOceaniaCountries(): Generator<
  CallEffect | PutEffect | SelectEffect,
  void,
  any
> {
  const version = yield select(selectVersion);

  try {
    yield delay(2000);
    const { oceaniaCountries } = yield call(fetchOceaniaCountriesApi);
    const { americasCountries } = yield call(fetchAmericasCountriesApi);

    const versionRandomCountries = yield call(
      pickRandomCountries,
      oceaniaCountries,
      version
    );

    const randomizeAmericasCountries = yield call(
      pickRandomCountries,
      americasCountries,
      version + 10
    );

    yield put(
      getOceaniaCountriesSuccess({
        countries: versionRandomCountries,
        optionOneCountries: randomizeAmericasCountries.slice(0, 10),
        optionTwoCountries: randomizeAmericasCountries.slice(10, 20),
      })
    );
  } catch (err: any) {
    yield put(getOceaniaCountriesFailure(err.message));
  }
}

function* countriesSaga() {
  yield takeLatest(getCountriesRequest, fetchCountries);
  yield takeLatest(getRegionCountriesRequest, fetchRegionCountries);
  yield takeLatest(getOceaniaCountriesRequest, fetchOceaniaCountries);
}

export default countriesSaga;
