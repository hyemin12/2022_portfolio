import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound">
      <div>
        <h1>π₯</h1>
        <h1>μλͺ»λ κ²½λ‘μλλ€.</h1>
        <Link to="/">ννλ©΄μΌλ‘ λμκ°κΈ°</Link>
      </div>
    </div>
  );
}
export default NotFound;
