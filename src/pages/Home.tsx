import { useSelector } from "react-redux";
import { RootState } from "../module";
import { StudyProps } from "../module/studies";

import Layout from "../components/Layout";
import Intro2 from "../components/Intro2";
import About from "../components/About";
import StudiesList from "../components/StudiesList";
import WorkList from "../components/WorkList";
import Interview from "../components/Interview";
import Experience from "../components/Experience";

const Home = () => {
  const state: StudyProps[] = useSelector((state: RootState) => state.studies);
  const studieState = state.slice(0, 6);
  return (
    <div id="homeRef">
      <Layout>
        <Intro2 />
        <About />
        <WorkList />
        <StudiesList studieState={studieState} />
        <Experience />
        <Interview />
      </Layout>
    </div>
  );
};

export default Home;
