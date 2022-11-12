import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IVacancies {
  id: number
  name: string
  email: string
}

interface vacanciestate {
  vacancies: IVacancies[]
  isLoading: boolean
  error: string
  count: number
}
const initialState: vacanciestate = {
  vacancies: [],
  isLoading: false,
  error: "",
  count: 0,
}

export const vacanciesSlice = createSlice({
  name: "vacancies",
  initialState,
  reducers: {
    vacanciesFetching(state) {
      state.isLoading = true
    },
    vacanciesFetchingSuccess(state, action: PayloadAction<IVacancies[]>) {
      state.isLoading = false
      state.error = ""
      state.vacancies = action.payload
    },
    vacanciesFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default vacanciesSlice
