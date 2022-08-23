import classNames from "classnames";

import styles from "./Intro.module.css";
import "./animation.css";
import { useEffect, useRef, useState } from "react";

function Intro() {
  const changeState = useRef<HTMLElement>();
  const [current, setCurrent] = useState(0);

  function callback() {
    setCurrent((current) => current + 1);
  }
  useEffect(() => {
    changeState.current = callback;
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {}, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <div className={styles.container}>
        <ul className={styles.images}>
          <li className={styles.image}>
            <img
              src="./assets/hyemin.jpg"
              alt="고혜민"
              className={styles.img}
            />
          </li>
          <li className={styles.image}></li>
        </ul>
        <div className={styles.text_wrapper}>
          <ul className={styles.title_wrapper} ref={changeState}>
            <li>
              <h2>안녕하세요. </h2>
              <h2>고혜민입니다.</h2>
            </li>
            <li>
              <h2>저는</h2>
              <h2>프론트엔드개발자입니다.</h2>
            </li>
          </ul>
          <p className={styles.desc}>
            저는 새로운 것을 배우는 것을 좋아하고, 성실함을 바탕으로 꾸준히
            성장하고자 노력합니다.
          </p>
          <p>
            UT A small river named Duden flows by their place and supplies it
            with the necessary regelialia. It is a paradisematic country, in
            which roasted parts of sentences fly into your mouth. Even the
            all-powerful Pointing has no control about the blind texts it is an
            almost unorthographic life.
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

      {/* <div className={styles.container}>
        <div className={styles.image1}>
          <img
            src="https://images.unsplash.com/photo-1608463026422-8f43ab4ebac0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
            className={styles.img}
          />
        </div>
        <div className={styles.text_wrapper}>
          <h2>
            <span>고혜민</span>입니다.
          </h2>
          <p>
            저는 새로운 것을 배우는 것을 좋아하고, 성실함을 바탕으로 꾸준히
            성장하고자 노력합니다.
          </p>
          <div>이력서 보러가기</div>
        </div>
        <div className={styles.image2}>
          <img
            src="https://images.unsplash.com/photo-1608463026422-8f43ab4ebac0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
            className={styles.img}
          />
        </div>
      </div> */}
    </div>
  );
}
export default Intro;
