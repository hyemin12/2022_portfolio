import Intro from "../components/Intro";
import Layout from "../components/Layout";
import ProjectList from "../components/ProjectList";
import WorkList from "../components/WorkList";
import SlickSlider from "../components/SlickSlider";

import { data } from "../data";

import styles from "../css/Home.module.css";
import { ProjectProps, WorkProps } from "../type";
import classNames from "classnames";

const Home = () => {
  const projectArr: ProjectProps[] = data.projects;
  const workArr: WorkProps[] = data.works;

  return (
    <Layout>
      <Intro />
      {/* <div className={styles.inner}>
        <div className={styles.main_content}>
          <div className={styles.text_wrapper}>
            <h2>포트폴리오</h2>
            <p>설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
            <div>보러가기</div>
          </div>
          <div style={{ backgroundImage: `url('./assets/movie.png')` }}></div>
          <ul className={classNames(styles.main_images, "main_image")}>
            <SlickSlider>
              {workArr.map((a) => (
                <div className={styles.image}>
                  <img
                    src={`assets/${a.id}.png`}
                    alt={a.title}
                    className={styles.img}
                  />
                </div>
              ))}
            </SlickSlider>
          </ul>
        </div>
        <div className={styles.main_content}>
          <div className={styles.text_wrapper}>
            <h2>개인작업물</h2>
            <p>설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
          </div>

          <ul className={classNames(styles.main_images, "main_image")}>
            <SlickSlider>
              {projectArr.map((a) => (
                <div className={styles.image}>
                  <img
                    src={`assets/${a.id}.png`}
                    alt={a.title}
                    className={styles.img}
                  />
                </div>
              ))}
            </SlickSlider>
          </ul>
        </div>
      </div> */}
      <WorkList />
      <ProjectList />
    </Layout>
  );
};

export default Home;
