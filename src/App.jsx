import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as pages from "./pages/index";
import { Navbar } from "./components";

// import { createBrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<pages.Home />} />
          <Route path="/team" element={<pages.Team />} />
          <Route path="/Events" element={<pages.Events />} />
          <Route path="/Events/Youth" element={<pages.Youth />} />
          <Route path="/Events/Mockmun" element={<pages.Mockmun />} />
          <Route path="/Events/Annual" element={<pages.Annual />} />

          <Route path="/Events/Contact" element={<pages.Contact />} />
          <Route path="/Events/Faqs" element={<pages.FaqSection />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
