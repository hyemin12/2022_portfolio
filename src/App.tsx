import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WorkPage from "./pages/WorkPage";
import ProfilePage from "./pages/ProfilePage";
import ProjectPage from "./pages/ProjectPage";
import DetailPage from "./pages/DetailPage";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/works/:id" element={<DetailPage />}></Route>
          <Route path="/works" element={<ProjectPage />}></Route>
          <Route path="/portfolio/:id" element={<DetailPage />}></Route>
          <Route path="/portfolio" element={<WorkPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
