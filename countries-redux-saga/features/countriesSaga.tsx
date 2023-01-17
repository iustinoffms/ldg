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
import { selectRegion } from "./countriesSlice";

function* fetchCountries(): Generator<CallEffect | PutEffect, void, any> {
  const countries = yield call(() => fetch("https://restcountries.com/v2/all"));
  const allcountries = yield countries.json();
  const tenRandomCountries = yield call(pickRandomCountries, allcountries, 10);
  yield put(setCountries(tenRandomCountries));
}

function* fetchRegionCountries(): Generator<
  CallEffect | PutEffect | SelectEffect,
  void,
  any
> {
  const region = yield select(selectRegion);
  console.log(region);

  const countries = yield call(() =>
    fetch(`https://restcountries.com/v2/region/${region}`)
  );
  const allcountries = yield countries.json();
  const tenRandomCountries = yield call(pickRandomCountries, allcountries, 10);
  yield put(setRegionCountries(tenRandomCountries));
}

function* countriesSaga() {
  yield takeEvery(getCountries, fetchCountries);
  yield takeLatest(getRegionCountries, fetchRegionCountries);
}

export default countriesSaga;
