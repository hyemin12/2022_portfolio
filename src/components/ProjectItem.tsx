import { Link } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";
import LanguageIcon from "@mui/icons-material/Language";

import { ProjectProps } from "../type";
import styles from "./ProjectItem.module.css";

const ProjectItem = (item: ProjectProps) => {
  return (
    <>
      <li key={item.id} className={styles.item}>
        <div className={styles.img_wrapper}>
          <img
            src={
              item.img ? `/assets/${item.img}.png` : `/assets/${item.id}.png`
            }
            alt={item.title}
            className={styles.item_img}
          />
        </div>

        <div className={styles.item_hover}>
          <div className={styles.opacity}></div>
          <div className={styles.hover_wrap}>
            <h4 className={styles.item_title}>{item.title}</h4>
            <p className={styles.item_filter}>{item.filter}</p>
            <div>
              <Link to={`/${item.id}`}>
                <AddIcon className={styles.link_btn} />
              </Link>
              <a href={item.url} target="_blank" rel="noreferrer">
                <LanguageIcon className={styles.link_btn} />
              </a>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default ProjectItem;
