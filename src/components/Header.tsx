import Nav from "./Nav";

function Header() {
  return (
    <header>
      <div className="nav-wrapper w1200">
        <div className="logo">
          <h2 className="font-point">hyemin</h2>
        </div>
        <Nav />

        <span className="copyright">
          Copyright &#169; {new Date().getFullYear()} Hyemin.
        </span>
      </div>
    </header>
  );
}
export default Header;
