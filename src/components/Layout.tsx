import React from "react";
import { useMediaQuery } from "react-responsive";
import Footer from "./Footer";
import Header from "./Header";
import "./Layout.css";

const Layout = (props: { children: React.ReactNode }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  function movetoTop() {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className={isDesktop ? "pc_container" : "mobile_container"}>
      <Header />
      <div>{props.children}</div>

      <div className="btn_top" onClick={movetoTop}>
        <p>↑ Back to Top</p>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
