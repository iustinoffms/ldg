import {
  call,
  CallEffect,
  put,
  PutEffect,
  SelectEffect,
  takeEvery,
  takeLatest,
  select,
} from "redux-saga/effects";
import axios from "axios";
import {
  getCountriesRequest,
  getCountriesSuccess,
  getCountriesFailure,
  getRegionCountriesError,
  getRegionCountries,
  setRegionCountries,
  setOptionOneCountries,
  setOptionTwoCountries,
  getOceaniaCountries,
  setOceaniaCountries,
} from "./countriesSlice";
import pickRandomCountries from "../utils/pickRandomCountries";
import { selectRegion, selectVersion } from "./countriesSlice";
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

function* fetchRegionCountries({
  payload,
}: any): Generator<CallEffect | PutEffect | SelectEffect, void, any> {
  const version = yield select(selectVersion);

  if (payload === Regions.OCEANIA || payload === Regions.ALL_COUNTRIES) {
    return;
  }

  try {
    const countries = yield call(() =>
      fetch(`https://restcountries.com/v2/region/${payload}`)
    );
    const allcountries = yield countries.json();

    const versionRandomCountries = yield call(
      pickRandomCountries,
      allcountries,
      version + 20
    );
    yield put(setRegionCountries(versionRandomCountries.slice(0, 10)));
    yield put(setOptionOneCountries(versionRandomCountries.slice(10, 20)));
    yield put(setOptionTwoCountries(versionRandomCountries.slice(20, 30)));
  } catch (err) {
    yield put(getRegionCountriesError(err));
  }
}

function* fetchOceaniaCountries(): Generator<
  CallEffect | PutEffect | SelectEffect,
  void,
  any
> {
  const version = yield select(selectVersion);

  try {
    const oceaniaCountries = yield call(() =>
      fetch(`https://restcountries.com/v2/region/Oceania`)
    );
    const americasCountries = yield call(() =>
      fetch(`https://restcountries.com/v2/region/Americas`)
    );
    const allOceaniaCountries = yield oceaniaCountries.json();
    const allAmericasCountries = yield americasCountries.json();
    const versionRandomCountries = yield call(
      pickRandomCountries,
      allOceaniaCountries,
      version
    );

    yield put(setOceaniaCountries(versionRandomCountries));
    yield put(setOptionOneCountries(allAmericasCountries.slice(0, 10)));
    yield put(setOptionTwoCountries(allAmericasCountries.slice(10, 20)));
  } catch (err) {
    return;
  }
}

function* countriesSaga() {
  yield takeLatest(getCountriesRequest, fetchCountries);
  yield takeLatest(getRegionCountries, fetchRegionCountries);
  yield takeLatest(getOceaniaCountries, fetchOceaniaCountries);
}

export default countriesSaga;
