import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as pages from "./pages/index";
import { Navbar } from "./components";
import { Footer } from "./components";

// import { createBrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<pages.Home />} />
          <Route path="/team" element={<pages.Team />} />
          <Route path="/events" element={<pages.Events />} />
          <Route path="/events/Youth" element={<pages.Youth />} />
          <Route path="/events/Mockmun" element={<pages.Mockmun />} />
          <Route path="/events/Annual" element={<pages.Annual />} />
          <Route path="/contact" element={<pages.Contact />} />
          <Route path="/faqs" element={<pages.FaqSection />} />
          <Route path="/about" element={<pages.About />} />
          <Route path="/error" element={<pages.Error />} />
          <Route path="/gallery" element={<pages.Gallery />} />
          <Route path="/achievement" element={<pages.Achievement />} />
          <Route path="/register" element={<pages.Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
