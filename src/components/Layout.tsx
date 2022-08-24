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
        <>
          <Header />
          <div>{props.children}</div>

          <div className="btn_top" onClick={movetoTop}>
            <p>↑ Back to Top</p>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
