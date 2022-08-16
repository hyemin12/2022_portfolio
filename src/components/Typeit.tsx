import classNames from "classnames";
import TypeIt from "typeit-react";

import styles from "./Typeit.module.css";

function Typeit() {
  return (
    <div className={classNames(styles.intro_wrapper, "w1200")}>
      <TypeIt
        options={{
          strings: [
            "안녕하세요. 프론트엔드 개발자 고혜민입니다.",
            "저는 새로운 것을 배우는 것을 좋아하고, 성실함을 바탕으로 꾸준히 성장하고자 노력합니다.",
          ],
          speed: 80,
          startDelay: 100,
        }}
      />
    </div>
  );
}

export default Typeit;
