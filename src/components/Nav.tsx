import { useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import useScrollMove from "../hooks/useScrollMove";

const Nav = () => {
  const [isActive, setIsActive] = useState("homeRef");

  const location = useLocation();
  const navData = [
    { name: "홈", ref: "homeRef" },
    { name: "고혜민", ref: "aboutRef" },
    { name: "개인 프로젝트", ref: "projectRef" },
    { name: "공부한내용", ref: "studyRef" },
    { name: "교육 및 기타이력", ref: "expRef" },
    { name: "셀프인터뷰", ref: "selfRef" },
  ];

  /** 클릭하면 해당 ref 값으로 이동하는 함수
   * e.preventDefault(); : 새로고침 막기
   */
  const handleActive = (ref: string, e: any) => {
    e.preventDefault();
    setIsActive(ref);
    document
      .getElementById(ref)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /** 스크롤하면 메뉴 active값 변경하는 hook  */
  useScrollMove(setIsActive);

  return (
    <>
      <ul className="navs">
        {navData.map((item, idx) =>
          location.pathname !== "/" ? (
            <NavLink to="/" key={item.name}>
              <p>{item.name}</p>
            </NavLink>
          ) : (
            <a
              href="#/"
              key={item.name}
              className={isActive === item.ref ? "active" : ""}
              onClick={(e) => {
                handleActive(item.ref, e);
              }}
            >
              <p>{item.name}</p>
            </a>
          )
        )}
      </ul>
    </>
  );
};
export default Nav;
