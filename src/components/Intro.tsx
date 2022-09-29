import classNames from "classnames";

import SlickSlider from "./SlickSlider";

import styles from "../css/Intro.module.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Intro() {
  const location = useLocation();
  const pathname = location.pathname;

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
          <p style={{ marginBottom: "30px" }}>
            안녕하세요. 성실함을 바탕으로 꾸준히 성장하고자 노력하는 개발자
            고혜민입니다.
            <br /> 저는 프론트엔드의 가장 기본인 디자인을 코드로 바꾸는 작업을
            여러 프로젝트를 제작하며 꾸준히 공부해왔습니다. 또한 클론코딩하며
            다양한 사이트들의 UI 구조와 서비스를 이용하며 사용자가 겪는 다양한
            경험 UX에 대하여 공부하였습니다. 현재는 데이터를 가져와 화면에
            구현하고, 데이터를 서버로 보내는 기능에 대하여 공부하고 있습니다.
            <br />
            저는
            <span className={styles.highlight}>
              좋은 코드를 공유하는 개발자
            </span>
            가 되고 싶습니다. 누군가는 모호하고 추상적인 개발자라고 생각할 수도
            있지만, 좋은 코드는 하루 아침에 만들어지지 않는다고 생각합니다.
            가독성이 좋은 코드, 일관성 있는 코드와 같은 좋은코드를 작성하기
            위해서는 새롭게 변화하는 트렌드에 대해 꾸준히 공부하고 더 나은
            코드를 작성하기 위해 고민을 해야 하기 때문입니다.
            <br />
            저는 꿈이 있기에 열정을 가질 수 있고, 열정을 가지고 있다면 성장할 수
            있다고 생각합니다. 제가 가진 열정을 바탕으로 항상 성장하는 개발자가
            되겠습니다.
          </p>
          {pathname === "/profile" ? (
            <a
              href="https://hyemin12.github.io/hm_resume/"
              target="_blank"
              rel="noreferrer"
              className={styles.btn_link}
            >
              이력서 보러가기
            </a>
          ) : (
            <Link to="/profile" className={styles.btn_link}>
              고혜민 더 알아보기
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
export default Intro;
