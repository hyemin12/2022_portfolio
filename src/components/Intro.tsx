import classNames from "classnames";

import styles from "./Intro.module.css";

function Intro() {
  return (
    <div className={classNames(styles.intro_wrapper, "w1200")}>
      <h1 className={styles.title}>
        고혜민을
        <br /> 소개합니다.
      </h1>
    </div>
  );
}

export default Intro;
