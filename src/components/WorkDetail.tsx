import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../module/";
import { WorkProps } from "../module/projects";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import Slide from "./Slide";

function WorkDetail() {
  const state: WorkProps[] = useSelector((state: RootState) => state.projects);
  const { itemId } = useParams();

  const item: WorkProps = state.filter((a) => a.id === itemId)[0];

  const { id, filter, title, imgs, describtion, git, url, tools, features } =
    item;
  /* 뒤로가기 */
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }
  return (
    <>
      <div className="inner work-detail-wrapper">
        <div className="btn_back" onClick={goBack}>
          <ArrowBackIosIcon />
          뒤로가기
        </div>
        <div className="detail-wrapper">
          <div className="detail-slide">
            <Slide>
              {imgs.map((img) => (
                <div className="detail-img" key={img}>
                  <img src={`../assets/${img}`} alt={title} />
                </div>
              ))}
            </Slide>
          </div>
          <div>
            <div className="detail-header">
              <span className="detail-filter">{filter}</span>
              <h2 className="detail-title">{title}</h2>
              <div className="btn-group">
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-link-url"
                >
                  사이트로 이동
                </a>
                <a
                  href={git}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-link-git"
                >
                  코드 보러가기
                </a>
              </div>
            </div>
            <div className="detail-content-wrapper">
              <article>
                {describtion.map((a) => (
                  <p key={a}>{a}</p>
                ))}
              </article>
              <article>
                <h3>맡은 업무</h3>
                {features.map((feature) => (
                  <p key={feature}>{feature}</p>
                ))}
              </article>

              <article>
                <h3>package</h3>
                <div className="tools">
                  {tools.map((tool) => (
                    <p className="tool" key={tool}>
                      {tool}
                    </p>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkDetail;
