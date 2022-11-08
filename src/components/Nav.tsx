import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Nav = () => {
  const [isActive, setIsActive] = useState(0);
  const [scrollY, setScrollY] = useState(0);
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

  /** scroll 하면 isActive 바꾸는 함수 */
  const handleActive = () => {
    /** 데이터 ref의 윈도우 높이값 배열 */
    var areaArr: any = [...navData].map(
      (data) => document.getElementById(data.ref).offsetTop
    );
    if (window.pageYOffset !== null) {
      setScrollY(window.pageYOffset);
      if (scrollY < areaArr[0]) {
        setIsActive(0);
      } else if (areaArr[0] < scrollY && scrollY < areaArr[1]) {
        setIsActive(1);
      } else if (areaArr[1] < scrollY && scrollY < areaArr[2]) {
        setIsActive(2);
      } else if (areaArr[2] < scrollY && scrollY < areaArr[3]) {
        setIsActive(3);
      } else if (areaArr[3] < scrollY && scrollY < areaArr[4]) {
        setIsActive(4);
      } else if (areaArr[4] < scrollY && scrollY < areaArr[5]) {
        setIsActive(5);
      } else if (areaArr[5] < scrollY && scrollY < areaArr[6]) {
        setIsActive(6);
      }
    }
  };

  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleActive);
    }
    scrollListener();
    return () => {
      window.removeEventListener("scroll", handleActive);
    };
  });

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
