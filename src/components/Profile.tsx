import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import EventIcon from "@mui/icons-material/Event";

import { data } from "../data";
import Intro from "./Intro";

import styles from "../css/Profile.module.css";

function Profile() {
  const {
    skillDevelop,
    skillDesign,
    education,
    experience,
    certificate,
    interview,
  } = data.profile;

  return (
    <div className="w1200">
      <Intro />

      <div className={styles.article}>
        <ul className={styles.wrapper}>
          <li className={styles.item}>
            <WorkIcon className={styles.icon} />
            <p>신입</p>
          </li>
          <li className={styles.item}>
            <EventIcon className={styles.icon} />
            <p>1994년생 (만 27세)</p>
          </li>
          <li className={styles.item}>
            <SchoolIcon className={styles.icon} />
            <p>인천가톨릭대학교 환경디자인학과</p>
          </li>
          <li className={styles.item}>
            <EmailIcon className={styles.icon} />
            <p>khnm31@naver.com</p>
          </li>
        </ul>
      </div>
      <div className={styles.article}>
        <h2>셀프 인터뷰</h2>
        {interview.map((item, i) => (
          <div className={styles.profile_content_wrapper} key={i}>
            <span>{i + 1}.</span>
            <div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.article}>
        <h2>기술스택</h2>
        <div className={styles.skill_wrapper}>
          <div className={styles.skill_contents}>
            <h4 className={styles.skill_subtitle}>Frontend</h4>
            <ul className={styles.skill_list}>
              {skillDevelop.map((i) => (
                <li className={styles.skill_item} key={i}>
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.skill_contents}>
            <h4 className={styles.skill_subtitle}>design · ect</h4>
            <ul className={styles.skill_list}>
              {skillDesign.map((i) => (
                <li className={styles.skill_item} key={i}>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.article}>
        <h2>교육이력</h2>
        <ul className={styles.profile_content_wrapper}>
          {education.map((item, i) => (
            <li className={styles.profile_content_wrapper} key={i}>
              <span>■</span>
              <div>
                <h4 className={styles.profile_content_h4}>{item.title}</h4>
                <p className={styles.profile_content_date}>{item.date}</p>
                <ul className={styles.education_list}>
                  {item.studyContent.map((a) => (
                    <li key={a}>- {a}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.article}>
        <h2>자격증</h2>
        <ul className={styles.certificate_wrapper}>
          {certificate.map((item) => (
            <li className={styles.certificate_item} key={item.title}>
              <h4 className={styles.highlight}>{item.title}</h4>
              <p>{item.issue}</p>
              <p>{item.date}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.article}>
        <h2>대외활동</h2>
        {experience.map((item, i) => (
          <div className={styles.profile_content_wrapper} key={i}>
            <span>■</span>
            <div>
              <h4 className={styles.profile_content_h4}>{item.title}</h4>
              <p className={styles.profile_content_date}> {item.date}</p>
              <ul>
                {item.contents.map((a, i) => (
                  <li key={i}>- {a}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
