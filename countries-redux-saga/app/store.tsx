import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../features/countriesSlice";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import countriesSaga from "../features/countriesSaga";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: { countries: countriesReducer },
  middleware: [logger, saga],
});

saga.run(countriesSaga);
