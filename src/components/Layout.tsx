import Loading from "./Loading";
import Header from "./Header";
import { useEffect, useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [hidden, setHidden] = useState<boolean>(true);

  function handleScroll() {
    if (scrollY < 720) {
      setScrollY(window.pageYOffset);
      setHidden(true);
    } else {
      setScrollY(window.pageYOffset);
      setHidden(false);
    }
  }
  function movetoTop() {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }
  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    }
    scrollListener();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hidden]);
  return (
    <div className="layout-container">
      <Header />

      <div className="container">
        <div>{children}</div>

        <div
          className={"btn_top" + (hidden ? " hidden" : "")}
          onClick={movetoTop}
        >
          <p>↑ </p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
