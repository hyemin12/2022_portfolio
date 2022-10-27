import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Nav = () => {
  const [isActive, setIsActive] = useState(0);
  const location = useLocation();
  const navData = [
    { name: "홈", ref: "homeRef" },
    { name: "고혜민", ref: "aboutRef" },
    { name: "포트폴리오", ref: "projectRef" },
    { name: "공부한내용", ref: "studyRef" },
    { name: "교육 및 기타이력", ref: "expRef" },
    { name: "셀프인터뷰", ref: "selfRef" },
  ];
  const moveScroll = (value: string, idx: number) => {
    const location = document.getElementById(value).offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
    setIsActive(idx);
  };
  const handleActive = () => {
    const scrollLocation = window.pageYOffset;
  };
  useEffect(() => {
    window.addEventListener("scroll", handleActive);
    handleActive();
    return window.removeEventListener("scroll", handleActive);
  }, []);
  //
  return (
    <ul className="navs">
      {navData.map((item, idx) =>
        location.pathname !== "/" ? (
          <NavLink to="/" key={item.name}>
            <p>{item.name}</p>
          </NavLink>
        ) : (
          <Link
            to="/"
            key={item.name}
            className={idx === isActive ? "active" : ""}
            onClick={() => {
              moveScroll(item.ref, idx);
            }}
          >
            <p>{item.name}</p>
          </Link>
        )
      )}
    </ul>
  );
};
export default Nav;
