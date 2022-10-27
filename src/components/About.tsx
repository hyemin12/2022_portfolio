import TypeIt from "typeit-react";

import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import EventIcon from "@mui/icons-material/Event";
import NearMeIcon from "@mui/icons-material/NearMe";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import { useEffect } from "react";

function About() {
  const onScrollFadeIn = useScrollFadeIn();

  const info = [
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

  return (
    <div className="inner">
      <h1 className="section-title" id="aboutRef" {...onScrollFadeIn}>
        About Me
      </h1>
      <div className="about-info-wrapper">
        <div className="my-img">
          <img src="./assets/hyemin2.png" alt="혜민" />
        </div>

        <div className="typeit-wrapper">
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
        </div>
      </div>

      <div className="about-content">
        <ul className="tiles">
          {info.map((item) => (
            <li className="tile" key={item.text}>
              {item.icon}
              <p>{item.text}</p>
            </li>
          ))}
        </ul>

        <h1 className="section-title">기술스택</h1>
        <div className="skills">
          <div className="skill">
            <img
              src="https://img.shields.io/badge/Html5-orange?style=flat-square&logo=html5&logoColor=white"
              alt="html5"
            />
          </div>
          <div className="skill">
            <img
              src="https://img.shields.io/badge/CSS3-blue?style=flat-square&logo=css3&logoColor=white"
              alt="css3"
            />
          </div>
          <div className="skill">
            <img
              src="https://img.shields.io/badge/Javascript-FFCA28?style=flat-square&logo=javascript&logoColor=white"
              alt="javascript"
            />
          </div>
          <div className="skill">
            <img
              src="https://img.shields.io/badge/React-61dafb?style=flat-square&logo=React&logoColor=white"
              alt="react"
            />
          </div>
          <div className="skill">
            <img
              src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"
              alt="redux"
            />
          </div>
          <div className="skill">
            <img
              src="https://img.shields.io/badge/Git-181717?style=flat-square&logo=Git&logoColor=white"
              alt="Git"
            />
          </div>
          <div className="skill">
            <img
              src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"
              alt="Sass"
            />
          </div>
          <div className="skill">
            <img
              src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=Bootstrap&logoColor=white"
              alt="Bootstrap"
            />
          </div>
        </div>
        <p className="skill-subtitle">
          능숙하지는 않지만 사용한 경험이 있는 기술
        </p>
        <div className="skills">
          <div className="skill">
            <img
              src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"
              alt="typescript"
            />
          </div>
          <div className="skill">
            <img
              src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"
              alt="Node"
            />
          </div>

          <div className="skill">
            <img
              src="https://img.shields.io/badge/MongoDB-47A248e?style=flat-square&logo=MongoDB&logoColor=white"
              alt="MongoDB"
            />
          </div>
          <div className="skill">
            <img
              src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white"
              alt="Firebase"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
