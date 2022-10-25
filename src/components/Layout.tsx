import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import Header from "./Header";
import Footer from "./Footer";
import "../css/Layout.css";

const Layout = (props: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  function movetoTop() {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="layout-container">
          <Header />

          <div className="container">
            <div>{props.children}</div>

            <div className="btn_top" onClick={movetoTop}>
              <p>↑ 맨 위로 올라가기</p>
            </div>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
