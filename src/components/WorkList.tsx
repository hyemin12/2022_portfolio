import { useSelector } from "react-redux";

import WorkItem from "../components/WorkItem";

import { RootState } from "../module/";
import { WorkProps } from "../module/projects";

function WorkList() {
  const state: WorkProps[] = useSelector((state: RootState) => state.projects);
  return (
    <div className="inner work-wrapper">
      <h1 className="section-title" id="projectRef">
        포트폴리오
      </h1>

      <ul className="works">
        {state &&
          state.map((work) => {
            return <WorkItem {...work} key={work.id} />;
          })}
      </ul>
    </div>
  );
}
export default WorkList;
