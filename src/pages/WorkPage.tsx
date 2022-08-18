import React, { useState } from "react";

import Layout from "../components/Layout";
import WorkDetail2 from "../components/WorkDetail2";
import WorkList from "../components/WorkList";

function WorkTemplate() {
  const [isPopup, setIsPopup] = useState(false);
  return (
    <Layout>
      <WorkList setIsPopup={setIsPopup} />
      {isPopup && <WorkDetail2 />}
    </Layout>
  );
}
export default WorkTemplate;
