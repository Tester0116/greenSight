import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { vacanciesApi } from "../services/vacanciesApi"
import vacanciesSlice from "./reducers/vacanciesSlice"

const rootReducer = combineReducers({
  [vacanciesApi.reducerPath]: vacanciesApi.reducer,
  vacancies: vacanciesSlice.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([vacanciesApi.middleware]),
  })
}

export const vacanciesAction = vacanciesSlice.actions
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
