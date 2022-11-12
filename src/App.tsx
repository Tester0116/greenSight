import React, { useEffect, useRef, useState } from "react"
import { useFetchVacanciesQuery } from "./services/vacanciesApi"
import xIcon from "./assets/icons/x-icon.svg"
import "./App.scss"
import { IVacanciesItem } from "./models/IVacancies"

function App() {
  const [currentItem, setCurrentItem] = useState<number | null>(null)
  const [height, setHeight] = useState<number>(0)
  const ref = useRef(null)

  const { data: vacancies, isLoading } = useFetchVacanciesQuery(5)

  return (
    <section className="main">
      <h1 className="main__title">List of vacancies</h1>
      {/* ----- START SORT BLOCK ----- */}
      <div className="main__sortBlock">
        <div className="main__sortBlock-inputs">
          <div className="main__sortBlock-sortList">
            <label className="sort-label" htmlFor="sort-form">
              Form
            </label>
            <br />
            <input
              className="sort-input"
              placeholder="Not selected"
              list="sort-form-list"
              name="sort-form"
              id="sort-form"
            />
            <datalist className="sort-list" id="sort-form-list">
              <option value="Coconut" />
              <option value="Mint" />
              <option value="Strawberry" />
              <option value="Vanilla" />
            </datalist>
          </div>

          <div className="main__sortBlock-sortInput">
            <label className="sort-label" htmlFor="sort-position">
              Position
            </label>
            <br />
            <input
              className="sort-input"
              id="sort-position"
              placeholder="Unspecified"
            />
          </div>
        </div>

        <div className="main__sortBlock-clearSort">
          <b className="sort-title">Clear sorting</b>
          <img src={xIcon} alt="x-icon" />
        </div>
      </div>
      {/* ----- END SORT BLOCK ----- */}

      {/* ----- START VACANCIES BLOCK ----- */}
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="main__vacanciesBlock">
          {console.table(vacancies.items)}
          {vacancies.items
            .filter((item: IVacanciesItem, index: number) => index < 5)
            .map((vacancy: IVacanciesItem) => (
              <div
                className={
                  currentItem == vacancy.id
                    ? "main__vacancyItem active"
                    : "main__vacancyItem"
                }
                ref={ref}
                key={vacancy.id}
              >
                <div className="main__vacancyItem_leftSide">
                  <img
                    className="main__vacancyItem--logo"
                    src={
                      vacancy.employer.logo_urls
                        ? vacancy.employer.logo_urls.original
                        : "https://via.placeholder.com/373x95?text=oops...."
                    }
                    alt="company logo"
                  />
                  {/* 1 */}
                  <p className="main__vacancyItem--firstText">
                    Form:
                    <span className="main__vacancyItem--secondText">
                      {vacancy.schedule.name}
                    </span>
                  </p>
                  {/* 2 */}
                  <p className="main__vacancyItem--firstText">
                    Company:
                    <span className="main__vacancyItem--secondText">
                      {vacancy.employer.name}
                    </span>
                  </p>
                  {/* 3 */}
                  <p className="main__vacancyItem--firstText">
                    Web:
                    <a
                      className="main__vacancyItem--secondText"
                      href={vacancy.employer.alternate_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {vacancy.employer.alternate_url}
                    </a>
                  </p>
                  {/* 4 */}
                  <p className="main__vacancyItem--firstText">
                    Address:
                    <span className="main__vacancyItem--secondText">
                      {vacancy.area.name}
                    </span>
                  </p>
                  {/* end */}
                </div>

                <div className="main__vacancyItem_rightSide">
                  <h1 className="main__vacancyItem--title">{vacancy.name}</h1>
                  <p className="main__vacancyItem--description">
                    We are looking for an experienced and talented Software
                    Developer to develop, test, document, and implement
                    solutions for SoloProtect clients and devices. The ideal
                    candidate will be self-motivated, have experience working in
                    agile teams, and excellent communication skills
                  </p>
                  <br />
                  <p className="main__vacancyItem--description">Требования:</p>
                  <ul className="main__vacancyItem--description">
                    {vacancy.snippet.requirement.split(". ").map((item) => (
                      <li className="main__vacancyItem--listItem" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <br />
                  <p className="main__vacancyItem--description">Обязанности:</p>
                  <ul className="main__vacancyItem--description">
                    {vacancy.snippet.responsibility.split(". ").map((item) => (
                      <li className="main__vacancyItem--listItem" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="main__vacancyItem--more"
                    onClick={() => setCurrentItem(vacancy.id)}
                  >
                    more details
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
      {/* ----- END VACANCIES BLOCK ----- */}
    </section>
  )
}

export default App
