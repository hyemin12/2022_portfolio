import Section from "./Section";
import ProjectItem from "./ProjectItem";

import { data } from "../data";

function Project() {
  const state = data.projects;

  return (
    <Section title={"개인 프로젝트"} idProp={"project"}>
      <div className="work-wrapper">
        <ul className="works">
          {state &&
            state.map((project) => {
              return <ProjectItem {...project} key={project.id} />;
            })}
        </ul>
      </div>
    </Section>
  );
}
export default Project;
