import classNames from "classnames";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { ProjectProps, WorkProps } from "../type";
import ProjectItem from "./ProjectItem";

import styles from "../css/ProjectList.module.css";

const ProjectList = (projectData: ProjectProps[] | WorkProps[]) => {
  const location = useLocation();
  const stateInit = Object.values(projectData);

  const filters = ["All", "React", "Vanilla JS", "jQuery", "ect"];
  const [state, setState] = useState(stateInit);

  function handleFilter(event: React.ChangeEvent<HTMLSelectElement>) {
    const a = event.target.value;
    const init = stateInit;
    if (a === "All") {
      setState(init);
    } else if (a) {
      const newArr = init.filter((item) => item.filter === a);
      setState(newArr);
    }
  }
  console.log(state);
  return (
    <div className={classNames(styles.list_wrapper, "w1200")}>
      <div className={styles.title_wrapper}>
        <h2>개인작업물</h2>
        {location.pathname === "/" && state.length < 4 ? (
          <Link to="/works" className={styles.btn_link}>
            더보기 +
          </Link>
        ) : (
          <select className={styles.select} onChange={handleFilter}>
            {filters.map((a, i) => (
              <option className={styles.filter_item} key={i} value={a}>
                {a}
              </option>
            ))}
          </select>
        )}
      </div>

      <ul
        className={classNames(
          styles.project_wrapper,
          state.length < 3 && styles.start
        )}
      >
        {state &&
          state.map((item) => {
            return <ProjectItem {...item} key={item.id} />;
          })}
      </ul>
    </div>
  );
};

export default ProjectList;
