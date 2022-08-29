import { data } from "../data";

import Intro from "../components/Intro";
import Layout from "../components/Layout";
import ProjectList from "../components/ProjectList";
import WorkList from "../components/WorkList";

const Home = () => {
  const state = data.projects;
  const projectData = state.slice(0, 3);
  return (
    <Layout>
      <Intro />
      <WorkList />
      {projectData && <ProjectList {...projectData} />}
    </Layout>
  );
};

export default Home;
