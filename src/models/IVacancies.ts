export interface IAnswer {
  alternate_url: string
  arguments: string | null
  clusters: string | null
  found: number
  items: IVacanciesItem[]
  page: number
  pages: number
  per_page: number
}
export interface IVacanciesItem {
  id: number
  name: string
  employer: IEmployer
  schedule: ISchedule
  area: IArea
  snippet: ISnippet
}
export interface IEmployer {
  url: string
  alternate_url: string
  logo_urls: ILogo
  name: string
}
export interface ILogo {
  90: string
  240: string
  original: string
}
export interface ISchedule {
  id: string
  name: string
}

export interface IArea {
  url: string
  id: string
  name: string
}
export interface ISnippet {
  requirement: string
  responsibility: string
}

export interface IAddress {
  building: string
  city: string
}
