import classNames from "classnames";
import React, { useEffect, useState } from "react";

import { data } from "../data";
import ProjectItem from "./ProjectItem";
import ProjectItem2 from "./ProjectItemCopy";
import styles from "./ProjectList.module.css";

const ProjectList = () => {
  const filters = ["All", "React", "Vanilla JS", "jQuery", "ect"];
  const [state, setState] = useState(data.projects);

  function handleFilter(event: React.ChangeEvent<HTMLSelectElement>) {
    const a = event.target.value;
    const init = data.projects;
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
        <select className={styles.select} onChange={handleFilter}>
          {filters.map((a, i) => (
            <option className={styles.filter_item} key={i} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>

      <ul className={styles.project_wrapper}>
        {/* {state &&
          state.map((item) => {
            return <ProjectItem {...item} key={item.id} />;
          })} */}
        {state &&
          state.map((item) => {
            return <ProjectItem2 {...item} key={item.id} />;
          })}
      </ul>
    </div>
  );
};

export default ProjectList;
