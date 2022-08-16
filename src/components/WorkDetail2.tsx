import { useParams } from "react-router-dom";
import { data } from "../data";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import styles from "./WorkDetail2.module.css";
import Swiper from "./Swiper";

function WorkDetail2() {
  const { id } = useParams();
  let item;
  item = data.projects.filter((a) => a.id === id)[0];
  if (item === undefined) {
    item = data.works.filter((a) => a.id === id)[0];
  }
  return (
    <>
      {item && (
        <>
          <div
            className={styles.title_wrapper}
            style={{ backgroundImage: `url('../assets/${item.id}.png')` }}
          >
            <div className={styles.bg_opacity}></div>
            <div style={{ zIndex: 2 }}>
              <span className={styles.filter}>{item.filter}</span>
              <h4 className={styles.title}>{item.title}</h4>
              <div className={styles.btn_group}>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.btn_url}
                  >
                    사이트로 이동
                    <OpenInNewIcon className="btn_icon" />
                  </a>
                )}
                {item.git && (
                  <a
                    href={item.git}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.btn_git}
                  >
                    코드 보러가기
                    <OpenInNewIcon className="btn_icon" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.list_wrapper}>
              <li>프로젝트 제작자: 고혜민</li>
              <li>목록을</li>
              <li>목록을</li>
              <li>목록을</li>
              <li>목록을</li>
            </div>
            <div>
              <div className={styles.section}>
                {item.describtion.map((a) => (
                  <p key={a}>{a}</p>
                ))}
              </div>
              {item.features && (
                <div className={styles.section}>
                  <h4 className={styles.h4_title}>기능</h4>
                  {item.features.map((a, i) => (
                    <p key={i}>{a}</p>
                  ))}
                </div>
              )}
              <div className={styles.section}>
                <h4 className={styles.h4_title}>사용툴</h4>
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
          <div className={styles.container}>
            <Swiper detailImg={item.detailImg} />
          </div>
        </>
      )}
    </>
  );
}

export default WorkDetail2;
