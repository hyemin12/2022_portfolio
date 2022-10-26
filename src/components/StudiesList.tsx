import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { useSelector } from "react-redux";

import StudiesItem from "./StudiesItem";
import { RootState } from "../module";
import { StudyProps } from "../module/studies";

const StudiesList = ({ studieState }: { studieState: StudyProps[] }) => {
  const location = useLocation();
  const initState: StudyProps[] = useSelector(
    (state: RootState) => state.studies
  );
  console.log(studieState);

  const [isActive, setIsActive] = useState(0);

  const filters = [
    "All",
    "Nodejs",
    "React",
    "Typescript",
    "Vanilla JS",
    "jQuery",
    "ect",
  ];

  const [state, setState] = useState(studieState);

  function handleFilter(event: any) {
    console.log(event);
    const a = event.target.outerText;

    const init = initState;
    if (a === "All") {
      setState(studieState);
    } else if (a) {
      const newArr = init.filter((item) => item.filter === a);
      setState(newArr);
    }
  }

  return (
    <div className="inner studies-wrapper">
      <h1 className="section-title" id="studyRef">
        공부한 내용
      </h1>

      <ul className="filter-wrapper">
        {filters.map((a, i) => (
          <li className="filter-item" key={i} onClick={handleFilter}>
            {a}
          </li>
        ))}
      </ul>

      <ul
        className={classNames(
          "project-wrapper",
          state.length < 3 && "flex-start"
        )}
      >
        {state &&
          state.map((item) => {
            return <StudiesItem {...item} key={item.id} />;
          })}
      </ul>
      {location.pathname !== "/studies" && (
        <Link to="/studies" className="btn_route">
          더 보러가기
        </Link>
      )}
    </div>
  );
};

export default StudiesList;
