import classNames from "classnames";
import { useParams } from "react-router-dom";

import { data } from "../data";
import styles from "./WorkDetail.module.css";

function WorkDetail() {
  const { id } = useParams();
  let item;
  item = data.projects.filter((a) => a.id === id)[0];
  if (item === undefined) {
    item = data.works.filter((a) => a.id === id)[0];
  }
  return (
    <div className={classNames(styles.wrapper, "")}>
      <div className={styles.row}>
        <div className={styles.web}>
          <div className={styles.header}>
            <div className={styles.circles}>
              <span className={styles.web_circle}></span>
              <span className={styles.web_circle}></span>
              <span className={styles.web_circle}></span>
            </div>
            <div className={styles.web_url}>{item.url}</div>
          </div>
          <div className={styles.screen} style={{ backgroundImage: `url()` }}>
            <img
              src={`/assets/${item.id}.png`}
              className={styles.img}
              alt={`${item.title} 메인페이지`}
            />
          </div>
        </div>
        {/* <div className={styles.main_img}>
          <img
            src={`/assets/${item.id}.png`}
            alt={item.title}
            className={styles.img}
          />
        </div> */}
      </div>
      <div className={styles.inner}>
        <div className={styles.row}>
          <div className={styles.text_wrapper}>
            <h1 className={styles.title}>{item.title}</h1>
            <div className={styles.captions}>
              <p className={styles.caption}>{item.filter}</p>
              <p className={styles.caption}>{item.date}</p>
            </div>
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
        <div className={styles.line}></div>
        <div className={styles.row}>
          <div className={styles.detail_wrapper}>
            {item.describtion.map((a) => (
              <p key={a}>{a}</p>
            ))}
          </div>
        </div>
        <div className={styles.line}></div>
        {item.features && (
          <div className={styles.detail_wrapper}>
            <h4 className={styles.h4}>기능</h4>
            {item.features.map((a, i) => (
              <p key={i}>{a}</p>
            ))}
          </div>
        )}
        <div className={styles.line}></div>
        <div className={styles.detail_wrapper}>
          <h4 className={styles.h4}>사용툴</h4>
          <div className={styles.tools}>
            {item.tool.map((a) => (
              <span className={styles.tool} key={a}>
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkDetail;
