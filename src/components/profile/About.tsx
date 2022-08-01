import BoltIcon from "@mui/icons-material/Bolt";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import EventIcon from "@mui/icons-material/Event";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import classNames from "classnames";
import styles from "./Profile.module.css";
function About() {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>
        <BoltIcon className={styles.title_icon} />
        About
      </h4>
      <div className={styles.contents_wrapper}>
        <ul className={styles.about_wrapper}>
          <li className={styles.about_item}>
            <WorkIcon className={styles.about_item_icon} />
            <p>신입</p>
          </li>
          <li className={styles.about_item}>
            <EventIcon className={styles.about_item_icon} />
            <p>1994년생 (만 27세)</p>
          </li>

          <li className={styles.about_item}>
            <SchoolIcon className={styles.about_item_icon} />
            <p>인천가톨릭대학교 환경디자인학과</p>
          </li>
          <li className={styles.about_item}>
            <EmailIcon className={styles.about_item_icon} />
            <p>khnm31@naver.com</p>
          </li>
          <li className={styles.about_item}>
            <GitHubIcon className={styles.about_item_icon} />
            <a
              href="https://hyemin12.github.io/hm_resume/"
              target="_blank"
              rel="noreferrer"
              className={styles.about_link}
            >
              hyemin12.github.io
            </a>
          </li>
          <li className={styles.about_item}>
            <LaunchIcon
              className={classNames(styles.icon_effect, styles.about_item_icon)}
            />
            <a
              href="https://hyemin12.github.io/hm_resume/"
              target="_blank"
              rel="noreferrer"
              className={styles.about_link}
            >
              이력서 &amp; 자기소개서
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
