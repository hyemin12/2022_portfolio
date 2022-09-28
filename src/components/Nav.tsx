import { NavLink } from "react-router-dom";
import styles from "../css/Header.module.css";

const Nav = () => {
  const navData = [
    { name: "홈", path: "/" },
    { name: "고혜민", path: "/profile" },
    { name: "포트폴리오", path: "/portfolio" },
    { name: "개인작업물", path: "/works" },
  ];
  return (
    <ul className={styles.nav}>
      {navData.map((item) => (
        <NavLink
          end
          to={item.path}
          key={item.name}
          className={({ isActive }) =>
            (isActive ? "active " : "") + styles.nav_item
          }
        >
          <p className="">{item.name}</p>
        </NavLink>
      ))}
    </ul>
  );
};
export default Nav;
