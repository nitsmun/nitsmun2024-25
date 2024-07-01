import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as pages from "./pages/index";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<pages.Home />} />
          <Route path="/team" element={<pages.Team />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
