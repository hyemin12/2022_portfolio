import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ProjectProps, WorkProps } from "../type";
import ProjectItem from "./ProjectItem";

import styles from "../css/ProjectList.module.css";

const ProjectList = (projectData: ProjectProps[] | WorkProps[]) => {
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

  useEffect(() => {}, [state]);
  return (
    <div className={classNames(styles.list_wrapper, "w1200")}>
      <div className={styles.title_wrapper}>
        <h2>개인작업물</h2>
        {state.length > 4 ? (
          <select className={styles.select} onChange={handleFilter}>
            {filters.map((a, i) => (
              <option className={styles.filter_item} key={i} value={a}>
                {a}
              </option>
            ))}
          </select>
        ) : (
          <Link to="/works" className={styles.btn_link}>
            더보기 +
          </Link>
        )}
      </div>

      <ul className={styles.project_wrapper}>
        {state &&
          state.map((item) => {
            return <ProjectItem {...item} key={item.id} />;
          })}
      </ul>
    </div>
  );
};

export default ProjectList;
