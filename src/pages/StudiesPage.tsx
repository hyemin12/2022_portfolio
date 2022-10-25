import { useSelector } from "react-redux";
import { RootState } from "../module";
import { StudyProps } from "../module/studies";
import Layout from "../components/Layout";
import StudiesList from "../components/StudiesList";

function StudiesPage() {
  const studieState: StudyProps[] = useSelector(
    (state: RootState) => state.studies
  );
  return (
    <Layout>
      <StudiesList studieState={studieState} />
    </Layout>
  );
}

export default StudiesPage;
