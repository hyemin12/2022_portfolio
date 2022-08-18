import classNames from "classnames";
import React, { useEffect, useState } from "react";

import { data } from "../data";
import { PopupProps } from "../type";
import WorkItem from "./WorkItem";
import styles from "./WorkList.module.css";

const WorkList = ({ setIsPopup }: PopupProps) => {
  const state = data.works;

  return (
    <div className={classNames(styles.list_wrapper, "w1200")}>
      <div className={styles.title_wrapper}>
        <h2 className={styles.title}>포트폴리오</h2>
      </div>

      <ul className={styles.works}>
        {state &&
          state.map((work) => {
            return <WorkItem {...work} key={work.id} setIsPopup={setIsPopup} />;
          })}
      </ul>
    </div>
  );
};

export default WorkList;
