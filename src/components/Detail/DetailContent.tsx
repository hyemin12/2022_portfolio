import { useLocation } from "react-router-dom";

interface ContentProp {
  tabContent: string[];
  idx: number;
  id: string;
}
function DetailContent({ tabContent, idx, id }: ContentProp) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <div
        className={
          pathname === "/portfolio/dashboard"
            ? "tab-content block"
            : "tab-content"
        }
      >
        <div className="img-wrapper">
          <img src={`../assets/${id}${idx}.png`} alt="movie" />
        </div>

        <ul className="tab-contents">
          {tabContent.map((content) => (
            <li key={content}>{content}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default DetailContent;
