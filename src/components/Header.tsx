import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";

import GitHubIcon from "@mui/icons-material/GitHub";
import BookIcon from "@mui/icons-material/Book";
import FeedIcon from "@mui/icons-material/Feed";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Nav from "./Nav";
import styles from "../css/Header.module.css";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 953 });
  const [isNav, setNav] = useState(false);

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
    <header>
      <div className={styles.line}></div>

      {isMobile ? (
        <div className={styles.nav_wrapper}>
          {isNav ? (
            <div>
              <CloseIcon
                className={styles.close_btn}
                onClick={() => {
                  setNav(false);
                }}
              />
              <div className={styles.mobile_nav}>
                <Nav />
                <ul className={styles.social}>
                  {socials.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.url}
                        target="_blank"
                        className={styles.social_icon}
                        rel="noreferrer"
                      >
                        {item.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <MenuIcon
              className={styles.toggle_btn}
              onClick={() => {
                setNav(true);
              }}
            />
          )}
          <div className={styles.logo}>
            <h2 className="font-point">hyemin</h2>
          </div>
        </div>
      ) : (
        <div className={classNames(styles.nav_wrapper, "w1200")}>
          <Nav />
          <div className={styles.logo}>
            <h2 className="font-point">hyemin</h2>
          </div>
          <ul className={styles.social}>
            {socials.map((item) => (
              <li key={item.name}>
                <a
                  href={item.url}
                  target="_blank"
                  className={styles.social_icon}
                  rel="noreferrer"
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
export default Header;
