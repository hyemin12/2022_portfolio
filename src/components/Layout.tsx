import Loading from "./Loading";
import Header from "./Header";

const Layout = (props: { children: React.ReactNode }) => {
  function movetoTop() {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className="layout-container">
      <Header />

      <div className="container">
        <div>{props.children}</div>

        <div className="btn_top" onClick={movetoTop}>
          <p>↑ </p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
