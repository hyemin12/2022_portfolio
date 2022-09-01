import classNames from "classnames";

import SlickSlider from "./SlickSlider";

import styles from "../css/Intro.module.css";
import "../css/animation.css";

function Intro() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.image_wrapper}>
          <SlickSlider>
            <div className={styles.image}>
              <img
                src="./assets/hyemin.jpg"
                alt="고혜민"
                className={styles.img}
              />
            </div>
            <div className={styles.image}>
              <img
                src="./assets/hyemin2.png"
                alt="고혜민"
                className={styles.img}
              />
            </div>
          </SlickSlider>
        </div>
        <div className={classNames(styles.text_wrapper, "intro_title_wrapper")}>
          <SlickSlider>
            <div className={styles.title}>
              <h2>안녕하세요. </h2>
              <h2>고혜민입니다.</h2>
            </div>
            <div className={styles.title}>
              <h2>저는</h2>
              <h2>프론트엔드개발자입니다.</h2>
            </div>
          </SlickSlider>
          <p className={styles.desc}>
            저는 새로운 것을 배우는 것을 좋아하고, 성실함을 바탕으로 꾸준히
            성장하고자 노력합니다.
          </p>
          <a
            href="https://hyemin12.github.io/hm_resume/"
            target="_blank"
            rel="noreferrer"
            className={styles.btn_link}
          >
            이력서 보러가기
          </a>
        </div>
      </div>
    </div>
  );
}
export default Intro;
