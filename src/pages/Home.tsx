import Typeit from "../components/Typeit";
import Layout from "../components/Layout";
import ProjectList from "../components/ProjectList";
import WorkList from "../components/WorkList";
import Intro from "../components/Intro";

const Home = () => {
  return (
    <Layout>
      <div></div>
      <Intro />
      <WorkList />
      <ProjectList />
    </Layout>
  );
};

export default Home;
