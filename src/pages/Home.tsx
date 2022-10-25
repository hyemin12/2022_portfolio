import { useSelector } from "react-redux";
import { RootState } from "../module";
import { StudyProps } from "../module/studies";

import Layout from "../components/Layout";
import Intro2 from "../components/Intro2";
import About from "../components/About";
import StudiesList from "../components/StudiesList";
import WorkList from "../components/WorkList";
import Interview from "../components/Interview";

const Home = () => {
  const state: StudyProps[] = useSelector((state: RootState) => state.studies);
  const studieState = state.slice(0, 6);
  return (
    <Layout>
      <Intro2 />
      <About />
      <WorkList />
      <StudiesList studieState={studieState} />
      <Interview />
    </Layout>
  );
};

export default Home;
