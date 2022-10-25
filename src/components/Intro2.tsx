import { useLocation } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import BookIcon from "@mui/icons-material/Book";
import FeedIcon from "@mui/icons-material/Feed";

import TypeIt from "typeit-react";

function Intro2() {
  const location = useLocation();
  const pathname = location.pathname;

  const socials = [
    {
      name: "깃허브",
      url: "https://github.com/hyemin12",
      icon: <GitHubIcon />,
    },
    {
      name: "블로그",
      url: "https://hyemin-12.tistory.com/",
      icon: <BookIcon />,
    },
    {
      name: "이력서",
      url: "https://hyemin12.github.io/hm_resume/",
      icon: <FeedIcon />,
    },
  ];

  return (
    <div
      className="intro-wrapper"
      style={{ backgroundImage: `url(${"./assets/hyemin.jpg"})` }}
    >
      <div className="intro-contents">
        <div>
          <img src="" alt="혜민" />
          <h1>고혜민</h1>
        </div>
        <TypeIt />
        <ul className="socail-wrapper">
          {socials.map((item) => (
            <li key={item.name}>
              <a
                href={item.url}
                target="_blank"
                className="social-icon"
                rel="noreferrer"
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
        <button className="btn-link">
          <a href="">이력서보기</a>
        </button>
        <div className="btn-scroll">
          <span>Scroll Down</span>
          <div className="mouse">
            <span className="wheel"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Intro2;
