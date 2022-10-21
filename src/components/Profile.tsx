import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import EventIcon from "@mui/icons-material/Event";
import NearMeIcon from "@mui/icons-material/NearMe";

import { data } from "../data";
import Intro from "./Intro";

import styles from "../css/Profile.module.css";
import TypeIt from "typeit-react";
import { url } from "inspector";

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
      {/* <Intro /> */}
      <div
        className={styles.hyemin}
        style={{ backgroundImage: `url(${"./assets/hyemin.jpg"})` }}
      >
        <div className={styles.typeit}>
          <TypeIt
            options={{
              strings: [
                "안녕하세요. 성실함을 바탕으로 꾸준히 성장하고자 노력하는 고혜민입니다.",
                "저는 다양한 개인 프로젝트를 통해 이론과 실무 감각을 쌓아가는 개발자입니다.",
                "소소한 목표를 세우고 성취하는 것을 좋아하며, ",
                "하고자 하는 일은 꾸준히 노력해서 끝까지 해내는 끈기가 있습니다. ",
              ],
              speed: 50,
            }}
          />
        </div>
      </div>

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
            <NearMeIcon className={styles.icon} />
            <p>경기도 수원시</p>
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
            <h4 className={styles.skill_subtitle}>
              능숙하지는 않지만 사용해 본 경험이 있는 툴
            </h4>
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
              {/* <p>{item.issue}</p> */}
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
            <div style={{ display: "flex", gap: "40px" }}>
              <div style={{ flexShrink: 0, width: "123px" }}>
                <h4 className={styles.profile_content_h4}>{item.title}</h4>
                <p className={styles.profile_content_date}> {item.date}</p>
              </div>
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
