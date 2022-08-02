import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WorkTemplate from "./pages/WorkTemplate";
import ProfileTemplate from "./pages/ProfileTemplate";
import ProjectTemplate from "./pages/ProjectTemplate";
import DetailTemplate from "./pages/DetailTemplate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/works/:id" element={<DetailTemplate />}></Route>
          <Route path="/works" element={<ProjectTemplate />}></Route>
          <Route path="/portfolio/:id" element={<DetailTemplate />}></Route>
          <Route path="/portfolio" element={<WorkTemplate />}></Route>
          <Route path="/profile" element={<ProfileTemplate />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
