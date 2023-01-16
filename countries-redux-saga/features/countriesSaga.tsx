import {
  call,
  CallEffect,
  put,
  PutEffect,
  takeEvery,
  select,
  SelectEffect,
} from "redux-saga/effects";
import {
  getCountries,
  selectCountries,
  setCountries,
  getShortListCountries,
  setShortListCountries,
} from "./countriesSlice";
import pickRandomCountries from "../utils/pickRandomCountries";

function* workGetCountries(): Generator<CallEffect | PutEffect, void, any> {
  const countries = yield call(() =>
    // fetch("https://restcountries.com/v2/region/Asia")
    fetch("https://restcountries.com/v2/all")
  );
  const allcountries = yield countries.json();
  yield put(setCountries(allcountries));
}

function* pickTenCountries(): Generator<
  SelectEffect | CallEffect | PutEffect,
  void,
  any
> {
  const allCountries = yield select(selectCountries);
  const tenRandomCountries = yield call(pickRandomCountries, allCountries, 10);
  yield put(setShortListCountries(tenRandomCountries));
}

function* countriesSaga() {
  yield takeEvery(getCountries, workGetCountries);
  yield takeEvery(getShortListCountries, pickTenCountries);
}

export default countriesSaga;
