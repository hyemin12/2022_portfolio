import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

import GitHubIcon from "@mui/icons-material/GitHub";
import BookIcon from "@mui/icons-material/Book";
import FeedIcon from "@mui/icons-material/Feed";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Nav from "./Nav";

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
      {/* {isMobile ? (
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
      ) : ( */}
      <div className="nav-wrapper w1200">
        <div className="logo">
          <h2 className="font-point">hyemin</h2>
        </div>
        <Nav />

        <span className="copyright">
          Copyright &#169; {new Date().getFullYear()} Hyemin.
        </span>
      </div>
      {/* )} */}
    </header>
  );
};
export default Header;
