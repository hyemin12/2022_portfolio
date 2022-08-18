import Typeit from "../components/Typeit";
import Layout from "../components/Layout";
import ProjectList from "../components/ProjectList";
import WorkList from "../components/WorkList";
import Intro from "../components/Intro";
import { useState } from "react";

const Home = () => {
  const [isPopup, setIsPopup] = useState(false);
  return (
    <Layout>
      <Intro />
      <WorkList setIsPopup={setIsPopup} />
      <ProjectList setIsPopup={setIsPopup} />
    </Layout>
  );
};

export default Home;
