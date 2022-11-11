import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

import Section from "./Section";
import StudiesItem from "./StudiesItem";

import { StudyProps } from "../type";
import { data } from "../data";

const Studies = ({ studiesState }: { studiesState: StudyProps[] }) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(0);

  const initState: StudyProps[] = data.studies;

  const filters = ["All", "Nodejs", "React", "Typescript", "markup", "ect"];

  const [state, setState] = useState(studiesState);

  /** 공부한 내용 필터링하는 함수 */
  function handleFilter(event: any) {
    const a = event.target.outerText;

    const init = initState;
    if (a === "All") {
      setState(studiesState);
      setIsActive(0);
    } else if (a) {
      const newArr = init.filter((item) => item.filter === a);
      setState(newArr);
      setIsActive(event.target.value);
    }
  }

  return (
    <Section title={"공부한 내용"} idProp={"study"}>
      <div className="studies-wrapper">
        <ul className="filter-wrapper">
          {filters.map((a, idx) => (
            <li
              className={"filter-item" + (idx === isActive ? " active" : "")}
              key={idx}
              value={idx}
              onClick={handleFilter}
            >
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
    </Section>
  );
};

export default Studies;
