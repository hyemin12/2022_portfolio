import { ProjectProps } from "../../type";

function DetailHeader({ item }: { item: ProjectProps }) {
  const { filter, title, url, git, tools, describtion, features, id } = item;

  return (
    <div className="detail-header">
      <div className="img-wrapper">
        <img src={`../assets/${id}.png`} alt={title} />
      </div>
      <div>
        <h2 className="detail-title">{title}</h2>
        <span className="detail-filter">{filter}</span>
        <div className="detail-content-wrapper">
          <article>
            {describtion.map((a) => (
              <p key={a}>{a}</p>
            ))}
          </article>
          <article>
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
      </div>
    </div>
  );
}

export default DetailHeader;
