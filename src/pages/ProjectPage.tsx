import React, { useState } from "react";
import Layout from "../components/Layout";
import ProjectList from "../components/ProjectList";
import WorkDetail2 from "../components/WorkDetail2";

function PortfolioTemplate() {
  const [isPopup, setIsPopup] = useState(false);
  return (
    <Layout>
      <ProjectList setIsPopup={setIsPopup} />
      {isPopup && <WorkDetail2 />}
    </Layout>
  );
}

export default PortfolioTemplate;
