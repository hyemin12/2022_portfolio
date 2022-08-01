import { Link } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";
import LanguageIcon from "@mui/icons-material/Language";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";

import { ProjectProps } from "../type";
import styles from "./ProjectItemCopy.module.css";

const ProjectItem2 = (item: ProjectProps) => {
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
        <div>
          <div className={styles.row}>
            <h4 className={styles.item_title}>{item.title}</h4>
            <div>
              <Link to={`/${item.id}`}>
                <AspectRatioIcon className={styles.link_btn} />
              </Link>
              <a href={item.url} target="_blank" rel="noreferrer">
                <LanguageIcon className={styles.link_btn} />
              </a>
            </div>
          </div>

          <p className={styles.item_filter}>{item.filter}</p>
        </div>
      </li>
    </>
  );
};

export default ProjectItem2;
