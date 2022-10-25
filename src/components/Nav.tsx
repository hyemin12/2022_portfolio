import { NavLink } from "react-router-dom";

const Nav = () => {
  const navData = [
    { name: "홈", path: "/" },
    { name: "고혜민", path: "/profile" },
    { name: "포트폴리오", path: "/portfolio" },
    { name: "공부한내용", path: "/works" },
    { name: "셀프인터뷰", path: "/works" },
  ];
  return (
    <ul className="navs">
      {navData.map((item) => (
        <NavLink
          end
          to={item.path}
          key={item.name}
          className={({ isActive }) => (isActive ? "active " : "") + "nav_item"}
        >
          <p className="">{item.name}</p>
        </NavLink>
      ))}
    </ul>
  );
};
export default Nav;
