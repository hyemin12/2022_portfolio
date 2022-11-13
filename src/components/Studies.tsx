import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

import Section from "./Section";
import StudiesItem from "./StudiesItem";

import { StudyProps } from "../type";
import { data } from "../data";
import Filter from "./Filter";

const Studies = ({ studiesState }: { studiesState: StudyProps[] }) => {
  const location = useLocation();

  const initState: StudyProps[] = data.studies;

  const [state, setState] = useState(studiesState);

  return (
    <Section title={"공부한 내용"} idProp={"study"}>
      <div className="studies-wrapper">
        <Filter
          setState={setState}
          studiesState={studiesState}
          initState={initState}
        />

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
