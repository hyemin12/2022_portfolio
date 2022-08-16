import Typeit from "../components/Typeit";
import Layout from "../components/Layout";
import ProjectList from "../components/ProjectList";
import WorkList from "../components/WorkList";

const Home = () => {
  return (
    <Layout>
      <Typeit />
      <WorkList />
      <ProjectList />
    </Layout>
  );
};

export default Home;
