import _ from "lodash";
import httpClient from "./HttpClient";

import {
  call,
  put,
  select,
  takeLatest,
  delay,
  take,
  all,
  apply,
  race,
  RaceEffect,
  PutEffect,
  SelectEffect,
  AllEffect,
  CallEffect,
} from "redux-saga/effects";

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
  selectVersion,
} from "./countriesSlice";

import { Regions } from "../components/PlayGame/PlayGame";
import { TIMEOUT_IN_SECONDS } from "../utils/constants";

const APIS = {
  fetchCountriesApi() {
    return httpClient.get("/all").then(({ data }) => ({ countries: data }));
  },
  fetchRegionCountriesApi(region: string) {
    return httpClient
      .get(`/region/${region}`)
      .then(({ data }) => ({ countries: data }));
  },

  fetchOceaniaCountriesApi() {
    return httpClient
      .get(`/region/Oceania`)
      .then(({ data }) => ({ countries: data }));
  },
  fetchAmericasCountriesApi() {
    return httpClient
      .get(`/region/Americas`)
      .then(({ data }) => ({ countries: data }));
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
  const version = yield select(selectVersion);

  if (payload === Regions.OCEANIA || payload === Regions.ALL_COUNTRIES) {
    return;
  }

  try {
    yield delay(2000);
    const { countries } = yield yield apply(
      APIS,
      APIS.fetchRegionCountriesApi,
      [payload]
    );

    const pickCountriesAndOptions = countries.slice(0, version + 20);

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
  CallEffect | PutEffect | SelectEffect | AllEffect<any>,
  void,
  any
> {
  const version = yield select(selectVersion);

  try {
    yield delay(2000);
    const { countries } = yield apply(APIS, APIS.fetchOceaniaCountriesApi, []);
    const { countries: americasCountriesData } = yield apply(
      APIS,
      APIS.fetchAmericasCountriesApi,
      []
    );

    const pickOceaniaCountries = countries.slice(0, version);
    const pickAmericasCountries = americasCountriesData.slice(0, version + 10);

    const [versionRandomCountries, randomizeAmericasCountries] = yield all([
      call(_.shuffle, pickOceaniaCountries),
      call(_.shuffle, pickAmericasCountries),
    ]);

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
    timeIsUp: delay(TIMEOUT_IN_SECONDS * 1000),
  });

  if (raceResult.timeIsUp) {
    yield put(answerFailed());
  } else {
    yield put(answerSucess(raceResult.answered.payload));
  }
}

function* countriesSaga() {
  yield takeLatest(getCountriesRequest, fetchCountries);
  yield takeLatest(getRegionCountriesRequest, fetchRegionCountries);
  yield takeLatest(getOceaniaCountriesRequest, fetchOceaniaCountries);
  yield takeLatest(answerRequest, watchAnswerRequest);
}

export default countriesSaga;
