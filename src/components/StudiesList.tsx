import classNames from "classnames";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../module";
import { StudyProps } from "../module/studies";

import StudiesItem from "./StudiesItem";

import styles from "../css/ProjectList.module.css";
import { Link, useLocation } from "react-router-dom";

const StudiesList = ({ studieState }: { studieState: StudyProps[] }) => {
  const location = useLocation();

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
    const a = event.target.outerText;

    const init = studieState;
    if (a === "All") {
      setState(init);
    } else if (a) {
      const newArr = init.filter((item) => item.filter === a);
      setState(newArr);
    }
  }
  console.log(location.pathname);

  return (
    <div className="inner studies-wrapper">
      <h1 className="section-title">공부한 내용</h1>

      <ul className="filter-wrapper">
        {filters.map((a, i) => (
          <li className="filter-item" key={i} onClick={handleFilter}>
            {a}
          </li>
        ))}
      </ul>

      <ul
        className={classNames(
          styles.project_wrapper,
          state.length < 3 && styles.start
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
