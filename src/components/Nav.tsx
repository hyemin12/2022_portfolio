import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll";

const Nav = () => {
  const location = useLocation();
  const navData = [
    { name: "홈", ref: "homeRef" },
    { name: "고혜민", ref: "aboutRef" },
    { name: "포트폴리오", ref: "projectRef" },
    { name: "공부한내용", ref: "studyRef" },
    { name: "교육 및 기타이력", ref: "expRef" },
    { name: "셀프인터뷰", ref: "selfRef" },
  ];
  return (
    <ul className="navs">
      {navData.map((item) =>
        location.pathname !== "/" ? (
          <NavLink to="/" key={item.name}>
            <p>{item.name}</p>
          </NavLink>
        ) : (
          <Link to={item.ref} key={item.name} smooth={true}>
            <p>{item.name}</p>
          </Link>
        )
      )}
    </ul>
  );
};
export default Nav;
