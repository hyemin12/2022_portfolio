import { Link } from "react-router-dom";

import { WorkProps } from "../type";
import styles from "../css/WorkItem.module.css";

const WorkItem = (work: WorkProps) => {
  return (
    <>
      <li
        key={work.id}
        className={styles.item}
        style={{ backgroundColor: `${work.bgColor}` }}
      >
        <div className={styles.img_wrapper}>
          <img
            src={`/assets/${work.id}.png`}
            alt={work.title}
            className={styles.img}
          />
        </div>
        <div className={styles.row}>
          <h2 className={styles.title}>{work.title}</h2>
          <p className={styles.filter}>{work.filter}</p>
        </div>
        <div className={styles.btn_group}>
          <Link to={`/portfolio/${work.id}`}>
            <p className={styles.link_btn}>상세보기</p>
          </Link>
          <a href={work.url} target="_blank" rel="noreferrer">
            <p className={styles.link_btn}>사이트로 이동</p>
          </a>
        </div>
      </li>
    </>
  );
};

export default WorkItem;
