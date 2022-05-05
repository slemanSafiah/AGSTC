import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Questionnaire from "./pages/Questionnaire";
import Services from "./pages/Services";
import Service from "./pages/Service";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:slug" element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
