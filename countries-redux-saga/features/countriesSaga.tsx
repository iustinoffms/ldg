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
import {
  getCountries,
  setCountries,
  getRegionCountries,
  setRegionCountries,
} from "./countriesSlice";
import pickRandomCountries from "../utils/pickRandomCountries";
import { selectRegion, selectVersion } from "./countriesSlice";

function* fetchCountries(): Generator<
  CallEffect | PutEffect | SelectEffect,
  void,
  any
> {
  const version = yield select(selectVersion);

  const countries = yield call(() => fetch("https://restcountries.com/v2/all"));
  const allcountries = yield countries.json();

  const versionRandomCountries = yield call(
    pickRandomCountries,
    allcountries,
    version
  );

  yield put(setCountries(versionRandomCountries));
}

function* fetchRegionCountries(): Generator<
  CallEffect | PutEffect | SelectEffect,
  void,
  any
> {
  const version = yield select(selectVersion);
  const region = yield select(selectRegion);

  const countries = yield call(() =>
    fetch(`https://restcountries.com/v2/region/${region}`)
  );
  const allcountries = yield countries.json();

  const versionRandomCountries = yield call(
    pickRandomCountries,
    allcountries,
    version
  );
  yield put(setRegionCountries(versionRandomCountries));
}

function* countriesSaga() {
  yield takeEvery(getCountries, fetchCountries);
  yield takeLatest(getRegionCountries, fetchRegionCountries);
}

export default countriesSaga;
