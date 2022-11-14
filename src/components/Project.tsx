import Section from "./Section";
import ProjectItem from "./ProjectItem";

import { data } from "../data";
import { ProjectProps } from "../type";

function Project() {
  const state: ProjectProps[] = data.projects;

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
