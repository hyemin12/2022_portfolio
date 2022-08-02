import classNames from "classnames";
import { useParams } from "react-router-dom";

import { data } from "../data";
import { WorkProps, ProjectProps } from "../type";
import styles from "./WorkDetail.module.css";

function WorkDetail() {
  const { id } = useParams();
  const item = data.projects.filter((item) => item.id === id)[0];
  return (
    <div className={classNames(styles.detail_wrapper, "w1200")}>
      <div className={styles.row}>
        <div className={styles.main_img}>
          <img
            src={`/assets/${item.id}.png`}
            alt={item.title}
            className={styles.img}
          />
        </div>
        <div className={styles.text_wrapper}>
          <p className={styles.filter}>{item.filter}</p>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.date}>{item.date}</p>

          <div className={styles.describtion}>
            {item.describtion.map((a, i) => (
              <p key={i}>{a}</p>
            ))}
          </div>

          <div className={styles.link_group}>
            {item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className={styles.link_url}
              >
                사이트로 이동
              </a>
            )}
            {item.git && (
              <a
                href={item.git}
                target="_blank"
                rel="noreferrer"
                className={styles.link_git}
              >
                코드 보러가기
              </a>
            )}
          </div>
        </div>
      </div>
      <div className={styles.tools}>
        {item.tool.map((a) => (
          <span className={styles.tool} key={a}>
            {a}
          </span>
        ))}
      </div>
      {/* <div className={styles.row}>
        <div className={styles.left_wrapper}>
          <div className={styles.describtion}>
            {item.describtion.map((a, i) => (
              <p key={i}>{a}</p>
            ))}
          </div>
          <div>
            <h4>기능</h4>
            {item.features && item.features.map((a, i) => <p key={i}>{a}</p>)}
          </div>
        </div>

        <ul className={styles.img_wrapper}>
          <li className={styles.img_item}>
            <img
              src={`/assets/${item.id}.png`}
              alt={item.title}
              className={styles.img}
            />
          </li>

          <li className={styles.img_item}>
            <img
              src={`/assets/${item.id}.png`}
              alt={item.title}
              className={styles.img}
            />
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default WorkDetail;
