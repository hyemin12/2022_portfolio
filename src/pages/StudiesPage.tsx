import { StudyProps } from "../type";
import Layout from "../components/Layout";
import StudiesList from "../components/Studies";
import { data } from "../data";

function StudiesPage() {
  const studieState: StudyProps[] = data.studies;
  return (
    <Layout>
      <StudiesList studiesState={studieState} />
    </Layout>
  );
}

export default StudiesPage;
