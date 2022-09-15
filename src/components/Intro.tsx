import classNames from "classnames";

import SlickSlider from "./SlickSlider";

import styles from "../css/Intro.module.css";

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
              <h2>프론트엔드 개발자 고혜민입니다.</h2>
            </div>
            <div className={styles.title}>
              <h2> 성실함을 바탕으로 </h2>
              <h2>꾸준히 성장하고자 노력합니다.</h2>
            </div>
          </SlickSlider>
          <p>
            빠르게 변화하는 현대 사회를 따라가기 어려워하며 웹, 앱을 이용할 때
            많은 어려움을 겪습니다. 그래서 젊은 세대뿐만 아니라 기성세대들도
            편리하게 이용할 수 있는 웹/앱을 만드는 것이 제 목표입니다. 다양한
            경험들을 쌓아 더 쉽고 편리하게 이용할 수 있도록 끊임없이 공부하고
            배워 그 꿈을 이루고 싶습니다.
          </p>
          <p style={{ marginBottom: "30px" }}>
            저는 꿈이 있기에 열정을 가질 수 있고, 열정을 가지고 있다면 성장할 수
            있다고 생각합니다. 제가 가진 열정을 바탕으로 항상 성장하는 개발자가
            되겠습니다.
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
