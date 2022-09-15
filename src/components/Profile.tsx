import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import EventIcon from "@mui/icons-material/Event";

import Intro from "./Intro";
import styles from "../css/Profile.module.css";

function Profile() {
  const skillDevelop = [
    "HTML5",
    "CSS3",
    "Javascript",
    "React",
    "Redux",
    "React Router Dom",
    "SASS",
    "CSS Module",
    "Github",
    "bootstrap",
    "jQuery",
    "netlify",
  ];
  const skillDesign = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Auto Cad",
    "3d Max",
    "Microsoft Office",
    "한글오피스",
  ];
  const years = [2021, 2020, 2019, 2018, 2017];
  const data = [
    {
      year: 2021,
      title: "[교육이수] 패스트캠퍼스",
      sub: "한번에 끝내는 프론트엔드 개발 초격차 패키지",
    },
    { year: 2021, title: "[자격증] 컴퓨터그래픽스운용기능사" },
    {
      year: 2020,
      title: "[자격증] 웹디자인기능사",
    },
    {
      year: 2020,
      title: "[교육이수] 하이미디어 컴퓨터학원",
      sub: "스마트기기 Ux/UI 웹디자인&웹퍼블리셔 과정 수료",
    },
    { year: 2019, title: "[사회활동] 두에이리원 - 공연사업팀" },
    { year: 2018, title: "[사회활동] 스타이엔티 - 공연사업 및 신규사업팀" },
    {
      year: 2017,
      title: "[사회활동] 에이엔스테이지 - 세트미술팀",
    },
    {
      year: 2017,
      title: "[교육이수] 인천가톨릭대학교 졸업",
      sub: "환경디자인학과 (학사)",
    },
  ];
  return (
    <div className="w1200">
      <Intro />
      {/* <div
        className={styles.intro}
        style={{ backgroundImage: "url(assets/bg.jpg)" }}
      >
        <div className={styles.intro_img}>
          <img
            src="https://github.com/hyemin12/typescript-my-portfolio/blob/master/public/assets/hyemin.jpg?raw=true"
            alt="고혜민"
            className={styles.img}
          />
        </div>
        <div className={styles.intro_text}>
          <h4 className={styles.hyemin}>고혜민</h4>
        </div>
      </div> */}

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
        <div className={styles.interview_wrapper}>
          <span>1.</span>
          <div>
            <h4>언제부터 지금의 직무에 관심을 갖게 되었나요?</h4>
            <p>
              웹디자이너 · 웹퍼블리셔 과정을 수료하면서 저는 디자인 보다는
              코드를 작성해서 웹을 구현하는 것에 더 큰 매력을 느꼈습니다. 다양한
              기능을 구현하고 싶어 자바스크립트에 대하여 공부를 하면서부터
              프론트엔드 개발에 관심을 가지게 되었습니다.
            </p>
          </div>
        </div>
        <div className={styles.interview_wrapper}>
          <span>2.</span>
          <div>
            <h4>학원을 다니지 않고, 혼자서 개발 공부를 한 이유가 있나요?</h4>
            <p>
              저 역시 웹 디자인 및 웹 퍼블리셔 과정은 학원을 다니며 공부를
              했습니다. 학원을 다니며, 강의를 열심히 들어도 혼자 복습하거나
              꾸준히 연습하지 않으면 제 것으로 만들기 어렵다는 것을 느꼈습니다.
              그래서 개발 공부할 때에는 강의를 듣고, 그 강의를 복습하는 방식으로
              공부를 했습니다.요즘 가장 관심 있는 것을 알려주세요.
            </p>
          </div>
        </div>
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
        <h2>학력 및 교육</h2>
        <ul className={styles.exp_items}>
          <>
            {years.map((y) => {
              return (
                <li className={styles.exp_item} key={y}>
                  <p className={styles.year}>{y}</p>
                  <div>
                    {data
                      .filter((i) => i.year === y)
                      .map((a) => {
                        return (
                          <div className={styles.exp_detail} key={a.title}>
                            <p className={styles.highlight}>{a.title}</p>
                            {a.sub && <p className={styles.sub}>{a.sub}</p>}
                          </div>
                        );
                      })}
                  </div>
                </li>
              );
            })}
          </>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
