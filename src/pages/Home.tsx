import Intro from "../components/Intro";
import Layout from "../components/Layout";
import ProjectList from "../components/ProjectList";
import WorkList from "../components/WorkList";

const Home = () => {
  return (
    <Layout>
      <Intro />
      <WorkList />
      <ProjectList />
    </Layout>
  );
};

export default Home;
