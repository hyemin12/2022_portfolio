import { data } from "../data";

import Layout from "../components/Layout";
import ProjectList from "../components/ProjectList";

function PortfolioPage() {
  const projectData = data.projects;
  return (
    <Layout>
      <ProjectList {...projectData} />
    </Layout>
  );
}

export default PortfolioPage;
