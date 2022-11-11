import Layout from "../components/Layout";
import Intro from "../components/Intro";
import About from "../components/About";
import Studies from "../components/Studies";
import Project from "../components/Project";
import Interview from "../components/Interview";
import Experience from "../components/Experience";

import { data } from "../data";

const Home = () => {
  const state = data.studies.slice(0, 6);
  return (
    <div id="homeRef">
      <Layout>
        <Intro />

        <About />

        <Project />

        <Studies studiesState={state} />

        <Experience />

        <Interview />
      </Layout>
    </div>
  );
};

export default Home;
