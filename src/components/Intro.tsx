import GitHubIcon from "@mui/icons-material/GitHub";
import BookIcon from "@mui/icons-material/Book";

import TypeIt from "typeit-react";

function Intro2() {
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
  ];

  const moveBottom = (e: any) => {
    e.preventDefault();
    document.getElementById("aboutRef").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="intro-wrapper sectionRef"
      style={{ backgroundImage: `url(${"./assets/hyemin.webp"})` }}
      id="homeRef"
    >
      <div className="intro-contents">
        <h1 className="intro-title">고혜민</h1>
        <div>
          <TypeIt>성실함을 바탕으로 성장하는 개발자 고혜민입니다.</TypeIt>
        </div>
        <ul className="socail-wrapper">
          {socials.map((item) => (
            <li key={item.name}>
              <a
                href={item.url}
                target="_blank"
                className="social-icon"
                rel="noreferrer"
                aria-label={`${item.name}이동`}
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#/"
          className="btn_route"
          onClick={(e) => {
            moveBottom(e);
          }}
        >
          보러가기
        </a>

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
