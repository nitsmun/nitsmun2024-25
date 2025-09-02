import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as pages from "./pages/index";
import { Navbar } from "./components";
import { Footer } from "./components";
import ScrollToTop from "./components/Scrolltotop";

// import { createBrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<pages.Home />} />
          <Route path="/team" element={<pages.Team />} />
          <Route path="/events" element={<pages.Events />} />
          <Route path="/events/youth" element={<pages.Youth />} />
          <Route path="/events/mockmun" element={<pages.Mockmun />} />
          <Route path="/events/annual" element={<pages.Annual />} />
          <Route path="/contact" element={<pages.Contact />} />
          <Route path="/faqs" element={<pages.FaqSection />} />
          <Route path="/about" element={<pages.About />} />
          <Route path="/error" element={<pages.Error />} />
          <Route path="/achievement" element={<pages.Achievement />} />
          <Route path="/register" element={<pages.Register />} />
          <Route path="/gallery" element={<pages.Gallery />} />
          <Route path="/blog" element={<pages.Blog />} />
          <Route path="/blog/1" element={<pages.Blog1 />} />
          <Route path="/blog/2" element={<pages.Blog2 />} />
          <Route path="/blog/3" element={<pages.Blog3 />} />
          <Route path="/blog/4" element={<pages.Blog4 />} />
          <Route path="/blog/5" element={<pages.Blog5 />} />

          <Route
            path="/successfull"
            element={<pages.ApplicationSuccessfull />}
          />
          <Route path="/admin" element={<pages.AdminPanel />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
