import {
  call,
  CallEffect,
  put,
  PutEffect,
  takeEvery,
} from "redux-saga/effects";
import { getCountries, setCountries } from "./countriesSlice";

function* workGetCountries(): Generator<CallEffect | PutEffect, void, any> {
  const countries = yield call(() =>
    fetch("https://api.thecatapi.com/v1/breeds")
  );
  const allcountries = yield countries.json();
  console.log("countries are:", allcountries);
  yield put(setCountries(allcountries));
  // console.log("after the fetch");
}

function* countriesSaga() {
  yield takeEvery(getCountries, workGetCountries);
}

export default countriesSaga;
