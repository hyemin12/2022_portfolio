import TypeIt from "typeit-react";

import Section from "./Section";
import { data } from "../data";

import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import EventIcon from "@mui/icons-material/Event";
import NearMeIcon from "@mui/icons-material/NearMe";

import useScrollFadeIn from "../hooks/useScrollFadeIn";
import SkillItem from "./SkillItem";

function About() {
  const state = [
    {
      icon: <EventIcon />,
      text: "1994년생",
    },
    {
      icon: <NearMeIcon />,
      text: "경기도 수원시",
    },
    {
      icon: <SchoolIcon />,
      text: "인천가톨릭대학교 환경디자인학과",
    },
    {
      icon: <EmailIcon />,
      text: "khnm31@naver.com",
    },
  ];
  const skills = data.skills;
  const beingStudy = data.studiedSkills;
  const onScrollFadeIn = useScrollFadeIn();

  return (
    <Section title={"About Me"} idProp={"about"}>
      <article className="typeit-wrapper">
        <div className="typeit">
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
      </article>

      <article className="about-content">
        <ul className="tiles">
          {state.map((item) => (
            <li className="tile" key={item.text}>
              {item.icon}
              <p>{item.text}</p>
            </li>
          ))}
        </ul>

        <h1 className="section-title">기술스택</h1>
        <div className="skills">
          {skills.map((skill) => (
            <SkillItem src={skill.src} name={skill.name} />
          ))}
        </div>
        <p className="skill-subtitle">
          능숙하지는 않지만 사용한 경험이 있는 기술
        </p>
        <div className="skills">
          {beingStudy.map((skill) => (
            <SkillItem src={skill.src} name={skill.name} />
          ))}
        </div>
      </article>
    </Section>
  );
}

export default About;
