import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../features/countriesSlice";
import createSagaMiddleware from "@redux-saga/core";

import countriesSaga from "../features/countriesSaga";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: { countries: countriesReducer },
  middleware: [saga],
});

saga.run(countriesSaga);
