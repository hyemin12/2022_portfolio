import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import "./Layout.css";

const Layout = (props: { children: React.ReactNode }) => {
  function movetoTop() {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div>
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
