import {
  call,
  CallEffect,
  put,
  PutEffect,
  SelectEffect,
  takeLatest,
  select,
  delay,
  take,
  apply,
  race,
  RaceEffect,
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
  answerRequest,
  addAnswer,
  answerFailed,
  answerSucess,
} from "./countriesSlice";
import { selectVersion } from "./countriesSlice";
import { Regions } from "../components/PlayGame/PlayGame";
import _ from "lodash";

const APIS = {
  fetchCountriesApi() {
    return axios
      .get("https://restcountries.com/v2/all")
      .then(({ data }) => ({ countries: data }));
  },
  fetchRegionCountriesApi(region: string) {
    return axios
      .get(`https://restcountries.com/v2/region/${region}`)
      .then(({ data }) => ({ regionCountries: data }));
  },

  fetchOceaniaCountriesApi() {
    return axios
      .get(`https://restcountries.com/v2/region/Oceania`)
      .then(({ data }) => ({ oceaniaCountries: data }));
  },
  fetchAmericasCountriesApi() {
    return axios
      .get(`https://restcountries.com/v2/region/Americas`)
      .then(({ data }) => ({ americasCountries: data }));
  },
};

function* fetchCountries(): Generator<
  CallEffect | PutEffect | SelectEffect,
  void,
  any
> {
  const version = yield select(selectVersion);

  try {
    yield delay(1000);
    const { countries } = yield apply(APIS, APIS.fetchCountriesApi, []);

    const pickCountriesAndOptions = countries.slice(0, version + 20);

    const versionRandomCountries = yield call(
      _.shuffle,
      pickCountriesAndOptions
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
  //the payload is the region sent as payload from the dispatched getRegionCountriesRequest

  const version = yield select(selectVersion);

  if (payload === Regions.OCEANIA || payload === Regions.ALL_COUNTRIES) {
    return;
  }

  try {
    yield delay(2000);
    const { regionCountries } = yield yield apply(
      APIS,
      APIS.fetchRegionCountriesApi,
      [payload]
    );

    const pickCountriesAndOptions = regionCountries.slice(0, version + 20);

    const versionRandomCountries = yield call(
      _.shuffle,
      pickCountriesAndOptions
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

function* fetchOceaniaCountries(): Generator<
  CallEffect | PutEffect | SelectEffect,
  void,
  any
> {
  const version = yield select(selectVersion);

  try {
    yield delay(2000);
    const { oceaniaCountries } = yield apply(
      APIS,
      APIS.fetchOceaniaCountriesApi,
      []
    );
    const { americasCountries } = yield apply(
      APIS,
      APIS.fetchAmericasCountriesApi,
      []
    );

    const pickOceaniaCountries = oceaniaCountries.slice(0, version);
    const pickAmericasCountries = americasCountries.slice(0, version + 10);

    const versionRandomCountries = yield call(_.shuffle, pickOceaniaCountries);
    const randomizeAmericasCountries = yield call(
      _.shuffle,
      pickAmericasCountries
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

function* watchAnswerRequest(): Generator<
  CallEffect | PutEffect | SelectEffect | RaceEffect<any>,
  void,
  any
> {
  const raceResult = yield race({
    answered: take(addAnswer),
    timeIsUp: delay(10 * 1000),
  });

  if (raceResult.timeIsUp) {
    yield put(answerFailed());
  } else {
    yield put(answerSucess(raceResult.answered.payload));
  }
}

//watcher saga

function* countriesSaga() {
  yield takeLatest(getCountriesRequest, fetchCountries);

  //getRegionCountriesRequest has a payload === region
  //this payload is passed to the fetchRegionCountries
  //takeLatest(dispatchedAction.type, saga, ...args)
  // args must be an array
  yield takeLatest(getRegionCountriesRequest, fetchRegionCountries);
  yield takeLatest(getOceaniaCountriesRequest, fetchOceaniaCountries);
  yield takeLatest(answerRequest, watchAnswerRequest);
}

export default countriesSaga;
