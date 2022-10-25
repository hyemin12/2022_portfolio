import { Link } from "react-router-dom";

import { WorkProps } from "../module/projects";

const WorkItem = (work: WorkProps) => {
  const { id, title, bgColor, filter, url } = work;
  return (
    <>
      <li
        key={id}
        className="work-item"
        style={{ backgroundColor: `${bgColor}` }}
      >
        <div className="img-wrapper">
          <img src={`/assets/${id}.png`} alt={title} />
        </div>
        <div className="item-text-wrapper">
          <h2 className="work-title">{title}</h2>
          <p className="work-filter">{filter}</p>
        </div>
        <div className="btn-wrapper">
          <Link to={`/portfolio/${id}`}>
            <p className="btn_link">상세보기</p>
          </Link>
          <a href={url} target="_blank" rel="noreferrer">
            <p className="btn_link">사이트로 이동</p>
          </a>
        </div>
      </li>
    </>
  );
};

export default WorkItem;
