import classNames from "classnames";

import { data } from "../data";
import WorkItem from "../components/WorkItem";

import styles from "../css/WorkList.module.css";

function WorkList() {
  const state = data.works;
  return (
    <div className={classNames(styles.list_wrapper, "w1200")}>
      <div className={styles.title_wrapper}>
        <h2 className={styles.title}>포트폴리오</h2>
      </div>

      <ul className={styles.works}>
        {state &&
          state.map((work) => {
            return <WorkItem {...work} key={work.id} />;
          })}
      </ul>
    </div>
  );
}
export default WorkList;
