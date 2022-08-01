import GitHubIcon from "@mui/icons-material/GitHub";
import BookIcon from "@mui/icons-material/Book";
import FeedIcon from "@mui/icons-material/Feed";

import Nav from "./Nav";
import styles from "./Header.module.css";
import classNames from "classnames";

const Header = () => {
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
    <>
      <div className={styles.line}></div>
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
    </>
  );
};
export default Header;
