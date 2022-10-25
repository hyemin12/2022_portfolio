import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound">
      <div>
        <h1>😥</h1>
        <h1>잘못된 경로입니다.</h1>
        <Link to="/">홈화면으로 돌아가기</Link>
      </div>
    </div>
  );
}
export default NotFound;
