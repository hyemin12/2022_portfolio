import TypeIt from "typeit-react";

import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import EventIcon from "@mui/icons-material/Event";
import NearMeIcon from "@mui/icons-material/NearMe";

function About() {
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
      <h1 className="section-title">About Me</h1>
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

      <div className="about-content">
        <ul className="tiles">
          {info.map((item) => (
            <li className="tile" key={item.text}>
              {item.icon}
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <h1 className="section-title">기술스택</h1>
      <div>Frontend</div>
    </div>
  );
}

export default About;
