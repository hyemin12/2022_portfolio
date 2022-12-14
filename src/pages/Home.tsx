import { useEffect, useState } from "react";

import Loading from "../components/Loading";
import Layout from "../components/Layout";
import Intro from "../components/Intro";
import About from "../components/About";
import Studies from "../components/Studies";
import Project from "../components/Project";
import Interview from "../components/Interview";
import Experience from "../components/Experience";

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleDelay = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(handleDelay);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Layout>
          <Intro />

          <About />

          <Project />

          <Studies />

          <Experience />

          <Interview />
        </Layout>
      )}
    </div>
  );
};

export default Home;
