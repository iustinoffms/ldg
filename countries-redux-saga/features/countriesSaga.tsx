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
  getCountriesError,
  getRegionCountries,
  setRegionCountries,
  setOptionOneCountries,
  setOptionTwoCountries,
} from "./countriesSlice";
import pickRandomCountries from "../utils/pickRandomCountries";
import { selectRegion, selectVersion } from "./countriesSlice";

function* fetchCountries(): Generator<
  CallEffect | PutEffect | SelectEffect,
  void,
  any
> {
  const version = yield select(selectVersion);
  try {
    const countries = yield call(() =>
      fetch("https://restcountries.com/v2/all")
    );
    const allcountries = yield countries.json();

    const versionRandomCountries = yield call(
      pickRandomCountries,
      allcountries,
      version + 20
    );

    yield put(setCountries(versionRandomCountries.slice(0, 10)));
    yield put(setOptionOneCountries(versionRandomCountries.slice(10, 20)));
    yield put(setOptionTwoCountries(versionRandomCountries.slice(20, 30)));
  } catch (err: any) {
    yield put(getCountriesError(err));
  }
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
