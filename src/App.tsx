import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import StudiesPage from "./pages/StudiesPage";
import NotFound from "./pages/NotFound";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/studies" element={<StudiesPage />}></Route>
          <Route path="/portfolio/:itemId" element={<DetailPage />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
