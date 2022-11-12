import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
// import { IAnswer } from "../models/IVacancies"

export const vacanciesApi = createApi({
  reducerPath: "vacanciesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.hh.ru/",
  }),
  tagTypes: ["vacancies"],
  endpoints: (build) => ({
    fetchVacancies: build.query({
      query: () => "vacancies/",
      providesTags: ["vacancies"],
    }),
  }),
})

export const { useFetchVacanciesQuery } = vacanciesApi
