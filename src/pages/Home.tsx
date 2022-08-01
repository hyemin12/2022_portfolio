import React from "react";
import Layout from "../components/Layout";
import WorkList from "../components/WorkList";

const Home = () => {
  return (
    <Layout>
      <p className="main_text">
        안녕하세요. 프론트엔드 개발자 고혜민입니다.안녕하세요. 프론트엔드 개발자
        고혜민입니다.안녕하세요. 프론트엔드 개발자 고혜민입니다.안녕하세요.
        프론트엔드 개발자 고혜민입니다.
      </p>
      <WorkList />
    </Layout>
  );
};

export default Home;
